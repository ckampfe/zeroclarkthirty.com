---
layout: post
title: Know your input - optimizing large JSON processing
created: 2021-11-24
---

Recently, I was doing a little work on one of my programs, [jindex](https://github.com/ckampfe/jindex), and learned a bit about properly sizing datastructures for the data they will actually hold.

## A bit of background

jindex is a small library and binary that enumerates the possible paths through a JSON document.
For example, given this JSON document:

```json
{
  "a": 1,
  "b": 2,
  "c": ["x", "y", "z"],
  "d": {"e": {"f": [{}, 9, "g"]}}
}
```

jindex emits:

```
json = {};
json.d = {};
json.d.e = {};
json.d.e.f = [];
json.d.e.f[2] = "g";
json.d.e.f[1] = 9;
json.d.e.f[0] = {};
json.c = [];
json.c[2] = "z";
json.c[1] = "y";
json.c[0] = "x";
json.b = 2;
json.a = 1;
```

For any given value in a JSON document, jindex says "here is how you get to that value".

(You can also emit the paths as [JSON pointers](https://datatracker.ietf.org/doc/html/rfc6901).)

I've been working on jindex for a couple years. It started in response to a problem I had at work - we were processing JSON payloads representing machine telemetry data that were so large that they were impossible to understand just by looking at them in an editor - and continued on as a project to better understand Rust, optimization, memory, etc.

A big theme of my work on jindex has been that it has to be fast, or it isn't useful to me (or anyone else), so to that end, I've spent a lot of time tinkering with its performance and trying to understand why it performs the way it does. It has gotten much faster over the years as I have learned more, and I continue to look for new ways to make it faster still.

## A weird cliff

Recently I was tinkering with jindex, and I noticed a new quirk with the size of allocations.
jindex calls the leaves of a JSON document "values" and calls the way you reach those values "paths".
So the composite is called a "pathvalue".
For example, `json.b = 2` is a pathvalue, with `b` as the path and `2` as the value.

In Rust, it looks like this:

```rust
pub struct PathValue<'a> {
    pub value: &'a serde_json::Value,
    pub path_components: Vec<PathComponent<'a>>,
}
```

`path_components` is a vector that is dynamically sized. That is, we do not know its size in advance. Its size is linear with the depth of a given value inside the source JSON document. So, for the above example, `json.b = 2`, it would be a `Vec` of length `1`, but if a value were 99 levels deep in a document, it would be a `Vec` of length `99`.

I was messing around with preallocating the `path_components` vector by calling `Vec::with_capacity` rather than `vec![]` (which does not allocate until you push a value into it), and passing successively larger values to `with_capacity`, i.e.: starting capacities of 1, 2, 3, 4, 5, etc.

For my usual test input data (a [~200MB JSON document](https://github.com/zemirco/sf-city-lots-json)), I noticed a speedup when the starting vector size was set to 6. The runtime continued to be faster with size 7, 8, 9, and 10, before returning to the normal runtime with size 11.

As you can see below, it's a bit of a weird "cliff" type of behavior, taking only 84% of the normal runtime (about a 300-400ms speedup) when the starting vector size goes from 5 to 7.

<iframe width="790" height="489" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQnN533ihu7dRzlX7T5fFRMqXljzyoRUW4BBl6ZwP0jlx5HU4OB8xJqkTUr4p4_6KZxQl682HUcw38l/pubchart?oid=1676865635&amp;format=interactive"></iframe>

## Why

These results surprised me. 

When your program runs in ~2 seconds on a ~200MB input, a 300-400ms speedup is pretty notable, so I wanted to dig further.

Why should it matter if the starting allocation size is 5 or 6 or 7? Why would that result in a faster runtime? So I measured the size of the paths throughout the input JSON, and found that any given value in the input is slightly more than 6 levels deep, on average. But Rust - the language jindex is written in - does not know this. 

In Rust, vectors start with a size of zero, and their capacity doubles when they need to reallocate more space. Note that this strategy is not officially guaranteed, as Rust only guarantees that pushes to vectors take amortized `O(1)` time, but the strategy is known [via the implementation itself](https://github.com/rust-lang/rust/pull/72227).

So, because the average value depth is just slightly larger than 6 in this input document, and by starting the `path_components` with a size of between 6-10, jindex was able to avoid *a ton* of allocations by avoiding the need to resize vectors as they grew from 0 to 1 to 2 to 3 to 4 paths and so on.

This ended up being beneficial to runtime because allocating memory is not free in terms of wall-clock time, and can really add up if you do it a lot. It takes time for the language runtime and kernel to do their dance to find free space to claim for your requested memory allocation.

## Resulting changes

The above result was a cool discovery, but it wasn't immediately generalizable. I can't set the starting capacity of the `path_components` vector to some magic number like `7` and call it good, because `path_components` depends on the path depth of the input! If we were given a JSON document that was just one huge, flat object with millions of keys that were all strings, numbers, booleans, or null, the average path depth would be `1`, and jindex would give each of these paths a vector of size `7` only to use a single slot of that `7`-length vector, wasting a ton of memory.

Conversely, if the document was a series of huge, nested objects 25 levels deep, then setting the starting capacity of `path_components` to 7 would leave us exactly back where we started, relying on Rust to adjust the allocated capacity of our vectors as they progressively overflowed as the objects got deeper.

So, what I ended up doing was to implement a dumb dynamic sizing strategy. 

Instead of starting all `path_components` vectors at size `0` and letting Rust gradually resize them, causing reallocations, I had jindex keep a running average of the actual size of the `path_components` vectors it has already processed, and initialize vectors with a size of whatever that running average happens to be, rounded up to the next highest whole number. 

So, over the runtime of a given invocation of `jindex` on a given input document, the starting capacity of all `path_components` vectors will trend toward whatever the actual average size of `path_components` vectors happens to be, meaning that `jindex` will progressively adjust the size of the initial `path_components` allocation in order to better match the size of the input data.

The overhead of this calculation is low, amounting to 3 integer additions and 1 integer division on machine-sized integers per `PathValue`, which is more than made up for by the number of memory allocations saved on large documents.

## Takeaways

This was a fun one! I learned more about how knowing more about your input data can help guide your programs to make smarter, more mechanically-sympathetic assumptions about what kind of work is worth doing, and got a double-digit percentage speedup for jindex in the process.

---

## Try jindex


If you want to try jindex yourself, you can install it like so:

Latest stable release from crates.io:

```
$ cargo install jindex
```

Latest unstable (HEAD) release from source:

```
$ cargo install --git https://github.com/ckampfe/jindex
```
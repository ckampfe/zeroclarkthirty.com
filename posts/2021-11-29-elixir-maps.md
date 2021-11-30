---
layout: post
title: Faster Elixir map datastructure creation
created: 2021-11-29
---

Elixir and Erlang share a great [map](https://hexdocs.pm/elixir/1.12/Map.html) datastructure.
It's an associative datastructure of keys and values.
It looks like this:

```elixir
%{a: 1, b: true, c: [821.99]}
```

Sometimes you'll want to create a map from another collection of things.
One common way to do this would be like so, building up the map one key-value pair at a time,
using `Enum.reduce`.

```elixir
kvs = [{"a", 5}, {"x", 9194}, ...]
Enum.reduce(kvs, %{}, fn {k, v}, acc -> Map.put(acc, k, v) end)
```

There are other ways to do this in Elixir.
Using the following code, we build a list of key value pairs, and then pass them to
the Erlang function `:maps.from_list`, which converts the list to a map.

```elixir
# imagine we didn't build this input list ourselves, as is possible in real-world code
kvs = [{"a", 5}, {"x", 9194}, ...]
Enum.reduce(kvs, [], fn pair, acc -> [pair | acc] end) |> :maps.from_list()
```

Another common way is to use `Enum.into`, which is designed specifically to convert one collection into another.
It looks like this:

```elixir
kvs = [{"a", 5}, {"x", 9194}, ...]
Enum.into(kvs, %{})
```

So which to use? I recommend using `Enum.into`, for a few reasons.
The first of which is that, in its 2-arity form, it's less powerful. It does a collection to collection
translation (say, list to map) and nothing else. There is also a 3-arity form that allows you to pass a function
that serves as a mapper, transforming each input element before inserting it into the map, giving the same transformation power as both `Enum.reduce` versions above.

The second reason is performance.  I did some simple benchmarking and found that on larger inputs (>=10,000 pairs), of the three variations (`reduce/map`, `reduce/list`, and `Enum.into`), `reduce/list` and `Enum/into` are between 2x and 2.5x faster than calling `Map.put` in a `reduce` loop.

Digging deeper, I checked out the `Enum.into` [source code](https://github.com/elixir-lang/elixir/blob/a64d42f5d3cb6c32752af9d3312897e8cd5bb7ec/lib/elixir/lib/enum.ex#L1437-L1438), and the reason `Enum.into` is faster is because it actually calls `:maps.from_list` if it can determine that the target collection is a map!

So, I recommend using `Enum.into`: its API is simpler for simple cases, powerful enough for those you need to transform, and automatically specializes to use fast Erlang built-in functions (written in C, rather than Erlang or Elixir) when it determines that it can.

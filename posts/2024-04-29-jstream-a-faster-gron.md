---
layout: post
title: jstream: a faster, extensible gron
created: 2024-04-29
---

[gron](https://github.com/tomnomnom/gron) is a popular tool for viewing the structure of large JSON documents. It works by traversing the JSON document and outputting a combination of a given JSON value and the path in the document that points to that value.

From gron's readme:

```
▶ gron testdata/two.json 
json = {};
json.contact = {};
json.contact.email = "mail@tomnomnom.com";
json.contact.twitter = "@TomNomNom";
json.github = "https://github.com/tomnomnom/";
json.likes = [];
json.likes[0] = "code";
json.likes[1] = "cheese";
json.likes[2] = "meat";
json.name = "Tom";
```

`gron` is a great idea for a tool whose main implementation is lacking in a few respects, which I've tried to remedy a few times. My first attempt was [jindex](https://github.com/ckampfe/jindex), which actually works fine, with the exception of two main flaws: it keeps the entire parsed JSON document in memory for the duration of the program, and it makes a ton of tiny allocations (on the order of 1 per path). This means jindex, when run on large documents, has a large memory overhead, and its propensity for allocation slows execution.

[jstream](https://github.com/ckampfe/jstream) is my attempt solve these issues, to improve on both `gron` and `jindex`.

`jstream` does the same as both, in this case emitting JSON paths rather than Javascript accessors:

```
$ echo '{
  "a": 1,
  "b": 2,
  "c": ["x", "y", "z"],
  "d": {"e": {"f": [{}, 9, "g"]}}
}' | jstream    
/a      1
/b      2
/c/0    "x"
/c/1    "y"
/c/2    "z"
/d/e/f/1        9
/d/e/f/2        "g"
```

`jstream` uses a different architecture than both `gron` and `jindex`. It uses a streaming JSON parser, namely the [aws-smithy-json](https://crates.io/crates/aws-smithy-json) library. This addresses the deficiencies of `jindex` by reading the JSON document incrementally, and only loading and emitting paths as it traverses them. It also avoids allocating for every path by reusing a single `Vec` through the entire life of the program.

Because of this architecture, `jstream` has a dramatically lower memory overhead than `jindex` (I don't know about `gron`'s memory usage; I have not benchmarked it for memory). On a ~180MB document (`citylots.json`), `jstream` uses only about 1.8MB more memory than the document itself (191,725,568 bytes maximum resident set size vs. 189,778,220 bytes document size). For comparison, `jindex` uses 1,139,638,272 bytes maximum resident set size, or ~1087MB.

`jstream` is also faster than both `jindex` and significantly faster than `gron`.

Running against another large-ish document (32MB) generated with the Python script [here](https://github.com/tomnomnom/gron/issues/21), the results look like this for `gron` (version 0.7.1 from homebrew, both sorted), `jindex`, and `jstream`:


```
$ hyperfine -w3 -r9 --output=null "gron big.json"
Benchmark 1: gron big.json
  Time (mean ± σ):      7.723 s ±  0.043 s    [User: 9.490 s, System: 1.437 s]
  Range (min … max):    7.663 s …  7.782 s    9 runs

$ hyperfine -w3 -r9 --output=null "gron --no-sort big.json"
Benchmark 1: gron --no-sort big.json
  Time (mean ± σ):      4.336 s ±  0.023 s    [User: 6.135 s, System: 1.427 s]
  Range (min … max):    4.301 s …  4.369 s    9 runs

$ hyperfine -w3 -r9 --output=null "jindex big.json"
Benchmark 1: jindex big.json
  Time (mean ± σ):     483.6 ms ±   4.4 ms    [User: 365.2 ms, System: 93.2 ms]
  Range (min … max):   477.9 ms … 489.9 ms    9 runs


$ hyperfine -w3 -r9 --output=null "jstream big.json"
Benchmark 1: jstream big.json
  Time (mean ± σ):     153.2 ms ±   0.5 ms    [User: 142.2 ms, System: 6.8 ms]
  Range (min … max):   152.5 ms … 154.1 ms    9 runs
```

`jstream` is also extensible. The current implementation outputs JSON paths by default (like the example above), but `jstream` can emit any path formatting you like, even like `gron`. You only have to implement one method on one trait to tell `jstream` how to print a given path and value combination:

```
pub trait PathValueWriter {
    fn write_path_and_value(&mut self, path: Path, value: JsonAtom) -> std::io::Result<()>;
}
```

You can get `jstream` [here](https://github.com/ckampfe/jstream).

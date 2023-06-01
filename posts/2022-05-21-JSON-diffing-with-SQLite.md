---
layout: post
title: JSON diffing with SQLite
created: 2022-05-21
---

(Note: see the bottom of this post for the code and example data)

I wrote a small SQL script using [SQLite](https://www.sqlite.org/index.html) that
is capable of comparing a collection of JSON objects and rendering their
differences as a SQL result set.

It is capable of detecting and reporting additions (`{"a": 1} -> {"a": 1, "b": 2}`),
deletions (`{"a": 1, "b": 2} -> {"a": 1}`), and mutations (`{"a": 1} -> {"a": 99}`).

There are [other ways to do this](https://stackoverflow.com/questions/31930041/using-jq-or-alternative-command-line-tools-to-compare-json-files), but:
1. I have a growing collection of JSON objects already in a SQLite database at
   work and wanted to see how they were changing over time
2. I don't think the traditional UNIX `diff`-style textual diffing makes sense for
   structural/tree-style data like JSON
3. Most of those solutions operate on diffing only 2 JSON objects instead of
   (potentially) a large series of JSON objects
4. I haven't seen a JSON diff program that used SQL or SQLite and wanted to see
   if I could write one

It should be pretty easy to adapt this script into a CLI of some kind, as it's pretty
easy to have SQLite run SQL on the command line.

Is it well tested? No. Is it production ready? Probably not. Are
there bugs? Very likely.

But, it seems to work fine for simple objects and should serve as a decent
jumping-off point for anyone looking to understand how a collection of
JSON objects has evolved over time.

<script src="https://gist.github.com/ckampfe/40f48df863c42f3151f53857d175100a.js"></script>

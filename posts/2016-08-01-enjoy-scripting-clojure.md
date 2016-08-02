---
layout: post
title: Enjoy scripting with Clojure
created: 2016-08-01
---

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/default.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/highlight.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/languages/clojure.min.js"></script>
<script>hljs.initHighlightingOnLoad();</script>

Every day we write crappy little scripts to shuffle files between directories,
download/upload something from an API, generate PDFs, and other
miscellanea.

Most folks I know usually reach for Ruby or Python for this kind of thing.

Me? I like Clojure.

Why? Aside from the usual reasons (<a href="https://clojure.org">"robust, practical, and fast"</a>)
and Just Really Liking Clojure,
[Boot](https://boot-clj.com/) has made this kind of "shitty little scripting"
really pleasant.

Getting boot is just `brew install boot-clj`.

Here's how I do it:

<pre><code class="shell">$ clj\-new\-script a\_great\_script

$ cat a\_great\_script
</code></pre>

<pre><code class="clojure">\#!/usr/bin/env boot

(set-env! :dependencies '[[org.clojure/data.csv "0.1.3"]
                              [me.raynes/fs "1.4.6"]
                              [instaparse "1.4.2"]])

(require '[clojure.spec :as s]
             '[clojure.java.io :as io]
             '[clojure.java.shell :as sh]
             '[clojure.data.csv :as csv]
             '[me.raynes.fs :as fs]
             '[instaparse.core :as insta])
(import '[java.time Instant])<br /><br />(defn -main [& args] <br />  (println "hello, world"))
</code></pre>

This is 16 tiny lines, but let's break it down anyway.

First, we declare a shebang that calls `boot`:

<pre><code class="shell">#!/usr/bin/env boot</code></pre>

This, plus `chmod +x scriptname` is all it takes to run a valid Clojure script in the familiar
`./scriptname` style.

Next, we declare the external libraries our script depends on.

In this case I pull in Clojure Contrib's `data.csv` for CSV parsing/generating,
Raynes' `fs` for handy filesystem interaction, and Engelberg's awesome
`instaparse` library for parsing context-free grammars:

<pre><code class="clojure">(set-env! :dependencies '[[org.clojure/data.csv "0.1.3"]
                              [me.raynes/fs "1.4.6"]
                              [instaparse "1.4.2"]])
</code></pre>

Boot will resolve these dependencies the first time we run the script
and cache them from then on.

Next, we link our script against some namespaces and Java classes:

<pre><code class="clojure">(require '[clojure.spec :as s]
             '[clojure.java.io :as io]
             '[clojure.java.shell :as sh]
             '[clojure.data.csv :as csv]
             '[me.raynes.fs :as fs]
             '[instaparse.core :as insta])
(import '[java.time Instant])
</pre></code>

The `-main` fn accepts args as you think it would:

<pre><code class="clojure">(defn -main [& args] <br />  (println "hello, world"))
</pre></code>

This `-main` fn is sparse, but it would be easy enough to add in validation with [clojure.spec](https://clojure.org/guides/spec#_using_spec_for_validation).

It really is this simple: declare a shebang, some dependencies, links, a main
fn, and you're on your way.

I would put this scripting workflow up against Ruby/Python/Bash any day for its
brevity, simplicity, functionality (automatic inline dependency resolution!), and speed.

## Notes

- The Boot Scripting guide can be found [here](https://github.com/boot-clj/boot/wiki/Scripts). It outlines a few additional scripting features Boot provides.

- For those who would rather do their scripting with Clojurescript via Node or JavaScriptCore over the JVM, there is the phenomenal [Planck](http://planck-repl.org/) which is similarly straightforward to the approach outlined above.

- For those partial to Scala, I have used Li Haoyi's [Ammonite](https://www.lihaoyi.com/Ammonite/) in production, and it is unparalleled for this kind of work. Highly recommended.

- The source for `clj-new-script` is [here](https://github.com/ckampfe/dotfiles/blob/5d1b6728acc178419d05cfb836b508377c69d641/clj-new-script).

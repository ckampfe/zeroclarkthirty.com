---
layout: post
title: Analysis of What I'm Reading series
created: 2016-09-01
---

From July/2015 to July/2016 I wrote one post a week, collecting various links I
had been reading, and pulling out relevant passages from the articles into quotes.

You can see an example
[here](https://zeroclarkthirty.com/2016-06-13-what-im-reading.html).

I thought it would be cool to do a little trend analysis of these of these 52
posts, to see if any interesting trends appear.

You can see my analysis [here](http://viewer.gorilla-repl.org/view.html?source=github&user=ckampfe&repo=stats&path=stats_sheet).

To accomplish this, I wrote a parser using
[Instaparse](https://github.com/Engelberg/instaparse) to extract semantic
information from the posts (links, quotes, dates, titles, etc.), and
pulled this information into [Gorilla-REPL](http://gorilla-repl.org/) where I
could simply plot it.

This represents maybe 6 hours of work: 2 for the parser, 2 for figuring out the
Gorilla-REPL API, and another 2 for playing around with the
math and figuring out what I wanted to graph.

You can find the source code [here](https://github.com/ckampfe/stats).

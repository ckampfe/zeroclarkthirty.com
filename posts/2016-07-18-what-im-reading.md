---
layout: post
title: What I'm reading 7/11-7/18
created: 2016-07-18
---

[The Fact of Sisyphus - Barrett Brown](https://theintercept.com/2016/07/09/barrett-brown-the-fact-of-sisyphus/)

1. "Not that I do [burpies] anyway, or any other exercise, and I've never approved of excessive sleeping, either, for life is not meant to be spent in rest, but rather in conflict or preparation for future conflict."

2. "The chief thing to keep in mind is that dungeons vary."

3. "It's rather dehumanizing, this matter of having to drink milk out of bags like a common Canadian, but getting breakfast in bed every day makes up for it."

[Announcing GenStage - José Valim](http://elixir-lang.org/blog/2016/07/14/announcing-genstage/)

1. "Developers who use GenStage only need to worry about how the data is produced, manipulated and consumed. The act of dispatching the data and providing back-pressure is completely abstracted away from the developers."

2. "For the word counting problem with a fixed data, early experiments show a linear increase in performance with a fixed overhead of 20%. In other words, a dataset that takes 60s with a single core, takes 36s on a machine with 2 cores and 18s in one with four cores."

3. "Developers who maintain libraries that integrate with external data sources, be it a RabbitMQ, Redis or Apacha Kafka, can explore GenStage as an abstraction for consuming data from those sources."

[Erlang's iolist - Mathieu Lecarme](http://dev.af83.com/2012/01/16/erlang-iolist.html)

1. "Everything is message, everything can go through a wire."

2. "Copy each items from the first list, then each items from the second one. But when you concatenate inside a loop, the amount of copies becomes huge, and first items are copied again and again."

[Poll Results: Erlang & Maintenance - Fred Hébert](http://ferd.ca/poll-results-erlang-maintenance.html)

1. "This shows that when people know OTP very well (and see it as essential), they tend to estimate that they need less time to adapt to a project."

2. "This might not be too surprising, but I still found this one funny. The more Erlang you know, the less you tend to rely on comments. They can even end up being seen negatively!"

[What do the Erlang emulator info statements mean? - Stu Thompson and Warren Young](https://stackoverflow.com/questions/1182025/what-do-the-erlang-emulator-info-statements-mean)

1. "[Async threads, or `+A`] refers to the number of threads in the Erlang emulator's async thread pool, which more or less tells you how many blocked system calls can be spun off into background threads before the emulator stalls."

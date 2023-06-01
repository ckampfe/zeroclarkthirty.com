---
layout: post
title: Mistake: too many choices
created: 2022-07-30
---

A few years ago I wrote a [library](https://github.com/ckampfe/cbuf) that provides a [circular buffer](https://en.wikipedia.org/wiki/Circular_buffer) (also known as a ring buffer) in Elixir.

I wanted one for something (I can't remember what!), didn't see one in Elixir, and wrote one. It works well enough, has decent test coverage, and is about as performant as you could expect from a pure Elixir implementation.

I made a big mistake in writing the library, though. I asked too much of users.

The library, `cbuf`, has not one but three different implementations of a circular buffer: one backed by Erlang's built-in `queue`, one by Elixir's `Map`, and one by Erlang's `ets` tables.

My thinking at the time was that, since it was possible to make the API of `cbuf` basically the same for all three variants, users could choose the backing datastructure that best fit their needs.

In theory, this sounds great. Who doesn't love choice? In reality, circular buffer performance is almost never a bottleneck at the application level, and so most users never actually need to be able to swap backing datastructures. Forcing users to know and choose which circular buffer implementation best fits their use case is unreasonable, both because users probably don't know the inherent performance tradeoffs between `queue`, `Map`, and `ets`, and because users likely don't know how the performance of `cbuf` will affect their program as a whole, so they have no basis against which to compare these different implementations.

This is not to say that there aren't performance differences between the three implementations. The main difference is that circular buffers backed by `queue` and `Map` are regular data structures in the Erlang/OTP runtime that use regular, in-process memory, whereas the `ets` implementation is backed by an off-heap [ets table](https://www.erlang.org/doc/man/ets.html).

Where this can matter is that `queue` and `Map` are subject to the whims of process garbage collection, while in Erlang/OTP, `ets` tables occupy a separate region of memory that is not garbage collected in the same way as regular processes. In certain circumstances, it can make sense to put large or long-lived data in an `ets` table where accessing it will not interfere with (or be interfered with) normal process garbage collection. It also makes sense to use `ets` for data if you know that many processes are going to be accessing that data, as reading the data out of the `ets` table does not bottleneck any process other than the process doing the reading.

If I were to make `cbuf` again today, I would get rid of the option to have multiple kinds of backing storage and build a single implementation that uses `queue`. `queue` is built-in to Erlang, is very mature, and is fast enough for most use cases. I might consider writing the library in Erlang and providing an Elixir interface so it can be easily called from both Erlang and Elixir. If it became necessary in my application or in a user's, I would consider a separate library (rather than just a different module in the same library) backed by `ets` storage. Since I wrote `cbuf`, I've written a fair amount of Rust, as well as a few [NIFs](https://www.erlang.org/doc/tutorial/nif.html) written in Rust, and feel confident that I could make a circular buffer NIF that takes advantage of one of Rust's main differences from Elixir/Erlang: mutable memory. This would be another option, but I wouldn't lead with this implementation, as it is probably more exotic than almost every Elixir/Erlang application would need.

My main takeaway is that forcing your users to make such a choice where the outcomes are only marginally differentiated is poor design. If the outcomes of various choices doesn't differ that much, then the freedom isn't worth the cost.
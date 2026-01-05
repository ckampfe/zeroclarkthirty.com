---
layout: post
title: Cas - concurrent cells for Elixir
created: 2025-07-07
---

Recently, I wrote a small Elixir library called [Cas](https://github.com/ckampfe/cas) that provides a way to update shared mutable state concurrently. It is directly based on Clojure's [atoms](https://clojure.org/reference/atoms).

It looks like this:

```elixir
alias Cas.Cell

# Create a cell
cell = Cell.new(1)

# Get the value of an cell
Cell.get(cell)
#=> 1

Cell.swap!(cell, fn i -> i + 1 end)
#=> 2
Cell.swap!(cell, fn i -> i + 1 end)
#=> 3

# reset the value of the cell
Cell.reset!(cell, 99)
#=> 99
```

The problem I wanted to solve (and have wanted to solve for years) was to do true [compare-and-swap](https://en.wikipedia.org/wiki/Compare-and-swap) operations in Elixir.

Quoting Wikipedia:

> Compare-and-swap (CAS) is an atomic instruction used in multithreading to achieve synchronization. It compares the contents of a memory location with a given (the previous) value and, only if they are the same, modifies the contents of that memory location to a new given value. This is done as a single atomic operation. The atomicity guarantees that the new value is calculated based on up-to-date information; if the value had been updated by another thread in the meantime, the write would fail.

Due to Elixir/Erlang's lack of true mutable variables, locks, and other "typical" tools for dealing with concurrency, one would use a [GenServer](https://hexdocs.pm/elixir/GenServer.html) or [Agent](https://hexdocs.pm/elixir/1.18.4/Agent.html) to do this type of work. `GenServer` actually works great for this, but is ergonomically weak and too general, as you must define an entire GenServer API just to store and retrieve values.

`GenServer` also has the usual `GenServer` caveats: synchronous [call](https://hexdocs.pm/elixir/GenServer.html#call/3) blocks which provides backpressure to the caller; asynchronous [cast](https://hexdocs.pm/elixir/GenServer.html#cast/2) does not block but provides no backpressure and allows unbounded memory growth to the `GenServer`'s mailbox; and all "concurrent" work has to happen within the single-threaded `GenServer` process itself. That said, `GenServers` _are_ safe in the presence of concurrent updates, so they solve this problem just fine, which is more than many languages can say.

But, it turns out it is possible to do compare-and-swap without using `GenServer` process, by using the ETS [select_replace/2](https://www.erlang.org/doc/apps/stdlib/ets.html#select_replace/2) function, which states that "The match-and-replace operation for each individual object is guaranteed to be atomic and isolated." This allows us to atomically compare and swap the value at a specific key in an ETS table if and only if that value has not been updated concurrently.

I didn't know `select_replace/2` existed until just recently, and had to build Cas when I found it.

Compared to a `GenServer` performing an identical workload, `Cas` cells offers a simpler API, modest increases to write throughput in the presence of concurrent writers, while also not growing `GenServer` process mailbox memory.

[Check out the source code](https://github.com/ckampfe/cas/blob/main/lib/cas/cell.ex) and let me know what you think.
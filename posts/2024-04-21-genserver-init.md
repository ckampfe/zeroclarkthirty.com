---
layout: post
title: Understanding GenServer startup
created: 2024-04-19
---

In Elixir and Erlang, a GenServer is a way of defining a process that has a specific behavior, namely,
it behaves as a server with typical "server and client" semantics. That is, you send some message to the server, and it responds. When I first encountered Erlang I remember being confused about GenServer startup.
There is actually a fair amount of subtlety to how a GenServer starts, so let's look at a few modules to illustrate it.

First, this module, which I'll call the server module:

```elixir
defmodule MyServer do
  use GenServer
  
  def start_link(args) do
    GenServer.start_link(__MODULE__, args, name: __MODULE__)
  end
  
  @impl GenServer
  def init(args) do
    {:ok, args}
  end
end
```

And this module, which I'll call the caller or client module:

```elixir
defmodule Caller do
  def do_some_work() do
    {:ok, pid} = MyServer.start_link(%{})
    # further work intentionally omitted...
  end
end
```


When you work with the GenServer, like in our example caller module, by calling `MyServer.start_link(%{})`, this `MyServer.start_link/1` call happens in whatever process you happen to be calling it in. We'll call this "the client process". This call blocks the client process until the GenServer is started. When `MyServer.start_link/1` returns, the `pid` it return is considered started.

Going one layer deeper, the GenServer process itself is started in the `MyServer.start_link/1` function, with the call to `GenServer.start_link/3`. This instructs the GenServer library in Elixir to start a new GenServer process defined from the current module (the first `__MODULE__` arg), with an initial state of `args`, and with its name registered as the name of the current module (again, `__MODULE__`). While the GenServer has at this point been started, it is not considered fully booted, and it is not at this point ready to accept work.

The next step of the GenServer process startup happens when the GenServer library calls back into our code, specifically the `init/1` function. This function is crucial. There are a few key facts to understand about `init/1`:

1. Your GenServer process is not considered fully booted and cannot accept work until `init/1` returns.
2. `init/1` runs synchronously, so any blocking setup work in `init/1` blocks the start of the `GenServer process`, for example loading files from disk or making external network requests.
3. Whatever you return as the 2nd argument of the return tuple in `init/1` becomes the state of the newly started GenServer process.

Once `init/1` returns, your GenServer is considered fully booted, and in turn each call further up the stack returns: first `GenServer.start_link/3` and then `MyServer.start_link/1`.

At this point, the GenServer is running in its main loop and ready to accept new calls from clients.

But what if you want to perform some initialization work in your GenServer right after it is booted, or you want to perform some initialization work in your GenServer but want to do this in way that doesn't block its startup?

This is what `handle_continue` is for.

## handle_continue

If we modify our `init/1` slightly, we can instruct our GenServer to perform some work immediately after it has fully booted:

```elixir
@impl GenServer
def init(args) do
  {:ok, args, {:continue, :do_some_post_boot_work}}
end
```

This `{:continue, :do_some_post_boot_work}` instructs the GenServer to run a `handle_continue` callback immediately after `init/1` returns, which we define like this:

```elixir
@impl GenServer
def handle_continue(:do_some_post_boot_work, state) do
  # do some post boot work here!
  {:noreply, state}
end
```

The `:continue` atom in `init/1` is a GenServer-specific atom, and it says to run a `handle_continue` callback defined in your GenServer. The `:do_some_post_boot_work` atom is an atom we pick, and can be anything. It's not restricted to an atom necessarily, it can be anything as long as it can match the first argument to a `handle_continue` callback you define in your GenServer.

## an example

Let's put it all together, add in some log lines and timers to show what happens when you actually run it:

```elixir
defmodule MyServer do
  use GenServer
  require Logger

  def start_link(args) do
    GenServer.start_link(__MODULE__, args, name: __MODULE__)
  end

  @impl GenServer
  def init(args) do
    Logger.debug("GENSERVER init, before sleep")
    Process.sleep(:timer.seconds(2))
    Logger.debug("GENSERVER init, after sleep")
    {:ok, args, {:continue, :do_some_post_boot_work}}
  end

  @impl GenServer
  def handle_continue(:do_some_post_boot_work, state) do
    Logger.debug("GENSERVER handle_continue, before sleep, genserver is booted")
    Process.sleep(:timer.seconds(3))
    Logger.debug("GENSERVER handle_continue, after sleep, genserver is booted")
    {:noreply, state}
  end
end

defmodule Caller do
  require Logger

  def do_some_work() do
    Logger.debug("CLIENT do_some_work before start_link")
    {:ok, _pid} = MyServer.start_link(%{})
    Logger.debug("CLIENT do some work after start_link has returned")
    # further work intentionally omitted...

    Process.sleep(:timer.seconds(4))
  end
end

Caller.do_some_work()
```

And the resulting log lines, which show two important facts:
1. `MyServer.start_link/1` does not return until `init/1` returns. This means the startup procedure is synchronous from the caller's/client's point of view.
2. `handle_continue` runs after `init/1` returns, meaning it runs after the GenServer has fully booted.

```
at [ 15:20:43 ] ➜ elixir genserver_startup.exs

15:21:03.376 [debug] CLIENT do_some_work before start_link

15:21:03.379 [debug] GENSERVER init, before sleep

15:21:05.380 [debug] GENSERVER init, after sleep

15:21:05.380 [debug] GENSERVER handle_continue, before sleep, genserver is booted

15:21:05.380 [debug] CLIENT do some work after start_link has returned

15:21:08.381 [debug] GENSERVER handle_continue, after sleep, genserver is booted
```

Note that `GENSERVER handle_continue, before sleep, genserver is booted` and `CLIENT do some work after start_link has returned` happened at the same time due to both log lines happening right as the GenServer was fully booted.

There is much more to how GenServer works, but I just wanted to explain how I understand the GenServer boot process. If you want to read more, there is extensive [documentation](https://hexdocs.pm/elixir/GenServer.html).

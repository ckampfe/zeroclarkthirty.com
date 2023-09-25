---
layout: post
title: Elixir in shell pipelines
created: 2023-09-07
---

When invoking `elixir` on the command line, you can pass the `-e`/`--eval` flag multiple times. This means you can define a shell alias where you use Elixir's new `Mix.install` functionality to preload dependencies, and then run quick one-liners in shell pipelines that have access to those dependencies.

First, in your shell profile define an alias like this:

```sh
alias ee='elixir -e "Mix.install([:csv, :easyhtml, :jason, :nimble_parsec, :req])"'
```

Now you can call your alias like you would normally call `elixir`, passing any code you want to execute to `-e`, and your Elixir dependencies will be available:

```
$ echo '{"a": 1, "b": 2}' | ee -e "IO.read(:stdio, :all) |> Jason.decode!() |> IO.inspect"
%{"a" => 1, "b" => 2}
```

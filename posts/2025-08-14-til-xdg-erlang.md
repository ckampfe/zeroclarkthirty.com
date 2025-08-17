---
layout: post
title: TIL XDG in Erlang/Elixir
created: 2025-08-14
---

The other day I was building an Elixir app that needed to store local data, so I thought I'd use the [XDG spec](https://specifications.freedesktop.org/basedir-spec/latest/).

I couldn't find an Elixir library on Hex.pm that looked suitable, but I stumbled onto the fact that this is built into Erlang's stdlib already, which is even better:

```elixir
 Enum.each([:user_cache, :user_config, :user_data, :user_log], fn pathtype ->
    IO.puts(:filename.basedir(pathtype, "myapp"))
end)
/Users/clark/Library/Caches/myapp
/Users/clark/Library/Application Support/myapp
/Users/clark/Library/Application Support/myapp
/Users/clark/Library/Logs/myapp
:ok
```

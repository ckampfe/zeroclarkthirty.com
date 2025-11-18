---
layout: post
title: Getting Observer working on Erlang/OTP 28
created: 2025-10-27
---

On my Mac, Observer does not work out of the box with Erlang/OTP 28, but I got it working.

### Background

If you're not familiar, Erlang/OTP is a [parallel, functional language and runtime](https://www.erlang.org/) for building concurrent systems. I use it with the [Elixir](https://elixir-lang.org/) programming language.

It includes a variety of observability and debugging tools, among them [Observer](https://www.erlang.org/doc/apps/observer/observer_ug), which is a graphical system viewer that exposes the internals of your running application. It is like Java's `jconsole`.

It looks like this:

![](https://i.imgur.com/HUh5Kwk.png)
![](https://i.imgur.com/juYT14r.png)
![](https://i.imgur.com/m2cctlC.png)
![](https://i.imgur.com/UZa0xsh.png)

### Getting Observer working

Observer uses the [wxwidgets](https://wxwidgets.org/) GUI library. Erlang 28 does not appear to be compatible with `wx` version 3.3. In order to get it working, I had to build Erlang 28 against the previous version of `wx`, which is version 3.2, like this:

```
# I use a Mac. This is probably different on Linux.

# Install the previous version of wx
$ brew install wxwidgets@3.2

# Confirm its config is available.
# This should return something like /opt/homebrew/bin/wx-config-3.2
$ which wx-config-3.2

# Install Erlang 28, telling it which wx to use.
# I use `asdf`, but this should work similarly with other installers.
$ KERL_CONFIGURE_OPTIONS="--enable-wx --with-wx-config=`which wx-config-3.2`" asdf install erlang 28.1.1

# Confirm that observer was installed and works correctly by running it from `iex`.
$ iex
iex(1)> :observer.start()
```

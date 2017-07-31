---
layout: post
title: Your own Elixir shell
created: 2017-06-24
---

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/default.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/languages/elixir.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/languages/shell.min.js"></script>
<script>hljs.initHighlightingOnLoad();</script>

A question I see often in the Elixir community is "how do I do the equivalent of `gem install` so it's available globally?"

Folks typically do this because they want to be able to boot up their REPL (previously `irb`, now `iex`) and pull in an HTTP client, JSON parser, etc., and fire off some quick commands without having to got through the hassle of making a new project every time.

The usual answer I've seen has been to create a dummy project that you then load with your chosen dependencies and `iex` preloads and call it a day. This sounds tedious, but it's not all bad. It localizes your "global" dependencies to a specific place, and, even better, it's just a normal project that you can check into `git` and push somewhere. `git clone` and you have it on your new machine.

## Setting up the dummy project

Create your project using Mix, like this:

<pre><code class="shell">
$ cd ~/code/dotfiles<br />
$ mix new exshell --sup
</code></pre>

I  use `--sup` to make this project a supervision tree, because my past Clojure experience leads me to leave REPLs open for long periods of time. And when you leave things running for a while, you usually need to restart them or reload them after putting your machine to sleep, having a job time out, etc. This is much easier to do it Elixir/Erlang than Clojure, so why not?

I added these dependencies to my project's `mix.exs`:

<pre><code class="elixir">
defp deps do<br />
  [{:httpoison, "~> 0.11.1"},<br />
   {:poison, "~> 3.1"},<br />
   {:strand, "~> 0.5"},<br />
   {:array_vector, "~> 0.2"},<br />
   {:prolly, "~> 0.2"}]<br />
end
</code></pre>

This is basically all you have to do.

After running a quick `mix deps.get`, you can now just `cd ~/code/dotfiles/exshell` and `iex -S mix`, and you're cooking. Granted, you can't open `iex` from anywhere and magically have your dependencies available.

## But what if you could?

As with most things, our global Elixir REPL project can be improved with a sprinkle of UNIX.

I added this function to my `.zshrc`:

<pre><code class="shell">
function siex() {<br />
  pushd $HOME/code/dotfiles/exshell \
    && iex "$@" -S mix \
    && popd
}
</code></pre>

`pushd` with a directory as an argument changes to that directory, but not before first putting your current working directory on the directory stack.

`popd` changes to the top item on the directory stack.

So, when I start off in `~`, and run `siex`, and `Ctrl-C` the REPL, this is what happens:

<pre><code class="shell">
[~]<br />
clark$> siex<br />
~/code/dotfiles/exshell ~ ~/code/dotfiles<br />
Erlang/OTP 20 [erts-9.0] [source] [64-bit] [smp:8:8] [ds:8:8:10] [async-threads:10] [hipe] [kernel-poll:false] [dtrace]<br />
<br />
Interactive Elixir (1.4.5) - press Ctrl+C to exit (type h() ENTER for help)<br />
iex(1)> pwd()<br />
/Users/clark/code/dotfiles/exshell<br />
iex(2)><br />
BREAK: (a)bort (c)ontinue (p)roc info (i)nfo (l)oaded<br />
       (v)ersion (k)ill (D)b-tables (d)istribution
\^C~ ~/code/dotfiles<br />
[~]<br />
clark$><br />
</code></pre>

We went from `~` to `/Users/clark/code/dotfiles/exshell` in order to run the project and back to `~` without having to manage that ourselves. Nice!

Now we're free to just start using those "global" dependencies we pulled in earlier, Ruby-style:

<pre><code class="shell">
$ siex<br />
iex(1)> HTTPoison.get("yahoo.com")<br />
{:ok,<br />
 %HTTPoison.Response{body: "&lt;HTML&gt;\n&lt;HEAD&gt;\n&lt;TITLE&gt;Document Has Moved&lt;/TITLE&gt;\n&lt;/HEAD&gt;\n\n&lt;BODY BGCOLOR=\&quot;white\&quot; FGCOLOR=\&quot;black\&quot;&gt;\n&lt;H1&gt;Document Has Moved&lt;/H1&gt;\n&lt;HR&gt;\n\n&lt;FONT FACE=\&quot;Helvetica,Arial\&quot;&gt;&lt;B&gt;\nDescription: The document you requested has moved to a new location.  The new location is \&quot;https://www.yahoo.com/\&quot;.\n&lt;/B&gt;&lt;/FONT&gt;\n&lt;HR&gt;\n&lt;/BODY&gt;\n",<br />
  headers: [{"Date", "Sat, 24 Jun 2017 05:38:38 GMT"},<br />
   {"Via", "https/1.1 ir15.fp.gq1.yahoo.com (ApacheTrafficServer)"},<br />
   {"Server", "ATS"}, {"Location", "https://www.yahoo.com/"},<br />
   {"Content-Type", "text/html"}, {"Content-Language", "en"},<br />
   {"Cache-Control", "no-store, no-cache"}, {"Connection", "keep-alive"},<br />
   {"Content-Length", "304"}], status_code: 301}}<br />
iex(2)> Poison.encode!(["isn't", "this", "great?"])<br />
"[\"isn't\",\"this\",\"great?\"]"
</code></pre>

Also, notice that the actual `iex` invocation looks like `iex "$@" -S mix`. The `"$@"` lets you pass your own arguments in to the VM, so you can even run a few shells locally and communicate between them, like this:

<pre><code class="shell">
# in shell 1
$ siex --sname joe
iex(joe@clark)1>
</code></pre>

<pre><code class="elixir">
# in shell 2
$ siex --sname mike
iex(mike@clark)1> Node.connect(:"joe@clark")
true
iex(mike@clark)2> Node.spawn_link(:"joe@clark", fn -> IO.puts("Hello, Joe"); IO.puts(Node.self) end)
Hello, Joe
#PID<15384.205.0>
joe@clark
</code></pre>

<pre><code class="elixir">
# back in shell 1
iex(joe@clark)1> Node.spawn_link(:"mike@clark", fn -> IO.puts("Hello, Mike"); IO.puts(Node.self) end)
Hello, Mike
#PID<15429.205.0>
mike@clark
</code></pre>

Fun, huh?

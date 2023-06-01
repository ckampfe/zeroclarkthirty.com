---
layout: post
title: Elixir and Erlang: whats so special?
created: 2023-05-18
---

(Note that in this post I use "Elixir" to refer to Elixir, Erlang, and OTP altogether. This is a deliberate choice to simplify things for those who are unfamiliar.)

A few days ago Erlang/OTP 26.0 was released, which lead to a lot of discussion on HN about Erlang and Elixir.

[This post in particular](https://news.ycombinator.com/item?id=35966890) asked, more or less, "what's the big deal?"

I actually think this is great that someone had the courage to write this out and ask this, as the Elixir marketing copy does not explain this well, Elixir people already think Elixir is special, and more people using Elixir is a good thing.

As it turns out though, the quality of the Elixir marketing copy cannot be fully explained by the writing talent of whoever wrote that copy, as articulating what makes Elixir special is actually quite difficult, in my opinion for one reason: Elixir is genuinely novel. It really is different enough from almost everything else that - in a rather circular way - comprehending its difference is difficult until you actually know it.

I consider Elixir to be novel because Elixir is actually a higher-level language than most other languages, and in a rather unique way.

I'll try to explain by way of a metaphor.

Java is a higher-level language than C, but Java was not universally hailed by C programmers on arrival. Of course some liked it, but many had reactions like this: "I am an expert C programmer. I have spent years of my career mastering the skill of manually managing memory. Why do I need slow, clunky Java?"

And people tend to react to Elixir similarly. My hypothetical Elixir equivalent goes like this: "I am an expert Ruby/Python/JS/etc. programmer. I know how to use the concurrency features - like threading and promises and callbacks - in my single-threaded language. Why do I need Elixir?"

Maybe now you can see where this is going.

On introduction, Java was not higher-level than C because it gave programmers new features. It was higher-level because it *freed programmers from having to care about something of huge importance and difficulty*, namely memory management.

Similarly, Elixir is higher-level than almost everything else not because Elixir gives programmers some incredible features (though it does! - but that's for another post), but because Elixir frees you from having to think about blocking IO and blocking computation and one thread of execution potentially stomping on another.

Just as how with Java the JVM manages memory for you, in Elixir, you write regular, boring, synchronous code that runs computations and does IO, and the Elixir VM (known as the BEAM) figures out how to properly schedule work so that multiple different threads of execution can run in a single instance concurrently, without blocking each other or crashing each other.

This is possible because the closest technical metaphor for Elixir that most people already know is actually that of the operating system itself. One of the main jobs of an operating system is to ensure that all running processes have fair access to the limited CPU, memory and IO of the system. This is exactly what Elixir's VM does, and other language VMs do not do. Elixir's VM observes all of the different pieces of code that it is running, and preempts them as necessary to ensure that all code running in the VM has fair access to resources like CPU and IO. There are a ton of benefits to this, but chief among them is that this is transparent to the programmer! The Elixir programmer does not have to write special code to say when something is preemptible, or when to take or release a mutex, or to annotate a function as being "async", or to note that this IO is blocking but this IO is not. Elixir handles this for you.

This is what makes Elixir special.
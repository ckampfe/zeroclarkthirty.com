---
layout: post
title: Elixir is not Ruby
created: 2015-11-01
---

With Elixir's recent rise from "totally unknown" to
"still definitely unknown but mentioned in hushed tones",
I've noticed the more-common-than-it-should-be assertion
that Elixir is - or basically is - Ruby.

Despite resemblance on the initial pass, the languages,
environments, and programming idioms are stark in their differences.


# Model - the how

The differences start at the execution model.

In Ruby, one moves through a monolithic call stack, manipulating objects.
One can grab more call stacks with threads or fibers, with all threads/fibers
sharing the same heap. Nearly every programming language or virtual machine
in existence uses this model.

Elixir (and every other language on the BEAM virutal machine) is built around
processes. A process is a goofy, unfortunately loaded name for an
independent unit of execution. It is not an OS process, and it is not an OS thread.

The defining features of a process are its memory independence
and the asynchronicity of its execution.

Processes have their own heaps, and
the VM collects process' garbage independently of each other. One process does not know about
and cannot manipulate the memory owned by another process: they communicate
by a message passing mechanism that copies data from the sender's heap to the
receiver's.

Processes are scheduled and executed concurrently by the VM, and up to a certain
point the BEAM will be able to take advantage of as many cores as you
allocate to it to execute code in parallel.

# Idiom - the what

To program Elixir is to program in a functional style. Other articles
bear this out in more detail, but the quick and dirty involves a few fairly
straightforward ideas that have profound effects on how one programs computers:

- the function as the primary abstraction -- including as data itself
- immutability of data -- data is mapped from one value to a new value, rather than mutating it in place
- a basis in expressions rather than statements, where all or nearly all code returns a value
- referential transparency -- the same value input to a function will return the same output value every time

Elixir is not a pure functional language: one can and must interact with the outside world.
Functional programming in Elixir is not a theoretical dream.
Elixir is functional because of practical benefits it confers to the
programmer who is busy building concurrent systems.

(You could say it was born this way: Erlang and the BEAM were invented to ensure
the profitability of Ericsson by guaranteeing the reliability of its flagship
telephone switches, rather than to prove the soundness of a typesystem.)

Ruby has a few functional features, notably its module of higher-order
methods like `map` and `reduce`, and its procs/blocks/lambdas.
Ruby does not, however, do anything to mandate -- or even encourage -- immutability
of data.

This leads to practices -- perfectly idiomatic Ruby --
like using the `<<` method inside of an `#each` higher-order function to
side-effect an object, or using getters and setters to mutate object state
rather than operate on values.

The idiom in Ruby is overwhelmingly to mutate state.

The amount of Ruby code I have seen that is
concurrent at the application level is vanishingly small, and given the
prominence of the above patterns and others, it isn't difficult to see why.

With a few exceptions, the community seems to have abandoned this point,
and despite Rails' threadsafety, web applications mostly
rely on app servers that fork N application instance processes,
proxing requests between them at the expense of memory economy.

([further information](https://bearmetal.eu/theden/how-do-i-know-whether-my-rails-app-is-thread-safe-or-not/) as to why Ruby concurrency is so difficult)

In Elixir, computation is concurrent from the start, whether you like it or not,
and the emergent behaviors and idioms in the code reflect this.
Even many simple programs take advantage of concurrency because, well, why not?
It just isn't that much more difficult in Elixir.

To paraphrase a quote I can't remember from an author I can't recall, programming
languages aren't useful for their features list, they are useful for the behaviors
and idioms they encourage. Ruby and Elixir encourage behaviors as different as prank
calls and ballet.


# Philosophy - the why

Elixir and Ruby are coming from two headspaces that overlap in sections,
but with different heritages and different design goals.

Both languages place value on what is known in the Ruby community
as "programmer happiness". You can see this in their surface level
aesthetic appearance, their succintness, their general lack of
ceremony, expressiveness, etc. It appears in the efforts both communities devote
to documentation, with the great Rails Guides paving the way for the
excellent Elixir language documentation. It comes
through in their courting of the beginner as a valued member
of the community rather than a timesink to be scorned. None of this is surprising,
as Elixir brings with it a number of former prominent Ruby programmers
with an obvious talent for user experience.

(As an aside, there is a divergence in tooling, where my experience has been
better -- significantly so -- with Elixir's Mix and Hex tools than Ruby's combo of Rubygems, RVM/Rbenv,
Bundler, and Rake)

The cracks form when you look at Elixir as "an Erlang".

As an Erlang, Elixir and its runtime come from a family whose main concerns are
reliability, consistency, and concurrency. It is a community that is obsessed
with failure: understanding it, preparing for it, and embracing it. Things fall apart.

All aspects of the language and the environment revel in failure. From the concept of
processes, to the [supervisors](http://elixir-lang.org/getting-started/mix-otp/supervisor-and-application.html)
and [genservers](http://elixir-lang.org/getting-started/mix-otp/genserver.html)
that give them legs, to the code patterns that emphasize early failure, Elixir
is a language and an environment built for systems that must run for months,
years, or decades without maintenance.

(I recommend [Joe Armstrong's thesis](http://www.erlang.org/download/armstrong_thesis_2003.pdf) for those who are curious on this point)

Where Erlang itself has traditionally won traction among telecom, industrial,
embedded, gaming, and low-latency/high-io applications due to this reliability bent,
Ruby justifiably has other concerns, and has found adoption accordingly: Ruby is hugely popular
among solo developers, consultancies, startups and beginners. That is, programmers
who are generally concerned more with time-to-market and short-term ROI rather than maintenance.

Elixir is poised to walk off with Ruby's bacon, as it fuses these two mentalities:
systems that run for years should be as enjoyable to build as a NetHack clone.


# Further reading

If something in the above has rustled you, I highly recommend
Fred Hebert's [Learn You Some Erlang for Great Good](http://learnyousomeerlang.com/).
It is the best text to understand what makes the Erlang environment distinct from
whatever you're doing now. If you have no experience in Elixir/Erlang,
I promise Fred's book to be as profound an experience as learning a Lisp or Haskell,
and probably more practical.

The book is in Erlang, so the language and tools in the book are not those you'll
find in Elixir, but as Elixir is "an Erlang", there is almost no friction between
taking your understanding of things like processes and OTP from Learn You Some
Erlang and applying them in an Elixir context. One can absolutely learn
Elixir through a combination of Fred's book and the Elixir
guides/documentation/source code.

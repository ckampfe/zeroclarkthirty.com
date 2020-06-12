---
layout: post
title: Always coming back home to you - 3 years later
created: 2020-06-11
---

Three years ago I wrote a [post](https://zeroclarkthirty.com/2017-01-02-always-coming-back-home-to-you.html) how, despite loving Clojure, I felt tempted by Scala.

I tried to understand some of the problems facing industry, and why I felt Scala - or Scala-like languages - was well-situated to address those problems.

It has now been 3 years. In that time, the languages I have written Elixir and Rust almost exclusively, both for work and for fun. I've written a small amount of Clojure, and no Scala.

In the previous piece, I wrote:

> if you gave me 2 weeks off I'd probably pour it into Rust

It turns out I did pour two weeks into Rust, and then I poured two more, and then months, and then (as of writing) almost 2 years.
Since late 2018 I've written quite a good amount of Rust, for things like graphics programs, high-performance parsers, command line utilities, Webassembly modules, and TUI applications, and read a good amount of other people's Rust.

This is something of an experience report on Rust, and something of an experience report on how well my assumptions in the previous post held up.

First, Rust.

Rust has become my primary language. It is at this moment, the language I would prefer to write for the rest of my life if I had to pick one. It is that good. I feel confident in making this claim given the amount of time I have been exposed to Rust, and the amount of Rust I have written. I feel like I am beyond the honeymoon period, so to speak. Of course I hope Rust is not the last language I use, but I would not be unhappy if it was.

I like many things about Rust, but most prominent theme of Rust's that I appreciate is the actual execution of its ideas, which is to say "how well things work in practice". I will contrast this with the idea of design, meaning the intended function of something. Very nearly everything in Rust feels well executed, down to little details, and the misfires (like `mpsc`) are rare.

The implementations of structs and pattern matching feel great to use in practice. Core language identifiers and standard library functions feel intuitively named. Common names are short and easy to type. Returns are implicit, but can be explicit. It uses curly braces but this doesn't feel oppressive. Types come after identifiers. It is always clear when to use a semicolon. The syntax for important things like borrowing and mutability is consistent and pervasive. The trait system brings over the useful parts of object oriented programming but leaves behind the crap like inheritance and classes. There are real tuple types for passing around an unnamed grouping of values, and they are nice to use. Error handling has had an incredible amount of thought put into it, with the `?` operator representing an amazing ergonomic advance that ensures errors are correctly handled while reducing the code necessary to do so. Type conversion with the `From` trait and `.into()` is useful and predictable (unlike Scala's implicit conversions). The standard library implementations of data structures like HashMaps, BTrees, Vectors, etc., are all incredibly well done, with great performance characteristics for common cases. I could go on.

If you take away the main novel features of Rust (ownership/lifetimes), everything else feels great to use. I will contrast this with Clojure, where things are beautiful but sometimes a pain in the ass to actually use in practice. In this case I'm thinking of Clojure features like the sets API, futures (and errors in them), core.async (threadpools, dead goroutines), transducers (much fanfare, not much use), and lazy sequences (incredibly common pitfall for new and experienced users alike), the REPL (state management of a running app is hard, and startup times are still awful). 

Outside of the language itself, the tooling is the best I have used. The package manager, Cargo, and the package repository, Crates, seem to reflect a few things:

1. The creators of Rust highly value the experience people have when using these tools
2. The creators of Rust have had ample prior experience with other language tooling

Regarding #1, the tooling ecosystem does not feel like an afterthought. It feels like a thing that the core members know about and value. Tooling is first class. Problems with tooling are acknowledge. Advances in tooling are met with much praise, and tool-improvement is prestigious work. Regarding #2, the tooling is clearly designed with the reflection of the shortcomings of other tooling. There is one ecosystem-wide build tool - Cargo - in contrast to the plethora of C/C++ build tooling. The compiler provides ample feedback about where an error is, and how you might fix it, in contrast to build systems like those found in the Javascript community, for example. Builds are reproducible, in contrast to early JS build tools. There is not an explosion of environment nonsense, like in Python. The tools are fast, unlike in Java.

Anyway, the point of this entry isn't supposed to be about the features of Rust that feel well-executed, nice as they are.
In the previous piece, I listed out a few characteristics of software construction that I feel should affect our behavior and tool choices. They were:

```
- most projects don't ship
- maintenance is expensive
- maintenance is a second or even third-rate duty next to building and architecting
- most projects are not meaningfully maintained (see above)
```

Three years later, I stand by these points. 

> - most projects don't ship

A great deal of projects do not make it to production or ever serve customers. I have personally been involved with many and heard of many more. It is always demoralizing when this happens, but it is a reality, and so we should adapt accordingly. If we know that most projects will not ship, we should try to minimize the sunk cost of early stage projects. It should be trivial to start something. It should be trivial to deploy something so that a user can interact with it. It should be trivial to distribute, so we can gain momentum and feedback as quickly as possible. Reading Rust in this context, it fares well: Cargo provides templates to create a new binary or library with a single command. These are always the same commands, and they always produce the same thing. Linking against a library is as simple as adding that library's coordinates to the Cargo.toml file. Deploying Rust is pretty good as well, as it provides (mostly) straightforward features for cross compilation, and the result is either a shared library for linking or a binary that can be directly executed like any other binary on any architecture capable of running that binary. Dropping a binary on a system is an old, well-known mechanism, and can be shoehorned into any number of existing build processes with little fanfare. No JVMs to setup, no Rubies to version, nothing.

> - maintenance is expensive

Maintenance is still expensive, as adapting software to a changing world and fixing defects dominates the cost of any non-trivial software over time. I think this is really where Rust shows its value. Rust is a language clearly built for systems that, as Bryan Cantrill says, are "load bearing". Systems that do real work. Systems that must last years. System on which people depend. There are no silver bullets, but types help with this. In Rust's case, I feel they do this in a few ways.
The first is that they ensure that calling contracts hold. When you change code, the compiler tells you if you have inadvertently done something that, in a dynamic language, would result in a name resoultion error, or a type error, or an error when calling a function with too few or too many arguments. Of course, this is not semantic correctness, as testing provides, but it is not nothing. And on larger codebases, it is very much something. I think dynamic language advocates minimize the confidence that comes from this contractual coherence unjustly. Knowing that your functions, arguments, and types all line up is a significant kind of confidence, as it means that is one less class of behavior you have to test at build time or validate at run time. This frees us up to use our testing budget on other, more important things like business-logic validation. This confidence, along with the confidence from other tools and practices, contributes to our willingness to change software. And this willingness to change software as it ages is the essence of maintenance.

Another useful maintenance-enabling thing Rust provides is extension, through traits. Traits allow the gradual introduction of new behavior to datatypes that were not originally designed to exhibit that behavior. The requirement that a piece of data now partcipate in new behavior is an incredibly common aspect of maintenance, and it becomes much more costly to undertake if that piece of data is widespread, as the maintainer has to account for all of the potential interactions of the new with the old. Traits provide a mechanism to safely introduce new behavior to a piece of data in a way such that it coheres with all of the mechanical checking provided by the compiler, without having to destructively change any of the existing uses of that data. That dynamic languages are open for extension is an oft-touted benefit, and for good reason. Traits allow Rust to have a great deal of that dynamic flexibility while still remaining type, memory, and resource safe.

> - maintenance is a second or even third-rate duty next to building and architecting

I've seen nothing to diminish my perception of this. Everyone wants to build new things, very few want to be responsible for changing a system they neither built nor understand. The downsides of most maintenance work are much larger than the upsides. Often, maintainers and product owners perceive a change to be small and quick, but we have poor tools for identifying the existing interactions a given change has with the rest of the system. The upsides are often hard to quantity, and appear to be vague and somewhere in the future, so we may not get to experience them ourselves. It is hard to quantity "it just works and will continue to reliably, predictably serve traffic for the forseeable future" on a balance sheet, or to a CTO who doesn't plan to be around in 2 years. I'm not sure Rust has technical features that address this, but that doesn't matter, as Rust has arguably done something more important by increasing the social standing of maintenance work. Rust is on its way to mainstreaming the idea that software should work predictably and reliably for years. In some ways, the mainstream software development community has given up on this idea. Most software sinks to the bottom of the ocean when confronted with tiny waves, and only the application of massive amounts of time and money prevent it from doing so more regularly than it otherwise would. Rust is making the argument - and in my opinion, backing it up with real-world examples - that software can be reliable, and it can be cheaper to maintain over time. This is contributing to the idea that maintenance is something worth doing in service of long-term reliability and value. It's hard to overstate how desperately we, the software community, need this message.

> - most projects are not meaningfully maintained (see above)

This continues to be the rule, as the cost of meaningful maintence remains high, and the prestige of meaningful maintenance remains low. As such, software is not meaningfully maintained insofar is there is an almost universally greater aggregate of issues with existing software than there is time, money, and will to deal with those issues. I need to do more thinking about this, but it seems that Rust's main advance in the art of software is that it lowers the cost of maintenance and correctness. It follows that more software could be meaningfully maintained if we could lower that cost.

We humans have proven over and over again that we are well adapted to identifying and reacting to near-term high-downside risks, and terrible at identifying and reacting to long-term risks with almost any amount of downside.

In the previous piece, I wrote:

>  No one develops software with an ability to feel what the software will be like to maintain in 5 years, let alone 6 months.

We simply cannot base the 5 year view of what the software should be like on what it feels like right now. What feels good now does not have any bearing on whether something will be successful in 5 years. If we want something to be around in 5 years, we have to think about that case, and design for that case, specifically. Rust may just be the vehicle that mainstreams that longer-term view of software. If we look back on Rust in 40 years and it has done this even partially it will have been a wild, screaming success, on the order of C or Lisp. 

On a personal note, I have to say that coming back to Rust software I wrote last week, last month, last year, is more enjoyable than coming back to old Clojure code. While it's true that the Clojure code likely hasn't changed, I now find myself asking, is that because the Clojure code is so well done and so stable and so complete, or is that because I don't want to touch it, for fear of breaking it? It makes me a little sad to write that, as I still love Clojure, and think is probably the most novel language of the last 20 years, but I stand by the closing I wrote 3 years ago:

> I love Clojure to bits, but coming back to a Clojure project after time away can be a bit like blindly reaching into a box I've just opened after moving apartments: there might be something sharp in there.

~~Scala~~Rust makes this a little less scary.


## Postscript

I realize I have not said much about Scala in this post. This was not really intentional, but in a way feels correct. Writing this post mostly about Rust feels like a roundabout partial validation of Scala. Scala and Rust are similar. Strong typing, strong polymorphism, with a focus on extension over time. They diverge in that Rust also focuses on performance, low-level control, and developer experience while Scala focuses on Java compatibility and novel, PhD-worth language innovation. I still like Scala, but I think Scala is in the unfortunate position of having to maintain Java/JVM compatibility in a world where that compatibility promise appears as an instant downside to anyone who doesn't want to go near the JVM. Scala, unfortunately, also has managed to collect a fairly academic and contrarian community, that has over the years allowed it to absorb a somewhat unfriendly, academic reputation. Whether or not this is literally true does not matter as the image appears to have stuck regardless.
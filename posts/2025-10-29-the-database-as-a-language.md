---
layout: post
title: The Database as a Language
created: 2025-10-29
---

Languages are too low-level. Even high-level languages.

Most high-level languages ("HLLs") today operate at roughly the same level of abstraction when it comes to data. They have associative structures (maps), ordered structures (lists, arrays), various kinds of atoms (strings, keywords, numbers, etc.).

Languages provide various operations for manipulating these structures, and they're all basically the same. At the lower level, you have loops, like `for` loops or `while` loops. Loops have served well, but they are hard to make correct beyond the simplest uses. Additionally, they are _too_ general. Loops can do almost anything, meaning that one loop is not easily, immediately differentiable from another.

More recently, higher-level, functional (from functional programming) data operations have become common. `map`, `filter`, `reduce`, `each`, etc. are now typical in languages like Ruby, Python, Javascript, etc. These functional features have proven to meaningful improve the quality of work and the productivity of the programmer when compared to `for` or `while` loops. The functional constructs are more constrained, meaning they provide less capability than something like a `for` loop.

The benefit of this is that they provide more guarantees about what is going to happen to your data. Accordingly, a programmer has to know less, and can more easily derive intent from the use of a given functional construct: using `map` projects a collection with its elements transformed, using `filter` projects a collection with only the elements that pass the given criteria, etc.

These functional constructs are excellent in the small, but do not offer a way to compose various parts of programs together. We've tried many things to go higher-level. Object oriented programming, coroutines/goroutines, actors, queues, etc.

Some of these have proven more successful than others. 

(This is a topic for another essay, but I believe that object-oriented programming has been a massive, industry-wide blunder, and is an especially poor way to think about data and programs.)

The direction that seems especially poorly explored seems to me to be fusing databases and programming languages, which is a shame, as databases do so many things better than programming languages.

- Databases are declarative, meaning you specificy what you want to happen and the database figures out how to accomplish it efficiently.
- Databases tend to be concurrent by design, with rich support for transactions, multiversion concurrency control (MVCC) and the like.
- Databases compose data trivially, with support for ad-hoc joins.
- Databases support data evolution, with things like migrations and triggers.
- Databases support data integrity with rich constraint systems that ensure data can only ever be in the required state.
- Databases support durable persistence such that data can be stored out-of-process and guaranteed to be stable, even on unreliable hardware.

We do all of these things in programming languages today, we just do them poorly!

Databases themselves are very well explored, with a long, rich history of research and implementation, but almost entirely as a separate, "over there" topic when taken in the context of programming languages. Databases exist outside of the programming language, outside of the runtime, and many programmers see them as something dirty, best kept at arm's-length, a network hop away.

At the programming language and runtime level, not much has been tried, and even less has stuck. The predominant area of research and implementation has been, by far, object-relational mappers, or ORMs.

ORMs allow a programmer to express operations against external databases in their current, non-SQL language. Ruby's ActiveRecord and Java's Hibernate are archetypal examples.

The other, more interesting area of work has been Microsoft's [LINQ](https://learn.microsoft.com/en-us/dotnet/csharp/linq/).
LINQ allows for interacting with programming language datastructures in a way that resembles database interactions. This is more interesting, as it fuses functional-style data manipulation with a query language built into the host language, in this case, C#.

As far as I can tell, LINQ or similar datastructure query interfaces have not had much success outside of C#, which seems to me to be a shame, as LINQ fuses the expressive, declarative nature of SQL with the performance of in-memory, in-process data access.

The only other version of this idea I have seen is [Lil](https://beyondloom.com/decker/learnlil.html), a part of the [Decker](https://beyondloom.com/decker/) system. I am sure there are others I have missed.

But what if we went even further? What if there was a language and runtime built from the ground up that was itself also a database?

This seems like a critically underexplored area of programming.

What if instead of working directly on hashmaps and arrays most of the time, we instead expressed operations declaratively, against whatever abstract collections we wanted to, and the runtime figured out where, how, and when to make it happen? Of course, some of the time it will matter whether the programmer uses a hashmap or a btreemap, but not most of the time, and especially not in a high-level language.

What if we had the power of transactions and rollbacks to compose operations across structures through time? What if we could do joins against random datastructures ad-hoc, rather than implementing them manually as series of maps and filters? What if you could reach into a program at runtime and see any data, at any time, with no concern about whatever else happened to be concurrently accessing it? What if we could express declarative constraints that made sure that data was guaranteed to be in a particular state? What if we could set actions to fire when data changed in a particular way, like triggers?

I think fusing a database and a programming language could move programming into a yet higher level level of expression, equivalent or greater than the move up from C to Python/Java or from loops to functional constructs.

That said, I think there are a few problems one would have to wrestle with to make it possible:

- What is the means of interaction for the database-like functionality? Is it SQL or something else? This human-computer interaction problem is probably the largest hurdle to overcome. It has to _feel_ better to use, or people won't use it.
- How does the language interact with the arbitrary nature of IO, like making HTTP requests or assorted storage formats from disk?
- How does the programmer interact with concurrency? Is it purely an internal, hidden concern, like it is with databases today, or is it exposed to the programmer like threads/actors are?
- How much of the program requires up-front data declaration, like SQL does today? Is this too much friction?

These are just off-the-cuff thoughts, so I'm sure I will come up with more problems that would be needed to make something like this useful. But I'm optimistic such a system is not only possible, but would be a step up in abstraction. The good news is there's a ton of prior art in databases, so smarter people than me have likely thought of how to solve these issues.

Thanks to Shane Sveller for reading a draft of this essay.
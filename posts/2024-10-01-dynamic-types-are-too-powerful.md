---
layout: post
title: Dynamic types are too powerful
created: 2024-10-01
---

For a large portion of the software out there in the world, dynamic types are actually too powerful.

Take Ruby as an example. Ruby has a very powerful dynamic type system. You can define methods at runtime. You can define objects based on database tables at runtime. You can open up core classes and redefine their methods at runtime. You can ask objects what methods they have at runtime and branch on how they respond. This dynamism is amazing and enables a lot of the great libraries in the Ruby ecosystem, like Rails, ActiveRecord, etc.

The problem with power is, [the more powerful things are, the worse they compose with each other.](https://www.youtube.com/watch?v=GqmsQeSzMdw)

And when it comes to dynamic languages like Ruby, you can't turn this power off. You get it whether you want it or not! To _slightly_ repurpose a quote by Joe Armstrong: ["You wanted a banana but what you got was a gorilla holding the banana and the entire jungle."](https://www.johndcook.com/blog/2011/07/19/you-wanted-banana/)

You go for Ruby because it's quick to write and it has these incredible libraries that let you write the first version of your app fast, but in exchange, you give up more or less all whole-program reasoning. You're writing the domain logic of your business application, and it's impossible to tell where things come from or what they do. Stuff just appears in scope without warning. Stuff just "happens" and it's not apparent from the text of the program where, when, or why.

That method, what object is it on? No idea, it's inherited from something, somewhere. Where is that variable defined? What touches it? Can I safely modify it? No idea, it just appears in scope because some parent class conjured it out of the ether. Did I fix up all the callsites after I modified that method definition? Some of the callsites might only exist at runtime via `send` or similar, so, no idea. Why is `nil` behaving weirdly? Oh, because someone opened up `NilClass` and modified it to make things "easier".

You go to grep for something, and grep fails you, because the name of thing you're grepping for was created with string concatenation at runtime. Am I upholding the invariants this API requires? No idea, we'll find out when we deploy it to production. Did I accidentally just make a breaking change to our library? No idea, I'm sure a user will file a bug report.

This is what it's like when a dynamic language is too powerful. It's using a jackhammer to hang a picture frame.

Again, some of the features that lead to these situations (like `send` or `method_missing` or duck typing) are useful and enable powerful stuff, but for normal, everyday, "grab this thing out of a database, munge it around a little, slam it into a template, and throw it on the wire" programming, they're actively harmful because they don't just inhibit local reasoning, they often make it impossible. 

Knowing what a method returns is good. Knowing where an identifier comes from is good. This is low-level stuff you shouldn't have to think about. It doesn't make you a tough, big-boy programmer to be able to divine the arguments to a function, or track down where some magical thing was defined at runtime, or figure out how to work around your coworker's crappily monkey-patched `String` class. This kind of work is pure, 100% toil that wastes your time and adds no value for your users or your teammates.

I don't hate Ruby or dynamic languages generally and I don't want to ban powerful dynamic language features like Ruby has, but I think having these incredibly dynamic features readily available in line-of-business software is a mistake, just like C having unconstrained access to raw pointers has been a mistake.

I don't know how this would work, but it would be amazing if there were dynamic languages that took an approach similar to Rust's `unsafe`, where most of the language would be fairly vanilla, but you could have a delimited code block (or variety of different delimited code blocks) that clearly mark areas where you're opting-in to `method_missing` or `send` or class opening (or whatever else), so future readers can clearly see and audit those sections, lint them, grep for them, and build editor support for them. It would also be cool if the compiler was able to take this information into account, and offer better guarantees, optimizations, and error messages in the non-dynamic sections because it was able to better reason about the control flow of the less dynamic code.

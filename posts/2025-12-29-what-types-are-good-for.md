---
layout: post
title: What types are good for
created: 2025-12-29
---

Sometimes the conversation in around static vs. dynamic types veers off into theoretical la-la-land. I've seen static types maximalists insist that software built without static types is inherently (dictionary: "existing in something as a permanent, essential, or characteristic attribute") less reliable than software built with static types.

I don't buy it.

I've also seen dynamic types maximalists insist that static types are almost never worth it, and that their costs radically outweight their benefits.

I don't buy that, either.

Static _are_ useful. For real things, for real work. The kind of things you're likely to actually have to do in a "line-of-business" application:

- make sure this piece of data has this exact shape, or fail
- make sure you check all of these variants and don't forget any
- make sure this state can only transition to this other state
- make sure you check whether this operation succeeded or failed
- make sure all of your callsites change when you update the definition
- make sure this thing implements this interface

Is this everything in software development? Are static types _all upside_? Of course not. But they are _something_. Innovations in static typing over the last 20 or so years have _clearly_ hit upon some kind of desire among software developers for a higher degree of assurance and understanding about how their code interacts with itself and the world.

Static typing advocates would be better served by focusing on the practical aspects of static typing for real-world software development issues over hyperbole ("bugs are a thing of the past!") and type-astronautics.

Dynamic typing advocates would be better served by recognizing where this desire for assurance comes from, and coming up with and popularizing technical solutions to the problems people encounter in large dynamically typed codebases. "Just write more tests" doesn't sell or scale. Not every dynamically typed language needs to add a gradual type system like Python's or Typescript's (and I think it's often a bad move, like in Ruby), but I have zero doubt that there is more that can be done to give developers higher confidence that their code does what they want it to. Libraries like Clojure spec seem a particularly underexplored area of research.

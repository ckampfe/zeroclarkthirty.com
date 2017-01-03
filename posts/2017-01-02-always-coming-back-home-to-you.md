---
layout: post
title: Always coming back home to you
created: 2017-01-02
---

I love Clojure. I've written its praises many times, sold it to many people,
and I am currently trying to introduce it at work.

Beyond of Clojure The Language (which is phenomenal), the ideas in the language
will live on, and it's likely that in 20 years we'll all be writing in something
that has at least some of Clojure's wisdom concerning state and time.

Despite this, I keep coming back to Scala and other MLish things (if you gave me 2 weeks
off I'd probably pour it into Rust).

This really shouldn't be happening to me.
Clojure is -- at this point, almost objectively -- genius on a symphonic level.

By comparison Scala looks like the Firefly-class transport ship
Serenity: useful and attracting a colorful crowd,
but you need a genius mechanic to keep it from falling out of the sky.

So why does a bucket of bolts like Scala keep on enticing me
in the presence of Clojure's sleek simplicity?

Languages with ML-style static typing have been gaining momentum in the
last few years on the promise that they make certain kinds
of errors impossible, provide expressive types to aid in the design process,
and help ensure refactorings maintain their contracts, while keeping the brevity
of dynamic languages by inferring most types.

It's a subjective question as to whether these languages fulfill their
charters, but for the one I know decently well, they do.
At least enough to not be laughed out of the room.

What I wrote above reads like a list of features
on a car. It doesn't say anything about the problem of trying to get
from one place to another given the constraints of time, cost, safety, or fun.

So what are the problems? Why do I keep coming back?

## our problems

At the risk of alienating any Federalists currenlty reading,
bear with me on a slight tangent where I say that there are a number of essential
problems to the software development domain that the people in our industry do not
enumerate explicitly enough. The following list is not definitive but is relevant
to my argument as to why I keep coming back ML-ish languages despite
their flaws:

- most projects don't ship
- maintenance is expensive
- maintenance is a second or even third-rate duty next to building and architecting
- most projects are not meainingfully maintained (see above)

Though the above may sound like evidence-free truisms (that's because they are),
I challenge any reader who has built or worked on any non-toy app to tell me I'm wrong.

Now, attempt to claw back some 8th grade alegebra,
because these relationships can be explained with some simple logarithms and
exponentiation.

<img src="https://i.imgur.com/oABZe8N.png" width="600px"></a>

On a graph with time on the x-axis and cost of maintenance on the y-axis,
most projects resemble `y = x^n`. That is, they rapidly become more
and more costly to maintain as they age. For this function,
think "SAP installation".

On a similar graph with y-axis now representing probability,
the liklihood of throwing away/rewriting a mature project
probably resembles something like `y = -log_n(x)`, ie, projects are most likely to
be thrown away early in their life but marginally increase their staying
power each day they entrench themselves in an organization's communication
structure and business model. For this function,
think "Rails MVP app that sticks around".

This function also applies to the liklihood of a project shipping at all
given its time in initial development: every day of development without
shipping slightly weakens a project's prospects to ship at all.
Think "The Big Rewrite".

Taking these together we see projects that ship end up sticking around,
end up not being maintained, and never get rewritten because the
complexity they accrue over time takes eons to reimplement, putting the
rewrites at risk of never completing.

## Ok...so?

Imagine each of the above equations has a coefficient that modifies the amplitude
of the function while retaining its behavior space.

When we develop software, this coefficient is where we spend our day.
No one develops software with an ability to feel what the software will
be like to maintain in 5 years, let alone 6 months. No one feels 
`y = -log_n(x)` or `y = x^n` at a personal level. We develop in the here and now,
paying the price for every null, every botched config, every broken API, every
slow ramp up after being away from the code for a year, every unintelligible abstraction.

And the impersonal area-under-the-curve cost (ie, real $$$ cost) of maintenance from time
`now - 1` to `now` is so much larger than from `now - 101` to `now - 100` that this coefficient
begins to matter. If an ML-inspired typesystem can offer even a modest improvement for
things like refactoring, or error reduction, or durability of design, this is real money and time
that can be allocated elsewhere.

I find that Scala does this. It's easier to read,
I have less fear changing it, bumping dependencies, or making significant
cleanups. The compiler informs me of my idiocy if I botch
an API contract. It's true there are costs, like learning some of the more
theoretical abstractions inherent in this programming style (hello Monad,
Applicative, Functor, etc.), but this cost is amortized quickly,
and you get to keep the knowledge forever.

I'm not going to stop writing Clojure, or sellings its benefits to
others -- its treatment of state and time is just too good.
I just might be doing some of the more long-lived work in Scala.

I love Clojure to bits, but coming back to a Clojure project after time away
can be a bit like blindly reaching into a box I've just opened after
moving apartments: there might be something sharp in there.

Scala makes this a little less scary.

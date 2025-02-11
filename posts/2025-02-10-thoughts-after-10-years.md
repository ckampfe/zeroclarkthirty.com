---
layout: post
title: Thoughts after 10 years
created: 2025-02-10
---

I read [Software development topics I've changed my mind on after 10 years in the industry](https://chriskiehl.com/article/thoughts-after-10-years) recently and thought I would do my own.

I've been programming for money since 2014 (whoa) so some of my opinions have changed over that period and some haven't.
I don't claim this makes me good, but it does mean I've seen some shit.


# Things I didn't used to believe, but now do

- the beginning, middle, and end of programming is data layout and data access patterns
- relational databases are a civilizational technology, like water treatment or the refrigerator
- long functions are often fine, actually
- the way code looks matters a little, not a lot
- you can probably get away with HTTP for almost everything networking-related; the burden of proof to to use non-HTTP should be high
- the bare-minimum for a programming language is to be memory-safe
- [YAML delenda est](https://en.wikipedia.org/wiki/Carthago_delenda_est)
- SQLite is the best piece of software yet created by humankind
- statically-checked ownership rules for mutable state are often easier to use and understand than functional programming
- customers would have better experiences and building would be faster and cheaper if we used Hypertext and HATEOAS stuff more widely
- there is such a thing as too much teamwork and too much coordination
- most companies would be better served by reducing the amount of coordination they require and accepting some level of rework and incompatibility in exchange for faster delivery and higher autonomy
- knowledge of SQL will likely outlive every other language/systems skill you have
- just writing SQL in lieu of using an ORM is almost always fine
- premature abstraction has left a trail of bodies way, way longer than premature optimization
- until we have a "Rust, but garbage collected", most companies are probably best off with Python or Java, depending on domain
- the thing most likely thing to sink a project is management (and product management) not understanding what they're asking for
- too many programmers on a team is worse than too few because you have to find things for them to do, and there are side effects from trying to use nine women to make a baby in one month
- no subset of the software field has failed to pull its weight more than product management
- the median manager is probably worse at their job than the median software developer
- good managers are harder to find than good software developers
- most companies would be better off using something like Heroku than attempting to run their own infrastructure
- clever people choose technologies that are fun to use, smart people choose technologies that are easy to use, wise people choose technologies that are easy to operate
- there is a huge opportunity for a new language in the space that Ruby and Python currently occupy
- technical product management should be a career track that becomes available once you are a senior software engineer, and only then
- beyond whether it has LSP or not, your editor doesn't affect your productivity enough to be statistically significant
- languages that have weak LSP/Intellisense experiences will get left behind
- doing things on "hard mode" (e.g., by hand, without types, without LSP, without help, etc.) doesn't tell me you're good, it tells me you don't value your time or mine


# Things I still believe

- [software development is a pop culture](https://link.springer.com/content/pdf/bbm:978-3-319-90008-7/1.pdf)
- we don't actually know that much about how to program successfully, so you don't have to listen to people who think we do
- the thing most likely to sink a team or a project is bad management. everything else is a rounding error
- class-based object orientation has been colossal mistake for information modeling and should be done away with
- language matters in so many ways: what you can build, who will want to build it, how users will perceive it, how expensive it will be to maintain, etc.
- large dynamically typed codebases are not enjoyable to work with
- just reading the code is still chronically undervalued
- programmers aren't fungible
- rewrites are often worth it if for nothing else than forcing understanding
- building in excess capacity - in infrastructure, in teams, in timelines, in performance models - is absolutely essential to resiliency
- programmers are irrationally obsessed with language syntax
- as a society we need to stop building new things with bash
- most companies probably shouldn't be operating infrastructure that requires them to know what Kubernetes is
- high-level managers (CTOs, etc.) should know what technology their teams use and understand their tradeoffs, but should avoid prescribing minutiae
- anyone who manages a team that producers software as its primary artifact should at one time have been a programmer
- title inflation is rampant in software engineering
- 5 years of experience just isn't enough to truly be "senior" at anything
- most developers - and really, most people - can't write, can't give a public talk, and don't like reading
- in many companies, writing is not a useful communication mechanism but it is a useful medium for thought
- building something yourself (rather than picking it off the shelf) often has more utility than the built artifact itself


# Things I no longer believe

- SQLite is a toy database
- the code in the dependencies you use is special and somehow better than regular code
- functional programming is strictly better than the other forms
- Javascript is fun
- Ruby is fun
- Ruby is better than Python
- Java sucks
- people "learn in different ways"
- Scala is a fun and useful language with a great community
- short functions are easier to reason about
- object orientation is elegant
- everything should be rewritten in Erlang
- DRY ("don't repeat yourself") is a programming principle worth aspiring to
- immutable data is strictly superior to mutable state
- ORMs have a net-positive ROI on most teams
- a great language outweighs mediocre/bad tooling

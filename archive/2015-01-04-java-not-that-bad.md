---
layout: post
title: Quit whining. Java just isn't that bad
created: 2015-01-04
---

JavaScript may be the unequivocal programming language whipping boy, but Java
certainly has its detractors. This is doubly true in the startup world,
where dynamic languages rule the stack and Java is, roughly,  "your grandpa's
language".

The complaints against Java usually consist of some variation of the following:

- omg so verbose
- the type system is crap, gimme Haskell or gimme death
- have you even USED Maven?
- DID I MENTION THAT IT'S VERBOSE
- Sure I'll use an IDE. When I'm dead.

Most of these gripes are overblown, invalid, or amount to what is really just
Programmer Whining. In my transition to Data Engineer at Bellycard, I've learned
that Java also has a lot going for it. Here's why:

### Verbosity

Let's get this one out of the way.

I'm not here to tell you that Java is not verbose. It is verbose. It is
indisputable that Java takes more lines to express a similar idea than Python
or Ruby.

This notion that Java is "too verbose" is nothing more than whining.

I've complained about the verbosity at times, too. I've wailed to the heavens
for brevity. I just don't know that this sort of complaint is insightful or
actionable. You're already writing code. Quit whining and write a little more
code.

An example:

If you're writing in a dynamic language, it's possible you're annotating your
functions with comments. A simple function signature like `def foo(bar, baz)`
becomes

```ruby
# Returns: String
# bar = String
# 0 < baz < 10
def foo(bar, baz)
```

Type comments like the ones above, while better than nothing, come with no
compiler guarantee. They'll go out of date, they'll mislead. Really, your
options become: have the same verbosity as Java with none of the benefits
of a compiler or insult whoever is reading your library by not providing
type information, requiring us to read the entire implementation just to figure
out the contract.

Is there an argument to be made that more expressive languages with succint
grammars require fewer lines of code while helping the programmer accurately
convey intent? Absolutely. (see: functional programming)

This doesn't change the fact that most of us can probably say what we mean in
Java, even if it takes a bit more elbow grease.

In context, verbosity seems like such a silly gripe.


### The type system

It's been my experience that 1. I am not [John von Neumann](http://en.wikipedia.org/wiki/John_von_Neumann),
 and 2. This flaw
in my character makes it hard to hold the entirety of my program's state in my
head.

If I'm writing anything that approaches the length of a long script,
I find myself wanting types. If I'm reading someone else's long
script, I find myself *needing* types. Large libraries without types are
almost unbearable. I may have some kind of yet-to-be-identified condition where
not having type information causes my brain to shut off, but reading large
programs without any sort of compiler-verified types seems silly.

We have spent millions of human-hours and dollars developing compilers that will
help us be smarter. I'd like to use them. I'd like to get on with fixing and
building, not attempting to divine some other wizard's intent.

Java's type system, while admittedly clunky and not as expressive as
those in Scala or other functional languages, allows me to pick up someone
else's code and immediately get to work on determining which parts of the
program are important to the problem I'm trying to solve and which I can abstain
from surveying, based on the immediate knowledge of which types those parts of
the program interact with. This saves me time and sanity.


### Ecosystem

You wanna do math? Science? GUI stuff? Webapps? Big data? NLP?
Finance? Games? Mobile? Servers? It's almost certain you'll find top-of-the-line
libraries for any conceivable use. Is it perfect? Ha, no. Is there a lot of
stateful old cruft? Yep. But any community this massive is going to have cruft.

The reality for you and I, the programmers: Libs. For. Days.


### Toolchain

As a die-hard vim fan, I mean it when I say that IntelliJ is fantastic.

I use it with the vim plugin -- which is itself quite good -- so I lose
almost nothing. Does it take a little longer to start up? Sure. Does it use a
little more memory? Yup. Can I run it inside of Tmux? No. Do I care? Not
particularly.

I'm really, really, productive in IntelliJ, and I rarely ever finding myself
fighting it. It's fast, pretty, extensible, configurable, vimable, and works
well for writing code, interactive debugging, and managing dependencies.

If people are complaining about using an IDE, they're likely
complaining about having to use Eclipse, on Windows, in 2005. I'd hate IDEs too
if that's all I'd ever used.

Maven, the classpath, et al. is kinda a shitshow, but what language has a good
dependency management story, really? They're all pretty shit. It's hard to judge
Java solely on this basis, especially when IDEs do a decent job of abstracting
this from the programmer.

On the runtime front, the JVM is used everywhere, by everyone, to solve problems
you probably won't ever have. It's fair to say that it'll probably be fast,
stable, and instrumentable enough for your needs.


### Java the language

Why wait until now to talk about the language itself?
Because Java's ecosystem and toolchain make it so that often the
language itself owns a lesser proportion of the success/failure calculation. No
language exists in isolation, and this is certainly as true for Java as it is
for anything else.

If you know OO and for loops, it's likely you can be productive with Java in
hours. I was able to translate so much of what I know about OO from Ruby
directly to Java's comparatively simple constructs that I was pushing code the
same day I installed IntelliJ.

While it is not the most expressive language (classes as the fundamental
construct is a peculiar design choice, to say the least; no
lambdas, maps, folds, etc. until JDK 8), this has the unquantifiably large
benefit of predictability. You're going to use for loops, even when a `.map`
would be better. You're going to use a class, even when a tuple might
do. An interface will tell you exactly which methods you need to implement to
obey the contract. Your methods and classes will have visibility indicators and
return types.

Having these choices made by the language, while rigid and constraining,
allows the programmer to worry about modeling the problem and understanding the
domain. If you've ever had design paralysis in a more featured language, this
kind of constraint can be a gift.

Java is like that hammer passed down from your grandfather to
your dad, and then on to you: heavy, worn, and inelegant, but does exactly what
you think it does and nothing more.


### Inertia

Many contend that Java's staying power is a Bad Thing. I'm not so sure. If
you work at BigCorp and have to deal with contenders for Worst Code Ever
Written, any language that can soothe the pain away starts to look appealing.
But programmers write shit code in every language (I challenge you to find me a
Ruby app with 250,000+ lines of code that isn't a ball of mud).

Java the platform is here to stay, and the benefits are numerous.

Java will *continue* to receive attention and resources for quite a while.
In a world where JavaScript frameworks go from hotness to wontfix in less than
a calendar year, this means something. Java will see improvements for years to
come, and will continue to gradually incorporate features from what are arguably
better languages, as it has done with generics, type inference, and lambdas.

Another benefit of this longevity is that Java starts to grow larger than
itself. Creators of other languages target the Java platform as a host. JVM
languages like Scala, Clojure, and JRuby, get to both make
use of and contribute to the work that has gone in to the greater Java platform.

Java The Platform isn't going anywhere, so even if you never code in Java
The Language you'll probably realize some benefit.


### Postscript (no, not the language)

Java is not my favorite language, and there are significant
complaints one can raise about it with no remorse. I didn't write this piece to
raise those issues, though, and I'm not interested in doing so.

If one spends enough time near programmers (especially
programmers of trendy and/or esoteric languages), one hears how bad
Java is. I wanted to make the point that against all odds, Java has some good
things going for it, and the bad things we hear about Java more often than
not have their root in awful software architecture, inane engineering culture,
whiny programmers (myself definitely included), or some combination of the three.

A lot of the anti-Java rhetoric seems, in a way, to derive from classism. No,
not the object-oriented construct. The social construct. As in, there is a
certain uncultured/anti-intellectual class of Java-using programmers who "we're
all obviously better than" `/s`. It's like making fun of someone you
don't even know for shopping at JC Penney while sipping your $100 scotch or
programming your Haskell. It may even be "technically true" (note: you're an ass
if you ever say that), but it's nothing more than base, self-congratulatory
elitism and it doesn't help us get better at building things or bringing
beginners into the fold.

Not to defend stupidity or the loathing of thought. There are plenty of
unimaginative people, and anti-intellectualism abounds, but let's be real:
just as much of it exists at Ruby startup Foolish.ly as at
Java programming BigCorp. Be better.

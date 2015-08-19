---
layout: post
title: What I'm reading 8/11-8/18
date: 2015-08-18
---

## [The hacker hacked - Brett Scott](http://aeon.co/magazine/technology/how-yuppies-hacked-the-original-hacker-ethos/)

1. "Your curiosity takes you to places where you don’t belong. It thus becomes an assertion of individual defiance of social norms. The byproduct of such exploration is pragmatic knowledge, the disruption of standard patterns of thought, and also dealienation – you see what’s behind the interfaces that surround us, coming closer to the reality of our social world."

2. "I'm going to stake a claim on the word though, and state that the true hacker spirit does not reside at Google, guided by profit targets. The hacker impulse should not just be about redesigning products, or creating 'solutions' A hack stripped of anti-conventional intent is not a hack at all. It's just a piece of business innovation."

3. "Unlike the open uprising of the liberation leader, the hacker impulse expresses itself via a constellation of minor acts of insurrection, often undertaken by individuals, creatively disguised to deprive authorities of the opportunity to retaliate."

4. "The association of the hacker ethic with startups might have started with an authentic counter-cultural impulse on the part of outsider nerds tinkering away on websites. But, like all gentrification, the influx into the scene of successive waves of ever less disaffected individuals results in a growing emphasis on the unthreatening elements of hacking over the subversive ones.

5. "Through the lens of moral panic, a narrative emerges of hackers as a class of computer attack-dogs. Their primary characteristics become aggression and amorality. How to guard against them? How, indeed, to round out the traditional good-versus-evil narrative?

## [Keep the Aspidistra Flying - George Orwell](http://www.amazon.com/Keep-Aspidistra-Flying-George-Orwell/dp/0156468999)

1. "The sky was leaden..."

2. "They were the kind of people who in every conceivable activity, even if it is only getting on to a bus, are automatically elbowed away from the heart of things."

3. "...with patent-leather hair..."

4. "Twopence halfpenny and a Joey - twopence halfpenny."

5. "The kind of girl who goes in for Plenty of Clean Fun."

6. "He was forever snubbing friendly advances."

7. "This tea-making was the major household offense, next to bringing a woman in."

## [Up or Out: Solving the IT Turnover Crisis - Alex Papadimoulis](http://thedailywtf.com/articles/Up-or-Out-Solving-the-IT-Turnover-Crisis)

1. "Let's not ignore the elephant in the room: employees will quit. No matter what you say, no matter what cushiony benefits you give, no matter how hard you try, they will leave you. It’s just a matter of 'when'.

2. "...instead of fighting to retain top talent, we need to make top talent."

3. "What was once 'fresh new ideas that we can't implement today' become 'the same old boring suggestions that we’re never going to do'."

4. "I need you to document this process in detail so that any yahoo can understand it a year from now after you’ve left."

## [Miscomputation: Learning to live with errors - Tomas Petricek](http://tomasp.net/blog/2015/failures/)

1. "Computer programs do not always work as expected."

2. "It is important to understand that in the Erlang philosophy, having crashing processes is a perfectly normal thing and there is nothing wrong with it. So, miscomputation becomes not a thing to be avoided; not a thing integrated into the development process, but something that we can deliberately introduce into programs to deal with unexpected conditions."

3. "Programming [in Smalltalk] was not thought of as the task of constructing a linguistic entity, but rather as a process of working interactively with the semantic representation of the program, using text simply as one possible interface." - Mark Priestley, Science of Operations (2011)

## [Looking Past Our Racist Assumptions To See Africa - Quinn Norton](https://medium.com/message/looking-past-our-racist-assumptions-to-see-africa-f5bddab648ea)

1. "...I came to hate the term 'First world problems.' Most Africans I've met on either end of the continent, if I complained about cell phone battery life or social media or dealing with overbearing neighbors or whatever, would chime in with sympathy and understanding."

## [Beyond Bash - Shell Scripting in a typed, OO language - Li Haoyi](https://docs.google.com/presentation/d/11vZzXCfAA0aOFAuHA0nAvAzALGFGCH-dqHxx6XMgbk8/mobilepresent?pli%3D1&slide%3Did.p)

1. "How can we stop using the worst languages in the world to build our most important infrastructure?"

2. "Everything is global&#x2026;Everything is spooky!"

3. Non-Goals!

    1. "Monadic pure dependent-typed safety"

    2. "Reactive manifesto accreditation"

    3. "50-year enterprise maintainability"

## [Building an Elixir Mascot - Augie De Blieck Jr.](http://variousandsundry.com/cs/blog/2014/05/24/building-an-elixir-mascot/)

## [Rust in 2016 - Nicholas Matsakis and Aaron Turon](http://blog.rust-lang.org/2015/08/14/Next-year.html)

1. "Don’t know the difference between the stack and the heap? Don’t worry, Rust is a great way to learn about it, and I’d love to show you how."

## [Who actually reads the code? - Ole Tange](https://www.fsf.org/blogs/community/who-actually-reads-the-code)

1. "The comment was put in a section of the code that no one would look to fix or improve the software &#x2013; so, the source code equivalent to a dusty corner. To make sure the comment would not show up if some one just grepped through the source code I rot13'ed the source code."

## [Problems with Computer Science Education](https://www.fusionbox.com/blog/detail/problems-with-computer-science-education/567/)

1. "People are graduating without any notion of how to use a version control system like Git! I've seen teachers advocate having multiple copies of code in different folders as 'backups'."

## [shapeless/examples/monoids.scala](https://github.com/milessabin/shapeless/blob/master/examples/src/main/scala/shapeless/examples/monoids.scala)

{% highlight scala %}
{
  val f = Foo(13, "foo") |+| Foo(23, "bar")
  assert(f == Foo(36, "foobar"))
}
{% endhighlight %}

## [Inside Amazon: Wrestling Big Ideas in a Bruising Workplace - Jodi Kantor and David Streitfeld](http://mobile.nytimes.com/2015/08/16/technology/inside-amazon-wrestling-big-ideas-in-a-bruising-workplace.html?referrer)

1. "In Amazon warehouses, employees are monitored by sophisticated electronic systems to ensure they are packing enough boxes every hour."

2. "Noelle Barnes, who worked in marketing for Amazon for nine years, repeated a saying around campus: 'Amazon is where overachievers go to feel bad about themselves.'"

3. "For years, he and his team devoted themselves to improving the search capabilities of Amazon's website — only to discover that Mr. Bezos had greenlighted a secret competing effort to build an alternate technology. 'I'm not going to be the kind of person who can work in this environment,' he said he concluded. He went on to become a director of engineering at Twitter."

4. <https://twitter.com/MazMHussain/status/632955792556212229>

## [Ammonite - A Modernized Scala REPL](http://lihaoyi.github.io/Ammonite/)

1. "Ammonite is a cleanroom re-implementation of the Scala REPL from first principles. It is much more featureful than the default REPL and comes with a lot of ergonomic improvements and configurability that may be familiar topeople coming from IDEs or other REPLs such as IPython or Zsh."

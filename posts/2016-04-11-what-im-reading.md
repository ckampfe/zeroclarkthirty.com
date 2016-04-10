---
layout: post
title: What I'm reading 4/4-4/11
created: 2016-04-11
---

[The Blue State Model - Thomas Frank](http://www.tomdispatch.com/blog/176121/)

1. "A thousand dollars a pill, 30 grand a semester: the debts that are gradually choking the life out of people where you live are what has made this city so very rich."

2. "The ideology of educational achievement conveniently negates any esteem we might feel for the poorly graduated."

3. "Once the visitor leaves the brainy bustle of Boston, he discovers that this state is filled with wreckage &#x2013; with former manufacturing towns in which workers watch their way of life draining away, and with cities that are little more than warehouses for people on Medicare."

4. "Most of the old factories are boarded up, unmistakable emblems of hopelessness right up to the roof. But the ones that have been successfully repurposed are in some ways even worse, filled as they often are with enterprises offering cheap suits or help with drug addiction."

[What happened with my Security BSides talk - Violet Blue](http://violetblue.tumblr.com/post/44107008572/what-happened-with-my-security-bsides-talk)

1. "This could have been solved in a positive way if the people making the complaints had simply talked to me."

2. "I have presented talks about sexuality at tech conferences all over the world, and I make it clear each time that my talks are not technical and that they are about issues that affect the culture to which I am presenting."

3. "'No, they're here and they're not leaving. They told me they'll make it into a bigger problem if you do your talk.'"

[The resource leak bug of our civilization - viznut](http://countercomplex.blogspot.ca/2014/08/the-resource-leak-bug-of-our.html?m=1)

1. "Nearly every methodology, language and tool used in the virtual world focuses on cumulative growth while neglecting many other aspects."

2. "Tell a bunch of average software developers to design a sailship. They will do a web search for available modules. They will pick a wind power module and an electric engine module, which will be attached to some kind of a floating module. When someone mentions aero- or hydrodynamics, the group will respond by saying that elementary physics is a far too specialized area, and it is cheaper and more straight-forward to just combine pre-existing modules and pray that the combination will work sufficiently well."

3. "The mainstream of open source / free software, for example, is a copycat culture, despite its strong ideological dimension. It does not actively question the philosophies and methodologies of the growth-obsessed industry but actually embraces them when creating duplicate implementations of growth-obsessed software ideas."

[Clojure Compilation: Parenthetical Prose to Bewildering Bytecode - Nicholas Kariniemi](http://blog.ndk.io/clojure-compilation.html)

1. "Clojure uses an extra level of indirection for calling the print function. Java fetches java.lang.System.out and calls invokevirtual to print. Clojure loads the var pointing to the function, calls invokevirtual to get the function value, casts it to a function, and calls invokeinterface to print."

2. "According to Clojure.org documentation, for each namespace a loader class with an \_<sub>init</sub> suffix is created."

[Managing two million web servers - Joe Armstrong](https://joearms.github.io/2016/03/13/Managing-two-million-webservers.html)

1. "There are some things we explain because we know other people don't understand them and there are some things we don't explain because we assume that everybody else knows them."

2. "If we want to pack sand in barrels it's easy. The grains of sand are so small that it's easy to completely fill the barrels. Packing huge boulders is difficult, they don't pack well and much space is wasted."

[American Big Brother: A Century of Political Surveillance and Repression](http://www.cato.org/american-big-brother)

1. "Whether protesting the march to war, federal policy on AIDS research, civil rights violations, or simply enjoying the Nevada desert at a 'Burning Man' gathering, the common theme that emerges is that simply publicly expressing strong political views that run counter to the prevailing government political paradigm is often enough to trigger federal government surveillance."

2. "The FBI conducted sureillance and informant/penetration operations against the ACLU which stretched over at least a 56-year period."

3. "The FBI's surveillance of and subversive actions against the Socialist Party of America effectively politically destroyed the organization for decades."

[Does Elixir have a life outside of the Phoenix framework? - iszlail](https://www.reddit.com/r/elixir/comments/4coqg4/does_elixir_have_a_life_outside_of_the_phoenix/)

1. "'Absolutely it does, and we are seeing a diverse, and thriving ecosystem around Elixir. The thing that excites me the most outside of Web is the Nerves project and Elixir eating the world on embedded devices.'" - Chris McCord

[Layoffs - Keith Gregory](http://blog.kdgregory.com/2016/03/layoffs.html)

1. "Strategic work is for the future: shaping your next product or next release. Tactical work is about now: operations, bugfixes, responding to immediate customer desires. When a company is forced to choose, they'll value tactics above strategy every time."

[Thread pools! How do I use them? - Julia Evans](http://jvns.ca/blog/2016/03/27/thread-pools-how-do-i-use-them/)

1. "In my case, I was reading a bunch of data off disk. maybe 10GB of data. And I was submitting all of that data into the ExecutorService work queue. Unsurprisingly, the queue exploded and crashed my program."

2. "When working with these concurrency abstractions I end up having to worry almost immediately about what's underneath because the underlying queue has filled up and crashed my program."

[Erlang 19.0 Garbage Collector - Lukas Larsson](https://www.erlang-solutions.com/blog/erlang-19-0-garbage-collector.html)

1. "Generational garbage collection aims to increase performance at the expense of memory. This is achieved because only the young, smaller, heap is considered in most garbage collections."

2. "The generational hypothesis predicts that most terms tend to die young, and for an immutable language such as Erlang, young terms die even faster than in other languages. So for most usage patterns the data in the new heap will die very soon after it is allocated."

---
layout: post
title: How this site works
created: 2020-02-10
---

The site has two main concepts, posts and pages. They are basically the same, with the exception of how they attach to the index page. Posts are listed chronologically by date, descending.
Pages appear in the nav bar to the right of the title.

Both pages and posts are written in Markdown and parsed with [pulldown-cmark](https://github.com/raphlinus/pulldown-cmark) which works well. 
There is a custom, non-Markdown frontmatter on each document that describes the layout to render for the document, its title, and its date of creation. I wrote a little [Nom](https://github.com/Geal/nom) parser to parse this frontmatter into a struct and strip it from the rendered HTML.

HTML is rendered with [Tera](https://github.com/Keats/tera) templates. These are not as nice as the Hiccup templates in the Clojure version, but nothing out there is.

RSS for the blog is available at https://zeroclarkthirty.com/feed . This is rendered with the [rss](https://github.com/rust-syndication/rss) library.

CSS is [minified.](https://github.com/GuillaumeGomez/minifier-rs)

There really isn't much to this process. The whole thing is just reading Markdown, parsing it, combining it, and rending it in templates.

Outside of the above nuts-and-bolts, there are a few maybe interesting features of this site.
There's no Javascript unless its necessary for a post-specific demo or embed. This blog is 99% text and Javascript doesn't add anything to it. I don't hate the features that Javascript can add to sites, but most sites don't need Javascript-powered navbars or inifinite scrolling or modals.

All CSS is rendered inline, in the head element of every page and post. This may sound old fashioned, but it has the effect of cutting the number of external requests any document makes.
Every page should have a minimum - and for 99% of documents, maximum - of two requests. The actual HTML and the favicon.

There are no trackers or other crap like that. Maybe I'll put something like that in the future, but it's not likely. I write this site for myself, to externalize things, not to "build an audience" or run ads or some other crap. If you like or don't like something I'd much rather you just email me or tweet at me.

If you'll permit a digression, I remember when single-page applications were on the uptake, there was - and still is - a lot of noise about full page reloads. I find this to be a poor framing of the real problem a lot of the time. What people really care about is speed and continuity. How long does it take to see the thing they want to see, and is it the logically correct continuation of what they told the site to load. There are many ways to get there. (DHH and his insistence on Rails + JS where necessary was proven right here)

Who cares that the page doesn't refresh the page if it takes 1.5 seconds and 35 requests to go from one view to another? A [post](https://www.gatsbyjs.org/blog/2020-01-30-why-gatsby-is-better-with-javascript/) on the Gatsby JS blog itself makes 14 requests and loads 1MB of content and then spends quite a few words talking about the benefits of not reloading the whole page, preloads, smaller React runtimes, etc.

Gatsby seems to have ~150,000 lines of Javascript, where my shitty little site has about 360 lines of Rust and HTML templates. For those counting, that's ~0.2%. These are not directly comparable but nevertheless it is a useful illustration. Gatsby offers much, much more, that many people find valuable. I say all this not to pick on Gatsby in particular, but more to ask, are we being honest about what we are and are not capable of understanding? Is it, long term, easier to use someone else's 150,000 lines than it is to write your own 360 lines?

Sometimes it makes sense to take the 150,000. But just as important, sometimes it makes sense to write the 360.

If you want to write something to take your thoughts and put them on the internet, you can do that. You can figure all of that out, and write it all yourself. It can take very few lines of code, every one sharp and understood.

The cheapest way to solve a problem is to not create it in the first place.

(But Clark don't you use libraries and compilers and operating systems and and and and.......Yes. Shut up.)


## History

I've published this site since the end of 2012. I was overseas, depressed, and pretty unhappy with myself and my situation, so I decided to start a blog to distract myself.

First, it was on Tumblr. Tumblr was great and its a damn shame what happened to that community.
As I was entering Dev Bootcamp at the end of 2013, I migrated to Jekyll.
Later I migrated to some guy's Elixir blog generator. I think it was called Obelisk.
Obelisk was alright, but needed some help and did more than I wanted.
At some point I forked Obelisk and removed a bunch of it.

Later I wanted to get it out of Elixir, for whatever reason, and rewrote most of what I had previously
in Clojure, and called that project Stanley.

Stanley worked great for years. Clojure is lovely and I had that project hammered down to a fine edge.
I was able to parallelize the parsing and rendering which sped up the generation of the site massively.
The biggest annoyance was having to start the JVM and load Clojure to build the site. This could take seconds for a workload that seemed like it shouldn't take seconds.

I was getting curious about Rust, and ported Stanley to Rust. The current version of this site is generated by [Stanley](https://github.com/ckampfe/stanley-rs).
This was relatively easy even for someone who was new to Rust, and probably most surprisingly the length of the resulting code was about the same as the Clojure version.

One benefit was the screaming fast runtime. No JVM startup and Clojure classloading brought the runtime down to milliseconds. Another benefit has been my confidence in maintenance. In developing the Clojure version, I routinely broke data contracts or forgot how something fit together. When I change the Rust version, I have more confidence that things cohere, even if they are not 100% correct. Correct is hard. Coherent is not as good but often easier, more readily automatable, and just as useful.

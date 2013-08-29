---
layout: post
title: Assessment Now \- Dev Bootcamp
date: 2013-08-28
---

The title to this post is obviously hyperbole. There are still 9 or 10 days before we get to start on what I'll call the Phase 0 assessment.

I feel good about where I am. I've learned a ton about Ruby just by doing the various challenges and reading an absolute shit-ton of the language documentation. All sorts of stuff about lambdas and procs, currying, string manipulation, *args, hash querying, enumerables (for some reason these are really interesting to me), and many others. I like Ruby's one-liner ternary operators, though they often exchange a significant degree of readability for a not-all-that-important degree of terseness.

The most interesting part, though, has been reading other people's code. That has been, hands down, the most informative and delightful part of the whole thing. I could take or leave reading programming books (the ones picked out for us, anyway...not all programming books, certainly), I could do without typing exercises, etc., but solving problems in parallel with your peers -- without the suffocation of the usual "group project" schoolwork-bullshit -- is many things, all of them satisfying: uplifting, confidence affirming, materially informative, inspiring, and I have found that it has fostered in me a light-hearted competitiveness, without any of the "I win you lose" attitude that you get from sports.

I feel good to the point where I've decided that I'm going to do double-duty, so to speak, reading Marijn Haverbeke's [Eloquent JavaScript](http://eloquentjavascript.net/index.html) while continuing to study and solve other problems (Project Euler, Rubeque, and the like). JavaScript is an area where I will be putting in a substantial amount of work and thought. The language gets plenty of criticism, but it isn't going anywhere. Lua is not going to take over the browser tomorrow, and neither is Smalltalk or Scheme or any of the supposedly higher-minded languages. JavaScript has invaded the server-side (Node, Meteor), it has invaded [hardware](http://technical.io/), and it has found a way to make itself much, much [faster](http://asmjs.org/) in certain applications. In a way it the C of the web, by being "good enough" and acquiring sufficient territory early enough to stake its claim to usefuless with some gusto. 

My desire to improve my skills in this language stem from both my personal curiosity and the language's continued importance, as well as what I consider to be a failure in my interview at another developer school: Hack Reactor. I was successful in the pre-technical-interview challenge of finishing a partially-built chat application in JavaScript/jQuery, but when it came time to chat and do some live coding with one of the Hack Reactor teachers, I massively botched the operation. Sleeping through my alarm and waking up late, I groggily managed to fuck up things like semicolon placement and for-loops. I left the interview feeling like all work I had put into the chat application was gone. JavaScript fell off my radar due to my (correct) assessment that I had botched my chance at HR and needed instead to focus on killing my remaining interviews. So here we are.

I've already successfully created one implementation of an idea I've had for a while, [a little photographic flash calculator](https://github.com/ckampfe/flashcalc), but it currently exists only as a .rb that you run locally. The idea is to have it on your phone, so you can pull out your camera and a flashgun or two and have some fun, easily passing off things like exposure compensation, flash power, and aperture to the program. As it's ridiculously lightweight, I'd much rather use it as an excuse to improve my JavaScript and frontend skill, as opposed to Sinatra or some other backend solution of that kind (which I'll probably be learning at Dev Bootcamp anyway).

To accomplish this, the plan is as follows:

0. Rewrite the logic in JavaScript. (not hard; I used few Ruby-specific features)
1. Create a simple HTML/CSS desktop prototype to prove it works
2. Figure out what it would take to make it responsive to screen size, so it could be easily used in its orignally conceived form, ie, as an on-location flash calculator on someone's smartphone. 
3. Eye candy/polish.

I know almost nothing about responsive web design (or web design in general, to be perfectly truthful), but honestly the idea isn't even that complicated. No databases, no heavy number crunching, etc. It's a tiny little sliver of functionality, and if I can't figure out how to make it properly display on a 4-inch 720px-wide screen, I should probably just quit now.

Now comes the part where, as a former captain of the Gustavus High ultimate team used to say, one must "put your balls to the grindstone". How's that for a metaphor?

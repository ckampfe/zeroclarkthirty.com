---
layout: post
title: Bellyapp - what I learned
date: 2014-03-27
---

So I created a little [math game](http://mathchallenge.nodejitsu.com) as part of
applying to the folks over at [Belly](http://bellycard.com).

A few observations I've collected over the course of building my first-ever
Node app:

###Learning Node has been fun. No, really. Hi haters
It's easy to talk shit about Node. Too easy. "One thread?! A community of children?! JavaScript?! Callback Hell?!" You get the idea. Programmer opinions are: 1. A dime a dozen; 2. Never particularly difficult to take or hold; and therefor 3. Boring. I'm not going to say Node is awesome and should be used for everything (I don't really know anything about anything yet, anyway), but I had fun learning it. It just wasn't that hard to wrap my head around after getting to know something like Sinatra or Rails.

As a platform to bang out little APIs or socket interfaces, it is really cool. The standard lib is OK, the modularization capabilities are awesome (really, ```var something = require('something');```  and the ability to simply, easily ```module.exports``` your own modules is is great), and the networked nature of the whole thing 'just works'. Require http and maybe Express if that's your cup of tea, throw up a server, and bang, you're working.

I have not dug into Node as much as I would like (stuff like streams, promises, and generators all sound interesting), but I plan to come back to it if I have a project that is network heavy and/or has no requirement for a relational database. Node itself is like anything else: good at somet things, bad at most. For this reason (and the fact that it is based on JavaScript, which will outlive us all) I think it should have a place on my metaphorical Batman utility belt.

###Async integration tests are tough
Selenium itself may be somewhat clunky -- and with rather verbose Java-esque APIs --
but the real problem I had was expecting actions to have completed or
fired by the time an assertion ran. The nature of asynchronous code mixed with
my inexperience with this programming style ensured that this was a frustrating experience at times.

That said, testing the app's socketed behavior itself wasn't that hard after I found [this post](http://liamkaufman.com/blog/2012/01/28/testing-socketio-with-mocha-should-and-socketio-client/) about testing Socket.io. Socket.io is itself well documented, and applying this documentation via Mocha proved to be fun and insightful.

###npm is pretty neat
Really. I had a great experience getting dependencies, __automatically__ loading them into my package.json file. Properly declaring which were true runtime dependencies and which were dev/test dependencies -- again, automatically -- was pretty neat as well. This is something that Rubygems should have had years ago. Maybe it does and I'm just a noob chump who doesn't know stuff. (FYI, this is definitely true.)

###Loading frontend dependencies/libs/modules is an absolute shitshow
As someone who has to this point been content to enjoy the sense of smug satisfaction and high-minded sophistication in the backend programming community, I'm fairly sure at this point that 90% of the reason why people hate JavaScript is that the process of attempting to synchronously load dependencies in an asynchronous environment is horrific (the first 5% of the remaining 10% has to do with the world's worst type coercion and the other 5% is related to the fact that every. fucking. library. is called. $LIBRARY.js. I KNOW IT'S JAVASCRIPT, OK? CAN YOU HEAR ME BRENDAN?).

This isn't Node's fault, really. It's more of a JS language/browser antifeature, from what I can make out over the sound of everyone's braying. Apparently this is to be rectified or at least address in ES6, which would be nifty. JavaScript is a fun functional language, and it deserves at least the dignity of not having its pants fall down in front of the entire school.

In creating [Battlestar Mathematica](http://mathchallenge.nodejitsu.com) I went with [RequireJS](http://requirejs.org/), which is probably known to every man and beast who has done frontend work, ever. Since I'm a noob, I attempted to figure it out from square zero. Let me just say: you know there is something wrong with frontend package management when explaining the process and method of loading dependencies takes as many words as there are in the RequireJS site. My impression was not aided by the fact that I had to modify a few of my helper modules to take the RequireJS' module format as opposed to the AMD/Node format. Grumble grumble duplicate code grumble.

###I should have gone with [chai](http://chaijs.com/) instead of [should.js](https://github.com/visionmedia/should.js)
Should.js isn't bad. It's a nice little TDD framework that does most of what anyone could want. I had two main problems with it. First, from the fact that it is based on the ```Object.action.should.eql(something)``` assertion grammar. I was looking for a more BDD-style grammer, ie, ```expect(Object.action).to.eql(something)```. It's not a big deal, but I wanted to be consistent with what I already know (and am still learning) about RSpec.

The second problem is related to Should.js' lack of integration with Selenium and node-webdriver. I found the overall experience with Selenium to be clunky. Only after completing most of my integration tests through a non-zero degree of tedium and irritation did I find [chai](http://chaijs.com/) and its [webdriver extension](http://chaijs.com/plugins/chai-webdriver) that nicely wraps Selenium. :(

###Jade is nice
Though I ended up pulling it out and using [HTML5 Boilerplate](http://html5boilerplate.com/), I started this project off using [Jade](http://jade-lang.com/). Created by the prolific TJ Holowaychuk (a man who seems to be pulling up the Node community by sheer force of will), Jade is a whitespace-sensitive markup language that compiles to HTML. It resembles/is basically Haml, which is something I also have little experience with. Jade and I had fun during the brief time we spent together, doing away with formalities like < and > and the like.

###Deploying Node apps is stupid-easy
Belly stipulated that I should deploy on Nodejitsu, and this proved to be a blessing. Deploying on Nodejitsu was almost insultingly easy. After wrestling with the Rails asset pipeline on Heroku, fighting Heroku's silly inability to properly provision Websockets in 2014, and figuring out how rearchitect and deploy to AWS in an emergency, this deployment was like a gentle massage combined with Mom's chocolate chip cookies. Download Nodejitsu's command-line utility. Run it. It asks you a few questions about the project, checks the validity package.json file, and then uploads your project and spins up an instance. Are you not entertained?

* * *

The project -- [Battlestar Mathematica](http://mathchallenge.nodejitsu.com) -- is a super-simple math game I created for the good folks at [Belly](http://bellycard.com) in order to learn a bit about Node.js. The code is licensed AGPL can be found at my Github, [here](https://github.com/ckampfe/battlestar-mathematica).

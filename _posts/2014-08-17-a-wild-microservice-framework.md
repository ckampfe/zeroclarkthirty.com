---
layout: post
title: A Wild Microservice Framework Appears
date: 2014-08-17
---

At Belly, the Platform team are the plumbers, building and maintaining the backend services that move and process the massive amounts of data we encounter every day.

Given our heavy use of [Napa](https://github.com/bellycard/napa) for all things API, I wanted to pick up a side project that would help me learn about services architecture while providing some value to the team -- a sort of R&D project. 

As such, I've begun work on [Cork](https://github.com/ckampfe/cork.g8).
Cork exists with the intention of learning from the ideas in Napa, Grape, Sinatra, and other microframeworks to quickly build RESTful APIs. The twist (sorry) is that Cork helps you build APIs in Scala, not Ruby. 

## Why Scala? ##

Scala differs from Ruby in a few fundamental ways, like the static type system and more fully-baked functional features, but remains similar in others, like the ability to eschew most boilerplate code, the huge ecosystem, and -- most importantly -- the speed at which developers are able to simply get shit done.

So far, it has been a much easier jump than I expected.

## Easy ##

My hope for Cork is that it will match the convenience and ease-of-development of frameworks like Napa or Sinatra. To this end, Cork provides conveniences like a REST API code generator and higher-level DB interaction (like Napa), while remaining uncluttered -- and fast -- by eschewing full-stack features like mailers, views, or asset compilation. RESTful JSON resources is the name of the game.

Cork's design goals aren't original, and this is for the best: It is inspired heavily by Napa, and leans on battle-tested Scala and Java libraries like [Scalatra](http://scalatra.org/), [ScalikeJDBC](http://scalikejdbc.org/), [HikariCP](http://brettwooldridge.github.io/HikariCP/),
and [Akka](http://akka.io/).

## Is Cork ready for prime-time? ##

No. I have only been working on Cork for a few weeks, so it is missing crucial
features like tests for the generated code, solid documentation, logging, and easy deployment.

It is definitely pre-alpha software, but large parts of the project
are functional today.  The basics -- one-step API generation, routing,
async responses by default, schema migrations and database persistence --
are all usable.

You can check Cork out [here](https://github.com/ckampfe/cork.g8). A word of warning: the project is under heavy development, and breaking changes are guaranteed to occur frequently for the forseeable future.

## But will it blend? ##

To see whether or not Cork was a lost cause, I decided to take it -- and a Napa service of similar functionality -- for a few laps around the track.

It took ~15 minutes each to create the services using the REST API generation feature of their respective frameworks.

Disclaimer: like all benchmarks, this one is probably poisonous if taken without a dollop of salt.

### Summary of not-so-serious methodology ###

- What: HTTP GET a collection/list of 6 JSON objects from Napa and Cork-based services. Client makes request, service retrieves data from MySQL with ORM, parses it to JSON, and sends it back to the client.
- How: Apache Bench, average of 3 runs, whole numbers.
	- Napa: 1 Unicorn worker, port 9393
	- Cork: Jetty, port 8080
- Why: Even though almost everything matters more than speed, it's still fun to race.

### ab -c 20 -n 4000 127.0.0.1:$SERVICE_PORT/woos ###

##### Napa #####
- Requests per second: 198 reqs/sec (196 + 197 + 201)
- Mean time per request: 100 ms (101 + 101 + 99)

##### Cork #####
- Requests per second: 1093 reqs/sec (978 + 1108 + 1195)
- Mean time per requeset: 18 ms (20 + 18 + 16)

### ab -c 80 -n 4000 127.0.0.1:$SERVICE_PORT/woos ###

##### Napa #####
- Requests per second: 200 reqs/sec (201 + 201 + 200)
- Mean time per request: 396 ms (396 + 396 + 398)

##### Cork #####
- Requests per second: 1167 reqs/sec (1235 + 1141 + 1126)
- Mean time per request: 68 ms (64 + 70 + 71)

### ab -r -c 120 -n 4000 127.0.0.1:$SERVICE_PORT/woos ###
##### Napa #####
- Requests per second: 190 reqs/sec (201 + 198 + 173)
- Mean time per request: 631 ms (598 + 604 + 691)

##### Cork #####
- Requests per second: 1310 reqs/sec (1229 + 1314 + 1387)
- Mean time per request: 92 ms (98 + 91 + 87)

### ab -r -c 200 -n 4000 127.0.0.1:$SERVICE_PORT/woos ###
##### Napa #####
- Requests per second: 197 reqs/sec (192 + 199 + 200)
- Mean time per request: 1012 ms (1038 + 1000 + 998) (2, 102, and 78 failed reqs)

##### Cork #####
- Requests per second: 1437 reqs/sec (1435 + 1436 + 1440)
- Mean time per request: 138 ms (139 + 139 + 138) (118, 66, and 22 failed reqs)

### Ludicrious speed ###
Additionally, Cork was able to maintain > 1200 reqs/sec even when thrown a fairly ridiculous load (for a single instance, on a laptop), like 1000 concurrent connections (`-c 1000`). The average response time slowed to ~ 760 ms, but this is to be expected. 

Napa and 1 Unicorn worker, by contrast, was not able to complete a benchmark with more than 250 concurrent connections (`-c 250`). To handle as many concurrents would conservatively take at least 5 Unicorn workers, each able to provide a response time of only > 1200 ms -- almost double that of the Cork service.

Cork's average response time first went over 1000 ms when given `-c 1300`.


Cork IRL: 
![Cork IRL](http://i.imgur.com/gKK2mZf.gif)

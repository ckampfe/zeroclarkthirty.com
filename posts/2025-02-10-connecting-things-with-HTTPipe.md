---
layout: post
title: Connecting things with HTTPipe
created: 2025-02-10
---

I've been working on a little project lately called [HTTPipe](https://github.com/ckampfe/httpipe) (or, `httpipe`, as I will refer to it), which is an implementation of (as far as I can tell) Anders Pitman's original [patchbay](https://web.archive.org/web/20241105063704/https://patchbay.pub/). 

`httpipe` is a little HTTP server that allows you to share data between HTTP clients. One client (the producer) makes a `POST` request with some data, and another client (the consumer) makes a `GET` request and receives that data.

It looks like this:

```
# the producer client sends "hello"
curl -XPOST /channels/v1/do_work -d"hello"
```

```
# and the consumer client receives "hello"
curl -XGET /channels/v1/do_work
hello%
```

Producers and consumers find each other other by making requests to channels. Channels have names, and they exist as members of a namespace.

In the above example, the channel name is `do_work` and the namespace is `v1`. Namespaces can have many channel names, and channel names are unique per namespace, so you can have `/v1/do_work` and `/v2/do_work`.

Channel names and namespaces can be anything, and they are created when they are used, and destroyed when they are no longer used. The Perl people call this [autovivification](https://en.wikipedia.org/wiki/Autovivification).

Channels are interesting for a few reasons.

Both producers and clients block until their counterpart (a consumer for a producer and vice versa) connects to the server on their channel, so channels function as a coordination mechanism, allowing a consumer and producer to "meet" in both place and time. For a given channel, only one consumer ever receives a given producer's payload.

The `httpipe` server queues up producers and consumers in the order in which they connect, and an arbitrary number of producers and consumers can connect and wait.

This set of features leads to a surprising degree of generality, and indeed, you can use channels for all kinds of things, since basically every computer system ever made has an HTTP client.

One can use `httpipe` as a kind of job queue, with a group of consumers connecting to a channel and waiting for a producer to feed them work, which they will receive in the order they connected.

Or as a chat system, with two channels, one for each sender. Or a short-term file sharing system. Or a notification system, where a consumer waits until it receives a message from a producer program and then triggers a system notification API.

There are all kinds of things you can do when you can connect things easily. I think this is a really elegant idea, and I only wish I had come up with it.

`httpipe` is not much code, and you can browse it [here](https://github.com/ckampfe/httpipe).

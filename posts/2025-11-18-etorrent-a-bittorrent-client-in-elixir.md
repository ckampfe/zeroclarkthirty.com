---
layout: post
title: etorrent: a bittorrent client in elixir
created: 2025-11-18
---

Recently, I've been working on a [BitTorrent](https://en.wikipedia.org/wiki/BitTorrent) client called [`etorrent`](https://github.com/ckampfe/etorrent).

For the uncorrupted, BitTorrent is a protocol for doing peer-to-peer file sharing that was hugely popular in the early 2000s.

This is not a deep-dive into the BitTorrent protocol, but at a very high level BitTorrent works by breaking files up into many small pieces and then allowing clients ("peers" in BitTorrent parlance) to download any given piece from any other peer that has that piece.

This scheme allows peers to download dozens or hundreds of pieces simultaneously from as many other peers as their internet connection will tolerate, permitting very high download rates by distributing the work of uploading of pieces amongst all of the peers who already have the desired data.

Although internet speeds have gotten tremendously faster since BitTorrent's glory days (in 2002 I would have laughed at the idea of gigabit fiber being $80/month), BitTorrent remains viable for downloading truly large datasets like games, operating systems, raw scientific data, etc.

I love the idea of BitTorrent, and I wanted to understand how the protocol, so over the years I've attempted to build BitTorrent clients multiple times in multiple languages, some more complete than others. This time, it's written in Elixir (see end of post for the supervision tree).

My goals have been twofold: to understand the BitTorrent protocol itself, and to understand the architecture of a software system that implements it.

`etorrent` is my most complete attempt yet. At time of writing I can confirm it is capable of both leeching (downloading) and seeding (uploading) at least 1 torrent file of my creation to/from a non-`etorrent` client (in this case, [webtorrent](https://github.com/webtorrent/webtorrent)). `etorrent` doesn't implement every protocol extension and is almost certainly buggy in all kinds of ways with respect to all of the different combinations of trackers and clients out there in the wild, but it works, with an extremely small sample size, admittedly.

Building `etorrent`, I've engaged with:
- binary protocol parsing and serialization
- designing OTP supervision trees
- TCP client management
- selecting which pieces of a file download first (the ["rarest first" algorithm](https://dl.acm.org/doi/10.1145/1177080.1177106))
- plenty of data storage/retrieval problems (how do you store which peers have which pieces?)
- bencode parsing and serialization (BitTorrent's own metadata format)
- testing all of this stuff

There is plenty more I could do with `etorrent`.

I'd like to figure out how to better test a deeply stateful TCP client. I tend to eschew mocking as it's almost always brittle, and I want to avoid having a hard dependency on another, separate BitTorrent client, so there is a bootstrapping problem to it. I'd like to better understand which parts of the protocol real-world clients tend to implement strictly and which parts they tend to implement laxly. I'd like the UI to be better. I'd like to improve the incoming peer connection flow, as right now it is very complicated. I'd like to look at other OTP projects out there and see if there are better ways to design supervision trees for a problem like this.

This has been fun. I've learned a ton about the BitTorrent protocol itself, but also about how to design a massively concurrent network system using Elixir and OTP. And it's a surprisingly small amount of code: about 3,500 lines of source code and about 1,000 lines of tests.

Maybe I'll do a series of deeper-dive posts on some of the design, but for now I just wanted to get something out.

Check out the [source](https://github.com/ckampfe/etorrent) if you like.

For the Elixir/Erlang people, the supervision tree looks like this:

![supervision tree](https://i.imgur.com/mSarPKV.png)
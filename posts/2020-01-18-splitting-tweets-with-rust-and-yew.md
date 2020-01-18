---
layout: post
title: Splitting Tweets with Rust and Yew
created: 2020-01-18
---

I wrote a [little tool](https://prod.d2n2lauouhj5eu.amplifyapp.com/) that helps you split a larger body of text into tweet (or other) sized pieces.

<video src="https://i.imgur.com/Q81Y19G.mp4" width="640" height="480" autoplay="true" loop="true"></video>

Input some text, and drag the slider to the maximum length each piece should be.
The program will try to fill each piece as much as possible while only splitting on whitespace.
That is, it should hopefully never split in the middle of anything that isn't a space or a line break.

I think it's neat, and not just for what it does, but how it was made.
First, I wrote a Rust library to [split text on whitespace.](https://github.com/ckampfe/tweet_split)
This is a standard Rust library with a `lib.rs` file that exposes some functionality and a `main.rs` file
that defines a simple CLI interface that looks like this:

```
$ tweet_split -h
ts 0.1.0

USAGE:
    tweet_split [OPTIONS] [string]

FLAGS:
    -h, --help       Prints help information
    -V, --version    Prints version information

OPTIONS:
    -i, --input-path <input-path>                Location of text to tweetify
    -l, --max-tweet-length <max-tweet-length>    The maximum length of a tweet, in characters

ARGS:
    <string>
```

Then I used the Rust web framework [Yew](https://github.com/yewstack/yew) to make a [simple web app](https://github.com/ckampfe/tweet_split_web) that compiles the previously mentioned whitespace-splitting library to WASM and exposes it on the web with some simple form and slider controls.

I didn't have to modify the splitting library at all in order for it to work on the web.
I just included it in the web application, and used the Yew framework to handle the event-input and DOM rendering functionality.
Overall this was incredibly pleasant. The compiler was a helpful tool along the way, and I knew that when things compiled my program would either handle inputs correctly or crash, rather than allow bad data.

I think this kind of work is going to be big in the near future: porting existing, useful Rust code to web interfaces to expose it to new, non-technical audiences. 

The notion that WASM is useful only for high-performance contexts like graphics or scientific computing is incorrect. 
I see a few reasons why WASM will reach way beyond the high-performance domains.

First, being able to use existing code in new contexts with minimal changes is the holy grail for many companies, and in the coming years we will start to see many companies and groups port their existing Rust (or C, C++, etc) code to WASM contexts with surprisingly little adaptation for huge wins. Rust is the clear leader in treating WASM as first class, and we will see much more WASM as Rust starts to make its way along the adoption curve into larger and more prolific shops.

We are also going to see more Rust (and other non-JS) webapps become popular in domains where reliability and security are supreme, like banking or healthcare. It will perhaps take longer to write these frontend apps in Rust, but the total cost of ownership over the 5, 10, and 20 year timespans of banks and hospitals will be lower than those of Javascript by noticeable margins. 

Finally, all of this attention will contribute to WASM becoming much more stable and well supported by browsers, so the ecosystem of tools for profiling it and debugging it will mature, the sizes of produced binary will come down, and development will get easier as frameworks like Yew start to mature. 

This will push WASM's adoption downward from the high security, high reliability use cases to the more straightforward, lower-budget applications, and WASM will start to supplant many existing Javascript use cases, from internal tools to small/mid-market consumer facing services.

This will be especially prevalent in small, highly-capable, tech-forward shops that would like to use something other than Javascript due to previous maintenance nightmares, but fear straying too far away from the mainstream path.

Overall, WASM has a bright future, and while it will likely never supplant Javascript outright, it will maintain a significant minority position, especially as the costs of security and maintenance continue to increase.

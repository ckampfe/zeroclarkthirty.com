---
layout: post
title: It's not about you
created: 2022-07-22
---

I just read [this post](https://v5.chriskrycho.com/journal/some-thoughts-on-zig/) and its [HN thread](https://news.ycombinator.com/item?id=32187626). The post explores some of the things the Zig language does different than Rust, and how the appeal of Zig differs from that of Rust.

My issue isn't with the post itself, which explores the real differences and appeals of Rust and Zig well enough, but rather the HN comments, which are honestly pretty awful and indicative of what I find to be a corrosive mindset unfortunately too widespread among developers.

Let me explain. Among the class of chattering HN developers (the linked thread includes a representative sample but there have been many examples lately), we seem to have turned a corner from "Rust is very exciting! This is going to prevent so many bugs!" to "Rust is sooooo complex, it's basically worse than C++ at this point".

These "Rust sour Zig sweet" threads have almost universally devolved into developer navel-gazing about how a tool makes them feel. Common examples recently include things like these (I am paraphrasing rather than quoting directly):

    - "Zig is so small that I can totally understand it, and I love that"
    - "I am so much faster with Zig"
    - "Rust just makes me feel dumb"
    - "I spend so much time fighting the borrow checker and it slows me down"
    - "Rust just so big"

Now, these claims aren't really provable in a real way, at least not in any way that I've seen. Sure you can count lines of code, or PR's closed, or contributors, or something else, but these comments are really just reports about how developers *feel* about using tools.

And these perceptions are valid! And they do matter. Everyone is entitled to their own perception about tools. We are entitled to use and discard tools as we see fit, to the extent that professional circumstances allow as much. And perception, insofar as it affects our ability to be motivated and continue to do productive work, does affect users. The Rust community certainly understands this, and works tirelessly to make Rust and its tool ecosystem more developer-friendly (see Cargo and Rust's continually improving error messages for evidence here).

But we, as a community, wildly overvalue these perceptions. Especially lately.

Most surprising to me, and the reason why I am writing this post, is that what I don't see in these threads - almost ever! - is anyone talking about the effects these tools have on users. You know, the people who actually use the software we write. About what it's like to be a user who gets owned by a memory corruption vulnerability. About what it's like to be a user of a product that crashes substantially less or runs much faster since it was rewritten from Python to Rust.

This sucks! The conversation sucks, the attitude sucks, all of it. We spend so much time talking about how our tools make us feel that we forget the reason we make software in the first place.

Maybe I'm old-fashioned or something but I think users should matter more than developers. Users shouldn't have to put up with slow software. When users use our software, they shouldn't be fearful that their private information is going to be stolen because our code got owned by a class of exploit that has been well-understood for more than 30 years. They shouldn't worry that the product is going to crash and lose their work. Users should have reasonable confidence that the developers of a piece of software have made significant effort to ensure their safety and productivity.

Rust may or may not be something you love or respect or use, but Rust is the first relatively-widely used language to achieve memory safety without garbage collection. Rust in 2022 is not Rust in 2014. It's no longer a hot new thing that might have legs someday. It's out there in the world. Real companies like Microsoft, Amazon, Mozilla, and many others are doing real things with Rust, because they believe it helps them write software that makes their users more secure and more productive. You're probably running Rust code right now, and that's not because of the "Rust Evangelism Strikeforce". I feel like I'm on pretty strong footing when I say that "Rust works".

I don't say all this to opaquely knock Zig by comparison, or something. I think Zig has a ton of interesting ideas and we would all be better learning from what the Zig community has accomplished so far. But let me reinforce my point: users don't care what language software is written in! If they get owned, users don't care that you could keep all of Zig (or C, or whatever) in your head, or that Zig felt fun and productive. Users don't care that memory-safety and data-race bugs in your language should be rare "in theory". Users care if someone walks away with their Social Security Number, credit card details, or personal medical history. Users care if the software does its job.

I am not saying that everyone should use Rust, but damn, I wish developers gave half as much of a shit about the security and productivity of their users as they did about whether or not they enjoyed writing the code that got their users owned.

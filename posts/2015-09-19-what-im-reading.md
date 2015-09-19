---
layout: post
title: What I'm reading 9/12-9/19
created: 2015-09-19
---

[Welcome to the Block Party - Casey Johnston](http://www.theawl.com/2015/09/welcome-to-the-block-party)

1. I included this piece to show how morally timid all of these advertising arguments have become. Online advertisements are not like print ads where you can flip the page or TV ads where you can change the channel. They are code that is executed on your computer. They track your movement across the site and the web, reporting your clicks and views to a host of third parties bent on selling your demographic information to the highest bidder. People and companies who build a business model on the assumption of your consent to execute arbitrary code on your computer do not have my sympathy, and they should not have yours.

[New Rose Hotel - William Gibson](http://www.voidspace.org.uk/cyberpunk/burning_chrome.shtml#newrose)

1. "Once you left me, ran back to that beach saying you'd forgotten our key. I found it in the door and went after you, to find you ankle-deep in surf, your smooth back rigid, trembling; your eyes far away. You couldn't talk. Shivering. Gone. Shaking for different futures and better pasts. Sandii, you left me here. You left me all your things."

2. "The zaibatsus, Fox said, the multinationals. The blood of a zaibatsu is information, not people. The structure is independent of the individual lives that comprise it. Corporation as life form."

3. "It lay there in the palm of my hand, all that death."

[New Laws Explain Why Fast-Growing Networks Break - Jennifer Ouellette](http://www.wired.com/2015/08/new-laws-explain-fast-growing-networks-break/)

1. "Phase transitions are ubiquitous in nature, and they also provide a handy model for how individual nodes in a random network gradually link together, one by one, via short-range connections over time."

2. "Once a large cluster has formed, it dominates the system, absorbing any smaller clusters that might otherwise merge and grow."

3. "Disruptions can occur even in the most robust networks, whether these are power grids, global financial markets, or your favorite social network."

4. "Yet acting to avoid any outage whatsoever can inadvertently lead to very large outages that are far more costly. Thus, encouraging small cascading “failures” can dissipate energy imbalances that would otherwise have caused massive failures later on, a potentially smart strategy even though it eats into profit margins."

[lib/eex/lib/eex.ex](https://github.com/elixir-lang/elixir/blob/v1.0.5/lib/eex/lib/eex.ex)

1. Did a good bit of work on a side project to parallelize template rendering. Speedup was proportional to the number of logical cores.

[A millisecond isn't fast (and how we made it 100x faster) - Julia Evans](http://jvns.ca/blog/2015/09/10/a-millisecond-isnt-fast-and-how-we-fixed-it/)

1. "I used to think a millisecond was fast. At work, I have code that runs some VERY<sub>LARGE</sub><sub>NUMBER</sub> of times. It’s distributed and split up into tasks, and an individual task runs the code more than 6 million times."

[Reflection - TypeTags and Manifests](http://docs.scala-lang.org/overviews/reflection/typetags-manifests.html)

[Data is not an asset, it’s a liability - Marko Karppinen](https://www.richie.fi/blog/data-is-a-liability.html)

1. "Here’s a hard truth: regardless of the boilerplate in your privacy policy, none of your users have given informed consent to being tracked. Every tracker and beacon script on your web site increases the privacy cost they pay for transacting with you, chipping away at the trust in the relationship."

2. "And unlike code, data seems almost free: user activity generates an essentially endless amount of it. You just need to write it down on a disk somewhere."

3. "You can’t expect the value of data to just appear out of thin air. Data isn’t fissile material. It doesn’t spontaneously reach critical mass and start producing insights."

4. "You don’t start with the raw data. You start with the questions you want answered. Then you collect the data you need (and just the data you need) to answer those questions. Think this way for a while, and you notice a key factor: old data usually isn’t very interesting."

[Earley Parsing Explained - Loup Vaillant](http://loup-vaillant.fr/tutorials/earley-parsing/)

1. "The biggest advantage of Earley Parsing is its accessibility. Most other tools such as parser generators, parsing expression grammars, or combinator libraries feature restrictions that often make them hard to use."

[count_min_sketch.ex](https://github.com/ckampfe/count_min_sketch/blob/master/lib/count_min_sketch.ex)

1. A little Count Min Sketch implementation I hacked out. It still needs some help with hashing algorithms.

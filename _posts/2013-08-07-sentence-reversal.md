---
layout: post
title: Sentence reversal woes
date: 2013-08-07 03:08
---

As part of DBC prep materials, all of us boots are to do a number of Ruby exercises/challenges (among other things). One such challenge mandated that I write a method to reverse the order of the letters in a given sentence, while keeping the word order intact. 

At this point I've come up with about 3 different ways to do it, but this one is I think the prettiest (and also most terse). It passes all of the tests on my machine (Ruby 1.9.3), but for some reason it refuses to properly reverse a one-word string (e.g., something like "hello" into "olleh") in DBC's online interpreter. 

{% highlight ruby linenos %}def reverse_words(sentence)
  sentence.split(" ").each {|word| sentence.sub!(word, word.reverse)}
  return sentence
end

puts reverse_words("Bobby") #=> ybboB
puts reverse_words("Of course, sweet America")
 #=> fO ,esruoc teews aciremA
puts reverse_words("") #=> ""
{% endhighlight %}

I've gotten the online interpreter to bug out a few times, and I think it's running Ruby 1.9.1. I'm not sure if this would make a difference, or if 1.9.1 was anything more than a bugfix release. Who knows. I'll figure it out.


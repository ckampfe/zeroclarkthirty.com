---
layout: post
title: Array Enumerators
created: 2013-08-07
---

Going through one of the array tutorials today prompted me to look through the documentation. I was seeking an answer about element type conversion, but instead I found this, which I think is pretty cool:

{% highlight ruby %}
a = [1, 2, 3, 4]
a.combination(1).to_a  #=> [[1],[2],[3],[4]]
a.combination(2).to_a  #=> [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
a.combination(3).to_a  #=> [[1,2,3],[1,2,4],[1,3,4],[2,3,4]]
a.combination(4).to_a  #=> [[1,2,3,4]]
a.combination(0).to_a  #=> [[]] # one combination of length 0
a.combination(5).to_a  #=> []   # no combinations of length 5
{% endhighlight %}

Combined with something like:
{% highlight ruby %}
a = [ "a", "b", "c", "d" ]
a.collect {|x| x + "!" }   #=> ["a!", "b!", "c!", "d!"]
a                          #=> ["a", "b", "c", "d"]
{% endhighlight %}

it might be useful for a rumored "times table" challenge I heard about.  

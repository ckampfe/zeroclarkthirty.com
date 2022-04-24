---
layout: post
title: What Languages Taught Me: Ruby
created: 2022-04-23
---

Ruby is a landmark in my programming languages journey because it is the first language I knew worth a damn. I had used other languages before, like TI-BASIC, HTML, Javascript, and a bit of Python, but only really to tinker with. It was the first language that I made money with and the first language I used to ship anything to real users, so in that way it really was among the first languages I used enough to understand in any depth.

The biggest ideas in Ruby, according to my own reading of the consensus of the Ruby community, are "programmer happiness" and pervasive object orientation. I saw something else, though.

I remember learning Ruby in 2013/2014 and being enthralled with a feature called "blocks". In almost every other language, they're known as "higher-order functions" or "closures", but Ruby did the characteristically Ruby thing and gave them a name only used in Ruby.

The idea of blocks is that you have a function that itself takes another function (a "block") as an argument. This allows callers of the function to vary its behavior by passing different blocks on each call.

For example, if we define a function `map` like this, that iterates over a given collection and yields each element of that array to a block, collecting and returning their results, we can pass different blocks to it, altering its behavior by doing nothing more than passing a different block each time we call it:

```ruby
def map(list)
  results = []

  for element in list do
    new_element = yield element
    results << new_element
  end

  results
end

puts map([1,2,3]) { |el| el * 3.5 }.inspect
#=> [3.5, 7.0, 10.5]
puts map([1,2,3]) { |el| el.to_s }.inspect
#=> ["1", "2", "3"]
```

The definition of the `map` function stays the same, but we made it so each call does something different, with the first call multiplying each element by 3.5, and the second making each element into a string.

This is a powerful idea because it allows for the design of code that is wildly general. You can define a single function like the above `map`, deferring the details of "what it should actually do" until you know more about what you're trying to achieve in your program.

When I first learned Ruby, I was enthralled with this idea. Tons of functions in the standard library took blocks, like `each`, `find`, `filter`, `reduce`, and many others. This method of working with collections was so different from what I had seen before, in TI-BASIC or the kind of Javascript that was common at the time, where you typically traditional for or while loops that use indexes to access collections. You just say what you want to happen to each element in your block, and the rules of the host function define what happens with the result. It's really elegant.

I haven't used Ruby in years, but I've used first-class functions - as they're known in almost every other language - in probably a half-dozen or so more languages. They've become a foundational piece of how I think about programming. Due to the ubiquity of its blocks, Ruby really set me down the path toward functional programming - with Clojure and Scala - and profoundly influenced my taste in programming languages. 

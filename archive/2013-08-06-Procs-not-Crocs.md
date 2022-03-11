---
layout: post
title: Procs not Crocs
created: 2013-08-06
---

I remember learning about nested functions, closures, lambdas, et al. in Python, and made a few useful little generator functions, but haven't had occasion to yet learn about blocks, procs, or lambdas in Ruby. With the reception of the Dev Bootcamp prep material, I figured I had better check it out. 

{% highlight ruby %}def add_gen(your_inc)
  return Proc.new {|x| your_inc + x }
end
  
by_two = add_gen(2)
by_87 = add_gen(87)

puts by_two.call(10) #=> 12
puts by_87.call(10) #=> 97

{% endhighlight %}

I was massively overthinking things, trying to do nested functions like you see in Python. As it turns out, it's way easier to just use a sexy little proc, point a variable to the results of the function call (with your argument) and then call the variable as a proc. I'm not sure what I was thinking.

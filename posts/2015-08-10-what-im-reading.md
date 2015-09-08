---
layout: post
title: What I'm reading 8/3-8/10
created: 2015-08-10
---

[The Web We Have to Save - Hossein Derakhshan](https://medium.com/matter/the-web-we-have-to-save-2eb1fe15a426)

1. "In the past, the web was powerful and serious enough to land me in jail. Today it feels like little more than entertainment."

2. "Ironically enough, states that cooperate with Facebook and Twitter know much more about their citizens than those, like Iran, where the state has a tight grip on the Internet but does not have legal access to social media companies."

3. "The web was not envisioned as a form of television when it was invented. But, like it or not, it is rapidly resembling TV: linear, passive, programmed and inward-looking."

[Why Offices Are Where Work Goes to Die](https://dzone.com/articles/why-offices-are-where-work-goes-to-die)

1. "Did you notice? Every conversation in my example started with somebody not remembering the details of a previous conversation."

2. "I'm an introvert and being forced to spend 8+ hours a day surrounded by people leaves me feeling like a wet rag. When I come home, I can't get back to important work. I can't write. I can't do anything. All I want is just to be alone."

3. "You see, when people write, they think. They weigh what they’re saying, they consider how it comes across, they go back and edit and change what they said."

[Let's stop kidding ourselves about APIs](http://250bpm.com/blog:55#)

1. "Programmers typically don't like politics and tend to argue using technical language. But that doesn't make politics go away, it just makes it subconscious."

[Scripting with Scala - eed3si9n](http://eed3si9n.com/scripting-with-scala)

{% highlight scala %}
#!/usr/bin/env scalas

/***
scalaVersion := "2.11.7"

libraryDependencies ++= Seq(
  "com.amazonaws" % "aws-java-sdk" % "1.9.34"
)
*/

import scala.collection.JavaConverters._
import scala.io.Source

val formatToKV =
  (k: String, v: String) => s"${k}: ${v}"
val filterLongKeys =
  (k: String, v: String) => k.length > 20
val attachLength =
  (k: String, v: String) => (k, v + " " + s"(key length: ${k.length})")
val addNewLine =
  (str: String) => str + "\n"

println(util.Properties.versionString)
println
println
System.getenv.asScala
  .filter(filterLongKeys.tupled)
  .map(attachLength.tupled andThen formatToKV.tupled andThen addNewLine)
  .foreach(println)

val ten =
  Source.fromURL("http://zeroclarkthirty.com")
  .mkString
  .split("\n")
  .toVector
  .take(10)

ten.foreach(println)
{% endhighlight %}



[Understanding implicit in Scala](http://stackoverflow.com/questions/10375633/understanding-implicit-in-scala)

1. "The final parameter list on a method can be marked implicit, which means the values will be taken from the context in which they are called."

[shapeless/sized.scala](https://github.com/milessabin/shapeless/blob/master/core/src/main/scala/shapeless/sized.scala)

[Hadley Wickham, the Man Who Revolutionized R](http://priceonomics.com/hadley-wickham-the-man-who-revolutionized-r/)

1. "The analyses that get me excited are not Google crunching a terabyte of web ad data in order to optimize revenue... [but rather] the biologists who are absolutely passionate about this one swampfly and now they can use R and they can understand it."

2. "One of the attributes that has made me successful," he says, "is that I am exquisitely sensitive to frustration."

3. "I've always been very certain that I could come up with a good way of doing things," he explained, "and that that way would actually help people."

4. "The fact that data science exists as a field is a colossal failure of statistics. To me, that is what statistics is all about. It is gaining insight from data using modelling and visualization. Data munging and manipulation is hard and statistics has just said that's not our domain."

[Scripts, REPL, and Dependencies - sbt](http://www.scala-sbt.org/release/docs/Scripts.html)

1.  "The script runner can run a standard Scala script, but with the additional ability to configure sbt. sbt settings may be embedded in the script in a comment block that opens with `/***`."

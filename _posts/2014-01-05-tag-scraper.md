---
layout: post
title: Client-side scraping with JSONP and YQL
date: 2014-01-05
---

These past few weeks I've been working on a freelance project for a
client in SEO/PPC marketing.

The client desired something that most people would probably recognize as a
scraper: acquire some select information from a target website and render it into
some desired form.

Specifically, the client wants to be able to input a URL and a list of HTML tags
and receive information about the contents of those tags from the given page.
For example, if the user wishes to view the 'a' tags of a given site, assuming a
link like so:

{% highlight html %}
<a href="http://espn.com" class="body_link">sports and stuff</a>
{% endhighlight %}

the program should display
<li>href: http://espn.com</li>
<li>content: sports and stuff</li>
<li>class: body_link</li>

Now, before anyone yells out "Nokogiri you fool!", I know. This
project will likely end up as a Sinatra app based on Nokogiri. We did some work
with Nokogiri at DBC and I feel like I could whip up a working solution fairly
quickly.

However, because the time frame of the project is fairly open-ended, I wanted to
do something a bit different. A bit of experimentation.

This idea hit me that, given the present minimal requirements of the project (no
persistence of data, authentication, etc.), why not try to do
it all on the client side?

I thought I would cook up some AJAX and be done with it in a day or two.

I hit a snag, though, when I discovered that AJAX can only be used to request
sites from the same domain as the requesting site. This is known as the
[same-origin policy](http://en.m.wikipedia.org/wiki/Same-origin_policy), and it is in
place to protect users from potentially malicious 3rd-party code injected by
incompetent or nefarious developers.

There are a number of ways to work around the same-origin policy, however I
ended up going with a method called
[JSONP](http://en.m.wikipedia.org/wiki/JSONP). JSONP refers to "JSON with
padding".

JSONP is a hack that works around the same-origin policy through a loophole in
how JavaScript files are typically loaded in HTML documents: it injects a
script tag into the document which points to the desired
non-local resource. JSONP works because script tags do not abide by the
same-origin policy, and will load damn near anything that resembles a standard
uri scheme.

The browser then immediately loads the resource specificed in the script
tag's src attribute, returning the response as a JSON object wrapped in a callback.
The callback -- which has been predefined in the JavaScript environment to take a response
argument -- is the "P" in JSONP, serving to "pad" the otherwise normal JSON so that it can
be brought into the working environment.

The catch with JSONP is that the requested endpoint must return something
JavaScript-like: JSON or actual JavaScript. But what
if not every site serves its contents as JSON?

To get around this in my implementation, my JSONP requests go to Yahoo's YQL console,
which does return JSON. The YQL console is a handy application that allows one to make
queries across the web in a SQL-like syntax. The user's target URL is passed in and
used to construct a YQL query, like so:

{% highlight javascript %}
function makeUrl(targetUrl) {
  var baseURI          = "http://query.yahooapis.com/v1/public/yql?q=",
      encodedTargetUrl = encodeURIComponent('http://') + targetUrl,
      encodedQuery     = encodeURI("select * from html where url")
                         + encodeURIComponent("='") + encodedTargetUrl + "\'",
      suffix           = "&format=json&diagnostics=true&callback=yahooHandler";

  return baseURI + encodedQuery + suffix;
}
{% endhighlight %}

When the user fills in their desired information and clicks the submit button,
this constructs the URL...

{% highlight javascript %}
function clickHandler(targetUrl, tags, targets, event){
  event.preventDefault();
  TAGS = tags.split(' ');
  TARGETS = targets.split(' ');
  insertScriptTag(makeUrl(targetUrl));
}
{% endhighlight %}
...and injects it...

{% highlight javascript  %}
function insertScriptTag(url) {
  var scriptEl  = document.createElement("script");
  scriptEl.type = "text/javascript";
  scriptEl.src  = url;
  document.body.appendChild(scriptEl);
}
{% endhighlight %}

...eventually handling the JSON response, parsing it, and displaying the
results to the user.

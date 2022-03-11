---
layout: post
title: Meta-boggled
created: 2014-01-24
---

A few weeks ago I attended a Ruby meetup over at [ThoughWorks](http://www.thoughtworks.com/).
This one was on glamorous/sexy/disgusting topic of
[metaprogramming](https://en.wikipedia.org/wiki/Metaprogramming).

We learned from a few Thoughtworkers about Ruby's facilities for
metaprogramming (like send, eval, monkeypatch, and their ilk), what you can do with them, and why you should never, ever use
them. Well, this was obviously a challenge. So I had to try it.

The Phase 1 students over at [Dev Bootcamp](http://devbootcamp.com)
were getting into their [boggle](https://en.wikipedia.org/wiki/Boggle) challenge, so I thought I'd give a boggle solver another try.

The gist of boggle is that you have a 4x4 grid of dice, each with one letter per face. You then shake up the grid, with the dice falling randomly into spots on the grid. You then try to find words in the grid that can be reached by up-down-left-right and diagonal movements, without repeating a move (ie, using the same die twice). Why not write a program to search for a given word?

It's been 3+ months since my last attempt, and surely I've learned something in that time? You be the judge.

The general idea was to use a depth-first search algorithm to crawl the possible
paths on the board, but to make the algorithm slightly more intelligent with metaprogramming.
This way, the DFS would only actually search the paths that could possibly contain matches. Avoiding any positions that had already been touched as well as avoiding any moves that would take the path "off the board", so to speak.

Anyway, here's what I ended up with.

Here's some setup:

{% highlight ruby %}
class Board

  attr_writer :query

  def initialize
    @board = make_board
    @query
  end

  def make_board
    board = [
      %w(h j k s),
      %w(a p x x),
      %w(d p l b),
      %w(z e z r)
    ]

    board
  end

{% endhighlight %}

Then I define a #start method that begins the process. It works on the 4x4
boggle grid in such a way as to redefine the grid as positions 0-15, left-to-right, top-to-bottom. These 0-15 references are the positions from which to begin a branch of the search, so there are 16 possible starting positions.

The method iterates through the 16 possible starting positions, calling the #search
method fresh for each one, early-returning true if #search itself comes back true,
otherwise returning false if nothing is found.

{% highlight ruby %}

def start
  start_position = 0
  while start_position < 16
    return true if search(@query,
                          integer_to_yx(start_position),
                          integer_to_yx(start_position))
    start_position += 1
  end

  false
end
{% endhighlight %}

The helper method #integer\_to\_yx(start\_position), is defined here, making it
easier to refer to the board as a plot of positions in the format [Y,X], since
this is how 2D arrays are constructed.

{% highlight ruby %}
def integer_to_yx(some_index)
  [some_index / 4, some_index % 4]
end
{% endhighlight %}

Here is the actual search method:

{% highlight ruby %}
def search(query, current_pos, bads)
  return true if query == "" # it's here!

  return false unless @board[current_pos[0]][current_pos[1]] == query[0]
  possible_moves = possible_moves(current_pos, bads)

  method_string = possible_moves.map { |move| "search('#{query[1..-1]}',
                                                       #{move},
                                                       #{[bads] + [move]})" }.join(' || ')

  # evaluate the constructed calls
  eval(method_string)
end
{% endhighlight %}

The algorithm is reflected in the base cases.

We will recurse through the possible moves from a given starting position,
and shift off the first letter of our query word when we successfully find that
letter.

For the "sad" case, we will early-return false if we find a letter that is
not the first letter of the query. This is a failed branch of the DFS.

For the "happy" case, we will early-return
true if the query equals an empty string, indicating that all of the letters
have been successfully found.

The #search method itself takes three arguments: a search query, a current
position, and a "bads" list, representing the positions we have already been to.

You will note this line in the #search method:

{% highlight ruby %}
possible_moves = possible_moves(current_pos, bads)
{% endhighlight %}

This line is telling about the direction we are about to take. It takes as
arguments our current position and the current state of the "bads" list, and
sends them to the possible moves method, shown here:

{% highlight ruby %}
def possible_moves(given_position, bads)
    possibles = position_permutations(given_position)

    adjusted_possibles = possibles.select do |position|
      !bads.include?(position) && on_board?(position)
    end

    adjusted_possibles
  end
{% endhighlight %}

The purpose of this method is to make a determination about where our path can
go. It starts off by gietting a naive list of the possible relatives moves from
any given board position. This includes moves that would take the path off the
board:

{% highlight ruby %}

def position_permutations(given_position)
  # the eight direction moves that a move could take from
  # a center position
  modifiers = [[-1, -1],
               [-1, 0],
               [-1, 1],
               [0, 1],
               [1, 1],
               [1, 0],
               [1, -1],
               [0, -1]]
  modifiers.map { |pair| [pair[0] + given_position[0],
                            pair[1] + given_position[1]] }
end
{% endhighlight %}

It then reduces this list against the known bad positions and the positions that
are not actually on the board, like so:

{% highlight ruby %}

adjusted_possibles = possibles.select do |position|
  !bads.include?(position) && on_board?(position)
end
{% endhighlight %}

checking off-board-y-ness here:

{% highlight ruby %}

def on_board?(position)
  y_index, x_index = position[0], position[1]
  if y_index < 0 || y_index > 3 # off top and bottom of board
    return false
  elsif x_index < 0 || x_index > 3 # off left and right of board
    return false
  end

  true
end

{% endhighlight %}

When all is said and done, we have taken a naive list of the possible moves and
reduced it against known list of bad moves and a the known off-board moves. We
are left with the moves that we can possibly even make.

Sorry for going down a rabbit hole, but this was for a reason. Now, having done
our elimination of invalid moves, we can proceed within the #search method,
here:

{% highlight ruby %}
method_string = possible_moves.map { |move| "search('#{query[1..-1]}',
                                             #{move},
                                             #{[bads] + [move]})" }
                                             .join(' || ')

  # evaluate the constructed calls
  eval(method_string)
{% endhighlight %}

This is the metaprogramming bit of the whole thing. It takes our
possible\_moves, and uses map to mutate each entry into a string that contains our #search
method call necessary to keep recursing. We then join each entry in what is
still an array of strings into a proper string, popping the logical OR operator in
between each element.

The variable called method\_string will end up looking basically like this:

{% highlight ruby %}
"search(query, valid_move_1, bads)
|| search(query, valid_move_2, bads)
|| search(query, valid_move_3, bads)"
{% endhighlight %}

containing only the possible moves for the current position.

Finally, we evaluate the thing, letting logic work its magic:
{% highlight ruby %}
eval(method_string)
{% endhighlight %}


I have removed comments and tightened up spacing for clarity. Find the source
[here](https://github.com/ckampfe/sorts/blob/master/boggle.rb).

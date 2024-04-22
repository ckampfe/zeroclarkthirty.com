---
layout: post
title: What Languages Taught Me: AWK
created: 2022-04-28
---

I didn't learn AWK (or, awk) until recently.

This past Decemeber, I decided to try the [Advent of Code](adventofcode.com/) challenges in both Rust *and* awk. Rust I already know well enough to where solving word problems is not a task I would expect to learn much from, but awk I really didn't know at all.

I came away with the impression that awk is really an amazing, overlooked language.

Maybe the key thing about awk is just how little of it there is.
Awk is a tiny language. If you're already a programmer, you can become useful with Awk
in an hour or two.

The entire point is to process text streams by matching lines of text against patterns and taking actions based on what matches. That's basically it.

Awk is so devoted to this task that it does away with a traditional "main" function. Instead, code in awk is run through an implicit main loop, basically consisting of the following:

1. Before processing any input, run any code in `BEGIN` statements.
2. For every line of input in turn, attempt to match the line of input against each match expression in the awk program. If a match expression matches that line of input, run the statement corresponding to that match expression. Multiple expressions can match a given line of input, and matches happen one after another, in order.
3. When the input is exhausted, run any code in `END` statements.

This loop isn't exposed to you explicitly, it's just the water you're swimming in.
If you're coming from a traditional language, this seems restrictive, but really, it's freeing. This is just how awk is.

Awk can process any text, but it really shines on line-oriented, tabular, "record"-style data.

Assuming our data looks like the following tab-separated example:

```
1   "Bill"  20
2   "Steven" 3
3   "Hannah" 9
4   "Steven" 14
5   "Emily" 13
```

Our awk might look like this:

```awk
# This will run before any input is processed
BEGIN { print "Starting report!" }

# If the first column of input is digits,
# increment an entry in an array with those digits as its key.
# The array does not have to be declared, it is automatically created as
# it is used.
$1 ~ /\d+/ { numbers[$1] += 1 }

# If the text in the second column matches "Steven",
# add the contents of the third column to a new entry in the
# `stevens_payments` array.
# Again, the array and the `stevens_payments_len` variable are
# automatically initialized on use (numbers with a default value of 0),
# and do not have to be explicitly created.
$2 ~ "Steven" { stevens_payments[$1] = $3 }

# When there is no more input, this block will run.
END {
    print "Tallying complete!"
    print "Steven's payments:"
    for(payment_id in stevens_payments) {
        total += stevens_payments[payment_id]
        print payment_id, "\t", stevens_payments[payment_id]
    }
    print "Steven's total payments amount: ", total
}
```

and would print:

```
$ awk -f example.awk example.txt
Starting report!
Tallying complete!
Steven's payments:
2        3
4        14
Steven's total payments amount:  17
```

Notice how there is no main loop, no declarations, nothing.
Notice how I'm not doing any string splitting to identify the fields within a line:
awk takes care of that for you, automatically assigning each whitespace-delimited field to a corresponding $1-$N "magic" variable.

With awk, you just say what you're looking for in the input, and if it matches,
the corresponding blocks get run. It's really amazingly ergonomic for
blasting through a textfile, pulling out the stuff you care about, and 
transforming it or aggregating it in some way.

(I'm glossing over a lot, so if you
want to actually learn awk, go [here](https://ferd.ca/awk-in-20-minutes.html).)

Awk taught me that the space for specific languages for specific tasks
is rich and unexplored. It seems like every language these days is
a general purpose language on a general purpose virtual machine, with some tweaks
to the typesystem or syntax. Awk never tried to be a language for everything,
and here it is, 45 years later, still unsurpassed in its niche.

---
layout: post
title: Unsafety is really just imprecision
created: 2024-09-04
---

When a language is "unsafe" what we really mean is that the language is imprecise in a specific way.

When you write code in an imprecise language, the danger is that in the course of saying what you are trying to say, you inadvertently say things you did not mean to say, or you are unable to say exactly what you want to say.

For example, the C language lacks a way to talk about object lifetimes in a rigorous way.
This leads to all kinds of bugs, security and otherwise.

But imprecision is not always unsafe, or even bad. Ruby also lacks a way to talk
about object lifetimes (or even the underlying memory at all), but Ruby has a garbage collector that does, so this particular inarticulacy doesn't hamper it in the domains it was designed for.

In fact, Ruby's lack of ability to talk about memory actually helps it, as it is
one less thing Ruby programmers need to think about!

Language design is (at least in part) the ability to know what your language
should and should not be able to say.

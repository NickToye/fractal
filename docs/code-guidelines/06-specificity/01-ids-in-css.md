---
title: IDs in CSS
status: inprogress
label: IDs in CSS
---

If we want to keep specificity low, which we do, we have one really quick-win, simple, easy-to-follow rule that we can employ to help us: avoid using IDs in CSS.

Not only are IDs inherently non-reusable, they are also vastly more specific than any other selector, and therefore become specificity anomalies. Where the rest of your selectors are relatively low specificity, your ID-based selectors are, comparatively, much, much higher

In fact, to highlight the severity of this difference, see how one thousand chained classes cannot override the specificity of a single ID: [jsfiddle.net/0yb7rque](http://jsfiddle.net/0yb7rque). (Please note that in Firefox you may see the text rendering in blue: this is a known bug, and an ID will be overridden by 256 chained classes.)

__N.B. It is still perfectly okay to use IDs in HTML and JavaScript; it is only in CSS that they prove troublesome.__

__It is often suggested that developers who choose not to use IDs in CSS merely don’t understand how specificity works. This is as incorrect as it is offensive: no matter how experienced a developer you are, this behaviour cannot be circumvented; no amount of knowledge will make an ID less specific.__

Opting into this way of working only introduces the chance of problems occurring further down the line, and—particularly when working at scale—all efforts should be made to avoid the potential for problems to arise. In a sentence:

It is just not worth introducing the risk.

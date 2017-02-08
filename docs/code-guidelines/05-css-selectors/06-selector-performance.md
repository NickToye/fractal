---
title: Selector Performance
status: inprogress
---

A topic which is—with the quality of today’s browsers—more interesting than it is important, is selector performance. That is to say, how quickly a browser can match the selectors your write in CSS up with the nodes it finds in the DOM.

Generally speaking, the longer a selector is (i.e. the more component parts) the slower it is, for example:

```
body.home div.header ul {}
```

…is a far less efficient selector than:

```
.primary-nav {}
```

This is because browsers read CSS selectors right-to-left. A browser will read the first selector as

* find all ul elements in the DOM
* now check if they live anywhere inside an element with a class of .header
* next check that .header class exists on a div element
* now check that that all lives anywhere inside any elements with a class of .home
* finally, check that .home exists on a body element

The second, in contrast, is simply a case of the browser reading

* find all the elements with a class of .primary-nav

To further compound the problem, we are using descendant selectors (e.g. `.foo .bar {}`). The upshot of this is that a browser is required to start with the rightmost part of the selector (i.e. `.bar`) and keep looking up the DOM indefinitely until it finds the next part (i.e. `.foo`). This could mean stepping up the DOM dozens of times until a match is found.

This is just one reason why nesting with preprocessors is often a false economy; as well as making selectors unnecessarily more specific, and creating location dependency, it also creates more work for the browser.

By using a child selector (e.g. `.foo > .bar {}`) we can make the process much more efficient, because this only requires the browser to look one level higher in the DOM, and it will stop regardless of whether or not it found a match.

## The Key Selector

Because browsers read selectors right-to-left, the rightmost selector is often critical in defining a selector’s performance: this is called the key selector.

The following selector might appear to be highly performant at first glance. It uses an ID which is nice and fast, and there can only ever be one on a page, so surely this will be a nice and speedy lookup—just find that one ID and then style everything inside of it:

```
#foo * {}
```

The problem with this selector is that the key selector (`*`) is very, very far reaching. What this selector actually does is find every single node in the DOM (even `<title>`, `<link>`, and `<head>` elements; everything) and then looks to see if it lives anywhere at any level within #foo. This is a very, very expensive selector, and should most likely be avoided or rewritten.

Thankfully, by writing selectors with good Selector Intent, we are probably avoiding inefficient selectors by default; we are very unlikely to have greedy key selectors if we’re targeting the right things for the right reason.

That said, however, CSS selector performance should be fairly low on your list of things to optimise; browsers are fast, and are only ever getting faster, and it is only on notable edge cases that inefficient selectors would be likely to pose a problem.

As well as their own specific issues, nesting, qualifying, and poor Selector Intent all contribute to less efficient selectors.

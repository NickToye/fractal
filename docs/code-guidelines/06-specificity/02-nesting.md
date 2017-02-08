---
title: Nesting
status: inprogress
---

We’ve already looked at how nesting can lead to location dependent and potentially inefficient code, but now it’s time to take a look at another of its pitfalls: it makes selectors more specific.

When we talk about nesting, we don’t necessarily mean preprocessor nesting, like so:

```
.foo {

    .bar {}

}
```

We’re actually talking about descendant or child selectors; selectors which rely on a thing within a thing. That could look like any one of the following:

```
/**
 * An element with a class of `.bar` anywhere inside an element with a class of
 * `.foo`.
 */
.foo .bar {}


/**
 * An element with a class of `.module-title` directly inside an element with a
 * class of `.module`.
 */
.module > .module-title {}


/**
 * Any `li` element anywhere inside a `ul` element anywhere inside a `nav`
 * element
 */
nav ul li {}
```

Whether you arrive at this CSS via a preprocessor or not isn’t particularly important, but it is worth noting that preprocessors tout this as a feature, where is actually to be avoided wherever possible.

Generally speaking, each part in a compound selector adds specificity. Ergo, the fewer parts to a compound selector then the lower its overall specificity, and we always want to keep specificity low. To quote Jonathan Snook:

> …whenever declaring your styles, use the least number of selectors required to style an element.

Let’s look at an example:

```
.widget {
    padding: 10px;
}

    .widget > .widget__title {
        color: red;
    }
```

To style an element with a class of `.widget__title`, we have a selector that is twice as specific as it needs to be. That means that if we want to make any modifications to `.widget__title`, we’ll need another at-least-equally specific selector:

```
.widget { ... }

    .widget > .widget__title { ... }

    .widget > .widget__title--sub {
        color: blue;
    }
```

Not only is this entirely avoidable—we caused this problem ourselves—we have a selector that is literally double the specificity it needs to be. We used 200% of the specificity actually required. And not only that, but this also leads to needless verbosity in our code—more to send over the wire.

As a rule, if a selector will work without it being nested then do not nest it.

## Scope

One possible advantage of nesting—which, unfortunately, does not outweigh the disadvantages of increased specificity—is that it provides us with a namespace of sorts. A selector like `.widget .title` scopes the styling of `.title` to an element that only exists inside of an element carrying a class of `.widget`.

This goes some way to providing our CSS with scope and encapsulation, but does still mean that our selectors are twice as specific as they need to be. A better way of providing this scope would be via a namespace—which we already have in the form of BEM-like Naming—which does not lead to an unnecessary increase in specificity.

Now we have better scoped CSS with minimal specificity—the best of both worlds.

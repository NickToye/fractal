---
title: BEM-like Naming
status: inprogress
label: BEM-like Naming
---

For larger, more interrelated pieces of UI that require a number of classes, we use a BEM-like naming convention.

BEM, meaning Block, Element, Modifier, is a front-end methodology coined by developers working at Yandex. Whilst BEM is a complete methodology, here we are only concerned with its naming convention. Further, the naming convention here only is BEM-like; the principles are exactly the same, but the actual syntax differs slightly.

BEM splits components’ classes into three groups:

* Block: The sole root of the component.
* Element: A component part of the Block.
* Modifier: A variant or extension of the Block.

An analogy example

```
.person {}
.person__head {}
.person--tall {}
```

Elements are delimited with two (2) underscores (`__`), and Modifiers are delimited by two (2) hyphens (`--`).

Here we can see that `.person {}` is the Block; it is the sole root of a discrete entity. `.person__head {}` is an Element; it is a smaller part of the `.person {}` Block. Finally, `.person--tall {}` is a Modifier; it is a specific variant of the `.person {}` Block.

## Starting Context

Your Block context starts at the most logical, self-contained, discrete location. To continue with our person-based analogy, we’d not have a class like `.room__person {}`, as the room is another, much higher context. We’d probably have separate Blocks, like so:

```
.room {}

    .room__door {}

.room--kitchen {}


.person {}

    .person__head {}
```

If we did want to denote a `.person {}` inside a `.room {}`, it is more correct to use a selector like `.room .person {}` which bridges two Blocks than it is to increase the scope of existing Blocks and Elements.

A more realistic example of properly scoped blocks might look something like this, where each chunk of code represents its own Block:

```
.page {}


.content {}


.sub-content {}


.footer {}

    .footer__copyright {}
```

Incorrect notation for this would be:

```
.page {}

    .page__content {}

    .page__sub-content {}

    .page__footer {}

        .page__copyright {}
```

It is important to know when BEM scope starts and stops. As a rule, BEM applies to self-contained, discrete parts of the UI.

## More Layers

If we were to add another Element—called, let’s say, `.person__eye {}` —to this `.person {}` component, we would not need to step through every layer of the DOM. That is to say, the correct notation would be `.person__eye {}`, and not `.person__head__eye {}`. Your classes do not reflect the full paper-trail of the DOM.

## Modifying Elements

You can have variants of Elements, and these can be denoted in a number of ways depending on how and why they are being modified. Carrying on with our person example, a blue eye might look like this:

```
.person__eye--blue {}
```

Here we can see we’re directly modifying the eye Element.

Things can get more complex, however. Please excuse the crude analogy, and let’s imagine we have a face Element that is handsome. The person themselves isn’t that handsome, so we modify the face Element directly—a handsome face on a regular person:

```
.person__face--handsome {}
```

But what if that person is handsome, and we want to style their face because of that fact? A regular face on a handsome person:

```
.person--handsome .person__face {}
```

Here is one of a few occasions where we’d use a descendant selector to modify an Element based on a Modifier on the Block.

If using Sass, we would likely write this like so:

```
.person {}

    .person__face {

        .person--handsome & {}

    }

.person--handsome {}
```

Note that we do not nest a new instance of `.person__face {}` inside of `.person--handsome {};` instead, we make use of Sass’ parent selectors to prepend `.person--handsome` onto the existing `.person__face {}` selector. This means that all of our `.person__face {}` -related rules exist in once place, and aren’t spread throughout the file. This is general good practice when dealing with nested code: keep all of your context (e.g. all `.person__face {}` code) encapsulated in one location.

### Further Reading

1. [MindBEMing - getting your head 'round BEM syntax](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)

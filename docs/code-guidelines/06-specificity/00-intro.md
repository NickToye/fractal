---
title: Specificity
status: inprogress
---

As we’ve seen, CSS isn’t the most friendly of languages: globally operating, very leaky, dependent on location, hard to encapsulate, based on inheritance… But! None of that even comes close to the horrors of specificity.

No matter how well considered your naming, regardless of how perfect your source order and cascade are managed, and how well you’ve scoped your rulesets, just one overly-specific selector can undo everything. It is a gigantic curveball, and undermines CSS’ very nature of the cascade, inheritance, and source order.

The problem with specificity is that it sets precedents and trumps that cannot simply be undone. If we take a real example that I was responsible for some years ago:

```
#content table {}
```

Not only does this exhibit poor Selector Intent — We didn’t actually want every table in the #content area, I wanted a specific type of table that just happened to live there — it is a hugely over-specific selector. This became apparent a number of weeks later, when I needed a second type of table:

```
#content table {}

/**
 * Uh oh! My styles get overwritten by `#content table {}`.
 */
.my-new-table {}
```

The first selector was trumping the specificity of the one defined after it, working against CSS’ source-order based application of styles. In order to remedy this, We have two main options. We could

1. refactor the CSS and HTML to remove that ID
2. write a more specific selector to override it

Unfortunately, refactoring would have taken a long time; it was a mature product and the knock-on effects of removing this ID would have been a more substantial business cost than the second option: just write a more specific selector.

```
#content table {}

#content .my-new-table {}
```

Now we have a selector that is even more specific still! And if I ever want to override this one, I will need another selector of at least the same specificity defined after it. I’ve started on a downward spiral.

Specificity can, among other things,

* limit your ability to extend and manipulate a codebase
* interrupt and undo CSS’ cascading, inheriting nature
* cause avoidable verbosity in your project
* prevent things from working as expected when moved into different environments
* lead to serious developer frustration

All of these issues are greatly magnified when working on a larger project with a number of developers contributing code.

## Keep It Low at All Times

The problem with specificity isn’t necessarily that it’s high or low; it’s the fact it is so variant and that it cannot be opted out of: the only way to deal with it is to get progressively more specific—the notorious specificity wars we looked at above.

One of the single, simplest tips for an easier life when writing CSS—particularly at any reasonable scale—is to keep always try and keep specificity as low as possible at all times. Try to make sure there isn’t a lot of variance between selectors in your codebase, and that all selectors strive for as low a specificity as possible.

Doing so will instantly help you tame and manage your project, meaning that no overly-specific selectors are likely to impact or affect anything of a lower specificity elsewhere. It also means you’re less likely to need to fight your way out of specificity corners, and you’ll probably also be writing much smaller stylesheets.

Simple changes to the way we work include, but are not limited to,

* not using IDs in your CSS
* not nesting selectors
* not qualifying classes
* not chaining selectors

Specificity can be wrangled and understood, but it is safer just to avoid it entirely.

### Further Reading

1. [Hacks for dealing with specificity](http://csswizardry.com/2014/07/hacks-for-dealing-with-specificity/)

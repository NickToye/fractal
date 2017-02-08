---
title: The Open/Closed Principle
status: inprogress
label: The Open/Closed Principle
---

The open/closed principle, in my opinion, is rather poorly named. It is poorly named because 50% of the vital information is omitted from its title. The open/closed principle states that

> [s]oftware entities (classes, modules, functions, etc.) should be open for extension, but closed for modification.

See? The most important words—extension and modification—are completely missing from the name, which isn’t very useful at all.

Once you have trained yourself to remember what the words open and closed actually relate to, you’ll find that open/closed principle remarkably simple: any additions, new functionality, or features we add to our classes should be added via extension—we should not modify these classes directly. This really trains us to write bulletproof single responsibilities: because we shouldn’t modify objects and abstractions directly, we need to make sure we get them as simple as possible the first time. This means that we should never need to actually change an abstraction—we’d simply stop using it—but any slight variants of it can be made very easily by extending it.

Let’s take an example:

```
.box {
    display: block;
    padding: 10px;
}

.box--large {
    padding: 20px;
}
```

Here we can see that the `.box {}` object is incredibly simple: we’ve stripped it right back into one very small and very focussed responsibility. To modify that box, we extend it with another class; `.box--large {}`. Here the `.box {}` class is closed to modification, but open to being extended.

An incorrect way of achieving the same might look like this:

```
.box {
    display: block;
    padding: 10px;
}

.content .box {
    padding: 20px;
}
```

Not only is this overly specific, locationally dependent, and potentially displaying poor Selector Intent, we are modifying the `.box {}` directly. We should rarely—if ever—find an object or abstraction’s class as a key selector in a compound selector.

A selector like `.content .box {}` is potentially troublesome because

* it forces all `.box` components into that style when placed inside of `.content`, which means the modification is dictated to developers, whereas developers should be allowed to opt into changes explicitly
* the `.box` style is now unpredictable to developers; the single responsibility no longer exists because nesting the selector produces a forced caveat

All modifications, additions, and changes should always be opt-in, not mandatory. If you think something might need a slight adjustment to take it away from the norm, provide another class which adds this functionality.

When working in a team environment, be sure to write API-like CSS; always ensure that existing classes remain backward compatible (i.e. no changes at their root) and provide new hooks to bring in new features. Changing the root object, abstraction, or component could have huge knock-on effects for developers making use of that code elsewhere, so never modify existing code directly.

Exceptions may present themselves when it transpires that a root object does need a rewrite or refactor, but it is only in these specific cases that you should modify code. Remember: open for extension; closed for modification.

## Key Points

* _Never change anything_ at it's source.
* Avoid the _Domino Effect_.
* Doing so causes _visual regressions_.
* _Hard to keep track_ of the knock-on effects.
* Always make changes via extension `.btn--modifier`
* Possibly the most useful principle for dealing with _other people's code_.
* A _safe way_ to make changes.
* Everything gets _opted in explicitly_.
* Prevents one-sided changes from happening, the developer has to _add the class into the markup_ as well.
* A _second layer of safety_: changes can't be actioned from one place alone.
* Build things _forward_.
* Analogous to _rewriting Git history_.
* Safe way of _working with legacy_.

### Further Reading

1. [The open/closes principle applied to CSS](http://csswizardry.com/2012/06/the-open-closed-principle-applied-to-css/)

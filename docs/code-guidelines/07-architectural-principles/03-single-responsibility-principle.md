---
title: Single Responsibility Principle
status: inprogress
---

The single responsibility principle is a paradigm that, very loosely, states that all pieces of code (in our case, classes) should focus on doing one thing and one thing only. More formally:

> …the single responsibility principle states that every context (class, function, variable, etc.) should have a single responsibility, and that responsibility should be entirely encapsulated by the context.

What this means for us is that our CSS should be composed of a series of much smaller classes that focus on providing very specific and limited functionality. This means that we need to decompose UIs into their smallest component pieces that each serve a single responsibility; they all do just one job, but can be very easily combined and composed to make much more versatile and complex constructs. Let’s take some example CSS that does not adhere to the single responsibility principle:

```
.error-message {
    display: block;
    padding: 10px;
    border-top: 1px solid #f00;
    border-bottom: 1px solid #f00;
    background-color: #fee;
    color: #f00;
    font-weight: bold;
}

.success-message {
    display: block;
    padding: 10px;
    border-top: 1px solid #0f0;
    border-bottom: 1px solid #0f0;
    background-color: #efe;
    color: #0f0;
    font-weight: bold;
}
```

Here we can see that—despite being named after one very specific use-case—these classes are handling quite a lot: layout, structure, and cosmetics. We also have a lot of repetition. We need to refactor this in order to abstract out some shared objects (OOCSS) and bring it more inline with the single responsibility principle. We can break these two classes out into four much smaller responsibilities:

```
.box {
    display: block;
    padding: 10px;
}


.message {
    border-style: solid;
    border-width: 1px 0;
    font-weight: bold;
}

.message--error {
    background-color: #fee;
    color: #f00;
}

.message--success {
    background-color: #efe;
    color: #0f0;
}
```

Now we have a general abstraction for boxes which can live, and be used, completely separately from our message component, and we have a base message component that can be extended by a number of smaller responsibility classes. The amount of repetition has been greatly reduced, and our ability to extend and compose our CSS has been greatly increased. This is a great example of OOCSS and the single responsibility principle working in tandem.

By focusing on single responsibilities, we can give our code much more flexibility, and extending components’ functions becomes very simple when sticking to the open/closed principle, which we’re going to look at next.

## Key Points

* AKA: Do one thing, _one thing only_, and one thing well.
* Break bigger monoliths down into _individual concerns_
* Easier to _reason about_.
* Provides higher _composability_.

### Further Reading

1. [The single responsibility principle applied to CSS](http://csswizardry.com/2012/04/the-single-responsibility-principle-applied-to-css/)

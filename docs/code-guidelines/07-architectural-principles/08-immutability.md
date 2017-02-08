---
title: Immutability
status: inprogress
---

An immutable object is an object whose state cannot be modified after it is created. Prevalent within CSS as we can’t fully encapsulate an object which results in collisions and regressions.

If we know that an object can never change state, then we can predict what it’s outcome will be with a high degree of certainty.

`.col-6` has one input, but two potential outputs if we drop it in a MQ and change the rules.

But by suffixing a ruleset with a responsive suffix - `@sm` we are then essentially preventing the mutation of a ruleset by not using the same name twice.

```
.col-6 {
    width: 50%;
}

@media screen and (max-width: 480px) {

    .col-6@sm {
        float: none;
        width: 100%;
    }

}
```

Another example is when we come up against specificity mismatch.

```
.sub-content h2 {
    text-align: left;
}

.u-text-center {
    text-align: center;
}

<section class="sub-content">
    <h2 class="u-text-center">...</h2>
</section>
```

Because of the specificity mismatch we have managed to mutate the state and behaviour of the helper call .u-text-center - this code will align the text left, despite adding the centre class.

To fix this, and the only time it is really advised, is to use !important with the helper class. Essentially all utility classes should be Immutable.

Another good example is with buttons. The example below shows if you put the `.btn` class within a different context you can increase the font-size, however we are mutating the `.btn` class and that should never happen.

```
.btn {
    font-size: 1em;
}

.promo .btn {
    font-size: 1.25em;
}
```

The fix is simple, just add another class, replace `.promo .btn { ... }` with `.btn--large { ...}`. Two classes two outcomes.

* Outcome depends on how/when you observe it.
* It has been mutated.
* Mutable state leads to confusion and unexpected outcomes.
* Particularly common in CSS.

## Key Points

* Provides _confidence_.
* Makes things _predictable_.
* Helps _debugging_.
* Reduces _cognitive overhead_.
* _Removes_ caveats, states, and conditions.
* Don’t have _several states_ of the same thing.
* Use Modifiers or Responsive _Suffixes_.
* Use _!important_ to force immutability.

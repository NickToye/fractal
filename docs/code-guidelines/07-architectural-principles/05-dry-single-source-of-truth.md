---
title: DRY/The Single Source of Truth
status: inprogress
label: DRY/The Single Source of Truth
---

DRY, which stands for Don’t Repeat Repeat Yourself, is a micro-principle used in software development which aims to keep the repetition of key information to a minimum. Its formal definition is that

> [e]very piece of knowledge must have a single, unambiguous, authoritative representation within a system.

Although a very simple principle—in principle—DRY is often misinterpreted as the necessity to never repeat the exact same thing twice at all in a project. This is impractical and usually counterproductive, and can lead to forced abstractions, over-thought and -engineered code, and unusual dependencies.

The key isn’t to avoid all repetition, but to normalise and abstract meaningful repetition. If two things happen to share the same declarations coincidentally, then we needn’t DRY anything out; that repetition is purely circumstantial and cannot be shared or abstracted. For example:

```
.btn {
    display: inline-block;
    padding: 1em 2em;
    font-weight: bold;
}

[...]

.page-title {
    font-size: 3rem;
    line-height: 1.4;
    font-weight: bold;
}

[...]

    .user-profile__title {
        font-size: 1.2rem;
        line-height: 1.5;
        font-weight: bold;
    }
```

From the above code, we can reasonably deduce that the `font-weight: bold;` declaration appears three times purely coincidentally. To try and create an abstraction, mixin, or `@extend` directive to cater for this repetition would be overkill, and would tie these three rulesets together based purely on circumstance.

However, imagine we’re using a web-font that requires font-weight: bold; to be declared every time the font-family is:

```
.btn {
    display: inline-block;
    padding: 1em 2em;
    font-family: "My Web Font", sans-serif;
    font-weight: bold;
}

[...]

.page-title {
    font-size: 3rem;
    line-height: 1.4;
    font-family: "My Web Font", sans-serif;
    font-weight: bold;
}

[...]

    .user-profile__title {
        font-size: 1.2rem;
        line-height: 1.5;
        font-family: "My Web Font", sans-serif;
        font-weight: bold;
    }
```

Here we’re repeating a more meaningful snippet of CSS; these two declarations have to always be declared together. In this instance, we probably would DRY out our CSS.

I would recommend using a mixin over `@extend` here because, even though the two declarations are thematically grouped, the rulesets themselves are still separate, unrelated entities: to use `@extend` would be to physically group these unrelated rulesets together in our CSS, thus making the unrelated related.

Our mixin:

```
@mixin my-web-font() {
    font-family: "My Web Font", sans-serif;
    font-weight: bold;
}

.btn {
    display: inline-block;
    padding: 1em 2em;
    @include my-web-font();
}

[...]

.page-title {
    font-size: 3rem;
    line-height: 1.4;
    @include my-web-font();
}

[...]

    .user-profile__title {
        font-size: 1.2rem;
        line-height: 1.5;
        @include my-web-font();
    }
```

Now the two declarations only exist once, meaning we’re not repeating ourselves. If we ever switch out our web-font, or move to a font-weight: normal; version, we only need to make that change in one place.

In short, only DRY code that is actually, thematically related. Do not try to reduce purely coincidental repetition: duplication is better than the wrong abstraction.

## Key Points

* Every discrete piece of information should _exist only once_.
* You shouldn’t need to make the _same change several times_.
* _Repetition is extra overhead_: more to maintain, to go wrong.
* Increases _cognitive overhead_.
* Contributes to _bloat_.

#### The Single Source of Truth

* The more _philosophical principle_ behind DRY.
* Key data should only _exist once in source_.
* Increases _confidence_.
* _Prevents anomalies_ and disparity.
* Makes changes _simpler_.
* Keeps your _house in order_.

#### DRY/Single Source of Truth

* Use a preprocessor to store _key data in variables_.
* Make use of mixins to _generate repetitions_ for you.
* Abstract _design patterns_ out into reusable objects.
* Do not DRY anything that is _purely coincidental_.
* Repetition is better than _the wrong abstraction_.

### Further Reading

1. [Writing DRYer vanilla CSS](http://csswizardry.com/2013/07/writing-dryer-vanilla-css/)

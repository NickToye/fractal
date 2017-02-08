---
title: Important
status: inprogress
label: important
---

The word `!important` sends shivers down the spines of almost all front-end developers. `!important` is a direct manifestation of problems with specificity; it is a way of cheating your way out of specificity wars, but usually comes at a heavy price. It is often viewed as a last resort—a desperate, defeated stab at patching over the symptoms of a much bigger problem with your code.

The general rule is that `!important` is always a bad thing, but, to quote Jamie Mason:

> Rules are the children of principles.

That is to say, a single rule is a simple, black-and-white way of adhering to a much larger principle. When you’re starting out, the rule never use `!important` is a good one.

However, once you begin to grow and mature as a developer, you begin to understand that the principle behind that rule is simply about keeping specificity low. You’ll also learn when and where the rules can be bent…

`!important` does have a place in CSS projects, but only if used sparingly and proactively.

Proactive use of `!important` is when it is used before you’ve encountered any specificity problems; when it is used as a guarantee rather than as a fix. For example:

```
.one-half {
    width: 50% !important;
}

.hidden {
    display: none !important;
}
```

These two helper, or utility, classes are very specific in their intentions: you would only use them if you wanted something to be rendered at 50% width or not rendered at all. If you didn’t want this behaviour, you would not use these classes, therefore whenever you do use them you will definitely want them to win.

Here we proactively apply `!important` to ensure that these styles always win. This is correct use of `!important` to guarantee that these trumps always work, and don’t accidentally get overridden by something else more specific.

Incorrect, reactive use of `!important` is when it is used to combat specificity problems after the fact: applying `!important` to declarations because of poorly architected CSS. For example, let’s imagine we have this HTML:

```
<div class="content">
    <h2 class="heading-sub">...</h2>
</div>
```

…and this CSS:

```
.content h2 {
    font-size: 2em;
}

.heading-sub {
    font-size: 1.5em !important;
}
```

Here we can see how we’ve used `!important` to force our `.heading-sub {}` styles to reactively override our `.content h2 {}` selector. This could have been circumvented by any number of things, including using better Selector Intent, or avoiding nesting.

In these situations, it is preferable that you investigate and refactor any offending rulesets to try and bring specificity down across the board, as opposed to introducing such specificity heavyweights.

Only use `!important` proactively, not reactively.

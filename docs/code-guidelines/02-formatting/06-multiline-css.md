---
title: Multi-line CSS
status: inprogress
label: Multi-line CSS

---

CSS should be written over multiple lines, unless specific circumstances require it. The benefits are:

* A reduced chance of merge conflicts, because each piece of functionality exists on its own line.
* More ‘truthful’ and reliable diffs, because one line only ever carries one change.

Exceptions to this rule should be fairly apparent, such as similar rulesets that only carry one declaration each, for example:

```
.icon {
    display: inline-block;
    width:  16px;
    height: 16px;
    background-image: url(/img/sprite.svg);
}

.icon--home     { background-position:   0     0  ; }
.icon--person   { background-position: -16px   0  ; }
.icon--files    { background-position:   0   -16px; }
.icon--settings { background-position: -16px -16px; }
```

The benefits of those are:

* they still conform to the one-reason-to-change-per-line rule
* they share enough similarities that they don’t need to be read as thoroughly as other rulesets—there is more benefit in being able to scan their selectors, which are of more interest to us in these cases

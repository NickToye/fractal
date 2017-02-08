---
title: Meaningful Whitespace
status: inprogress
---

As well as indentation, we can provide a lot of information through liberal and judicious use of whitespace between rulesets. We use:

* One (1) empty line between closely related rulesets
* Two (2) empty lines between loosely related rulesets
* Five (5) empty lines between entirely new sections

```
/*------------------------------------*\
    #FOO
\*------------------------------------*/

.foo {}

    .foo__bar {}


.foo--baz {}





/*------------------------------------*\
    #BAR
\*------------------------------------*/

.bar {}

    .bar__baz {}

    .bar__foo {}
```

There should never be a scenario in which two rulesets do not have an empty line between them.
This would be incorrect:

```
.foo {}
    .foo__bar {}
.foo--baz {}
```

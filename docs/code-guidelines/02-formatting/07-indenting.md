---
title: Indenting
status: inprogress
---

As well as indenting individual declarations, indent entire related rulesets to signal their relation to one another, for example:

```
.foo {}

    .foo__bar {}

        .foo__baz {}
```

By doing this, a developer can see at a glance that `.foo__baz {}` lives inside `.foo__bar {}` lives inside `.foo {}`.

Sass does provide nesting functionality, but this is not to say it should be used. If nesting can be avoided please do, if not please limit to 3 nests or use BEM to avoid nesting.

---
title: Pre-Processor Comments
status: inprogress
---

With most—if not all—preprocessors, we have the option to write comments that will not get compiled out into our resulting CSS file. As a rule, use these comments to document code that would not get written out to that CSS file either. If you are documenting code which will get compiled, use comments that will compile also. For example, this is correct:

```
// Dimensions of the @2x image sprite:
$sprite-width:  920px;
$sprite-height: 212px;

/**
 * 1. Default icon size is 16px.
 * 2. Squash down the retina sprite to display at the correct size.
 */
.sprite {
    width:  16px; /* [1] */
    height: 16px; /* [1] */
    background-image: url(/img/sprites/main.png);
    background-size: ($sprite-width / 2 ) ($sprite-height / 2); /* [2] */
}
```

We have documented variables—code which will not get compiled into our CSS file—with preprocessor comments, whereas our CSS—code which will get compiled into our CSS file—is documented using CSS comments. This means that we have only the correct and relevant information available to us when debugging our compiled stylesheets.

## Removing Comments

Comments should never go into production, so make sure CSS is minified so that comments will be removed prior to deployment.

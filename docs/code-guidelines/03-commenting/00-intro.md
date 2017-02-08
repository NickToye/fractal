---
title: Commenting
status: inprogress
---

To avoid the scenario when you don't know who wrote a piece of code, comment!

CSS as a language doesn't leave much of breadcrumb trail, so can be difficult to pinpoint accurately issues by simply looking at the CSS in isolation.

* whether some CSS relies on other code elsewhere
* what effect changing some code will have elsewhere
* where else some CSS might be used
* what styles something might inherit (intentionally or otherwise)
* what styles something might pass on (intentionally or otherwise)
* where the author intended a piece of CSS to be used

As a rule, you should comment anything that isn’t immediately obvious from the code alone. That is to say, there is no need to tell someone that `color: red;` will make something red, but if you’re using `overflow: hidden;` to clear floats—as opposed to clipping an element’s overflow—this is probably something worth documenting.

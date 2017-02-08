---
title: Portability
status: inprogress
---

Reducing, or, ideally, removing, location dependence means that we can move components around our markup more freely, but how about improving our ability to move classes around components? On a much lower level, there are changes we can make to our selectors that make the selectors themselves—as opposed to the components they create—more portable. Take the following example:

```
input.btn {}
```

This is a qualified selector; the leading input ties this ruleset to only being able to work on input elements. By omitting this qualification, we allow ourselves to reuse the `.btn` class on any element we choose, like an a, for example, or a button.

Qualified selectors do not lend themselves well to being reused, and every selector we write should be authored with reuse in mind.

Of course, there are times when you may want to legitimately qualify a selector—you might need to apply some very specific styling to a particular element when it carries a certain class, for example:

```
/**
 * Embolden and colour any element with a class of `.error`.
 */
.error {
    color: red;
    font-weight: bold;
}

/**
 * If the element is a `div`, also give it some box-like styling.
 */
div.error {
    padding: 10px;
    border: 1px solid;
}
```

This is one example where a qualified selector might be justifiable, but I would still recommend an approach more like:

```
/**
 * Text-level errors.
 */
.error-text {
    color: red;
    font-weight: bold;
}

/**
 * Elements that contain errors.
 */
.error-box {
    padding: 10px;
    border: 1px solid;
}
```

This means that we can apply .error-box to any element, and not just a div—it is more reusable than a qualified selector.

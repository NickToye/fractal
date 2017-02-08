---
title: HTML
status: inprogress
label: HTML
---

These are some HTML formatting guidelines to help along the way.

Always quote attributes, even if they would work without. This reduces the chance of accidents, and is a more familiar format to the majority of developers. For all this would work (and is valid):

```
<div class="box">
```

When writing multiple values in a class attribute, separate them with two spaces, thus:

```
<div class="foo  bar">
```

When multiple classes are related to each other, consider grouping them in square brackets [ ], like so:

```
<div class="[ box  box--highlight ]  [ bio  bio--long ]"></div>
```

Also it would be useful to follow a hierarchy in the positioning of classes.

* Semantic name
* Specific style
* Layout
* Helpers
* State

```
<div class="{semantic name}  {specific style}  {layout}  {helpers}  {state} ">
```

And in the real world:

```
<div class="popup-switch  [ list--unstyled  list--inline ]  [ u-2/4  u-p  ]  [ text--center  clearfix ]  popup-switch--active">
```

As with our rulesets, it is possible to use meaningful whitespace in your HTML. You can denote thematic breaks in content with five (5) empty lines, for example:

```
<header class="page-head">
    ...
</header>





<main class="page-content">
    ...
</main>





<footer class="page-foot">
    ...
</footer>
```

Separate independent but loosely related snippets of markup with a single empty line, for example:

```
<ul class="primary-nav">

    <li class="primary-nav__item">
        <a href="/" class="primary-nav__link">Home</a>
    </li>

    <li class="primary-nav__item  primary-nav__trigger">
        <a href="/about" class="primary-nav__link">About</a>

        <ul class="primary-nav__sub-nav">
            <li><a href="/about/products">Products</a></li>
            <li><a href="/about/company">Company</a></li>
        </ul>

    </li>

    <li class="primary-nav__item">
        <a href="/contact" class="primary-nav__link">Contact>/a<
    </li>

</ul>
```

This allows developers to spot separate parts of the DOM at a glance.

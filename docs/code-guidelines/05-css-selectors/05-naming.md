---
title: Naming
status: inprogress
---

With regards to naming things in CSS is to pick a name that is sensible, but somewhat ambiguous: aim for high reusability. For example, instead of a class like `.site-nav`, choose something like `.primary-nav;` rather than `.footer-links`, favour a class like `.sub-links`.

The differences in these names is that the first of each two examples is tied to a very specific use case: they can only be used as the site’s navigation or the footer’s links respectively. By using slightly more ambiguous names, we can increase our ability to reuse these components in different circumstances.

That is to say, we should use sensible names—classes like `.border` or `.red` are never advisable—but we should avoid using classes which describe the exact nature of the content and/or its use cases. Using a class name to describe content is redundant because content describes itself.

The debate surrounding semantics has raged for years, but it is important that we adopt a more pragmatic, sensible approach to naming things in order to work more efficiently and effectively. Instead of focussing on ‘semantics’, look more closely at sensibility and longevity—choose names based on ease of maintenance, not for their perceived meaning.

Name things for people; they’re the only things that actually read your classes (everything else merely matches them). Once again, it is better to strive for reusable, recyclable classes rather than writing for specific use cases. Let’s take an example:

```
/**
 * Runs the risk of becoming out of date; not very maintainable.
 */
.blue {
    color: blue;
}

/**
 * Depends on location in order to be rendered properly.
 */
.header span {
    color: blue;
}

/**
 * Too specific; limits our ability to reuse.
 */
.header-color {
    color: blue;
}

/**
 * Nicely abstracted, very portable, doesn’t risk becoming out of date.
 */
.highlight-color {
    color: blue;
}
```

It is important to strike a balance between names that do not literally describe the style that the class brings, but also ones that do not explicitly describe specific use cases. Instead of `.home-page-panel`, choose `.masthead;` instead of `.site-nav`, favour `.primary-nav;` instead of `.btn-login`, opt for `.btn-primary`.

## Naming UI Components

Naming components with agnosticism and reusability in mind really helps developers construct and modify UIs much more quickly, and with far less waste. However, it can sometimes be beneficial to provide more specific or meaningful naming alongside the more ambiguous class, particularly when several agnostic classes come together to form a more complex and specific component that might benefit from having a more meaningful name. In this scenario, we augment the classes with a data-ui-component attribute which houses a more specific name, for example:

```
<ul class="tabbed-nav" data-ui-component="Main Nav"></ul>
```

Here we have the benefits of a highly reusable class name which does not describe—and, therefore, tie itself to—a specific use case, and added meaning via our data-ui-component attribute. The data-ui-component’s value can take any format you wish, like title case:

```
<ul class="tabbed-nav" data-ui-component="Main Nav"></ul>
```

Or class-like:

```
<ul class="tabbed-nav" data-ui-component="main-nav"></ul>
```

Or namespaced:

```
<ul class="tabbed-nav" data-ui-component="nav-main"></ul>
```

The implementation is largely personal preference, but the concept still remains: Add any useful or specific meaning via a mechanism that will not inhibit your and your team’s ability to recycle and reuse CSS.

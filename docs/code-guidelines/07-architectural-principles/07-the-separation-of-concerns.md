---
title: The Separation of Concerns
status: inprogress
---

The separation of concerns is a principle which, at first, sounds a lot like the single responsibility principle. The separation of concerns states that code should be broken up

> into distinct sections, such that each section addresses a separate concern. A concern is a set of information that affects the code of a computer program. […] A program that embodies SoC well is called a modular program.

Modular is a word we’re probably used to; the idea of breaking UIs and CSS into much smaller, composable pieces. The separation of concerns is just a formal definition which covers the concepts of modularity and encapsulation in code. In CSS this means building individual components, and writing code which only focusses itself on one task at a time.

The term was coined by Edsger W. Dijkstra, who rather elegantly said:

>Let me try to explain to you, what to my taste is characteristic for all intelligent thinking. It is, that one is willing to study in depth an aspect of one’s subject matter in isolation for the sake of its own consistency, all the time knowing that one is occupying oneself only with one of the aspects. We know that a program must be correct and we can study it from that viewpoint only; we also know that it should be efficient and we can study its efficiency on another day, so to speak. In another mood we may ask ourselves whether, and if so: why, the program is desirable. But nothing is gained—on the contrary!—by tackling these various aspects simultaneously. It is what I sometimes have called ‘the separation of concerns’, which, even if not perfectly possible, is yet the only available technique for effective ordering of one’s thoughts, that I know of. This is what I mean by ‘focusing one’s attention upon some aspect’: it does not mean ignoring the other aspects, it is just doing justice to the fact that from this aspect’s point of view, the other is irrelevant. It is being one- and multiple-track minded simultaneously.

Beautiful. The idea here is to focus fully on one thing at once; build one thing to do its job very well whilst paying as little attention as possible to other facets of your code. Once you have addressed and built all these separate concerns in isolation—meaning they’re probably very modular, decoupled, and encapsulated—you can begin bringing them together into a larger project.

A great example is layout. If you are using a grid system, all of the code pertaining to layout should exist on its own, without including anything else. You’ve written code that handles layout, and that’s it:

```
<div class="layout">

    <div class="layout__item  two-thirds">
    </div>

    <div class="layout__item  one-third">
    </div>

</div>
```

You will now need to write new, separate code to handle what lives inside of that layout:

```
<div class="layout">

    <div class="layout__item  two-thirds">
        <section class="content">
            ...
        </section>
    </div>

    <div class="layout__item  one-third">
        <section class="sub-content">
            ...
        </section>
    </div>

</div>
```

The separation of concerns allows you to keep code self-sufficient, ignorant, and ultimately a lot more maintainable. Code which adheres to the separation of concerns can be much more confidently modified, edited, extended, and maintained because we know how far its responsibilities reach. We know that modifying layout, for example, will only ever modify layout—nothing else.

The separation of concerns increases reusability and confidence whilst reducing dependency.

## Misconceptions

There are, I feel, a number of unfortunate misconceptions surrounding the separation of concerns when applied to HTML and CSS. They all seem to revolve around some format of:

> Using classes for CSS in your markup breaks the separation of concerns.

Unfortunately, this is simply not true. The separation of concerns does exist in the context of HTML and CSS (and JS), but not in the way a lot of people seem to believe.

The separation of concerns when applied to front-end code is not about classes-in-HTML-purely-for-styling-hooks-blurring-the-lines-between-concerns; it is about the very fact that we are using different languages for markup and styling at all.

Back before CSS was widely adopted, we’d use tables to lay content out, and font elements with color attributes to provide cosmetic styling. The problem here is that HTML was being used to create content and also to style it; there was no way of having one without the other. This was a complete lack of separation of concerns, which was a problem. CSS’ job was to provide a completely new syntax to apply this styling, allowing us to separate our content and style concerns across two technologies.

Another common argument is that putting classes in your HTML puts style information in your markup.

So, in a bid to circumvent this, people adopt selectors that might look a little like this:

```
body > header:first-of-type > nav > ul > li > a {
}
```

This CSS—presumably to style our site’s main nav—has the usual problems of location dependency, poor Selector Intent, and high specificity, but it also manages to do exactly what developers are trying to avoid, only in the opposite direction: it puts DOM information in your CSS. Aggressive attempts to avoid putting any style hints or hooks in markup only lead to overloading stylesheets with DOM information.

In short: having classes in your markup does not violate the separation of concerns. Classes merely act as an API to link two separate concerns together. The simplest way to separate concerns is to write well formed HTML and well formed CSS, and link to two together with sensible, judicious use of classes.

## Key Points

* Each thing _responsible for itself_ and nothing more.
* Reason about and _study features in isolation_.
* In CSS:
  - Only bind CSS onto _CSS-based classes only_.
  - Don’t write _DOM-like selectors_.
  - Don’t bind CSS onto _data-* attributes_.
  - Don’t bind _JS onto CSS classes_.
* _Grid systems_ are a great example.
* Handle your layout _completely separately_ to your components.
* Writing _CSS in JS_ breaks the Separation of Concerns.
* Can’t reconsider your JS architecture _without having to reconsider your CSS architecture_.

---
title: Object-orientation
status: inprogress
---

Object-orientation is a programming paradigm that breaks larger programs up into smaller, in(ter)dependent objects that all have their own roles and responsibilities. From Wikipedia:

> Object-oriented programming (OOP) is a programming paradigm that represents the concept of ‘objects’ […] which are usually instances of classes, [and] are used to interact with one another to design applications and computer programs.

When applied to CSS, we call it object-oriented CSS, or OOCSS. OOCSS was coined and popularised by Nicole Sullivan, whose Media Object has become the poster child of the methodology.

OOCSS deals with the separation of UIs into structure and skin: breaking UI components into their underlying structural forms, and layering their cosmetic forms on separately. This means that we can recycle common and recurring design patterns very cheaply without having to necessarily recycle their specific implementation details at the same time. OOCSS promotes reuse of code, which makes us quicker, as well as keeping the size of our codebase down.

Structural aspects can be thought of like skeletons; common, recurring frames that provide design-free constructs known as objects and abstractions. Objects and abstractions are simple design patterns that are devoid of any cosmetics; we abstract out the shared structural traits from a series of components into a generic object.

Skin is a layer that we (optionally) add to our structure in order to give objects and abstractions a specific look-and-feel. Let’s look at an example:

```
/**
 * A simple, design-free button object. Extend this object with a `.btn--*` skin
 * class.
 */
.btn {
    display: inline-block;
    padding: 1em 2em;
    vertical-align: middle;
}


/**
 * Positive buttons’ skin. Extends `.btn`.
 */
.btn--positive {
    background-color: green;
    color: white;
}

/**
 * Negative buttons’ skin. Extends `.btn`.
 */
.btn--negative {
    background-color: red;
    color: white;
}
```

Above, we can see how the `.btn {}` class simply provides structural styling to an element, and doesn’t concern itself with any cosmetics. We supplement the `.btn {}` object with a second class, such as `.btn--negative {}` in order to give that DOM node specific cosmetics:

```
<button class="btn  btn--negative">Delete</button>
```

Favour the multiple-class approach over using something like `@extend:` using multiple classes in your markup—as opposed to wrapping the classes up into one using a preprocessor—

* gives you a better paper-trail in your markup, and allows you to see quickly and explicitly which classes are acting on a piece of HTML;
* allows for greater composition in that classes are not tightly bound to other styles in your CSS.

Whenever you are building a UI component, try and see if you can break it into two parts: one for structural styles (paddings, layout, etc.) and another for skin (colours, typefaces, etc.).

### Further Reading

1. [The media object saves hundreds of lines of code](http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/)
2. [The flag object](http://csswizardry.com/2013/05/the-flag-object/)
3. [Naming UI components in OOCSS](http://csswizardry.com/2014/03/naming-ui-components-in-oocss/)

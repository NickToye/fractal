---
title: Multiple Files
status: inprogress
---

A Sass based codebase requires developers to split chunks of code into their own files. Based on the Inuit CSS setup files will be split into the following:

* **Settings** *Global variables, site-wide settings, config switches*
* **Tools** *Site-wide mixins and functions*
* **Generic** *Low-specificity, far-reaching rulesets, (e.g. resets)*
* **Elements** *Unclassed HTML elements, eg. a {}, blockquote {}*
* **Objects** *Objects, abstractions, and design patterns, (e.g. .media {} )*
* **Components** *Discrete, complete chunks of UI (e.g. .carousel {})*
* **Utilities** *High-specificity, very explicit selectors. Overrides and helper classes (e.g. .hidden() )*

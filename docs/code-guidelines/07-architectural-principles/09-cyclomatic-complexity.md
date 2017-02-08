---
title: Cyclomatic Complexity
status: inprogress
---

Cyclomatic complexity is a software metric used to indicate the complexity of a program. It is a quantitative measure of the number of linearly independent paths through a program's source code.

Essentially a decision tree that accounts for all the branches before making a decision.

```
div.main section.content h1 a span {}
```

Which written out in a series of if's and else's:

```
@if div {
    @if .main {
        @if .section {
            @if .content {
                @if h1 {
                    @if a {
                        @if span {
                            // Do stuff
                        }
                    }
                }
            }
        }
    }
}
```

This results in the browser asking 7 different questions before it gets to a resolve. This is bad, but can be reduced to a single question, thus reducing the cyclomatic complexity.

```
.text-highlight { }
<span class="text-highlight"> ... </span>
```

## Key Points

* A software metric to indicate the _complexity_ of a program.
* Having lots of selectors in a ruleset just _increases_ the if logic
* More often than not they are not needed if we implement a _Single Responsibility Principle_.
* Start of _explicitly_.

---
title: Ruleset Anatomy
status: inprogress

---

Standard ruleset:

```
[selector] {
    [property]: [value];
    [<--declaration--->]
}
```

```
.foo, .foo--bar,
.baz {
    display: block;
    background-color: green;
    color: red;
}
```

* related selectors on the same line; unrelated selectors on new lines
* a space before our opening brace {
* properties and values on the same line
* a space after our property–value delimiting colon :
* each declaration on its own new line
* the opening brace { on the same line as our last selector
* our first declaration on a new line after our opening brace {
* our closing brace } on its own new line
* each declaration indented by four 4 spaces
* a trailing semi-colon ; on our last declaration

This would be unacceptable:

```
.foo, .foo--bar, .baz
{
  display:block;
  background-color:green;
  color:red }
```

* tabs instead of spaces
* unrelated selectors on the same line
* the opening brace { on its own line
* the closing brace } does not sit on its own line
* the trailing (and, admittedly, optional) semi-colon ; is missing
* no spaces after colons :

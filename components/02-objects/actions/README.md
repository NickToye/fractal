## Action component

The action component can be included within other components like this:

```
\{{> @action }}
```

This template for this component uses:

```
{{view @button }}
```

and it therefore expects a set of data to render it that is in the following format:

```
{{context @button}}
```

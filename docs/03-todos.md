---
title: Todos
status: inprogress
order: 0
context:
    general:
        - Finish the docs
        - Write tests
        - Add in missing generic files
        - Print stylesheet
        - Fix Design tokens
        - Remove any unused sass files
        - Add file headers
    elements:
    objects:
        - Tables
        - Forms
        - Social icons
    tools:
        - Split out mixins into component folders
        - Add in missing tools
    utilities:
        - Add in missing utilities
    components:
        - Banners
        - Specific Forms
        - Cards
        - Header
        - Footer
        - Navigation
        - Carousels
        - Configurator
        - Actions
---
Things still to do:

{{#if general}}
## General tasks
{{#each general}}
* {{ this }}
{{/each}}
{{/if}}

{{#if elements}}
## Elements tasks
{{#each elements}}
* {{ this }}
{{/each}}
{{/if}}

{{#if objects}}
## Objects tasks
{{#each objects}}
* {{ this }}
{{/each}}
{{/if}}

{{#if tools}}
## Tools tasks
{{#each tools}}
* {{ this }}
{{/each}}
{{/if}}

{{#if utilities}}
## Utilities tasks
{{#each utilities}}
* {{ this }}
{{/each}}
{{/if}}

{{#if components}}
## Components tasks
{{#each components}}
* {{ this }}
{{/each}}
{{/if}}

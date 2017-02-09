'use strict';

/*
 * Create a new Fractal instance and export it for use elsewhere if required
 */

const fractal = module.exports = require('@frctl/fractal').create();

/*
 * General project configuration.
 */

fractal.set('project.title', 'Sofology Component Library 123');

/*
 * Configure components.
 */

fractal.components.set('path', `${__dirname}/components`);
fractal.components.set('default.preview', '@preview');

/*
 * Configure the Handlebars template engine used by components
 *
 * Components use Handlebars templates by default, so this step normally not required.
 * However in this example we are expicitly loading the handlebars adapter
 * to demonstrate how to add custom Handlebars helpers that you can then use
 * in your components.
 *
 * See https://github.com/frctl/handlebars for more information on the Handlebars
 * adapter and bundled helpers.
 */

const handlebarsAdapter = require('@frctl/handlebars');

const hbs = handlebarsAdapter({
    helpers: {
        uppercase: function(str) {
            return str.toUpperCase();
        },
        lowercase: function(str) {
            return str.toLowerCase();
        }
    }
});

fractal.components.engine(hbs);
fractal.components.set('default.status', 'initial');

fractal.components.set('statuses', {
    initial: {
        label: "Initial",
        description: "I'm doing it.",
        color: '#db80b3'
    },
    inprogress: {
        label: "In Progress",
        description: "I'm done with this.",
        color: "#f4bf75"
    },
    review: {
      label: "In Review",
      description: "Component needs to be reviewed",
      color: "#61afef"
    },
    completed: {
      label: "Completed",
      description: "Completed and ready for production",
      color: "#6eb401"
    }
});
/*
 * Configure docs.
 */

fractal.docs.set('path', `${__dirname}/docs`);
fractal.docs.set('default.status', 'initial');
fractal.docs.set('markdown.breaks', true);

fractal.docs.set('statuses', {
    initial: {
        label: "Initial",
        description: "I'm doing it.",
        color: '#db80b3'
    },
    inprogress: {
        label: "In Progress",
        description: "I'm done with this.",
        color: "#f4bf75"
    },
    review: {
      label: "In Review",
      description: "Component needs to be reviewed",
      color: "#61afef"
    },
    completed: {
      label: "Completed",
      description: "Completed and ready for production",
      color: "#6eb401"
    }
});





/*
 * Configure the web interface.
 */

fractal.web.set('static.path', `${__dirname}/build`);
fractal.web.set('builder.dest', 'build');

 /*
  * Customise the web interface theme.
  *
  * This step is not needed if you want to just use the default theme
  * out-of-the-box. This example demonstrates some simple theme customisation
  * but you can also create your own bespoke themes or undertake much more extensive
  * customisation if required.
  */

const theme = require('@frctl/mandelbrot')({
    nav: ['components', 'docs'],
    skin: 'maroon',
    panels: ["html", "view", "context", "resources", "info", "notes"]
});

// fractal.components.set('resources', {
//     scss: {
//         label: 'SCSS',
//         match: ['**/*.scss']
//     },
//     css: {
//         label: 'CSS',
//         match: ['**/*.css']
//     },
//     other: {
//         label: 'Other Assets',
//         match: ['**/*', '!**/*.scss', '!**.css']
//     }
// });

fractal.web.theme(theme);

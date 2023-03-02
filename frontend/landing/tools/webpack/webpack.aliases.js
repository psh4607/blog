const { createWebpackAliases } = require('./webpack.helpers');

/**
 * Export Webpack Aliases
 *
 * Tip: Some text editors will show the errors or invalid intellisense reports
 * based on these webpack aliases, make sure to update `tsconfig.json` file also
 * to match the `paths` we are using in here for aliases in project.
 */
module.exports = createWebpackAliases({
	'@components': 'src/components',
	'@contexts': 'src/contexts',
	'@elements': 'src/elements',
	'@styles': 'src/styles',
	'@utils': 'src/utils',
	'@static': 'src/static',
	'@pages': 'src/pages',
	'@': 'src',
});

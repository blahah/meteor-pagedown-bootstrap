if (Package.handlebars) {
	Package.handlebars.Handlebars.registerHelper('pagedown', function(options) {
		return marked(options.fn(this));
	});
}
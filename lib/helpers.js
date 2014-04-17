if (Package.ui) {
	Package.ui.UI.registerHelper('pagedown', function(options) {
		return marked(options.fn(this));
	});
}
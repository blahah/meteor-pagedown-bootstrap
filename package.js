
Package.describe({
    summary: "Markdown-to-HTML processor and editor",
});

Package.on_use(function (api) {
    api.use('handlebars', 'client');
    api.use('marked', 'client');
    var path = Npm.require('path');
    var asset_path = path.join('lib');
    api.add_files([
      // pagedown
      path.join(asset_path, 'Markdown.Converter.js'),
      path.join(asset_path, 'Markdown.Sanitizer.js'),
      path.join(asset_path, 'Markdown.Editor.js'),
      path.join(asset_path, 'Markdown.Editor.css'),

      // meteor helpers
      path.join(asset_path, 'helpers.js'),

      // icons
	    path.join(asset_path, 'Markdown.Editor.Icons.fw.png'),
	    path.join(asset_path, 'Markdown.Editor.Icons.png')

    ], 'client');

	api.export( 'Markdown', 'client' );
});

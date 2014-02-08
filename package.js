
Package.describe({
    summary: "Markdown-to-HTML processor",
});

Package.on_use(function (api) {
    api.use('handlebars', 'client');

    api.add_files([
      // pagedown
      'lib/Markdown.Converter.js',
      'lib/Markdown.Sanitizer.js',
      'lib/Markdown.Editor.js',
      'lib/Markdown.Editor.less',

      // meteor helpers
      'lib/helpers.js',

    ], 'client');

    api.add_files([
      // icons
	  'lib/Markdown.Editor.Icons.fw.png',
	  'lib/Markdown.Editor.Icons.png'
    ], 'public');
});

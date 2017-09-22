module.exports = {
	entry: './app/app.jsx', //  Where webpack should start processing the code
	output: {
		path: __dirname,  //  Node.js syntax for path to current folder
		filename: './public/bundle.js'
	},
	resolve: {
		root: __dirname,
		alias: {
			AboutRow: 'app/components/AboutRow.jsx',
			Article: 'app/components/Article.jsx',
			ArticleRow: 'app/components/ArticleRow.jsx',
			blogArticles: 'app/components/blogArticles.js',
			BlogView: 'app/components/BlogView.jsx',
			Buttons: 'app/components/Buttons.jsx',
			ContactForm: 'app/components/ContactForm.jsx',
			defaultText: 'app/components/defaultText.js',
			InfoText: 'app/components/InfoText.jsx',
			InfoRow: 'app/components/InfoRow.jsx',
			NavigationBar: 'app/components/NavigationBar.jsx',
			NavItem: 'app/components/NavItem.jsx',
			Track: 'app/components/Track.jsx'

		},
		extensions: [ "", '.js', '.jsx']  //  This array tells webpack what extensions to process
	},
	module: {
		loaders: [  //  loaders are for file types that webpack can't read by default
			{
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'stage-0']
				},
				test: /\.jsx?$/,  //  'test' needs a RegEx to tell what files should be parsed
				exclude: /(node_modules|bower_components)/
			}
		]
	},
	devtool:  'cheap-module-eval-source-map'
};

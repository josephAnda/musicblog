var webpack = require('webpack');

module.exports = {
	entry: [  //  Load in jquery and css for page

		'./app/app.jsx'
	],
	externals: {
		jquery: 'jQuery' // allows bootsrtrap to attach methods to jquery object
	},
	plugins: [
		new webpack.ProvidePlugin({
			'$': 'jquery',
			'jQuery': 'jquery'
		})
	],
	//  Where webpack should start processing the code
	output: {
		path: __dirname,  //  Node.js syntax for path to current folder
		filename: './public/bundle.js'
	},
	resolve: {
		root: __dirname,
		alias: {
			AboutRow: 'app/components/AboutRow.jsx',
			AboutView: 'app/components/AboutView.jsx',
			ArchivesView: 'app/components/ArchivesView.jsx',
			Article: 'app/components/Article.jsx',
			ArticleRow: 'app/components/ArticleRow.jsx',
			blogArticles: 'app/components/blogArticles.js',
			BlogView: 'app/components/BlogView.jsx',
			Buttons: 'app/components/Buttons.jsx',
			ContactForm: 'app/components/ContactForm.jsx',
			ContactView: 'app/components/ContactView.jsx',
			defaultText: 'app/components/defaultText.js',
			InfoText: 'app/components/InfoText.jsx',
			InfoRow: 'app/components/InfoRow.jsx',
			Main: 'app/components/Main.jsx',
			NavigationBar: 'app/components/NavigationBar.jsx',
			NavItem: 'app/components/NavItem.jsx',
			Track: 'app/components/Track.jsx',
			applicationStyles: 'app/styles/app.css'

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

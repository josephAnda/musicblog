var React = require('react');

//  Load view modules


var InfoRow = require('InfoRow');
var ArticleRow = require('ArticleRow');
var AboutRow = require('AboutRow');

var defaultText = require('defaultText');
var blogArticles = require('blogArticles');

var BlogView = React.createClass({

	propTypes: {
		articles: React.PropTypes.array.isRequired,
		textSource: React.PropTypes.object.isRequired
	},
	getDefaultProps: function() {
		return {
			articles: blogArticles,
			textSource: defaultText
		};
	},
	render: function() {
		//  The main structure of the page is organized below . . . this is the typical React pattern for rendering the top-level view

		return (
			<div  className="BlogView col-md-11 offset-md-1">

				<h2>Sonic Portal</h2>
				<InfoRow textSource={this.props.textSource} />
				<ArticleRow articles={this.props.articles} />
				<AboutRow textSource={this.props.textSource} />
			</div>

		)
	}
});

module.exports = BlogView;

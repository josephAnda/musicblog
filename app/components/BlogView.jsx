var React = require('react');

//  Load view modules
var NavigationBar = require('NavigationBar');
var InfoRow = require('InfoRow');
var ArticleRow = require('ArticleRow');
var AboutRow = require('AboutRow');

var BlogView = React.createClass({

	propTypes: {
		articles: React.PropTypes.array.isRequired,
		textSource: React.PropTypes.object.isRequired
	},

	render: function() {

		//  The main structure of the page is organized below . . . this is the typical React pattern for rendering the top-level view
		return (
			<div className="BlogView">
				<NavigationBar />
				<InfoRow textSource={this.props.textSource} />
				<ArticleRow articles={this.props.articles} />
				<AboutRow textSource={this.props.textSource} />
			</div>

		)
	}
});

module.exports = BlogView;

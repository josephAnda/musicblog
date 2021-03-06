var React = require('react');

//  Load view modules

var InfoRow = require('InfoRow');
var ArticleRow = require('ArticleRow');

var TracksView = React.createClass({

	propTypes: {
		articles: React.PropTypes.array.isRequired,
		textSource: React.PropTypes.object.isRequired
	},

	render: function() {

		//  The main structure of the page is organized below . . . this is the typical React pattern for rendering the top-level view
		return (
			<div className="TracksView">
        <h2>Tracks View</h2>
				<InfoRow textSource={this.props.textSource} />
				<ArticleRow articles={this.props.articles} />

			</div>

		)
	}
});

module.exports = TracksView;

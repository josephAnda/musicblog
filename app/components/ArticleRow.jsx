var React = require('react');

var ArticleRow = React.createClass({

	propTypes: { articles: React.PropTypes.array.isRequired },

	render: function() {

		var formattedArticles = this.props.articles.map( function(post) {
			return <Article title={post.title} content={post.content} track={post.track} key={post.key}></Article>;
		});

		return (

			<div className="row">
				<div className="col-md-10 col-md-offset-1">
					<ul className="articleList">
						{formattedArticles}
					</ul>
				</div>
			</div>
		)
	}
});

module.exports = ArticleRow;

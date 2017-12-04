var React = require('react');
var Track = require('Track');

var Article = React.createClass({

	propTypes: {
		title: React.PropTypes.string.isRequired,
		content: React.PropTypes.string.isRequired,
		track: React.PropTypes.object.isRequired
	},

	render: function() {

		return (

			<div className='articleEntry'>
				<h1>{this.props.title}</h1>
				<p>{this.props.content}</p>
					{/* <Track trackName={this.props.track.name} source={this.props.track.source} /> */}
			</div>
		)
	}
});

module.exports = Article;

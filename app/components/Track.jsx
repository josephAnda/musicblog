var React = require('react');

var Track = React.createClass({

	propTypes: {
		trackName: React.PropTypes.string.isRequired,
		source: React.PropTypes.string.isRequired
	},

	render: function() {

		return (

			<audio controls className="audioTrack">
			 	<source src={this.props.source} type="audio/mpeg">

				</source>
				{this.props.trackName}
			</audio>
		)
	}
});

module.exports = Track;

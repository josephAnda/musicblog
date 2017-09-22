var React = require('react');


var InfoText = React.createClass({

	propTypes: {
		text: React.PropTypes.string.isRequired,
		className: React.PropTypes.string.isRequired,
	},

	render: function() {
		return (
			<p className={this.props.className}>
				{this.props.text}
			</p>
		)
	}

});

module.exports = InfoText;

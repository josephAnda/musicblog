var React = require('react');

var Buttons = React.createClass({

	propTypes: {
		className: React.PropTypes.string.isRequired
	},

	render: function() {

		return (

			<a>
				<div className={this.props.className}>
				</div>
			</a>
		)
	}
})

module.exports = Buttons;

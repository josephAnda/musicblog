var React = require('react');

var NavItem = React.createClass({

	propTypes: {
		itemName: React.PropTypes.string.isRequired
	},

	render: function() {

		return (

			<li className="nav-item">
				<a className="nav-link"> {this.props.itemName} </a>
			</li>

		)
	}
});

module.exports = NavItem;

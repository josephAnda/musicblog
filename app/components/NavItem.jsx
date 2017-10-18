var React = require('react');

var NavItem = React.createClass({

	propTypes: {
		itemName: React.PropTypes.string.isRequired
	},

	render: function() {

		var styles = {
			paddingRight: "2em"
		};

		return (

			<li className="nav-item" style={styles}>
				<a className="nav-link"> {this.props.itemName} </a>
			</li>

		)
	}
});

module.exports = NavItem;

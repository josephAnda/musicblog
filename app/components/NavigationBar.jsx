var React = require('react');
//var NavItem = require('NavItem');
var {Link, IndexLink} = require('react-router');

var NavigationBar = React.createClass({
	// Note that propTypes is a debugging tool and that the code functions without it
	propTypes: { },

	render: function() {
		var styles = {fontWeight: 'bold'};
	// Return statement is wrapped in parentheses to ensure every statement is executed
		return (
			<div>
				<IndexLink to="/" activeClassName="active" activeStyle={styles}>Blog View</IndexLink>
				<Link to="/about" activeClassName="active" activeStyle={styles}>About</Link>
				<Link to="/archives" activeClassName="active" activeStyle={styles}>Archives</Link>
				<Link to="/contact" activeClassName="active" activeStyle={styles}>Contact</Link>
			</div>

		)
	}
});

module.exports = NavigationBar;

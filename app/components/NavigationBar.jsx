var React = require('react');
var NavItem = require('NavItem');

var NavigationBar = React.createClass({
	// Note that propTypes is a debugging tool and that the code functions without it
	propTypes: { },

	render: function() {
	// Return statement is wrapped in parentheses to ensure every statement is executed
		return (

	//  Note that like the DOM, React uses the className property to assign CSS classes
			<nav className="navbar navbar-toggleable-md navbar-light bg-faded">
				<ul className="navList navbar-nav" style={{ listStyle: 'none' }} >
					<NavItem itemName="Home" />
					<NavItem itemName="About" />
					<NavItem itemName="Archives" />
				</ul>
			</nav>
		)
	}
});

module.exports = NavigationBar;

var React = require('react');
var NavItem = require('NavItem');
var {Link} = require('react-router');

var NavigationBar = React.createClass({
	// Note that propTypes is a debugging tool and that the code functions without it
	propTypes: { },
	
	render: function() {
		var styles = { 
			listStyle: 'none', 
		};
	// Return statement is wrapped in parentheses to ensure every statement is executed
		return (
			<div>
				<Link to="/">Blog View</Link>
				<Link to="/about">About</Link>

			</div>
	//  Note that like the DOM, React uses the className property to assign CSS classes
			/*<nav className="navbar navbar-toggleable-md navbar-light bg-faded">
				<ul className="navList navbar-nav" style={styles} >
					<NavItem itemName="Home" />
					<NavItem itemName="About" />
					<NavItem itemName="Archives" />
				</ul>
			</nav>*/
		)
	}
});

module.exports = NavigationBar;

var React = require('react');

var {Link, IndexLink} = require('react-router');

var NavigationBar = (props) => {

		return (
			<div>
				<IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Blog View</IndexLink>
				<Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
				<Link to="/archives" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Archives</Link>
				<Link to="/contact" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Contact</Link>
			</div>
		)

};

module.exports = NavigationBar;

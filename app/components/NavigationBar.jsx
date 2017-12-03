var React = require('react');

var {Link, IndexLink} = require('react-router');

var NavigationBar = (props) => {


		return (
			<div>
				<nav>
				<IndexLink to="/">Blog View</IndexLink>
				<div >
					<ul >
	      		<li >
							<Link  to="/about" >About</Link>
						</li>
						<li >
							<Link  to="/archives" >Archives</Link>
						</li>
						<li>
							<Link to="/contact" >Contact</Link>
						</li>
					</ul>
				</div>
				</nav>

			</div>
		)

};

module.exports = NavigationBar;

var React = require('react');

var {Link, IndexLink} = require('react-router');

var NavigationBar = (props) => {


		return (
			<div>
				<nav>
				<IndexLink className="nav-link active" to="/">The Atmosphere Blog</IndexLink>
				<div >
					<ul className="nav justify-content-center">
	      		<li className="nav-item">
							<Link className="nav-link" to="/about" >About</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/archives" >Archives</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/contact" >Contact</Link>
						</li>
					</ul>
				</div>
				</nav>

			</div>
		)

};

module.exports = NavigationBar;

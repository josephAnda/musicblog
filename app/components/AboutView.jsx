var React = require('react');

//  Load view modules



//  ES6 Arrow function used below
var AboutView = (props) => {


		//  The main structure of the page is organized below . . . this is the typical React pattern for rendering the top-level view
		var viewStyles = {
			backgroundColor: "black",
			color: "white"
		};
		return (
			<div className="AboutView col-md-10 offset-md-1">
		        <h2>About Atmosphere</h2>
		        <p>
		        	The Atmosphere Blog was started December 30, 2017 by Joseph Anda.  The purpose of the blog is simple:
							Compile in one digital space a variety of EDM tracks paired with his own work.  To carve a space among
							established, talented artists is a tall order, though, so original productions occupy a separate space
							in the page.  Each post is designed to inform the reader on the background of the artist and tracks, as
							well as the tracks themselves.
		        </p>
			</div>

		)
};

module.exports = AboutView;

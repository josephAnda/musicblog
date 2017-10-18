var React = require('react');

//  Load view modules



var AboutView = React.createClass({

	propTypes: {
		articles: React.PropTypes.array.isRequired,
		textSource: React.PropTypes.object.isRequired
	},

	render: function() {

		//  The main structure of the page is organized below . . . this is the typical React pattern for rendering the top-level view
		return (
			<div className="AboutView">
		        <h2>About View</h2>
		        <p>
		        	Click on any of the above links to find out more about that element of my production goals.
		        	Feel free to use any of the contact links to find any additional information.
		        </p>
			</div>

		)
	}
});

module.exports = AboutView;

var React = require('react');
var ContactForm = require('ContactForm');
//  Load view modules

var ContactView = React.createClass({


	render: function() {

		//  The main structure of the page is organized below . . . this is the typical React pattern for rendering the top-level view
		return (
			<div className="ContactView">
		        <h2>Contact View</h2>
		        <p>
		        	Use the form below to contact me.
		        </p>
            <ContactForm />
			</div>

		)
	}
});

module.exports = ContactView;

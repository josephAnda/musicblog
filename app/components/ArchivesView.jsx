var React = require('react');

//  Load view modules

var ArchivesView = React.createClass({


	render: function() {

		//  The main structure of the page is organized below . . . this is the typical React pattern for rendering the top-level view
		return (
			<div className="ArchivesView">
        		<h2>Archives View</h2>
			</div>

		)
	}
});

module.exports = ArchivesView;

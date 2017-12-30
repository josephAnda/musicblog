var React = require('react');

//  Load view modules

var ArchivesView = React.createClass({


	render: function() {

		//  The main structure of the page is organized below . . . this is the typical React pattern for rendering the top-level view
		return (
			<div className="ArchivesView col-md-10 offset-md-1">
        		<h2>Archives</h2>
						<p>The first few releases are unrelated, but complete.  In the beginning and end of each track, we wove together the
							transitions with a few signature sounds.  From this, we decided that we would be able to create a
							progression for the next set of sounds.</p>
			</div>

		)
	}
});

module.exports = ArchivesView;

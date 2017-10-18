var React = require('react');
var NavigationBar = require('NavigationBar');

var Main = React.createClass({



  render: function() {
		//  The main structure of the page is organized below . . . this is the typical React pattern for rendering the top-level view
		return (
			<div className="MainView">
				<NavigationBar />
        		<h2>Main View</h2>
        		{this.props.children}
      		</div>

		)
	}
});

module.exports = Main;

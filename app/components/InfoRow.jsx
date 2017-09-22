var React = require('react');
var InfoText = require('InfoText');

var InfoRow = React.createClass({

	propTypes: {
		textSource:  React.PropTypes.object.isRequired

	},

	render: function() {

		return (
			<div className="row">
				<div className="col-md-10 col-md-offset-1">
					<InfoText text={this.props.textSource.infoText} className="infoText" />
				</div>
			</div>

		)
	}
});

module.exports = InfoRow;

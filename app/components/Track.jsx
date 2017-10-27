var React = require('react');


var Track = (props) => {

	return (

			<audio controls className="audioTrack">
			 	<source src={props.source} type="audio/mpeg">

				</source>
				{props.trackName}
			</audio>
		)

};
module.exports = Track;

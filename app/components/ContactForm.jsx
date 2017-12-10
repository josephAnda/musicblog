var React = require('react');

var ContactForm = (props) => {
  // propTypes: {
  //   value: React.PropTypes.object.isRequired
  // },
  //
  // getDefaultProps: function() {
  //   return {
  //     value: {
  //       name: "",
  //       email: "",
  //       description: ""
  //     }
  //   };
  // },


    return (
    	<form className="ContactForm">
    		<input type='text' placeholder='Name (required)'  /><br />
    		<input type='text' placeholder='Email'  /><br />
    		<div className="textArea"><textarea placeholder='Message'  /></div><br />
    		<div className="submitButton"><button type="submit">Add Contact</button></div>
    	</form>
    )

};

module.exports = ContactForm;

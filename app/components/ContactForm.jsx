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
    		<input type='text' placeholder='Name (required)'  />
    		<input type='text' placeholder='Email'  />
    		<textarea placeholder='Description'  />
    		<button type="submit">"Add Contact"</button>
    	</form>
    )

};

module.exports = ContactForm;

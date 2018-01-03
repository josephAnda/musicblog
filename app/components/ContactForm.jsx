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
    		<input type='text' placeholder='Email (required)'  /><br />
        <input type='text' placeholder='Website' /><br />
        <textarea placeholder='Message (required)'  />

    		<button type="submit" className='submitButton'>Send Message</button>
    	</form>
    )

};

module.exports = ContactForm;

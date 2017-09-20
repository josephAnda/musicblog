var React = require('react');

var ContactForm = React.createClass({
  propTypes: {
    value: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
    	<form className="ContactForm">
    		<input type='text' placeholder='Name (required)' value = {this.props.value.name} />
    		<input type='text' placeholder='Email' value = {this.props.value.email} />
    		<textarea placeholder='Description' value = {this.props.value.description} />
    		<button type="submit">"Add Contact"</button>
    	</form>
    )
  },
});

module.exports = ContactForm;

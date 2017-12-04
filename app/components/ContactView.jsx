var React = require('react');
var ContactForm = require('ContactForm');
//  Load view modules


var ContactView = (props) => {
  return (
    <div className="ContactView col-md-10 offset-md-1">
          <h2>Contact Me</h2>
          <p>
            I would love to hear from you!  Use the form below to contact me.
          </p>
          <ContactForm />
    </div>

  )
};

module.exports = ContactView;

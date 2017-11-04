var React = require('react');
var ContactForm = require('ContactForm');
//  Load view modules


var ContactView = (props) => {
  return (
    <div className="ContactView">
          <h2>Contact Me</h2>
          <p>
            Use the form below to contact me.
          </p>
          <ContactForm />
    </div>

  )
};

module.exports = ContactView;

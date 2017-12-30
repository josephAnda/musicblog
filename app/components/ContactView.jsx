var React = require('react');
var ContactForm = require('ContactForm');
//  Load view modules


var ContactView = (props) => {
  return (
    <div className="ContactView col-md-10 offset-md-1">
          <h2>Contact Me</h2>
          <p>
            Do you particularly enjoy one of the tracks?  Think that the design
            somewhere matches something that you would like to do?  Or perhaps you
            just have a general question?  Whatever the reason, I would love to hear
            from you!  Just enter some minor details below . . . 
          </p>
          <ContactForm />
    </div>

  )
};

module.exports = ContactView;

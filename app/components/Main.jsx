var React = require('react');
var NavigationBar = require('NavigationBar');

var Main = (props) => {
  //  Styles like the one below can be loaded in on a per-component basis with inline
  //  style rules
  var viewStyles = {
    backgroundColor: "black",
    color: "white"
  };
  return (
    <div style={viewStyles} className="MainView">
      <NavigationBar />
          <div className="col-md-4 offset-md-4">
            <h2>The Atmosphere Blog</h2>
          </div>
          {props.children}
    </div>
  )
};
module.exports = Main;

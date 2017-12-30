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
          
          {props.children}
    </div>
  )
};
module.exports = Main;

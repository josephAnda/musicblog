var React = require('react');
var NavigationBar = require('NavigationBar');

var Main = (props) => {
  var viewStyles = {
    backgroundColor: "black",
    color: "white"
  };
  return (
    <div style={viewStyles} className="MainView">
      <NavigationBar />
          <h2>The Atmosphere Blog</h2>
          {props.children}
        </div>
  )
};
module.exports = Main;

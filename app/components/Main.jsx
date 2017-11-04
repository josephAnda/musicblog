var React = require('react');
var NavigationBar = require('NavigationBar');

var Main = (props) => {
  return (
    <div className="MainView">
      <NavigationBar />
          <h2>The Atmosphere Blog</h2>
          {props.children}
        </div>
  )
};
module.exports = Main;

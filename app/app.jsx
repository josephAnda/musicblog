
//  [  ]  Include AboutRow component in AboutView component 
//  [  ]  Add forms (use James K Nelson example)
//  [  ]  Add an actual audio track that you've produced
//  [  ]  Combine info and about row into a single component (they're way too similar)
//  [  ]  Try to make it so information specific to particular components are passed through as props.  You can pass
//        values to these props that are stored in global constants declared elsewhere or obtained from JSON
//  [  ]  Incorporate design pattern that filters and maps articles with and without tracks
//  [  ]  Incorporate state variable (what changes in respone to user input?)
//  [  ]  Wire up separate views through Router
(function() {

//  Import React when its accessed via webpack as opposed to being
//  made available globally via a script tag.  Require is via npm

var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');


//  This is the important module
var BlogView = require('BlogView');
var Main = require('Main');
var AboutView = require('AboutView');
var ArchivesView = require('ArchivesView');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<Route path="about" component={AboutView} />
			<Route path="archives" component={ArchivesView} />
			<IndexRoute component={BlogView} />
		</Route>
	</Router>,
	document.getElementById('app')
);

}) ();

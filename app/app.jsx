
//  [  ]  Draft concepts for the background art and main design
//  [  ]  Use blog examples to generate at least one full-blown article with interesting content
//  [  ]  Figure out how to market the page (beyond resume since people don't read it apparently)
//  ---------------------------------------------------------------------------------------------------
//  [  ]  Include AboutRow component in AboutView component
//  [  ]  Make forms functional (use James K Nelson example)
//  [  ]  Add an actual audio track that you've produced
//  [  ]  Combine info and about row into a single component (they're way too similar)
//  [  ]  Try to make it so information specific to particular components are passed through as props.  You can pass
//        values to these props that are stored in global constants declared elsewhere or obtained from JSON
//  [  ]  Incorporate state variable (what changes in respone to user input?)
//  [!!]  Wire up separate views through Router
//  [  ]  Add artfully integrated pictures or background art (recruit Michael for photography??)

(function() {

var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

//  This is the important module
var BlogView = require('BlogView');
var Main = require('Main');
var AboutView = require('AboutView');
var ArchivesView = require('ArchivesView');
var ContactView = require('ContactView');

require('style!css!applicationStyles')

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<Route path="about" component={AboutView} />
			<Route path="archives" component={ArchivesView} />
			<Route path="contact" component={ContactView} />
			<IndexRoute component={BlogView} />
		</Route>
	</Router>,
	document.getElementById('app')
);

}) ();

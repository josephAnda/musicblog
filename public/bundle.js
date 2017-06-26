/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	eval("\"use strict\";\n\n//  [  ]  Add forms (use James K Nelson example)\n//  [  ]  Add an actual audio track that you've produced\n//  [  ]  Combine info and about row into a single component (they're way too similar)\n//  [  ]  Determine the syntax for stateless components\n//  [  ]  Try to make it so information specific to particular components are passed through as props.  You can pass\n//        values to these props that are stored in global constants declared elsewhere or obtained from JSON\n//  [  ]  Determine abstraction for the text involved in the description \n//  [  ]  Incorporate design pattern that filters and maps articles with and without tracks\n//  [  ]  Incorporate state variable (what changes in respone to user input?)\n//  [  ]  Incorporate JSON data\n\n\n(function () {\n\n\tvar NavigationBar = React.createClass({\n\t\tdisplayName: \"NavigationBar\",\n\n\t\t// Note that propTypes is a debugging tool and that the code functions without it\n\t\tpropTypes: {},\n\n\t\trender: function render() {\n\t\t\t// Return statement is wrapped in parentheses to ensure every statement is executed \n\t\t\treturn (\n\n\t\t\t\t//  Note that like the DOM, React uses the className property to assign CSS classes \n\t\t\t\tReact.createElement(\n\t\t\t\t\t\"nav\",\n\t\t\t\t\t{ className: \"navbar navbar-toggleable-md navbar-light bg-faded\" },\n\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\"ul\",\n\t\t\t\t\t\t{ className: \"navList navbar-nav\" },\n\t\t\t\t\t\tReact.createElement(NavItem, { itemName: \"Home\" }),\n\t\t\t\t\t\tReact.createElement(NavItem, { itemName: \"About\" }),\n\t\t\t\t\t\tReact.createElement(NavItem, { itemName: \"Archives\" })\n\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t});\n\n\tvar NavItem = React.createClass({\n\t\tdisplayName: \"NavItem\",\n\n\n\t\tpropTypes: {\n\t\t\titemName: React.PropTypes.string.isRequired\n\t\t},\n\n\t\trender: function render() {\n\n\t\t\treturn React.createElement(\n\t\t\t\t\"li\",\n\t\t\t\t{ className: \"nav-item\" },\n\t\t\t\tReact.createElement(\n\t\t\t\t\t\"a\",\n\t\t\t\t\t{ className: \"nav-link\" },\n\t\t\t\t\t\" \",\n\t\t\t\t\tthis.props.itemName,\n\t\t\t\t\t\" \"\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t});\n\n\tvar Track = React.createClass({\n\t\tdisplayName: \"Track\",\n\n\n\t\tpropTypes: {\n\t\t\ttrackName: React.PropTypes.string.isRequired,\n\t\t\tsource: React.PropTypes.string.isRequired\n\t\t},\n\n\t\trender: function render() {\n\n\t\t\treturn React.createElement(\n\t\t\t\t\"audio\",\n\t\t\t\t{ controls: true, className: \"audioTrack\" },\n\t\t\t\tReact.createElement(\"source\", { src: this.props.source, type: \"audio/mpeg\" }),\n\t\t\t\tthis.props.trackName\n\t\t\t);\n\t\t}\n\t});\n\n\tvar Buttons = React.createClass({\n\t\tdisplayName: \"Buttons\",\n\n\n\t\tpropTypes: {\n\t\t\tclassName: React.PropTypes.string.isRequired\n\t\t},\n\n\t\trender: function render() {\n\n\t\t\treturn React.createElement(\n\t\t\t\t\"a\",\n\t\t\t\tnull,\n\t\t\t\tReact.createElement(\"div\", { className: this.props.className })\n\t\t\t);\n\t\t}\n\t});\n\t//  [  ]  Figure out how to feed JSON data to values in React\n\tvar Article = React.createClass({\n\t\tdisplayName: \"Article\",\n\n\n\t\tpropTypes: {\n\t\t\ttitle: React.PropTypes.string.isRequired,\n\t\t\tcontent: React.PropTypes.string.isRequired,\n\t\t\ttrack: React.PropTypes.object.isRequired\n\t\t},\n\n\t\trender: function render() {\n\n\t\t\treturn React.createElement(\n\t\t\t\t\"div\",\n\t\t\t\t{ className: \"articleEntry\" },\n\t\t\t\tReact.createElement(\n\t\t\t\t\t\"h1\",\n\t\t\t\t\tnull,\n\t\t\t\t\tthis.props.title\n\t\t\t\t),\n\t\t\t\tReact.createElement(\n\t\t\t\t\t\"p\",\n\t\t\t\t\tnull,\n\t\t\t\t\tthis.props.content\n\t\t\t\t),\n\t\t\t\tReact.createElement(Track, { trackName: this.props.track.name, source: this.props.track.source })\n\t\t\t);\n\t\t}\n\t});\n\n\tvar InfoText = React.createClass({\n\t\tdisplayName: \"InfoText\",\n\n\n\t\tpropTypes: {\n\t\t\ttext: React.PropTypes.string.isRequired,\n\t\t\tclassName: React.PropTypes.string.isRequired\n\t\t},\n\n\t\trender: function render() {\n\t\t\treturn React.createElement(\n\t\t\t\t\"p\",\n\t\t\t\t{ className: this.props.className },\n\t\t\t\tthis.props.text\n\t\t\t);\n\t\t}\n\n\t});\n\n\t//  Auto-create row with necessary bootstrap class\n\tvar InfoRow = React.createClass({\n\t\tdisplayName: \"InfoRow\",\n\n\n\t\tpropTypes: {\n\t\t\ttextSource: React.PropTypes.object.isRequired\n\n\t\t},\n\n\t\trender: function render() {\n\n\t\t\treturn React.createElement(\n\t\t\t\t\"div\",\n\t\t\t\t{ className: \"row\" },\n\t\t\t\tReact.createElement(\n\t\t\t\t\t\"div\",\n\t\t\t\t\t{ className: \"col-md-10 col-md-offset-1\" },\n\t\t\t\t\tReact.createElement(InfoText, { text: this.props.textSource.infoText, className: \"infoText\" })\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t});\n\n\tvar ArticleRow = React.createClass({\n\t\tdisplayName: \"ArticleRow\",\n\n\n\t\tpropTypes: { articles: React.PropTypes.array.isRequired },\n\n\t\trender: function render() {\n\n\t\t\tvar formattedArticles = this.props.articles.map(function (post) {\n\t\t\t\treturn React.createElement(Article, { title: post.title, content: post.content, track: post.track, key: post.key });\n\t\t\t});\n\n\t\t\treturn React.createElement(\n\t\t\t\t\"div\",\n\t\t\t\t{ className: \"row\" },\n\t\t\t\tReact.createElement(\n\t\t\t\t\t\"div\",\n\t\t\t\t\t{ className: \"col-md-10 col-md-offset-1\" },\n\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\"ul\",\n\t\t\t\t\t\t{ className: \"articleList\" },\n\t\t\t\t\t\tformattedArticles\n\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t});\n\n\tvar AboutRow = React.createClass({\n\t\tdisplayName: \"AboutRow\",\n\n\n\t\tpropTypes: { textSource: React.PropTypes.object.isRequired },\n\n\t\trender: function render() {\n\n\t\t\treturn React.createElement(\n\t\t\t\t\"div\",\n\t\t\t\t{ className: \"row\" },\n\t\t\t\tReact.createElement(\n\t\t\t\t\t\"div\",\n\t\t\t\t\t{ className: \"col-md-10 col-md-offset-1\" },\n\t\t\t\t\tReact.createElement(InfoText, { text: this.props.textSource.about, className: \"about\" })\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t});\n\n\tvar BlogView = React.createClass({\n\t\tdisplayName: \"BlogView\",\n\n\n\t\tpropTypes: {\n\t\t\tarticles: React.PropTypes.array.isRequired,\n\t\t\ttextSource: React.PropTypes.object.isRequired\n\t\t},\n\n\t\trender: function render() {\n\n\t\t\t//  The main structure of the page is organized below . . . this is the typical React pattern for rendering the top-level view\n\t\t\treturn React.createElement(\n\t\t\t\t\"div\",\n\t\t\t\t{ className: \"BlogView\" },\n\t\t\t\tReact.createElement(NavigationBar, null),\n\t\t\t\tReact.createElement(InfoRow, { textSource: this.props.textSource }),\n\t\t\t\tReact.createElement(ArticleRow, { articles: this.props.articles }),\n\t\t\t\tReact.createElement(AboutRow, { textSource: this.props.textSource })\n\t\t\t);\n\t\t}\n\t});\n\n\t//  [  ]  Incorporate model for form use \n\tvar ContactForm = React.createClass({\n\t\tdisplayName: \"ContactForm\",\n\n\t\tpropTypes: {\n\t\t\tvalue: React.PropTypes.object.isRequired\n\t\t},\n\n\t\trender: function render() {\n\t\t\treturn React.createElement(\n\t\t\t\t\"form\",\n\t\t\t\t{ className: \"ContactForm\" },\n\t\t\t\tReact.createElement(\"input\", { type: \"text\", placeholder: \"Name (required)\", value: this.props.value.name }),\n\t\t\t\tReact.createElement(\"input\", { type: \"text\", placeholder: \"Email\", value: this.props.value.email }),\n\t\t\t\tReact.createElement(\"textarea\", { placeholder: \"Description\", value: this.props.value.description }),\n\t\t\t\tReact.createElement(\n\t\t\t\t\t\"button\",\n\t\t\t\t\t{ type: \"submit\" },\n\t\t\t\t\t\"\\\"Add Contact\\\"\"\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t});\n\n\tvar defaultText = {\n\t\tinfoText: \"The sonic portal is a both a blog and a track-demo website.  Here, you can find \\\n\tmy archived and current tracks, thoughts, and commentary on different trends in EDM.\",\n\t\tabout: \"Design by Joseph Anda\"\n\t};\n\n\tvar sampleContacts = [];\n\n\tvar blogArticles = [{\n\t\tkey: 3,\n\t\ttitle: \"Couriers\",\n\t\tcontent: \"This track is a departure from the normal four-on-the-floor style and a foray into more ambient sounds.\",\n\t\ttrack: {\n\t\t\tname: \"Couriers\",\n\t\t\tsource: \"tracks/couriers.mpg\"\n\t\t}\n\t}, {\n\t\tkey: 1,\n\t\ttitle: \"Rediscovering my passion\",\n\t\tcontent: \"This project is perhaps the most important one I will attempt.  In a seemingly endless search for \\\n\t\tmy passion in development, I have wanted to take on a multi-layered full-stack project that really pushes me to \\\n\t\tmy limits in terms of development and skills.  I know that if I embrace the challenge of trying to code a website \\\n\t\tthat really means something to me from a passion standpoint it will help me make the push I need to the next level \\\n\t\tas a web designer and developer.  Stay tuned for more . . . \",\n\t\ttrack: {\n\t\t\tname: \"Track1\",\n\t\t\tsource: \"tracks/rediscover.mpg\"\n\t\t}\n\t}, {\n\t\tkey: 2,\n\t\ttitle: \"We have found space\",\n\t\tcontent: \"This will be the first time we venture out into open space alone.  We know that having the ability \\\n\t\tto implement our own designs and document our own work is a privilege and shall not take it for granted.  We shall \\\n\t\tthis venture forth . . . \",\n\t\ttrack: {\n\t\t\tname: \"\",\n\t\t\tsource: \"\"\n\t\t}\n\t}];\n\n\t//  [  ]  Read up on assigning the correct keys to arrays and items in iterated lists \n\tvar nav_items = [{\n\t\tkey: 3,\n\t\tname: \"Home\"\n\t}, {\n\t\tkey: 4,\n\t\tname: \"About\"\n\t}, {\n\t\tkey: 5,\n\t\tname: \"Archives\"\n\t}];\n\n\tReactDOM.render(React.createElement(BlogView, { articles: blogArticles, textSource: defaultText }), document.getElementById('app'));\n})();//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvYXBwLmpzeD9iYjQ5Il0sInNvdXJjZXNDb250ZW50IjpbIlxuLy8gIFsgIF0gIEFkZCBmb3JtcyAodXNlIEphbWVzIEsgTmVsc29uIGV4YW1wbGUpXG4vLyAgWyAgXSAgQWRkIGFuIGFjdHVhbCBhdWRpbyB0cmFjayB0aGF0IHlvdSd2ZSBwcm9kdWNlZFxuLy8gIFsgIF0gIENvbWJpbmUgaW5mbyBhbmQgYWJvdXQgcm93IGludG8gYSBzaW5nbGUgY29tcG9uZW50ICh0aGV5J3JlIHdheSB0b28gc2ltaWxhcilcbi8vICBbICBdICBEZXRlcm1pbmUgdGhlIHN5bnRheCBmb3Igc3RhdGVsZXNzIGNvbXBvbmVudHNcbi8vICBbICBdICBUcnkgdG8gbWFrZSBpdCBzbyBpbmZvcm1hdGlvbiBzcGVjaWZpYyB0byBwYXJ0aWN1bGFyIGNvbXBvbmVudHMgYXJlIHBhc3NlZCB0aHJvdWdoIGFzIHByb3BzLiAgWW91IGNhbiBwYXNzXG4vLyAgICAgICAgdmFsdWVzIHRvIHRoZXNlIHByb3BzIHRoYXQgYXJlIHN0b3JlZCBpbiBnbG9iYWwgY29uc3RhbnRzIGRlY2xhcmVkIGVsc2V3aGVyZSBvciBvYnRhaW5lZCBmcm9tIEpTT05cbi8vICBbICBdICBEZXRlcm1pbmUgYWJzdHJhY3Rpb24gZm9yIHRoZSB0ZXh0IGludm9sdmVkIGluIHRoZSBkZXNjcmlwdGlvbiBcbi8vICBbICBdICBJbmNvcnBvcmF0ZSBkZXNpZ24gcGF0dGVybiB0aGF0IGZpbHRlcnMgYW5kIG1hcHMgYXJ0aWNsZXMgd2l0aCBhbmQgd2l0aG91dCB0cmFja3Ncbi8vICBbICBdICBJbmNvcnBvcmF0ZSBzdGF0ZSB2YXJpYWJsZSAod2hhdCBjaGFuZ2VzIGluIHJlc3BvbmUgdG8gdXNlciBpbnB1dD8pXG4vLyAgWyAgXSAgSW5jb3Jwb3JhdGUgSlNPTiBkYXRhXG5cblxuKGZ1bmN0aW9uKCkge1xuXG52YXIgTmF2aWdhdGlvbkJhciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0Ly8gTm90ZSB0aGF0IHByb3BUeXBlcyBpcyBhIGRlYnVnZ2luZyB0b29sIGFuZCB0aGF0IHRoZSBjb2RlIGZ1bmN0aW9ucyB3aXRob3V0IGl0XG5cdHByb3BUeXBlczogeyB9LFxuXG5cdHJlbmRlcjogZnVuY3Rpb24oKSB7XG5cdC8vIFJldHVybiBzdGF0ZW1lbnQgaXMgd3JhcHBlZCBpbiBwYXJlbnRoZXNlcyB0byBlbnN1cmUgZXZlcnkgc3RhdGVtZW50IGlzIGV4ZWN1dGVkIFxuXHRcdHJldHVybiAoXG5cblx0Ly8gIE5vdGUgdGhhdCBsaWtlIHRoZSBET00sIFJlYWN0IHVzZXMgdGhlIGNsYXNzTmFtZSBwcm9wZXJ0eSB0byBhc3NpZ24gQ1NTIGNsYXNzZXMgXG5cdFx0XHQ8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItdG9nZ2xlYWJsZS1tZCBuYXZiYXItbGlnaHQgYmctZmFkZWRcIj5cblx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cIm5hdkxpc3QgbmF2YmFyLW5hdlwiPlxuXHRcdFx0XHRcdDxOYXZJdGVtIGl0ZW1OYW1lPVwiSG9tZVwiIC8+XG5cdFx0XHRcdFx0PE5hdkl0ZW0gaXRlbU5hbWU9XCJBYm91dFwiIC8+XG5cdFx0XHRcdFx0PE5hdkl0ZW0gaXRlbU5hbWU9XCJBcmNoaXZlc1wiIC8+XG5cdFx0XHRcdDwvdWw+XG5cdFx0XHQ8L25hdj5cblx0XHQpXG5cdH1cbn0pO1xuXG52YXIgTmF2SXRlbSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuXHRwcm9wVHlwZXM6IHtcblx0XHRpdGVtTmFtZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG5cdH0sXG5cblx0cmVuZGVyOiBmdW5jdGlvbigpIHtcblxuXHRcdHJldHVybiAoXG5cdFx0XHRcblx0XHRcdDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuXHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPiB7dGhpcy5wcm9wcy5pdGVtTmFtZX0gPC9hPlxuXHRcdFx0PC9saT5cblx0XHRcdFxuXHRcdClcblx0fVxufSk7XG5cbnZhciBUcmFjayA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuXHRwcm9wVHlwZXM6IHtcblx0XHR0cmFja05hbWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0XHRzb3VyY2U6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxuXHR9LFxuXG5cdHJlbmRlcjogZnVuY3Rpb24oKSB7XG5cblx0XHRyZXR1cm4gKFxuXG5cdFx0XHQ8YXVkaW8gY29udHJvbHMgY2xhc3NOYW1lPVwiYXVkaW9UcmFja1wiPlxuXHRcdFx0IFx0PHNvdXJjZSBzcmM9e3RoaXMucHJvcHMuc291cmNlfSB0eXBlPVwiYXVkaW8vbXBlZ1wiPlxuXHRcdFx0XHRcdFxuXHRcdFx0XHQ8L3NvdXJjZT5cblx0XHRcdFx0e3RoaXMucHJvcHMudHJhY2tOYW1lfVxuXHRcdFx0PC9hdWRpbz5cblx0XHQpXG5cdH1cbn0pO1xuXG52YXIgQnV0dG9ucyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuXHRwcm9wVHlwZXM6IHtcblx0XHRjbGFzc05hbWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxuXHR9LFxuXG5cdHJlbmRlcjogZnVuY3Rpb24oKSB7XG5cblx0XHRyZXR1cm4gKFxuXG5cdFx0XHQ8YT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2E+XG5cdFx0KVxuXHR9XG59KVxuLy8gIFsgIF0gIEZpZ3VyZSBvdXQgaG93IHRvIGZlZWQgSlNPTiBkYXRhIHRvIHZhbHVlcyBpbiBSZWFjdFxudmFyIEFydGljbGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cblx0cHJvcFR5cGVzOiB7XG5cdFx0dGl0bGU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0XHRjb250ZW50OiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdFx0dHJhY2s6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxuXHR9LFxuXG5cdHJlbmRlcjogZnVuY3Rpb24oKSB7XG5cblx0XHRyZXR1cm4gKFxuXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nYXJ0aWNsZUVudHJ5Jz5cblx0XHRcdFx0PGgxPnt0aGlzLnByb3BzLnRpdGxlfTwvaDE+XG5cdFx0XHRcdDxwPnt0aGlzLnByb3BzLmNvbnRlbnR9PC9wPlxuXHRcdFx0XHRcdDxUcmFjayB0cmFja05hbWU9e3RoaXMucHJvcHMudHJhY2submFtZX0gc291cmNlPXt0aGlzLnByb3BzLnRyYWNrLnNvdXJjZX0gLz5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufSk7XG5cblxudmFyIEluZm9UZXh0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG5cdHByb3BUeXBlczoge1xuXHRcdHRleHQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0XHRjbGFzc05hbWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0fSxcblxuXHRyZW5kZXI6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8cCBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfT5cblx0XHRcdFx0e3RoaXMucHJvcHMudGV4dH1cblx0XHRcdDwvcD5cblx0XHQpXG5cdH1cblx0XG59KTtcblxuLy8gIEF1dG8tY3JlYXRlIHJvdyB3aXRoIG5lY2Vzc2FyeSBib290c3RyYXAgY2xhc3NcbnZhciBJbmZvUm93ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG5cdHByb3BUeXBlczoge1xuXHRcdHRleHRTb3VyY2U6ICBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcblxuXHR9LFxuXG5cdHJlbmRlcjogZnVuY3Rpb24oKSB7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTAgY29sLW1kLW9mZnNldC0xXCI+XG5cdFx0XHRcdFx0PEluZm9UZXh0IHRleHQ9e3RoaXMucHJvcHMudGV4dFNvdXJjZS5pbmZvVGV4dH0gY2xhc3NOYW1lPVwiaW5mb1RleHRcIiAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0XG5cdFx0KVxuXHR9XG59KTtcblxudmFyIEFydGljbGVSb3cgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cblx0cHJvcFR5cGVzOiB7IGFydGljbGVzOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCB9LFxuXG5cdHJlbmRlcjogZnVuY3Rpb24oKSB7XG5cblx0XHR2YXIgZm9ybWF0dGVkQXJ0aWNsZXMgPSB0aGlzLnByb3BzLmFydGljbGVzLm1hcCggZnVuY3Rpb24ocG9zdCkge1xuXHRcdFx0cmV0dXJuIDxBcnRpY2xlIHRpdGxlPXtwb3N0LnRpdGxlfSBjb250ZW50PXtwb3N0LmNvbnRlbnR9IHRyYWNrPXtwb3N0LnRyYWNrfSBrZXk9e3Bvc3Qua2V5fT48L0FydGljbGU+O1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIChcblxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTAgY29sLW1kLW9mZnNldC0xXCI+XG5cdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cImFydGljbGVMaXN0XCI+XG5cdFx0XHRcdFx0XHR7Zm9ybWF0dGVkQXJ0aWNsZXN9XG5cdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn0pO1xuXG52YXIgQWJvdXRSb3cgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cblx0cHJvcFR5cGVzOiB7IHRleHRTb3VyY2U6ICBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQgfSxcblxuXHRyZW5kZXI6IGZ1bmN0aW9uKCkge1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEwIGNvbC1tZC1vZmZzZXQtMVwiPlxuXHRcdFx0XHRcdDxJbmZvVGV4dCB0ZXh0PXt0aGlzLnByb3BzLnRleHRTb3VyY2UuYWJvdXR9IGNsYXNzTmFtZT1cImFib3V0XCIgLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn0pO1xuXG52YXIgQmxvZ1ZpZXcgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cblx0cHJvcFR5cGVzOiB7XG5cdFx0YXJ0aWNsZXM6IFJlYWN0LlByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuXHRcdHRleHRTb3VyY2U6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxuXHR9LFxuXG5cdHJlbmRlcjogZnVuY3Rpb24oKSB7XG5cblx0XHQvLyAgVGhlIG1haW4gc3RydWN0dXJlIG9mIHRoZSBwYWdlIGlzIG9yZ2FuaXplZCBiZWxvdyAuIC4gLiB0aGlzIGlzIHRoZSB0eXBpY2FsIFJlYWN0IHBhdHRlcm4gZm9yIHJlbmRlcmluZyB0aGUgdG9wLWxldmVsIHZpZXdcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJCbG9nVmlld1wiPlxuXHRcdFx0XHQ8TmF2aWdhdGlvbkJhciAvPlxuXHRcdFx0XHQ8SW5mb1JvdyB0ZXh0U291cmNlPXt0aGlzLnByb3BzLnRleHRTb3VyY2V9IC8+XG5cdFx0XHRcdDxBcnRpY2xlUm93IGFydGljbGVzPXt0aGlzLnByb3BzLmFydGljbGVzfSAvPlxuXHRcdFx0XHQ8QWJvdXRSb3cgdGV4dFNvdXJjZT17dGhpcy5wcm9wcy50ZXh0U291cmNlfSAvPlxuXHRcdFx0PC9kaXY+XG5cblx0XHQpXG5cdH1cbn0pO1xuXG4vLyAgWyAgXSAgSW5jb3Jwb3JhdGUgbW9kZWwgZm9yIGZvcm0gdXNlIFxudmFyIENvbnRhY3RGb3JtID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBwcm9wVHlwZXM6IHtcbiAgICB2YWx1ZTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gKFxuICAgIFx0PGZvcm0gY2xhc3NOYW1lPVwiQ29udGFjdEZvcm1cIj5cbiAgICBcdFx0PGlucHV0IHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPSdOYW1lIChyZXF1aXJlZCknIHZhbHVlID0ge3RoaXMucHJvcHMudmFsdWUubmFtZX0gLz5cbiAgICBcdFx0PGlucHV0IHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPSdFbWFpbCcgdmFsdWUgPSB7dGhpcy5wcm9wcy52YWx1ZS5lbWFpbH0gLz5cbiAgICBcdFx0PHRleHRhcmVhIHBsYWNlaG9sZGVyPSdEZXNjcmlwdGlvbicgdmFsdWUgPSB7dGhpcy5wcm9wcy52YWx1ZS5kZXNjcmlwdGlvbn0gLz5cbiAgICBcdFx0PGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+XCJBZGQgQ29udGFjdFwiPC9idXR0b24+XG4gICAgXHQ8L2Zvcm0+ICBcbiAgICApXG4gIH0sXG59KTtcblxudmFyIGRlZmF1bHRUZXh0ID0ge1xuXHRpbmZvVGV4dDogXCJUaGUgc29uaWMgcG9ydGFsIGlzIGEgYm90aCBhIGJsb2cgYW5kIGEgdHJhY2stZGVtbyB3ZWJzaXRlLiAgSGVyZSwgeW91IGNhbiBmaW5kIFxcXG5cdG15IGFyY2hpdmVkIGFuZCBjdXJyZW50IHRyYWNrcywgdGhvdWdodHMsIGFuZCBjb21tZW50YXJ5IG9uIGRpZmZlcmVudCB0cmVuZHMgaW4gRURNLlwiLFxuXHRhYm91dDogIFwiRGVzaWduIGJ5IEpvc2VwaCBBbmRhXCJcbn07XG5cbnZhciBzYW1wbGVDb250YWN0cyA9IFtcbl07XG5cbnZhciBibG9nQXJ0aWNsZXMgPSBbXG5cdHtcblx0XHRrZXk6IDMsXG5cdFx0dGl0bGU6IFwiQ291cmllcnNcIiwgXG5cdFx0Y29udGVudDogIFwiVGhpcyB0cmFjayBpcyBhIGRlcGFydHVyZSBmcm9tIHRoZSBub3JtYWwgZm91ci1vbi10aGUtZmxvb3Igc3R5bGUgYW5kIGEgZm9yYXkgaW50byBtb3JlIGFtYmllbnQgc291bmRzLlwiLFxuXHRcdHRyYWNrOiB7XG5cdFx0XHRuYW1lOiBcIkNvdXJpZXJzXCIsXG5cdFx0XHRzb3VyY2U6IFwidHJhY2tzL2NvdXJpZXJzLm1wZ1wiXG5cdFx0fVxuXHR9LFxuXHR7XG5cdFx0a2V5OiAxLFxuXHRcdHRpdGxlOiBcIlJlZGlzY292ZXJpbmcgbXkgcGFzc2lvblwiLCBcblx0XHRjb250ZW50OiAgXCJUaGlzIHByb2plY3QgaXMgcGVyaGFwcyB0aGUgbW9zdCBpbXBvcnRhbnQgb25lIEkgd2lsbCBhdHRlbXB0LiAgSW4gYSBzZWVtaW5nbHkgZW5kbGVzcyBzZWFyY2ggZm9yIFxcXG5cdFx0bXkgcGFzc2lvbiBpbiBkZXZlbG9wbWVudCwgSSBoYXZlIHdhbnRlZCB0byB0YWtlIG9uIGEgbXVsdGktbGF5ZXJlZCBmdWxsLXN0YWNrIHByb2plY3QgdGhhdCByZWFsbHkgcHVzaGVzIG1lIHRvIFxcXG5cdFx0bXkgbGltaXRzIGluIHRlcm1zIG9mIGRldmVsb3BtZW50IGFuZCBza2lsbHMuICBJIGtub3cgdGhhdCBpZiBJIGVtYnJhY2UgdGhlIGNoYWxsZW5nZSBvZiB0cnlpbmcgdG8gY29kZSBhIHdlYnNpdGUgXFxcblx0XHR0aGF0IHJlYWxseSBtZWFucyBzb21ldGhpbmcgdG8gbWUgZnJvbSBhIHBhc3Npb24gc3RhbmRwb2ludCBpdCB3aWxsIGhlbHAgbWUgbWFrZSB0aGUgcHVzaCBJIG5lZWQgdG8gdGhlIG5leHQgbGV2ZWwgXFxcblx0XHRhcyBhIHdlYiBkZXNpZ25lciBhbmQgZGV2ZWxvcGVyLiAgU3RheSB0dW5lZCBmb3IgbW9yZSAuIC4gLiBcIixcblx0XHR0cmFjazoge1xuXHRcdFx0bmFtZTogXCJUcmFjazFcIixcblx0XHRcdHNvdXJjZTogXCJ0cmFja3MvcmVkaXNjb3Zlci5tcGdcIlxuXHRcdH1cblx0fSxcblx0e1xuXHRcdGtleTogMixcblx0XHR0aXRsZTogXCJXZSBoYXZlIGZvdW5kIHNwYWNlXCIsIFxuXHRcdGNvbnRlbnQ6ICBcIlRoaXMgd2lsbCBiZSB0aGUgZmlyc3QgdGltZSB3ZSB2ZW50dXJlIG91dCBpbnRvIG9wZW4gc3BhY2UgYWxvbmUuICBXZSBrbm93IHRoYXQgaGF2aW5nIHRoZSBhYmlsaXR5IFxcXG5cdFx0dG8gaW1wbGVtZW50IG91ciBvd24gZGVzaWducyBhbmQgZG9jdW1lbnQgb3VyIG93biB3b3JrIGlzIGEgcHJpdmlsZWdlIGFuZCBzaGFsbCBub3QgdGFrZSBpdCBmb3IgZ3JhbnRlZC4gIFdlIHNoYWxsIFxcXG5cdFx0dGhpcyB2ZW50dXJlIGZvcnRoIC4gLiAuIFwiLFxuXHRcdHRyYWNrOiB7XG5cdFx0XHRuYW1lOiBcIlwiLFxuXHRcdFx0c291cmNlOiBcIlwiXG5cdFx0fVxuXHR9XG5cbl07XG5cbi8vICBbICBdICBSZWFkIHVwIG9uIGFzc2lnbmluZyB0aGUgY29ycmVjdCBrZXlzIHRvIGFycmF5cyBhbmQgaXRlbXMgaW4gaXRlcmF0ZWQgbGlzdHMgXG52YXIgbmF2X2l0ZW1zID0gW1xuXHR7XG5cdFx0a2V5OiAzLFxuXHRcdG5hbWU6IFwiSG9tZVwiXG5cdH0sXG5cdHtcblx0XHRrZXk6IDQsXG5cdFx0bmFtZTogXCJBYm91dFwiXG5cdH0sXG5cdHtcblx0XHRrZXk6IDUsXG5cdFx0bmFtZTogXCJBcmNoaXZlc1wiXG5cdH1cbl07XG5cblJlYWN0RE9NLnJlbmRlcihcblx0PEJsb2dWaWV3IGFydGljbGVzPXtibG9nQXJ0aWNsZXN9IHRleHRTb3VyY2U9e2RlZmF1bHRUZXh0fSAvPixcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpXG4pO1xuXG59KSAoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcHAvYXBwLmpzeCJdLCJtYXBwaW5ncyI6Ijs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFIQTtBQVdBO0FBakJBO0FBQ0E7QUFtQkE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBS0E7QUFmQTtBQUNBO0FBaUJBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUdBO0FBSkE7QUFPQTtBQWxCQTtBQUNBO0FBb0JBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUtBO0FBZkE7QUFpQkE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSEE7QUFNQTtBQWxCQTtBQUNBO0FBcUJBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFkQTtBQUNBO0FBZ0JBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQU9BO0FBakJBO0FBQ0E7QUFtQkE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBREE7QUFRQTtBQXBCQTtBQUNBO0FBc0JBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFNQTtBQWJBO0FBQ0E7QUFlQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBUUE7QUFuQkE7QUFDQTtBQXFCQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFPQTtBQWRBO0FBQ0E7QUFnQkE7QUFDQTtBQURBO0FBR0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFKQTtBQVVBO0FBQ0E7QUFDQTs7OztBQUhBO0FBUUE7QUFDQTtBQUNBO0FBRkE7QUFSQTtBQWNBO0FBQ0E7QUFDQTs7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUZBO0FBTkE7QUFDQTtBQWFBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFDQTtBQUtBO0FBS0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })
/******/ ]);
//  [  ]  Incorporate state variable
//  [  ]  Incorporate JSON data

(function() {

var NavigationBar = React.createClass({
	// Note that propTypes is a debugging tool and that the code functions without it
	propTypes: {

	},

	render: function() {
	// Return statement is wrapped in parentheses to ensure every statement is executed 
		return (

	//  Note that like the DOM, React uses the className property to assign CSS classes 
			React.createElement('ul', {className: 'navList'}, 
				React.createElement('li', {}, "Home"),
				React.createElement('li', {}, "About")
			
			)
		)
	}
});

//  Figure out how to feed JSON data to values in React
var Article = React.createClass({

	propTypes: {
		title: React.PropTypes.string.isRequired,
		content: React.PropTypes.string.isRequired,
	},

	render: function() {

		return (

			React.createElement('div', {className: 'articleEntry'},
				React.createElement('h1', {}, this.props.title),
				React.createElement('p', {}, this.props.content)
			)
			
		)
	}
});

var BlogView = React.createClass({
	propTypes: {
		articles: React.PropTypes.array.isRequired,
	},

	render: function() {

		var formattedArticles = this.props.articles.map( function(post) {
			return React.createElement(Article, post);
		})

		return (
			React.createElement('div', {className: "BlogView"},
				React.createElement(NavigationBar, {}),
				React.createElement('ul', {className: "articleList"}, formattedArticles)
			)
		)
	}
});

var blogArticles = [
	{
		key: 1,
		title: "The first title", 
		content:  "This is the first ever article "
	},
	{
		key: 2,
		title: "The second title", 
		content:  "This article renders just like the first"
	}

];

ReactDOM.render(
	React.createElement(BlogView, {
		articles: blogArticles
	}),
	document.getElementById('react')
);

}) ();
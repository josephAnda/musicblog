//  [!!]  Write and render components for the remaining page elements
//  [  ]  Determine the syntax for stateless components
//  [!!]  Create the bootstrap column structure for the webpage
//  [  ]  Apply Bootstrap classes to clean up presentation
//  [  ]  Determine abstraction for the text involved in the description 
//  [!!]  Make track information a property of the article
//  [  ]  Incorporate design pattern that filters and maps articles with and without tracks
//  [  ]  Use JSX to clean up the code 
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
				React.createElement('li', {}, "About"),
				React.createElement('li', {}, "Archives")
			
			)
		)
	}
});

var NavItem = React.createClass({

	render: function() {

		return (
			React.createElement('li', {})
		)
	}
});

var Track = React.createClass({

	propTypes: {
		trackName: React.PropTypes.string.isRequired,
		source: React.PropTypes.string.isRequired
	},

	render: function() {

		return (

			React.createElement('audio', {
				className: 'audioTrack',
				src: this.props.source
				}, this.props.trackName
			)

		)
	}
});

var Buttons = React.createClass({
	propTypes: {
		className: React.PropTypes.string.isRequired
	},

	render: function() {

		return (

			React.createElement('a', {}, 
				React.createElement('div', {className: this.props.className}))

		)
	}
})
//  Figure out how to feed JSON data to values in React
var Article = React.createClass({

	propTypes: {
		title: React.PropTypes.string.isRequired,
		content: React.PropTypes.string.isRequired,
		track: React.PropTypes.object.isRequired
	},

	render: function() {

		return (

			React.createElement('div', {className: 'articleEntry'},
				React.createElement('h1', {}, this.props.title),
				React.createElement('p', {}, this.props.content),
				React.createElement(Track, {
					trackName: this.props.track.name,
					source: this.props.track.source
				})
			)
		)
	}
});

//  [!!]  create InfoText element within BlogView

var InfoText = React.createClass({

	propTypes: {
		text: React.PropTypes.string.isRequired,
		className: React.PropTypes.string.isRequired,
	},

	render: function() {
		return React.createElement('p', {className: this.props.className}, this.props.text)
	}
	
});

//  Auto-create row with necessary bootstrap class
var InfoRow = React.createClass({

	propTypes: {
		textSource:  React.PropTypes.object.isRequired

	},

	render: function() {

		return (
			React.createElement('div', {className: "row"}, 
				React.createElement('div', {className: "col-md-12"}, 
					React.createElement(InfoText, {
						text:  this.props.textSource.infoText,
						className: "infoText"
					})
				)
			)
		)
	}
});

var ArticleRow = React.createClass({

	propTypes: {

	},

	render: function() {

		return (

		)
	}
});

var BlogView = React.createClass({
	propTypes: {
		articles: React.PropTypes.array.isRequired,
		textSource: React.PropTypes.object.isRequired
	},

	render: function() {

		var formattedArticles = this.props.articles.map( function(post) {
			return React.createElement(Article, post);
		});
		//  The main structure of the page is organized below . . . this is the typical React pattern for rendering the top-level view
		return (
			React.createElement('div', {className: "BlogView"},
				React.createElement(NavigationBar, {}),
				React.createElement(InfoRow, {textSource:  this.props.textSource}), 
				React.createElement('div', {className: 'row'}, 
					React.createElement('div', {className: "col-md-12"},
						React.createElement('ul', {className: "articleList"}, formattedArticles)
					)
				),
				React.createElement('div', {className: "row"},
					React.createElement('div', {className: "col-md-12"},
					React.createElement(InfoText, {
						text: this.props.textSource.about,
						className: "about"
					}))
				)
			)
		)
	}
});

var defaultText = {
	infoText: "The sonic portal is a both a blog and a track-demo website.  Here, you can find \
	my archived and current tracks, thoughts, and commentary on different trends in EDM.",
	about:  "Design by Joseph Anda"
};

var blogArticles = [
	{
		key: 1,
		title: "Rediscovering my passion", 
		content:  "This project is perhaps the most important one I will attempt.  In a seemingly endless search for \
		my passion in development, I have wanted to take on a multi-layered full-stack project that really pushes me to \
		my limits in terms of development and skills.  I know that if I embrace the challenge of trying to code a website \
		that really means something to me from a passion standpoint it will help me make the push I need to the next level \
		as a web designer and developer.  Stay tuned for more . . . ",
		track: {
			name: "",
			source: ""
		}
	},
	{
		key: 2,
		title: "We have found space", 
		content:  "This will be the first time we venture out into open space alone.  We know that having the ability \
		to implement our own designs and document our own work is a privilege and shall not take it for granted.  We shall \
		this venture forth . . . ",
		track: {
			name: "",
			source: ""
		}
	}

];

//  [  ]  Read up on assigning the correct keys to arrays and items in iterated lists 
var nav_items = [
	{
		key: 1,
		name: "Home"
	},
	{
		key: 2,
		name: "About"
	},
	{
		key: 3,
		name: "Archives"
	}
];

ReactDOM.render(
	React.createElement(BlogView, {
		articles: blogArticles,
		textSource: defaultText
	}),
	document.getElementById('react')
);

}) ();
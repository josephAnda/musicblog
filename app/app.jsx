
//  [  ]  Add forms (use James K Nelson example)
//  [  ]  Add an actual audio track that you've produced
//  [  ]  Combine info and about row into a single component (they're way too similar)
//  [  ]  Determine the syntax for stateless components
//  [  ]  Try to make it so information specific to particular components are passed through as props.  You can pass
//        values to these props that are stored in global constants declared elsewhere or obtained from JSON
//  [  ]  Determine abstraction for the text involved in the description 
//  [  ]  Incorporate design pattern that filters and maps articles with and without tracks
//  [  ]  Incorporate state variable (what changes in respone to user input?)
//  [  ]  Incorporate JSON data


(function() {


//  UI components (that the user updates) should store their data in refs/props that are passed up to
//  container components that can alter their internal state based on this information.  This is (again) the classic
//  data handling design pattern for ReactJS

//  Import React when its accessed via webpack as opposed to being
//  made available globally via a script tag.  Require is via npm

var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var NavigationBar = React.createClass({
	// Note that propTypes is a debugging tool and that the code functions without it
	propTypes: { },

	render: function() {
	// Return statement is wrapped in parentheses to ensure every statement is executed 
		return (

	//  Note that like the DOM, React uses the className property to assign CSS classes 
			<nav className="navbar navbar-toggleable-md navbar-light bg-faded">
				<ul className="navList navbar-nav">
					<NavItem itemName="Home" />
					<NavItem itemName="About" />
					<NavItem itemName="Archives" />
				</ul>
			</nav>
		)
	}
});

var NavItem = React.createClass({

	propTypes: {
		itemName: React.PropTypes.string.isRequired
	},

	render: function() {

		return (
			
			<li className="nav-item">
				<a className="nav-link"> {this.props.itemName} </a>
			</li>
			
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

			<audio controls className="audioTrack">
			 	<source src={this.props.source} type="audio/mpeg">
					
				</source>
				{this.props.trackName}
			</audio>
		)
	}
});

var Buttons = React.createClass({

	propTypes: {
		className: React.PropTypes.string.isRequired
	},

	render: function() {

		return (

			<a>
				<div className={this.props.className}>
				</div>
			</a>
		)
	}
})
//  [  ]  Figure out how to feed JSON data to values in React
var Article = React.createClass({

	propTypes: {
		title: React.PropTypes.string.isRequired,
		content: React.PropTypes.string.isRequired,
		track: React.PropTypes.object.isRequired
	},

	render: function() {

		return (

			<div className='articleEntry'>
				<h1>{this.props.title}</h1>
				<p>{this.props.content}</p>
					<Track trackName={this.props.track.name} source={this.props.track.source} />
			</div>
		)
	}
});


var InfoText = React.createClass({

	propTypes: {
		text: React.PropTypes.string.isRequired,
		className: React.PropTypes.string.isRequired,
	},

	render: function() {
		return (
			<p className={this.props.className}>
				{this.props.text}
			</p>
		)
	}
	
});

//  Auto-create row with necessary bootstrap class
var InfoRow = React.createClass({

	propTypes: {
		textSource:  React.PropTypes.object.isRequired

	},

	render: function() {

		return (
			<div className="row">
				<div className="col-md-10 col-md-offset-1">
					<InfoText text={this.props.textSource.infoText} className="infoText" />
				</div>
			</div>
			
		)
	}
});

var ArticleRow = React.createClass({

	propTypes: { articles: React.PropTypes.array.isRequired },

	render: function() {

		var formattedArticles = this.props.articles.map( function(post) {
			return <Article title={post.title} content={post.content} track={post.track} key={post.key}></Article>;
		});

		return (

			<div className="row">
				<div className="col-md-10 col-md-offset-1">
					<ul className="articleList">
						{formattedArticles}
					</ul>
				</div>
			</div>
		)
	}
});

var AboutRow = React.createClass({

	propTypes: { textSource:  React.PropTypes.object.isRequired },

	render: function() {

		return (
			<div className="row">
				<div className="col-md-10 col-md-offset-1">
					<InfoText text={this.props.textSource.about} className="about" />
				</div>
			</div>
		)
	}
});

var BlogView = React.createClass({

	propTypes: {
		articles: React.PropTypes.array.isRequired,
		textSource: React.PropTypes.object.isRequired
	},

	render: function() {

		//  The main structure of the page is organized below . . . this is the typical React pattern for rendering the top-level view
		return (
			<div className="BlogView">
				<NavigationBar />
				<InfoRow textSource={this.props.textSource} />
				<ArticleRow articles={this.props.articles} />
				<AboutRow textSource={this.props.textSource} />
			</div>

		)
	}
});

//  [  ]  Incorporate model for form use 
var ContactForm = React.createClass({
  propTypes: {
    value: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
    	<form className="ContactForm">
    		<input type='text' placeholder='Name (required)' value = {this.props.value.name} />
    		<input type='text' placeholder='Email' value = {this.props.value.email} />
    		<textarea placeholder='Description' value = {this.props.value.description} />
    		<button type="submit">"Add Contact"</button>
    	</form>  
    )
  },
});

var defaultText = {
	infoText: "The sonic portal is a both a blog and a track-demo website.  Here, you can find \
	my archived and current tracks, thoughts, and commentary on different trends in EDM.",
	about:  "Design by Joseph Anda"
};

var sampleContacts = [
];

var blogArticles = [
	{
		key: 3,
		title: "Couriers", 
		content:  "This track is a departure from the normal four-on-the-floor style and a foray into more ambient sounds.",
		track: {
			name: "Couriers",
			source: "tracks/couriers.mpg"
		}
	},
	{
		key: 1,
		title: "Rediscovering my passion", 
		content:  "This project is perhaps the most important one I will attempt.  In a seemingly endless search for \
		my passion in development, I have wanted to take on a multi-layered full-stack project that really pushes me to \
		my limits in terms of development and skills.  I know that if I embrace the challenge of trying to code a website \
		that really means something to me from a passion standpoint it will help me make the push I need to the next level \
		as a web designer and developer.  Stay tuned for more . . . ",
		track: {
			name: "Track1",
			source: "tracks/rediscover.mpg"
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
		key: 3,
		name: "Home"
	},
	{
		key: 4,
		name: "About"
	},
	{
		key: 5,
		name: "Archives"
	}
];

ReactDOM.render(
	<BlogView articles={blogArticles} textSource={defaultText} />,
	document.getElementById('app')
);

/*
ReactDOM.render(
	<Router history={hashHistory}>
		<Route path=
);
*/
}) ();

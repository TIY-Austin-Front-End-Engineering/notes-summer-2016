import React from 'react';
import ReactDOM from 'react-dom';
import BlogPage from './components/blogPage';
import Login from './components/login';
import { Router, Route, hashHistory } from 'react-router';

// const Header = React.createClass({
// 	render: function() {
// 		return (
// 			<header id="page-header" className="page-header">
// 				<h1>{this.props.title}</h1>
// 				<a href="http://google.com">Go to google</a>
// 			</header>
// 		)
// 	}
// });
//
// const PostPreview = React.createClass({
// 	render: function() {
// 		return (
// 			<li	className="post-preview" >
// 				<h3>{this.props.blog.title}</h3>
// 				<time>{this.props.blog.date}</time>
// 			</li>
// 		)
// 	}
// });
//
// const PostPreviewList = React.createClass({
// 	render: function() {
// 		return (
// 			<ul>
// 				<PostPreview
// 					blog={{title: 'some catchy name', date: 'yesterday'}} />
// 				<PostPreview
// 					blog={{title: 'click bait', date: 'today'}} />
// 				<PostPreview
// 					blog={{title: 'unicorns are real', date: 'a few minutes ago'}} />
// 			</ul>
// 		)
// 	}
// });

// const BlogArticle = React.createClass({
// 	render: function() {
// 		return (
// 			<article>
// 				<h2>Blog Title</h2>
// 				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
// 			</article>
// 		)
// 	}
// })

// const BlogPage = React.createClass({
// 	render: function() {
// 		return (
// 			<div>
// 				<Header title="The Super Cool Blog"/>
// 				<PostPreviewList />
// 				<BlogArticle />
// 			</div>
// 		)
// 	}
// })

// ReactDOM.render(<Header title="The Super Cool Blog"/>, document.getElementById('header'));
//
// ReactDOM.render(<PostPreviewList />, document.getElementById('sidebar'));
//
// ReactDOM.render(<BlogArticle />, document.getElementById('main-content'))

const BlogRouter = (
	<Router history={hashHistory}>
		<Route path="/" component={BlogPage}/>
		<Route path="/login" component={Login}/>
	</Router>
)


ReactDOM.render(BlogRouter, document.getElementById('container'))

// ReactDOM.render(<Login />, document.getElementById('login'))






//

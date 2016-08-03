import {IndexRoute, Router, Route, hashHistory, Link} from 'react-router';
import ReactDOM from 'react-dom';
import React from 'react';

import PageWithModal from './components/pages/PageWithModal';
import LikeButton from './components/LikeWithButton';
import LikeInput from './components/LikeWithInput';
import Unicorn from './components/Unicorn';
import UnicornWithStore from './components/UnicornWithStore';

const App = React.createClass({
  render: function() {
    console.log(this.props);
    return (
      <div>
        <nav>
          <Link to="/modal">Modal</Link>
          <Link to="/likeButton">Like Button</Link>
          <Link to="/likeInput">Like Input</Link>
          <Link to="/unicorn">Unicorn with Callback props</Link>
          <Link to="/unicornStore">Unicorn with store</Link>
          <Link to="/blogPosts">Blog</Link>
          <Link to="/listOButtons">Buttons</Link>
        </nav>
        {this.props.children}
      </div>
    )
  }
})

const PostList = React.createClass({
  render: function() {
    return (
      <div>
        <ul>
          <Link to="/blogPosts/1">blog</Link>
          <Link to="/blogPosts/1">blog</Link>
          <Link to="/blogPosts/1">blog</Link>
          <Link to="/blogPosts/1">blog</Link>
        </ul>
        {this.props.children}
      </div>
    )
  }
})

const SinglePost = React.createClass({
  render: function() {
    return (
      <div>This is a blog post</div>
    )
  }
})

const WelcomeMessage = React.createClass({
  render: function() {
    return (
      <div>This is a welcome message</div>
    )
  }
})

const SingleButton = React.createClass({
  handleClick: function() {
    console.log(this.props.buttonValue);
  },
  render: function() {
    return (
      <input type="button" value="click me!" onClick={this.handleClick}/>
    )
  }
})

const Buttons = React.createClass({
  render: function() {
    const buttons = [0,1,2,3,4].map((num, i) => {
      return <SingleButton key={i} buttonValue={num}/>
    })
    return (
      <form>
        {buttons}
      </form>
    )
  }
});

const router = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="modal" component={PageWithModal}/>
      <Route path="likeButton" component={LikeButton}/>
      <Route path="likeInput" component={LikeInput}/>
      <Route path="unicorn" component={Unicorn}/>
      <Route path="unicornStore" component={UnicornWithStore}/>
      <Route path="blogPosts" component={PostList}>
        <IndexRoute component={WelcomeMessage}/>
        <Route path=":postId" component={SinglePost}/>
      </Route>
      <Route path="listOButtons" component={Buttons}/>
    </Route>
  </Router>
)

ReactDOM.render(router, document.getElementById('container'));

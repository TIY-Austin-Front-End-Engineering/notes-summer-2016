import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, hashHistory} from 'react-router';
import Color from './components/Color';
import Nav from './components/Nav';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';

let session = {authToken: true};

const App = React.createClass({
  render: function() {
    let specialLink;
    if (session.authToken) {
      specialLink = <li><Link to="/colors/440382">Special Color</Link></li>
    }
    return (
      <div>
        <Nav>
          {specialLink}
        </Nav>
        {this.props.children}
      </div>
    );
  }
});

const router = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/colors/:hexCode" component={Color} />
      <Route path="/posts" component={BlogList}>
        <Route path=":postId" component={BlogPost} />
      </Route>
    </Route>
  </Router>
)

ReactDOM.render(router, document.querySelector('.container'));

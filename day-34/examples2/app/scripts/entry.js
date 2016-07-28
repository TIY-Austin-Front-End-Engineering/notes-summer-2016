import React from 'react';
import ReactDOM from 'react-dom';
import {Router, hashHistory, Route} from 'react-router';
import Feed from './components/pages/Feed';

let router = (
  <Router history={hashHistory}>
    <Route path="/" component={Feed}/>
  </Router>
)

ReactDOM.render(router, document.getElementById('app'))

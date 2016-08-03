import React from 'react';
import store from '../store';

export default React.createClass({
  getInitialState: function() {
    return store.session.toJSON();
  },
  updateSession: function() {
    this.setState(store.session.toJSON())
  },
  componentDidMount: function() {
    store.session.on('change', this.updateSession);
  },
  componentWillUnmount: function() {
    store.session.off('change', this.updateSession);
  },
  render: function() {
    try {
      if (!this.state.username) {
        throw new Error('Nav component state must always have a username');
      }
    } catch(error) {
      console.error(error);
    }
    let navLink = <a href="/login">Login</a>
    if (this.state.authToken) {
      // using an anchor tag instead of a Link component only bc this app doens't have react router yet
      navLink = <a href="/logout">Logout</a>
    }
    return (
      <nav>
        Hi {this.state.username}! Welcome to the app!
        {navLink}
      </nav>
    )
  }
});

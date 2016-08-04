import React from 'react';
import { hashHistory } from 'react-router';
import store from '../store';

export default React.createClass({
  getInitialState: function() {
    return {};
  },
  updateState: function() {
    this.setState(store.session.toJSON());
  },
  componentDidMount: function() {
    store.session.on('change', this.updateState);
  },
  componentWillUnmount: function() {
    store.session.off('change', this.updateState);
  },
  submitHandler: function(e) {
    e.preventDefault();
    var data = Object.keys(this.refs).reduce((returnSoFar, curr, i, arr) => {
      returnSoFar[curr] = this.refs[curr].value;
      return returnSoFar;
    }, {})
    // the above reduce creates this:
    // var data = {
    //   username: this.refs.username.value,
    //   password: this.refs.password.value
    // }
    store.session.login(data)
    .then(function(response) {
      console.log(response);
    });
  },
  shouldComponentUpdate: function(nextProps, nextState) {
    if (nextState.authtoken) {
      hashHistory.push('/welcome');
      return false;
    } else {
      return true;
    }
  },
  render: function() {
    return (
      <form onSubmit={this.submitHandler}>
        <input ref="username" type="text" placeholder="username" />
        <input ref="password" type="password" placeholder="password" />
        <input type="submit" value="submit" />
      </form>
    )
  }
})

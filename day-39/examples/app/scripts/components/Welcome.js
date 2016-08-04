import React from 'react';
import store from '../store';

export default React.createClass({
  componentDidMount: function() {
    store.session.getLocation()
    .then((position) => {
      console.log(position);
    })
  },
  render: function() {
    return (
      <div>
        Welcome! Your current location:
      </div>
    )
  }
})

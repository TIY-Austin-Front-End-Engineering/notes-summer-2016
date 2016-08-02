import React from 'react';

export default React.createClass({
  render: function() {
    let like = 'like';
    if (this.props.likes !== 1) {like += 's'}
    return (
      <input
        className="like-button"
        type="button"
        value={`${this.props.likes} ${like}`}/>
    )
  }
})

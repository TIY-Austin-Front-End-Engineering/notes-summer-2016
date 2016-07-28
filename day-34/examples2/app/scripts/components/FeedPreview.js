import React from 'react';
import UserPreview from './UserPreview';
import Post from './Post';

export default React.createClass({
  render: function() {
    return (
      <div className="feed-preview">
        <UserPreview user={this.props.user}/>
        <Post post={this.props.post}/>
      </div>
    )
  }
});

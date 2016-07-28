import React from 'react';
import UserPreview from './UserPreview';

export default React.createClass({
  render: function() {
    return (
      <div className="user-profile">
        <UserPreview user={this.props.user}/>
        <div className="user-details">
          Member since {this.props.user.memberSince}
        </div>
      </div>
    )
  }
});

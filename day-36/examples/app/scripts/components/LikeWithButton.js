import React from 'react';

export default React.createClass({
  getInitialState: function() {
    return {
      likes: 0
    }
  },
  addLike: function(e) {
    let currentLikesPlus1 = this.state.likes + 1;
    // this doesn't work bc we aren't allowed to manipulate state directly
    // this.state.likes++
    this.setState({likes: currentLikesPlus1})
  },
  render: function() {
    let like = 'like';
    if (this.state.likes !== 1) {like += 's';}
    return (
      <div>
        <button onClick={this.addLike}>
          {this.state.likes} {like}
        </button>
      </div>
    )
  }
});

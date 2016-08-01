import React from 'react';

export default React.createClass({
  getInitialState: function() {
    return {
      likes: 0
    }
  },
  addLike: function() {
    let currentLikesPlus1 = this.state.likes + 1;
    this.setState({likes: currentLikesPlus1})
  },
  render: function() {
    let like = 'like';
    if (this.state.likes !== 1) {like += 's';}
    console.log(this.state.likes);
    return (
      <div>
        <input
          type="button"
          value={`${this.state.likes} ${like}`}
          onClick={this.addLike}/>
      </div>
    )
  }
});

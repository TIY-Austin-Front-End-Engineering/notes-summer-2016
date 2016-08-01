import React from 'react';
import Like from './LikeWithCallbackProps'

export default React.createClass({
  getInitialState: function() {
    return {
      likes: 0
    };
  },
  addLike: function() {
    let currentLikesPlus1 = this.state.likes + 1;
    this.setState({likes: currentLikesPlus1})
  },
  render: function() {
    console.log(this.state.likes);
    return (
      <div>
        <h2>Amalthea</h2>
        <Like
          likes={this.state.likes}
          callback={this.addLike}/>
      </div>
    )
  }
})

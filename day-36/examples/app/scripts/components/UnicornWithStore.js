import React from 'react';
import Like from './LikeWithStore';
import store from '../store';

export default React.createClass({
  getInitialState: function() {
    return store.unicorn.toJSON();
  },
  componentDidMount: function() {
    store.unicorn.on('change', ()=>{
      this.setState(store.unicorn.toJSON());
    })
  },
  addLike: function() {
    // i moved this logic over to the model as a custom function
    // let oldLikes = store.unicorn.get('likes');
    // store.unicorn.set('likes', oldLikes+1);
    store.unicorn.addLike();
  },
  render: function() {
    console.log(this.state.likes);
    return (
      <div>
        <h2>{this.state.name}</h2>
        <Like
          likes={this.state.likes}
          callback={this.addLike}/>
      </div>
    )
  }
})

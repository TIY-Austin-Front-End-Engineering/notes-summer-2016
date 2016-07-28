import React from 'react';
import Header from '../Header';
import FeedPreview from '../FeedPreview';
import store from '../../store';

export default React.createClass({
  getInitialState: function() {
    return {
      users: store.users.toJSON(),
      posts: store.posts.toJSON()
    }
  },
  componentDidMount: function() {
    store.users.fetch();
    store.posts.fetch();
    store.users.on('update change', () => {
      this.setState({users: store.users.toJSON()});
    });
    store.posts.on('update change', () => {
      this.setState({posts: store.posts.toJSON()});
    });
  },
  render: function() {
    // console.log('state', this.state);
    // console.log('store', store);
    let feedPreviews = this.state.posts.map((post, i) => {
      // console.log(post);
      return (
        <FeedPreview
          key={i}
          user={this.state.users[0]}
          post={post}/>
      );
    })
    return (
      <div className="feed">
        <Header/>
        {feedPreviews}
      </div>
    )
  }
});

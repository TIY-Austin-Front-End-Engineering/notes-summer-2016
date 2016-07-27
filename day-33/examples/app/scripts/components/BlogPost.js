import React from 'react';
import $ from 'jquery';

const BlogPost = React.createClass({
  getInitialState: function() {
    return {
      timestamp: '',
      author: '',
      title: '',
      body: '',
      likes: null
    }
  },
  componentDidMount: function() {
    $.ajax({
      type: 'GET',
      url: `http://tiny-za-server.herokuapp.com/collections/blogPosts/${this.props.params.postId}`,
      success: (data) => {
        this.setState(data)
      }
    })
  },
  render: function() {
    return (
      <article>
        <h2>{this.state.title}</h2>
      </article>
    );
  }
});

export default BlogPost;

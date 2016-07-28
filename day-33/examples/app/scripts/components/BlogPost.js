import React from 'react';
import $ from 'jquery';

const BlogPost = React.createClass({
  fetch: function(id) {
    $.ajax({
      type: 'GET',
      url: `http://tiny-za-server.herokuapp.com/collections/blogPosts/${id}`,
      success: (data) => {
        this.setState(data)
      }
    })
  },
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
    this.fetch(this.props.params.postId);
  },
  componentWillReceiveProps: function(nextProps) {
    if (nextProps.params.postId !== this.props.params.postId) {
      this.fetch(nextProps.params.postId);
    }
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

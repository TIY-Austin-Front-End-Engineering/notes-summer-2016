import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';

const BlogList = React.createClass({
  getInitialState: function() {
    console.log('get intial state comes first, should ONLY return the initial state, no side effects');
    return {
      blogPosts: []
    };
  },
  componentWillMount: function() {
    console.log('component will mount is second, i might use this to prevent this component from ever rendering at all');
  },
  componentDidMount: function() {
    console.log('component did mount is fourth, i would use this to initiate any fetching, and listening, since i know we\'re going ahead with rendering this component');
    $.ajax({
      type: 'GET',
      url: 'https://tiny-za-server.herokuapp.com/collections/blogPosts',
      success: (data) => {
        this.setState({blogPosts: data})
      }
    })
  },
  componentWillUnmount: function() {
    console.log('componentWillUnmount fires once right before the component is removed from the dom');
  },
  render: function() {
    console.log('the first render happens after will mount but before did mount, other renders happen when state or props change');
    console.log('this.state is: ', this.state);
    let listItems = this.state.blogPosts.map(function(post, i, arr) {
      return <li key={i}><Link to={`posts/${post._id}`} >{post.title}</Link></li>
    });
    return (
      <div>
        <ul>
          {listItems}
        </ul>
        {this.props.children}
      </div>
    );
  }
});

export default BlogList;

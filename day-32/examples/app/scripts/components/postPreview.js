import React from 'react';

const PostPreview = React.createClass({
	render: function() {
		return (
			<li	className="post-preview" >
				<h3>{this.props.blog.title}</h3>
				<time>{this.props.blog.date}</time>
			</li>
		)
	}
});

export default PostPreview;

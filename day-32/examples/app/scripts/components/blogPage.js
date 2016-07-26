import React from 'react';
import Header from './header';
import PostPreviewList from './postPreviewList';
import BlogArticle from './blogArticle';

const BlogPage = React.createClass({
	render: function() {
		return (
			<div>
				<Header title="The Super Cool Blog"/>
				<PostPreviewList />
				<BlogArticle />
			</div>
		)
	}
})

export default BlogPage;

import React from 'react';
import PostPreview from './postPreview';

const PostPreviewList = React.createClass({
	render: function() {
		return (
			<ul>
				<PostPreview
					blog={{title: 'some catchy name', date: 'yesterday'}} />
				<PostPreview
					blog={{title: 'click bait', date: 'today'}} />
				<PostPreview
					blog={{title: 'unicorns are real', date: 'a few minutes ago'}} />
			</ul>
		)
	}
});

export default PostPreviewList;

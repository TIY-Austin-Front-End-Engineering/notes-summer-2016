import React from 'react';

const Header = React.createClass({
	render: function() {
		return (
			<header id="page-header" className="page-header">
				<h1>{this.props.title}</h1>
				<a href="http://google.com">Go to google</a>
			</header>
		)
	}
});

export default Header;

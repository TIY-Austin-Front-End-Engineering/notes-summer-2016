import React from 'react';

const Login = React.createClass({
	submitFunction: function(e) {
		e.preventDefault();
		let username = this.refs.username.value;
		let password = this.refs.password.value;
		let data = {
			username: username,
			password: password
		};
		// this below would be a next step to save the data to the server:
		// store.session.login(data);
		console.log(data);
	},
	render: function() {
		return (
			<form onSubmit={this.submitFunction}>
				<input type="text" placeholder="username" ref="username"/>
				<input type="password" placeholder="password" ref="password"/>
				<input type="submit" value="send your info"/>
			</form>
		)
	}
});

export default Login;

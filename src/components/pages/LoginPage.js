import React, { Component } from 'react';
import LoginForm from '../forms/LoginForm';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';

class LoginPage extends Component {
	submit = data => {
		console.log(data);
		//promise
		//if login data comes and it's redirect to home page
		this.props.login(data).then(() => this.props.history.push('/'));
	};
	render() {
		return (
			<div>
				<h1>Login page</h1>
				<LoginForm
					submit={
						this.submit.bind(this) /**this function passed to login form */
					}
				/>
			</div>
		);
	}
}

LoginPage.propTypes = {
	history: PropTypes.shape({
		push: PropTypes.func.isRequired,
	}).isRequired,
	login: PropTypes.func.isRequired,
};

export default connect(
	null,
	{ login },
)(LoginPage);

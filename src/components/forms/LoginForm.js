import React, { Component } from 'react';
import { Form, Button, Input } from 'semantic-ui-react';
import validator from 'validator';
import InlineError from '../messages/InlineError';
import PropTypes from 'prop-types';

export default class LoginForm extends Component {
	state = {
		data: { email: '', password: '' },
		loading: false,
		errors: {},
	};
	onSubmit = () => {
		//validation

		const errors = this.validate(this.state.data);
		//errors:errors
		this.setState({ errors });
		//if nor errors then submit the data
		if (Object.keys(errors).length === 0) {
			//submit is a props
			this.setState({ loading: true });
			this.props.submit(this.state.data);
			//this not works
			//messges not work then video -2
			//.catch(err => this.setState({ errors: err.response.data, loading:false }));
		}
	};

	onChange = e =>
		this.setState({
			data: { ...this.state.data, [e.target.name]: e.target.value },
		});

	validate = data => {
		const errors = {};
		//validator is a plugin
		if (!validator.isEmail(data.email)) errors.email = 'Invalid Email';
		if (!data.password) errors.password = "can't be blank";
		return errors;
	};
	render() {
		const { data, errors, loading } = this.state;
		return (
			<Form onSubmit={this.onSubmit} loading={loading}>
				{/*
				video - 2 message component
				errors.global && (
					<Message negative>
						<Message.Header>Something went wrong</Message.Header>
						<p>{errors.global}</p>
					</Message>
				)*/}
				<Form.Field error={!!errors.email /**to control validator */}>
					<label htmlFor="email">Email</label>
					<Input
						type="email"
						id="email"
						name="email"
						placeholder="me@gmail.com"
						value={data.email}
						onChange={this.onChange}
					></Input>
					{errors.email && <InlineError text={errors.email} />}
				</Form.Field>
				<Form.Field error={!!errors.password}>
					<label htmlFor="password">Password</label>
					<Input
						type="password"
						id="password"
						name="password"
						placeholder="@@@@@"
						value={data.password}
						onChange={this.onChange}
					></Input>
					{errors.password && <InlineError text={errors.password} />}
				</Form.Field>
				<Button primary>Login</Button>
			</Form>
		);
	}
}

LoginForm.propTypes = {
	submit: PropTypes.func.isRequired,
};

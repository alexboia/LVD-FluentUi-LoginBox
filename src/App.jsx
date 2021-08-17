import React from 'react';
import LoginBox from './components/LoginBox.jsx';
import { successMessage, errorMessage } from './components/LoginBoxUtility.js';

const testData = {
	correctCredentials: {
		userName: 'test',
		password: 'test'
	}
};

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			working: false,
			loginMessage: null
		};

		this._handleLoginRequested =
			this._handleLoginRequested.bind(this);
		this._handleForgotPasswordRequested =
			this._handleForgotPasswordRequested.bind(this);
		this._handleLoginValuesChanged = 
			this._handleLoginValuesChanged.bind(this);
	}

	_setBusy(isBusy) {
		this.setState({
			working: isBusy
		});
	}

	_setLogonFailed(message) {
		this.setState({
			loginMessage: errorMessage(message)
		});
	}

	_setLogonSuccessful(message) {
		this.setState({
			loginMessage: successMessage(message)
		});
	}

	_clearloginMessage() {
		this.setState({
			loginMessage: null
		});
	}

	_handleLoginRequested(values) {
		this._log('Login requested. Values are:');
		this._log(this._formatUserNameValues(values));
		this._emulateLogon(values.userName, values.password);
	}

	_formatUserNameValues(values) {
		return `Username = ${values.userName || '<empty>'}, Password = ${values.password || '<empty>'}`;
	}

	_log(text) {
		console.log(text);
	}

	_handleForgotPasswordRequested(values) {
		this._log('Password recovery requested. Values are:');
		this._log(this._formatUserNameValues(values));
	}

	_handleLoginValuesChanged(oldValues, newValues) {
		this._log('Login values changed.');
		this._log('Old values:');
		this._log(oldValues);
		this._log('New values:');
		this._log(newValues);
	}

	_emulateLogon(userName, password) {
		const me = this;
		me._clearloginMessage();
		this._emulateServerProcessing(function() {
			const logonOk = me._areCredentialsCorrect(userName, password);
			if (logonOk) {
				me._setLogonSuccessful('Log-in successful. You will soon be redirected to your online crib!');
			} else {
				me._setLogonFailed('Invalid credentials. Please try again!');
			}
		});
	}

	_areCredentialsCorrect(userName, password) {
		const correctCredentials = testData.correctCredentials;
		return userName == correctCredentials.userName 
			&& password == correctCredentials.password;
	}

	_emulateServerProcessing(onReady) {
		const me = this;
		const timeout = me._generateTimeout();

		me._setBusy(true);
		window.setTimeout(function() {
			me._setBusy(false);
			onReady();
		}, timeout);
	}

	_generateTimeout() {
		return Math.max(Math.random() * 1000, 250);
	}

	render() {
		return (
			<LoginBox 
				disabled={this.state.working}
				onLoginRequested={this._handleLoginRequested}
				onForgotPasswordRequested={this._handleForgotPasswordRequested}
				onLoginValuesChanged={this._handleLoginValuesChanged}
				messageProps={this.state.loginMessage}

				titleProps={{
					show: false
				}}

				userNameProps={{
					label: "User:",
					placeholder: "The username you set upon registration.",
					emptyErrorMessage: "The username is required!"
				}}

				passwordProps={{
					label: "Password:",
					placeholder: "The password you set upon registration.",
					emptyErrorMessage: "The password is required!",
					canReveal: false
				}}

				loginActionButtonProps={{
					label: "Sign-in"
				}}

				passwordRecoveryActionButtonProps={{
					label: "I forgot my password!",
					show: true
				}}
			/>
		);
	}
}
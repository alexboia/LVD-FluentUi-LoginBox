import React from 'react';
import LoginBox from './components/LoginBox.jsx';

import PasswordRecoveryButtonPositions from './components/PasswordRecoveryButtonPositions.js'
import FakeLoginService from './FakeLoginService.js';

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

		this._handleLoginFormInitialized = 
			this._handleLoginFormInitialized.bind(this);
		this._handleLoginFormDisposed = 
			this._handleLoginFormDisposed.bind(this);
	}

	_handleLoginRequested(values) {
		this._log('Login requested. Values are:');
		this._log(this._formatUserNameValues(values));
		this._login(values);
	}

	_formatUserNameValues(values) {
		return `Username = ${values.userName || '<empty>'}, Password = ${values.password || '<empty>'}`;
	}

	_login(values) {
		this._setBusy(true);
		this._clearloginMessage();
		
		const loginService = new FakeLoginService();

		loginService.login(values, (resultMessage) => {
			this._setBusy(false);
			this._setLoginResult(resultMessage);
		});
	}

	_setBusy(isBusy) {
		this.setState({
			working: isBusy
		});
	}

	_clearloginMessage() {
		this.setState({
			loginMessage: null
		});
	}

	_setLoginResult(resultMessage) {
		this.setState({
			loginMessage: resultMessage
		});
	}

	_log(text) {
		if (typeof text != 'object') {
			console.log(text);
		} else {
			console.table(text);
		}
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

	_handleLoginFormInitialized() {
		this._log('Login form initialized.');
	}

	_handleLoginFormDisposed(values) {
		this._log('Login form disposed.');
		this._log(values);
	}

	render() {
		return (
			<LoginBox 
				disabled={this.state.working}
				messageProps={this.state.loginMessage}
				centered={true}
				fixed={false}
				framed={true}
				underlined={true}

				style={{
					width: 600
				}}

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
					position: PasswordRecoveryButtonPositions.right,
					show: true
				}}

				onLoginRequested={this._handleLoginRequested}
				onForgotPasswordRequested={this._handleForgotPasswordRequested}
				onLoginValuesChanged={this._handleLoginValuesChanged}
				onLoginFormInitialized={this._handleLoginFormInitialized}
				onLoginFormDisposed={this._handleLoginFormDisposed}
			/>
		);
	}
}
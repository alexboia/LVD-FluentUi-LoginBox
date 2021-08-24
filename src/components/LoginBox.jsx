import React from 'react';
import PropTypes from 'prop-types';

import { TextField } from '@fluentui/react';
import { DefaultButton, PrimaryButton } from '@fluentui/react';
import { MessageBar } from '@fluentui/react';

import LoginBoxDefaults from './LoginBoxDefaults.js';
import { loginBoxMessageTypeToOfficeUiMessageType } from './LoginBoxUtility.js';

export default class LoginBox extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			userName: '',
			password: '',
			hasInteracted: false
		};

		this._handleUserNameChanged =
			this._handleUserNameChanged.bind(this);
		this._getUserNameFieldErrorMessage = 
			this._getUserNameFieldErrorMessage.bind(this);
		
		this._handlePasswordChanged =
			this._handlePasswordChanged.bind(this);
		this._getPasswordFieldErrorMessage = 
			this._getPasswordFieldErrorMessage.bind(this);

		this._handleLoginButtonClicked =
			this._handleLoginButtonClicked.bind(this);
		this._handleForgotPasswordButtonClicked =
			this._handleForgotPasswordButtonClicked.bind(this);
	}

	_isDisabled() {
		return !!this.props.disabled
	}

	_isFormValid() {
		return !!this.state.userName
			&& !!this.state.password;
	}

	_getFormValues() {
		return {
			userName: this.state.userName,
			password: this.state.password
		};
	}

	_handleUserNameChanged(event) {
		event.preventDefault();
		const oldValues = this._getFormValues();
		this.setState({
			userName: event.target.value,
			hasInteracted: true
		}, () => this._raiseValuesChanged(oldValues));
	}

	_handlePasswordChanged(event) {
		event.preventDefault();
		const oldValues = this._getFormValues();
		this.setState({
			password: event.target.value,
			hasInteracted: true
		}, () => this._raiseValuesChanged(oldValues));
	}

	_raiseValuesChanged(oldValues) {
		const newValues = this._getFormValues();
		if (this.props.onLoginValuesChanged != null) {
			this.props.onLoginValuesChanged(oldValues, newValues);
		}
	}

	_handleLoginButtonClicked(event) {
		event.preventDefault();
		const values = this._getFormValues();
		if (this.props.onLoginRequested != null) {
			this.props.onLoginRequested(values);
		}
	}

	_handleForgotPasswordButtonClicked(event) {
		event.preventDefault();
		const values = this._getFormValues();
		if (this.props.onForgotPasswordRequested != null) {
			this.props.onForgotPasswordRequested(values);
		}
	}

	componentDidMount() {
		if (this.props.onLoginFormInitialized != null) {
			this.props.onLoginFormInitialized();
		}
	}

	componentWillUnmount() {
		const values = this._getFormValues();
		if (this.props.onLoginFormDisposed != null) {
			this.props.onLoginFormDisposed(values);
		}
	}

	render() {
		return (
			<div className={this._computeContainerCssClassName()}>
				{this._renderTitle()}

				<div className="lvd-login-box-fields-container">
					{this._renderMessage()}
					{this._renderUserNameField()}
					{this._renderPasswordField()}
				</div>

				<div className="lvd-login-box-button-container">
					{this._renderLoginActionButton()}
					{this._renderPasswordRecoveryActionButton()}
					<div className="lvd-login-box-clear"></div>
				</div>
			</div>
		);
	}

	_computeContainerCssClassName() {
		let className = 'lvd-login-box';
		if (this._useFramedLayout()) {
			className = `${className} lvd-login-box-framed`;
		}
		return className;
	}

	_useFramedLayout() {
		return this.props.hasOwnProperty('framed')
			? !!this.props.framed
			: true;
	}

	_renderTitle() {
		const titleProps = this._getTitleProps();
		return titleProps.show && (
			<h4 className="lvd-login-box-header">
				{titleProps.text}
			</h4>
		);
	}

	_getTitleProps() {
		const titleProps = this.props.titleProps || {};
		return {
			show: titleProps.hasOwnProperty('show') 
				? !!titleProps.show 
				: true,
			text: titleProps.text 
				|| LoginBoxDefaults.title
		};
	}

	_renderMessage() {
		const messageProps = this._getMessageProps();
		return !!messageProps.message && (
			<MessageBar
				className="lvd-login-box-message"
				messageBarType={messageProps.type}
				isMultiline={true}>
				{messageProps.message}
			</MessageBar>
		);
	}

	_getMessageProps() {
		const messageProps = this.props.messageProps || {};
		const messageType = loginBoxMessageTypeToOfficeUiMessageType(messageProps.type || null);

		return {
			message: messageProps.message || null,
			type: messageType 
		};
	}

	_renderUserNameField() {
		const userNameProps = this._getUserNameProps();
		const underlined = this._areFieldsUnderlined();

		const userNameElement = (
			<TextField label={userNameProps.label}
				required={true}
				underlined={underlined}
				value={this.state.userName}
				placeholder={userNameProps.placeholder} 
				onChange={this._handleUserNameChanged}
				onGetErrorMessage={this._getUserNameFieldErrorMessage}
				disabled={this._isDisabled()}
				readOnly={this._areAllFieldsReadonly()}
				className="lvd-login-box-element lvd-login-box-username"
			/>
		);

		return this._renderField(userNameElement);
	}

	_areFieldsUnderlined() {
		return !!this.props.underlined;
	}

	_areAllFieldsReadonly() {
		return !!this.props.readOnly;
	}

	_getUserNameProps() {
		const userNameProps = this.props.userNameProps || {};
		return {
			label: userNameProps.label 
				|| LoginBoxDefaults.userName.label,
			placeholder: userNameProps.hasOwnProperty('placeholder') 
				? userNameProps.placeholder || null 
				: LoginBoxDefaults.userName.placeholder,
			emptyErrorMessage: userNameProps.emptyErrorMessage 
				|| LoginBoxDefaults.userName.messages.empty
		};
	}

	_getUserNameFieldErrorMessage(value) {
		const userNameProps = this._getUserNameProps();
		return this._displayUserNameEmptyErrorMessage(value)
			? userNameProps.emptyErrorMessage
			: '';
	}

	_displayUserNameEmptyErrorMessage(value) {
		return !this._isUserNameFilledIn(value)
			&& this._displayFieldErrorMessages();
	}

	_isUserNameFilledIn(value) {
		return this._isValueFilledIn(value);
	}

	_isValueFilledIn(value) {
		return (value != null && value.length > 0);
	}

	_displayFieldErrorMessages() {
		return !!this.state.hasInteracted;
	}

	_renderField(element) {
		return (
			<div className="lvd-login-box-field">{element}</div>
		);
	}

	_renderPasswordField() {
		const passwordProps = this._getPasswordProps();
		const underlined = this._areFieldsUnderlined();

		const passwordElement = (
			<TextField label={passwordProps.label}
				type="password"
				required={true}
				underlined={underlined}
				value={this.state.password}
				placeholder={passwordProps.placeholder} 
				onChange={this._handlePasswordChanged}
				onGetErrorMessage={this._getPasswordFieldErrorMessage}
				canRevealPassword={passwordProps.canReveal}
				disabled={this._isDisabled()}
				readOnly={this._areAllFieldsReadonly()}
				className="lvd-login-box-element lvd-login-box-password"
			/>
		);

		return this._renderField(passwordElement);
	}

	_getPasswordProps() {
		const passwordProps = this.props.passwordProps || {};
		return {
			label: passwordProps.label 
				|| LoginBoxDefaults.password.label,
			placeholder: passwordProps.hasOwnProperty('placeholder') 
				? passwordProps.placeholder || null 
				: LoginBoxDefaults.password.placeholder,
			emptyErrorMessage: passwordProps.emptyErrorMessage 
				|| LoginBoxDefaults.password.messages.empty,
			canReveal: passwordProps.hasOwnProperty('canReveal')
				? !!passwordProps.canReveal
				: true
		};
	}

	_getPasswordFieldErrorMessage(value) {
		const passwordProps = this._getPasswordProps();
		return this._displayPasswordEmptyErrorMessage(value)
			? passwordProps.emptyErrorMessage
			: '';
	}

	_displayPasswordEmptyErrorMessage(value) {
		return !this._isPasswordFilledIn(value) 
			&& this._displayFieldErrorMessages();
	}

	_isPasswordFilledIn(value) {
		return this._isValueFilledIn(value);
	}

	_renderLoginActionButton() {
		const enableSubmit = this._isFormValid() && !this._isDisabled();
		const loginActionButtonProps = this._getLoginActionButtonProps();

		return (
			<PrimaryButton
				disabled={!enableSubmit}
				className="lvd-login-box-btn lvd-login-box-login-btn"
				text={loginActionButtonProps.label} 
				onClick={this._handleLoginButtonClicked}
			/>
		);
	}

	_getLoginActionButtonProps() {
		const loginActionButtonProps = this.props.loginActionButtonProps || {};
		return {
			label: loginActionButtonProps.label 
				|| LoginBoxDefaults.loginActionButton.label
		}
	}

	_renderPasswordRecoveryActionButton() {
		const passwordRecoveryActionButtonProps = this._getPasswordRecoveryActionButtonProps();
		return passwordRecoveryActionButtonProps.show && (
			<DefaultButton primary={false}
				className="lvd-login-box-btn lvd-login-box-forgot-passwd-btn"
				text={passwordRecoveryActionButtonProps.label} 
				onClick={this._handleForgotPasswordButtonClicked}
				disabled={this._isDisabled()}
			/>
		);
	}

	_getPasswordRecoveryActionButtonProps() {
		const passwordRecoveryActionButtonProps = this.props.passwordRecoveryActionButtonProps || {};
		return {
			show: passwordRecoveryActionButtonProps.hasOwnProperty('show')
				? !!passwordRecoveryActionButtonProps.show
				: true,
			label: passwordRecoveryActionButtonProps.label 
				|| LoginBoxDefaults.passwordReoveryActionButton.label
		};
	}
}

LoginBox.propTypes = {
	disabled: PropTypes.bool,
	underlined: PropTypes.bool,
	readOnly: PropTypes.bool,
	framed: PropTypes.bool,

	titleProps: PropTypes.object,
	userNameProps: PropTypes.object,
	passwordProps: PropTypes.object,
	loginActionButtonProps: PropTypes.object,
	passwordRecoveryActionButtonProps: PropTypes.object,
	messageProps: PropTypes.object,

	onLoginFormInitialized: PropTypes.func,
	onLoginFormDisposed: PropTypes.func,
	onLoginRequested: PropTypes.func,
	onForgotPasswordRequested: PropTypes.func,
	onLoginValuesChanged: PropTypes.func
};
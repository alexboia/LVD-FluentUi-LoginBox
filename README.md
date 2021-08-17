# FluentUI Login Box

A ReactJS login box built using the [FluentUI library](https://github.com/microsoft/fluentui).
It features a basic structure, with customization options for each element: 

- a title; 
- a message area;
- a username field;
- a password field; 
- a log-in button and; 
- a password recovery button, which can be hidden.

<p align="center">
	<img align="center" width="210" height="210" src="https://raw.githubusercontent.com/alexboia/LVD-FluentUi-LoginBox/main/docs/Sample.png?raw=true" style="margin-bottom: 20px; margin-right: 20px; border-radius: 5px;" />
</p>

## Installation

`npm install --save lvd-fluentui-loginbox`

## Live Demo

## Basic Usage

```javascript
import React from 'react';
import LoginBox from 'lvd-fluentui-loginbox';

class LoginPage extends React.Component {
	constructor(props) {
		super(props);

		this._handleLoginRequested =
			this._handleLoginRequested.bind(this);
		this._handleForgotPasswordRequested =
			this._handleForgotPasswordRequested.bind(this);
	}

	_handleLoginRequested(loginValues) {
		//...trigger server side processing
	}

	_handleForgotPasswordRequested(loginValues) {
		//...navigate to password recovery page
	}

	render() {
		return (
			<LoginBox 
				onLoginRequested={this._handleLoginRequested}
				onForgotPasswordRequested={this._handleForgotPasswordRequested}
			/>
		);
	}
}
```

## Customization Options

| What | Prop Name | Type | Notes |
| --- | --- | --- | --- |
| Component Title | `titleProps` | `Title Customization Object` | See below. By default the title is shown and the `Log-in` text is displayed. |
| Message | `messageProps` | `Message Object` | See below. By default no message is shown. |
| Username field | `userNameProps` | `Username Customization Object` | See below. By default the label is set to `User name:`, the placeholder is set to `Please fill in the username` and the empty error message to `You must fill your username`. |
| Password field | `passwordProps` | `Password Customization Object` | See below. By default the label is set to `Password:`, the placeholder is set to `Please fill in the password`, the empty error message to `You must fill in your password` and field is configured to allow password reveal. |
| Log-in button | `loginActionButtonProps` | `Log-in Action Button Customization Object` | See below. By default the label is set to `Log-in` |
| Forgot password button | `passwordRecoveryActionButtonProps` | `Password Recovery Action Button Customization Object` | See below. By default the label is set to `Forgot password?` and the button is shown. |

### Title Customization Object

```javascript
{
	show: <true|false>,
	text: "<actual title text>"
}
```

### Message Object

```javascript
{
	message: "<actual message>",
	type: <LoginBoxMessageType.info|success|severeWarning|warning|blocked|error>
}
```

### Username Customization Object

```javascript
{
	label: "<actual label text>",
	placeholder: "<actual placeholder text>",
	emptyErrorMessage: "<actual messsage to be displayed when the field is empty>"
}
```

### Password Customization Object

```javascript
{
	label: "<actual label text>",
	placeholder: "<actual placeholder text>",
	emptyErrorMessage: "<actual messsage to be displayed when the field is empty>",
	canReveal: <true|false>
}
```

### Log-in Action Button Customization Object

```javascript
{
	label: "<actual label text>"
}
```

### Password Recovery Action Button Customization Object

```javascript
{
	label: "<actual label text>",
	show: <true|false>
}
```

## Login Values Object

The login values are exported as a plain javascript object:

```javascript
{
	userName: "<username>",
	password: "<password>"
}
```

## Events

| Event | Prop Name | Arguments | Notes |
| --- | --- | --- | --- |
| Values changed | `onLoginValuesChanged` | `Login Values Object` | Triggered whenever either of the user name or password field changes |
| Login requested | `onLoginRequested` | `Login Values Object` | Triggered when the `Log-in` button is clicked |
| Password recovery requested | `onForgotPasswordRequested` | `Login Values Object` | Triggered when the `Forgot password` button is clicked |
| Component disposed | `onLoginFormDisposed` | `Login Values Object` | Triggered when the component is un-mounted by `React` |
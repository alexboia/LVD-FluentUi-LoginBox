# FluentUI Login Box

A ReactJS login box built using the [FluentUI library](https://github.com/microsoft/fluentui).
It features a basic structure, with customization options for each element: 

- a title; 
- a message area;
- a username field;
- a password field; 
- a log-in button and; 
- a password recovery button, which can be hidden.

Here's a screenshot of how it all looks like [using the default styling](https://github.com/alexboia/LVD-FluentUi-LoginBox/blob/main/src/css/components/login-box.css):

<p align="left">
	<img align="center" src="https://raw.githubusercontent.com/alexboia/LVD-FluentUi-LoginBox/main/docs/Sample.png" style="margin-bottom: 20px; margin-right: 20px; border-radius: 5px;" />
</p>

## Installation

`npm install --save lvd-fluentui-loginbox`

## Demo

The `demo` directory contains [a compiled and ready-to-run example](https://github.com/alexboia/LVD-FluentUi-LoginBox/tree/main/demo). Just open up the `index.html` file.

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

You can find a full working example [here](https://github.com/alexboia/LVD-FluentUi-LoginBox/blob/main/src/App.jsx).

## Customization Options

| What | Prop Name | Type | Notes |
| --- | --- | --- | --- |
| Component Title | `titleProps` | `Title Customization Object` | See below. |
| Message | `messageProps` | `Message Object` | See below. By default no message is shown. |
| Username field | `userNameProps` | `Username Customization Object` | See below. |
| Password field | `passwordProps` | `Password Customization Object` | See below. By default the label is set to `Password:`, the placeholder is set to `Please fill in the password`, the empty error message to `You must fill in your password` and field is configured to allow password reveal. |
| Log-in button | `loginActionButtonProps` | `Log-in Action Button Customization Object` | See below. By default the label is set to `Log-in` |
| Forgot password button | `passwordRecoveryActionButtonProps` | `Password Recovery Action Button Customization Object` | See below. By default the label is set to `Forgot password?` and the button is shown. |

All the default values are defined [here](https://github.com/alexboia/LVD-FluentUi-LoginBox/blob/main/src/components/LoginBoxDefaults.js).

### Title Customization Object

A plain javascript object with the following properties:

| Name | Type | Notes |
| --- | --- | --- |
| `show` | `boolean` | Defaults to `true` if not specified.  |
| `text` | `string` | Defaults to `Log-in` if not specified or empty.  |

Example:

```javascript
<LoginBox 
	...
	titleProps={{
		show: true,
		text: "Log-in to access your account"
	}}
	...
/>
```

### Message Object

A plain javascript object with the following properties:

| Name | Type | Notes |
| --- | --- | --- |
| `message` | `string` | The actual message to be displayed. Defaults to `null` if not specified.  |
| `type` | `LoginBoxMessageType` | Type of message - used for formatting (error, warning etc.). Defaults to `null` if not specified. See [here for all supported values](https://github.com/alexboia/LVD-FluentUi-LoginBox/blob/main/src/components/LoginBoxMessageType.js).  |

Example:

```javascript
<LoginBox 
	...
	messageProps={{
		message: "Invalid credentials provided",
		type: LoginBoxMessageType.error
	}}
	...
/>
```

### Username Customization Object

A plain javascript object with the following properties:

| Name | Type | Notes |
| --- | --- | --- |
| `label` | `string` | Field label. Defaults to `User name:` |
| `placeholder` | `string` | Field placeholder. Defaults to `Please fill in the username` |
| `emptyErrorMessage` | `string` | Error message displayed when the field is left empty. Defaults to `You must fill your username` |

Example:

```javascript
<LoginBox 
	...
	userNameProps={{
		label: "User:",
		placeholder: "The username you set upon registration.",
		emptyErrorMessage: "The username is required!"
	}}
	...
/>
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
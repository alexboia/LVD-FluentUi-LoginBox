# FluentUI Login Box

[![NPM](https://nodei.co/npm/lvd-fluentui-loginbox.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/lvd-fluentui-loginbox/)

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

## Contents

1. [Installation](#lb-installation)
2. [Demo](#lb-demo)
3. [Basic Usage](#lb-basic-usage)
4. [Styling](#lb-styling)
5. [Building](#lb-building)
6. [Customization Options](#lb-customization)
7. [Events](#lb-events)
8. [Changelog](#lb-changelog)
9. [Donate](#lb-donate)

## Installation
<a name="lb-installation"></a>

`npm install --save lvd-fluentui-loginbox`

## Demo
<a name="lb-demo"></a>

The `demo` directory contains [a compiled and ready-to-run example](https://github.com/alexboia/LVD-FluentUi-LoginBox/tree/main/demo). Just open up the `index.html` file.

## Basic Usage
<a name="lb-basic-usage"></a>

```javascript
import React from 'react';
import { LoginBox } from 'lvd-fluentui-loginbox';

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

## Styling
<a name="lb-styling"></a>

You can either directly include the `dist/style.css` into your `html` web page or use the `@import` directive inside your stylesheet if building using webpack:

```css
@import '~lvd-fluentui-loginbox/dist/style.css';
```

If you need to customize the default styling or provide a new one altoghether, you may find this component layout diagram useful:

<p align="left">
	<img align="center" src="https://raw.githubusercontent.com/alexboia/LVD-FluentUi-LoginBox/main/docs/ComponentLayout.png" style="margin-bottom: 20px; margin-right: 20px; border-radius: 5px;" />
</p>

Also see [the component itself](https://github.com/alexboia/LVD-FluentUi-LoginBox/blob/main/src/components/LoginBox.jsx).

## Building
<a name="lb-building"></a>

To build the demo application: 

```
npm run build-app
```

To build the library: 

```
npm run build-dist
```

To build both in one sitting: 

```
npm run build
```

## Customization Options
<a name="lb-customization"></a>

| What | Prop Name | Type | Notes |
| --- | --- | --- | --- |
| Disable component | `disabled` | `boolean` | Cascades to all fields and buttons. Defaults to `false`. |
| Configure whether to use framed container layout or not | `framed` | `boolean` | If true, it will display the default shadow-box frame. Defaults to `true`. |
| Configure whether to use built-in fixed-width container layout or not | `fixed` | `boolean` | If true, it will set the container width to the default width of `500px`. Defaults to `true`. |
| Configure whether to center the container or not | `centered` | `boolean` | If true, it will attempt to center the container. Defaults to `true`. |
| Set additional container css class name | `className` | `string` | Defaults to `null`. |
| Set additional inline css style properties | `style` | `object` | Key-value plain javascript object. Defaults to `{}`. |
| Make component readonly | `readOnly` | `boolean` | Cascades to all fields. Defaults to `false`. |
| Display fields in underlined style. | `underlined` | `boolean` | Defaults to `false`. |
| Component Title | `titleProps` | `Title Customization Object` | See below. |
| Message | `messageProps` | `Message Object` | See below. By default no message is shown. |
| Username field | `userNameProps` | `Username Customization Object` | See below. |
| Password field | `passwordProps` | `Password Customization Object` | See below. |
| Log-in button | `loginActionButtonProps` | `Log-in Action Button Customization Object` | See below. |
| Forgot password button | `passwordRecoveryActionButtonProps` | `Password Recovery Action Button Customization Object` | See below. |

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
| `description` | `string` | Field descriptive text, displayed below the username field. Defaults to empty string. |
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

A plain javascript object with the following properties:

| Name | Type | Notes |
| --- | --- | --- |
| `label` | `string` | Field label. Defaults to `Password:` |
| `placeholder` | `string` | Field placeholder. Defaults to `Please fill in the password` |
| `description` | `string` | Field descriptive text, displayed below the password field. Defaults to empty string. |
| `emptyErrorMessage` | `string` | Error message displayed when the field is left empty. Defaults to `You must fill in your password` |
| `canReveal` | `boolean` | Whether or not to offer the option of revealing the password. Defaults to `true` if not specified |

Example:

```javascript
<LoginBox 
	...
	passwordProps={{
		label: "Password:",
		placeholder: "The password you set upon registration.",
		emptyErrorMessage: "The password is required!",
		canReveal: false
	}}
	...
/>
```

### Log-in Action Button Customization Object

A plain javascript object with the following properties:

| Name | Type | Notes |
| --- | --- | --- |
| `label` | `string` | Button label. Defaults to `Log-in` |

Example: 

```javascript
<LoginBox 
	...
	loginActionButtonProps={{
		label: "Sign-in"
	}}
	...
/>
```

### Password Recovery Action Button Customization Object

A plain javascript object with the following properties:

| Name | Type | Notes |
| --- | --- | --- |
| `label` | `string` | Button label. Defaults to `Forgot password?` |
| `show` | `boolean` | Whether to show the button or not. Defaults to `true` if not specified. |

Example: 

```javascript
<LoginBox 
	...
	passwordRecoveryActionButtonProps={{
		label: "I forgot my password",
		show: true
	}}
	...
/>
```
## Login Values Object
<a name="lb-login-values"></a>

The login values are exported as a plain javascript object with the following properties:

| Name | Type | Notes |
| --- | --- | --- |
| `userName` | `string` | - |
| `password` | `string` | - |

## Events
<a name="lb-events"></a>

| Event | Prop Name | Arguments | Notes |
| --- | --- | --- | --- |
| Values changed | `onLoginValuesChanged` | (`oldValues`:`Login Values Object`, `newValues`:`Login Values Object`) | Triggered whenever either of the user name or password field changes |
| Login requested | `onLoginRequested` | (`Login Values Object`) | Triggered when the `Log-in` button is clicked |
| Password recovery requested | `onForgotPasswordRequested` | (`Login Values Object`) | Triggered when the `Forgot password` button is clicked |
| Component initialized | `onLoginFormInitialized` | `none` | Triggered when the component is mounted by `React` |
| Component disposed | `onLoginFormDisposed` | (`Login Values Object`) | Triggered when the component is un-mounted by `React` |

## Changelog
<a name="lb-changelog"></a>

### Version 0.0.3

- Added `framed` prop to allow one to opt-out of the default framed/shadow-boxed container layout;
- Added `fixed` prop to allow one to opt-out of the default fixed-width container layout;
- Added `centered` prop to allow one to opt-out of the default container centering;
- Added `style` prop to allow one to pass arbitrary in-line css styling to the container;
- Added `className` prop to allow one to pass an additional css class to the container;
- A description can now be passed to both the username and the password fields.

### Version 0.0.2

- Added `underlined` prop to allow one to display the login box fields using the underlined layout built-in `FluentUi` for the `TextField` component;
- Added `onLoginFormInitialized` event, triggered when the component is mounted by `React`.

### Version 0.0.1

- First tracked version

## Donate
<a name="lb-donate"></a>

I put some of my free time into developing and maintaining this plugin.
If helped you in your projects and you are happy with it, you can...

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/Q5Q01KGLM)
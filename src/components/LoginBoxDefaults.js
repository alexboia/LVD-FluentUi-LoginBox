import PasswordRecoveryButtonPositions from "./PasswordRecoveryButtonPositions";

const LoginBoxDefaults = {
	title: 'Log-in',
	userName: {
		label: 'User name:',
		placeholder: 'Please fill in the username',
		description: '',
		messages: {
			empty: 'You must fill your username'
		}
	},
	password: {
		label: 'Password:',
		placeholder: 'Please fill in the password',
		description: '',
		messages: {
			empty: 'You must fill in your password'
		}
	},
	loginActionButton: {
		label: 'Log-in'
	},
	passwordReoveryActionButton: {
		label: 'Forgot password?',
		position: PasswordRecoveryButtonPositions.left
	}
};

export default LoginBoxDefaults;
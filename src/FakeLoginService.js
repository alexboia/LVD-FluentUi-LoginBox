import { successMessage, errorMessage } from "./components/LoginBoxUtility.js";

const TestData = {
	correctCredentials: {
		userName: 'test',
		password: 'test'
	}
};

export default class FakeLoginService {
	constructor(config = null) {
		this._config = this._mergeConfig(config || {});
	}

	_mergeConfig(config) {
		return Object.assign(this._getDefaultConfig(), config);
	}

	_getDefaultConfig() {
		return {
			correctCredentials: TestData.correctCredentials
		};
	}

	login(values, onReady) {
		this._emulateServerProcessing(() => {
			let result = null;

			if (this._areCredentialsCorrect(values.userName, values.password)) {
				result = successMessage('Log-in successful. You will soon be redirected to your online crib!');
			} else {
				result = errorMessage('Invalid credentials. Please try again!');
			}

			onReady(result);
		});
	}

	_areCredentialsCorrect(userName, password) {
		const correctCredentials = this._config.correctCredentials;
		return userName == correctCredentials.userName 
			&& password == correctCredentials.password;
	}

	_emulateServerProcessing(onReady) {
		const timeout = this._generateTimeout();
		window.setTimeout(onReady, timeout);
	}

	_generateTimeout() {
		return Math.max(Math.random() * 1000, 250);
	}
}
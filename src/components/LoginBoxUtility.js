import { MessageBarType } from "@fluentui/react";
import LoginBoxMessageType from "./LoginBoxMessageType.js";

const messageTypeMapping = {
	[LoginBoxMessageType.info]: MessageBarType.info,
	[LoginBoxMessageType.error]: MessageBarType.error,
	[LoginBoxMessageType.warning]: MessageBarType.warning,
	[LoginBoxMessageType.severeWarning]: MessageBarType.severeWarning,
	[LoginBoxMessageType.success]: MessageBarType.success,
	[LoginBoxMessageType.blocked]: MessageBarType.blocked
};

export function loginBoxMessageTypeToOfficeUiMessageType(loginBoxMessageType) {
	let officeUiMessageType = null;
	if (!!loginBoxMessageType && messageTypeMapping.hasOwnProperty(loginBoxMessageType)) {
		officeUiMessageType = messageTypeMapping[loginBoxMessageType];
	}
	return officeUiMessageType;
}

export function successMessage(message) {
	return {
		type: LoginBoxMessageType.success,
		message: message
	};
}

export function errorMessage(message) {
	return {
		type: LoginBoxMessageType.error,
		message: message
	};
}

export function warningMessag(message) {
	return {
		type: LoginBoxMessageType.warning,
		message: message
	};
}

export function infoMessage(message) {
	return {
		type: LoginBoxMessageType.info,
		message: message
	};
}
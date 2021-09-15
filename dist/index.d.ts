import * as React from 'react';
import { MessageBarType } from "@fluentui/react";

export enum LoginBoxMessageType {
    info = MessageBarType.info,
	error = MessageBarType.error,
	blocked = MessageBarType.blocked,
	severeWarning = MessageBarType.severeWarning,
	success = MessageBarType.success,
	warning = MessageBarType.warning
}

export enum PasswordRecoveryButtonPositions {
	left = 'left',
	right = 'right'
}

export interface ILoginBoxValues {
	userName: string;
	password: string;
}

export interface ILoginBoxMessageProps {
	message?: string,
	type: LoginBoxMessageType
}

export interface ILoginBoxTitleProps {
	show?: boolean;
	text?: string;
}

export interface ILoginUserNameProps {
	label?: string;
	placeholder?: string;
	description?: string;
	emptyErrorMessage?: string;
}

export interface ILoginPasswordProps {
	label?: string;
	placeholder?: string;
	description?: string;
	emptyErrorMessage?: string;
	canReveal?: boolean;
}

export interface ILoginActionButtonProps {
	label?: string;
}

export interface ILoginPasswordRecoveryActionButtonProps {
	show?: boolean;
	label?: string;
	position?: PasswordRecoveryButtonPositions;
}

export interface ILoginBoxProps {
	className?: string;
	style?: React.CSSProperties;
	
	disabled?: boolean;
	underlined?: boolean;
	readOnly?: boolean;
	framed?: boolean;
	fixed?: boolean;
	centered?: boolean;

	titleProps?: ILoginBoxTitleProps;
	userNameProps?: ILoginUserNameProps;
	passwordProps?: ILoginPasswordProps;
	loginActionButtonProps?: ILoginActionButtonProps;
	passwordRecoveryActionButtonProps?: ILoginPasswordRecoveryActionButtonProps;
	messageProps: ILoginBoxMessageProps;

	onLoginFormInitialized: () => void;
	onLoginFormDisposed: (values: ILoginBoxValues) => void;

	onLoginValuesChanged: (values: ILoginBoxValues) => void;
	onLoginRequested: (values: ILoginBoxValues) => void;
	onForgotPasswordRequested: (values: ILoginBoxValues) => void;
}

export declare class LoginBox extends React.Component<ILoginBoxProps, {}> {
	constructor(props: ILoginBoxProps);
	render(): JSX.Element;
}
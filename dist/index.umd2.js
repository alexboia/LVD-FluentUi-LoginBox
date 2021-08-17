(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("FluentUIReact"), require("PropTypes"), require("React"));
	else if(typeof define === 'function' && define.amd)
		define(["FluentUIReact", "PropTypes", "React"], factory);
	else if(typeof exports === 'object')
		exports["LoginBox"] = factory(require("FluentUIReact"), require("PropTypes"), require("React"));
	else
		root["LoginBox"] = factory(root["FluentUIReact"], root["PropTypes"], root["React"]);
})(self, function(__WEBPACK_EXTERNAL_MODULE__14__, __WEBPACK_EXTERNAL_MODULE__13__, __WEBPACK_EXTERNAL_MODULE__12__) {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginBoxMessageType = {
	info: 0,
	error: 1,
	blocked: 2,
	severeWarning: 3,
	success: 4,
	warning: 5
});

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LoginBox)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(14);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_fluentui_react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _LoginBoxDefaults_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(15);
/* harmony import */ var _LoginBoxUtility_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(16);







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }









var LoginBox = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__.default)(LoginBox, _React$Component);

  var _super = _createSuper(LoginBox);

  function LoginBox(props) {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, LoginBox);

    _this = _super.call(this, props);
    _this.state = {
      userName: '',
      password: '',
      hasInteracted: false
    };
    _this._handleUserNameChanged = _this._handleUserNameChanged.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this));
    _this._getUserNameFieldErrorMessage = _this._getUserNameFieldErrorMessage.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this));
    _this._handlePasswordChanged = _this._handlePasswordChanged.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this));
    _this._getPasswordFieldErrorMessage = _this._getPasswordFieldErrorMessage.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this));
    _this._handleLoginButtonClicked = _this._handleLoginButtonClicked.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this));
    _this._handleForgotPasswordButtonClicked = _this._handleForgotPasswordButtonClicked.bind((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this));
    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(LoginBox, [{
    key: "_isDisabled",
    value: function _isDisabled() {
      return !!this.props.disabled;
    }
  }, {
    key: "_isFormValid",
    value: function _isFormValid() {
      return !!this.state.userName && !!this.state.password;
    }
  }, {
    key: "_getFormValues",
    value: function _getFormValues() {
      return {
        userName: this.state.userName,
        password: this.state.password
      };
    }
  }, {
    key: "_handleUserNameChanged",
    value: function _handleUserNameChanged(event) {
      var _this2 = this;

      var oldValues = this._getFormValues();

      this.setState({
        userName: event.target.value,
        hasInteracted: true
      }, function () {
        return _this2._raiseValuesChanged(oldValues);
      });
    }
  }, {
    key: "_handlePasswordChanged",
    value: function _handlePasswordChanged(event) {
      var _this3 = this;

      var oldValues = this._getFormValues();

      this.setState({
        password: event.target.value,
        hasInteracted: true
      }, function () {
        return _this3._raiseValuesChanged(oldValues);
      });
    }
  }, {
    key: "_raiseValuesChanged",
    value: function _raiseValuesChanged(oldValues) {
      var newValues = this._getFormValues();

      if (this.props.onLoginValuesChanged != null) {
        this.props.onLoginValuesChanged(oldValues, newValues);
      }
    }
  }, {
    key: "_handleLoginButtonClicked",
    value: function _handleLoginButtonClicked(event) {
      event.preventDefault();

      var values = this._getFormValues();

      if (this.props.onLoginRequested != null) {
        this.props.onLoginRequested(values);
      }
    }
  }, {
    key: "_handleForgotPasswordButtonClicked",
    value: function _handleForgotPasswordButtonClicked(event) {
      event.preventDefault();

      var values = this._getFormValues();

      if (this.props.onForgotPasswordRequested != null) {
        this.props.onForgotPasswordRequested(values);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var values = this._getFormValues();

      if (this.props.onLoginFormDisposed != null) {
        this.props.onLoginFormDisposed(values);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("div", {
        className: "lvd-login-box"
      }, this._renderTitle(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("div", {
        className: "lvd-login-box-fields-container"
      }, this._renderMessage(), this._renderUserNameField(), this._renderPasswordField()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("div", {
        className: "lvd-login-box-button-container"
      }, this._renderLoginActionButton(), this._renderPasswordRecoveryActionButton()));
    }
  }, {
    key: "_renderTitle",
    value: function _renderTitle() {
      var titleProps = this._getTitleProps();

      return titleProps.show && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("h4", {
        className: "lvd-login-box-header"
      }, titleProps.text);
    }
  }, {
    key: "_getTitleProps",
    value: function _getTitleProps() {
      var titleProps = this.props.titleProps || {};
      return {
        show: titleProps.hasOwnProperty('show') ? !!titleProps.show : true,
        text: titleProps.text || _LoginBoxDefaults_js__WEBPACK_IMPORTED_MODULE_9__.default.title
      };
    }
  }, {
    key: "_renderMessage",
    value: function _renderMessage() {
      var messageProps = this._getMessageProps();

      return !!messageProps.message && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_8__.MessageBar, {
        className: "lvd-login-box-message",
        messageBarType: messageProps.type,
        isMultiline: true
      }, messageProps.message);
    }
  }, {
    key: "_getMessageProps",
    value: function _getMessageProps() {
      var messageProps = this.props.messageProps || {};
      var messageType = (0,_LoginBoxUtility_js__WEBPACK_IMPORTED_MODULE_10__.loginBoxMessageTypeToOfficeUiMessageType)(messageProps.type || null);
      return {
        message: messageProps.message || null,
        type: messageType
      };
    }
  }, {
    key: "_renderUserNameField",
    value: function _renderUserNameField() {
      var userNameProps = this._getUserNameProps();

      var userNameElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_8__.TextField, {
        label: userNameProps.label,
        required: true,
        value: this.state.userName,
        placeholder: userNameProps.placeholder,
        onChange: this._handleUserNameChanged,
        onGetErrorMessage: this._getUserNameFieldErrorMessage,
        disabled: this._isDisabled()
      });
      return this._renderField(userNameElement);
    }
  }, {
    key: "_getUserNameProps",
    value: function _getUserNameProps() {
      var userNameProps = this.props.userNameProps || {};
      return {
        label: userNameProps.label || _LoginBoxDefaults_js__WEBPACK_IMPORTED_MODULE_9__.default.userName.label,
        placeholder: userNameProps.hasOwnProperty('placeholder') ? userNameProps.placeholder || null : _LoginBoxDefaults_js__WEBPACK_IMPORTED_MODULE_9__.default.userName.placeholder,
        emptyErrorMessage: userNameProps.emptyErrorMessage || _LoginBoxDefaults_js__WEBPACK_IMPORTED_MODULE_9__.default.userName.messages.empty
      };
    }
  }, {
    key: "_getUserNameFieldErrorMessage",
    value: function _getUserNameFieldErrorMessage(value) {
      var userNameProps = this._getUserNameProps();

      return value != null && value.length > 0 || !this.state.hasInteracted ? '' : userNameProps.emptyErrorMessage;
    }
  }, {
    key: "_renderField",
    value: function _renderField(element) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("div", {
        className: "lvd-login-box-field"
      }, element);
    }
  }, {
    key: "_renderPasswordField",
    value: function _renderPasswordField() {
      var passwordProps = this._getPasswordProps();

      var passwordElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_8__.TextField, {
        label: passwordProps.label,
        type: "password",
        required: true,
        value: this.state.password,
        placeholder: passwordProps.placeholder,
        onChange: this._handlePasswordChanged,
        onGetErrorMessage: this._getPasswordFieldErrorMessage,
        canRevealPassword: passwordProps.canReveal,
        disabled: this._isDisabled()
      });
      return this._renderField(passwordElement);
    }
  }, {
    key: "_getPasswordProps",
    value: function _getPasswordProps() {
      var passwordProps = this.props.passwordProps || {};
      return {
        label: passwordProps.label || _LoginBoxDefaults_js__WEBPACK_IMPORTED_MODULE_9__.default.password.label,
        placeholder: passwordProps.hasOwnProperty('placeholder') ? passwordProps.placeholder || null : _LoginBoxDefaults_js__WEBPACK_IMPORTED_MODULE_9__.default.password.placeholder,
        emptyErrorMessage: passwordProps.emptyErrorMessage || _LoginBoxDefaults_js__WEBPACK_IMPORTED_MODULE_9__.default.password.messages.empty,
        canReveal: passwordProps.hasOwnProperty('canReveal') ? !!passwordProps.canReveal : true
      };
    }
  }, {
    key: "_getPasswordFieldErrorMessage",
    value: function _getPasswordFieldErrorMessage(value) {
      var passwordProps = this._getPasswordProps();

      return value != null && value.length > 0 || !this.state.hasInteracted ? '' : passwordProps.emptyErrorMessage;
    }
  }, {
    key: "_renderLoginActionButton",
    value: function _renderLoginActionButton() {
      var enableSubmit = this._isFormValid() && !this._isDisabled();

      var loginActionButtonProps = this._getLoginActionButtonProps();

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_8__.PrimaryButton, {
        disabled: !enableSubmit,
        className: "lvd-login-box-btn lvd-login-box-login-btn",
        text: loginActionButtonProps.label,
        onClick: this._handleLoginButtonClicked
      });
    }
  }, {
    key: "_getLoginActionButtonProps",
    value: function _getLoginActionButtonProps() {
      var loginActionButtonProps = this.props.loginActionButtonProps || {};
      return {
        label: loginActionButtonProps.label || _LoginBoxDefaults_js__WEBPACK_IMPORTED_MODULE_9__.default.loginActionButton.label
      };
    }
  }, {
    key: "_renderPasswordRecoveryActionButton",
    value: function _renderPasswordRecoveryActionButton() {
      var passwordRecoveryActionButtonProps = this._getPasswordRecoveryActionButtonProps();

      return passwordRecoveryActionButtonProps.show && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_fluentui_react__WEBPACK_IMPORTED_MODULE_8__.DefaultButton, {
        primary: false,
        className: "lvd-login-box-btn lvd-login-box-forgot-passwd-btn",
        text: passwordRecoveryActionButtonProps.label,
        onClick: this._handleForgotPasswordButtonClicked,
        disabled: this._isDisabled()
      });
    }
  }, {
    key: "_getPasswordRecoveryActionButtonProps",
    value: function _getPasswordRecoveryActionButtonProps() {
      var passwordRecoveryActionButtonProps = this.props.passwordRecoveryActionButtonProps || {};
      return {
        show: passwordRecoveryActionButtonProps.hasOwnProperty('show') ? !!passwordRecoveryActionButtonProps.show : true,
        label: passwordRecoveryActionButtonProps.label || _LoginBoxDefaults_js__WEBPACK_IMPORTED_MODULE_9__.default.passwordReoveryActionButton.label
      };
    }
  }]);

  return LoginBox;
}((react__WEBPACK_IMPORTED_MODULE_6___default().Component));


LoginBox.propTypes = {
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),
  titleProps: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object),
  userNameProps: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object),
  passwordProps: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object),
  loginActionButtonProps: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object),
  passwordRecoveryActionButtonProps: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object),
  messageProps: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object),
  onLoginFormDisposed: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),
  onLoginRequested: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),
  onForgotPasswordRequested: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),
  onLoginValuesChanged: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func)
};

/***/ }),
/* 4 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),
/* 5 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),
/* 6 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _assertThisInitialized)
/* harmony export */ });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),
/* 7 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inherits)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.default)(subClass, superClass);
}

/***/ }),
/* 8 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),
/* 9 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _possibleConstructorReturn)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);


function _possibleConstructorReturn(self, call) {
  if (call && ((0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__.default)(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return (0,_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__.default)(self);
}

/***/ }),
/* 10 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),
/* 11 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _getPrototypeOf)
/* harmony export */ });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),
/* 12 */
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__12__;

/***/ }),
/* 13 */
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__13__;

/***/ }),
/* 14 */
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__14__;

/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginBoxDefaults = {
	title: 'Log-in',
	userName: {
		label: 'User name:',
		placeholder: 'Please fill in the username',
		messages: {
			empty: 'You must fill your username'
		}
	},
	password: {
		label: 'Password:',
		placeholder: 'Please fill in the password',
		messages: {
			empty: 'You must fill in your password'
		}
	},
	loginActionButton: {
		label: 'Log-in'
	},
	passwordReoveryActionButton: {
		label: 'Forgot password?'
	}
});

/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loginBoxMessageTypeToOfficeUiMessageType": () => (/* binding */ loginBoxMessageTypeToOfficeUiMessageType)
/* harmony export */ });
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fluentui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LoginBoxMessageType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);



const messageTypeMapping = {
	[_LoginBoxMessageType_js__WEBPACK_IMPORTED_MODULE_1__.default.info]: _fluentui_react__WEBPACK_IMPORTED_MODULE_0__.MessageBarType.info,
	[_LoginBoxMessageType_js__WEBPACK_IMPORTED_MODULE_1__.default.error]: _fluentui_react__WEBPACK_IMPORTED_MODULE_0__.MessageBarType.error,
	[_LoginBoxMessageType_js__WEBPACK_IMPORTED_MODULE_1__.default.warning]: _fluentui_react__WEBPACK_IMPORTED_MODULE_0__.MessageBarType.warning,
	[_LoginBoxMessageType_js__WEBPACK_IMPORTED_MODULE_1__.default.severeWarning]: _fluentui_react__WEBPACK_IMPORTED_MODULE_0__.MessageBarType.severeWarning,
	[_LoginBoxMessageType_js__WEBPACK_IMPORTED_MODULE_1__.default.success]: _fluentui_react__WEBPACK_IMPORTED_MODULE_0__.MessageBarType.success,
	[_LoginBoxMessageType_js__WEBPACK_IMPORTED_MODULE_1__.default.blocked]: _fluentui_react__WEBPACK_IMPORTED_MODULE_0__.MessageBarType.blocked
};

function loginBoxMessageTypeToOfficeUiMessageType(loginBoxMessageType) {
	let officeUiMessageType = null;
	if (!!loginBoxMessageType && messageTypeMapping.hasOwnProperty(loginBoxMessageType)) {
		officeUiMessageType = messageTypeMapping[loginBoxMessageType];
	}
	return officeUiMessageType;
}

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LoginBoxMessageType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _LoginBox_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);


})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
(self["webpackChunklvd_fluentui_loginbox"] = self["webpackChunklvd_fluentui_loginbox"] || []).push([[3],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var process = __webpack_require__(3);


if (process.env.NODE_ENV === 'production') {
  module.exports = __webpack_require__(4);
} else {
  module.exports = __webpack_require__(6);
}


/***/ }),
/* 3 */
/***/ ((module) => {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 4 */,
/* 5 */
/***/ ((module) => {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 6 */,
/* 7 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var process = __webpack_require__(3);


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (process.env.NODE_ENV !== 'production') {
    // This branch is unreachable because this function is only called
    // in production, but the condition is true only in development.
    // Therefore if the branch is still here, dead code elimination wasn't
    // properly applied.
    // Don't change the message. React DevTools relies on it. Also make sure
    // this message doesn't occur elsewhere in this function, or it will cause
    // a false positive.
    throw new Error('^_^');
  }
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (process.env.NODE_ENV === 'production') {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(8);
} else {
  module.exports = __webpack_require__(12);
}


/***/ }),
/* 8 */,
/* 9 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var process = __webpack_require__(3);


if (process.env.NODE_ENV === 'production') {
  module.exports = __webpack_require__(10);
} else {
  module.exports = __webpack_require__(11);
}


/***/ }),
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var process = __webpack_require__(3);


if (process.env.NODE_ENV === 'production') {
  module.exports = __webpack_require__(14);
} else {
  module.exports = __webpack_require__(15);
}


/***/ }),
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* 18 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* 19 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inherits)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);

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
/* 20 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* 21 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _possibleConstructorReturn)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);


function _possibleConstructorReturn(self, call) {
  if (call && ((0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__.default)(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return (0,_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__.default)(self);
}

/***/ }),
/* 22 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* 23 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* 24 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* 25 */,
/* 26 */,
/* 27 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var process = __webpack_require__(3);
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = __webpack_require__(28);

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(31)(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(34)();
}


/***/ }),
/* 28 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var process = __webpack_require__(3);


if (process.env.NODE_ENV === 'production') {
  module.exports = __webpack_require__(29);
} else {
  module.exports = __webpack_require__(30);
}


/***/ }),
/* 29 */,
/* 30 */,
/* 31 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var process = __webpack_require__(3);
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(28);
var assign = __webpack_require__(5);

var ReactPropTypesSecret = __webpack_require__(32);
var checkPropTypes = __webpack_require__(33);

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 32 */
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 33 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var process = __webpack_require__(3);
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret = __webpack_require__(32);
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),
/* 34 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(32);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),
/* 39 */,
/* 40 */,
/* 41 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageBar": () => (/* binding */ MessageBar)
/* harmony export */ });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);
/* harmony import */ var _MessageBar_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52);
/* harmony import */ var _MessageBar_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(229);



var MessageBar = (0,_Utilities__WEBPACK_IMPORTED_MODULE_0__.styled)(_MessageBar_base__WEBPACK_IMPORTED_MODULE_1__.MessageBarBase, _MessageBar_styles__WEBPACK_IMPORTED_MODULE_2__.getStyles, undefined, {
    scope: 'MessageBar',
});
//# sourceMappingURL=MessageBar.js.map

/***/ }),
/* 42 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styled": () => (/* binding */ styled)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50);
/* harmony import */ var _customizations_useCustomizationSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43);




var DefaultFields = ['theme', 'styles'];
function styled(Component, baseStyles, getProps, customizable, pure) {
    customizable = customizable || { scope: '', fields: undefined };
    var scope = customizable.scope, _a = customizable.fields, fields = _a === void 0 ? DefaultFields : _a;
    var Wrapped = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, forwardedRef) {
        var styles = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
        var settings = (0,_customizations_useCustomizationSettings__WEBPACK_IMPORTED_MODULE_1__.useCustomizationSettings)(fields, scope);
        var customizedStyles = settings.styles, dir = settings.dir, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__rest)(settings, ["styles", "dir"]);
        var additionalProps = getProps ? getProps(props) : undefined;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var cache = (styles.current && styles.current.__cachedInputs__) || [];
        if (!styles.current || customizedStyles !== cache[1] || props.styles !== cache[2]) {
            // Using styled components as the Component arg will result in nested styling arrays.
            var concatenatedStyles = function (styleProps) {
                return (0,_fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_3__.concatStyleSetsWithProps)(styleProps, baseStyles, customizedStyles, props.styles);
            };
            // The __cachedInputs__ array is attached to the function and consumed by the
            // classNamesFunction as a list of keys to include for memoizing classnames.
            concatenatedStyles.__cachedInputs__ = [
                baseStyles,
                customizedStyles,
                props.styles,
            ];
            concatenatedStyles.__noStyleOverride__ =
                !customizedStyles && !props.styles;
            styles.current = concatenatedStyles;
        }
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ ref: forwardedRef }, rest, additionalProps, props, { styles: styles.current }));
    });
    // Function.prototype.name is an ES6 feature, so the cast to any is required until we're
    // able to drop IE 11 support and compile with ES6 libs
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Wrapped.displayName = "Styled" + (Component.displayName || Component.name);
    // This preserves backwards compatibility.
    var pureComponent = pure ? react__WEBPACK_IMPORTED_MODULE_0__.memo(Wrapped) : Wrapped;
    // Check if the wrapper has a displayName after it has been memoized. Then assign it to the pure component.
    if (Wrapped.displayName) {
        pureComponent.displayName = Wrapped.displayName;
    }
    return pureComponent;
}
//# sourceMappingURL=styled.js.map

/***/ }),
/* 43 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useCustomizationSettings": () => (/* binding */ useCustomizationSettings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _Customizations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45);
/* harmony import */ var _CustomizerContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44);



/**
 * Hook to get Customizations settings from Customizations singleton or CustomizerContext.
 * It will trigger component state update on settings change observed.
 */
function useCustomizationSettings(properties, scopeName) {
    var forceUpdate = useForceUpdate();
    var customizations = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_CustomizerContext__WEBPACK_IMPORTED_MODULE_1__.CustomizerContext).customizations;
    var inCustomizerContext = customizations.inCustomizerContext;
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        if (!inCustomizerContext) {
            _Customizations__WEBPACK_IMPORTED_MODULE_2__.Customizations.observe(forceUpdate);
        }
        return function () {
            if (!inCustomizerContext) {
                _Customizations__WEBPACK_IMPORTED_MODULE_2__.Customizations.unobserve(forceUpdate);
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps -- exclude forceUpdate
    }, [inCustomizerContext]);
    return _Customizations__WEBPACK_IMPORTED_MODULE_2__.Customizations.getSettings(properties, scopeName, customizations);
}
function useForceUpdate() {
    var _a = react__WEBPACK_IMPORTED_MODULE_0__.useState(0), setValue = _a[1];
    return function () { return setValue(function (value) { return ++value; }); };
}
//# sourceMappingURL=useCustomizationSettings.js.map

/***/ }),
/* 44 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomizerContext": () => (/* binding */ CustomizerContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

var CustomizerContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext({
    customizations: {
        inCustomizerContext: false,
        settings: {},
        scopedSettings: {},
    },
});
//# sourceMappingURL=CustomizerContext.js.map

/***/ }),
/* 45 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Customizations": () => (/* binding */ Customizations)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49);
/* harmony import */ var _GlobalSettings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46);


var CustomizationsGlobalKey = 'customizations';
var NO_CUSTOMIZATIONS = { settings: {}, scopedSettings: {}, inCustomizerContext: false };
var _allSettings = _GlobalSettings__WEBPACK_IMPORTED_MODULE_0__.GlobalSettings.getValue(CustomizationsGlobalKey, {
    settings: {},
    scopedSettings: {},
    inCustomizerContext: false,
});
var _events = [];
var Customizations = /** @class */ (function () {
    function Customizations() {
    }
    Customizations.reset = function () {
        _allSettings.settings = {};
        _allSettings.scopedSettings = {};
    };
    /** Apply global Customization settings.
     * @example Customizations.applySettings(\{ theme: \{...\} \});
     */
    Customizations.applySettings = function (settings) {
        _allSettings.settings = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, _allSettings.settings), settings);
        Customizations._raiseChange();
    };
    /** Apply Customizations to a particular named scope, like a component.
     * @example Customizations.applyScopedSettings('Nav', \{ styles: () =\> \{\} \});
     */
    Customizations.applyScopedSettings = function (scopeName, settings) {
        _allSettings.scopedSettings[scopeName] = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, _allSettings.scopedSettings[scopeName]), settings);
        Customizations._raiseChange();
    };
    Customizations.getSettings = function (properties, scopeName, localSettings) {
        if (localSettings === void 0) { localSettings = NO_CUSTOMIZATIONS; }
        var settings = {};
        var localScopedSettings = (scopeName && localSettings.scopedSettings[scopeName]) || {};
        var globalScopedSettings = (scopeName && _allSettings.scopedSettings[scopeName]) || {};
        for (var _i = 0, properties_1 = properties; _i < properties_1.length; _i++) {
            var property = properties_1[_i];
            settings[property] =
                localScopedSettings[property] ||
                    localSettings.settings[property] ||
                    globalScopedSettings[property] ||
                    _allSettings.settings[property];
        }
        return settings;
    };
    /** Used to run some code that sets Customizations without triggering an update until the end.
     * Useful for applying Customizations that don't affect anything currently rendered, or for
     * applying many customizations at once.
     * @param suppressUpdate - Do not raise the change event at the end, preventing all updates
     */
    Customizations.applyBatchedUpdates = function (code, suppressUpdate) {
        Customizations._suppressUpdates = true;
        try {
            code();
        }
        catch (_a) {
            /* do nothing */
        }
        Customizations._suppressUpdates = false;
        if (!suppressUpdate) {
            Customizations._raiseChange();
        }
    };
    Customizations.observe = function (onChange) {
        _events.push(onChange);
    };
    Customizations.unobserve = function (onChange) {
        _events = _events.filter(function (cb) { return cb !== onChange; });
    };
    Customizations._raiseChange = function () {
        if (!Customizations._suppressUpdates) {
            _events.forEach(function (cb) { return cb(); });
        }
    };
    return Customizations;
}());

//# sourceMappingURL=Customizations.js.map

/***/ }),
/* 46 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalSettings": () => (/* binding */ GlobalSettings)
/* harmony export */ });
/* harmony import */ var _dom_getWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);

/**
 * Storing global state in local module variables has issues when more than one copy
 * if the module gets loaded on the page (due to a bundling error or simply by consuming
 * a prebundled script.)
 *
 * This file contains helpers to deal with the getting and setting local state, and allows
 * callers to get called back when it mutates.
 */
var GLOBAL_SETTINGS_PROP_NAME = '__globalSettings__';
var CALLBACK_STATE_PROP_NAME = '__callbacks__';
var _counter = 0;
/**
 * Global settings helper, which stores settings in the global (window) namespace.
 * If window is not provided, it will store settings in module scope. Provides a
 * way to observe changes as well when their values change.
 *
 * @public
 * {@docCategory GlobalSettings}
 */
var GlobalSettings = /** @class */ (function () {
    function GlobalSettings() {
    }
    GlobalSettings.getValue = function (key, defaultValue) {
        var globalSettings = _getGlobalSettings();
        if (globalSettings[key] === undefined) {
            globalSettings[key] = typeof defaultValue === 'function' ? defaultValue() : defaultValue;
        }
        return globalSettings[key];
    };
    GlobalSettings.setValue = function (key, value) {
        var globalSettings = _getGlobalSettings();
        var callbacks = globalSettings[CALLBACK_STATE_PROP_NAME];
        var oldValue = globalSettings[key];
        if (value !== oldValue) {
            globalSettings[key] = value;
            var changeDescription = {
                oldValue: oldValue,
                value: value,
                key: key,
            };
            for (var id in callbacks) {
                if (callbacks.hasOwnProperty(id)) {
                    callbacks[id](changeDescription);
                }
            }
        }
        return value;
    };
    GlobalSettings.addChangeListener = function (cb) {
        // Note: we use generated ids on the callbacks to create a map of the callbacks, which optimizes removal.
        // (It's faster to delete a key than it is to look up the index of an object and splice an array.)
        var id = cb.__id__;
        var callbacks = _getCallbacks();
        if (!id) {
            id = cb.__id__ = String(_counter++);
        }
        callbacks[id] = cb;
    };
    GlobalSettings.removeChangeListener = function (cb) {
        var callbacks = _getCallbacks();
        delete callbacks[cb.__id__];
    };
    return GlobalSettings;
}());

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function _getGlobalSettings() {
    var _a;
    var win = (0,_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var globalObj = win || {};
    if (!globalObj[GLOBAL_SETTINGS_PROP_NAME]) {
        globalObj[GLOBAL_SETTINGS_PROP_NAME] = (_a = {},
            _a[CALLBACK_STATE_PROP_NAME] = {},
            _a);
    }
    return globalObj[GLOBAL_SETTINGS_PROP_NAME];
}
function _getCallbacks() {
    var globalSettings = _getGlobalSettings();
    return globalSettings[CALLBACK_STATE_PROP_NAME];
}
//# sourceMappingURL=GlobalSettings.js.map

/***/ }),
/* 47 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getWindow": () => (/* binding */ getWindow)
/* harmony export */ });
/* harmony import */ var _setSSR__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48);

var _window = undefined;
// Note: Accessing "window" in IE11 is somewhat expensive, and calling "typeof window"
// hits a memory leak, whereas aliasing it and calling "typeof _window" does not.
// Caching the window value at the file scope lets us minimize the impact.
try {
    _window = window;
}
catch (e) {
    /* no-op */
}
/**
 * Helper to get the window object. The helper will make sure to use a cached variable
 * of "window", to avoid overhead and memory leaks in IE11. Note that in popup scenarios the
 * window object won't match the "global" window object, and for these scenarios, you should
 * pass in an element hosted within the popup.
 *
 * @public
 */
function getWindow(rootElement) {
    if (_setSSR__WEBPACK_IMPORTED_MODULE_0__._isSSR || typeof _window === 'undefined') {
        return undefined;
    }
    else {
        var el = rootElement;
        return el && el.ownerDocument && el.ownerDocument.defaultView ? el.ownerDocument.defaultView : _window;
    }
}
//# sourceMappingURL=getWindow.js.map

/***/ }),
/* 48 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_isSSR": () => (/* binding */ _isSSR),
/* harmony export */   "setSSR": () => (/* binding */ setSSR)
/* harmony export */ });
var _isSSR = false;
/**
 * Helper to set ssr mode to simulate no window object returned from getWindow helper.
 *
 * @public
 */
function setSSR(isEnabled) {
    _isSSR = isEnabled;
}
//# sourceMappingURL=setSSR.js.map

/***/ }),
/* 49 */,
/* 50 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "concatStyleSetsWithProps": () => (/* binding */ concatStyleSetsWithProps)
/* harmony export */ });
/* harmony import */ var _concatStyleSets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51);

/**
 * Concatenates style sets into one, but resolves functional sets using the given props.
 * @param styleProps - Props used to resolve functional sets.
 * @param allStyles - Style sets, which can be functions or objects.
 */
function concatStyleSetsWithProps(styleProps) {
    var allStyles = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        allStyles[_i - 1] = arguments[_i];
    }
    var result = [];
    for (var _a = 0, allStyles_1 = allStyles; _a < allStyles_1.length; _a++) {
        var styles = allStyles_1[_a];
        if (styles) {
            result.push(typeof styles === 'function' ? styles(styleProps) : styles);
        }
    }
    if (result.length === 1) {
        return result[0];
    }
    else if (result.length) {
        // cliffkoh: I cannot figure out how to avoid the cast to any here.
        // It is something to do with the use of Omit in IStyleSet.
        // It might not be necessary once  Omit becomes part of lib.d.ts (when we remove our own Omit and rely on
        // the official version).
        return _concatStyleSets__WEBPACK_IMPORTED_MODULE_0__.concatStyleSets.apply(void 0, result);
    }
    return {};
}
//# sourceMappingURL=concatStyleSetsWithProps.js.map

/***/ }),
/* 51 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "concatStyleSets": () => (/* binding */ concatStyleSets)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49);

/**
 * Combine a set of styles together (but does not register css classes).
 * @param styleSets - One or more stylesets to be merged (each param can also be falsy).
 */
function concatStyleSets() {
    var styleSets = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        styleSets[_i] = arguments[_i];
    }
    if (styleSets && styleSets.length === 1 && styleSets[0] && !styleSets[0].subComponentStyles) {
        return styleSets[0];
    }
    var mergedSet = {};
    // We process sub component styles in two phases. First we collect them, then we combine them into 1 style function.
    var workingSubcomponentStyles = {};
    for (var _a = 0, styleSets_1 = styleSets; _a < styleSets_1.length; _a++) {
        var currentSet = styleSets_1[_a];
        if (currentSet) {
            for (var prop in currentSet) {
                if (currentSet.hasOwnProperty(prop)) {
                    if (prop === 'subComponentStyles' && currentSet.subComponentStyles !== undefined) {
                        // subcomponent styles - style functions or objects
                        var currentComponentStyles = currentSet.subComponentStyles;
                        for (var subCompProp in currentComponentStyles) {
                            if (currentComponentStyles.hasOwnProperty(subCompProp)) {
                                if (workingSubcomponentStyles.hasOwnProperty(subCompProp)) {
                                    workingSubcomponentStyles[subCompProp].push(currentComponentStyles[subCompProp]);
                                }
                                else {
                                    workingSubcomponentStyles[subCompProp] = [currentComponentStyles[subCompProp]];
                                }
                            }
                        }
                        continue;
                    }
                    // the as any casts below is a workaround for ts 2.8.
                    // todo: remove cast to any in ts 2.9.
                    var mergedValue = mergedSet[prop];
                    var currentValue = currentSet[prop];
                    if (mergedValue === undefined) {
                        mergedSet[prop] = currentValue;
                    }
                    else {
                        mergedSet[prop] = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArrays)((Array.isArray(mergedValue) ? mergedValue : [mergedValue]), (Array.isArray(currentValue) ? currentValue : [currentValue]));
                    }
                }
            }
        }
    }
    if (Object.keys(workingSubcomponentStyles).length > 0) {
        mergedSet.subComponentStyles = {};
        var mergedSubStyles = mergedSet.subComponentStyles;
        var _loop_1 = function (subCompProp) {
            if (workingSubcomponentStyles.hasOwnProperty(subCompProp)) {
                var workingSet_1 = workingSubcomponentStyles[subCompProp];
                mergedSubStyles[subCompProp] = function (styleProps) {
                    return concatStyleSets.apply(void 0, workingSet_1.map(function (styleFunctionOrObject) {
                        return typeof styleFunctionOrObject === 'function' ? styleFunctionOrObject(styleProps) : styleFunctionOrObject;
                    }));
                };
            }
        };
        // now we process the subcomponent styles if there are any
        for (var subCompProp in workingSubcomponentStyles) {
            _loop_1(subCompProp);
        }
    }
    return mergedSet;
}
//# sourceMappingURL=concatStyleSets.js.map

/***/ }),
/* 52 */,
/* 53 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "classNamesFunction": () => (/* binding */ classNamesFunction)
/* harmony export */ });
/* harmony import */ var _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54);
/* harmony import */ var _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60);
/* harmony import */ var _rtl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55);
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47);



var MAX_CACHE_COUNT = 50;
var DEFAULT_SPECIFICITY_MULTIPLIER = 5;
var _memoizedClassNames = 0;
var stylesheet = _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_0__.Stylesheet.getInstance();
if (stylesheet && stylesheet.onReset) {
    stylesheet.onReset(function () { return _memoizedClassNames++; });
}
// Note that because of the caching nature within the classNames memoization,
// I've disabled this rule to simply be able to work with any types.
/* eslint-disable @typescript-eslint/no-explicit-any */
// This represents a prop we attach to each Map to indicate the cached return value
// associated with the graph node.
var retVal = '__retval__';
/**
 * Creates a getClassNames function which calls getStyles given the props, and injects them
 * into mergeStyleSets.
 *
 * Note that the props you pass in on every render should be in the same order and
 * immutable (numbers, strings, and booleans). This will allow the results to be memoized. Violating
 * these will cause extra recalcs to occur.
 */
function classNamesFunction(options) {
    // We build a trie where each node is a Map. The map entry key represents an argument
    // value, and the entry value is another node (Map). Each node has a `__retval__`
    // property which is used to hold the cached response.
    if (options === void 0) { options = {}; }
    // To derive the response, we can simply ensure the arguments are added or already
    // exist in the trie. At the last node, if there is a `__retval__` we return that. Otherwise
    // we call the `getStyles` api to evaluate, cache on the property, and return that.
    var map = new Map();
    var styleCalcCount = 0;
    var getClassNamesCount = 0;
    var currentMemoizedClassNames = _memoizedClassNames;
    var getClassNames = function (styleFunctionOrObject, styleProps) {
        var _a;
        if (styleProps === void 0) { styleProps = {}; }
        // If useStaticStyles is true, styleFunctionOrObject returns slot to classname mappings.
        // If there is also no style overrides, we can skip merge styles completely and
        // simply return the result from the style funcion.
        if (options.useStaticStyles &&
            typeof styleFunctionOrObject === 'function' &&
            styleFunctionOrObject.__noStyleOverride__) {
            return styleFunctionOrObject(styleProps);
        }
        getClassNamesCount++;
        var current = map;
        var theme = styleProps.theme;
        var rtl = theme && theme.rtl !== undefined ? theme.rtl : (0,_rtl__WEBPACK_IMPORTED_MODULE_1__.getRTL)();
        var disableCaching = options.disableCaching;
        // On reset of our stylesheet, reset memoized cache.
        if (currentMemoizedClassNames !== _memoizedClassNames) {
            currentMemoizedClassNames = _memoizedClassNames;
            map = new Map();
            styleCalcCount = 0;
        }
        if (!options.disableCaching) {
            current = _traverseMap(map, styleFunctionOrObject);
            current = _traverseMap(current, styleProps);
        }
        if (disableCaching || !current[retVal]) {
            if (styleFunctionOrObject === undefined) {
                current[retVal] = {};
            }
            else {
                current[retVal] = (0,_fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_2__.mergeCssSets)([
                    (typeof styleFunctionOrObject === 'function'
                        ? styleFunctionOrObject(styleProps)
                        : styleFunctionOrObject),
                ], { rtl: !!rtl, specificityMultiplier: options.useStaticStyles ? DEFAULT_SPECIFICITY_MULTIPLIER : undefined });
            }
            if (!disableCaching) {
                styleCalcCount++;
            }
        }
        if (styleCalcCount > (options.cacheSize || MAX_CACHE_COUNT)) {
            var win = (0,_dom__WEBPACK_IMPORTED_MODULE_3__.getWindow)();
            if ((_a = win === null || win === void 0 ? void 0 : win.FabricConfig) === null || _a === void 0 ? void 0 : _a.enableClassNameCacheFullWarning) {
                // eslint-disable-next-line no-console
                console.warn("Styles are being recalculated too frequently. Cache miss rate is " + styleCalcCount + "/" + getClassNamesCount + ".");
                // eslint-disable-next-line no-console
                console.trace();
            }
            map.clear();
            styleCalcCount = 0;
            // Mutate the options passed in, that's all we can do.
            options.disableCaching = true;
        }
        // Note: the retVal is an attached property on the Map; not a key in the Map. We use this attached property to
        // cache the return value for this branch of the graph.
        return current[retVal];
    };
    return getClassNames;
}
function _traverseEdge(current, value) {
    value = _normalizeValue(value);
    if (!current.has(value)) {
        current.set(value, new Map());
    }
    return current.get(value);
}
function _traverseMap(current, inputs) {
    if (typeof inputs === 'function') {
        var cachedInputsFromStyled = inputs.__cachedInputs__;
        if (cachedInputsFromStyled) {
            // The styled helper will generate the styles function and will attach the cached
            // inputs (consisting of the default styles, customzied styles, and user provided styles.)
            // These should be used as cache keys for deriving the memoized value.
            for (var _i = 0, _a = inputs.__cachedInputs__; _i < _a.length; _i++) {
                var input = _a[_i];
                current = _traverseEdge(current, input);
            }
        }
        else {
            current = _traverseEdge(current, inputs);
        }
    }
    else if (typeof inputs === 'object') {
        for (var propName in inputs) {
            if (inputs.hasOwnProperty(propName)) {
                current = _traverseEdge(current, inputs[propName]);
            }
        }
    }
    return current;
}
function _normalizeValue(value) {
    switch (value) {
        case undefined:
            return '__undefined__';
        case null:
            return '__null__';
        default:
            return value;
    }
}
//# sourceMappingURL=classNamesFunction.js.map

/***/ }),
/* 54 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InjectionMode": () => (/* binding */ InjectionMode),
/* harmony export */   "Stylesheet": () => (/* binding */ Stylesheet)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49);

var InjectionMode = {
    /**
     * Avoids style injection, use getRules() to read the styles.
     */
    none: 0,
    /**
     * Inserts rules using the insertRule api.
     */
    insertNode: 1,
    /**
     * Appends rules using appendChild.
     */
    appendChild: 2,
};
var STYLESHEET_SETTING = '__stylesheet__';
/**
 * MSIE 11 doesn't cascade styles based on DOM ordering, but rather on the order that each style node
 * is created. As such, to maintain consistent priority, IE11 should reuse a single style node.
 */
var REUSE_STYLE_NODE = typeof navigator !== 'undefined' && /rv:11.0/.test(navigator.userAgent);
var _global = {};
// Grab window.
try {
    _global = window;
}
catch (_a) {
    /* leave as blank object */
}
var _stylesheet;
/**
 * Represents the state of styles registered in the page. Abstracts
 * the surface for adding styles to the stylesheet, exposes helpers
 * for reading the styles registered in server rendered scenarios.
 *
 * @public
 */
var Stylesheet = /** @class */ (function () {
    function Stylesheet(config) {
        this._rules = [];
        this._preservedRules = [];
        this._rulesToInsert = [];
        this._counter = 0;
        this._keyToClassName = {};
        this._onResetCallbacks = [];
        this._classNameToArgs = {};
        this._config = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({ injectionMode: InjectionMode.insertNode, defaultPrefix: 'css', namespace: undefined, cspSettings: undefined }, config);
        this._keyToClassName = this._config.classNameCache || {};
    }
    /**
     * Gets the singleton instance.
     */
    Stylesheet.getInstance = function () {
        _stylesheet = _global[STYLESHEET_SETTING];
        if (!_stylesheet || (_stylesheet._lastStyleElement && _stylesheet._lastStyleElement.ownerDocument !== document)) {
            var fabricConfig = (_global === null || _global === void 0 ? void 0 : _global.FabricConfig) || {};
            _stylesheet = _global[STYLESHEET_SETTING] = new Stylesheet(fabricConfig.mergeStyles);
        }
        return _stylesheet;
    };
    /**
     * Configures the stylesheet.
     */
    Stylesheet.prototype.setConfig = function (config) {
        this._config = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, this._config), config);
    };
    /**
     * Configures a reset callback.
     *
     * @param callback - A callback which will be called when the Stylesheet is reset.
     */
    Stylesheet.prototype.onReset = function (callback) {
        this._onResetCallbacks.push(callback);
    };
    /**
     * Generates a unique classname.
     *
     * @param displayName - Optional value to use as a prefix.
     */
    Stylesheet.prototype.getClassName = function (displayName) {
        var namespace = this._config.namespace;
        var prefix = displayName || this._config.defaultPrefix;
        return "" + (namespace ? namespace + '-' : '') + prefix + "-" + this._counter++;
    };
    /**
     * Used internally to cache information about a class which was
     * registered with the stylesheet.
     */
    Stylesheet.prototype.cacheClassName = function (className, key, args, rules) {
        this._keyToClassName[key] = className;
        this._classNameToArgs[className] = {
            args: args,
            rules: rules,
        };
    };
    /**
     * Gets the appropriate classname given a key which was previously
     * registered using cacheClassName.
     */
    Stylesheet.prototype.classNameFromKey = function (key) {
        return this._keyToClassName[key];
    };
    /**
     * Gets all classnames cache with the stylesheet.
     */
    Stylesheet.prototype.getClassNameCache = function () {
        return this._keyToClassName;
    };
    /**
     * Gets the arguments associated with a given classname which was
     * previously registered using cacheClassName.
     */
    Stylesheet.prototype.argsFromClassName = function (className) {
        var entry = this._classNameToArgs[className];
        return entry && entry.args;
    };
    /**
     * Gets the arguments associated with a given classname which was
     * previously registered using cacheClassName.
     */
    Stylesheet.prototype.insertedRulesFromClassName = function (className) {
        var entry = this._classNameToArgs[className];
        return entry && entry.rules;
    };
    /**
     * Inserts a css rule into the stylesheet.
     * @param preserve - Preserves the rule beyond a reset boundary.
     */
    Stylesheet.prototype.insertRule = function (rule, preserve) {
        var injectionMode = this._config.injectionMode;
        var element = injectionMode !== InjectionMode.none ? this._getStyleElement() : undefined;
        if (preserve) {
            this._preservedRules.push(rule);
        }
        if (element) {
            switch (this._config.injectionMode) {
                case InjectionMode.insertNode:
                    var sheet = element.sheet;
                    try {
                        sheet.insertRule(rule, sheet.cssRules.length);
                    }
                    catch (e) {
                        // The browser will throw exceptions on unsupported rules (such as a moz prefix in webkit.)
                        // We need to swallow the exceptions for this scenario, otherwise we'd need to filter
                        // which could be slower and bulkier.
                    }
                    break;
                case InjectionMode.appendChild:
                    element.appendChild(document.createTextNode(rule));
                    break;
            }
        }
        else {
            this._rules.push(rule);
        }
        if (this._config.onInsertRule) {
            this._config.onInsertRule(rule);
        }
    };
    /**
     * Gets all rules registered with the stylesheet; only valid when
     * using InsertionMode.none.
     */
    Stylesheet.prototype.getRules = function (includePreservedRules) {
        return ((includePreservedRules ? this._preservedRules.join('') : '') + this._rules.join('') + this._rulesToInsert.join(''));
    };
    /**
     * Resets the internal state of the stylesheet. Only used in server
     * rendered scenarios where we're using InsertionMode.none.
     */
    Stylesheet.prototype.reset = function () {
        this._rules = [];
        this._rulesToInsert = [];
        this._counter = 0;
        this._classNameToArgs = {};
        this._keyToClassName = {};
        this._onResetCallbacks.forEach(function (callback) { return callback(); });
    };
    // Forces the regeneration of incoming styles without totally resetting the stylesheet.
    Stylesheet.prototype.resetKeys = function () {
        this._keyToClassName = {};
    };
    Stylesheet.prototype._getStyleElement = function () {
        var _this = this;
        if (!this._styleElement && typeof document !== 'undefined') {
            this._styleElement = this._createStyleElement();
            if (!REUSE_STYLE_NODE) {
                // Reset the style element on the next frame.
                window.requestAnimationFrame(function () {
                    _this._styleElement = undefined;
                });
            }
        }
        return this._styleElement;
    };
    Stylesheet.prototype._createStyleElement = function () {
        var head = document.head;
        var styleElement = document.createElement('style');
        styleElement.setAttribute('data-merge-styles', 'true');
        var cspSettings = this._config.cspSettings;
        if (cspSettings) {
            if (cspSettings.nonce) {
                styleElement.setAttribute('nonce', cspSettings.nonce);
            }
        }
        if (this._lastStyleElement) {
            // If the `nextElementSibling` is null, then the insertBefore will act as a regular append.
            // https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore#Syntax
            head.insertBefore(styleElement, this._lastStyleElement.nextElementSibling);
        }
        else {
            var placeholderStyleTag = this._findPlaceholderStyleTag();
            if (placeholderStyleTag) {
                head.insertBefore(styleElement, placeholderStyleTag.nextElementSibling);
            }
            else {
                head.insertBefore(styleElement, head.childNodes[0]);
            }
        }
        this._lastStyleElement = styleElement;
        return styleElement;
    };
    Stylesheet.prototype._findPlaceholderStyleTag = function () {
        var head = document.head;
        if (head) {
            return head.querySelector('style[data-merge-styles]');
        }
        return null;
    };
    return Stylesheet;
}());

//# sourceMappingURL=Stylesheet.js.map

/***/ }),
/* 55 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRTL": () => (/* binding */ getRTL),
/* harmony export */   "setRTL": () => (/* binding */ setRTL),
/* harmony export */   "getRTLSafeKeyCode": () => (/* binding */ getRTLSafeKeyCode)
/* harmony export */ });
/* harmony import */ var _KeyCodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59);
/* harmony import */ var _dom_getDocument__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57);
/* harmony import */ var _sessionStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56);
/* harmony import */ var _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58);




var RTL_LOCAL_STORAGE_KEY = 'isRTL';
// Default to undefined so that we initialize on first read.
var _isRTL;
/**
 * Gets the rtl state of the page (returns true if in rtl.)
 */
function getRTL(theme) {
    if (theme === void 0) { theme = {}; }
    if (theme.rtl !== undefined) {
        return theme.rtl;
    }
    if (_isRTL === undefined) {
        // Fabric supports persisting the RTL setting between page refreshes via session storage
        var savedRTL = (0,_sessionStorage__WEBPACK_IMPORTED_MODULE_0__.getItem)(RTL_LOCAL_STORAGE_KEY);
        if (savedRTL !== null) {
            _isRTL = savedRTL === '1';
            setRTL(_isRTL);
        }
        var doc = (0,_dom_getDocument__WEBPACK_IMPORTED_MODULE_1__.getDocument)();
        if (_isRTL === undefined && doc) {
            _isRTL = ((doc.body && doc.body.getAttribute('dir')) || doc.documentElement.getAttribute('dir')) === 'rtl';
            (0,_fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_2__.setRTL)(_isRTL);
        }
    }
    return !!_isRTL;
}
/**
 * Sets the rtl state of the page (by adjusting the dir attribute of the html element.)
 */
function setRTL(isRTL, persistSetting) {
    if (persistSetting === void 0) { persistSetting = false; }
    var doc = (0,_dom_getDocument__WEBPACK_IMPORTED_MODULE_1__.getDocument)();
    if (doc) {
        doc.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
    }
    if (persistSetting) {
        (0,_sessionStorage__WEBPACK_IMPORTED_MODULE_0__.setItem)(RTL_LOCAL_STORAGE_KEY, isRTL ? '1' : '0');
    }
    _isRTL = isRTL;
    (0,_fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_2__.setRTL)(_isRTL);
}
/**
 * Returns the given key, but flips right/left arrows if necessary.
 */
function getRTLSafeKeyCode(key, theme) {
    if (theme === void 0) { theme = {}; }
    if (getRTL(theme)) {
        if (key === _KeyCodes__WEBPACK_IMPORTED_MODULE_3__.KeyCodes.left) {
            key = _KeyCodes__WEBPACK_IMPORTED_MODULE_3__.KeyCodes.right;
        }
        else if (key === _KeyCodes__WEBPACK_IMPORTED_MODULE_3__.KeyCodes.right) {
            key = _KeyCodes__WEBPACK_IMPORTED_MODULE_3__.KeyCodes.left;
        }
    }
    return key;
}
//# sourceMappingURL=rtl.js.map

/***/ }),
/* 56 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getItem": () => (/* binding */ getItem),
/* harmony export */   "setItem": () => (/* binding */ setItem)
/* harmony export */ });
/* harmony import */ var _dom_getWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);

/**
 * Fetches an item from session storage without throwing an exception
 * @param key The key of the item to fetch from session storage
 */
function getItem(key) {
    var result = null;
    try {
        var win = (0,_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
        result = win ? win.sessionStorage.getItem(key) : null;
    }
    catch (e) {
        /* Eat the exception */
    }
    return result;
}
/**
 * Inserts an item into session storage without throwing an exception
 * @param key The key of the item to add to session storage
 * @param data The data to put into session storage
 */
function setItem(key, data) {
    var _a;
    try {
        (_a = (0,_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__.getWindow)()) === null || _a === void 0 ? void 0 : _a.sessionStorage.setItem(key, data);
    }
    catch (e) {
        /* Eat the exception */
    }
}
//# sourceMappingURL=sessionStorage.js.map

/***/ }),
/* 57 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDocument": () => (/* binding */ getDocument)
/* harmony export */ });
/* harmony import */ var _setSSR__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48);

/**
 * Helper to get the document object. Note that in popup window cases, document
 * might be the wrong document, which is why we look at ownerDocument for the
 * truth. Also note that the SSR flag is used to test ssr scenarios even if
 * document is defined (from JSDOM for example.)
 *
 * @public
 */
function getDocument(rootElement) {
    if (_setSSR__WEBPACK_IMPORTED_MODULE_0__._isSSR || typeof document === 'undefined') {
        return undefined;
    }
    else {
        var el = rootElement;
        return el && el.ownerDocument ? el.ownerDocument : document;
    }
}
//# sourceMappingURL=getDocument.js.map

/***/ }),
/* 58 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setRTL": () => (/* binding */ setRTL),
/* harmony export */   "getRTL": () => (/* binding */ getRTL),
/* harmony export */   "getStyleOptions": () => (/* binding */ getStyleOptions)
/* harmony export */ });
/**
 * Sets the current RTL value.
 */
function setRTL(isRTL) {
    if (_rtl !== isRTL) {
        _rtl = isRTL;
    }
}
/**
 * Gets the current RTL value.
 */
function getRTL() {
    if (_rtl === undefined) {
        _rtl =
            typeof document !== 'undefined' &&
                !!document.documentElement &&
                document.documentElement.getAttribute('dir') === 'rtl';
    }
    return _rtl;
}
// This has been split into 2 lines because it was working in Fabric due to the code being transpiled to es5, so this
// was converted to var while not working in Fluent that uses babel to transpile the code to be es6-like. Splitting the
// logic into two lines, however, allows it to work in both scenarios.
var _rtl;
_rtl = getRTL();
function getStyleOptions() {
    return {
        rtl: getRTL(),
    };
}
//# sourceMappingURL=StyleOptionsState.js.map

/***/ }),
/* 59 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KeyCodes": () => (/* binding */ KeyCodes)
/* harmony export */ });
/**
 * Simulated enum for keycodes. These will get inlined by uglify when used much like an enum
 *
 * @public
 * {@docCategory KeyCodes}
 */
var KeyCodes = {
    backspace: 8,
    tab: 9,
    enter: 13,
    shift: 16,
    ctrl: 17,
    alt: 18,
    pauseBreak: 19,
    capslock: 20,
    escape: 27,
    space: 32,
    pageUp: 33,
    pageDown: 34,
    end: 35,
    home: 36,
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    insert: 45,
    del: 46,
    zero: 48,
    one: 49,
    two: 50,
    three: 51,
    four: 52,
    five: 53,
    six: 54,
    seven: 55,
    eight: 56,
    nine: 57,
    colon: 58,
    a: 65,
    b: 66,
    c: 67,
    d: 68,
    e: 69,
    f: 70,
    g: 71,
    h: 72,
    i: 73,
    j: 74,
    k: 75,
    l: 76,
    m: 77,
    n: 78,
    o: 79,
    p: 80,
    q: 81,
    r: 82,
    s: 83,
    t: 84,
    u: 85,
    v: 86,
    w: 87,
    x: 88,
    y: 89,
    z: 90,
    leftWindow: 91,
    rightWindow: 92,
    select: 93,
    /* eslint-disable @typescript-eslint/naming-convention */
    zero_numpad: 96,
    one_numpad: 97,
    two_numpad: 98,
    three_numpad: 99,
    four_numpad: 100,
    five_numpad: 101,
    six_numpad: 102,
    seven_numpad: 103,
    eight_numpad: 104,
    nine_numpad: 105,
    /* eslint-enable @typescript-eslint/naming-convention */
    multiply: 106,
    add: 107,
    subtract: 109,
    decimalPoint: 110,
    divide: 111,
    f1: 112,
    f2: 113,
    f3: 114,
    f4: 115,
    f5: 116,
    f6: 117,
    f7: 118,
    f8: 119,
    f9: 120,
    f10: 121,
    f11: 122,
    f12: 123,
    numlock: 144,
    scrollLock: 145,
    semicolon: 186,
    equalSign: 187,
    comma: 188,
    dash: 189,
    period: 190,
    forwardSlash: 191,
    graveAccent: 192,
    openBracket: 219,
    backSlash: 220,
    closeBracket: 221,
    singleQuote: 222,
};
//# sourceMappingURL=KeyCodes.js.map

/***/ }),
/* 60 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mergeStyleSets": () => (/* binding */ mergeStyleSets),
/* harmony export */   "mergeCssSets": () => (/* binding */ mergeCssSets)
/* harmony export */ });
/* harmony import */ var _concatStyleSets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51);
/* harmony import */ var _extractStyleParts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61);
/* harmony import */ var _StyleOptionsState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58);
/* harmony import */ var _styleToClassName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62);




/**
 * Takes in one or more style set objects, each consisting of a set of areas,
 * each which will produce a class name. Using this is analogous to calling
 * `mergeStyles` for each property in the object, but ensures we maintain the
 * set ordering when multiple style sets are merged.
 *
 * @param styleSets - One or more style sets to be merged.
 */
function mergeStyleSets() {
    var styleSets = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        styleSets[_i] = arguments[_i];
    }
    return mergeCssSets(styleSets, (0,_StyleOptionsState__WEBPACK_IMPORTED_MODULE_0__.getStyleOptions)());
}
/**
 * Takes in one or more style set objects, each1consisting of a set of areas,
 * each which will produce a class name. Using this is analogous to calling
 * `mergeCss` for each property in the object, but ensures the
 * set ordering when multiple style sets are merged.
 *
 * @param styleSets - One or more style sets to be merged.
 * @param options - (optional) Options to use when creating rules.
 */
function mergeCssSets(styleSets, options) {
    var classNameSet = { subComponentStyles: {} };
    var styleSet = styleSets[0];
    if (!styleSet && styleSets.length <= 1) {
        return { subComponentStyles: {} };
    }
    var concatenatedStyleSet = _concatStyleSets__WEBPACK_IMPORTED_MODULE_1__.concatStyleSets.apply(void 0, styleSets);
    var registrations = [];
    for (var styleSetArea in concatenatedStyleSet) {
        if (concatenatedStyleSet.hasOwnProperty(styleSetArea)) {
            if (styleSetArea === 'subComponentStyles') {
                classNameSet.subComponentStyles = concatenatedStyleSet.subComponentStyles || {};
                continue;
            }
            var styles = concatenatedStyleSet[styleSetArea];
            var _a = (0,_extractStyleParts__WEBPACK_IMPORTED_MODULE_2__.extractStyleParts)(styles), classes = _a.classes, objects = _a.objects;
            if (objects === null || objects === void 0 ? void 0 : objects.length) {
                var registration = (0,_styleToClassName__WEBPACK_IMPORTED_MODULE_3__.styleToRegistration)(options || {}, { displayName: styleSetArea }, objects);
                if (registration) {
                    registrations.push(registration);
                    classNameSet[styleSetArea] = classes.concat([registration.className]).join(' ');
                }
            }
            else {
                classNameSet[styleSetArea] = classes.join(' ');
            }
        }
    }
    for (var _i = 0, registrations_1 = registrations; _i < registrations_1.length; _i++) {
        var registration = registrations_1[_i];
        if (registration) {
            (0,_styleToClassName__WEBPACK_IMPORTED_MODULE_3__.applyRegistration)(registration, options === null || options === void 0 ? void 0 : options.specificityMultiplier);
        }
    }
    return classNameSet;
}
//# sourceMappingURL=mergeStyleSets.js.map

/***/ }),
/* 61 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "extractStyleParts": () => (/* binding */ extractStyleParts)
/* harmony export */ });
/* harmony import */ var _Stylesheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54);

/**
 * Separates the classes and style objects. Any classes that are pre-registered
 * args are auto expanded into objects.
 */
function extractStyleParts() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var classes = [];
    var objects = [];
    var stylesheet = _Stylesheet__WEBPACK_IMPORTED_MODULE_0__.Stylesheet.getInstance();
    function _processArgs(argsList) {
        for (var _i = 0, argsList_1 = argsList; _i < argsList_1.length; _i++) {
            var arg = argsList_1[_i];
            if (arg) {
                if (typeof arg === 'string') {
                    if (arg.indexOf(' ') >= 0) {
                        _processArgs(arg.split(' '));
                    }
                    else {
                        var translatedArgs = stylesheet.argsFromClassName(arg);
                        if (translatedArgs) {
                            _processArgs(translatedArgs);
                        }
                        else {
                            // Avoid adding the same class twice.
                            if (classes.indexOf(arg) === -1) {
                                classes.push(arg);
                            }
                        }
                    }
                }
                else if (Array.isArray(arg)) {
                    _processArgs(arg);
                }
                else if (typeof arg === 'object') {
                    objects.push(arg);
                }
            }
        }
    }
    _processArgs(args);
    return {
        classes: classes,
        objects: objects,
    };
}
//# sourceMappingURL=extractStyleParts.js.map

/***/ }),
/* 62 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "serializeRuleEntries": () => (/* binding */ serializeRuleEntries),
/* harmony export */   "styleToRegistration": () => (/* binding */ styleToRegistration),
/* harmony export */   "applyRegistration": () => (/* binding */ applyRegistration),
/* harmony export */   "styleToClassName": () => (/* binding */ styleToClassName)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(49);
/* harmony import */ var _Stylesheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54);
/* harmony import */ var _transforms_kebabRules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64);
/* harmony import */ var _transforms_prefixRules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67);
/* harmony import */ var _transforms_provideUnits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65);
/* harmony import */ var _transforms_rtlifyRules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(66);
/* harmony import */ var _tokenizeWithParentheses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63);







var DISPLAY_NAME = 'displayName';
function getDisplayName(rules) {
    var rootStyle = rules && rules['&'];
    return rootStyle ? rootStyle.displayName : undefined;
}
var globalSelectorRegExp = /\:global\((.+?)\)/g;
/**
 * Finds comma separated selectors in a :global() e.g. ":global(.class1, .class2, .class3)"
 * and wraps them each in their own global ":global(.class1), :global(.class2), :global(.class3)"
 *
 * @param selectorWithGlobals The selector to process
 * @returns The updated selector
 */
function expandCommaSeparatedGlobals(selectorWithGlobals) {
    // We the selector does not have a :global() we can shortcut
    if (!globalSelectorRegExp.test(selectorWithGlobals)) {
        return selectorWithGlobals;
    }
    var replacementInfo = [];
    var findGlobal = /\:global\((.+?)\)/g;
    var match = null;
    // Create a result list for global selectors so we can replace them.
    while ((match = findGlobal.exec(selectorWithGlobals))) {
        // Only if the found selector is a comma separated list we'll process it.
        if (match[1].indexOf(',') > -1) {
            replacementInfo.push([
                match.index,
                match.index + match[0].length,
                // Wrap each of the found selectors in :global()
                match[1]
                    .split(',')
                    .map(function (v) { return ":global(" + v.trim() + ")"; })
                    .join(', '),
            ]);
        }
    }
    // Replace the found selectors with their wrapped variants in reverse order
    return replacementInfo
        .reverse()
        .reduce(function (selector, _a) {
        var matchIndex = _a[0], matchEndIndex = _a[1], replacement = _a[2];
        var prefix = selector.slice(0, matchIndex);
        var suffix = selector.slice(matchEndIndex);
        return prefix + replacement + suffix;
    }, selectorWithGlobals);
}
function expandSelector(newSelector, currentSelector) {
    if (newSelector.indexOf(':global(') >= 0) {
        return newSelector.replace(globalSelectorRegExp, '$1');
    }
    else if (newSelector.indexOf(':') === 0) {
        return currentSelector + newSelector;
    }
    else if (newSelector.indexOf('&') < 0) {
        return currentSelector + ' ' + newSelector;
    }
    return newSelector;
}
function extractSelector(currentSelector, rules, selector, value) {
    if (rules === void 0) { rules = { __order: [] }; }
    if (selector.indexOf('@') === 0) {
        selector = selector + '{' + currentSelector;
        extractRules([value], rules, selector);
    }
    else if (selector.indexOf(',') > -1) {
        expandCommaSeparatedGlobals(selector)
            .split(',')
            .map(function (s) { return s.trim(); })
            .forEach(function (separatedSelector) {
            return extractRules([value], rules, expandSelector(separatedSelector, currentSelector));
        });
    }
    else {
        extractRules([value], rules, expandSelector(selector, currentSelector));
    }
}
function extractRules(args, rules, currentSelector) {
    if (rules === void 0) { rules = { __order: [] }; }
    if (currentSelector === void 0) { currentSelector = '&'; }
    var stylesheet = _Stylesheet__WEBPACK_IMPORTED_MODULE_0__.Stylesheet.getInstance();
    var currentRules = rules[currentSelector];
    if (!currentRules) {
        currentRules = {};
        rules[currentSelector] = currentRules;
        rules.__order.push(currentSelector);
    }
    for (var _i = 0, args_1 = args; _i < args_1.length; _i++) {
        var arg = args_1[_i];
        // If the arg is a string, we need to look up the class map and merge.
        if (typeof arg === 'string') {
            var expandedRules = stylesheet.argsFromClassName(arg);
            if (expandedRules) {
                extractRules(expandedRules, rules, currentSelector);
            }
            // Else if the arg is an array, we need to recurse in.
        }
        else if (Array.isArray(arg)) {
            extractRules(arg, rules, currentSelector);
        }
        else {
            for (var prop in arg) {
                if (arg.hasOwnProperty(prop)) {
                    var propValue = arg[prop];
                    if (prop === 'selectors') {
                        // every child is a selector.
                        var selectors = arg.selectors;
                        for (var newSelector in selectors) {
                            if (selectors.hasOwnProperty(newSelector)) {
                                extractSelector(currentSelector, rules, newSelector, selectors[newSelector]);
                            }
                        }
                    }
                    else if (typeof propValue === 'object') {
                        // prop is a selector.
                        if (propValue !== null) {
                            extractSelector(currentSelector, rules, prop, propValue);
                        }
                    }
                    else {
                        if (propValue !== undefined) {
                            // Else, add the rule to the currentSelector.
                            if (prop === 'margin' || prop === 'padding') {
                                expandQuads(currentRules, prop, propValue);
                            }
                            else {
                                currentRules[prop] = propValue;
                            }
                        }
                    }
                }
            }
        }
    }
    return rules;
}
function expandQuads(currentRules, name, value) {
    var parts = typeof value === 'string' ? (0,_tokenizeWithParentheses__WEBPACK_IMPORTED_MODULE_1__.tokenizeWithParentheses)(value) : [value];
    if (parts.length === 0) {
        parts.push(value);
    }
    if (parts[parts.length - 1] === '!important') {
        // Remove !important from parts, and append it to each part individually
        parts = parts.slice(0, -1).map(function (p) { return p + ' !important'; });
    }
    currentRules[name + 'Top'] = parts[0];
    currentRules[name + 'Right'] = parts[1] || parts[0];
    currentRules[name + 'Bottom'] = parts[2] || parts[0];
    currentRules[name + 'Left'] = parts[3] || parts[1] || parts[0];
}
function getKeyForRules(options, rules) {
    var serialized = [options.rtl ? 'rtl' : 'ltr'];
    var hasProps = false;
    for (var _i = 0, _a = rules.__order; _i < _a.length; _i++) {
        var selector = _a[_i];
        serialized.push(selector);
        var rulesForSelector = rules[selector];
        for (var propName in rulesForSelector) {
            if (rulesForSelector.hasOwnProperty(propName) && rulesForSelector[propName] !== undefined) {
                hasProps = true;
                serialized.push(propName, rulesForSelector[propName]);
            }
        }
    }
    return hasProps ? serialized.join('') : undefined;
}
function repeatString(target, count) {
    if (count <= 0) {
        return '';
    }
    if (count === 1) {
        return target;
    }
    return target + repeatString(target, count - 1);
}
function serializeRuleEntries(options, ruleEntries) {
    if (!ruleEntries) {
        return '';
    }
    var allEntries = [];
    for (var entry in ruleEntries) {
        if (ruleEntries.hasOwnProperty(entry) && entry !== DISPLAY_NAME && ruleEntries[entry] !== undefined) {
            allEntries.push(entry, ruleEntries[entry]);
        }
    }
    // Apply transforms.
    for (var i = 0; i < allEntries.length; i += 2) {
        (0,_transforms_kebabRules__WEBPACK_IMPORTED_MODULE_2__.kebabRules)(allEntries, i);
        (0,_transforms_provideUnits__WEBPACK_IMPORTED_MODULE_3__.provideUnits)(allEntries, i);
        (0,_transforms_rtlifyRules__WEBPACK_IMPORTED_MODULE_4__.rtlifyRules)(options, allEntries, i);
        (0,_transforms_prefixRules__WEBPACK_IMPORTED_MODULE_5__.prefixRules)(allEntries, i);
    }
    // Apply punctuation.
    for (var i = 1; i < allEntries.length; i += 4) {
        allEntries.splice(i, 1, ':', allEntries[i], ';');
    }
    return allEntries.join('');
}
function styleToRegistration(options) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var rules = extractRules(args);
    var key = getKeyForRules(options, rules);
    if (key) {
        var stylesheet = _Stylesheet__WEBPACK_IMPORTED_MODULE_0__.Stylesheet.getInstance();
        var registration = {
            className: stylesheet.classNameFromKey(key),
            key: key,
            args: args,
        };
        if (!registration.className) {
            registration.className = stylesheet.getClassName(getDisplayName(rules));
            var rulesToInsert = [];
            for (var _a = 0, _b = rules.__order; _a < _b.length; _a++) {
                var selector = _b[_a];
                rulesToInsert.push(selector, serializeRuleEntries(options, rules[selector]));
            }
            registration.rulesToInsert = rulesToInsert;
        }
        return registration;
    }
    return undefined;
}
/**
 * Insert style to stylesheet.
 * @param registration Style registration.
 * @param specificityMultiplier Number of times classname selector is repeated in the css rule.
 * This is to increase css specificity in case it's needed. Default to 1.
 */
function applyRegistration(registration, specificityMultiplier) {
    if (specificityMultiplier === void 0) { specificityMultiplier = 1; }
    var stylesheet = _Stylesheet__WEBPACK_IMPORTED_MODULE_0__.Stylesheet.getInstance();
    var className = registration.className, key = registration.key, args = registration.args, rulesToInsert = registration.rulesToInsert;
    if (rulesToInsert) {
        // rulesToInsert is an ordered array of selector/rule pairs.
        for (var i = 0; i < rulesToInsert.length; i += 2) {
            var rules = rulesToInsert[i + 1];
            if (rules) {
                var selector = rulesToInsert[i];
                selector = selector.replace(/&/g, repeatString("." + registration.className, specificityMultiplier));
                // Insert. Note if a media query, we must close the query with a final bracket.
                var processedRule = selector + "{" + rules + "}" + (selector.indexOf('@') === 0 ? '}' : '');
                stylesheet.insertRule(processedRule);
            }
        }
        stylesheet.cacheClassName(className, key, args, rulesToInsert);
    }
}
function styleToClassName(options) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var registration = styleToRegistration.apply(void 0, (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__spreadArrays)([options], args));
    if (registration) {
        applyRegistration(registration, options.specificityMultiplier);
        return registration.className;
    }
    return '';
}
//# sourceMappingURL=styleToClassName.js.map

/***/ }),
/* 63 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tokenizeWithParentheses": () => (/* binding */ tokenizeWithParentheses)
/* harmony export */ });
/**
 * Split a string into tokens separated by whitespace, except all text within parentheses
 * is treated as a single token (whitespace is ignored within parentheses).
 *
 * Unlike String.split(' '), multiple consecutive space characters are collapsed and
 * removed from the returned array (including leading and trailing spaces).
 *
 * For example:
 * `tokenizeWithParentheses("3px calc(var(--x) / 2) 9px    0 ")`
 *   => `["3px", "calc(var(--x) / 2)", "9px", "0"]`
 *
 * @returns The array of tokens. Returns an empty array if the string was empty or contained only whitespace.
 */
function tokenizeWithParentheses(value) {
    var parts = [];
    var partStart = 0;
    var parens = 0;
    for (var i = 0; i < value.length; i++) {
        switch (value[i]) {
            case '(':
                parens++;
                break;
            case ')':
                if (parens) {
                    parens--;
                }
                break;
            case '\t':
            case ' ':
                if (!parens) {
                    // Add the new part if it's not an empty string
                    if (i > partStart) {
                        parts.push(value.substring(partStart, i));
                    }
                    partStart = i + 1;
                }
                break;
        }
    }
    // Add the last part
    if (partStart < value.length) {
        parts.push(value.substring(partStart));
    }
    return parts;
}
//# sourceMappingURL=tokenizeWithParentheses.js.map

/***/ }),
/* 64 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "kebabRules": () => (/* binding */ kebabRules)
/* harmony export */ });
var rules = {};
function kebabRules(rulePairs, index) {
    var rule = rulePairs[index];
    if (rule.charAt(0) !== '-') {
        rulePairs[index] = rules[rule] = rules[rule] || rule.replace(/([A-Z])/g, '-$1').toLowerCase();
    }
}
//# sourceMappingURL=kebabRules.js.map

/***/ }),
/* 65 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "provideUnits": () => (/* binding */ provideUnits)
/* harmony export */ });
var NON_PIXEL_NUMBER_PROPS = [
    'column-count',
    'font-weight',
    'flex',
    'flex-grow',
    'flex-shrink',
    'fill-opacity',
    'opacity',
    'order',
    'z-index',
    'zoom',
];
function provideUnits(rulePairs, index) {
    var name = rulePairs[index];
    var value = rulePairs[index + 1];
    if (typeof value === 'number') {
        var isNonPixelProp = NON_PIXEL_NUMBER_PROPS.indexOf(name) > -1;
        var isVariableOrPrefixed = name.indexOf('--') > -1;
        var unit = isNonPixelProp || isVariableOrPrefixed ? '' : 'px';
        rulePairs[index + 1] = "" + value + unit;
    }
}
//# sourceMappingURL=provideUnits.js.map

/***/ }),
/* 66 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rtlifyRules": () => (/* binding */ rtlifyRules)
/* harmony export */ });
var _a;
var LEFT = 'left';
var RIGHT = 'right';
var NO_FLIP = '@noflip';
var NAME_REPLACEMENTS = (_a = {},
    _a[LEFT] = RIGHT,
    _a[RIGHT] = LEFT,
    _a);
var VALUE_REPLACEMENTS = {
    'w-resize': 'e-resize',
    'sw-resize': 'se-resize',
    'nw-resize': 'ne-resize',
};
/**
 * RTLifies the rulePair in the array at the current index. This mutates the array for performance
 * reasons.
 */
function rtlifyRules(options, rulePairs, index) {
    if (options.rtl) {
        var name_1 = rulePairs[index];
        if (!name_1) {
            return;
        }
        var value = rulePairs[index + 1];
        if (typeof value === 'string' && value.indexOf(NO_FLIP) >= 0) {
            rulePairs[index + 1] = value.replace(/\s*(?:\/\*\s*)?\@noflip\b(?:\s*\*\/)?\s*?/g, '');
        }
        else if (name_1.indexOf(LEFT) >= 0) {
            rulePairs[index] = name_1.replace(LEFT, RIGHT);
        }
        else if (name_1.indexOf(RIGHT) >= 0) {
            rulePairs[index] = name_1.replace(RIGHT, LEFT);
        }
        else if (String(value).indexOf(LEFT) >= 0) {
            rulePairs[index + 1] = value.replace(LEFT, RIGHT);
        }
        else if (String(value).indexOf(RIGHT) >= 0) {
            rulePairs[index + 1] = value.replace(RIGHT, LEFT);
        }
        else if (NAME_REPLACEMENTS[name_1]) {
            rulePairs[index] = NAME_REPLACEMENTS[name_1];
        }
        else if (VALUE_REPLACEMENTS[value]) {
            rulePairs[index + 1] = VALUE_REPLACEMENTS[value];
        }
        else {
            switch (name_1) {
                case 'margin':
                case 'padding':
                    rulePairs[index + 1] = flipQuad(value);
                    break;
                case 'box-shadow':
                    rulePairs[index + 1] = negateNum(value, 0);
                    break;
            }
        }
    }
}
/**
 * Given a string value in a space delimited format (e.g. "1 2 3 4"), negates a particular value.
 */
function negateNum(value, partIndex) {
    var parts = value.split(' ');
    var numberVal = parseInt(parts[partIndex], 10);
    parts[0] = parts[0].replace(String(numberVal), String(numberVal * -1));
    return parts.join(' ');
}
/**
 * Given a string quad, flips the left and right values.
 */
function flipQuad(value) {
    if (typeof value === 'string') {
        var parts = value.split(' ');
        if (parts.length === 4) {
            return parts[0] + " " + parts[3] + " " + parts[2] + " " + parts[1];
        }
    }
    return value;
}
//# sourceMappingURL=rtlifyRules.js.map

/***/ }),
/* 67 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "prefixRules": () => (/* binding */ prefixRules)
/* harmony export */ });
/* harmony import */ var _getVendorSettings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68);

var autoPrefixNames = {
    'user-select': 1,
};
function prefixRules(rulePairs, index) {
    var vendorSettings = (0,_getVendorSettings__WEBPACK_IMPORTED_MODULE_0__.getVendorSettings)();
    var name = rulePairs[index];
    if (autoPrefixNames[name]) {
        var value = rulePairs[index + 1];
        if (autoPrefixNames[name]) {
            if (vendorSettings.isWebkit) {
                rulePairs.push('-webkit-' + name, value);
            }
            if (vendorSettings.isMoz) {
                rulePairs.push('-moz-' + name, value);
            }
            if (vendorSettings.isMs) {
                rulePairs.push('-ms-' + name, value);
            }
            if (vendorSettings.isOpera) {
                rulePairs.push('-o-' + name, value);
            }
        }
    }
}
//# sourceMappingURL=prefixRules.js.map

/***/ }),
/* 68 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getVendorSettings": () => (/* binding */ getVendorSettings),
/* harmony export */   "setVendorSettings": () => (/* binding */ setVendorSettings)
/* harmony export */ });
var _vendorSettings;
function getVendorSettings() {
    if (!_vendorSettings) {
        var doc = typeof document !== 'undefined' ? document : undefined;
        var nav = typeof navigator !== 'undefined' ? navigator : undefined;
        var userAgent = nav ? nav.userAgent.toLowerCase() : undefined;
        if (!doc) {
            _vendorSettings = {
                isWebkit: true,
                isMoz: true,
                isOpera: true,
                isMs: true,
            };
        }
        else {
            _vendorSettings = {
                isWebkit: !!(doc && 'WebkitAppearance' in doc.documentElement.style),
                isMoz: !!(userAgent && userAgent.indexOf('firefox') > -1),
                isOpera: !!(userAgent && userAgent.indexOf('opera') > -1),
                isMs: !!(nav && (/rv:11.0/i.test(nav.userAgent) || /Edge\/\d./i.test(navigator.userAgent))),
            };
        }
    }
    return _vendorSettings;
}
/**
 * Sets the vendor settings for prefixing and vendor specific operations.
 */
function setVendorSettings(vendorSettings) {
    _vendorSettings = vendorSettings;
}
//# sourceMappingURL=getVendorSettings.js.map

/***/ }),
/* 69 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useBoolean": () => (/* binding */ useBoolean)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _useConst__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70);


/**
 * Hook to store a value and generate callbacks for setting the value to true or false.
 * The identity of the callbacks will always stay the same.
 *
 * @param initialState - Initial value
 * @returns Array with the current value and an object containing the updater callbacks.
 */
function useBoolean(initialState) {
    var _a = react__WEBPACK_IMPORTED_MODULE_0__.useState(initialState), value = _a[0], setValue = _a[1];
    var setTrue = (0,_useConst__WEBPACK_IMPORTED_MODULE_1__.useConst)(function () { return function () {
        setValue(true);
    }; });
    var setFalse = (0,_useConst__WEBPACK_IMPORTED_MODULE_1__.useConst)(function () { return function () {
        setValue(false);
    }; });
    var toggle = (0,_useConst__WEBPACK_IMPORTED_MODULE_1__.useConst)(function () { return function () {
        setValue(function (currentValue) { return !currentValue; });
    }; });
    return [value, { setTrue: setTrue, setFalse: setFalse, toggle: toggle }];
}
//# sourceMappingURL=useBoolean.js.map

/***/ }),
/* 70 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useConst": () => (/* binding */ useConst)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

/**
 * Hook to initialize and return a constant value. Unlike `React.useMemo`, this is guaranteed to
 * always return the same value (and if the initializer is a function, only call it once).
 * This is similar to setting a private member in a class constructor.
 *
 * If the value should ever change based on dependencies, use `React.useMemo` instead.
 *
 * @param initialValue - Initial value, or function to get the initial value. Similar to `useState`,
 * only the value/function passed in the first time this is called is respected.
 * @returns The value. The identity of this value will always be the same.
 */
function useConst(initialValue) {
    // Use useRef to store the value because it's the least expensive built-in hook that works here
    // (we could also use `const [value] = React.useState(initialValue)` but that's more expensive
    // internally due to reducer handling which we don't need)
    var ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    if (ref.current === undefined) {
        // Box the value in an object so we can tell if it's initialized even if the initializer
        // returns/is undefined
        ref.current = {
            value: typeof initialValue === 'function' ? initialValue() : initialValue,
        };
    }
    return ref.current.value;
}
//# sourceMappingURL=useConst.js.map

/***/ }),
/* 71 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useId": () => (/* binding */ useId)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _fluentui_utilities_lib_getId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72);


/**
 * Hook to generate a unique ID in the global scope (spanning across duplicate copies of the same library).
 *
 * @param prefix - Optional prefix for the ID
 * @param providedId - Optional id provided by a parent component. Defaults to the provided value if present,
 *  without conditioning the hook call
 * @returns The ID
 */
function useId(prefix, providedId) {
    // getId should only be called once since it updates the global constant for the next ID value.
    // (While an extra update isn't likely to cause problems in practice, it's better to avoid it.)
    var ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(providedId);
    if (!ref.current) {
        ref.current = (0,_fluentui_utilities_lib_getId__WEBPACK_IMPORTED_MODULE_1__.getId)(prefix);
    }
    return ref.current;
}
//# sourceMappingURL=useId.js.map

/***/ }),
/* 72 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getId": () => (/* binding */ getId),
/* harmony export */   "resetIds": () => (/* binding */ resetIds)
/* harmony export */ });
/* harmony import */ var _dom_getWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);
/* harmony import */ var _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54);


// Initialize global window id.
var CURRENT_ID_PROPERTY = '__currentId__';
var DEFAULT_ID_STRING = 'id__';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
var _global = (0,_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__.getWindow)() || {};
if (_global[CURRENT_ID_PROPERTY] === undefined) {
    _global[CURRENT_ID_PROPERTY] = 0;
}
var _initializedStylesheetResets = false;
/**
 * Generates a unique id in the global scope (this spans across duplicate copies of the same library.)
 *
 * @public
 */
function getId(prefix) {
    if (!_initializedStylesheetResets) {
        // Configure ids to reset on stylesheet resets.
        var stylesheet = _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_1__.Stylesheet.getInstance();
        if (stylesheet && stylesheet.onReset) {
            stylesheet.onReset(resetIds);
        }
        _initializedStylesheetResets = true;
    }
    var index = _global[CURRENT_ID_PROPERTY]++;
    return (prefix === undefined ? DEFAULT_ID_STRING : prefix) + index;
}
/**
 * Resets id counter to an (optional) number.
 *
 * @public
 */
function resetIds(counter) {
    if (counter === void 0) { counter = 0; }
    _global[CURRENT_ID_PROPERTY] = counter;
}
//# sourceMappingURL=getId.js.map

/***/ }),
/* 73 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "baseElementEvents": () => (/* binding */ baseElementEvents),
/* harmony export */   "baseElementProperties": () => (/* binding */ baseElementProperties),
/* harmony export */   "htmlElementProperties": () => (/* binding */ htmlElementProperties),
/* harmony export */   "labelProperties": () => (/* binding */ labelProperties),
/* harmony export */   "audioProperties": () => (/* binding */ audioProperties),
/* harmony export */   "videoProperties": () => (/* binding */ videoProperties),
/* harmony export */   "olProperties": () => (/* binding */ olProperties),
/* harmony export */   "liProperties": () => (/* binding */ liProperties),
/* harmony export */   "anchorProperties": () => (/* binding */ anchorProperties),
/* harmony export */   "buttonProperties": () => (/* binding */ buttonProperties),
/* harmony export */   "inputProperties": () => (/* binding */ inputProperties),
/* harmony export */   "textAreaProperties": () => (/* binding */ textAreaProperties),
/* harmony export */   "selectProperties": () => (/* binding */ selectProperties),
/* harmony export */   "optionProperties": () => (/* binding */ optionProperties),
/* harmony export */   "tableProperties": () => (/* binding */ tableProperties),
/* harmony export */   "trProperties": () => (/* binding */ trProperties),
/* harmony export */   "thProperties": () => (/* binding */ thProperties),
/* harmony export */   "tdProperties": () => (/* binding */ tdProperties),
/* harmony export */   "colGroupProperties": () => (/* binding */ colGroupProperties),
/* harmony export */   "colProperties": () => (/* binding */ colProperties),
/* harmony export */   "formProperties": () => (/* binding */ formProperties),
/* harmony export */   "iframeProperties": () => (/* binding */ iframeProperties),
/* harmony export */   "imgProperties": () => (/* binding */ imgProperties),
/* harmony export */   "imageProperties": () => (/* binding */ imageProperties),
/* harmony export */   "divProperties": () => (/* binding */ divProperties),
/* harmony export */   "getNativeProps": () => (/* binding */ getNativeProps)
/* harmony export */ });
var toObjectMap = function () {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    var result = {};
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        var keys = Array.isArray(item) ? item : Object.keys(item);
        for (var _b = 0, keys_1 = keys; _b < keys_1.length; _b++) {
            var key = keys_1[_b];
            result[key] = 1;
        }
    }
    return result;
};
/**
 * An array of events that are allowed on every html element type.
 *
 * @public
 */
var baseElementEvents = toObjectMap([
    'onCopy',
    'onCut',
    'onPaste',
    'onCompositionEnd',
    'onCompositionStart',
    'onCompositionUpdate',
    'onFocus',
    'onFocusCapture',
    'onBlur',
    'onBlurCapture',
    'onChange',
    'onInput',
    'onSubmit',
    'onLoad',
    'onError',
    'onKeyDown',
    'onKeyDownCapture',
    'onKeyPress',
    'onKeyUp',
    'onAbort',
    'onCanPlay',
    'onCanPlayThrough',
    'onDurationChange',
    'onEmptied',
    'onEncrypted',
    'onEnded',
    'onLoadedData',
    'onLoadedMetadata',
    'onLoadStart',
    'onPause',
    'onPlay',
    'onPlaying',
    'onProgress',
    'onRateChange',
    'onSeeked',
    'onSeeking',
    'onStalled',
    'onSuspend',
    'onTimeUpdate',
    'onVolumeChange',
    'onWaiting',
    'onClick',
    'onClickCapture',
    'onContextMenu',
    'onDoubleClick',
    'onDrag',
    'onDragEnd',
    'onDragEnter',
    'onDragExit',
    'onDragLeave',
    'onDragOver',
    'onDragStart',
    'onDrop',
    'onMouseDown',
    'onMouseDownCapture',
    'onMouseEnter',
    'onMouseLeave',
    'onMouseMove',
    'onMouseOut',
    'onMouseOver',
    'onMouseUp',
    'onMouseUpCapture',
    'onSelect',
    'onTouchCancel',
    'onTouchEnd',
    'onTouchMove',
    'onTouchStart',
    'onScroll',
    'onWheel',
    'onPointerCancel',
    'onPointerDown',
    'onPointerEnter',
    'onPointerLeave',
    'onPointerMove',
    'onPointerOut',
    'onPointerOver',
    'onPointerUp',
    'onGotPointerCapture',
    'onLostPointerCapture',
]);
/**
 * An array of element attributes which are allowed on every html element type.
 *
 * @public
 */
var baseElementProperties = toObjectMap([
    'accessKey',
    'children',
    'className',
    'contentEditable',
    'dir',
    'draggable',
    'hidden',
    'htmlFor',
    'id',
    'lang',
    'ref',
    'role',
    'style',
    'tabIndex',
    'title',
    'translate',
    'spellCheck',
    'name',
]);
/**
 * An array of HTML element properties and events.
 *
 * @public
 */
var htmlElementProperties = toObjectMap(baseElementProperties, baseElementEvents);
/**
 * An array of LABEL tag properties and events.
 *
 * @public
 */
var labelProperties = toObjectMap(htmlElementProperties, [
    'form',
]);
/**
 * An array of AUDIO tag properties and events.

 * @public
 */
var audioProperties = toObjectMap(htmlElementProperties, [
    'height',
    'loop',
    'muted',
    'preload',
    'src',
    'width',
]);
/**
 * An array of VIDEO tag properties and events.
 *
 * @public
 */
var videoProperties = toObjectMap(audioProperties, [
    'poster',
]);
/**
 * An array of OL tag properties and events.
 *
 * @public
 */
var olProperties = toObjectMap(htmlElementProperties, [
    'start',
]);
/**
 * An array of LI tag properties and events.
 *
 * @public
 */
var liProperties = toObjectMap(htmlElementProperties, [
    'value',
]);
/**
 * An array of A tag properties and events.
 *
 * @public
 */
var anchorProperties = toObjectMap(htmlElementProperties, [
    'download',
    'href',
    'hrefLang',
    'media',
    'rel',
    'target',
    'type',
]);
/**
 * An array of BUTTON tag properties and events.
 *
 * @public
 */
var buttonProperties = toObjectMap(htmlElementProperties, [
    'autoFocus',
    'disabled',
    'form',
    'formAction',
    'formEncType',
    'formMethod',
    'formNoValidate',
    'formTarget',
    'type',
    'value',
]);
/**
 * An array of INPUT tag properties and events.
 *
 * @public
 */
var inputProperties = toObjectMap(buttonProperties, [
    'accept',
    'alt',
    'autoCapitalize',
    'autoComplete',
    'checked',
    'dirname',
    'form',
    'height',
    'inputMode',
    'list',
    'max',
    'maxLength',
    'min',
    'multiple',
    'pattern',
    'placeholder',
    'readOnly',
    'required',
    'src',
    'step',
    'size',
    'type',
    'value',
    'width',
]);
/**
 * An array of TEXTAREA tag properties and events.
 *
 * @public
 */
var textAreaProperties = toObjectMap(buttonProperties, [
    'autoCapitalize',
    'cols',
    'dirname',
    'form',
    'maxLength',
    'placeholder',
    'readOnly',
    'required',
    'rows',
    'wrap',
]);
/**
 * An array of SELECT tag properties and events.
 *
 * @public
 */
var selectProperties = toObjectMap(buttonProperties, [
    'form',
    'multiple',
    'required',
]);
var optionProperties = toObjectMap(htmlElementProperties, [
    'selected',
    'value',
]);
/**
 * An array of TABLE tag properties and events.
 *
 * @public
 */
var tableProperties = toObjectMap(htmlElementProperties, [
    'cellPadding',
    'cellSpacing',
]);
/**
 * An array of TR tag properties and events.
 *
 * @public
 */
var trProperties = htmlElementProperties;
/**
 * An array of TH tag properties and events.
 *
 * @public
 */
var thProperties = toObjectMap(htmlElementProperties, [
    'rowSpan',
    'scope',
]);
/**
 * An array of TD tag properties and events.
 *
 * @public
 */
var tdProperties = toObjectMap(htmlElementProperties, [
    'colSpan',
    'headers',
    'rowSpan',
    'scope',
]);
var colGroupProperties = toObjectMap(htmlElementProperties, [
    'span',
]);
var colProperties = toObjectMap(htmlElementProperties, [
    'span',
]);
/**
 * An array of FORM tag properties and events.
 *
 * @public
 */
var formProperties = toObjectMap(htmlElementProperties, [
    'acceptCharset',
    'action',
    'encType',
    'encType',
    'method',
    'noValidate',
    'target',
]);
/**
 * An array of IFRAME tag properties and events.
 *
 * @public
 */
var iframeProperties = toObjectMap(htmlElementProperties, [
    'allow',
    'allowFullScreen',
    'allowPaymentRequest',
    'allowTransparency',
    'csp',
    'height',
    'importance',
    'referrerPolicy',
    'sandbox',
    'src',
    'srcDoc',
    'width',
]);
/**
 * An array of IMAGE tag properties and events.
 *
 * @public
 */
var imgProperties = toObjectMap(htmlElementProperties, [
    'alt',
    'crossOrigin',
    'height',
    'src',
    'srcSet',
    'useMap',
    'width',
]);
/**
 * @deprecated Use imgProperties for img elements.
 */
var imageProperties = imgProperties;
/**
 * An array of DIV tag properties and events.
 *
 * @public
 */
var divProperties = htmlElementProperties;
/**
 * Gets native supported props for an html element provided the allowance set. Use one of the property
 * sets defined (divProperties, buttonPropertes, etc) to filter out supported properties from a given
 * props set. Note that all data- and aria- prefixed attributes will be allowed.
 * NOTE: getNativeProps should always be applied first when adding props to a react component. The
 * non-native props should be applied second. This will prevent getNativeProps from overriding your custom props.
 * For example, if props passed to getNativeProps has an onClick function and getNativeProps is added to
 * the component after an onClick function is added, then the getNativeProps onClick will override it.
 *
 * @public
 * @param props - The unfiltered input props
 * @param allowedPropsNames - The array or record of allowed prop names.
 * @returns The filtered props
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getNativeProps(
// eslint-disable-next-line @typescript-eslint/no-explicit-any
props, allowedPropNames, excludedPropNames) {
    // It'd be great to properly type this while allowing 'aria-` and 'data-' attributes like TypeScript does for
    // JSX attributes, but that ability is hardcoded into the TS compiler with no analog in TypeScript typings.
    // Then we'd be able to enforce props extends native props (including aria- and data- attributes), and then
    // return native props.
    // We should be able to do this once this PR is merged: https://github.com/microsoft/TypeScript/pull/26797
    var isArray = Array.isArray(allowedPropNames);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var result = {};
    var keys = Object.keys(props);
    for (var _i = 0, keys_2 = keys; _i < keys_2.length; _i++) {
        var key = keys_2[_i];
        var isNativeProp = (!isArray && allowedPropNames[key]) ||
            (isArray && allowedPropNames.indexOf(key) >= 0) ||
            key.indexOf('data-') === 0 ||
            key.indexOf('aria-') === 0;
        if (isNativeProp && (!excludedPropNames || (excludedPropNames === null || excludedPropNames === void 0 ? void 0 : excludedPropNames.indexOf(key)) === -1)) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            result[key] = props[key];
        }
    }
    return result;
}
//# sourceMappingURL=properties.js.map

/***/ }),
/* 74 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconButton": () => (/* binding */ IconButton)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _BaseButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(222);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(227);
/* harmony import */ var _IconButton_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(224);





/**
 * {@docCategory Button}
 */
var IconButton = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(IconButton, _super);
    function IconButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IconButton.prototype.render = function () {
        var _a = this.props, styles = _a.styles, theme = _a.theme;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_BaseButton__WEBPACK_IMPORTED_MODULE_2__.BaseButton, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, this.props, { variantClassName: "ms-Button--icon", styles: (0,_IconButton_styles__WEBPACK_IMPORTED_MODULE_3__.getStyles)(theme, styles), onRenderText: _Utilities__WEBPACK_IMPORTED_MODULE_4__.nullRender, onRenderDescription: _Utilities__WEBPACK_IMPORTED_MODULE_4__.nullRender })));
    };
    IconButton = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,_Utilities__WEBPACK_IMPORTED_MODULE_5__.customizable)('IconButton', ['theme', 'styles'], true)
    ], IconButton);
    return IconButton;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));

//# sourceMappingURL=IconButton.js.map

/***/ }),
/* 75 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseButton": () => (/* binding */ BaseButton)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(130);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(204);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(59);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(111);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(169);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(168);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(149);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(197);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(172);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(72);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(73);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(150);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(222);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(191);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(208);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(83);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(136);
/* harmony import */ var _common_DirectionalHint__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(139);
/* harmony import */ var _ContextualMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(137);
/* harmony import */ var _BaseButton_classNames__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(221);
/* harmony import */ var _SplitButton_SplitButton_classNames__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(223);
/* harmony import */ var _KeytipData__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(209);









var TouchIdleDelay = 500; /* ms */
var COMPONENT_NAME = 'BaseButton';
/**
 * {@docCategory Button}
 */
var BaseButton = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(BaseButton, _super);
    function BaseButton(props) {
        var _this = _super.call(this, props) || this;
        _this._buttonElement = react__WEBPACK_IMPORTED_MODULE_0__.createRef();
        _this._splitButtonContainer = react__WEBPACK_IMPORTED_MODULE_0__.createRef();
        _this._mergedRef = (0,_Utilities__WEBPACK_IMPORTED_MODULE_2__.createMergedRef)();
        _this._renderedVisibleMenu = false;
        _this._getMemoizedMenuButtonKeytipProps = (0,_Utilities__WEBPACK_IMPORTED_MODULE_3__.memoizeFunction)(function (keytipProps) {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, keytipProps), { hasMenu: true });
        });
        _this._onRenderIcon = function (buttonProps, defaultRender) {
            var iconProps = _this.props.iconProps;
            if (iconProps && (iconProps.iconName !== undefined || iconProps.imageProps)) {
                var className = iconProps.className, imageProps = iconProps.imageProps, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__rest)(iconProps, ["className", "imageProps"]);
                // If the styles prop is specified as part of iconProps, fall back to regular Icon as FontIcon and ImageIcon
                // do not have this prop.
                if (iconProps.styles) {
                    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon__WEBPACK_IMPORTED_MODULE_4__.Icon, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({ className: (0,_Utilities__WEBPACK_IMPORTED_MODULE_5__.css)(_this._classNames.icon, className), imageProps: imageProps }, rest));
                }
                if (iconProps.iconName) {
                    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon__WEBPACK_IMPORTED_MODULE_6__.FontIcon, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({ className: (0,_Utilities__WEBPACK_IMPORTED_MODULE_5__.css)(_this._classNames.icon, className) }, rest));
                }
                if (imageProps) {
                    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon__WEBPACK_IMPORTED_MODULE_7__.ImageIcon, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({ className: (0,_Utilities__WEBPACK_IMPORTED_MODULE_5__.css)(_this._classNames.icon, className), imageProps: imageProps }, rest));
                }
            }
            return null;
        };
        _this._onRenderTextContents = function () {
            var _a = _this.props, text = _a.text, children = _a.children, 
            // eslint-disable-next-line deprecation/deprecation
            _b = _a.secondaryText, 
            // eslint-disable-next-line deprecation/deprecation
            secondaryText = _b === void 0 ? _this.props.description : _b, _c = _a.onRenderText, onRenderText = _c === void 0 ? _this._onRenderText : _c, _d = _a.onRenderDescription, onRenderDescription = _d === void 0 ? _this._onRenderDescription : _d;
            if (text || typeof children === 'string' || secondaryText) {
                return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _this._classNames.textContainer },
                    onRenderText(_this.props, _this._onRenderText),
                    onRenderDescription(_this.props, _this._onRenderDescription)));
            }
            return [onRenderText(_this.props, _this._onRenderText), onRenderDescription(_this.props, _this._onRenderDescription)];
        };
        _this._onRenderText = function () {
            var text = _this.props.text;
            var children = _this.props.children;
            // For backwards compat, we should continue to take in the text content from children.
            if (text === undefined && typeof children === 'string') {
                text = children;
            }
            if (_this._hasText()) {
                return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { key: _this._labelId, className: _this._classNames.label, id: _this._labelId }, text));
            }
            return null;
        };
        _this._onRenderChildren = function () {
            var children = _this.props.children;
            // If children is just a string, either it or the text will be rendered via onRenderLabel
            // If children is another component, it will be rendered after text
            if (typeof children === 'string') {
                return null;
            }
            return children;
        };
        _this._onRenderDescription = function (props) {
            // eslint-disable-next-line deprecation/deprecation
            var _a = props.secondaryText, secondaryText = _a === void 0 ? _this.props.description : _a;
            // ms-Button-description is only shown when the button type is compound.
            // In other cases it will not be displayed.
            return secondaryText ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { key: _this._descriptionId, className: _this._classNames.description, id: _this._descriptionId }, secondaryText)) : null;
        };
        _this._onRenderAriaDescription = function () {
            var ariaDescription = _this.props.ariaDescription;
            // If ariaDescription is given, descriptionId will be assigned to ariaDescriptionSpan,
            // otherwise it will be assigned to descriptionSpan.
            return ariaDescription ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _this._classNames.screenReaderText, id: _this._ariaDescriptionId }, ariaDescription)) : null;
        };
        _this._onRenderMenuIcon = function (props) {
            var menuIconProps = _this.props.menuIconProps;
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icon__WEBPACK_IMPORTED_MODULE_6__.FontIcon, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({ iconName: "ChevronDown" }, menuIconProps, { className: _this._classNames.menuIcon }));
        };
        _this._onRenderMenu = function (menuProps) {
            var persistMenu = _this.props.persistMenu;
            var menuHidden = _this.state.menuHidden;
            var MenuType = _this.props.menuAs || _ContextualMenu__WEBPACK_IMPORTED_MODULE_8__.ContextualMenu;
            // the accessible menu label (accessible name) has a relationship to the button.
            // If the menu props do not specify an explicit value for aria-label or aria-labelledBy,
            // AND the button has text, we'll set the menu aria-labelledBy to the text element id.
            if (!menuProps.ariaLabel && !menuProps.labelElementId && _this._hasText()) {
                menuProps = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, menuProps), { labelElementId: _this._labelId });
            }
            return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(MenuType, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({ id: _this._labelId + '-menu', directionalHint: _common_DirectionalHint__WEBPACK_IMPORTED_MODULE_9__.DirectionalHint.bottomLeftEdge }, menuProps, { shouldFocusOnContainer: _this._menuShouldFocusOnContainer, shouldFocusOnMount: _this._menuShouldFocusOnMount, hidden: persistMenu ? menuHidden : undefined, className: (0,_Utilities__WEBPACK_IMPORTED_MODULE_5__.css)('ms-BaseButton-menuhost', menuProps.className), target: _this._isSplitButton ? _this._splitButtonContainer.current : _this._buttonElement.current, onDismiss: _this._onDismissMenu })));
        };
        _this._onDismissMenu = function (ev) {
            var menuProps = _this.props.menuProps;
            if (menuProps && menuProps.onDismiss) {
                menuProps.onDismiss(ev);
            }
            if (!ev || !ev.defaultPrevented) {
                _this._dismissMenu();
            }
        };
        _this._dismissMenu = function () {
            _this._menuShouldFocusOnMount = undefined;
            _this._menuShouldFocusOnContainer = undefined;
            _this.setState({ menuHidden: true });
        };
        _this._openMenu = function (shouldFocusOnContainer, shouldFocusOnMount) {
            if (shouldFocusOnMount === void 0) { shouldFocusOnMount = true; }
            if (_this.props.menuProps) {
                _this._menuShouldFocusOnContainer = shouldFocusOnContainer;
                _this._menuShouldFocusOnMount = shouldFocusOnMount;
                _this._renderedVisibleMenu = true;
                _this.setState({ menuHidden: false });
            }
        };
        _this._onToggleMenu = function (shouldFocusOnContainer) {
            var shouldFocusOnMount = true;
            if (_this.props.menuProps && _this.props.menuProps.shouldFocusOnMount === false) {
                shouldFocusOnMount = false;
            }
            _this.state.menuHidden ? _this._openMenu(shouldFocusOnContainer, shouldFocusOnMount) : _this._dismissMenu();
        };
        _this._onSplitContainerFocusCapture = function (ev) {
            var container = _this._splitButtonContainer.current;
            // If the target is coming from the portal we do not need to set focus on the container.
            if (!container || (ev.target && (0,_Utilities__WEBPACK_IMPORTED_MODULE_10__.portalContainsElement)(ev.target, container))) {
                return;
            }
            // We should never be able to focus the individual buttons in a split button. Focus
            // should always remain on the container.
            container.focus();
        };
        _this._onSplitButtonPrimaryClick = function (ev) {
            if (!_this.state.menuHidden) {
                _this._dismissMenu();
            }
            if (!_this._processingTouch && _this.props.onClick) {
                _this.props.onClick(ev);
            }
            else if (_this._processingTouch) {
                _this._onMenuClick(ev);
            }
        };
        _this._onKeyDown = function (ev) {
            // explicity cancelling event so click won't fire after this
            // eslint-disable-next-line deprecation/deprecation
            if (_this.props.disabled && (ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_11__.KeyCodes.enter || ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_11__.KeyCodes.space)) {
                ev.preventDefault();
                ev.stopPropagation();
            }
            else if (!_this.props.disabled) {
                if (_this.props.menuProps) {
                    _this._onMenuKeyDown(ev);
                }
                else if (_this.props.onKeyDown !== undefined) {
                    _this.props.onKeyDown(ev); // not cancelling event because it's not disabled
                }
            }
        };
        _this._onKeyUp = function (ev) {
            if (!_this.props.disabled && _this.props.onKeyUp !== undefined) {
                _this.props.onKeyUp(ev); // not cancelling event because it's not disabled
            }
        };
        _this._onKeyPress = function (ev) {
            if (!_this.props.disabled && _this.props.onKeyPress !== undefined) {
                _this.props.onKeyPress(ev); // not cancelling event because it's not disabled
            }
        };
        _this._onMouseUp = function (ev) {
            if (!_this.props.disabled && _this.props.onMouseUp !== undefined) {
                _this.props.onMouseUp(ev); // not cancelling event because it's not disabled
            }
        };
        _this._onMouseDown = function (ev) {
            if (!_this.props.disabled && _this.props.onMouseDown !== undefined) {
                _this.props.onMouseDown(ev); // not cancelling event because it's not disabled
            }
        };
        _this._onClick = function (ev) {
            if (!_this.props.disabled) {
                if (_this.props.menuProps) {
                    _this._onMenuClick(ev);
                }
                else if (_this.props.onClick !== undefined) {
                    _this.props.onClick(ev); // not cancelling event because it's not disabled
                }
            }
        };
        _this._onSplitButtonContainerKeyDown = function (ev) {
            // eslint-disable-next-line deprecation/deprecation
            if (ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_11__.KeyCodes.enter || ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_11__.KeyCodes.space) {
                if (_this._buttonElement.current) {
                    _this._buttonElement.current.click();
                    ev.preventDefault();
                    ev.stopPropagation();
                }
            }
            else {
                _this._onMenuKeyDown(ev);
            }
        };
        _this._onMenuKeyDown = function (ev) {
            if (_this.props.disabled) {
                return;
            }
            if (_this.props.onKeyDown) {
                _this.props.onKeyDown(ev);
            }
            // eslint-disable-next-line deprecation/deprecation
            var isUp = ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_11__.KeyCodes.up;
            // eslint-disable-next-line deprecation/deprecation
            var isDown = ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_11__.KeyCodes.down;
            if (!ev.defaultPrevented && _this._isValidMenuOpenKey(ev)) {
                var onMenuClick = _this.props.onMenuClick;
                if (onMenuClick) {
                    onMenuClick(ev, _this.props);
                }
                _this._onToggleMenu(false);
                ev.preventDefault();
                ev.stopPropagation();
            }
            // eslint-disable-next-line deprecation/deprecation
            if (ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_11__.KeyCodes.enter || ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_11__.KeyCodes.space) {
                // We manually set the focus visibility to true if opening via Enter or Space to account for the scenario where
                // a user clicks on the button, closes the menu and then opens it via keyboard. In this scenario our default logic
                // for setting focus visibility is not triggered since there is no keyboard navigation present beforehand.
                (0,_Utilities__WEBPACK_IMPORTED_MODULE_12__.setFocusVisibility)(true, ev.target);
            }
            if (!(ev.altKey || ev.metaKey) && (isUp || isDown)) {
                // Suppose a menu, with shouldFocusOnMount: false, is open, and user wants to keyboard to the menu items
                // We need to re-render the menu with shouldFocusOnMount as true.
                if (!_this.state.menuHidden && _this.props.menuProps) {
                    var currentShouldFocusOnMount = _this._menuShouldFocusOnMount !== undefined
                        ? _this._menuShouldFocusOnMount
                        : _this.props.menuProps.shouldFocusOnMount;
                    if (!currentShouldFocusOnMount) {
                        ev.preventDefault();
                        ev.stopPropagation();
                        _this._menuShouldFocusOnMount = true;
                        _this.forceUpdate();
                    }
                }
            }
        };
        _this._onTouchStart = function () {
            if (_this._isSplitButton &&
                _this._splitButtonContainer.current &&
                !('onpointerdown' in _this._splitButtonContainer.current)) {
                _this._handleTouchAndPointerEvent();
            }
        };
        _this._onMenuClick = function (ev) {
            var onMenuClick = _this.props.onMenuClick;
            if (onMenuClick) {
                onMenuClick(ev, _this.props);
            }
            if (!ev.defaultPrevented) {
                // When Edge + Narrator are used together (regardless of if the button is in a form or not), pressing
                // "Enter" fires this method and not _onMenuKeyDown. Checking ev.nativeEvent.detail differentiates
                // between a real click event and a keypress event (detail should be the number of mouse clicks).
                // ...Plot twist! For a real click event in IE 11, detail is always 0 (Edge sets it properly to 1).
                // So we also check the pointerType property, which both Edge and IE set to "mouse" for real clicks
                // and "" for pressing "Enter" with Narrator on.
                var shouldFocusOnContainer = ev.nativeEvent.detail !== 0 || ev.nativeEvent.pointerType === 'mouse';
                _this._onToggleMenu(shouldFocusOnContainer);
                ev.preventDefault();
                ev.stopPropagation();
            }
        };
        (0,_Utilities__WEBPACK_IMPORTED_MODULE_13__.initializeComponentRef)(_this);
        _this._async = new _Utilities__WEBPACK_IMPORTED_MODULE_14__.Async(_this);
        _this._events = new _Utilities__WEBPACK_IMPORTED_MODULE_15__.EventGroup(_this);
        (0,_Utilities__WEBPACK_IMPORTED_MODULE_16__.warnConditionallyRequiredProps)(COMPONENT_NAME, props, ['menuProps', 'onClick'], 'split', _this.props.split);
        (0,_Utilities__WEBPACK_IMPORTED_MODULE_17__.warnDeprecations)(COMPONENT_NAME, props, {
            rootProps: undefined,
            description: 'secondaryText',
            toggled: 'checked',
        });
        _this._labelId = (0,_Utilities__WEBPACK_IMPORTED_MODULE_18__.getId)();
        _this._descriptionId = (0,_Utilities__WEBPACK_IMPORTED_MODULE_18__.getId)();
        _this._ariaDescriptionId = (0,_Utilities__WEBPACK_IMPORTED_MODULE_18__.getId)();
        _this.state = {
            menuHidden: true,
        };
        return _this;
    }
    Object.defineProperty(BaseButton.prototype, "_isSplitButton", {
        get: function () {
            return !!this.props.menuProps && !!this.props.onClick && this.props.split === true;
        },
        enumerable: false,
        configurable: true
    });
    BaseButton.prototype.render = function () {
        var _a;
        var _b = this.props, ariaDescription = _b.ariaDescription, ariaLabel = _b.ariaLabel, ariaHidden = _b.ariaHidden, className = _b.className, disabled = _b.disabled, allowDisabledFocus = _b.allowDisabledFocus, primaryDisabled = _b.primaryDisabled, 
        // eslint-disable-next-line deprecation/deprecation
        _c = _b.secondaryText, 
        // eslint-disable-next-line deprecation/deprecation
        secondaryText = _c === void 0 ? this.props.description : _c, href = _b.href, iconProps = _b.iconProps, menuIconProps = _b.menuIconProps, styles = _b.styles, checked = _b.checked, variantClassName = _b.variantClassName, theme = _b.theme, toggle = _b.toggle, getClassNames = _b.getClassNames, role = _b.role;
        var menuHidden = this.state.menuHidden;
        // Button is disabled if the whole button (in case of splitButton is disabled) or if the primary action is disabled
        var isPrimaryButtonDisabled = disabled || primaryDisabled;
        this._classNames = getClassNames
            ? getClassNames(theme, className, variantClassName, iconProps && iconProps.className, menuIconProps && menuIconProps.className, isPrimaryButtonDisabled, checked, !menuHidden, !!this.props.menuProps, this.props.split, !!allowDisabledFocus)
            : (0,_BaseButton_classNames__WEBPACK_IMPORTED_MODULE_19__.getBaseButtonClassNames)(theme, styles, className, variantClassName, iconProps && iconProps.className, menuIconProps && menuIconProps.className, isPrimaryButtonDisabled, !!this.props.menuProps, checked, !menuHidden, this.props.split);
        var _d = this, _ariaDescriptionId = _d._ariaDescriptionId, _labelId = _d._labelId, _descriptionId = _d._descriptionId;
        // Anchor tag cannot be disabled hence in disabled state rendering
        // anchor button as normal button
        var renderAsAnchor = !isPrimaryButtonDisabled && !!href;
        var tag = renderAsAnchor ? 'a' : 'button';
        var nativeProps = (0,_Utilities__WEBPACK_IMPORTED_MODULE_20__.getNativeProps)(
        // eslint-disable-next-line deprecation/deprecation
        (0,_Utilities__WEBPACK_IMPORTED_MODULE_21__.assign)(renderAsAnchor ? {} : { type: 'button' }, this.props.rootProps, this.props), renderAsAnchor ? _Utilities__WEBPACK_IMPORTED_MODULE_20__.anchorProperties : _Utilities__WEBPACK_IMPORTED_MODULE_20__.buttonProperties, [
            'disabled',
        ]);
        // Check for ariaLabel passed in via Button props, and fall back to aria-label passed in via native props
        var resolvedAriaLabel = ariaLabel || nativeProps['aria-label'];
        // Check for ariaDescription, secondaryText or aria-describedby in the native props to determine source of
        // aria-describedby. Otherwise default to undefined so property does not appear in output.
        var ariaDescribedBy = undefined;
        if (ariaDescription) {
            ariaDescribedBy = _ariaDescriptionId;
        }
        else if (secondaryText && this.props.onRenderDescription !== _Utilities__WEBPACK_IMPORTED_MODULE_22__.nullRender) {
            // for buttons like CompoundButton with a valid onRenderDescription, we need to set an ariaDescribedBy
            // for buttons that do not render anything (via nullRender), we should not set an ariaDescribedBy
            ariaDescribedBy = _descriptionId;
        }
        else if (nativeProps['aria-describedby']) {
            ariaDescribedBy = nativeProps['aria-describedby'];
        }
        // If an explicit aria-labelledby is given, use that and we're done.
        // If any kind of description is given (which will end up as an aria-describedby attribute)
        // and no ariaLabel is specified, set the labelledby element.
        // Otherwise, the button is labeled implicitly by the descendent text on the button (if it exists).
        var ariaLabelledBy = undefined;
        if (nativeProps['aria-labelledby']) {
            ariaLabelledBy = nativeProps['aria-labelledby'];
        }
        else if (ariaDescribedBy && !resolvedAriaLabel) {
            ariaLabelledBy = this._hasText() ? _labelId : undefined;
        }
        var dataIsFocusable = this.props['data-is-focusable'] === false || (disabled && !allowDisabledFocus) || this._isSplitButton
            ? false
            : true;
        var isCheckboxTypeRole = role === 'menuitemcheckbox' || role === 'checkbox';
        // if isCheckboxTypeRole, always return a checked value.
        // Otherwise only return checked value if toggle is set to true.
        // This is because role="checkbox" always needs to have an aria-checked value
        // but our checked prop only sets aria-pressed if we mark the button as a toggle="true"
        var checkedOrPressedValue = isCheckboxTypeRole ? !!checked : toggle === true ? !!checked : undefined;
        var buttonProps = (0,_Utilities__WEBPACK_IMPORTED_MODULE_21__.assign)(nativeProps, (_a = {
                className: this._classNames.root,
                // eslint-disable-next-line deprecation/deprecation
                ref: this._mergedRef(this.props.elementRef, this._buttonElement),
                disabled: isPrimaryButtonDisabled && !allowDisabledFocus,
                onKeyDown: this._onKeyDown,
                onKeyPress: this._onKeyPress,
                onKeyUp: this._onKeyUp,
                onMouseDown: this._onMouseDown,
                onMouseUp: this._onMouseUp,
                onClick: this._onClick,
                'aria-label': resolvedAriaLabel,
                'aria-labelledby': ariaLabelledBy,
                'aria-describedby': ariaDescribedBy,
                'aria-disabled': isPrimaryButtonDisabled,
                'data-is-focusable': dataIsFocusable
            },
            // aria-pressed attribute should only be present for toggle buttons
            // aria-checked attribute should only be present for toggle buttons with checkbox type role
            _a[isCheckboxTypeRole ? 'aria-checked' : 'aria-pressed'] = checkedOrPressedValue,
            _a));
        if (ariaHidden) {
            buttonProps['aria-hidden'] = true;
        }
        if (this._isSplitButton) {
            return this._onRenderSplitButtonContent(tag, buttonProps);
        }
        else if (this.props.menuProps) {
            var _e = this.props.menuProps.id, id = _e === void 0 ? this._labelId + "-menu" : _e;
            (0,_Utilities__WEBPACK_IMPORTED_MODULE_21__.assign)(buttonProps, {
                'aria-expanded': !menuHidden,
                'aria-controls': !menuHidden ? id : null,
                'aria-haspopup': true,
            });
        }
        return this._onRenderContent(tag, buttonProps);
    };
    BaseButton.prototype.componentDidMount = function () {
        // For split buttons, touching anywhere in the button should drop the dropdown, which should contain the
        // primary action. This gives more hit target space for touch environments. We're setting the onpointerdown here,
        // because React does not support Pointer events yet.
        if (this._isSplitButton && this._splitButtonContainer.current) {
            if ('onpointerdown' in this._splitButtonContainer.current) {
                this._events.on(this._splitButtonContainer.current, 'pointerdown', this._onPointerDown, true);
            }
            if ('onpointerup' in this._splitButtonContainer.current && this.props.onPointerUp) {
                this._events.on(this._splitButtonContainer.current, 'pointerup', this.props.onPointerUp, true);
            }
        }
    };
    BaseButton.prototype.componentDidUpdate = function (prevProps, prevState) {
        // If Button's menu was closed, run onAfterMenuDismiss.
        if (this.props.onAfterMenuDismiss && !prevState.menuHidden && this.state.menuHidden) {
            this.props.onAfterMenuDismiss();
        }
    };
    BaseButton.prototype.componentWillUnmount = function () {
        this._async.dispose();
        this._events.dispose();
    };
    BaseButton.prototype.focus = function () {
        if (this._isSplitButton && this._splitButtonContainer.current) {
            (0,_Utilities__WEBPACK_IMPORTED_MODULE_12__.setFocusVisibility)(true);
            this._splitButtonContainer.current.focus();
        }
        else if (this._buttonElement.current) {
            (0,_Utilities__WEBPACK_IMPORTED_MODULE_12__.setFocusVisibility)(true);
            this._buttonElement.current.focus();
        }
    };
    BaseButton.prototype.dismissMenu = function () {
        this._dismissMenu();
    };
    BaseButton.prototype.openMenu = function (shouldFocusOnContainer, shouldFocusOnMount) {
        this._openMenu(shouldFocusOnContainer, shouldFocusOnMount);
    };
    BaseButton.prototype._onRenderContent = function (tag, buttonProps) {
        var _this = this;
        var props = this.props;
        var Tag = tag;
        var menuIconProps = props.menuIconProps, menuProps = props.menuProps, _a = props.onRenderIcon, onRenderIcon = _a === void 0 ? this._onRenderIcon : _a, _b = props.onRenderAriaDescription, onRenderAriaDescription = _b === void 0 ? this._onRenderAriaDescription : _b, _c = props.onRenderChildren, onRenderChildren = _c === void 0 ? this._onRenderChildren : _c, 
        // eslint-disable-next-line deprecation/deprecation
        _d = props.onRenderMenu, 
        // eslint-disable-next-line deprecation/deprecation
        onRenderMenu = _d === void 0 ? this._onRenderMenu : _d, _e = props.onRenderMenuIcon, onRenderMenuIcon = _e === void 0 ? this._onRenderMenuIcon : _e, disabled = props.disabled;
        var keytipProps = props.keytipProps;
        if (keytipProps && menuProps) {
            keytipProps = this._getMemoizedMenuButtonKeytipProps(keytipProps);
        }
        var Button = function (keytipAttributes) { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(Tag, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, buttonProps, keytipAttributes),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _this._classNames.flexContainer, "data-automationid": "splitbuttonprimary" },
                onRenderIcon(props, _this._onRenderIcon),
                _this._onRenderTextContents(),
                onRenderAriaDescription(props, _this._onRenderAriaDescription),
                onRenderChildren(props, _this._onRenderChildren),
                !_this._isSplitButton &&
                    (menuProps || menuIconProps || _this.props.onRenderMenuIcon) &&
                    onRenderMenuIcon(_this.props, _this._onRenderMenuIcon),
                menuProps &&
                    !menuProps.doNotLayer &&
                    _this._shouldRenderMenu() &&
                    onRenderMenu(menuProps, _this._onRenderMenu)))); };
        var Content = keytipProps ? (
        // If we're making a split button, we won't put the keytip here
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_KeytipData__WEBPACK_IMPORTED_MODULE_23__.KeytipData, { keytipProps: !this._isSplitButton ? keytipProps : undefined, ariaDescribedBy: buttonProps['aria-describedby'], disabled: disabled }, function (keytipAttributes) { return Button(keytipAttributes); })) : (Button());
        if (menuProps && menuProps.doNotLayer) {
            return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                Content,
                this._shouldRenderMenu() && onRenderMenu(menuProps, this._onRenderMenu)));
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
            Content,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Utilities__WEBPACK_IMPORTED_MODULE_24__.FocusRects, null)));
    };
    /**
     * Method to help determine if the menu's component tree should
     * be rendered. It takes into account whether the menu is expanded,
     * whether it is a persisted menu and whether it has been shown to the user.
     */
    BaseButton.prototype._shouldRenderMenu = function () {
        var menuHidden = this.state.menuHidden;
        // eslint-disable-next-line deprecation/deprecation
        var _a = this.props, persistMenu = _a.persistMenu, renderPersistedMenuHiddenOnMount = _a.renderPersistedMenuHiddenOnMount;
        if (!menuHidden) {
            // Always should render a menu when it is expanded
            return true;
        }
        else if (persistMenu && (this._renderedVisibleMenu || renderPersistedMenuHiddenOnMount)) {
            // _renderedVisibleMenu ensures that the first rendering of
            // the menu happens on-screen, as edge's scrollbar calculations are off if done while hidden.
            return true;
        }
        return false;
    };
    BaseButton.prototype._hasText = function () {
        // _onRenderTextContents and _onRenderText do not perform the same checks. Below is parity with what _onRenderText
        // used to have before the refactor that introduced this function. _onRenderTextContents does not require props.
        // text to be undefined in order for props.children to be used as a fallback.
        // Purely a code maintainability/reuse issue, but logged as Issue #4979.
        return this.props.text !== null && (this.props.text !== undefined || typeof this.props.children === 'string');
    };
    BaseButton.prototype._onRenderSplitButtonContent = function (tag, buttonProps) {
        var _this = this;
        var _a = this.props, _b = _a.styles, styles = _b === void 0 ? {} : _b, disabled = _a.disabled, allowDisabledFocus = _a.allowDisabledFocus, checked = _a.checked, getSplitButtonClassNames = _a.getSplitButtonClassNames, primaryDisabled = _a.primaryDisabled, menuProps = _a.menuProps, toggle = _a.toggle, role = _a.role, primaryActionButtonProps = _a.primaryActionButtonProps;
        var keytipProps = this.props.keytipProps;
        var menuHidden = this.state.menuHidden;
        var classNames = getSplitButtonClassNames
            ? getSplitButtonClassNames(!!disabled, !menuHidden, !!checked, !!allowDisabledFocus)
            : styles && (0,_SplitButton_SplitButton_classNames__WEBPACK_IMPORTED_MODULE_25__.getSplitButtonClassNames)(styles, !!disabled, !menuHidden, !!checked, !!primaryDisabled);
        (0,_Utilities__WEBPACK_IMPORTED_MODULE_21__.assign)(buttonProps, {
            onClick: undefined,
            onPointerDown: undefined,
            onPointerUp: undefined,
            tabIndex: -1,
            'data-is-focusable': false,
        });
        if (keytipProps && menuProps) {
            keytipProps = this._getMemoizedMenuButtonKeytipProps(keytipProps);
        }
        var containerProps = (0,_Utilities__WEBPACK_IMPORTED_MODULE_20__.getNativeProps)(buttonProps, [], ['disabled']);
        // Add additional props to apply on primary action button
        if (primaryActionButtonProps) {
            (0,_Utilities__WEBPACK_IMPORTED_MODULE_21__.assign)(buttonProps, primaryActionButtonProps);
        }
        var SplitButton = function (keytipAttributes) { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, containerProps, { "data-ktp-target": keytipAttributes ? keytipAttributes['data-ktp-target'] : undefined, role: role ? role : 'button', "aria-disabled": disabled, "aria-haspopup": true, "aria-expanded": !menuHidden, "aria-pressed": toggle ? !!checked : undefined, "aria-describedby": (0,_Utilities__WEBPACK_IMPORTED_MODULE_26__.mergeAriaAttributeValues)(buttonProps['aria-describedby'], keytipAttributes ? keytipAttributes['aria-describedby'] : undefined), className: classNames && classNames.splitButtonContainer, onKeyDown: _this._onSplitButtonContainerKeyDown, onTouchStart: _this._onTouchStart, ref: _this._splitButtonContainer, "data-is-focusable": true, onClick: !disabled && !primaryDisabled ? _this._onSplitButtonPrimaryClick : undefined, tabIndex: (!disabled && !primaryDisabled) || allowDisabledFocus ? 0 : undefined, "aria-roledescription": buttonProps['aria-roledescription'], onFocusCapture: _this._onSplitContainerFocusCapture }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { style: { display: 'flex' } },
                _this._onRenderContent(tag, buttonProps),
                _this._onRenderSplitButtonMenuButton(classNames, keytipAttributes),
                _this._onRenderSplitButtonDivider(classNames)))); };
        return keytipProps ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_KeytipData__WEBPACK_IMPORTED_MODULE_23__.KeytipData, { keytipProps: keytipProps, disabled: disabled }, function (keytipAttributes) { return SplitButton(keytipAttributes); })) : (SplitButton());
    };
    BaseButton.prototype._onRenderSplitButtonDivider = function (classNames) {
        if (classNames && classNames.divider) {
            var onClick = function (ev) {
                ev.stopPropagation();
            };
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: classNames.divider, "aria-hidden": true, onClick: onClick });
        }
        return null;
    };
    BaseButton.prototype._onRenderSplitButtonMenuButton = function (classNames, keytipAttributes) {
        var _a = this.props, allowDisabledFocus = _a.allowDisabledFocus, checked = _a.checked, disabled = _a.disabled, splitButtonMenuProps = _a.splitButtonMenuProps, splitButtonAriaLabel = _a.splitButtonAriaLabel, primaryDisabled = _a.primaryDisabled;
        var menuHidden = this.state.menuHidden;
        var menuIconProps = this.props.menuIconProps;
        if (menuIconProps === undefined) {
            menuIconProps = {
                iconName: 'ChevronDown',
            };
        }
        var splitButtonProps = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, splitButtonMenuProps), { styles: classNames, checked: checked, disabled: disabled, allowDisabledFocus: allowDisabledFocus, onClick: this._onMenuClick, menuProps: undefined, iconProps: (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, menuIconProps), { className: this._classNames.menuIcon }), ariaLabel: splitButtonAriaLabel, 'aria-haspopup': true, 'aria-expanded': !menuHidden, 'data-is-focusable': false });
        // Add data-ktp-execute-target to the split button if the keytip is defined
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(BaseButton, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, splitButtonProps, { "data-ktp-execute-target": keytipAttributes ? keytipAttributes['data-ktp-execute-target'] : keytipAttributes, onMouseDown: this._onMouseDown, tabIndex: primaryDisabled && !allowDisabledFocus ? 0 : -1 })));
    };
    BaseButton.prototype._onPointerDown = function (ev) {
        var onPointerDown = this.props.onPointerDown;
        if (onPointerDown) {
            onPointerDown(ev);
        }
        if (ev.pointerType === 'touch') {
            this._handleTouchAndPointerEvent();
            ev.preventDefault();
            ev.stopImmediatePropagation();
        }
    };
    BaseButton.prototype._handleTouchAndPointerEvent = function () {
        var _this = this;
        // If we already have an existing timeout from a previous touch and pointer event
        // cancel that timeout so we can set a new one.
        if (this._lastTouchTimeoutId !== undefined) {
            this._async.clearTimeout(this._lastTouchTimeoutId);
            this._lastTouchTimeoutId = undefined;
        }
        this._processingTouch = true;
        this._lastTouchTimeoutId = this._async.setTimeout(function () {
            _this._processingTouch = false;
            _this._lastTouchTimeoutId = undefined;
            // Touch and pointer events don't focus the button naturally,
            // so adding an imperative focus call to guarantee this behavior.
            _this.focus();
        }, TouchIdleDelay);
    };
    /**
     * Returns if the user hits a valid keyboard key to open the menu
     * @param ev - the keyboard event
     * @returns True if user clicks on custom trigger key if enabled or alt + down arrow if not. False otherwise.
     */
    BaseButton.prototype._isValidMenuOpenKey = function (ev) {
        if (this.props.menuTriggerKeyCode) {
            // eslint-disable-next-line deprecation/deprecation
            return ev.which === this.props.menuTriggerKeyCode;
        }
        else if (this.props.menuProps) {
            // eslint-disable-next-line deprecation/deprecation
            return ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_11__.KeyCodes.down && (ev.altKey || ev.metaKey);
        }
        // Note: When enter is pressed, we will let the event continue to propagate
        // to trigger the onClick event on the button
        return false;
    };
    BaseButton.defaultProps = {
        baseClassName: 'ms-Button',
        styles: {},
        split: false,
    };
    return BaseButton;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));

//# sourceMappingURL=BaseButton.js.map

/***/ }),
/* 76 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMergedRef": () => (/* binding */ createMergedRef)
/* harmony export */ });
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77);

/**
 * Set up a ref resolver function given internal state managed for the ref.
 * @param local Set
 */
var createResolver = function (local) { return function (newValue) {
    for (var _i = 0, _a = local.refs; _i < _a.length; _i++) {
        var ref = _a[_i];
        if (typeof ref === 'function') {
            ref(newValue);
        }
        else if (ref) {
            // work around the immutability of the React.Ref type
            ref.current = newValue;
        }
    }
}; };
/**
 * Helper to merge refs from within class components.
 */
var createMergedRef = function (value) {
    var local = {
        refs: [],
    };
    return function () {
        var newRefs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newRefs[_i] = arguments[_i];
        }
        if (!local.resolver || !(0,_array__WEBPACK_IMPORTED_MODULE_0__.arraysEqual)(local.refs, newRefs)) {
            local.resolver = createResolver(local);
        }
        local.refs = newRefs;
        return local.resolver;
    };
};
//# sourceMappingURL=createMergedRef.js.map

/***/ }),
/* 77 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "findIndex": () => (/* binding */ findIndex),
/* harmony export */   "find": () => (/* binding */ find),
/* harmony export */   "createArray": () => (/* binding */ createArray),
/* harmony export */   "toMatrix": () => (/* binding */ toMatrix),
/* harmony export */   "removeIndex": () => (/* binding */ removeIndex),
/* harmony export */   "replaceElement": () => (/* binding */ replaceElement),
/* harmony export */   "addElementAtIndex": () => (/* binding */ addElementAtIndex),
/* harmony export */   "flatten": () => (/* binding */ flatten),
/* harmony export */   "arraysEqual": () => (/* binding */ arraysEqual)
/* harmony export */ });
/**
 * Helper to find the index of an item within an array, using a callback to
 * determine the match.
 *
 * @public
 * @param array - Array to search.
 * @param cb - Callback which returns true on matches.
 * @param fromIndex - Optional index to start from (defaults to 0)
 */
function findIndex(array, cb, fromIndex) {
    if (fromIndex === void 0) { fromIndex = 0; }
    var index = -1;
    for (var i = fromIndex; array && i < array.length; i++) {
        if (cb(array[i], i)) {
            index = i;
            break;
        }
    }
    return index;
}
/**
 * Helper to find the first item within an array that satisfies the callback.
 * @param array - Array to search
 * @param cb - Callback which returns true on matches
 */
function find(array, cb) {
    var index = findIndex(array, cb);
    if (index < 0) {
        return undefined;
    }
    return array[index];
}
/**
 * Creates an array of a given size and helper method to populate.
 *
 * @public
 * @param size - Size of array.
 * @param getItem - Callback to populate given cell index.
 */
function createArray(size, getItem) {
    var array = [];
    for (var i = 0; i < size; i++) {
        array.push(getItem(i));
    }
    return array;
}
/**
 * Convert the given array to a matrix with columnCount number
 * of columns.
 *
 * @public
 * @param items - The array to convert
 * @param columnCount - The number of columns for the resulting matrix
 * @returns A matrix of items
 */
function toMatrix(items, columnCount) {
    return items.reduce(function (rows, currentValue, index) {
        if (index % columnCount === 0) {
            rows.push([currentValue]);
        }
        else {
            rows[rows.length - 1].push(currentValue);
        }
        return rows;
    }, []);
}
/**
 * Given an array, it returns a new array that does not contain the item at the given index.
 * @param array - The array to operate on
 * @param index - The index of the element to remove
 */
function removeIndex(array, index) {
    return array.filter(function (_, i) { return index !== i; });
}
/**
 * Given an array, this function returns a new array where the element at a given index has been replaced.
 * @param array - The array to operate on
 * @param newElement - The element that will be placed in the new array
 * @param index - The index of the element that should be replaced
 */
function replaceElement(array, newElement, index) {
    var copy = array.slice();
    copy[index] = newElement;
    return copy;
}
/**
 * Given an array, this function returns a new array where an element has been inserted at the given index.
 * @param array - The array to operate on
 * @param index - The index where an element should be inserted
 * @param itemToAdd - The element to insert
 */
function addElementAtIndex(array, index, itemToAdd) {
    var copy = array.slice();
    copy.splice(index, 0, itemToAdd);
    return copy;
}
/**
 * Given an array where each element is of type T or T[], flatten it into an array of T
 * @param array - The array where each element can optionally also be an array
 */
function flatten(array) {
    var result = [];
    array.forEach(function (item) { return (result = result.concat(item)); });
    return result;
}
/**
 * Returns a boolean indicating if the two given arrays are equal in length and values.
 *
 * @param array1 - First array to compare
 * @param array2 - Second array to compare
 * @returns True if the arrays are the same length and have the same values in the same positions, false otherwise.
 */
function arraysEqual(array1, array2) {
    if (array1.length !== array2.length) {
        return false;
    }
    for (var i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }
    return true;
}
//# sourceMappingURL=array.js.map

/***/ }),
/* 78 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setMemoizeWeakMap": () => (/* binding */ setMemoizeWeakMap),
/* harmony export */   "resetMemoizations": () => (/* binding */ resetMemoizations),
/* harmony export */   "memoize": () => (/* binding */ memoize),
/* harmony export */   "memoizeFunction": () => (/* binding */ memoizeFunction),
/* harmony export */   "createMemoizer": () => (/* binding */ createMemoizer)
/* harmony export */ });
/* harmony import */ var _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54);

var _initializedStylesheetResets = false;
var _resetCounter = 0;
var _emptyObject = { empty: true };
var _dictionary = {};
var _weakMap = typeof WeakMap === 'undefined' ? null : WeakMap;
/**
 *  Test utility for providing a custom weakmap.
 *
 * @internal
 * */
function setMemoizeWeakMap(weakMap) {
    _weakMap = weakMap;
}
/**
 * Reset memoizations.
 */
function resetMemoizations() {
    _resetCounter++;
}
/**
 * Memoize decorator to be used on class methods. WARNING: the `this` reference
 * will be inaccessible within a memoized method, given that a cached method's `this`
 * would not be instance-specific.
 *
 * @public
 */
function memoize(_target, _key, descriptor) {
    // We bind to "null" to prevent people from inadvertently pulling values from "this",
    // rather than passing them in as input values which can be memoized.
    var fn = memoizeFunction(descriptor.value && descriptor.value.bind(null));
    return {
        configurable: true,
        get: function () {
            return fn;
        },
    };
}
/**
 * Memoizes a function; when you pass in the same parameters multiple times, it returns a cached result.
 * Be careful when passing in objects, you need to pass in the same INSTANCE for caching to work. Otherwise
 * it will grow the cache unnecessarily. Also avoid using default values that evaluate functions; passing in
 * undefined for a value and relying on a default function will execute it the first time, but will not
 * re-evaluate subsequent times which may have been unexpected.
 *
 * By default, the cache will reset after 100 permutations, to avoid abuse cases where the function is
 * unintendedly called with unique objects. Without a reset, the cache could grow infinitely, so we safeguard
 * by resetting. To override this behavior, pass a value of 0 to the maxCacheSize parameter.
 *
 * @public
 * @param cb - The function to memoize.
 * @param maxCacheSize - Max results to cache. If the cache exceeds this value, it will reset on the next call.
 * @param ignoreNullOrUndefinedResult - Flag to decide whether to cache callback result if it is undefined/null.
 * If the flag is set to true, the callback result is recomputed every time till the callback result is
 * not undefined/null for the first time, and then the non-undefined/null version gets cached.
 * @returns A memoized version of the function.
 */
function memoizeFunction(cb, maxCacheSize, ignoreNullOrUndefinedResult) {
    if (maxCacheSize === void 0) { maxCacheSize = 100; }
    if (ignoreNullOrUndefinedResult === void 0) { ignoreNullOrUndefinedResult = false; }
    // Avoid breaking scenarios which don't have weak map.
    if (!_weakMap) {
        return cb;
    }
    if (!_initializedStylesheetResets) {
        var stylesheet = _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_0__.Stylesheet.getInstance();
        if (stylesheet && stylesheet.onReset) {
            _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_0__.Stylesheet.getInstance().onReset(resetMemoizations);
        }
        _initializedStylesheetResets = true;
    }
    var rootNode;
    var cacheSize = 0;
    var localResetCounter = _resetCounter;
    return function memoizedFunction() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var currentNode = rootNode;
        if (rootNode === undefined ||
            localResetCounter !== _resetCounter ||
            (maxCacheSize > 0 && cacheSize > maxCacheSize)) {
            rootNode = _createNode();
            cacheSize = 0;
            localResetCounter = _resetCounter;
        }
        currentNode = rootNode;
        // Traverse the tree until we find the match.
        for (var i = 0; i < args.length; i++) {
            var arg = _normalizeArg(args[i]);
            if (!currentNode.map.has(arg)) {
                currentNode.map.set(arg, _createNode());
            }
            currentNode = currentNode.map.get(arg);
        }
        if (!currentNode.hasOwnProperty('value')) {
            currentNode.value = cb.apply(void 0, args);
            cacheSize++;
        }
        if (ignoreNullOrUndefinedResult && (currentNode.value === null || currentNode.value === undefined)) {
            currentNode.value = cb.apply(void 0, args);
        }
        return currentNode.value;
    };
}
/**
 * Creates a memoizer for a single-value function, backed by a WeakMap.
 * With a WeakMap, the memoized values are only kept as long as the source objects,
 * ensuring that there is no memory leak.
 *
 * This function assumes that the input values passed to the wrapped function will be
 * `function` or `object` types. To memoize functions which accept other inputs, use
 * `memoizeFunction`, which memoizes against arbitrary inputs using a lookup cache.
 *
 * @public
 */
function createMemoizer(getValue) {
    if (!_weakMap) {
        // Without a `WeakMap` implementation, memoization is not possible.
        return getValue;
    }
    var cache = new _weakMap();
    function memoizedGetValue(input) {
        if (!input || (typeof input !== 'function' && typeof input !== 'object')) {
            // A WeakMap can only be used to test against reference values, i.e. 'function' and 'object'.
            // All other inputs cannot be memoized against in this manner.
            return getValue(input);
        }
        if (cache.has(input)) {
            return cache.get(input);
        }
        var value = getValue(input);
        cache.set(input, value);
        return value;
    }
    return memoizedGetValue;
}
function _normalizeArg(val) {
    if (!val) {
        return _emptyObject;
    }
    else if (typeof val === 'object' || typeof val === 'function') {
        return val;
    }
    else if (!_dictionary[val]) {
        _dictionary[val] = { val: val };
    }
    return _dictionary[val];
}
function _createNode() {
    return {
        map: _weakMap ? new _weakMap() : null,
    };
}
//# sourceMappingURL=memoize.js.map

/***/ }),
/* 79 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Icon": () => (/* binding */ Icon)
/* harmony export */ });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);
/* harmony import */ var _Icon_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80);
/* harmony import */ var _Icon_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(131);



/**
 * Legacy Icon component which can be targeted by customization. It's recommended to use `FontIcon`
 * or `ImageIcon` instead, especially in scenarios where rendering performance is important.
 * {@docCategory Icon}
 */
var Icon = (0,_Utilities__WEBPACK_IMPORTED_MODULE_0__.styled)(_Icon_base__WEBPACK_IMPORTED_MODULE_1__.IconBase, _Icon_styles__WEBPACK_IMPORTED_MODULE_2__.getStyles, undefined, {
    scope: 'Icon',
}, true);
Icon.displayName = 'Icon';
//# sourceMappingURL=Icon.js.map

/***/ }),
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getIconContent": () => (/* binding */ getIconContent),
/* harmony export */   "FontIcon": () => (/* binding */ FontIcon),
/* harmony export */   "getFontIcon": () => (/* binding */ getFontIcon)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _Icon_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(131);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(130);
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84);





var getIconContent = (0,_Utilities__WEBPACK_IMPORTED_MODULE_1__.memoizeFunction)(function (iconName) {
    var _a = (0,_Styling__WEBPACK_IMPORTED_MODULE_2__.getIcon)(iconName) || {
        subset: {},
        code: undefined,
    }, code = _a.code, subset = _a.subset;
    if (!code) {
        return null;
    }
    return {
        children: code,
        iconClassName: subset.className,
        fontFamily: subset.fontFace && subset.fontFace.fontFamily,
        mergeImageProps: subset.mergeImageProps,
    };
}, undefined, true /*ignoreNullOrUndefinedResult */);
/**
 * Fast icon component which only supports font glyphs (not images) and can't be targeted by customizations.
 * To style the icon, use `className` or reference `ms-Icon` in CSS.
 * {@docCategory Icon}
 */
var FontIcon = function (props) {
    var iconName = props.iconName, className = props.className, _a = props.style, style = _a === void 0 ? {} : _a;
    var iconContent = getIconContent(iconName) || {};
    var iconClassName = iconContent.iconClassName, children = iconContent.children, fontFamily = iconContent.fontFamily, mergeImageProps = iconContent.mergeImageProps;
    var nativeProps = (0,_Utilities__WEBPACK_IMPORTED_MODULE_3__.getNativeProps)(props, _Utilities__WEBPACK_IMPORTED_MODULE_3__.htmlElementProperties);
    var accessibleName = props['aria-label'] || props.title;
    var containerProps = props['aria-label'] || props['aria-labelledby'] || props.title
        ? {
            role: mergeImageProps ? undefined : 'img',
        }
        : {
            'aria-hidden': true,
        };
    var finalChildren = children;
    if (mergeImageProps) {
        if (typeof children === 'object' && typeof children.props === 'object' && accessibleName) {
            finalChildren = react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(children, { alt: accessibleName });
        }
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({ "data-icon-name": iconName }, containerProps, nativeProps, (mergeImageProps
        ? {
            title: undefined,
            'aria-label': undefined,
        }
        : {}), { className: (0,_Utilities__WEBPACK_IMPORTED_MODULE_5__.css)(_Icon_styles__WEBPACK_IMPORTED_MODULE_6__.MS_ICON, _Icon_styles__WEBPACK_IMPORTED_MODULE_6__.classNames.root, iconClassName, !iconName && _Icon_styles__WEBPACK_IMPORTED_MODULE_6__.classNames.placeholder, className), 
        // Apply the font family this way to ensure it doesn't get overridden by Fabric Core ms-Icon styles
        // https://github.com/microsoft/fluentui/issues/10449
        style: (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({ fontFamily: fontFamily }, style) }), finalChildren));
};
/**
 * Memoized helper for rendering a FontIcon.
 * @param iconName - The name of the icon to use from the icon font.
 * @param className - Class name for styling the icon.
 * @param ariaLabel - Label for the icon for the benefit of screen readers.
 * {@docCategory Icon}
 */
var getFontIcon = (0,_Utilities__WEBPACK_IMPORTED_MODULE_1__.memoizeFunction)(function (iconName, className, ariaLabel) {
    return FontIcon({ iconName: iconName, className: className, 'aria-label': ariaLabel });
});
//# sourceMappingURL=FontIcon.js.map

/***/ }),
/* 84 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimationClassNames": () => (/* reexport safe */ _classNames_index__WEBPACK_IMPORTED_MODULE_0__.AnimationClassNames),
/* harmony export */   "ColorClassNames": () => (/* reexport safe */ _classNames_index__WEBPACK_IMPORTED_MODULE_0__.ColorClassNames),
/* harmony export */   "FontClassNames": () => (/* reexport safe */ _classNames_index__WEBPACK_IMPORTED_MODULE_0__.FontClassNames),
/* harmony export */   "AnimationStyles": () => (/* reexport safe */ _styles_index__WEBPACK_IMPORTED_MODULE_1__.AnimationStyles),
/* harmony export */   "AnimationVariables": () => (/* reexport safe */ _styles_index__WEBPACK_IMPORTED_MODULE_1__.AnimationVariables),
/* harmony export */   "DefaultEffects": () => (/* reexport safe */ _styles_index__WEBPACK_IMPORTED_MODULE_1__.DefaultEffects),
/* harmony export */   "DefaultFontStyles": () => (/* reexport safe */ _styles_index__WEBPACK_IMPORTED_MODULE_1__.DefaultFontStyles),
/* harmony export */   "DefaultPalette": () => (/* reexport safe */ _styles_index__WEBPACK_IMPORTED_MODULE_1__.DefaultPalette),
/* harmony export */   "EdgeChromiumHighContrastSelector": () => (/* reexport safe */ _styles_index__WEBPACK_IMPORTED_MODULE_1__.EdgeChromiumHighContrastSelector),
/* harmony export */   "FontSizes": () => (/* reexport safe */ _styles_index__WEBPACK_IMPORTED_MODULE_1__.FontSizes),
/* harmony export */   "FontWeights": () => (/* reexport safe */ _styles_index__WEBPACK_IMPORTED_MODULE_1__.FontWeights),
/* harmony export */   "HighContrastSelector": () => (/* reexport safe */ _styles_index__WEBPACK_IMPORTED_MODULE_1__.HighContrastSelector),
/* harmony export */   "HighContrastSelectorBlack": () => (/* reexport safe */ _styles_index__WEBPACK_IMPORTED_MODULE_1__.HighContrastSelectorBlack),
/* harmony export */   "HighContrastSelectorWhite": () => (/* reexport safe */ _styles_index__WEBPACK_IMPORTED_MODULE_1__.HighContrastSelectorWhite),
/* harmony export */   "IconFontSizes": () => (/* reexport safe */ _styles_index__WEBPACK_IMPORTED_MODULE_1__.IconFontSizes),
/* harmony export */   "PulsingBeaconAnimationStyles": () => (/* reexport safe */ _styles_index__WEBPACK_IMPORTED_MODULE_1__.PulsingBeaconAnimationStyles),
/* harmony export */   "ScreenWidthMaxLarge": () => (/* reexport safe */ _styles_index__WEBPACK_IMPORTED_MODULE_1__.ScreenWidthMaxLarge),
/* harmony export */   "ScreenWidthMaxMedium": () => (/* reexport safe */ _styles_index__WEBPACK_IMPORTED_MODULE_1__.ScreenWidthMaxMedium),
/* harmony export */   "ScreenWidthMaxSmall": () => (/* reexport safe */ _styles_index__WEBPACK_IMPORTED_MODULE_1__.ScreenWidthMaxSmall),
/* harmony export */   "ScreenWidthMaxXLarge": () => (/* reexport safe */ _styles_index__WEBPACK_IMPORTED_MODULE_1__.ScreenWidthMaxXLarge),
/* harmony export */   "ScreenWidthMaxXXLarge": () => (/* reexport safe */ _styles_index__WEBPACK_IMPORTED_MODULE_1__.ScreenWidthMaxXXLarge),
/* harmony export */   "ScreenWidthMinLarge": () => (/* reexport safe */ _styles_index__WEBPACK_IMPORTED_MODULE_1__.ScreenWidthMinLarge),
/* harmony export */   "ScreenWidthMinMedium": () => (/* reexport safe */ _styles_index__WEBPACK_IMPORTED_MODULE_1__.ScreenWidthMinMedium),
/* harmony export */   "ScreenWidthMinSmall": () => (/* reexport safe */ _styles_index__WEBPACK_IMPORTED_MODULE_1__.ScreenWidthMinSmall),
/* harmony export */   "ScreenWidthMinUhfMobile": () => (/* reexport safe */ _styles_index__WEBPACK_IMPORTED_MODULE_1__.ScreenWidthMinUhfMobile),
/* harmony export */   "ScreenWidthMinXLarge": () => (/* reexport safe */ _styles_index__WEBPACK_IMPORTED_MODULE_1__.ScreenWidthMinXLarge),
/* harmony export */   "ScreenWidthMinXXLarge": () => (/* reexport safe */ _styles_index__WEBPACK_IMPORTED_MODULE_1__.ScreenWidthMinXXLarge),
/* harmony export */   "ScreenWidthMinXXXLarge": () => (/* reexport safe */ _styles_index__WEBPACK_IMPORTED_MODULE_1__.ScreenWidthMinXXXLarge),
/* harmony export */   "ThemeSettingName": () => (/* reexport safe */ _styles_index__WEBPACK_IMPORTED_MODULE_1__.ThemeSettingName),
/* harmony export */   "ZIndexes": () => (/* reexport safe */ _styles_index__WEBPACK_IMPORTED_MODULE_1__.ZIndexes),
/* harmony export */   "createFontStyles": () => (/* reexport safe */ _styles_index__WEBPACK_IMPORTED_MODULE_1__.createFontStyles),
/* harmony export */   "createTheme": () => (/* reexport safe */ _styles_index__WEBPACK_IMPORTED_MODULE_1__.createTheme),
/* harmony export */   "focusClear": () => (/* reexport safe */ _styles_index__WEBPACK_IMPORTED_MODULE_1__.focusClear),
/* harmony export */   "getEdgeChromiumNoHighContrastAdjustSelector": () => (/* reexport safe */ _styles_index__WEBPACK_IMPORTED_MODULE_1__.getEdgeChromiumNoHighContrastAdjustSelector),
/* harmony export */   "getFadedOverflowStyle": () => (/* reexport safe */ _styles_index__WEBPACK_IMPORTED_MODULE_1__.getFadedOverflowStyle),
/* harmony export */   "getFocusOutlineStyle": () => (/* reexport safe */ _styles_index__WEBPACK_IMPORTED_MODULE_1__.getFocusOutlineStyle),
/* harmony export */   "getFocusStyle": () => (/* reexport safe */ _styles_index__WEBPACK_IMPORTED_MODULE_1__.getFocusStyle),
/* harmony export */   "getGlobalClassNames": () => (/* reexport safe */ _styles_index__WEBPACK_IMPORTED_MODULE_1__.getGlobalClassNames),
/* harmony export */   "getHighContrastNoAdjustStyle": () => (/* reexport safe */ _styles_index__WEBPACK_IMPORTED_MODULE_1__.getHighContrastNoAdjustStyle),
/* harmony export */   "getInputFocusStyle": () => (/* reexport safe */ _styles_index__WEBPACK_IMPORTED_MODULE_1__.getInputFocusStyle),
/* harmony export */   "getPlaceholderStyles": () => (/* reexport safe */ _styles_index__WEBPACK_IMPORTED_MODULE_1__.getPlaceholderStyles),
/* harmony export */   "getScreenSelector": () => (/* reexport safe */ _styles_index__WEBPACK_IMPORTED_MODULE_1__.getScreenSelector),
/* harmony export */   "getTheme": () => (/* reexport safe */ _styles_index__WEBPACK_IMPORTED_MODULE_1__.getTheme),
/* harmony export */   "getThemedContext": () => (/* reexport safe */ _styles_index__WEBPACK_IMPORTED_MODULE_1__.getThemedContext),
/* harmony export */   "hiddenContentStyle": () => (/* reexport safe */ _styles_index__WEBPACK_IMPORTED_MODULE_1__.hiddenContentStyle),
/* harmony export */   "loadTheme": () => (/* reexport safe */ _styles_index__WEBPACK_IMPORTED_MODULE_1__.loadTheme),
/* harmony export */   "noWrap": () => (/* reexport safe */ _styles_index__WEBPACK_IMPORTED_MODULE_1__.noWrap),
/* harmony export */   "normalize": () => (/* reexport safe */ _styles_index__WEBPACK_IMPORTED_MODULE_1__.normalize),
/* harmony export */   "registerDefaultFontFaces": () => (/* reexport safe */ _styles_index__WEBPACK_IMPORTED_MODULE_1__.registerDefaultFontFaces),
/* harmony export */   "registerOnThemeChangeCallback": () => (/* reexport safe */ _styles_index__WEBPACK_IMPORTED_MODULE_1__.registerOnThemeChangeCallback),
/* harmony export */   "removeOnThemeChangeCallback": () => (/* reexport safe */ _styles_index__WEBPACK_IMPORTED_MODULE_1__.removeOnThemeChangeCallback),
/* harmony export */   "buildClassMap": () => (/* reexport safe */ _utilities_index__WEBPACK_IMPORTED_MODULE_2__.buildClassMap),
/* harmony export */   "getIcon": () => (/* reexport safe */ _utilities_index__WEBPACK_IMPORTED_MODULE_2__.getIcon),
/* harmony export */   "getIconClassName": () => (/* reexport safe */ _utilities_index__WEBPACK_IMPORTED_MODULE_2__.getIconClassName),
/* harmony export */   "registerIconAlias": () => (/* reexport safe */ _utilities_index__WEBPACK_IMPORTED_MODULE_2__.registerIconAlias),
/* harmony export */   "registerIcons": () => (/* reexport safe */ _utilities_index__WEBPACK_IMPORTED_MODULE_2__.registerIcons),
/* harmony export */   "setIconOptions": () => (/* reexport safe */ _utilities_index__WEBPACK_IMPORTED_MODULE_2__.setIconOptions),
/* harmony export */   "unregisterIcons": () => (/* reexport safe */ _utilities_index__WEBPACK_IMPORTED_MODULE_2__.unregisterIcons),
/* harmony export */   "InjectionMode": () => (/* reexport safe */ _MergeStyles__WEBPACK_IMPORTED_MODULE_3__.InjectionMode),
/* harmony export */   "Stylesheet": () => (/* reexport safe */ _MergeStyles__WEBPACK_IMPORTED_MODULE_3__.Stylesheet),
/* harmony export */   "concatStyleSets": () => (/* reexport safe */ _MergeStyles__WEBPACK_IMPORTED_MODULE_3__.concatStyleSets),
/* harmony export */   "concatStyleSetsWithProps": () => (/* reexport safe */ _MergeStyles__WEBPACK_IMPORTED_MODULE_3__.concatStyleSetsWithProps),
/* harmony export */   "fontFace": () => (/* reexport safe */ _MergeStyles__WEBPACK_IMPORTED_MODULE_3__.fontFace),
/* harmony export */   "keyframes": () => (/* reexport safe */ _MergeStyles__WEBPACK_IMPORTED_MODULE_3__.keyframes),
/* harmony export */   "mergeStyleSets": () => (/* reexport safe */ _MergeStyles__WEBPACK_IMPORTED_MODULE_3__.mergeStyleSets),
/* harmony export */   "mergeStyles": () => (/* reexport safe */ _MergeStyles__WEBPACK_IMPORTED_MODULE_3__.mergeStyles)
/* harmony export */ });
/* harmony import */ var _classNames_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony import */ var _styles_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(109);
/* harmony import */ var _utilities_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(122);
/* harmony import */ var _MergeStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(126);
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(127);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(100);






// Ensure theme is initialized when this package is referenced.

(0,_styles_theme__WEBPACK_IMPORTED_MODULE_5__.initializeThemeInCustomizations)();
//# sourceMappingURL=index.js.map

/***/ }),
/* 85 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimationClassNames": () => (/* reexport safe */ _AnimationClassNames__WEBPACK_IMPORTED_MODULE_0__.AnimationClassNames),
/* harmony export */   "FontClassNames": () => (/* reexport safe */ _FontClassNames__WEBPACK_IMPORTED_MODULE_1__.FontClassNames),
/* harmony export */   "ColorClassNames": () => (/* reexport safe */ _ColorClassNames__WEBPACK_IMPORTED_MODULE_2__.ColorClassNames)
/* harmony export */ });
/* harmony import */ var _AnimationClassNames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86);
/* harmony import */ var _FontClassNames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91);
/* harmony import */ var _ColorClassNames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98);



//# sourceMappingURL=index.js.map

/***/ }),
/* 86 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimationClassNames": () => (/* binding */ AnimationClassNames)
/* harmony export */ });
/* harmony import */ var _utilities_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87);
/* harmony import */ var _styles_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89);


/**
 * {@docCategory AnimationClassNames}
 */
var AnimationClassNames = (0,_utilities_index__WEBPACK_IMPORTED_MODULE_0__.buildClassMap)(_styles_index__WEBPACK_IMPORTED_MODULE_1__.AnimationStyles);
//# sourceMappingURL=AnimationClassNames.js.map

/***/ }),
/* 87 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildClassMap": () => (/* binding */ buildClassMap)
/* harmony export */ });
/* harmony import */ var _MergeStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88);

/**
 * Builds a class names object from a given map.
 *
 * @param styles - Map of unprocessed styles.
 * @returns Map of property name to class name.
 */
function buildClassMap(styles) {
    var classes = {};
    var _loop_1 = function (styleName) {
        if (styles.hasOwnProperty(styleName)) {
            var className_1;
            Object.defineProperty(classes, styleName, {
                get: function () {
                    if (className_1 === undefined) {
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        className_1 = (0,_MergeStyles__WEBPACK_IMPORTED_MODULE_0__.mergeStyles)(styles[styleName]).toString();
                    }
                    return className_1;
                },
                enumerable: true,
                configurable: true,
            });
        }
    };
    for (var styleName in styles) {
        _loop_1(styleName);
    }
    return classes;
}
//# sourceMappingURL=buildClassMap.js.map

/***/ }),
/* 88 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mergeStyles": () => (/* binding */ mergeStyles),
/* harmony export */   "mergeCss": () => (/* binding */ mergeCss)
/* harmony export */ });
/* harmony import */ var _extractStyleParts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61);
/* harmony import */ var _StyleOptionsState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58);
/* harmony import */ var _styleToClassName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62);



/**
 * Concatenation helper, which can merge class names together. Skips over falsey values.
 *
 * @public
 */
function mergeStyles() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return mergeCss(args, (0,_StyleOptionsState__WEBPACK_IMPORTED_MODULE_0__.getStyleOptions)());
}
/**
 * Concatenation helper, which can merge class names together. Skips over falsey values.
 * Accepts a set of options that will be used when calculating styles.
 *
 * @public
 */
function mergeCss(args, options) {
    var styleArgs = args instanceof Array ? args : [args];
    var _a = (0,_extractStyleParts__WEBPACK_IMPORTED_MODULE_1__.extractStyleParts)(styleArgs), classes = _a.classes, objects = _a.objects;
    if (objects.length) {
        classes.push((0,_styleToClassName__WEBPACK_IMPORTED_MODULE_2__.styleToClassName)(options || {}, objects));
    }
    return classes.join(' ');
}
//# sourceMappingURL=mergeStyles.js.map

/***/ }),
/* 89 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimationVariables": () => (/* binding */ AnimationVariables),
/* harmony export */   "AnimationStyles": () => (/* binding */ AnimationStyles)
/* harmony export */ });
/* harmony import */ var _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90);

/* Register the keyframes */
var EASING_FUNCTION_1 = 'cubic-bezier(.1,.9,.2,1)';
var EASING_FUNCTION_2 = 'cubic-bezier(.1,.25,.75,.9)';
var DURATION_1 = '0.167s';
var DURATION_2 = '0.267s';
var DURATION_3 = '0.367s';
var DURATION_4 = '0.467s';
var FADE_IN = (0,_fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_0__.keyframes)({
    from: { opacity: 0 },
    to: { opacity: 1 },
});
var FADE_OUT = (0,_fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_0__.keyframes)({
    from: { opacity: 1 },
    to: { opacity: 0, visibility: 'hidden' },
});
var SLIDE_RIGHT_IN10 = _createSlideInX(-10);
var SLIDE_RIGHT_IN20 = _createSlideInX(-20);
var SLIDE_RIGHT_IN40 = _createSlideInX(-40);
var SLIDE_RIGHT_IN400 = _createSlideInX(-400);
var SLIDE_LEFT_IN10 = _createSlideInX(10);
var SLIDE_LEFT_IN20 = _createSlideInX(20);
var SLIDE_LEFT_IN40 = _createSlideInX(40);
var SLIDE_LEFT_IN400 = _createSlideInX(400);
var SLIDE_UP_IN10 = _createSlideInY(10);
var SLIDE_UP_IN20 = _createSlideInY(20);
var SLIDE_DOWN_IN10 = _createSlideInY(-10);
var SLIDE_DOWN_IN20 = _createSlideInY(-20);
var SLIDE_RIGHT_OUT10 = _createSlideOutX(10);
var SLIDE_RIGHT_OUT20 = _createSlideOutX(20);
var SLIDE_RIGHT_OUT40 = _createSlideOutX(40);
var SLIDE_RIGHT_OUT400 = _createSlideOutX(400);
var SLIDE_LEFT_OUT10 = _createSlideOutX(-10);
var SLIDE_LEFT_OUT20 = _createSlideOutX(-20);
var SLIDE_LEFT_OUT40 = _createSlideOutX(-40);
var SLIDE_LEFT_OUT400 = _createSlideOutX(-400);
var SLIDE_UP_OUT10 = _createSlideOutY(-10);
var SLIDE_UP_OUT20 = _createSlideOutY(-20);
var SLIDE_DOWN_OUT10 = _createSlideOutY(10);
var SLIDE_DOWN_OUT20 = _createSlideOutY(20);
var SCALE_UP100 = (0,_fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_0__.keyframes)({
    from: { transform: 'scale3d(.98,.98,1)' },
    to: { transform: 'scale3d(1,1,1)' },
});
var SCALE_DOWN98 = (0,_fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_0__.keyframes)({
    from: { transform: 'scale3d(1,1,1)' },
    to: { transform: 'scale3d(.98,.98,1)' },
});
var SCALE_DOWN100 = (0,_fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_0__.keyframes)({
    from: { transform: 'scale3d(1.03,1.03,1)' },
    to: { transform: 'scale3d(1,1,1)' },
});
var SCALE_UP103 = (0,_fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_0__.keyframes)({
    from: { transform: 'scale3d(1,1,1)' },
    to: { transform: 'scale3d(1.03,1.03,1)' },
});
var ROTATE90 = (0,_fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_0__.keyframes)({
    from: { transform: 'rotateZ(0deg)' },
    to: { transform: 'rotateZ(90deg)' },
});
var ROTATE_N90 = (0,_fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_0__.keyframes)({
    from: { transform: 'rotateZ(0deg)' },
    to: { transform: 'rotateZ(-90deg)' },
});
/**
 * Exporting raw duraction values and easing functions to be used in custom animations
 */
var AnimationVariables = {
    easeFunction1: EASING_FUNCTION_1,
    easeFunction2: EASING_FUNCTION_2,
    durationValue1: DURATION_1,
    durationValue2: DURATION_2,
    durationValue3: DURATION_3,
    durationValue4: DURATION_4,
};
/**
 * All Fabric standard animations, exposed as json objects referencing predefined
 * keyframes. These objects can be mixed in with other class definitions.
 */
var AnimationStyles = {
    slideRightIn10: _createAnimation(FADE_IN + "," + SLIDE_RIGHT_IN10, DURATION_3, EASING_FUNCTION_1),
    slideRightIn20: _createAnimation(FADE_IN + "," + SLIDE_RIGHT_IN20, DURATION_3, EASING_FUNCTION_1),
    slideRightIn40: _createAnimation(FADE_IN + "," + SLIDE_RIGHT_IN40, DURATION_3, EASING_FUNCTION_1),
    slideRightIn400: _createAnimation(FADE_IN + "," + SLIDE_RIGHT_IN400, DURATION_3, EASING_FUNCTION_1),
    slideLeftIn10: _createAnimation(FADE_IN + "," + SLIDE_LEFT_IN10, DURATION_3, EASING_FUNCTION_1),
    slideLeftIn20: _createAnimation(FADE_IN + "," + SLIDE_LEFT_IN20, DURATION_3, EASING_FUNCTION_1),
    slideLeftIn40: _createAnimation(FADE_IN + "," + SLIDE_LEFT_IN40, DURATION_3, EASING_FUNCTION_1),
    slideLeftIn400: _createAnimation(FADE_IN + "," + SLIDE_LEFT_IN400, DURATION_3, EASING_FUNCTION_1),
    slideUpIn10: _createAnimation(FADE_IN + "," + SLIDE_UP_IN10, DURATION_3, EASING_FUNCTION_1),
    slideUpIn20: _createAnimation(FADE_IN + "," + SLIDE_UP_IN20, DURATION_3, EASING_FUNCTION_1),
    slideDownIn10: _createAnimation(FADE_IN + "," + SLIDE_DOWN_IN10, DURATION_3, EASING_FUNCTION_1),
    slideDownIn20: _createAnimation(FADE_IN + "," + SLIDE_DOWN_IN20, DURATION_3, EASING_FUNCTION_1),
    slideRightOut10: _createAnimation(FADE_OUT + "," + SLIDE_RIGHT_OUT10, DURATION_3, EASING_FUNCTION_1),
    slideRightOut20: _createAnimation(FADE_OUT + "," + SLIDE_RIGHT_OUT20, DURATION_3, EASING_FUNCTION_1),
    slideRightOut40: _createAnimation(FADE_OUT + "," + SLIDE_RIGHT_OUT40, DURATION_3, EASING_FUNCTION_1),
    slideRightOut400: _createAnimation(FADE_OUT + "," + SLIDE_RIGHT_OUT400, DURATION_3, EASING_FUNCTION_1),
    slideLeftOut10: _createAnimation(FADE_OUT + "," + SLIDE_LEFT_OUT10, DURATION_3, EASING_FUNCTION_1),
    slideLeftOut20: _createAnimation(FADE_OUT + "," + SLIDE_LEFT_OUT20, DURATION_3, EASING_FUNCTION_1),
    slideLeftOut40: _createAnimation(FADE_OUT + "," + SLIDE_LEFT_OUT40, DURATION_3, EASING_FUNCTION_1),
    slideLeftOut400: _createAnimation(FADE_OUT + "," + SLIDE_LEFT_OUT400, DURATION_3, EASING_FUNCTION_1),
    slideUpOut10: _createAnimation(FADE_OUT + "," + SLIDE_UP_OUT10, DURATION_3, EASING_FUNCTION_1),
    slideUpOut20: _createAnimation(FADE_OUT + "," + SLIDE_UP_OUT20, DURATION_3, EASING_FUNCTION_1),
    slideDownOut10: _createAnimation(FADE_OUT + "," + SLIDE_DOWN_OUT10, DURATION_3, EASING_FUNCTION_1),
    slideDownOut20: _createAnimation(FADE_OUT + "," + SLIDE_DOWN_OUT20, DURATION_3, EASING_FUNCTION_1),
    scaleUpIn100: _createAnimation(FADE_IN + "," + SCALE_UP100, DURATION_3, EASING_FUNCTION_1),
    scaleDownIn100: _createAnimation(FADE_IN + "," + SCALE_DOWN100, DURATION_3, EASING_FUNCTION_1),
    scaleUpOut103: _createAnimation(FADE_OUT + "," + SCALE_UP103, DURATION_1, EASING_FUNCTION_2),
    scaleDownOut98: _createAnimation(FADE_OUT + "," + SCALE_DOWN98, DURATION_1, EASING_FUNCTION_2),
    fadeIn100: _createAnimation(FADE_IN, DURATION_1, EASING_FUNCTION_2),
    fadeIn200: _createAnimation(FADE_IN, DURATION_2, EASING_FUNCTION_2),
    fadeIn400: _createAnimation(FADE_IN, DURATION_3, EASING_FUNCTION_2),
    fadeIn500: _createAnimation(FADE_IN, DURATION_4, EASING_FUNCTION_2),
    fadeOut100: _createAnimation(FADE_OUT, DURATION_1, EASING_FUNCTION_2),
    fadeOut200: _createAnimation(FADE_OUT, DURATION_2, EASING_FUNCTION_2),
    fadeOut400: _createAnimation(FADE_OUT, DURATION_3, EASING_FUNCTION_2),
    fadeOut500: _createAnimation(FADE_OUT, DURATION_4, EASING_FUNCTION_2),
    rotate90deg: _createAnimation(ROTATE90, '0.1s', EASING_FUNCTION_2),
    rotateN90deg: _createAnimation(ROTATE_N90, '0.1s', EASING_FUNCTION_2),
};
function _createAnimation(animationName, animationDuration, animationTimingFunction) {
    return {
        animationName: animationName,
        animationDuration: animationDuration,
        animationTimingFunction: animationTimingFunction,
        animationFillMode: 'both',
    };
}
function _createSlideInX(fromX) {
    return (0,_fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_0__.keyframes)({
        from: { transform: "translate3d(" + fromX + "px,0,0)", pointerEvents: 'none' },
        to: { transform: "translate3d(0,0,0)", pointerEvents: 'auto' },
    });
}
function _createSlideInY(fromY) {
    return (0,_fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_0__.keyframes)({
        from: { transform: "translate3d(0," + fromY + "px,0)", pointerEvents: 'none' },
        to: { transform: "translate3d(0,0,0)", pointerEvents: 'auto' },
    });
}
function _createSlideOutX(toX) {
    return (0,_fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_0__.keyframes)({
        from: { transform: "translate3d(0,0,0)" },
        to: { transform: "translate3d(" + toX + "px,0,0)" },
    });
}
function _createSlideOutY(toY) {
    return (0,_fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_0__.keyframes)({
        from: { transform: "translate3d(0,0,0)" },
        to: { transform: "translate3d(0," + toY + "px,0)" },
    });
}
//# sourceMappingURL=AnimationStyles.js.map

/***/ }),
/* 90 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "keyframes": () => (/* binding */ keyframes)
/* harmony export */ });
/* harmony import */ var _StyleOptionsState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58);
/* harmony import */ var _Stylesheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54);
/* harmony import */ var _styleToClassName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62);



/**
 * Registers keyframe definitions.
 *
 * @public
 */
function keyframes(timeline) {
    var stylesheet = _Stylesheet__WEBPACK_IMPORTED_MODULE_0__.Stylesheet.getInstance();
    var name = stylesheet.getClassName();
    var rulesArray = [];
    for (var prop in timeline) {
        if (timeline.hasOwnProperty(prop)) {
            rulesArray.push(prop, '{', (0,_styleToClassName__WEBPACK_IMPORTED_MODULE_1__.serializeRuleEntries)((0,_StyleOptionsState__WEBPACK_IMPORTED_MODULE_2__.getStyleOptions)(), timeline[prop]), '}');
        }
    }
    var rules = rulesArray.join('');
    stylesheet.insertRule("@keyframes " + name + "{" + rules + "}", true);
    stylesheet.cacheClassName(name, rules, [], ['keyframes', rules]);
    return name;
}
//# sourceMappingURL=keyframes.js.map

/***/ }),
/* 91 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FontClassNames": () => (/* binding */ FontClassNames)
/* harmony export */ });
/* harmony import */ var _utilities_buildClassMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87);
/* harmony import */ var _styles_DefaultFontStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92);


/**
 * {@docCategory FontClassNames}
 */
var FontClassNames = (0,_utilities_buildClassMap__WEBPACK_IMPORTED_MODULE_0__.buildClassMap)(_styles_DefaultFontStyles__WEBPACK_IMPORTED_MODULE_1__.DefaultFontStyles);
//# sourceMappingURL=FontClassNames.js.map

/***/ }),
/* 92 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultFontStyles": () => (/* binding */ DefaultFontStyles),
/* harmony export */   "registerDefaultFontFaces": () => (/* binding */ registerDefaultFontFaces)
/* harmony export */ });
/* harmony import */ var _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97);
/* harmony import */ var _FluentFonts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94);
/* harmony import */ var _createFontStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93);
/* harmony import */ var _fluentui_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95);
/* harmony import */ var _fluentui_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47);




// Default urls.
var DefaultBaseUrl = 'https://static2.sharepointonline.com/files/fabric/assets';
// Standard font styling.
var DefaultFontStyles = (0,_createFontStyles__WEBPACK_IMPORTED_MODULE_0__.createFontStyles)((0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_1__.getLanguage)());
function _registerFontFace(fontFamily, url, fontWeight, localFontName) {
    fontFamily = "'" + fontFamily + "'";
    var localFontSrc = localFontName !== undefined ? "local('" + localFontName + "')," : '';
    (0,_fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_2__.fontFace)({
        fontFamily: fontFamily,
        src: localFontSrc + ("url('" + url + ".woff2') format('woff2'),") + ("url('" + url + ".woff') format('woff')"),
        fontWeight: fontWeight,
        fontStyle: 'normal',
        fontDisplay: 'swap',
    });
}
function _registerFontFaceSet(baseUrl, fontFamily, cdnFolder, cdnFontName, localFontName) {
    if (cdnFontName === void 0) { cdnFontName = 'segoeui'; }
    var urlBase = baseUrl + "/" + cdnFolder + "/" + cdnFontName;
    _registerFontFace(fontFamily, urlBase + '-light', _FluentFonts__WEBPACK_IMPORTED_MODULE_3__.FontWeights.light, localFontName && localFontName + ' Light');
    _registerFontFace(fontFamily, urlBase + '-semilight', _FluentFonts__WEBPACK_IMPORTED_MODULE_3__.FontWeights.semilight, localFontName && localFontName + ' SemiLight');
    _registerFontFace(fontFamily, urlBase + '-regular', _FluentFonts__WEBPACK_IMPORTED_MODULE_3__.FontWeights.regular, localFontName);
    _registerFontFace(fontFamily, urlBase + '-semibold', _FluentFonts__WEBPACK_IMPORTED_MODULE_3__.FontWeights.semibold, localFontName && localFontName + ' SemiBold');
    _registerFontFace(fontFamily, urlBase + '-bold', _FluentFonts__WEBPACK_IMPORTED_MODULE_3__.FontWeights.bold, localFontName && localFontName + ' Bold');
}
function registerDefaultFontFaces(baseUrl) {
    if (baseUrl) {
        var fontUrl = baseUrl + "/fonts";
        // Produce @font-face definitions for all supported web fonts.
        _registerFontFaceSet(fontUrl, _FluentFonts__WEBPACK_IMPORTED_MODULE_3__.LocalizedFontNames.Thai, 'leelawadeeui-thai', 'leelawadeeui');
        _registerFontFaceSet(fontUrl, _FluentFonts__WEBPACK_IMPORTED_MODULE_3__.LocalizedFontNames.Arabic, 'segoeui-arabic');
        _registerFontFaceSet(fontUrl, _FluentFonts__WEBPACK_IMPORTED_MODULE_3__.LocalizedFontNames.Cyrillic, 'segoeui-cyrillic');
        _registerFontFaceSet(fontUrl, _FluentFonts__WEBPACK_IMPORTED_MODULE_3__.LocalizedFontNames.EastEuropean, 'segoeui-easteuropean');
        _registerFontFaceSet(fontUrl, _FluentFonts__WEBPACK_IMPORTED_MODULE_3__.LocalizedFontNames.Greek, 'segoeui-greek');
        _registerFontFaceSet(fontUrl, _FluentFonts__WEBPACK_IMPORTED_MODULE_3__.LocalizedFontNames.Hebrew, 'segoeui-hebrew');
        _registerFontFaceSet(fontUrl, _FluentFonts__WEBPACK_IMPORTED_MODULE_3__.LocalizedFontNames.Vietnamese, 'segoeui-vietnamese');
        _registerFontFaceSet(fontUrl, _FluentFonts__WEBPACK_IMPORTED_MODULE_3__.LocalizedFontNames.WestEuropean, 'segoeui-westeuropean', 'segoeui', 'Segoe UI');
        _registerFontFaceSet(fontUrl, _FluentFonts__WEBPACK_IMPORTED_MODULE_3__.LocalizedFontFamilies.Selawik, 'selawik', 'selawik');
        _registerFontFaceSet(fontUrl, _FluentFonts__WEBPACK_IMPORTED_MODULE_3__.LocalizedFontNames.Armenian, 'segoeui-armenian');
        _registerFontFaceSet(fontUrl, _FluentFonts__WEBPACK_IMPORTED_MODULE_3__.LocalizedFontNames.Georgian, 'segoeui-georgian');
        // Leelawadee UI (Thai) does not have a 'light' weight, so we override
        // the font-face generated above to use the 'semilight' weight instead.
        _registerFontFace('Leelawadee UI Web', fontUrl + "/leelawadeeui-thai/leelawadeeui-semilight", _FluentFonts__WEBPACK_IMPORTED_MODULE_3__.FontWeights.light);
        // Leelawadee UI (Thai) does not have a 'semibold' weight, so we override
        // the font-face generated above to use the 'bold' weight instead.
        _registerFontFace('Leelawadee UI Web', fontUrl + "/leelawadeeui-thai/leelawadeeui-bold", _FluentFonts__WEBPACK_IMPORTED_MODULE_3__.FontWeights.semibold);
    }
}
/**
 * Reads the fontBaseUrl from window.FabricConfig.fontBaseUrl or falls back to a default.
 */
function _getFontBaseUrl() {
    var _a, _b;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var fabricConfig = (_a = (0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_4__.getWindow)()) === null || _a === void 0 ? void 0 : _a.FabricConfig;
    return (_b = fabricConfig === null || fabricConfig === void 0 ? void 0 : fabricConfig.fontBaseUrl) !== null && _b !== void 0 ? _b : DefaultBaseUrl;
}
/**
 * Register the font faces.
 */
registerDefaultFontFaces(_getFontBaseUrl());
//# sourceMappingURL=DefaultFontStyles.js.map

/***/ }),
/* 93 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFontStyles": () => (/* binding */ createFontStyles)
/* harmony export */ });
/* harmony import */ var _FluentFonts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94);

// Fallback fonts, if specified system or web fonts are unavailable.
var FontFamilyFallbacks = "'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif";
// By default, we favor system fonts for the default.
// All localized fonts use a web font and never use the system font.
var defaultFontFamily = "'Segoe UI', '" + _FluentFonts__WEBPACK_IMPORTED_MODULE_0__.LocalizedFontNames.WestEuropean + "'";
// Mapping of language prefix to to font family.
var LanguageToFontMap = {
    ar: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__.LocalizedFontFamilies.Arabic,
    bg: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__.LocalizedFontFamilies.Cyrillic,
    cs: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__.LocalizedFontFamilies.EastEuropean,
    el: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__.LocalizedFontFamilies.Greek,
    et: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__.LocalizedFontFamilies.EastEuropean,
    he: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__.LocalizedFontFamilies.Hebrew,
    hi: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__.LocalizedFontFamilies.Hindi,
    hr: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__.LocalizedFontFamilies.EastEuropean,
    hu: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__.LocalizedFontFamilies.EastEuropean,
    ja: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__.LocalizedFontFamilies.Japanese,
    kk: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__.LocalizedFontFamilies.EastEuropean,
    ko: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__.LocalizedFontFamilies.Korean,
    lt: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__.LocalizedFontFamilies.EastEuropean,
    lv: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__.LocalizedFontFamilies.EastEuropean,
    pl: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__.LocalizedFontFamilies.EastEuropean,
    ru: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__.LocalizedFontFamilies.Cyrillic,
    sk: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__.LocalizedFontFamilies.EastEuropean,
    'sr-latn': _FluentFonts__WEBPACK_IMPORTED_MODULE_0__.LocalizedFontFamilies.EastEuropean,
    th: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__.LocalizedFontFamilies.Thai,
    tr: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__.LocalizedFontFamilies.EastEuropean,
    uk: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__.LocalizedFontFamilies.Cyrillic,
    vi: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__.LocalizedFontFamilies.Vietnamese,
    'zh-hans': _FluentFonts__WEBPACK_IMPORTED_MODULE_0__.LocalizedFontFamilies.ChineseSimplified,
    'zh-hant': _FluentFonts__WEBPACK_IMPORTED_MODULE_0__.LocalizedFontFamilies.ChineseTraditional,
    hy: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__.LocalizedFontFamilies.Armenian,
    ka: _FluentFonts__WEBPACK_IMPORTED_MODULE_0__.LocalizedFontFamilies.Georgian,
};
function _fontFamilyWithFallbacks(fontFamily) {
    return fontFamily + ", " + FontFamilyFallbacks;
}
/**
 * If there is a localized font for this language, return that.
 * Returns undefined if there is no localized font for that language.
 */
function _getLocalizedFontFamily(language) {
    for (var lang in LanguageToFontMap) {
        if (LanguageToFontMap.hasOwnProperty(lang) && language && lang.indexOf(language) === 0) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return LanguageToFontMap[lang];
        }
    }
    return defaultFontFamily;
}
function _createFont(size, weight, fontFamily) {
    return {
        fontFamily: fontFamily,
        MozOsxFontSmoothing: 'grayscale',
        WebkitFontSmoothing: 'antialiased',
        fontSize: size,
        fontWeight: weight,
    };
}
function createFontStyles(localeCode) {
    var localizedFont = _getLocalizedFontFamily(localeCode);
    var fontFamilyWithFallback = _fontFamilyWithFallbacks(localizedFont);
    var fontStyles = {
        tiny: _createFont(_FluentFonts__WEBPACK_IMPORTED_MODULE_0__.FontSizes.mini, _FluentFonts__WEBPACK_IMPORTED_MODULE_0__.FontWeights.regular, fontFamilyWithFallback),
        xSmall: _createFont(_FluentFonts__WEBPACK_IMPORTED_MODULE_0__.FontSizes.xSmall, _FluentFonts__WEBPACK_IMPORTED_MODULE_0__.FontWeights.regular, fontFamilyWithFallback),
        small: _createFont(_FluentFonts__WEBPACK_IMPORTED_MODULE_0__.FontSizes.small, _FluentFonts__WEBPACK_IMPORTED_MODULE_0__.FontWeights.regular, fontFamilyWithFallback),
        smallPlus: _createFont(_FluentFonts__WEBPACK_IMPORTED_MODULE_0__.FontSizes.smallPlus, _FluentFonts__WEBPACK_IMPORTED_MODULE_0__.FontWeights.regular, fontFamilyWithFallback),
        medium: _createFont(_FluentFonts__WEBPACK_IMPORTED_MODULE_0__.FontSizes.medium, _FluentFonts__WEBPACK_IMPORTED_MODULE_0__.FontWeights.regular, fontFamilyWithFallback),
        mediumPlus: _createFont(_FluentFonts__WEBPACK_IMPORTED_MODULE_0__.FontSizes.mediumPlus, _FluentFonts__WEBPACK_IMPORTED_MODULE_0__.FontWeights.regular, fontFamilyWithFallback),
        large: _createFont(_FluentFonts__WEBPACK_IMPORTED_MODULE_0__.FontSizes.large, _FluentFonts__WEBPACK_IMPORTED_MODULE_0__.FontWeights.regular, fontFamilyWithFallback),
        xLarge: _createFont(_FluentFonts__WEBPACK_IMPORTED_MODULE_0__.FontSizes.xLarge, _FluentFonts__WEBPACK_IMPORTED_MODULE_0__.FontWeights.semibold, fontFamilyWithFallback),
        xLargePlus: _createFont(_FluentFonts__WEBPACK_IMPORTED_MODULE_0__.FontSizes.xLargePlus, _FluentFonts__WEBPACK_IMPORTED_MODULE_0__.FontWeights.semibold, fontFamilyWithFallback),
        xxLarge: _createFont(_FluentFonts__WEBPACK_IMPORTED_MODULE_0__.FontSizes.xxLarge, _FluentFonts__WEBPACK_IMPORTED_MODULE_0__.FontWeights.semibold, fontFamilyWithFallback),
        xxLargePlus: _createFont(_FluentFonts__WEBPACK_IMPORTED_MODULE_0__.FontSizes.xxLargePlus, _FluentFonts__WEBPACK_IMPORTED_MODULE_0__.FontWeights.semibold, fontFamilyWithFallback),
        superLarge: _createFont(_FluentFonts__WEBPACK_IMPORTED_MODULE_0__.FontSizes.superLarge, _FluentFonts__WEBPACK_IMPORTED_MODULE_0__.FontWeights.semibold, fontFamilyWithFallback),
        mega: _createFont(_FluentFonts__WEBPACK_IMPORTED_MODULE_0__.FontSizes.mega, _FluentFonts__WEBPACK_IMPORTED_MODULE_0__.FontWeights.semibold, fontFamilyWithFallback),
    };
    return fontStyles;
}
//# sourceMappingURL=createFontStyles.js.map

/***/ }),
/* 94 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalizedFontNames": () => (/* binding */ LocalizedFontNames),
/* harmony export */   "LocalizedFontFamilies": () => (/* binding */ LocalizedFontFamilies),
/* harmony export */   "FontSizes": () => (/* binding */ FontSizes),
/* harmony export */   "FontWeights": () => (/* binding */ FontWeights),
/* harmony export */   "IconFontSizes": () => (/* binding */ IconFontSizes)
/* harmony export */ });
// Font face names to be registered.
var LocalizedFontNames;
(function (LocalizedFontNames) {
    LocalizedFontNames.Arabic = 'Segoe UI Web (Arabic)';
    LocalizedFontNames.Cyrillic = 'Segoe UI Web (Cyrillic)';
    LocalizedFontNames.EastEuropean = 'Segoe UI Web (East European)';
    LocalizedFontNames.Greek = 'Segoe UI Web (Greek)';
    LocalizedFontNames.Hebrew = 'Segoe UI Web (Hebrew)';
    LocalizedFontNames.Thai = 'Leelawadee UI Web';
    LocalizedFontNames.Vietnamese = 'Segoe UI Web (Vietnamese)';
    LocalizedFontNames.WestEuropean = 'Segoe UI Web (West European)';
    LocalizedFontNames.Selawik = 'Selawik Web';
    LocalizedFontNames.Armenian = 'Segoe UI Web (Armenian)';
    LocalizedFontNames.Georgian = 'Segoe UI Web (Georgian)';
})(LocalizedFontNames || (LocalizedFontNames = {}));
// Font families with fallbacks, for the general regions.
var LocalizedFontFamilies;
(function (LocalizedFontFamilies) {
    LocalizedFontFamilies.Arabic = "'" + LocalizedFontNames.Arabic + "'";
    LocalizedFontFamilies.ChineseSimplified = "'Microsoft Yahei UI', Verdana, Simsun";
    LocalizedFontFamilies.ChineseTraditional = "'Microsoft Jhenghei UI', Pmingliu";
    LocalizedFontFamilies.Cyrillic = "'" + LocalizedFontNames.Cyrillic + "'";
    LocalizedFontFamilies.EastEuropean = "'" + LocalizedFontNames.EastEuropean + "'";
    LocalizedFontFamilies.Greek = "'" + LocalizedFontNames.Greek + "'";
    LocalizedFontFamilies.Hebrew = "'" + LocalizedFontNames.Hebrew + "'";
    LocalizedFontFamilies.Hindi = "'Nirmala UI'";
    LocalizedFontFamilies.Japanese = "'Yu Gothic UI', 'Meiryo UI', Meiryo, 'MS Pgothic', Osaka";
    LocalizedFontFamilies.Korean = "'Malgun Gothic', Gulim";
    LocalizedFontFamilies.Selawik = "'" + LocalizedFontNames.Selawik + "'";
    LocalizedFontFamilies.Thai = "'Leelawadee UI Web', 'Kmer UI'";
    LocalizedFontFamilies.Vietnamese = "'" + LocalizedFontNames.Vietnamese + "'";
    LocalizedFontFamilies.WestEuropean = "'" + LocalizedFontNames.WestEuropean + "'";
    LocalizedFontFamilies.Armenian = "'" + LocalizedFontNames.Armenian + "'";
    LocalizedFontFamilies.Georgian = "'" + LocalizedFontNames.Georgian + "'";
})(LocalizedFontFamilies || (LocalizedFontFamilies = {}));
// Standard font sizes.
var FontSizes;
(function (FontSizes) {
    FontSizes.size10 = '10px';
    FontSizes.size12 = '12px';
    FontSizes.size14 = '14px';
    FontSizes.size16 = '16px';
    FontSizes.size18 = '18px';
    FontSizes.size20 = '20px';
    FontSizes.size24 = '24px';
    FontSizes.size28 = '28px';
    FontSizes.size32 = '32px';
    FontSizes.size42 = '42px';
    FontSizes.size68 = '68px';
    FontSizes.mini = '10px';
    FontSizes.xSmall = '10px';
    FontSizes.small = '12px';
    FontSizes.smallPlus = '12px';
    FontSizes.medium = '14px';
    FontSizes.mediumPlus = '16px';
    FontSizes.icon = '16px';
    FontSizes.large = '18px';
    FontSizes.xLarge = '20px';
    FontSizes.xLargePlus = '24px';
    FontSizes.xxLarge = '28px';
    FontSizes.xxLargePlus = '32px';
    FontSizes.superLarge = '42px';
    FontSizes.mega = '68px';
})(FontSizes || (FontSizes = {}));
// Standard font weights.
var FontWeights;
(function (FontWeights) {
    FontWeights.light = 100;
    FontWeights.semilight = 300;
    FontWeights.regular = 400;
    FontWeights.semibold = 600;
    FontWeights.bold = 700;
})(FontWeights || (FontWeights = {}));
// Standard Icon Sizes.
var IconFontSizes;
(function (IconFontSizes) {
    IconFontSizes.xSmall = '10px';
    IconFontSizes.small = '12px';
    IconFontSizes.medium = '16px';
    IconFontSizes.large = '20px';
})(IconFontSizes || (IconFontSizes = {}));
//# sourceMappingURL=FluentFonts.js.map

/***/ }),
/* 95 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLanguage": () => (/* binding */ getLanguage),
/* harmony export */   "setLanguage": () => (/* binding */ setLanguage)
/* harmony export */ });
/* harmony import */ var _dom_getDocument__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57);
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96);
/* harmony import */ var _sessionStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56);



// Default to undefined so that we initialize on first read.
var _language;
var STORAGE_KEY = 'language';
/**
 * Gets the language set for the page.
 * @param persistenceType - Where to persist the value. Default is `sessionStorage` if available.
 */
function getLanguage(persistenceType) {
    if (persistenceType === void 0) { persistenceType = 'sessionStorage'; }
    if (_language === undefined) {
        var doc = (0,_dom_getDocument__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
        var savedLanguage = persistenceType === 'localStorage'
            ? _localStorage__WEBPACK_IMPORTED_MODULE_1__.getItem(STORAGE_KEY)
            : persistenceType === 'sessionStorage'
                ? _sessionStorage__WEBPACK_IMPORTED_MODULE_2__.getItem(STORAGE_KEY)
                : undefined;
        if (savedLanguage) {
            _language = savedLanguage;
        }
        if (_language === undefined && doc) {
            _language = doc.documentElement.getAttribute('lang');
        }
        if (_language === undefined) {
            _language = 'en';
        }
    }
    return _language;
}
function setLanguage(language, persistenceParam) {
    var doc = (0,_dom_getDocument__WEBPACK_IMPORTED_MODULE_0__.getDocument)();
    if (doc) {
        doc.documentElement.setAttribute('lang', language);
    }
    var persistenceType = persistenceParam === true ? 'none' : !persistenceParam ? 'sessionStorage' : persistenceParam;
    if (persistenceType === 'localStorage') {
        _localStorage__WEBPACK_IMPORTED_MODULE_1__.setItem(STORAGE_KEY, language);
    }
    else if (persistenceType === 'sessionStorage') {
        _sessionStorage__WEBPACK_IMPORTED_MODULE_2__.setItem(STORAGE_KEY, language);
    }
    _language = language;
}
//# sourceMappingURL=language.js.map

/***/ }),
/* 96 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getItem": () => (/* binding */ getItem),
/* harmony export */   "setItem": () => (/* binding */ setItem)
/* harmony export */ });
/* harmony import */ var _dom_getWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);

/**
 * Fetches an item from local storage without throwing an exception
 * @param key The key of the item to fetch from local storage
 */
function getItem(key) {
    var result = null;
    try {
        var win = (0,_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
        result = win ? win.localStorage.getItem(key) : null;
    }
    catch (e) {
        /* Eat the exception */
    }
    return result;
}
/**
 * Inserts an item into local storage without throwing an exception
 * @param key The key of the item to add to local storage
 * @param data The data to put into local storage
 */
function setItem(key, data) {
    try {
        var win = (0,_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
        win && win.localStorage.setItem(key, data);
    }
    catch (e) {
        /* Eat the exception */
    }
}
//# sourceMappingURL=localStorage.js.map

/***/ }),
/* 97 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fontFace": () => (/* binding */ fontFace)
/* harmony export */ });
/* harmony import */ var _StyleOptionsState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58);
/* harmony import */ var _Stylesheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54);
/* harmony import */ var _styleToClassName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62);



/**
 * Registers a font face.
 * @public
 */
function fontFace(font) {
    _Stylesheet__WEBPACK_IMPORTED_MODULE_0__.Stylesheet.getInstance().insertRule("@font-face{" + (0,_styleToClassName__WEBPACK_IMPORTED_MODULE_1__.serializeRuleEntries)((0,_StyleOptionsState__WEBPACK_IMPORTED_MODULE_2__.getStyleOptions)(), font) + "}", true);
}
//# sourceMappingURL=fontFace.js.map

/***/ }),
/* 98 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorClassNames": () => (/* binding */ ColorClassNames)
/* harmony export */ });
/* harmony import */ var _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88);
/* harmony import */ var _styles_DefaultPalette__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99);
/* harmony import */ var _styles_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(100);



var ColorClassNames = {};
for (var colorName in _styles_DefaultPalette__WEBPACK_IMPORTED_MODULE_0__.DefaultPalette) {
    if (_styles_DefaultPalette__WEBPACK_IMPORTED_MODULE_0__.DefaultPalette.hasOwnProperty(colorName)) {
        // Foreground color
        _defineGetter(ColorClassNames, colorName, '', false, 'color');
        // Hover color
        _defineGetter(ColorClassNames, colorName, 'Hover', true, 'color');
        // Background color
        _defineGetter(ColorClassNames, colorName, 'Background', false, 'background');
        // Background hover
        _defineGetter(ColorClassNames, colorName, 'BackgroundHover', true, 'background');
        // Border color
        _defineGetter(ColorClassNames, colorName, 'Border', false, 'borderColor');
        // Border hover color
        _defineGetter(ColorClassNames, colorName, 'BorderHover', true, 'borderColor');
    }
}
/**
 * Defines a getter for the given class configuration.
 */
function _defineGetter(obj, colorName, suffix, isHover, cssProperty) {
    Object.defineProperty(obj, colorName + suffix, {
        get: function () {
            var _a;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var style = (_a = {}, _a[cssProperty] = (0,_styles_index__WEBPACK_IMPORTED_MODULE_1__.getTheme)().palette[colorName], _a);
            return (0,_fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_2__.mergeStyles)(isHover ? { selectors: { ':hover': style } } : style).toString();
        },
        enumerable: true,
        configurable: true,
    });
}
//# sourceMappingURL=ColorClassNames.js.map

/***/ }),
/* 99 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultPalette": () => (/* binding */ DefaultPalette)
/* harmony export */ });
// When adding or removing a color, make sure you keep this consistent with IColorClassNames
// by adding the color variants.
var DefaultPalette = {
    themeDarker: '#004578',
    themeDark: '#005a9e',
    themeDarkAlt: '#106ebe',
    themePrimary: '#0078d4',
    themeSecondary: '#2b88d8',
    themeTertiary: '#71afe5',
    themeLight: '#c7e0f4',
    themeLighter: '#deecf9',
    themeLighterAlt: '#eff6fc',
    black: '#000000',
    blackTranslucent40: 'rgba(0,0,0,.4)',
    neutralDark: '#201f1e',
    neutralPrimary: '#323130',
    neutralPrimaryAlt: '#3b3a39',
    neutralSecondary: '#605e5c',
    neutralSecondaryAlt: '#8a8886',
    neutralTertiary: '#a19f9d',
    neutralTertiaryAlt: '#c8c6c4',
    neutralQuaternary: '#d2d0ce',
    neutralQuaternaryAlt: '#e1dfdd',
    neutralLight: '#edebe9',
    neutralLighter: '#f3f2f1',
    neutralLighterAlt: '#faf9f8',
    accent: '#0078d4',
    white: '#ffffff',
    whiteTranslucent40: 'rgba(255,255,255,.4)',
    yellowDark: '#d29200',
    yellow: '#ffb900',
    yellowLight: '#fff100',
    orange: '#d83b01',
    orangeLight: '#ea4300',
    orangeLighter: '#ff8c00',
    redDark: '#a4262c',
    red: '#e81123',
    magentaDark: '#5c005c',
    magenta: '#b4009e',
    magentaLight: '#e3008c',
    purpleDark: '#32145a',
    purple: '#5c2d91',
    purpleLight: '#b4a0ff',
    blueDark: '#002050',
    blueMid: '#00188f',
    blue: '#0078d4',
    blueLight: '#00bcf2',
    tealDark: '#004b50',
    teal: '#008272',
    tealLight: '#00b294',
    greenDark: '#004b1c',
    green: '#107c10',
    greenLight: '#bad80a',
};
//# sourceMappingURL=DefaultPalette.js.map

/***/ }),
/* 100 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTheme": () => (/* reexport safe */ _fluentui_theme_lib_createTheme__WEBPACK_IMPORTED_MODULE_1__.createTheme),
/* harmony export */   "ThemeSettingName": () => (/* binding */ ThemeSettingName),
/* harmony export */   "initializeThemeInCustomizations": () => (/* binding */ initializeThemeInCustomizations),
/* harmony export */   "getTheme": () => (/* binding */ getTheme),
/* harmony export */   "registerOnThemeChangeCallback": () => (/* binding */ registerOnThemeChangeCallback),
/* harmony export */   "removeOnThemeChangeCallback": () => (/* binding */ removeOnThemeChangeCallback),
/* harmony export */   "loadTheme": () => (/* binding */ loadTheme)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49);
/* harmony import */ var _fluentui_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45);
/* harmony import */ var _fluentui_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47);
/* harmony import */ var _microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(101);
/* harmony import */ var _fluentui_theme_lib_createTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(102);





var _theme = (0,_fluentui_theme_lib_createTheme__WEBPACK_IMPORTED_MODULE_1__.createTheme)({});
var _onThemeChangeCallbacks = [];
var ThemeSettingName = 'theme';
function initializeThemeInCustomizations() {
    var _a;
    var _b;
    if (!_fluentui_utilities__WEBPACK_IMPORTED_MODULE_2__.Customizations.getSettings([ThemeSettingName]).theme) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var win = (0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_3__.getWindow)();
        if ((_b = win === null || win === void 0 ? void 0 : win.FabricConfig) === null || _b === void 0 ? void 0 : _b.theme) {
            _theme = (0,_fluentui_theme_lib_createTheme__WEBPACK_IMPORTED_MODULE_1__.createTheme)(win.FabricConfig.theme);
        }
        // Set the default theme.
        _fluentui_utilities__WEBPACK_IMPORTED_MODULE_2__.Customizations.applySettings((_a = {}, _a[ThemeSettingName] = _theme, _a));
    }
}
initializeThemeInCustomizations();
/**
 * Gets the theme object
 * @param depComments - Whether to include deprecated tags as comments for deprecated slots.
 */
function getTheme(depComments) {
    if (depComments === void 0) { depComments = false; }
    if (depComments === true) {
        _theme = (0,_fluentui_theme_lib_createTheme__WEBPACK_IMPORTED_MODULE_1__.createTheme)({}, depComments);
    }
    return _theme;
}
/**
 * Registers a callback that gets called whenever the theme changes.
 * This should only be used when the component cannot automatically get theme changes through its state.
 * This will not register duplicate callbacks.
 */
function registerOnThemeChangeCallback(callback) {
    if (_onThemeChangeCallbacks.indexOf(callback) === -1) {
        _onThemeChangeCallbacks.push(callback);
    }
}
/**
 * See registerOnThemeChangeCallback().
 * Removes previously registered callbacks.
 */
function removeOnThemeChangeCallback(callback) {
    var i = _onThemeChangeCallbacks.indexOf(callback);
    if (i === -1) {
        return;
    }
    _onThemeChangeCallbacks.splice(i, 1);
}
/**
 * Applies the theme, while filling in missing slots.
 * @param theme - Partial theme object.
 * @param depComments - Whether to include deprecated tags as comments for deprecated slots.
 */
function loadTheme(theme, depComments) {
    var _a;
    if (depComments === void 0) { depComments = false; }
    _theme = (0,_fluentui_theme_lib_createTheme__WEBPACK_IMPORTED_MODULE_1__.createTheme)(theme, depComments);
    // Invoke the legacy method of theming the page as well.
    (0,_microsoft_load_themed_styles__WEBPACK_IMPORTED_MODULE_0__.loadTheme)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_4__.__assign)({}, _theme.palette), _theme.semanticColors), _theme.effects), _loadFonts(_theme)));
    _fluentui_utilities__WEBPACK_IMPORTED_MODULE_2__.Customizations.applySettings((_a = {}, _a[ThemeSettingName] = _theme, _a));
    _onThemeChangeCallbacks.forEach(function (callback) {
        try {
            callback(_theme);
        }
        catch (e) {
            // don't let a bad callback break everything else
        }
    });
    return _theme;
}
/**
 * Loads font variables into a JSON object.
 * @param theme - The theme object
 */
function _loadFonts(theme) {
    var lines = {};
    for (var _i = 0, _a = Object.keys(theme.fonts); _i < _a.length; _i++) {
        var fontName = _a[_i];
        var font = theme.fonts[fontName];
        for (var _b = 0, _c = Object.keys(font); _b < _c.length; _b++) {
            var propName = _c[_b];
            var name_1 = fontName + propName.charAt(0).toUpperCase() + propName.slice(1);
            var value = font[propName];
            if (propName === 'fontSize' && typeof value === 'number') {
                // if it's a number, convert it to px by default like our theming system does
                value = value + 'px';
            }
            lines[name_1] = value;
        }
    }
    return lines;
}
//# sourceMappingURL=theme.js.map

/***/ }),
/* 101 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadStyles": () => (/* binding */ loadStyles),
/* harmony export */   "configureLoadStyles": () => (/* binding */ configureLoadStyles),
/* harmony export */   "configureRunMode": () => (/* binding */ configureRunMode),
/* harmony export */   "flush": () => (/* binding */ flush),
/* harmony export */   "loadTheme": () => (/* binding */ loadTheme),
/* harmony export */   "clearStyles": () => (/* binding */ clearStyles),
/* harmony export */   "detokenize": () => (/* binding */ detokenize),
/* harmony export */   "splitStyles": () => (/* binding */ splitStyles)
/* harmony export */ });
// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Store the theming state in __themeState__ global scope for reuse in the case of duplicate
// load-themed-styles hosted on the page.
var _root = typeof window === 'undefined' ? __webpack_require__.g : window; // eslint-disable-line @typescript-eslint/no-explicit-any
// Nonce string to inject into script tag if one provided. This is used in CSP (Content Security Policy).
var _styleNonce = _root && _root.CSPSettings && _root.CSPSettings.nonce;
var _themeState = initializeThemeState();
/**
 * Matches theming tokens. For example, "[theme: themeSlotName, default: #FFF]" (including the quotes).
 */
var _themeTokenRegex = /[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g;
var now = function () {
    return typeof performance !== 'undefined' && !!performance.now ? performance.now() : Date.now();
};
function measure(func) {
    var start = now();
    func();
    var end = now();
    _themeState.perf.duration += end - start;
}
/**
 * initialize global state object
 */
function initializeThemeState() {
    var state = _root.__themeState__ || {
        theme: undefined,
        lastStyleElement: undefined,
        registeredStyles: []
    };
    if (!state.runState) {
        state = __assign(__assign({}, state), { perf: {
                count: 0,
                duration: 0
            }, runState: {
                flushTimer: 0,
                mode: 0 /* sync */,
                buffer: []
            } });
    }
    if (!state.registeredThemableStyles) {
        state = __assign(__assign({}, state), { registeredThemableStyles: [] });
    }
    _root.__themeState__ = state;
    return state;
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load
 * event is fired.
 * @param {string | ThemableArray} styles Themable style text to register.
 * @param {boolean} loadAsync When true, always load styles in async mode, irrespective of current sync mode.
 */
function loadStyles(styles, loadAsync) {
    if (loadAsync === void 0) { loadAsync = false; }
    measure(function () {
        var styleParts = Array.isArray(styles) ? styles : splitStyles(styles);
        var _a = _themeState.runState, mode = _a.mode, buffer = _a.buffer, flushTimer = _a.flushTimer;
        if (loadAsync || mode === 1 /* async */) {
            buffer.push(styleParts);
            if (!flushTimer) {
                _themeState.runState.flushTimer = asyncLoadStyles();
            }
        }
        else {
            applyThemableStyles(styleParts);
        }
    });
}
/**
 * Allows for customizable loadStyles logic. e.g. for server side rendering application
 * @param {(processedStyles: string, rawStyles?: string | ThemableArray) => void}
 * a loadStyles callback that gets called when styles are loaded or reloaded
 */
function configureLoadStyles(loadStylesFn) {
    _themeState.loadStyles = loadStylesFn;
}
/**
 * Configure run mode of load-themable-styles
 * @param mode load-themable-styles run mode, async or sync
 */
function configureRunMode(mode) {
    _themeState.runState.mode = mode;
}
/**
 * external code can call flush to synchronously force processing of currently buffered styles
 */
function flush() {
    measure(function () {
        var styleArrays = _themeState.runState.buffer.slice();
        _themeState.runState.buffer = [];
        var mergedStyleArray = [].concat.apply([], styleArrays);
        if (mergedStyleArray.length > 0) {
            applyThemableStyles(mergedStyleArray);
        }
    });
}
/**
 * register async loadStyles
 */
function asyncLoadStyles() {
    return setTimeout(function () {
        _themeState.runState.flushTimer = 0;
        flush();
    }, 0);
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load event
 * is fired.
 * @param {string} styleText Style to register.
 * @param {IStyleRecord} styleRecord Existing style record to re-apply.
 */
function applyThemableStyles(stylesArray, styleRecord) {
    if (_themeState.loadStyles) {
        _themeState.loadStyles(resolveThemableArray(stylesArray).styleString, stylesArray);
    }
    else {
        registerStyles(stylesArray);
    }
}
/**
 * Registers a set theme tokens to find and replace. If styles were already registered, they will be
 * replaced.
 * @param {theme} theme JSON object of theme tokens to values.
 */
function loadTheme(theme) {
    _themeState.theme = theme;
    // reload styles.
    reloadStyles();
}
/**
 * Clear already registered style elements and style records in theme_State object
 * @param option - specify which group of registered styles should be cleared.
 * Default to be both themable and non-themable styles will be cleared
 */
function clearStyles(option) {
    if (option === void 0) { option = 3 /* all */; }
    if (option === 3 /* all */ || option === 2 /* onlyNonThemable */) {
        clearStylesInternal(_themeState.registeredStyles);
        _themeState.registeredStyles = [];
    }
    if (option === 3 /* all */ || option === 1 /* onlyThemable */) {
        clearStylesInternal(_themeState.registeredThemableStyles);
        _themeState.registeredThemableStyles = [];
    }
}
function clearStylesInternal(records) {
    records.forEach(function (styleRecord) {
        var styleElement = styleRecord && styleRecord.styleElement;
        if (styleElement && styleElement.parentElement) {
            styleElement.parentElement.removeChild(styleElement);
        }
    });
}
/**
 * Reloads styles.
 */
function reloadStyles() {
    if (_themeState.theme) {
        var themableStyles = [];
        for (var _i = 0, _a = _themeState.registeredThemableStyles; _i < _a.length; _i++) {
            var styleRecord = _a[_i];
            themableStyles.push(styleRecord.themableStyle);
        }
        if (themableStyles.length > 0) {
            clearStyles(1 /* onlyThemable */);
            applyThemableStyles([].concat.apply([], themableStyles));
        }
    }
}
/**
 * Find theme tokens and replaces them with provided theme values.
 * @param {string} styles Tokenized styles to fix.
 */
function detokenize(styles) {
    if (styles) {
        styles = resolveThemableArray(splitStyles(styles)).styleString;
    }
    return styles;
}
/**
 * Resolves ThemingInstruction objects in an array and joins the result into a string.
 * @param {ThemableArray} splitStyleArray ThemableArray to resolve and join.
 */
function resolveThemableArray(splitStyleArray) {
    var theme = _themeState.theme;
    var themable = false;
    // Resolve the array of theming instructions to an array of strings.
    // Then join the array to produce the final CSS string.
    var resolvedArray = (splitStyleArray || []).map(function (currentValue) {
        var themeSlot = currentValue.theme;
        if (themeSlot) {
            themable = true;
            // A theming annotation. Resolve it.
            var themedValue = theme ? theme[themeSlot] : undefined;
            var defaultValue = currentValue.defaultValue || 'inherit';
            // Warn to console if we hit an unthemed value even when themes are provided, but only if "DEBUG" is true.
            // Allow the themedValue to be undefined to explicitly request the default value.
            if (theme &&
                !themedValue &&
                console &&
                !(themeSlot in theme) &&
                typeof DEBUG !== 'undefined' &&
                DEBUG) {
                console.warn("Theming value not provided for \"" + themeSlot + "\". Falling back to \"" + defaultValue + "\".");
            }
            return themedValue || defaultValue;
        }
        else {
            // A non-themable string. Preserve it.
            return currentValue.rawString;
        }
    });
    return {
        styleString: resolvedArray.join(''),
        themable: themable
    };
}
/**
 * Split tokenized CSS into an array of strings and theme specification objects
 * @param {string} styles Tokenized styles to split.
 */
function splitStyles(styles) {
    var result = [];
    if (styles) {
        var pos = 0; // Current position in styles.
        var tokenMatch = void 0;
        while ((tokenMatch = _themeTokenRegex.exec(styles))) {
            var matchIndex = tokenMatch.index;
            if (matchIndex > pos) {
                result.push({
                    rawString: styles.substring(pos, matchIndex)
                });
            }
            result.push({
                theme: tokenMatch[1],
                defaultValue: tokenMatch[2] // May be undefined
            });
            // index of the first character after the current match
            pos = _themeTokenRegex.lastIndex;
        }
        // Push the rest of the string after the last match.
        result.push({
            rawString: styles.substring(pos)
        });
    }
    return result;
}
/**
 * Registers a set of style text. If it is registered too early, we will register it when the
 * window.load event is fired.
 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
 * @param {IStyleRecord} styleRecord May specify a style Element to update.
 */
function registerStyles(styleArray) {
    if (typeof document === 'undefined') {
        return;
    }
    var head = document.getElementsByTagName('head')[0];
    var styleElement = document.createElement('style');
    var _a = resolveThemableArray(styleArray), styleString = _a.styleString, themable = _a.themable;
    styleElement.setAttribute('data-load-themed-styles', 'true');
    if (_styleNonce) {
        styleElement.setAttribute('nonce', _styleNonce);
    }
    styleElement.appendChild(document.createTextNode(styleString));
    _themeState.perf.count++;
    head.appendChild(styleElement);
    var ev = document.createEvent('HTMLEvents');
    ev.initEvent('styleinsert', true /* bubbleEvent */, false /* cancelable */);
    ev.args = {
        newStyle: styleElement
    };
    document.dispatchEvent(ev);
    var record = {
        styleElement: styleElement,
        themableStyle: styleArray
    };
    if (themable) {
        _themeState.registeredThemableStyles.push(record);
    }
    else {
        _themeState.registeredStyles.push(record);
    }
}
//# sourceMappingURL=index.js.map

/***/ }),
/* 102 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTheme": () => (/* binding */ createTheme)
/* harmony export */ });
/* harmony import */ var _colors_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99);
/* harmony import */ var _effects_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(103);
/* harmony import */ var _fonts_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92);
/* harmony import */ var _mergeThemes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(107);
/* harmony import */ var _spacing_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(105);
/* harmony import */ var _utilities_makeSemanticColors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(106);






/**
 * Creates a custom theme definition.
 * @param theme - Partial theme object.
 * @param depComments - Whether to include deprecated tags as comments for deprecated slots.
 */
function createTheme(theme, depComments) {
    if (theme === void 0) { theme = {}; }
    if (depComments === void 0) { depComments = false; }
    var isInverted = !!theme.isInverted;
    var baseTheme = {
        palette: _colors_index__WEBPACK_IMPORTED_MODULE_0__.DefaultPalette,
        effects: _effects_index__WEBPACK_IMPORTED_MODULE_1__.DefaultEffects,
        fonts: _fonts_index__WEBPACK_IMPORTED_MODULE_2__.DefaultFontStyles,
        spacing: _spacing_index__WEBPACK_IMPORTED_MODULE_3__.DefaultSpacing,
        isInverted: isInverted,
        disableGlobalClassNames: false,
        semanticColors: (0,_utilities_makeSemanticColors__WEBPACK_IMPORTED_MODULE_4__.makeSemanticColors)(_colors_index__WEBPACK_IMPORTED_MODULE_0__.DefaultPalette, _effects_index__WEBPACK_IMPORTED_MODULE_1__.DefaultEffects, undefined, isInverted, depComments),
        rtl: undefined,
    };
    return (0,_mergeThemes__WEBPACK_IMPORTED_MODULE_5__.mergeThemes)(baseTheme, theme);
}
//# sourceMappingURL=createTheme.js.map

/***/ }),
/* 103 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultEffects": () => (/* binding */ DefaultEffects)
/* harmony export */ });
/* harmony import */ var _FluentDepths__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(104);

var DefaultEffects = {
    elevation4: _FluentDepths__WEBPACK_IMPORTED_MODULE_0__.Depths.depth4,
    elevation8: _FluentDepths__WEBPACK_IMPORTED_MODULE_0__.Depths.depth8,
    elevation16: _FluentDepths__WEBPACK_IMPORTED_MODULE_0__.Depths.depth16,
    elevation64: _FluentDepths__WEBPACK_IMPORTED_MODULE_0__.Depths.depth64,
    roundedCorner2: '2px',
    roundedCorner4: '4px',
    roundedCorner6: '6px',
};
//# sourceMappingURL=DefaultEffects.js.map

/***/ }),
/* 104 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Depths": () => (/* binding */ Depths)
/* harmony export */ });
var Depths;
(function (Depths) {
    Depths.depth0 = '0 0 0 0 transparent';
    Depths.depth4 = '0 1.6px 3.6px 0 rgba(0, 0, 0, 0.132), 0 0.3px 0.9px 0 rgba(0, 0, 0, 0.108)';
    Depths.depth8 = '0 3.2px 7.2px 0 rgba(0, 0, 0, 0.132), 0 0.6px 1.8px 0 rgba(0, 0, 0, 0.108)';
    Depths.depth16 = '0 6.4px 14.4px 0 rgba(0, 0, 0, 0.132), 0 1.2px 3.6px 0 rgba(0, 0, 0, 0.108)';
    Depths.depth64 = '0 25.6px 57.6px 0 rgba(0, 0, 0, 0.22), 0 4.8px 14.4px 0 rgba(0, 0, 0, 0.18)';
})(Depths || (Depths = {}));
//# sourceMappingURL=FluentDepths.js.map

/***/ }),
/* 105 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultSpacing": () => (/* binding */ DefaultSpacing)
/* harmony export */ });
var DefaultSpacing = {
    s2: '4px',
    s1: '8px',
    m: '16px',
    l1: '20px',
    l2: '32px',
};
//# sourceMappingURL=DefaultSpacing.js.map

/***/ }),
/* 106 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeSemanticColors": () => (/* binding */ makeSemanticColors),
/* harmony export */   "getSemanticColors": () => (/* binding */ getSemanticColors)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49);

/** Generates all the semantic slot colors based on the theme so far
 * We'll use these as fallbacks for semantic slots that the passed in theme did not define.
 * The caller must still mix in the customized semantic slots at the end.
 */
function makeSemanticColors(p, e, s, isInverted, depComments) {
    if (depComments === void 0) { depComments = false; }
    var semanticColors = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({ primaryButtonBorder: 'transparent', errorText: !isInverted ? '#a4262c' : '#F1707B', messageText: !isInverted ? '#323130' : '#F3F2F1', messageLink: !isInverted ? '#005A9E' : '#6CB8F6', messageLinkHovered: !isInverted ? '#004578' : '#82C7FF', infoIcon: !isInverted ? '#605e5c' : '#C8C6C4', errorIcon: !isInverted ? '#A80000' : '#F1707B', blockingIcon: !isInverted ? '#FDE7E9' : '#442726', warningIcon: !isInverted ? '#797775' : '#C8C6C4', severeWarningIcon: !isInverted ? '#D83B01' : '#FCE100', successIcon: !isInverted ? '#107C10' : '#92C353', infoBackground: !isInverted ? '#f3f2f1' : '#323130', errorBackground: !isInverted ? '#FDE7E9' : '#442726', blockingBackground: !isInverted ? '#FDE7E9' : '#442726', warningBackground: !isInverted ? '#FFF4CE' : '#433519', severeWarningBackground: !isInverted ? '#FED9CC' : '#4F2A0F', successBackground: !isInverted ? '#DFF6DD' : '#393D1B', 
        // deprecated
        warningHighlight: !isInverted ? '#ffb900' : '#fff100', successText: !isInverted ? '#107C10' : '#92c353' }, s);
    var fullSemanticColors = getSemanticColors(p, e, semanticColors, isInverted);
    return _fixDeprecatedSlots(fullSemanticColors, depComments);
}
/**
 * Map partial platte and effects to partial semantic colors.
 */
function getSemanticColors(p, e, s, isInverted, depComments) {
    if (depComments === void 0) { depComments = false; }
    var result = {};
    // map palette
    var _a = p || {}, white = _a.white, black = _a.black, themePrimary = _a.themePrimary, themeDark = _a.themeDark, themeDarker = _a.themeDarker, themeDarkAlt = _a.themeDarkAlt, themeLighter = _a.themeLighter, neutralLight = _a.neutralLight, neutralLighter = _a.neutralLighter, neutralDark = _a.neutralDark, neutralQuaternary = _a.neutralQuaternary, neutralQuaternaryAlt = _a.neutralQuaternaryAlt, neutralPrimary = _a.neutralPrimary, neutralSecondary = _a.neutralSecondary, neutralSecondaryAlt = _a.neutralSecondaryAlt, neutralTertiary = _a.neutralTertiary, neutralTertiaryAlt = _a.neutralTertiaryAlt, neutralLighterAlt = _a.neutralLighterAlt, accent = _a.accent;
    if (white) {
        result.bodyBackground = white;
        result.bodyFrameBackground = white;
        result.accentButtonText = white;
        result.buttonBackground = white;
        result.primaryButtonText = white;
        result.primaryButtonTextHovered = white;
        result.primaryButtonTextPressed = white;
        result.inputBackground = white;
        result.inputForegroundChecked = white;
        result.listBackground = white;
        result.menuBackground = white;
        result.cardStandoutBackground = white;
    }
    if (black) {
        result.bodyTextChecked = black;
        result.buttonTextCheckedHovered = black;
    }
    if (themePrimary) {
        result.link = themePrimary;
        result.primaryButtonBackground = themePrimary;
        result.inputBackgroundChecked = themePrimary;
        result.inputIcon = themePrimary;
        result.inputFocusBorderAlt = themePrimary;
        result.menuIcon = themePrimary;
        result.menuHeader = themePrimary;
        result.accentButtonBackground = themePrimary;
    }
    if (themeDark) {
        result.primaryButtonBackgroundPressed = themeDark;
        result.inputBackgroundCheckedHovered = themeDark;
        result.inputIconHovered = themeDark;
    }
    if (themeDarker) {
        result.linkHovered = themeDarker;
    }
    if (themeDarkAlt) {
        result.primaryButtonBackgroundHovered = themeDarkAlt;
    }
    if (themeLighter) {
        result.inputPlaceholderBackgroundChecked = themeLighter;
    }
    if (neutralLight) {
        result.bodyBackgroundChecked = neutralLight;
        result.bodyFrameDivider = neutralLight;
        result.bodyDivider = neutralLight;
        result.variantBorder = neutralLight;
        result.buttonBackgroundCheckedHovered = neutralLight;
        result.buttonBackgroundPressed = neutralLight;
        result.listItemBackgroundChecked = neutralLight;
        result.listHeaderBackgroundPressed = neutralLight;
        result.menuItemBackgroundPressed = neutralLight;
        // eslint-disable-next-line deprecation/deprecation
        result.menuItemBackgroundChecked = neutralLight;
    }
    if (neutralLighter) {
        result.bodyBackgroundHovered = neutralLighter;
        result.buttonBackgroundHovered = neutralLighter;
        result.buttonBackgroundDisabled = neutralLighter;
        result.buttonBorderDisabled = neutralLighter;
        result.primaryButtonBackgroundDisabled = neutralLighter;
        result.disabledBackground = neutralLighter;
        result.listItemBackgroundHovered = neutralLighter;
        result.listHeaderBackgroundHovered = neutralLighter;
        result.menuItemBackgroundHovered = neutralLighter;
    }
    if (neutralQuaternary) {
        result.primaryButtonTextDisabled = neutralQuaternary;
        result.disabledSubtext = neutralQuaternary;
    }
    if (neutralQuaternaryAlt) {
        result.listItemBackgroundCheckedHovered = neutralQuaternaryAlt;
    }
    if (neutralTertiary) {
        result.disabledBodyText = neutralTertiary;
        result.variantBorderHovered = (s === null || s === void 0 ? void 0 : s.variantBorderHovered) || neutralTertiary;
        result.buttonTextDisabled = neutralTertiary;
        result.inputIconDisabled = neutralTertiary;
        result.disabledText = neutralTertiary;
    }
    if (neutralPrimary) {
        result.bodyText = neutralPrimary;
        result.actionLink = neutralPrimary;
        result.buttonText = neutralPrimary;
        result.inputBorderHovered = neutralPrimary;
        result.inputText = neutralPrimary;
        result.listText = neutralPrimary;
        result.menuItemText = neutralPrimary;
    }
    if (neutralLighterAlt) {
        result.bodyStandoutBackground = neutralLighterAlt;
        result.defaultStateBackground = neutralLighterAlt;
    }
    if (neutralDark) {
        result.actionLinkHovered = neutralDark;
        result.buttonTextHovered = neutralDark;
        result.buttonTextChecked = neutralDark;
        result.buttonTextPressed = neutralDark;
        result.inputTextHovered = neutralDark;
        result.menuItemTextHovered = neutralDark;
    }
    if (neutralSecondary) {
        result.bodySubtext = neutralSecondary;
        result.focusBorder = neutralSecondary;
        result.inputBorder = neutralSecondary;
        result.smallInputBorder = neutralSecondary;
        result.inputPlaceholderText = neutralSecondary;
    }
    if (neutralSecondaryAlt) {
        result.buttonBorder = neutralSecondaryAlt;
    }
    if (neutralTertiaryAlt) {
        result.disabledBodySubtext = neutralTertiaryAlt;
        result.disabledBorder = neutralTertiaryAlt;
        result.buttonBackgroundChecked = neutralTertiaryAlt;
        result.menuDivider = neutralTertiaryAlt;
    }
    if (accent) {
        result.accentButtonBackground = accent;
    }
    // map effects
    if (e === null || e === void 0 ? void 0 : e.elevation4) {
        result.cardShadow = e.elevation4;
    }
    if (!isInverted && (e === null || e === void 0 ? void 0 : e.elevation8)) {
        result.cardShadowHovered = e.elevation8;
    }
    else if (result.variantBorderHovered) {
        result.cardShadowHovered = '0 0 1px ' + result.variantBorderHovered;
    }
    result = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, result), s);
    return result;
}
function _fixDeprecatedSlots(s, depComments) {
    // Add @deprecated tag as comment if enabled
    var dep = '';
    if (depComments === true) {
        dep = ' /* @deprecated */';
    }
    /* eslint-disable deprecation/deprecation */
    s.listTextColor = s.listText + dep;
    s.menuItemBackgroundChecked += dep;
    s.warningHighlight += dep;
    s.warningText = s.messageText + dep;
    s.successText += dep;
    /* eslint-enable deprecation/deprecation */
    return s;
}
//# sourceMappingURL=makeSemanticColors.js.map

/***/ }),
/* 107 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mergeThemes": () => (/* binding */ mergeThemes)
/* harmony export */ });
/* harmony import */ var _fluentui_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(108);
/* harmony import */ var _utilities_makeSemanticColors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(106);


/**
 * Merge a partial/full theme into a full theme and returns a merged full theme.
 */
function mergeThemes(theme, partialTheme) {
    var _a, _b, _c;
    if (partialTheme === void 0) { partialTheme = {}; }
    var mergedTheme = (0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_0__.merge)({}, theme, partialTheme, {
        semanticColors: (0,_utilities_makeSemanticColors__WEBPACK_IMPORTED_MODULE_1__.getSemanticColors)(partialTheme.palette, partialTheme.effects, partialTheme.semanticColors, partialTheme.isInverted === undefined ? theme.isInverted : partialTheme.isInverted),
    });
    if (((_a = partialTheme.palette) === null || _a === void 0 ? void 0 : _a.themePrimary) && !((_b = partialTheme.palette) === null || _b === void 0 ? void 0 : _b.accent)) {
        mergedTheme.palette.accent = partialTheme.palette.themePrimary;
    }
    if (partialTheme.defaultFontStyle) {
        for (var _i = 0, _d = Object.keys(mergedTheme.fonts); _i < _d.length; _i++) {
            var fontStyle = _d[_i];
            mergedTheme.fonts[fontStyle] = (0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_0__.merge)(mergedTheme.fonts[fontStyle], partialTheme.defaultFontStyle, (_c = partialTheme === null || partialTheme === void 0 ? void 0 : partialTheme.fonts) === null || _c === void 0 ? void 0 : _c[fontStyle]);
        }
    }
    return mergedTheme;
}
//# sourceMappingURL=mergeThemes.js.map

/***/ }),
/* 108 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "merge": () => (/* binding */ merge)
/* harmony export */ });
/**
 * Simple deep merge function. Takes all arguments and returns a deep copy of the objects merged
 * together in the order provided. If an object creates a circular reference, it will assign the
 * original reference.
 */
function merge(target) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var arg = args_1[_a];
        _merge(target || {}, arg);
    }
    return target;
}
/**
 * The _merge helper iterates through all props on source and assigns them to target.
 * When the value is an object, we will create a deep clone of the object. However if
 * there is a circular reference, the value will not be deep cloned and will persist
 * the reference.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function _merge(target, source, circularReferences) {
    if (circularReferences === void 0) { circularReferences = []; }
    circularReferences.push(source);
    for (var name_1 in source) {
        if (source.hasOwnProperty(name_1)) {
            if (name_1 !== '__proto__' && name_1 !== 'constructor' && name_1 !== 'prototype') {
                var value = source[name_1];
                if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
                    var isCircularReference = circularReferences.indexOf(value) > -1;
                    target[name_1] = (isCircularReference
                        ? value
                        : _merge(target[name_1] || {}, value, circularReferences));
                }
                else {
                    target[name_1] = value;
                }
            }
        }
    }
    circularReferences.pop();
    return target;
}
//# sourceMappingURL=merge.js.map

/***/ }),
/* 109 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimationStyles": () => (/* reexport safe */ _AnimationStyles__WEBPACK_IMPORTED_MODULE_0__.AnimationStyles),
/* harmony export */   "AnimationVariables": () => (/* reexport safe */ _AnimationStyles__WEBPACK_IMPORTED_MODULE_0__.AnimationVariables),
/* harmony export */   "DefaultPalette": () => (/* reexport safe */ _DefaultPalette__WEBPACK_IMPORTED_MODULE_1__.DefaultPalette),
/* harmony export */   "DefaultEffects": () => (/* reexport safe */ _DefaultEffects__WEBPACK_IMPORTED_MODULE_2__.DefaultEffects),
/* harmony export */   "DefaultFontStyles": () => (/* reexport safe */ _DefaultFontStyles__WEBPACK_IMPORTED_MODULE_3__.DefaultFontStyles),
/* harmony export */   "registerDefaultFontFaces": () => (/* reexport safe */ _DefaultFontStyles__WEBPACK_IMPORTED_MODULE_3__.registerDefaultFontFaces),
/* harmony export */   "FontSizes": () => (/* reexport safe */ _fonts__WEBPACK_IMPORTED_MODULE_4__.FontSizes),
/* harmony export */   "FontWeights": () => (/* reexport safe */ _fonts__WEBPACK_IMPORTED_MODULE_4__.FontWeights),
/* harmony export */   "IconFontSizes": () => (/* reexport safe */ _fonts__WEBPACK_IMPORTED_MODULE_4__.IconFontSizes),
/* harmony export */   "createFontStyles": () => (/* reexport safe */ _fonts__WEBPACK_IMPORTED_MODULE_5__.createFontStyles),
/* harmony export */   "focusClear": () => (/* reexport safe */ _getFocusStyle__WEBPACK_IMPORTED_MODULE_6__.focusClear),
/* harmony export */   "getFocusOutlineStyle": () => (/* reexport safe */ _getFocusStyle__WEBPACK_IMPORTED_MODULE_6__.getFocusOutlineStyle),
/* harmony export */   "getFocusStyle": () => (/* reexport safe */ _getFocusStyle__WEBPACK_IMPORTED_MODULE_6__.getFocusStyle),
/* harmony export */   "getInputFocusStyle": () => (/* reexport safe */ _getFocusStyle__WEBPACK_IMPORTED_MODULE_6__.getInputFocusStyle),
/* harmony export */   "hiddenContentStyle": () => (/* reexport safe */ _hiddenContentStyle__WEBPACK_IMPORTED_MODULE_7__.hiddenContentStyle),
/* harmony export */   "PulsingBeaconAnimationStyles": () => (/* reexport safe */ _PulsingBeaconAnimationStyles__WEBPACK_IMPORTED_MODULE_8__.PulsingBeaconAnimationStyles),
/* harmony export */   "getGlobalClassNames": () => (/* reexport safe */ _getGlobalClassNames__WEBPACK_IMPORTED_MODULE_9__.getGlobalClassNames),
/* harmony export */   "getThemedContext": () => (/* reexport safe */ _scheme__WEBPACK_IMPORTED_MODULE_10__.getThemedContext),
/* harmony export */   "ThemeSettingName": () => (/* reexport safe */ _theme__WEBPACK_IMPORTED_MODULE_11__.ThemeSettingName),
/* harmony export */   "getTheme": () => (/* reexport safe */ _theme__WEBPACK_IMPORTED_MODULE_11__.getTheme),
/* harmony export */   "loadTheme": () => (/* reexport safe */ _theme__WEBPACK_IMPORTED_MODULE_11__.loadTheme),
/* harmony export */   "createTheme": () => (/* reexport safe */ _theme__WEBPACK_IMPORTED_MODULE_12__.createTheme),
/* harmony export */   "registerOnThemeChangeCallback": () => (/* reexport safe */ _theme__WEBPACK_IMPORTED_MODULE_11__.registerOnThemeChangeCallback),
/* harmony export */   "removeOnThemeChangeCallback": () => (/* reexport safe */ _theme__WEBPACK_IMPORTED_MODULE_11__.removeOnThemeChangeCallback),
/* harmony export */   "EdgeChromiumHighContrastSelector": () => (/* reexport safe */ _CommonStyles__WEBPACK_IMPORTED_MODULE_13__.EdgeChromiumHighContrastSelector),
/* harmony export */   "HighContrastSelector": () => (/* reexport safe */ _CommonStyles__WEBPACK_IMPORTED_MODULE_13__.HighContrastSelector),
/* harmony export */   "HighContrastSelectorBlack": () => (/* reexport safe */ _CommonStyles__WEBPACK_IMPORTED_MODULE_13__.HighContrastSelectorBlack),
/* harmony export */   "HighContrastSelectorWhite": () => (/* reexport safe */ _CommonStyles__WEBPACK_IMPORTED_MODULE_13__.HighContrastSelectorWhite),
/* harmony export */   "ScreenWidthMaxLarge": () => (/* reexport safe */ _CommonStyles__WEBPACK_IMPORTED_MODULE_13__.ScreenWidthMaxLarge),
/* harmony export */   "ScreenWidthMaxMedium": () => (/* reexport safe */ _CommonStyles__WEBPACK_IMPORTED_MODULE_13__.ScreenWidthMaxMedium),
/* harmony export */   "ScreenWidthMaxSmall": () => (/* reexport safe */ _CommonStyles__WEBPACK_IMPORTED_MODULE_13__.ScreenWidthMaxSmall),
/* harmony export */   "ScreenWidthMaxXLarge": () => (/* reexport safe */ _CommonStyles__WEBPACK_IMPORTED_MODULE_13__.ScreenWidthMaxXLarge),
/* harmony export */   "ScreenWidthMaxXXLarge": () => (/* reexport safe */ _CommonStyles__WEBPACK_IMPORTED_MODULE_13__.ScreenWidthMaxXXLarge),
/* harmony export */   "ScreenWidthMinLarge": () => (/* reexport safe */ _CommonStyles__WEBPACK_IMPORTED_MODULE_13__.ScreenWidthMinLarge),
/* harmony export */   "ScreenWidthMinMedium": () => (/* reexport safe */ _CommonStyles__WEBPACK_IMPORTED_MODULE_13__.ScreenWidthMinMedium),
/* harmony export */   "ScreenWidthMinSmall": () => (/* reexport safe */ _CommonStyles__WEBPACK_IMPORTED_MODULE_13__.ScreenWidthMinSmall),
/* harmony export */   "ScreenWidthMinUhfMobile": () => (/* reexport safe */ _CommonStyles__WEBPACK_IMPORTED_MODULE_13__.ScreenWidthMinUhfMobile),
/* harmony export */   "ScreenWidthMinXLarge": () => (/* reexport safe */ _CommonStyles__WEBPACK_IMPORTED_MODULE_13__.ScreenWidthMinXLarge),
/* harmony export */   "ScreenWidthMinXXLarge": () => (/* reexport safe */ _CommonStyles__WEBPACK_IMPORTED_MODULE_13__.ScreenWidthMinXXLarge),
/* harmony export */   "ScreenWidthMinXXXLarge": () => (/* reexport safe */ _CommonStyles__WEBPACK_IMPORTED_MODULE_13__.ScreenWidthMinXXXLarge),
/* harmony export */   "getEdgeChromiumNoHighContrastAdjustSelector": () => (/* reexport safe */ _CommonStyles__WEBPACK_IMPORTED_MODULE_13__.getEdgeChromiumNoHighContrastAdjustSelector),
/* harmony export */   "getHighContrastNoAdjustStyle": () => (/* reexport safe */ _CommonStyles__WEBPACK_IMPORTED_MODULE_13__.getHighContrastNoAdjustStyle),
/* harmony export */   "getScreenSelector": () => (/* reexport safe */ _CommonStyles__WEBPACK_IMPORTED_MODULE_13__.getScreenSelector),
/* harmony export */   "noWrap": () => (/* reexport safe */ _GeneralStyles__WEBPACK_IMPORTED_MODULE_14__.noWrap),
/* harmony export */   "normalize": () => (/* reexport safe */ _GeneralStyles__WEBPACK_IMPORTED_MODULE_14__.normalize),
/* harmony export */   "getFadedOverflowStyle": () => (/* reexport safe */ _getFadedOverflowStyle__WEBPACK_IMPORTED_MODULE_15__.getFadedOverflowStyle),
/* harmony export */   "getPlaceholderStyles": () => (/* reexport safe */ _getPlaceholderStyles__WEBPACK_IMPORTED_MODULE_16__.getPlaceholderStyles),
/* harmony export */   "ZIndexes": () => (/* reexport safe */ _zIndexes__WEBPACK_IMPORTED_MODULE_17__.ZIndexes)
/* harmony export */ });
/* harmony import */ var _AnimationStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89);
/* harmony import */ var _DefaultPalette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99);
/* harmony import */ var _DefaultEffects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(103);
/* harmony import */ var _DefaultFontStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92);
/* harmony import */ var _fonts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94);
/* harmony import */ var _fonts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(93);
/* harmony import */ var _getFocusStyle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(110);
/* harmony import */ var _hiddenContentStyle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(114);
/* harmony import */ var _PulsingBeaconAnimationStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(115);
/* harmony import */ var _getGlobalClassNames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(116);
/* harmony import */ var _scheme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(117);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(100);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(102);
/* harmony import */ var _CommonStyles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(113);
/* harmony import */ var _GeneralStyles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(119);
/* harmony import */ var _getFadedOverflowStyle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(120);
/* harmony import */ var _getPlaceholderStyles__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(121);
/* harmony import */ var _zIndexes__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(112);
















//# sourceMappingURL=index.js.map

/***/ }),
/* 110 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFocusStyle": () => (/* binding */ getFocusStyle),
/* harmony export */   "focusClear": () => (/* binding */ focusClear),
/* harmony export */   "getFocusOutlineStyle": () => (/* binding */ getFocusOutlineStyle),
/* harmony export */   "getInputFocusStyle": () => (/* binding */ getInputFocusStyle)
/* harmony export */ });
/* harmony import */ var _CommonStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(113);
/* harmony import */ var _fluentui_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(111);
/* harmony import */ var _zIndexes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(112);



function getFocusStyle(theme, insetOrOptions, position, highContrastStyle, borderColor, outlineColor, isFocusedOnly) {
    if (typeof insetOrOptions === 'number' || !insetOrOptions) {
        return _getFocusStyleInternal(theme, {
            inset: insetOrOptions,
            position: position,
            highContrastStyle: highContrastStyle,
            borderColor: borderColor,
            outlineColor: outlineColor,
            isFocusedOnly: isFocusedOnly,
        });
    }
    else {
        return _getFocusStyleInternal(theme, insetOrOptions);
    }
}
function _getFocusStyleInternal(theme, options) {
    var _a, _b;
    if (options === void 0) { options = {}; }
    var _c = options.inset, inset = _c === void 0 ? 0 : _c, _d = options.width, width = _d === void 0 ? 1 : _d, _e = options.position, position = _e === void 0 ? 'relative' : _e, highContrastStyle = options.highContrastStyle, _f = options.borderColor, borderColor = _f === void 0 ? theme.palette.white : _f, _g = options.outlineColor, outlineColor = _g === void 0 ? theme.palette.neutralSecondary : _g, _h = options.isFocusedOnly, isFocusedOnly = _h === void 0 ? true : _h;
    return {
        // Clear browser-specific focus styles and use 'transparent' as placeholder for focus style.
        outline: 'transparent',
        // Requirement because pseudo-element is absolutely positioned.
        position: position,
        selectors: (_a = {
                // Clear the focus border in Firefox.
                // Reference: http://stackoverflow.com/a/199319/1436671
                '::-moz-focus-inner': {
                    border: '0',
                }
            },
            // When the element that uses this mixin is in a :focus state, add a pseudo-element to
            // create a border.
            _a["." + _fluentui_utilities__WEBPACK_IMPORTED_MODULE_0__.IsFocusVisibleClassName + " &" + (isFocusedOnly ? ':focus' : '') + ":after"] = {
                content: '""',
                position: 'absolute',
                left: inset + 1,
                top: inset + 1,
                bottom: inset + 1,
                right: inset + 1,
                border: width + "px solid " + borderColor,
                outline: width + "px solid " + outlineColor,
                zIndex: _zIndexes__WEBPACK_IMPORTED_MODULE_1__.ZIndexes.FocusStyle,
                selectors: (_b = {},
                    _b[_CommonStyles__WEBPACK_IMPORTED_MODULE_2__.HighContrastSelector] = highContrastStyle,
                    _b),
            },
            _a),
    };
}
/**
 * Generates style to clear browser specific focus styles.
 */
function focusClear() {
    return {
        selectors: {
            '&::-moz-focus-inner': {
                // Clear the focus border in Firefox. Reference: http://stackoverflow.com/a/199319/1436671
                border: 0,
            },
            '&': {
                // Clear browser specific focus styles and use transparent as placeholder for focus style
                outline: 'transparent',
            },
        },
    };
}
/**
 * Generates a style which can be used to set a border on focus.
 *
 * @param theme - The theme object to use.
 * @param inset - The number of pixels to inset the border (default 0)
 * @param width - The border width in pixels (default 1)
 * @param color - Color of the outline (default `theme.palette.neutralSecondary`)
 * @returns The style object.
 */
function getFocusOutlineStyle(theme, inset, width, color) {
    var _a;
    if (inset === void 0) { inset = 0; }
    if (width === void 0) { width = 1; }
    return {
        selectors: (_a = {},
            _a[":global(" + _fluentui_utilities__WEBPACK_IMPORTED_MODULE_0__.IsFocusVisibleClassName + ") &:focus"] = {
                outline: width + " solid " + (color || theme.palette.neutralSecondary),
                outlineOffset: -inset + "px",
            },
            _a),
    };
}
/**
 * Generates text input border styles on focus.
 *
 * @param borderColor - Color of the border.
 * @param borderRadius - Radius of the border.
 * @param borderType - Type of the border.
 * @param borderPosition - Position of the border relative to the input element (default to -1
 * as it's the most common border width of the input element)
 * @returns The style object.
 */
var getInputFocusStyle = function (borderColor, borderRadius, borderType, borderPosition) {
    var _a, _b, _c;
    if (borderType === void 0) { borderType = 'border'; }
    if (borderPosition === void 0) { borderPosition = -1; }
    var isBorderBottom = borderType === 'borderBottom';
    return {
        borderColor: borderColor,
        selectors: {
            ':after': (_a = {
                    pointerEvents: 'none',
                    content: "''",
                    position: 'absolute',
                    left: isBorderBottom ? 0 : borderPosition,
                    top: borderPosition,
                    bottom: borderPosition,
                    right: isBorderBottom ? 0 : borderPosition
                },
                _a[borderType] = "2px solid " + borderColor,
                _a.borderRadius = borderRadius,
                _a.width = borderType === 'borderBottom' ? '100%' : undefined,
                _a.selectors = (_b = {},
                    _b[_CommonStyles__WEBPACK_IMPORTED_MODULE_2__.HighContrastSelector] = (_c = {},
                        _c[borderType === 'border' ? 'borderColor' : 'borderBottomColor'] = 'Highlight',
                        _c),
                    _b),
                _a),
        },
    };
};
//# sourceMappingURL=getFocusStyle.js.map

/***/ }),
/* 111 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IsFocusVisibleClassName": () => (/* binding */ IsFocusVisibleClassName),
/* harmony export */   "IsFocusHiddenClassName": () => (/* binding */ IsFocusHiddenClassName),
/* harmony export */   "setFocusVisibility": () => (/* binding */ setFocusVisibility)
/* harmony export */ });
/* harmony import */ var _dom_getWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);

var IsFocusVisibleClassName = 'ms-Fabric--isFocusVisible';
var IsFocusHiddenClassName = 'ms-Fabric--isFocusHidden';
/**
 * Sets the visibility of focus styling.
 *
 * By default, focus styles (the box surrounding a focused Button, for example) only show up when navigational
 * keypresses occur (through Tab, arrows, PgUp/PgDn, Home and End), and are hidden when mouse interactions occur.
 * This API provides an imperative way to turn them on/off.
 *
 * A use case might be when you have a keypress like ctrl-f6 navigate to a particular region on the page,
 * and want focus to show up.
 *
 * @param enabled - whether to remove or add focus
 * @param target - optional target
 */
function setFocusVisibility(enabled, target) {
    var win = target ? (0,_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__.getWindow)(target) : (0,_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
    if (win) {
        var classList = win.document.body.classList;
        classList.add(enabled ? IsFocusVisibleClassName : IsFocusHiddenClassName);
        classList.remove(enabled ? IsFocusHiddenClassName : IsFocusVisibleClassName);
    }
}
//# sourceMappingURL=setFocusVisibility.js.map

/***/ }),
/* 112 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZIndexes": () => (/* binding */ ZIndexes)
/* harmony export */ });
var ZIndexes;
(function (ZIndexes) {
    ZIndexes.Nav = 1;
    /**
     * @deprecated Do not use
     */
    ZIndexes.ScrollablePane = 1;
    ZIndexes.FocusStyle = 1;
    ZIndexes.Coachmark = 1000;
    ZIndexes.Layer = 1000000;
    ZIndexes.KeytipLayer = 1000001;
})(ZIndexes || (ZIndexes = {}));
//# sourceMappingURL=zIndexes.js.map

/***/ }),
/* 113 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HighContrastSelector": () => (/* binding */ HighContrastSelector),
/* harmony export */   "HighContrastSelectorWhite": () => (/* binding */ HighContrastSelectorWhite),
/* harmony export */   "HighContrastSelectorBlack": () => (/* binding */ HighContrastSelectorBlack),
/* harmony export */   "EdgeChromiumHighContrastSelector": () => (/* binding */ EdgeChromiumHighContrastSelector),
/* harmony export */   "ScreenWidthMinSmall": () => (/* binding */ ScreenWidthMinSmall),
/* harmony export */   "ScreenWidthMinMedium": () => (/* binding */ ScreenWidthMinMedium),
/* harmony export */   "ScreenWidthMinLarge": () => (/* binding */ ScreenWidthMinLarge),
/* harmony export */   "ScreenWidthMinXLarge": () => (/* binding */ ScreenWidthMinXLarge),
/* harmony export */   "ScreenWidthMinXXLarge": () => (/* binding */ ScreenWidthMinXXLarge),
/* harmony export */   "ScreenWidthMinXXXLarge": () => (/* binding */ ScreenWidthMinXXXLarge),
/* harmony export */   "ScreenWidthMaxSmall": () => (/* binding */ ScreenWidthMaxSmall),
/* harmony export */   "ScreenWidthMaxMedium": () => (/* binding */ ScreenWidthMaxMedium),
/* harmony export */   "ScreenWidthMaxLarge": () => (/* binding */ ScreenWidthMaxLarge),
/* harmony export */   "ScreenWidthMaxXLarge": () => (/* binding */ ScreenWidthMaxXLarge),
/* harmony export */   "ScreenWidthMaxXXLarge": () => (/* binding */ ScreenWidthMaxXXLarge),
/* harmony export */   "ScreenWidthMinUhfMobile": () => (/* binding */ ScreenWidthMinUhfMobile),
/* harmony export */   "getScreenSelector": () => (/* binding */ getScreenSelector),
/* harmony export */   "getHighContrastNoAdjustStyle": () => (/* binding */ getHighContrastNoAdjustStyle),
/* harmony export */   "getEdgeChromiumNoHighContrastAdjustSelector": () => (/* binding */ getEdgeChromiumNoHighContrastAdjustSelector)
/* harmony export */ });
var HighContrastSelector = '@media screen and (-ms-high-contrast: active), (forced-colors: active)';
var HighContrastSelectorWhite = '@media screen and (-ms-high-contrast: black-on-white), (forced-colors: black-on-white)';
var HighContrastSelectorBlack = '@media screen and (-ms-high-contrast: white-on-black), (forced-colors: white-on-black)';
var EdgeChromiumHighContrastSelector = '@media screen and (forced-colors: active)';
var ScreenWidthMinSmall = 320;
var ScreenWidthMinMedium = 480;
var ScreenWidthMinLarge = 640;
var ScreenWidthMinXLarge = 1024;
var ScreenWidthMinXXLarge = 1366;
var ScreenWidthMinXXXLarge = 1920;
var ScreenWidthMaxSmall = ScreenWidthMinMedium - 1;
var ScreenWidthMaxMedium = ScreenWidthMinLarge - 1;
var ScreenWidthMaxLarge = ScreenWidthMinXLarge - 1;
var ScreenWidthMaxXLarge = ScreenWidthMinXXLarge - 1;
var ScreenWidthMaxXXLarge = ScreenWidthMinXXXLarge - 1;
var ScreenWidthMinUhfMobile = 768;
function getScreenSelector(min, max) {
    var minSelector = typeof min === 'number' ? " and (min-width: " + min + "px)" : '';
    var maxSelector = typeof max === 'number' ? " and (max-width: " + max + "px)" : '';
    return "@media only screen" + minSelector + maxSelector;
}
/**
 * The style which turns off high contrast adjustment in browsers.
 */
function getHighContrastNoAdjustStyle() {
    return {
        forcedColorAdjust: 'none',
        MsHighContrastAdjust: 'none',
    };
}
/**
 * The style which turns off high contrast adjustment in (only) Edge Chromium browser.
 *  @deprecated Use `getHighContrastNoAdjustStyle`
 */
function getEdgeChromiumNoHighContrastAdjustSelector() {
    var _a;
    return _a = {},
        _a[EdgeChromiumHighContrastSelector] = {
            forcedColorAdjust: 'none',
        },
        _a;
}
//# sourceMappingURL=CommonStyles.js.map

/***/ }),
/* 114 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hiddenContentStyle": () => (/* binding */ hiddenContentStyle)
/* harmony export */ });
var hiddenContentStyle = {
    position: 'absolute',
    width: 1,
    height: 1,
    margin: -1,
    padding: 0,
    border: 0,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
};
//# sourceMappingURL=hiddenContentStyle.js.map

/***/ }),
/* 115 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PulsingBeaconAnimationStyles": () => (/* binding */ PulsingBeaconAnimationStyles)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49);
/* harmony import */ var _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90);


var DEFAULT_DURATION = '14s';
var DEFAULT_DELAY = '2s';
var DEFAULT_ITERATION_COUNT = '1';
function _continuousPulseStepOne(beaconColorOne, innerDimension) {
    return {
        borderColor: beaconColorOne,
        borderWidth: '0px',
        width: innerDimension,
        height: innerDimension,
    };
}
function _continuousPulseStepTwo(borderWidth) {
    return {
        opacity: 1,
        borderWidth: borderWidth,
    };
}
function _continuousPulseStepThree() {
    return {
        opacity: 1,
    };
}
function _continuousPulseStepFour(beaconColorTwo, outerDimension) {
    return {
        borderWidth: '0',
        width: outerDimension,
        height: outerDimension,
        opacity: 0,
        borderColor: beaconColorTwo,
    };
}
function _continuousPulseStepFive(beaconColorOne, innerDimension) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, _continuousPulseStepOne(beaconColorOne, innerDimension)), {
        opacity: 0,
    });
}
function _continuousPulseAnimationDouble(beaconColorOne, beaconColorTwo, innerDimension, outerDimension, borderWidth) {
    return (0,_fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_1__.keyframes)({
        '0%': _continuousPulseStepOne(beaconColorOne, innerDimension),
        '1.42%': _continuousPulseStepTwo(borderWidth),
        '3.57%': _continuousPulseStepThree(),
        '7.14%': _continuousPulseStepFour(beaconColorTwo, outerDimension),
        '8%': _continuousPulseStepFive(beaconColorOne, innerDimension),
        '29.99%': _continuousPulseStepFive(beaconColorOne, innerDimension),
        '30%': _continuousPulseStepOne(beaconColorOne, innerDimension),
        '31.42%': _continuousPulseStepTwo(borderWidth),
        '33.57%': _continuousPulseStepThree(),
        '37.14%': _continuousPulseStepFour(beaconColorTwo, outerDimension),
        '38%': _continuousPulseStepFive(beaconColorOne, innerDimension),
        '79.42%': _continuousPulseStepFive(beaconColorOne, innerDimension),
        '79.43': _continuousPulseStepOne(beaconColorOne, innerDimension),
        '81.85': _continuousPulseStepTwo(borderWidth),
        '83.42': _continuousPulseStepThree(),
        '87%': _continuousPulseStepFour(beaconColorTwo, outerDimension),
        '100%': {},
    });
}
function _continuousPulseAnimationSingle(beaconColorOne, beaconColorTwo, innerDimension, outerDimension, borderWidth) {
    return (0,_fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_1__.keyframes)({
        '0%': _continuousPulseStepOne(beaconColorOne, innerDimension),
        '14.2%': _continuousPulseStepTwo(borderWidth),
        '35.7%': _continuousPulseStepThree(),
        '71.4%': _continuousPulseStepFour(beaconColorTwo, outerDimension),
        '100%': {},
    });
}
function _createDefaultAnimation(animationName, delayLength) {
    return {
        animationName: animationName,
        animationIterationCount: DEFAULT_ITERATION_COUNT,
        animationDuration: DEFAULT_DURATION,
        animationDelay: delayLength || DEFAULT_DELAY,
    };
}
var PulsingBeaconAnimationStyles = {
    continuousPulseAnimationDouble: _continuousPulseAnimationDouble,
    continuousPulseAnimationSingle: _continuousPulseAnimationSingle,
    createDefaultAnimation: _createDefaultAnimation,
};
//# sourceMappingURL=PulsingBeaconAnimationStyles.js.map

/***/ }),
/* 116 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getGlobalClassNames": () => (/* binding */ getGlobalClassNames)
/* harmony export */ });
/* harmony import */ var _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54);
/* harmony import */ var _fluentui_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78);


/**
 * Internal memoized function which simply takes in the class map and the
 * disable boolean. These immutable values can be memoized.
 */
var _getGlobalClassNames = (0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_0__.memoizeFunction)(function (classNames, disableGlobalClassNames) {
    var styleSheet = _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_1__.Stylesheet.getInstance();
    if (disableGlobalClassNames) {
        // disable global classnames
        return Object.keys(classNames).reduce(function (acc, className) {
            acc[className] = styleSheet.getClassName(classNames[className]);
            return acc;
        }, {});
    }
    // use global classnames
    return classNames;
});
/**
 * Checks for the `disableGlobalClassNames` property on the `theme` to determine if it should return `classNames`
 * Note that calls to this function are memoized.
 *
 * @param classNames - The collection of global class names that apply when the flag is false. Make sure to pass in
 * the same instance on each call to benefit from memoization.
 * @param theme - The theme to check the flag on
 * @param disableGlobalClassNames - Optional. Explicitly opt in/out of disabling global classnames. Defaults to false.
 */
function getGlobalClassNames(classNames, theme, disableGlobalClassNames) {
    return _getGlobalClassNames(classNames, disableGlobalClassNames !== undefined ? disableGlobalClassNames : theme.disableGlobalClassNames);
}
//# sourceMappingURL=getGlobalClassNames.js.map

/***/ }),
/* 117 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getThemedContext": () => (/* binding */ getThemedContext)
/* harmony export */ });
/* harmony import */ var _fluentui_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);
/* harmony import */ var _fluentui_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(118);

/**
 * @internal
 * This function is still in experimental phase in support of Foundation experimental development.
 * Its API signature and existence are subject to change.
 *
 * Modify context to activate the specified scheme or theme. For schemes, look in context (if available) and fall back
 * to global Customizations. If both scheme and theme are specified, scheme will be looked up in theme. In this case,
 * scheme must be present in theme arg, otherwise new context will default to theme arg (there is no fallback to
 * settings to look up scheme.)
 *
 * @param context - Context in which to get schemed customizations.
 * @param scheme - Scheme to get customizations for from theme arg (if supplied) OR from context and global settings.
 * @param theme - Theme to merge into context.
 * @returns modified schemed context if scheme is valid and not already applied, unmodified context otherwise.
 */
function getThemedContext(context, scheme, theme) {
    var newContext = context;
    var newSettings;
    // Only fall back to context and customizations when theme arg is not provided.
    var schemeSource = theme || _fluentui_utilities__WEBPACK_IMPORTED_MODULE_0__.Customizations.getSettings(['theme'], undefined, context.customizations).theme;
    if (theme) {
        newSettings = { theme: theme };
    }
    var schemeTheme = scheme && schemeSource && schemeSource.schemes && schemeSource.schemes[scheme];
    // These first two checks are logically redundant but TS doesn't infer schemeSource.schemes is defined
    // when schemeTheme is defined.
    if (schemeSource && schemeTheme && schemeSource !== schemeTheme) {
        newSettings = { theme: schemeTheme };
        newSettings.theme.schemes = schemeSource.schemes;
    }
    if (newSettings) {
        newContext = {
            customizations: {
                settings: (0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_1__.mergeSettings)(context.customizations.settings, newSettings),
                scopedSettings: context.customizations.scopedSettings,
            },
        };
    }
    return newContext;
}
//# sourceMappingURL=scheme.js.map

/***/ }),
/* 118 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mergeSettings": () => (/* binding */ mergeSettings),
/* harmony export */   "mergeScopedSettings": () => (/* binding */ mergeScopedSettings)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49);

/**
 * Merge new and old settings, giving priority to new settings.
 * New settings is optional in which case oldSettings is returned as-is.
 * @param oldSettings - Old settings to fall back to.
 * @param newSettings - New settings that will be merged over oldSettings.
 * @returns Merged settings.
 */
function mergeSettings(oldSettings, newSettings) {
    if (oldSettings === void 0) { oldSettings = {}; }
    var mergeSettingsWith = _isSettingsFunction(newSettings) ? newSettings : _settingsMergeWith(newSettings);
    return mergeSettingsWith(oldSettings);
}
function mergeScopedSettings(oldSettings, newSettings) {
    if (oldSettings === void 0) { oldSettings = {}; }
    var mergeSettingsWith = _isSettingsFunction(newSettings) ? newSettings : _scopedSettingsMergeWith(newSettings);
    return mergeSettingsWith(oldSettings);
}
function _isSettingsFunction(settings) {
    return typeof settings === 'function';
}
function _settingsMergeWith(newSettings) {
    return function (settings) { return (newSettings ? (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, settings), newSettings) : settings); };
}
function _scopedSettingsMergeWith(scopedSettingsFromProps) {
    if (scopedSettingsFromProps === void 0) { scopedSettingsFromProps = {}; }
    return function (oldScopedSettings) {
        var newScopedSettings = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, oldScopedSettings);
        for (var scopeName in scopedSettingsFromProps) {
            if (scopedSettingsFromProps.hasOwnProperty(scopeName)) {
                newScopedSettings[scopeName] = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, oldScopedSettings[scopeName]), scopedSettingsFromProps[scopeName]);
            }
        }
        return newScopedSettings;
    };
}
//# sourceMappingURL=mergeSettings.js.map

/***/ }),
/* 119 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "normalize": () => (/* binding */ normalize),
/* harmony export */   "noWrap": () => (/* binding */ noWrap)
/* harmony export */ });
// This file mimics styles and mixins from _General.Mixins.scss
var normalize = {
    boxShadow: 'none',
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
};
var noWrap = {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
};
//# sourceMappingURL=GeneralStyles.js.map

/***/ }),
/* 120 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFadedOverflowStyle": () => (/* binding */ getFadedOverflowStyle)
/* harmony export */ });
var DEFAULT_HEIGHT = '50%';
var DEFAULT_WIDTH = 20;
/**
 * - Generates a style used to fade out an overflowing content by defining a style for an :after pseudo element.
 * - Apply it to the :after selector for all combination of states the parent of content might have (normal, hover,
 * selected, focus).
 * - Requires the target to have position set to relative and overflow set to hidden.
 *
 * @example
 * ```tsx
 * // Assuming the following DOM structure and the different background colors coming from
 * // the parent holding the content.
 * <div className={classNames.parent}>
 *   <span className={classNames.content}>Overflown Content</span>
 * </div>
 * ```
 * ```ts
 * // This is how the style set would look in Component.styles.ts
 * const { bodyBackground } = theme.semanticColors;
 * const { neutralLighter } = theme.palette;
 *
 * // The second argument of getFadedOverflowStyle function is a string representing a key of
 * // ISemanticColors or IPalette.
 *
 * const styles = {
 *   parent: [
 *     backgroundColor: bodyBackground,
 *     selectors: {
 *       '&:hover: {
 *         backgroundColor: neutralLighter
 *       },
 *       '$content:after': {
 *         ...getFadedOverflowStyle(theme, 'bodyBackground')
 *       },
 *       '&:hover $content:after': {
 *         ...getFadedOverflowStyle(theme, 'neutralLighter')
 *       }
 *     }
 *   ],
 *   content: [
 *     width: '100%',
 *     display: 'inline-block',
 *     position: 'relative',
 *     overflow: 'hidden'
 *   ]
 * }
 * ```
 * @param theme - The theme object to use.
 * @param color - The background color to fade out to. Accepts only keys of ISemanticColors or IPalette.
 * Defaults to 'bodyBackground'.
 * @param direction - The direction of the overflow. Defaults to horizontal.
 * @param width - The width of the fading overflow. Vertical direction defaults it to 100% vs 20px when horizontal.
 * @param height - The Height of the fading overflow. Vertical direction defaults it to 50% vs 100% when horizontal.
 * @returns The style object.
 */
function getFadedOverflowStyle(theme, color, direction, width, height) {
    if (color === void 0) { color = 'bodyBackground'; }
    if (direction === void 0) { direction = 'horizontal'; }
    if (width === void 0) { width = getDefaultValue('width', direction); }
    if (height === void 0) { height = getDefaultValue('height', direction); }
    // Get the color value string from the theme semanticColors or palette.
    var colorValue = theme.semanticColors[color] || theme.palette[color];
    // Get the red, green, blue values of the colorValue.
    var rgbColor = color2rgb(colorValue);
    // Apply opacity 0 to serve as a start color of the gradient.
    var rgba = "rgba(" + rgbColor.r + ", " + rgbColor.g + ", " + rgbColor.b + ", 0)";
    // Get the direction of the gradient. (mergeStyles takes care of RTL direction)
    var gradientDirection = direction === 'vertical' ? 'to bottom' : 'to right';
    return {
        content: '""',
        position: 'absolute',
        right: 0,
        bottom: 0,
        width: width,
        height: height,
        pointerEvents: 'none',
        backgroundImage: "linear-gradient(" + gradientDirection + ", " + rgba + " 0%, " + colorValue + " 100%)",
    };
}
// TODO consider moving this to a separate module along with some more color functions from OUFR/utilities.
/**
 * Helper function to convert a string hex color to an RGB object.
 *
 * @param colorValue - Color to be converted from hex to rgba.
 */
function color2rgb(colorValue) {
    if (colorValue[0] === '#') {
        // If it's a hex code
        return {
            r: parseInt(colorValue.slice(1, 3), 16),
            g: parseInt(colorValue.slice(3, 5), 16),
            b: parseInt(colorValue.slice(5, 7), 16),
        };
    }
    else if (colorValue.indexOf('rgba(') === 0) {
        // If it's an rgba color string
        colorValue = colorValue.match(/rgba\(([^)]+)\)/)[1];
        var parts = colorValue.split(/ *, */).map(Number);
        return {
            r: parts[0],
            g: parts[1],
            b: parts[2],
        };
    }
    // The only remaining possibility is transparent.
    return {
        r: 255,
        g: 255,
        b: 255,
    };
}
/**
 * Helper function to get the default values for parameters of main function.
 *
 * @param style - Which style to get the default value for.
 * @param direction - What direction to take into consideration.
 */
function getDefaultValue(style, direction) {
    if (style === 'width') {
        return direction === 'horizontal' ? DEFAULT_WIDTH : '100%';
    }
    else {
        return direction === 'vertical' ? DEFAULT_HEIGHT : '100%';
    }
}
//# sourceMappingURL=getFadedOverflowStyle.js.map

/***/ }),
/* 121 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPlaceholderStyles": () => (/* binding */ getPlaceholderStyles)
/* harmony export */ });
/**
 * Generates placeholder style for each of the browsers supported by `@fluentui/react`.
 * @param styles - The style to use.
 * @returns The placeholder style object for each browser depending on the placeholder directive it uses.
 */
function getPlaceholderStyles(styles) {
    return {
        selectors: {
            '::placeholder': styles,
            ':-ms-input-placeholder': styles,
            '::-ms-input-placeholder': styles,
        },
    };
}
//# sourceMappingURL=getPlaceholderStyles.js.map

/***/ }),
/* 122 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildClassMap": () => (/* reexport safe */ _buildClassMap__WEBPACK_IMPORTED_MODULE_0__.buildClassMap),
/* harmony export */   "getIcon": () => (/* reexport safe */ _icons__WEBPACK_IMPORTED_MODULE_1__.getIcon),
/* harmony export */   "registerIcons": () => (/* reexport safe */ _icons__WEBPACK_IMPORTED_MODULE_1__.registerIcons),
/* harmony export */   "registerIconAlias": () => (/* reexport safe */ _icons__WEBPACK_IMPORTED_MODULE_1__.registerIconAlias),
/* harmony export */   "unregisterIcons": () => (/* reexport safe */ _icons__WEBPACK_IMPORTED_MODULE_1__.unregisterIcons),
/* harmony export */   "setIconOptions": () => (/* reexport safe */ _icons__WEBPACK_IMPORTED_MODULE_1__.setIconOptions),
/* harmony export */   "getIconClassName": () => (/* reexport safe */ _getIconClassName__WEBPACK_IMPORTED_MODULE_2__.getIconClassName)
/* harmony export */ });
/* harmony import */ var _buildClassMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(123);
/* harmony import */ var _getIconClassName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(125);



//# sourceMappingURL=index.js.map

/***/ }),
/* 123 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerIcons": () => (/* binding */ registerIcons),
/* harmony export */   "unregisterIcons": () => (/* binding */ unregisterIcons),
/* harmony export */   "registerIconAlias": () => (/* binding */ registerIconAlias),
/* harmony export */   "getIcon": () => (/* binding */ getIcon),
/* harmony export */   "setIconOptions": () => (/* binding */ setIconOptions)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49);
/* harmony import */ var _fluentui_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46);
/* harmony import */ var _fluentui_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(124);
/* harmony import */ var _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54);
/* harmony import */ var _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(97);
/* harmony import */ var _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(88);



var ICON_SETTING_NAME = 'icons';
var _iconSettings = _fluentui_utilities__WEBPACK_IMPORTED_MODULE_0__.GlobalSettings.getValue(ICON_SETTING_NAME, {
    __options: {
        disableWarnings: false,
        warnOnMissingIcons: true,
    },
    __remapped: {},
});
// Reset icon registration on stylesheet resets.
var stylesheet = _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_1__.Stylesheet.getInstance();
if (stylesheet && stylesheet.onReset) {
    stylesheet.onReset(function () {
        for (var name_1 in _iconSettings) {
            if (_iconSettings.hasOwnProperty(name_1) && !!_iconSettings[name_1].subset) {
                _iconSettings[name_1].subset.className = undefined;
            }
        }
    });
}
/**
 * Normalizes an icon name for consistent mapping.
 * Current implementation is to convert the icon name to lower case.
 *
 * @param name - Icon name to normalize.
 * @returns {string} Normalized icon name to use for indexing and mapping.
 */
var normalizeIconName = function (name) { return name.toLowerCase(); };
/**
 * Registers a given subset of icons.
 *
 * @param iconSubset - the icon subset definition.
 */
function registerIcons(iconSubset, options) {
    var subset = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, iconSubset), { isRegistered: false, className: undefined });
    var icons = iconSubset.icons;
    // Grab options, optionally mix user provided ones on top.
    options = options ? (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, _iconSettings.__options), options) : _iconSettings.__options;
    for (var iconName in icons) {
        if (icons.hasOwnProperty(iconName)) {
            var code = icons[iconName];
            var normalizedIconName = normalizeIconName(iconName);
            if (_iconSettings[normalizedIconName]) {
                _warnDuplicateIcon(iconName);
            }
            else {
                _iconSettings[normalizedIconName] = {
                    code: code,
                    subset: subset,
                };
            }
        }
    }
}
/**
 * Unregisters icons by name.
 *
 * @param iconNames - List of icons to unregister.
 */
function unregisterIcons(iconNames) {
    var options = _iconSettings.__options;
    var _loop_1 = function (iconName) {
        var normalizedIconName = normalizeIconName(iconName);
        if (_iconSettings[normalizedIconName]) {
            delete _iconSettings[normalizedIconName];
        }
        else {
            // Warn that we are trying to delete an icon that doesn't exist
            if (!options.disableWarnings) {
                (0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_3__.warn)("The icon \"" + iconName + "\" tried to unregister but was not registered.");
            }
        }
        // Delete any aliases for this iconName
        if (_iconSettings.__remapped[normalizedIconName]) {
            delete _iconSettings.__remapped[normalizedIconName];
        }
        // Delete any items that were an alias for this iconName
        Object.keys(_iconSettings.__remapped).forEach(function (key) {
            if (_iconSettings.__remapped[key] === normalizedIconName) {
                delete _iconSettings.__remapped[key];
            }
        });
    };
    for (var _i = 0, iconNames_1 = iconNames; _i < iconNames_1.length; _i++) {
        var iconName = iconNames_1[_i];
        _loop_1(iconName);
    }
}
/**
 * Remaps one icon name to another.
 */
function registerIconAlias(iconName, mappedToName) {
    _iconSettings.__remapped[normalizeIconName(iconName)] = normalizeIconName(mappedToName);
}
/**
 * Gets an icon definition. If an icon is requested but the subset has yet to be registered,
 * it will get registered immediately.
 *
 * @public
 * @param name - Name of icon.
 */
function getIcon(name) {
    var icon = undefined;
    var options = _iconSettings.__options;
    name = name ? normalizeIconName(name) : '';
    name = _iconSettings.__remapped[name] || name;
    if (name) {
        icon = _iconSettings[name];
        if (icon) {
            var subset = icon.subset;
            if (subset && subset.fontFace) {
                if (!subset.isRegistered) {
                    (0,_fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_4__.fontFace)(subset.fontFace);
                    subset.isRegistered = true;
                }
                if (!subset.className) {
                    subset.className = (0,_fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_5__.mergeStyles)(subset.style, {
                        fontFamily: subset.fontFace.fontFamily,
                        fontWeight: subset.fontFace.fontWeight || 'normal',
                        fontStyle: subset.fontFace.fontStyle || 'normal',
                    });
                }
            }
        }
        else {
            // eslint-disable-next-line deprecation/deprecation
            if (!options.disableWarnings && options.warnOnMissingIcons) {
                (0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_3__.warn)("The icon \"" + name + "\" was used but not registered. See https://github.com/microsoft/fluentui/wiki/Using-icons for more information.");
            }
        }
    }
    return icon;
}
/**
 * Sets the icon options.
 *
 * @public
 */
function setIconOptions(options) {
    _iconSettings.__options = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, _iconSettings.__options), options);
}
var _missingIcons = [];
var _missingIconsTimer = undefined;
function _warnDuplicateIcon(iconName) {
    var options = _iconSettings.__options;
    var warningDelay = 2000;
    var maxIconsInMessage = 10;
    if (!options.disableWarnings) {
        _missingIcons.push(iconName);
        if (_missingIconsTimer === undefined) {
            _missingIconsTimer = setTimeout(function () {
                (0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_3__.warn)("Some icons were re-registered. Applications should only call registerIcons for any given " +
                    "icon once. Redefining what an icon is may have unintended consequences. Duplicates " +
                    "include: \n" +
                    _missingIcons.slice(0, maxIconsInMessage).join(', ') +
                    (_missingIcons.length > maxIconsInMessage ? " (+ " + (_missingIcons.length - maxIconsInMessage) + " more)" : ''));
                _missingIconsTimer = undefined;
                _missingIcons = [];
            }, warningDelay);
        }
    }
}
//# sourceMappingURL=icons.js.map

/***/ }),
/* 124 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "warn": () => (/* binding */ warn),
/* harmony export */   "setWarningCallback": () => (/* binding */ setWarningCallback)
/* harmony export */ });
/* provided dependency */ var process = __webpack_require__(3);
/* eslint-disable no-console */
var _warningCallback = undefined;
/**
 * Sends a warning to console, if the api is present.
 *
 * @public
 * @param message - Warning message.
 */
function warn(message) {
    if (_warningCallback && process.env.NODE_ENV !== 'production') {
        _warningCallback(message);
    }
    else if (console && console.warn) {
        console.warn(message);
    }
}
/**
 * Configures the warning callback. Passing in undefined will reset it to use the default
 * console.warn function.
 *
 * @public
 * @param warningCallback - Callback to override the generated warnings.
 */
function setWarningCallback(warningCallback) {
    _warningCallback = warningCallback;
}
//# sourceMappingURL=warn.js.map

/***/ }),
/* 125 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getIconClassName": () => (/* binding */ getIconClassName)
/* harmony export */ });
/* harmony import */ var _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(123);


var defaultIconStyles = {
    display: 'inline-block',
};
/**
 * Gets an icon classname. You should be able to add this classname to an I tag with no
 * additional classnames, and render the icon.
 *
 * @public
 */
function getIconClassName(name) {
    var className = '';
    var icon = (0,_icons__WEBPACK_IMPORTED_MODULE_0__.getIcon)(name);
    if (icon) {
        className = (0,_fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_1__.mergeStyles)(icon.subset.className, defaultIconStyles, {
            selectors: {
                '::before': {
                    content: "\"" + icon.code + "\"",
                },
            },
        });
    }
    return className;
}
//# sourceMappingURL=getIconClassName.js.map

/***/ }),
/* 126 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InjectionMode": () => (/* reexport safe */ _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_0__.InjectionMode),
/* harmony export */   "Stylesheet": () => (/* reexport safe */ _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_0__.Stylesheet),
/* harmony export */   "concatStyleSets": () => (/* reexport safe */ _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_1__.concatStyleSets),
/* harmony export */   "concatStyleSetsWithProps": () => (/* reexport safe */ _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_2__.concatStyleSetsWithProps),
/* harmony export */   "fontFace": () => (/* reexport safe */ _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_3__.fontFace),
/* harmony export */   "keyframes": () => (/* reexport safe */ _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_4__.keyframes),
/* harmony export */   "mergeStyleSets": () => (/* reexport safe */ _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_5__.mergeStyleSets),
/* harmony export */   "mergeStyles": () => (/* reexport safe */ _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_6__.mergeStyles)
/* harmony export */ });
/* harmony import */ var _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54);
/* harmony import */ var _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51);
/* harmony import */ var _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50);
/* harmony import */ var _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97);
/* harmony import */ var _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90);
/* harmony import */ var _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60);
/* harmony import */ var _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(88);

//# sourceMappingURL=MergeStyles.js.map

/***/ }),
/* 127 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fluentui_set_version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(128);
// Do not modify this file; it is generated as part of publish.
// The checked in version is a placeholder only and will not be updated.

(0,_fluentui_set_version__WEBPACK_IMPORTED_MODULE_0__.setVersion)('@fluentui/style-utilities', '8.2.2');
//# sourceMappingURL=version.js.map

/***/ }),
/* 128 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setVersion": () => (/* reexport safe */ _setVersion__WEBPACK_IMPORTED_MODULE_0__.setVersion)
/* harmony export */ });
/* harmony import */ var _setVersion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(129);


(0,_setVersion__WEBPACK_IMPORTED_MODULE_0__.setVersion)('@fluentui/set-version', '6.0.0');
//# sourceMappingURL=index.js.map

/***/ }),
/* 129 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setVersion": () => (/* binding */ setVersion)
/* harmony export */ });
// A packages cache that makes sure that we don't inject the same packageName twice in the same bundle -
// this cache is local to the module closure inside this bundle
var packagesCache = {};
// Cache access to window to avoid IE11 memory leak.
var _win = undefined;
try {
    _win = window;
}
catch (e) {
    /* no-op */
}
function setVersion(packageName, packageVersion) {
    if (typeof _win !== 'undefined') {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var packages = (_win.__packages__ = _win.__packages__ || {});
        // We allow either the global packages or local packages caches to invalidate so testing can
        // just clear the global to set this state
        if (!packages[packageName] || !packagesCache[packageName]) {
            packagesCache[packageName] = packageVersion;
            var versions = (packages[packageName] = packages[packageName] || []);
            versions.push(packageVersion);
        }
    }
}
//# sourceMappingURL=setVersion.js.map

/***/ }),
/* 130 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "css": () => (/* binding */ css)
/* harmony export */ });
/**
 * Concatination helper, which can merge class names together. Skips over falsey values.
 *
 * @public
 */
function css() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var classes = [];
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var arg = args_1[_a];
        if (arg) {
            if (typeof arg === 'string') {
                classes.push(arg);
            }
            else if (arg.hasOwnProperty('toString') && typeof arg.toString === 'function') {
                classes.push(arg.toString());
            }
            else {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                for (var key in arg) {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    if (arg[key]) {
                        classes.push(key);
                    }
                }
            }
        }
    }
    return classes.join(' ');
}
//# sourceMappingURL=css.js.map

/***/ }),
/* 131 */,
/* 132 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Image": () => (/* binding */ Image)
/* harmony export */ });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);
/* harmony import */ var _Image_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(133);
/* harmony import */ var _Image_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(135);



var Image = (0,_Utilities__WEBPACK_IMPORTED_MODULE_0__.styled)(_Image_base__WEBPACK_IMPORTED_MODULE_1__.ImageBase, _Image_styles__WEBPACK_IMPORTED_MODULE_2__.getStyles, undefined, {
    scope: 'Image',
}, true);
Image.displayName = 'Image';
//# sourceMappingURL=Image.js.map

/***/ }),
/* 133 */,
/* 134 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useMergedRefs": () => (/* binding */ useMergedRefs)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


/**
 * React hook to merge multiple React refs (either MutableRefObjects or ref callbacks) into a single ref callback that
 * updates all provided refs
 * @param refs - Refs to collectively update with one ref value.
 * @returns A function with an attached "current" prop, so that it can be treated like a RefObject.
 */
function useMergedRefs() {
    var refs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        refs[_i] = arguments[_i];
    }
    var mergedCallback = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (value) {
        // Update the "current" prop hanging on the function.
        mergedCallback.current = value;
        for (var _i = 0, refs_1 = refs; _i < refs_1.length; _i++) {
            var ref = refs_1[_i];
            if (typeof ref === 'function') {
                ref(value);
            }
            else if (ref) {
                // work around the immutability of the React.Ref type
                ref.current = value;
            }
        }
    }, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArrays)(refs));
    return mergedCallback;
}
//# sourceMappingURL=useMergedRefs.js.map

/***/ }),
/* 135 */,
/* 136 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageIcon": () => (/* binding */ ImageIcon)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _Image_Image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(132);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(130);
/* harmony import */ var _Icon_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(131);





/**
 * Fast icon component which only supports images (not font glyphs) and can't be targeted by customizations.
 * To style the icon, use `className` or reference `ms-Icon` in CSS.
 * {@docCategory Icon}
 */
var ImageIcon = function (props) {
    var className = props.className, imageProps = props.imageProps;
    var nativeProps = (0,_Utilities__WEBPACK_IMPORTED_MODULE_1__.getNativeProps)(props, _Utilities__WEBPACK_IMPORTED_MODULE_1__.htmlElementProperties, [
        'aria-label',
        'aria-labelledby',
        'title',
        'aria-describedby',
    ]);
    var altText = imageProps.alt || props['aria-label'];
    var hasName = altText ||
        props['aria-labelledby'] ||
        props.title ||
        imageProps['aria-label'] ||
        imageProps['aria-labelledby'] ||
        imageProps.title;
    // move naming or describing attributes from the container (where they are invalid) to the image
    var imageNameProps = {
        'aria-labelledby': props['aria-labelledby'],
        'aria-describedby': props['aria-describedby'],
        title: props.title,
    };
    var containerProps = hasName
        ? {}
        : {
            'aria-hidden': true,
        };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, containerProps, nativeProps, { className: (0,_Utilities__WEBPACK_IMPORTED_MODULE_3__.css)(_Icon_styles__WEBPACK_IMPORTED_MODULE_4__.MS_ICON, _Icon_styles__WEBPACK_IMPORTED_MODULE_4__.classNames.root, _Icon_styles__WEBPACK_IMPORTED_MODULE_4__.classNames.image, className) }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Image_Image__WEBPACK_IMPORTED_MODULE_5__.Image, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, imageNameProps, imageProps, { alt: hasName ? altText : '' }))));
};
//# sourceMappingURL=ImageIcon.js.map

/***/ }),
/* 137 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContextualMenu": () => (/* binding */ ContextualMenu)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42);
/* harmony import */ var _ContextualMenu_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(138);
/* harmony import */ var _ContextualMenu_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(220);





function onRenderSubMenu(subMenuProps) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(LocalContextualMenu, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, subMenuProps));
}
// This is to prevent cyclic import with ContextualMenu.base.tsx.
var LocalContextualMenu = (0,_Utilities__WEBPACK_IMPORTED_MODULE_2__.styled)(_ContextualMenu_base__WEBPACK_IMPORTED_MODULE_3__.ContextualMenuBase, _ContextualMenu_styles__WEBPACK_IMPORTED_MODULE_4__.getStyles, function () { return ({ onRenderSubMenu: onRenderSubMenu }); }, { scope: 'ContextualMenu' });
/**
 * ContextualMenu description
 */
var ContextualMenu = LocalContextualMenu;
ContextualMenu.displayName = 'ContextualMenu';
//# sourceMappingURL=ContextualMenu.js.map

/***/ }),
/* 138 */,
/* 139 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DirectionalHint": () => (/* binding */ DirectionalHint)
/* harmony export */ });
var DirectionalHint = {
    /**
     * Appear above the target element, with the left edges of the callout and target aligning.
     */
    topLeftEdge: 0,
    /**
     * Appear above the target element, with the centers of the callout and target aligning.
     */
    topCenter: 1,
    /**
     * Appear above the target element, with the right edges of the callout and target aligning.
     */
    topRightEdge: 2,
    /**
     * Appear above the target element, aligning with the target element such that the callout tends toward
     * the center of the screen.
     */
    topAutoEdge: 3,
    /**
     * Appear below the target element, with the left edges of the callout and target aligning.
     */
    bottomLeftEdge: 4,
    /**
     * Appear below the target element, with the centers of the callout and target aligning.
     */
    bottomCenter: 5,
    /**
     * Appear below the target element, with the right edges of the callout and target aligning.
     */
    bottomRightEdge: 6,
    /**
     * Appear below the target element, aligning with the target element such that the callout tends toward
     * the center of the screen.
     */
    bottomAutoEdge: 7,
    /**
     * Appear to the left of the target element, with the top edges of the callout and target aligning.
     */
    leftTopEdge: 8,
    /**
     * Appear to the left of the target element, with the centers of the callout and target aligning.
     */
    leftCenter: 9,
    /**
     * Appear to the left of the target element, with the bottom edges of the callout and target aligning.
     */
    leftBottomEdge: 10,
    /**
     * Appear to the right of the target element, with the top edges of the callout and target aligning.
     */
    rightTopEdge: 11,
    /**
     * Appear to the right of the target element, with the centers of the callout and target aligning.
     */
    rightCenter: 12,
    /**
     * Appear to the right of the target element, with the bottom edges of the callout and target aligning.
     */
    rightBottomEdge: 13,
};
//# sourceMappingURL=DirectionalHint.js.map

/***/ }),
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "usePrevious": () => (/* binding */ usePrevious)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

/**
 * Hook keeping track of a given value from a previous execution of the component the Hook is used in.
 *
 * See [React Hooks FAQ](https://reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state)
 */
function usePrevious(value) {
    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        ref.current = value;
    });
    return ref.current;
}
//# sourceMappingURL=usePrevious.js.map

/***/ }),
/* 144 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPropsWithDefaults": () => (/* binding */ getPropsWithDefaults)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49);

/**
 * Function to apply default values to a component props object. This function is intended for function components,
 * to maintain parity with the `defaultProps` feature of class components. It accounts for properties that are
 * specified, but undefined.
 * @param defaultProps- An object with default values for various properties
 * @param propsWithoutDefaults- The props object passed into the component
 */
function getPropsWithDefaults(defaultProps, propsWithoutDefaults) {
    var props = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, propsWithoutDefaults);
    for (var _i = 0, _a = Object.keys(defaultProps); _i < _a.length; _i++) {
        var key = _a[_i];
        if (props[key] === undefined) {
            props[key] = defaultProps[key];
        }
    }
    return props;
}
//# sourceMappingURL=getPropsWithDefaults.js.map

/***/ }),
/* 145 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useTarget": () => (/* binding */ useTarget)
/* harmony export */ });
/* harmony import */ var _fluentui_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _fluentui_react_window_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(146);



/**
 * Hook to calculate and cache the target element specified by the given target attribute,
 * as well as the target element's (or host element's) parent window
 * @param target- Target selector passed to the component as a property, describing the element that
 * the callout should target
 * @param hostElement- The callout's host element, used for determining the parent window.
 */
function useTarget(target, hostElement) {
    var previousTargetProp = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    var targetRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    /**
     * Stores an instance of Window, used to check
     * for server side rendering and if focus was lost.
     */
    var targetWindow = (0,_fluentui_react_window_provider__WEBPACK_IMPORTED_MODULE_1__.useWindow)();
    // If the target element changed, find the new one. If we are tracking
    // target with class name, always find element because we do not know if
    // fabric has rendered a new element and disposed the old element.
    if (!target || target !== previousTargetProp.current || typeof target === 'string') {
        var currentElement = hostElement === null || hostElement === void 0 ? void 0 : hostElement.current;
        if (target) {
            if (typeof target === 'string') {
                var currentDoc = (0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_2__.getDocument)(currentElement);
                targetRef.current = currentDoc ? currentDoc.querySelector(target) : null;
            }
            else if ('stopPropagation' in target) {
                targetRef.current = target;
            }
            else if ('getBoundingClientRect' in target) {
                targetRef.current = target;
            }
            else if ('current' in target) {
                targetRef.current = target.current;
            }
            else {
                targetRef.current = target;
            }
        }
        previousTargetProp.current = target;
    }
    return [targetRef, targetWindow];
}
//# sourceMappingURL=useTarget.js.map

/***/ }),
/* 146 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WindowContext": () => (/* binding */ WindowContext),
/* harmony export */   "useWindow": () => (/* binding */ useWindow),
/* harmony export */   "useDocument": () => (/* binding */ useDocument),
/* harmony export */   "WindowProvider": () => (/* binding */ WindowProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

/**
 * Context for providing the window.
 */
var WindowContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext({
    window: typeof window === 'object' ? window : undefined,
});
/**
 * Hook to access the window object. This can be overridden contextually using the `WindowProvider`.
 */
var useWindow = function () { return react__WEBPACK_IMPORTED_MODULE_0__.useContext(WindowContext).window; };
/**
 * Hook to access the document object. This can be overridden contextually using the `WindowProvider`.
 */
var useDocument = function () { var _a; return (_a = react__WEBPACK_IMPORTED_MODULE_0__.useContext(WindowContext).window) === null || _a === void 0 ? void 0 : _a.document; };
/**
 * Component to provide the window object contextually. This is useful when rendering content to an element
 * contained within a child window or iframe element, where event handlers and styling must be projected
 * to an alternative window or document.
 */
var WindowProvider = function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(WindowContext.Provider, { value: props }, props.children);
};
//# sourceMappingURL=WindowProvider.js.map

/***/ }),
/* 147 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useResponsiveMode": () => (/* binding */ useResponsiveMode)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _fluentui_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47);
/* harmony import */ var _fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(154);
/* harmony import */ var _decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(148);
/* harmony import */ var _WindowProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(146);





/**
 * Hook to get the current responsive mode (window size category).
 * @param elementRef - Use this element's parent window when determining the responsive mode.
 * @param overrideResponsiveMode - Override the responsive mode. If this param is present, it's always returned.
 */
var useResponsiveMode = function (elementRef, overrideResponsiveMode) {
    var _a = react__WEBPACK_IMPORTED_MODULE_0__.useState((0,_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_1__.getInitialResponsiveMode)()), lastResponsiveMode = _a[0], setLastResponsiveMode = _a[1];
    var onResize = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function () {
        var newResponsiveMode = (0,_decorators_withResponsiveMode__WEBPACK_IMPORTED_MODULE_1__.getResponsiveMode)((0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_2__.getWindow)(elementRef.current));
        // Setting the same value should not cause a re-render.
        if (lastResponsiveMode !== newResponsiveMode) {
            setLastResponsiveMode(newResponsiveMode);
        }
    }, [elementRef, lastResponsiveMode]);
    var win = (0,_WindowProvider__WEBPACK_IMPORTED_MODULE_3__.useWindow)();
    (0,_fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_4__.useOnEvent)(win, 'resize', onResize);
    // Call resize function initially on mount, or if the override changes from defined to undefined
    // (the effect will run on all override changes, but onResize will only be called if it changed to undefined)
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        if (overrideResponsiveMode === undefined) {
            onResize();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps -- only meant to run on mount or when override changes
    }, [overrideResponsiveMode]);
    return overrideResponsiveMode !== null && overrideResponsiveMode !== void 0 ? overrideResponsiveMode : lastResponsiveMode;
};
//# sourceMappingURL=useResponsiveMode.js.map

/***/ }),
/* 148 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResponsiveMode": () => (/* binding */ ResponsiveMode),
/* harmony export */   "setResponsiveMode": () => (/* binding */ setResponsiveMode),
/* harmony export */   "initializeResponsiveMode": () => (/* binding */ initializeResponsiveMode),
/* harmony export */   "getInitialResponsiveMode": () => (/* binding */ getInitialResponsiveMode),
/* harmony export */   "withResponsiveMode": () => (/* binding */ withResponsiveMode),
/* harmony export */   "getResponsiveMode": () => (/* binding */ getResponsiveMode)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _BaseDecorator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(151);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(149);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(153);
/* harmony import */ var _WindowProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(146);





var ResponsiveMode;
(function (ResponsiveMode) {
    /** Width \<= 479px */
    ResponsiveMode[ResponsiveMode["small"] = 0] = "small";
    /** Width \> 479px and \<= 639px */
    ResponsiveMode[ResponsiveMode["medium"] = 1] = "medium";
    /** Width \> 639px and \<= 1023px */
    ResponsiveMode[ResponsiveMode["large"] = 2] = "large";
    /** Width \> 1023px and \<= 1365px */
    ResponsiveMode[ResponsiveMode["xLarge"] = 3] = "xLarge";
    /** Width \> 1365px and \<= 1919px */
    ResponsiveMode[ResponsiveMode["xxLarge"] = 4] = "xxLarge";
    /** Width \> 1919px */
    ResponsiveMode[ResponsiveMode["xxxLarge"] = 5] = "xxxLarge";
    ResponsiveMode[ResponsiveMode["unknown"] = 999] = "unknown";
})(ResponsiveMode || (ResponsiveMode = {}));
var RESPONSIVE_MAX_CONSTRAINT = [479, 639, 1023, 1365, 1919, 99999999];
/**
 * User specified mode to default to, useful for server side rendering scenarios.
 */
var _defaultMode;
/**
 * Tracking the last mode we successfully rendered, which allows us to
 * paint initial renders with the correct size.
 */
var _lastMode;
/**
 * Allows a server rendered scenario to provide a **default** responsive mode.
 * This WILL NOT trigger any updates to components that have already consumed the responsive mode!
 */
function setResponsiveMode(responsiveMode) {
    _defaultMode = responsiveMode;
}
/**
 * Initializes the responsive mode to the current window size. This can be used to avoid
 * a re-render during first component mount since the window would otherwise not be measured
 * until after mounting.
 *
 * This WILL NOT trigger any updates to components that have already consumed the responsive mode!
 */
function initializeResponsiveMode(element) {
    var currentWindow = (0,_Utilities__WEBPACK_IMPORTED_MODULE_1__.getWindow)(element);
    if (currentWindow) {
        getResponsiveMode(currentWindow);
    }
}
function getInitialResponsiveMode() {
    return _defaultMode || _lastMode || ResponsiveMode.large;
}
/**
 * @deprecated Decorator usage is deprecated. Either call `getResponsiveMode` manually, or
 * use the `useResponsiveMode` hook within a function component.
 */
function withResponsiveMode(ComposedComponent) {
    var _a;
    // eslint-disable-next-line deprecation/deprecation
    var resultClass = (_a = /** @class */ (function (_super) {
            (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(WithResponsiveMode, _super);
            function WithResponsiveMode(props) {
                var _this = _super.call(this, props) || this;
                _this._onResize = function () {
                    var responsiveMode = getResponsiveMode(_this.context.window);
                    if (responsiveMode !== _this.state.responsiveMode) {
                        _this.setState({
                            responsiveMode: responsiveMode,
                        });
                    }
                };
                _this._events = new _Utilities__WEBPACK_IMPORTED_MODULE_3__.EventGroup(_this);
                _this._updateComposedComponentRef = _this._updateComposedComponentRef.bind(_this);
                _this.state = {
                    responsiveMode: getInitialResponsiveMode(),
                };
                return _this;
            }
            WithResponsiveMode.prototype.componentDidMount = function () {
                this._events.on(this.context.window, 'resize', this._onResize);
                this._onResize();
            };
            WithResponsiveMode.prototype.componentWillUnmount = function () {
                this._events.dispose();
            };
            WithResponsiveMode.prototype.render = function () {
                var responsiveMode = this.state.responsiveMode;
                return responsiveMode === ResponsiveMode.unknown ? null : (react__WEBPACK_IMPORTED_MODULE_0__.createElement(ComposedComponent, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ ref: this._updateComposedComponentRef, responsiveMode: responsiveMode }, this.props)));
            };
            return WithResponsiveMode;
        }(_BaseDecorator__WEBPACK_IMPORTED_MODULE_4__.BaseDecorator)),
        _a.contextType = _WindowProvider__WEBPACK_IMPORTED_MODULE_5__.WindowContext,
        _a);
    return (0,_Utilities__WEBPACK_IMPORTED_MODULE_6__.hoistStatics)(ComposedComponent, resultClass);
}
/**
 * Hook to get the current responsive mode (window size category).
 * @param currentWindow - Use this window when determining the responsive mode.
 */
function getResponsiveMode(currentWindow) {
    var responsiveMode = ResponsiveMode.small;
    if (currentWindow) {
        try {
            while (currentWindow.innerWidth > RESPONSIVE_MAX_CONSTRAINT[responsiveMode]) {
                responsiveMode++;
            }
        }
        catch (e) {
            // Return a best effort result in cases where we're in the browser but it throws on getting innerWidth.
            responsiveMode = getInitialResponsiveMode();
        }
        // Tracking last mode just gives us a better default in future renders,
        // which avoids starting with the wrong value if we've measured once.
        _lastMode = responsiveMode;
    }
    else {
        if (_defaultMode !== undefined) {
            responsiveMode = _defaultMode;
        }
        else {
            throw new Error('Content was rendered in a server environment without providing a default responsive mode. ' +
                'Call setResponsiveMode to define what the responsive mode is.');
        }
    }
    return responsiveMode;
}
//# sourceMappingURL=withResponsiveMode.js.map

/***/ }),
/* 149 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventGroup": () => (/* binding */ EventGroup)
/* harmony export */ });
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(150);

/** An instance of EventGroup allows anything with a handle to it to trigger events on it.
 *  If the target is an HTMLElement, the event will be attached to the element and can be
 *  triggered as usual (like clicking for onClick).
 *  The event can be triggered by calling EventGroup.raise() here. If the target is an
 *  HTMLElement, the event gets raised and is handled by the browser. Otherwise, it gets
 *  handled here in EventGroup, and the handler is called in the context of the parent
 *  (which is passed in in the constructor).
 *
 * @public
 * {@docCategory EventGroup}
 */
var EventGroup = /** @class */ (function () {
    /** parent: the context in which events attached to non-HTMLElements are called */
    function EventGroup(parent) {
        this._id = EventGroup._uniqueId++;
        this._parent = parent;
        this._eventRecords = [];
    }
    /** For IE8, bubbleEvent is ignored here and must be dealt with by the handler.
     *  Events raised here by default have bubbling set to false and cancelable set to true.
     *  This applies also to built-in events being raised manually here on HTMLElements,
     *  which may lead to unexpected behavior if it differs from the defaults.
     *
     */
    EventGroup.raise = function (target, eventName, eventArgs, bubbleEvent) {
        var retVal;
        if (EventGroup._isElement(target)) {
            if (typeof document !== 'undefined' && document.createEvent) {
                var ev = document.createEvent('HTMLEvents');
                ev.initEvent(eventName, bubbleEvent || false, true);
                (0,_object__WEBPACK_IMPORTED_MODULE_0__.assign)(ev, eventArgs);
                retVal = target.dispatchEvent(ev);
            }
            else if (typeof document !== 'undefined' && document.createEventObject) {
                // IE8
                var evObj = document.createEventObject(eventArgs);
                // cannot set cancelBubble on evObj, fireEvent will overwrite it
                target.fireEvent('on' + eventName, evObj);
            }
        }
        else {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore  -- FIXME: strictBindCallApply error - https://github.com/microsoft/fluentui/issues/17331
            while (target && retVal !== false) {
                var events = target.__events__;
                var eventRecords = events ? events[eventName] : null;
                if (eventRecords) {
                    for (var id in eventRecords) {
                        if (eventRecords.hasOwnProperty(id)) {
                            var eventRecordList = eventRecords[id];
                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            // @ts-ignore  -- FIXME: strictBindCallApply error - https://github.com/microsoft/fluentui/issues/17331
                            for (var listIndex = 0; retVal !== false && listIndex < eventRecordList.length; listIndex++) {
                                var record = eventRecordList[listIndex];
                                if (record.objectCallback) {
                                    retVal = record.objectCallback.call(record.parent, eventArgs);
                                }
                            }
                        }
                    }
                }
                // If the target has a parent, bubble the event up.
                target = bubbleEvent ? target.parent : null;
            }
        }
        return retVal;
    };
    EventGroup.isObserved = function (target, eventName) {
        var events = target && target.__events__;
        return !!events && !!events[eventName];
    };
    /** Check to see if the target has declared support of the given event. */
    EventGroup.isDeclared = function (target, eventName) {
        var declaredEvents = target && target.__declaredEvents;
        return !!declaredEvents && !!declaredEvents[eventName];
    };
    EventGroup.stopPropagation = function (event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        }
        else {
            // IE8
            event.cancelBubble = true;
        }
    };
    EventGroup._isElement = function (target) {
        return (!!target && (!!target.addEventListener || (typeof HTMLElement !== 'undefined' && target instanceof HTMLElement)));
    };
    EventGroup.prototype.dispose = function () {
        if (!this._isDisposed) {
            this._isDisposed = true;
            this.off();
            this._parent = null;
        }
    };
    /** On the target, attach a set of events, where the events object is a name to function mapping. */
    EventGroup.prototype.onAll = function (target, events, useCapture) {
        for (var eventName in events) {
            if (events.hasOwnProperty(eventName)) {
                this.on(target, eventName, events[eventName], useCapture);
            }
        }
    };
    /**
     * On the target, attach an event whose handler will be called in the context of the parent
     * of this instance of EventGroup.
     */
    EventGroup.prototype.on = function (target, eventName, callback, options) {
        var _this = this;
        if (eventName.indexOf(',') > -1) {
            var events = eventName.split(/[ ,]+/);
            for (var i = 0; i < events.length; i++) {
                this.on(target, events[i], callback, options);
            }
        }
        else {
            var parent_1 = this._parent;
            var eventRecord = {
                target: target,
                eventName: eventName,
                parent: parent_1,
                callback: callback,
                options: options,
            };
            // Initialize and wire up the record on the target, so that it can call the callback if the event fires.
            var events = (target.__events__ = target.__events__ || {});
            events[eventName] =
                events[eventName] ||
                    {
                        count: 0,
                    };
            events[eventName][this._id] = events[eventName][this._id] || [];
            events[eventName][this._id].push(eventRecord);
            events[eventName].count++;
            if (EventGroup._isElement(target)) {
                var processElementEvent = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    if (_this._isDisposed) {
                        return;
                    }
                    var result;
                    try {
                        result = callback.apply(parent_1, args);
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore  -- FIXME: strictBindCallApply error - https://github.com/microsoft/fluentui/issues/17331
                        if (result === false && args[0]) {
                            var e = args[0];
                            if (e.preventDefault) {
                                e.preventDefault();
                            }
                            if (e.stopPropagation) {
                                e.stopPropagation();
                            }
                            e.cancelBubble = true;
                        }
                    }
                    catch (e) {
                        // ignore
                    }
                    return result;
                };
                eventRecord.elementCallback = processElementEvent;
                if (target.addEventListener) {
                    target.addEventListener(eventName, processElementEvent, options);
                }
                else if (target.attachEvent) {
                    // IE8
                    target.attachEvent('on' + eventName, processElementEvent);
                }
            }
            else {
                var processObjectEvent = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    if (_this._isDisposed) {
                        return;
                    }
                    return callback.apply(parent_1, args);
                };
                eventRecord.objectCallback = processObjectEvent;
            }
            // Remember the record locally, so that it can be removed.
            this._eventRecords.push(eventRecord);
        }
    };
    EventGroup.prototype.off = function (target, eventName, callback, options) {
        for (var i = 0; i < this._eventRecords.length; i++) {
            var eventRecord = this._eventRecords[i];
            if ((!target || target === eventRecord.target) &&
                (!eventName || eventName === eventRecord.eventName) &&
                (!callback || callback === eventRecord.callback) &&
                (typeof options !== 'boolean' || options === eventRecord.options)) {
                var events = eventRecord.target.__events__;
                var targetArrayLookup = events[eventRecord.eventName];
                var targetArray = targetArrayLookup ? targetArrayLookup[this._id] : null;
                // We may have already target's entries, so check for null.
                if (targetArray) {
                    if (targetArray.length === 1 || !callback) {
                        targetArrayLookup.count -= targetArray.length;
                        delete events[eventRecord.eventName][this._id];
                    }
                    else {
                        targetArrayLookup.count--;
                        targetArray.splice(targetArray.indexOf(eventRecord), 1);
                    }
                    if (!targetArrayLookup.count) {
                        delete events[eventRecord.eventName];
                    }
                }
                if (eventRecord.elementCallback) {
                    if (eventRecord.target.removeEventListener) {
                        eventRecord.target.removeEventListener(eventRecord.eventName, eventRecord.elementCallback, eventRecord.options);
                    }
                    else if (eventRecord.target.detachEvent) {
                        // IE8
                        eventRecord.target.detachEvent('on' + eventRecord.eventName, eventRecord.elementCallback);
                    }
                }
                this._eventRecords.splice(i--, 1);
            }
        }
    };
    /** Trigger the given event in the context of this instance of EventGroup. */
    EventGroup.prototype.raise = function (eventName, eventArgs, bubbleEvent) {
        return EventGroup.raise(this._parent, eventName, eventArgs, bubbleEvent);
    };
    /** Declare an event as being supported by this instance of EventGroup. */
    EventGroup.prototype.declare = function (event) {
        var declaredEvents = (this._parent.__declaredEvents = this._parent.__declaredEvents || {});
        if (typeof event === 'string') {
            declaredEvents[event] = true;
        }
        else {
            for (var i = 0; i < event.length; i++) {
                declaredEvents[event[i]] = true;
            }
        }
    };
    EventGroup._uniqueId = 0;
    return EventGroup;
}());

//# sourceMappingURL=EventGroup.js.map

/***/ }),
/* 150 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shallowCompare": () => (/* binding */ shallowCompare),
/* harmony export */   "assign": () => (/* binding */ assign),
/* harmony export */   "filteredAssign": () => (/* binding */ filteredAssign),
/* harmony export */   "mapEnumByName": () => (/* binding */ mapEnumByName),
/* harmony export */   "values": () => (/* binding */ values),
/* harmony export */   "omit": () => (/* binding */ omit)
/* harmony export */ });
/**
 * Compares a to b and b to a.
 *
 * @public
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function shallowCompare(a, b) {
    for (var propName in a) {
        if (a.hasOwnProperty(propName)) {
            if (!b.hasOwnProperty(propName) || b[propName] !== a[propName]) {
                return false;
            }
        }
    }
    for (var propName in b) {
        if (b.hasOwnProperty(propName)) {
            if (!a.hasOwnProperty(propName)) {
                return false;
            }
        }
    }
    return true;
}
/**
 * Makes a resulting merge of a bunch of objects. Pass in the target object followed by 1 or more
 * objects as arguments and they will be merged sequentially into the target. Note that this will
 * shallow merge; it will not create new cloned values for target members.
 *
 * @public
 * @param target - Target object to merge following object arguments into.
 * @param args - One or more objects that will be mixed into the target in the order they are provided.
 * @returns Resulting merged target.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function assign(target) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return filteredAssign.apply(this, [null, target].concat(args));
}
/**
 * Makes a resulting merge of a bunch of objects, but allows a filter function to be passed in to filter
 * the resulting merges. This allows for scenarios where you want to merge "everything except that one thing"
 * or "properties that start with data-". Note that this will shallow merge; it will not create new cloned
 * values for target members.
 *
 * @public
 * @param isAllowed - Callback to determine if the given propName is allowed in the result.
 * @param target - Target object to merge following object arguments into.
 * @param args - One or more objects that will be mixed into the target in the order they are provided.
 * @returns Resulting merged target.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function filteredAssign(isAllowed, target) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    target = target || {};
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var sourceObject = args_1[_a];
        if (sourceObject) {
            for (var propName in sourceObject) {
                if (sourceObject.hasOwnProperty(propName) && (!isAllowed || isAllowed(propName))) {
                    target[propName] = sourceObject[propName];
                }
            }
        }
    }
    return target;
}
/**
 * Takes an enum and iterates over each value of the enum (as a string), running the callback on each,
 * returning a mapped array.
 * @param theEnum - Enum to iterate over
 * @param callback - The first parameter the name of the entry, and the second parameter is the value
 * of that entry, which is the value you'd normally use when using the enum (usually a number).
 */
function mapEnumByName(
// eslint-disable-next-line @typescript-eslint/no-explicit-any
theEnum, callback) {
    // map<any> to satisfy compiler since it doesn't realize we strip out undefineds in the .filter() call
    return Object.keys(theEnum)
        .map(function (p) {
        // map on each property name as a string
        if (String(Number(p)) !== p) {
            // if the property is not just a number (because enums in TypeScript will map both ways)
            return callback(p, theEnum[p]);
        }
        return undefined;
    })
        .filter(function (v) { return !!v; }); // only return elements with values
}
/**
 * Get all values in an object dictionary
 *
 * @param obj - The dictionary to get values for
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function values(obj) {
    return Object.keys(obj).reduce(function (arr, key) {
        arr.push(obj[key]);
        return arr;
    }, []);
}
/**
 * Tiny helper to do the minimal amount of work in duplicating an object but omitting some
 * props. This ends up faster than using object ...rest or reduce to filter.
 *
 * This behaves very much like filteredAssign, but does not merge many objects together,
 * uses an exclusion object map, and avoids spreads all for optimal performance.
 *
 * See perf test for background:
 * https://jsperf.com/omit-vs-rest-vs-reduce/1
 *
 * @param obj - The object to clone
 * @param exclusions - The array of keys to exclude
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function omit(obj, exclusions) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var result = {};
    for (var key in obj) {
        if (exclusions.indexOf(key) === -1 && obj.hasOwnProperty(key)) {
            result[key] = obj[key];
        }
    }
    return result;
}
//# sourceMappingURL=object.js.map

/***/ }),
/* 151 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseDecorator": () => (/* binding */ BaseDecorator)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(152);



var BaseDecorator = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(BaseDecorator, _super);
    function BaseDecorator(props) {
        var _this = _super.call(this, props) || this;
        _this._updateComposedComponentRef = _this._updateComposedComponentRef.bind(_this);
        return _this;
    }
    /**
     * Updates the ref to the component composed by the decorator, which will also take care of hoisting
     * (and unhoisting as appropriate) methods from said component.
     *
     * Pass this method as the argument to the 'ref' property of the composed component.
     */
    BaseDecorator.prototype._updateComposedComponentRef = function (composedComponentInstance) {
        this._composedComponentInstance = composedComponentInstance;
        if (composedComponentInstance) {
            this._hoisted = (0,_Utilities__WEBPACK_IMPORTED_MODULE_2__.hoistMethods)(this, composedComponentInstance);
        }
        else if (this._hoisted) {
            (0,_Utilities__WEBPACK_IMPORTED_MODULE_2__.unhoistMethods)(this, this._hoisted);
        }
    };
    return BaseDecorator;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));

//# sourceMappingURL=BaseDecorator.js.map

/***/ }),
/* 152 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hoistMethods": () => (/* binding */ hoistMethods),
/* harmony export */   "unhoistMethods": () => (/* binding */ unhoistMethods)
/* harmony export */ });
var REACT_LIFECYCLE_EXCLUSIONS = [
    'setState',
    'render',
    'componentWillMount',
    'UNSAFE_componentWillMount',
    'componentDidMount',
    'componentWillReceiveProps',
    'UNSAFE_componentWillReceiveProps',
    'shouldComponentUpdate',
    'componentWillUpdate',
    'getSnapshotBeforeUpdate',
    'UNSAFE_componentWillUpdate',
    'componentDidUpdate',
    'componentWillUnmount',
];
/**
 * Allows you to hoist methods, except those in an exclusion set from a source object into a destination object.
 *
 * @public
 * @param destination - The instance of the object to hoist the methods onto.
 * @param source - The instance of the object where the methods are hoisted from.
 * @param exclusions - (Optional) What methods to exclude from being hoisted.
 * @returns An array of names of methods that were hoisted.
 */
function hoistMethods(
// eslint-disable-next-line @typescript-eslint/no-explicit-any
destination, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
source, exclusions) {
    if (exclusions === void 0) { exclusions = REACT_LIFECYCLE_EXCLUSIONS; }
    var hoisted = [];
    var _loop_1 = function (methodName) {
        if (typeof source[methodName] === 'function' &&
            destination[methodName] === undefined &&
            (!exclusions || exclusions.indexOf(methodName) === -1)) {
            hoisted.push(methodName);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            destination[methodName] = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                source[methodName].apply(source, args);
            };
        }
    };
    for (var methodName in source) {
        _loop_1(methodName);
    }
    return hoisted;
}
/**
 * Provides a method for convenience to unhoist hoisted methods.
 *
 * @public
 * @param source - The source object upon which methods were hoisted.
 * @param methodNames - An array of method names to unhoist.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function unhoistMethods(source, methodNames) {
    methodNames.forEach(function (methodName) { return delete source[methodName]; });
}
//# sourceMappingURL=hoist.js.map

/***/ }),
/* 153 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hoistStatics": () => (/* binding */ hoistStatics)
/* harmony export */ });
/**
 * Allows you to hoist static functions in components.
 * Created for the purpose of fixing broken static functions in classes
 * that utilize decorators.
 *
 * @public
 * @param source - The object where the methods are hoisted from.
 * @param dest - The object to hoist the methods onto.
 * @returns The dest object with methods added
 */
function hoistStatics(source, dest) {
    for (var name_1 in source) {
        if (source.hasOwnProperty(name_1)) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            dest[name_1] = source[name_1];
        }
    }
    return dest;
}
//# sourceMappingURL=hoistStatics.js.map

/***/ }),
/* 154 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useOnEvent": () => (/* binding */ useOnEvent)
/* harmony export */ });
/* harmony import */ var _fluentui_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(155);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


/**
 * Hook to attach an event handler on mount and handle cleanup.
 * @param element - Element (or ref to an element) to attach the event handler to
 * @param eventName - The event to attach a handler for
 * @param callback - The handler for the event
 * @param useCapture - Whether or not to attach the handler for the capture phase
 */
function useOnEvent(element, eventName, callback, useCapture) {
    // Use a ref for the callback to prevent repeatedly attaching/unattaching callbacks that are unstable across renders
    var callbackRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(callback);
    callbackRef.current = callback;
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        var actualElement = element && 'current' in element ? element.current : element;
        if (!actualElement) {
            return;
        }
        var dispose = (0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_1__.on)(actualElement, eventName, function (ev) { return callbackRef.current(ev); }, useCapture);
        return dispose;
    }, [element, eventName, useCapture]);
}
//# sourceMappingURL=useOnEvent.js.map

/***/ }),
/* 155 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "on": () => (/* binding */ on)
/* harmony export */ });
function on(element, eventName, callback, options) {
    element.addEventListener(eventName, callback, options);
    return function () { return element.removeEventListener(eventName, callback, options); };
}
//# sourceMappingURL=on.js.map

/***/ }),
/* 156 */,
/* 157 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getIsChecked": () => (/* binding */ getIsChecked),
/* harmony export */   "hasSubmenu": () => (/* binding */ hasSubmenu),
/* harmony export */   "isItemDisabled": () => (/* binding */ isItemDisabled),
/* harmony export */   "getMenuItemAriaRole": () => (/* binding */ getMenuItemAriaRole)
/* harmony export */ });
/**
 * Determines the effective checked state of a menu item.
 *
 * @param item {IContextualMenuItem} to get the check state of.
 * @returns {true} if the item is checked.
 * @returns {false} if the item is unchecked.
 * @returns {null} if the item is not checkable.
 */
function getIsChecked(item) {
    if (item.canCheck) {
        return !!(item.isChecked || item.checked);
    }
    if (typeof item.isChecked === 'boolean') {
        return item.isChecked;
    }
    if (typeof item.checked === 'boolean') {
        return item.checked;
    }
    // Item is not checkable.
    return null;
}
function hasSubmenu(item) {
    return !!(item.subMenuProps || item.items);
}
function isItemDisabled(item) {
    return !!(item.isDisabled || item.disabled);
}
function getMenuItemAriaRole(item) {
    var isChecked = getIsChecked(item);
    var canCheck = isChecked !== null;
    return canCheck ? 'menuitemcheckbox' : 'menuitem';
}
//# sourceMappingURL=contextualMenuUtility.js.map

/***/ }),
/* 158 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isMac": () => (/* binding */ isMac)
/* harmony export */ });
/* harmony import */ var _dom_getWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);

var isMacResult;
/**
 * Returns true if the user is on a Mac. Caches the result value.
 * @param reset - Reset the cached result value (mainly for testing).
 */
function isMac(reset) {
    if (typeof isMacResult === 'undefined' || reset) {
        var win = (0,_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
        var userAgent = win && win.navigator.userAgent;
        isMacResult = !!userAgent && userAgent.indexOf('Macintosh') !== -1;
    }
    return !!isMacResult;
}
//# sourceMappingURL=osDetector.js.map

/***/ }),
/* 159 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isIOS": () => (/* binding */ isIOS)
/* harmony export */ });
/**
 * Returns true if and only if the user is on a iOS device.
 * Used to determine whether iOS-specific behavior should be applied.
 */
var isIOS = function () {
    if (!window || !window.navigator || !window.navigator.userAgent) {
        return false;
    }
    return /iPad|iPhone|iPod/i.test(window.navigator.userAgent);
};
//# sourceMappingURL=mobileDetector.js.map

/***/ }),
/* 160 */,
/* 161 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFirstFocusable": () => (/* binding */ getFirstFocusable),
/* harmony export */   "getLastFocusable": () => (/* binding */ getLastFocusable),
/* harmony export */   "getFirstTabbable": () => (/* binding */ getFirstTabbable),
/* harmony export */   "getLastTabbable": () => (/* binding */ getLastTabbable),
/* harmony export */   "focusFirstChild": () => (/* binding */ focusFirstChild),
/* harmony export */   "getPreviousElement": () => (/* binding */ getPreviousElement),
/* harmony export */   "getNextElement": () => (/* binding */ getNextElement),
/* harmony export */   "isElementVisible": () => (/* binding */ isElementVisible),
/* harmony export */   "isElementTabbable": () => (/* binding */ isElementTabbable),
/* harmony export */   "isElementFocusZone": () => (/* binding */ isElementFocusZone),
/* harmony export */   "isElementFocusSubZone": () => (/* binding */ isElementFocusSubZone),
/* harmony export */   "doesElementContainFocus": () => (/* binding */ doesElementContainFocus),
/* harmony export */   "shouldWrapFocus": () => (/* binding */ shouldWrapFocus),
/* harmony export */   "focusAsync": () => (/* binding */ focusAsync),
/* harmony export */   "getFocusableByIndexPath": () => (/* binding */ getFocusableByIndexPath),
/* harmony export */   "getElementIndexPath": () => (/* binding */ getElementIndexPath)
/* harmony export */ });
/* harmony import */ var _dom_elementContainsAttribute__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(166);
/* harmony import */ var _dom_elementContains__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(162);
/* harmony import */ var _dom_getParent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(163);
/* harmony import */ var _dom_getWindow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47);
/* harmony import */ var _dom_getDocument__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57);





var IS_FOCUSABLE_ATTRIBUTE = 'data-is-focusable';
var IS_VISIBLE_ATTRIBUTE = 'data-is-visible';
var FOCUSZONE_ID_ATTRIBUTE = 'data-focuszone-id';
var FOCUSZONE_SUB_ATTRIBUTE = 'data-is-sub-focuszone';
/**
 * Gets the first focusable element.
 *
 * @public
 */
function getFirstFocusable(rootElement, currentElement, includeElementsInFocusZones) {
    return getNextElement(rootElement, currentElement, true /*checkNode*/, false /*suppressParentTraversal*/, false /*suppressChildTraversal*/, includeElementsInFocusZones);
}
/**
 * Gets the last focusable element.
 *
 * @public
 */
function getLastFocusable(rootElement, currentElement, includeElementsInFocusZones) {
    return getPreviousElement(rootElement, currentElement, true /*checkNode*/, false /*suppressParentTraversal*/, true /*traverseChildren*/, includeElementsInFocusZones);
}
/**
 * Gets the first tabbable element. (The difference between focusable and tabbable is that tabbable elements are
 * focusable elements that also have tabIndex != -1.)
 * @param rootElement - The parent element to search beneath.
 * @param currentElement - The descendant of rootElement to start the search at.  This element is the first one checked,
 * and iteration continues forward.  Typical use passes rootElement.firstChild.
 * @param includeElementsInFocusZones - true if traversal should go into FocusZone descendants.
 * @param checkNode - Include currentElement in search when true. Defaults to true.
 * @public
 */
function getFirstTabbable(rootElement, currentElement, includeElementsInFocusZones, checkNode) {
    if (checkNode === void 0) { checkNode = true; }
    return getNextElement(rootElement, currentElement, checkNode, false /*suppressParentTraversal*/, false /*suppressChildTraversal*/, includeElementsInFocusZones, false /*allowFocusRoot*/, true /*tabbable*/);
}
/**
 * Gets the last tabbable element. (The difference between focusable and tabbable is that tabbable elements are
 * focusable elements that also have tabIndex != -1.)
 * @param rootElement - The parent element to search beneath.
 * @param currentElement - The descendant of rootElement to start the search at.  This element is the first one checked,
 * and iteration continues in reverse.  Typical use passes rootElement.lastChild.
 * @param includeElementsInFocusZones - true if traversal should go into FocusZone descendants.
 * @param checkNode - Include currentElement in search when true. Defaults to true.
 * @public
 */
function getLastTabbable(rootElement, currentElement, includeElementsInFocusZones, checkNode) {
    if (checkNode === void 0) { checkNode = true; }
    return getPreviousElement(rootElement, currentElement, checkNode, false /*suppressParentTraversal*/, true /*traverseChildren*/, includeElementsInFocusZones, false /*allowFocusRoot*/, true /*tabbable*/);
}
/**
 * Attempts to focus the first focusable element that is a child or child's child of the rootElement.
 *
 * @public
 * @param rootElement - Element to start the search for a focusable child.
 * @returns True if focus was set, false if it was not.
 */
function focusFirstChild(rootElement) {
    var element = getNextElement(rootElement, rootElement, true, false, false, true);
    if (element) {
        focusAsync(element);
        return true;
    }
    return false;
}
/**
 * Traverse to find the previous element.
 * If tabbable is true, the element must have tabIndex != -1.
 *
 * @public
 */
function getPreviousElement(rootElement, currentElement, checkNode, suppressParentTraversal, traverseChildren, includeElementsInFocusZones, allowFocusRoot, tabbable) {
    if (!currentElement || (!allowFocusRoot && currentElement === rootElement)) {
        return null;
    }
    var isCurrentElementVisible = isElementVisible(currentElement);
    // Check its children.
    if (traverseChildren &&
        isCurrentElementVisible &&
        (includeElementsInFocusZones || !(isElementFocusZone(currentElement) || isElementFocusSubZone(currentElement)))) {
        var childMatch = getPreviousElement(rootElement, currentElement.lastElementChild, true, true, true, includeElementsInFocusZones, allowFocusRoot, tabbable);
        if (childMatch) {
            if ((tabbable && isElementTabbable(childMatch, true)) || !tabbable) {
                return childMatch;
            }
            var childMatchSiblingMatch = getPreviousElement(rootElement, childMatch.previousElementSibling, true, true, true, includeElementsInFocusZones, allowFocusRoot, tabbable);
            if (childMatchSiblingMatch) {
                return childMatchSiblingMatch;
            }
            var childMatchParent = childMatch.parentElement;
            // At this point if we have not found any potential matches
            // start looking at the rest of the subtree under the currentParent.
            // NOTE: We do not want to recurse here because doing so could
            // cause elements to get skipped.
            while (childMatchParent && childMatchParent !== currentElement) {
                var childMatchParentMatch = getPreviousElement(rootElement, childMatchParent.previousElementSibling, true, true, true, includeElementsInFocusZones, allowFocusRoot, tabbable);
                if (childMatchParentMatch) {
                    return childMatchParentMatch;
                }
                childMatchParent = childMatchParent.parentElement;
            }
        }
    }
    // Check the current node, if it's not the first traversal.
    if (checkNode && isCurrentElementVisible && isElementTabbable(currentElement, tabbable)) {
        return currentElement;
    }
    // Check its previous sibling.
    var siblingMatch = getPreviousElement(rootElement, currentElement.previousElementSibling, true, true, true, includeElementsInFocusZones, allowFocusRoot, tabbable);
    if (siblingMatch) {
        return siblingMatch;
    }
    // Check its parent.
    if (!suppressParentTraversal) {
        return getPreviousElement(rootElement, currentElement.parentElement, true, false, false, includeElementsInFocusZones, allowFocusRoot, tabbable);
    }
    return null;
}
/**
 * Traverse to find the next focusable element.
 * If tabbable is true, the element must have tabIndex != -1.
 *
 * @public
 * @param checkNode - Include currentElement in search when true.
 */
function getNextElement(rootElement, currentElement, checkNode, suppressParentTraversal, suppressChildTraversal, includeElementsInFocusZones, allowFocusRoot, tabbable) {
    if (!currentElement || (currentElement === rootElement && suppressChildTraversal && !allowFocusRoot)) {
        return null;
    }
    var isCurrentElementVisible = isElementVisible(currentElement);
    // Check the current node, if it's not the first traversal.
    if (checkNode && isCurrentElementVisible && isElementTabbable(currentElement, tabbable)) {
        return currentElement;
    }
    // Check its children.
    if (!suppressChildTraversal &&
        isCurrentElementVisible &&
        (includeElementsInFocusZones || !(isElementFocusZone(currentElement) || isElementFocusSubZone(currentElement)))) {
        var childMatch = getNextElement(rootElement, currentElement.firstElementChild, true, true, false, includeElementsInFocusZones, allowFocusRoot, tabbable);
        if (childMatch) {
            return childMatch;
        }
    }
    if (currentElement === rootElement) {
        return null;
    }
    // Check its sibling.
    var siblingMatch = getNextElement(rootElement, currentElement.nextElementSibling, true, true, false, includeElementsInFocusZones, allowFocusRoot, tabbable);
    if (siblingMatch) {
        return siblingMatch;
    }
    if (!suppressParentTraversal) {
        return getNextElement(rootElement, currentElement.parentElement, false, false, true, includeElementsInFocusZones, allowFocusRoot, tabbable);
    }
    return null;
}
/**
 * Determines if an element is visible.
 *
 * @public
 */
function isElementVisible(element) {
    // If the element is not valid, return false.
    if (!element || !element.getAttribute) {
        return false;
    }
    var visibilityAttribute = element.getAttribute(IS_VISIBLE_ATTRIBUTE);
    // If the element is explicitly marked with the visibility attribute, return that value as boolean.
    if (visibilityAttribute !== null && visibilityAttribute !== undefined) {
        return visibilityAttribute === 'true';
    }
    // Fallback to other methods of determining actual visibility.
    return (element.offsetHeight !== 0 ||
        element.offsetParent !== null ||
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        element.isVisible === true); // used as a workaround for testing.
}
/**
 * Determines if an element can receive focus programmatically or via a mouse click.
 * If checkTabIndex is true, additionally checks to ensure the element can be focused with the tab key,
 * meaning tabIndex != -1.
 *
 * @public
 */
function isElementTabbable(element, checkTabIndex) {
    // If this element is null or is disabled, it is not considered tabbable.
    if (!element || element.disabled) {
        return false;
    }
    var tabIndex = 0;
    var tabIndexAttributeValue = null;
    if (element && element.getAttribute) {
        tabIndexAttributeValue = element.getAttribute('tabIndex');
        if (tabIndexAttributeValue) {
            tabIndex = parseInt(tabIndexAttributeValue, 10);
        }
    }
    var isFocusableAttribute = element.getAttribute ? element.getAttribute(IS_FOCUSABLE_ATTRIBUTE) : null;
    var isTabIndexSet = tabIndexAttributeValue !== null && tabIndex >= 0;
    var result = !!element &&
        isFocusableAttribute !== 'false' &&
        (element.tagName === 'A' ||
            element.tagName === 'BUTTON' ||
            element.tagName === 'INPUT' ||
            element.tagName === 'TEXTAREA' ||
            element.tagName === 'SELECT' ||
            isFocusableAttribute === 'true' ||
            isTabIndexSet);
    return checkTabIndex ? tabIndex !== -1 && result : result;
}
/**
 * Determines if a given element is a focus zone.
 *
 * @public
 */
function isElementFocusZone(element) {
    return !!(element && element.getAttribute && !!element.getAttribute(FOCUSZONE_ID_ATTRIBUTE));
}
/**
 * Determines if a given element is a focus sub zone.
 *
 * @public
 */
function isElementFocusSubZone(element) {
    return !!(element && element.getAttribute && element.getAttribute(FOCUSZONE_SUB_ATTRIBUTE) === 'true');
}
/**
 * Determines if an element, or any of its children, contain focus.
 *
 * @public
 */
function doesElementContainFocus(element) {
    var document = (0,_dom_getDocument__WEBPACK_IMPORTED_MODULE_0__.getDocument)(element);
    var currentActiveElement = document && document.activeElement;
    if (currentActiveElement && (0,_dom_elementContains__WEBPACK_IMPORTED_MODULE_1__.elementContains)(element, currentActiveElement)) {
        return true;
    }
    return false;
}
/**
 * Determines if an, or any of its ancestors, sepcificies that it doesn't want focus to wrap
 * @param element - element to start searching from
 * @param noWrapDataAttribute - the no wrap data attribute to match (either)
 * @returns true if focus should wrap, false otherwise
 */
function shouldWrapFocus(element, noWrapDataAttribute) {
    return (0,_dom_elementContainsAttribute__WEBPACK_IMPORTED_MODULE_2__.elementContainsAttribute)(element, noWrapDataAttribute) === 'true' ? false : true;
}
var targetToFocusOnNextRepaint = undefined;
/**
 * Sets focus to an element asynchronously. The focus will be set at the next browser repaint,
 * meaning it won't cause any extra recalculations. If more than one focusAsync is called during one frame,
 * only the latest called focusAsync element will actually be focused
 * @param element - The element to focus
 */
function focusAsync(element) {
    if (element) {
        // An element was already queued to be focused, so replace that one with the new element
        if (targetToFocusOnNextRepaint) {
            targetToFocusOnNextRepaint = element;
            return;
        }
        targetToFocusOnNextRepaint = element;
        var win = (0,_dom_getWindow__WEBPACK_IMPORTED_MODULE_3__.getWindow)(element);
        if (win) {
            // element.focus() is a no-op if the element is no longer in the DOM, meaning this is always safe
            win.requestAnimationFrame(function () {
                targetToFocusOnNextRepaint && targetToFocusOnNextRepaint.focus();
                // We are done focusing for this frame, so reset the queued focus element
                targetToFocusOnNextRepaint = undefined;
            });
        }
    }
}
/**
 * Finds the closest focusable element via an index path from a parent. See
 * `getElementIndexPath` for getting an index path from an element to a child.
 */
function getFocusableByIndexPath(parent, path) {
    var element = parent;
    for (var _i = 0, path_1 = path; _i < path_1.length; _i++) {
        var index = path_1[_i];
        var nextChild = element.children[Math.min(index, element.children.length - 1)];
        if (!nextChild) {
            break;
        }
        element = nextChild;
    }
    element =
        isElementTabbable(element) && isElementVisible(element)
            ? element
            : getNextElement(parent, element, true) || getPreviousElement(parent, element);
    return element;
}
/**
 * Finds the element index path from a parent element to a child element.
 *
 * If you had this node structure: "A has children [B, C] and C has child D",
 * the index path from A to D would be [1, 0], or `parent.chidren[1].children[0]`.
 */
function getElementIndexPath(fromElement, toElement) {
    var path = [];
    while (toElement && fromElement && toElement !== fromElement) {
        var parent_1 = (0,_dom_getParent__WEBPACK_IMPORTED_MODULE_4__.getParent)(toElement, true);
        if (parent_1 === null) {
            return [];
        }
        path.unshift(Array.prototype.indexOf.call(parent_1.children, toElement));
        toElement = parent_1;
    }
    return path;
}
//# sourceMappingURL=focus.js.map

/***/ }),
/* 162 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "elementContains": () => (/* binding */ elementContains)
/* harmony export */ });
/* harmony import */ var _getParent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(163);

/**
 * Determines whether or not a parent element contains a given child element.
 * If `allowVirtualParents` is true, this method may return `true` if the child
 * has the parent in its virtual element hierarchy.
 *
 * @public
 */
function elementContains(parent, child, allowVirtualParents) {
    if (allowVirtualParents === void 0) { allowVirtualParents = true; }
    var isContained = false;
    if (parent && child) {
        if (allowVirtualParents) {
            if (parent === child) {
                isContained = true;
            }
            else {
                isContained = false;
                while (child) {
                    var nextParent = (0,_getParent__WEBPACK_IMPORTED_MODULE_0__.getParent)(child);
                    if (nextParent === parent) {
                        isContained = true;
                        break;
                    }
                    child = nextParent;
                }
            }
        }
        else if (parent.contains) {
            isContained = parent.contains(child);
        }
    }
    return isContained;
}
//# sourceMappingURL=elementContains.js.map

/***/ }),
/* 163 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getParent": () => (/* binding */ getParent)
/* harmony export */ });
/* harmony import */ var _getVirtualParent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(164);

/**
 * Gets the element which is the parent of a given element.
 * If `allowVirtuaParents` is `true`, this method prefers the virtual parent over
 * real DOM parent when present.
 *
 * @public
 */
function getParent(child, allowVirtualParents) {
    if (allowVirtualParents === void 0) { allowVirtualParents = true; }
    return (child &&
        ((allowVirtualParents && (0,_getVirtualParent__WEBPACK_IMPORTED_MODULE_0__.getVirtualParent)(child)) || (child.parentNode && child.parentNode)));
}
//# sourceMappingURL=getParent.js.map

/***/ }),
/* 164 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getVirtualParent": () => (/* binding */ getVirtualParent)
/* harmony export */ });
/* harmony import */ var _isVirtualElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(165);

/**
 * Gets the virtual parent given the child element, if it exists.
 *
 * @public
 */
function getVirtualParent(child) {
    var parent;
    if (child && (0,_isVirtualElement__WEBPACK_IMPORTED_MODULE_0__.isVirtualElement)(child)) {
        parent = child._virtual.parent;
    }
    return parent;
}
//# sourceMappingURL=getVirtualParent.js.map

/***/ }),
/* 165 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isVirtualElement": () => (/* binding */ isVirtualElement)
/* harmony export */ });
/**
 * Determines whether or not an element has the virtual hierarchy extension.
 *
 * @public
 */
function isVirtualElement(element) {
    return element && !!element._virtual;
}
//# sourceMappingURL=isVirtualElement.js.map

/***/ }),
/* 166 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "elementContainsAttribute": () => (/* binding */ elementContainsAttribute)
/* harmony export */ });
/* harmony import */ var _findElementRecursive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(167);

/**
 * Determines if an element, or any of its ancestors, contain the given attribute
 * @param element - element to start searching at
 * @param attribute - the attribute to search for
 * @returns the value of the first instance found
 */
function elementContainsAttribute(element, attribute) {
    var elementMatch = (0,_findElementRecursive__WEBPACK_IMPORTED_MODULE_0__.findElementRecursive)(element, function (testElement) { return testElement.hasAttribute(attribute); });
    return elementMatch && elementMatch.getAttribute(attribute);
}
//# sourceMappingURL=elementContainsAttribute.js.map

/***/ }),
/* 167 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "findElementRecursive": () => (/* binding */ findElementRecursive)
/* harmony export */ });
/* harmony import */ var _getParent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(163);

/**
 * Finds the first parent element where the matchFunction returns true
 * @param element - element to start searching at
 * @param matchFunction - the function that determines if the element is a match
 * @returns the matched element or null no match was found
 */
function findElementRecursive(element, matchFunction) {
    if (!element || element === document.body) {
        return null;
    }
    return matchFunction(element) ? element : findElementRecursive((0,_getParent__WEBPACK_IMPORTED_MODULE_0__.getParent)(element), matchFunction);
}
//# sourceMappingURL=findElementRecursive.js.map

/***/ }),
/* 168 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Async": () => (/* binding */ Async)
/* harmony export */ });
/* harmony import */ var _dom_getWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);

/**
 * Bugs often appear in async code when stuff gets disposed, but async operations don't get canceled.
 * This Async helper class solves these issues by tying async code to the lifetime of a disposable object.
 *
 * Usage: Anything class extending from BaseModel can access this helper via this.async. Otherwise create a
 * new instance of the class and remember to call dispose() during your code's dispose handler.
 *
 * @public
 */
var Async = /** @class */ (function () {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function Async(parent, onError) {
        this._timeoutIds = null;
        this._immediateIds = null;
        this._intervalIds = null;
        this._animationFrameIds = null;
        this._isDisposed = false;
        this._parent = parent || null;
        this._onErrorHandler = onError;
        this._noop = function () {
            /* do nothing */
        };
    }
    /**
     * Dispose function, clears all async operations.
     */
    Async.prototype.dispose = function () {
        var id;
        this._isDisposed = true;
        this._parent = null;
        // Clear timeouts.
        if (this._timeoutIds) {
            for (id in this._timeoutIds) {
                if (this._timeoutIds.hasOwnProperty(id)) {
                    this.clearTimeout(parseInt(id, 10));
                }
            }
            this._timeoutIds = null;
        }
        // Clear immediates.
        if (this._immediateIds) {
            for (id in this._immediateIds) {
                if (this._immediateIds.hasOwnProperty(id)) {
                    this.clearImmediate(parseInt(id, 10));
                }
            }
            this._immediateIds = null;
        }
        // Clear intervals.
        if (this._intervalIds) {
            for (id in this._intervalIds) {
                if (this._intervalIds.hasOwnProperty(id)) {
                    this.clearInterval(parseInt(id, 10));
                }
            }
            this._intervalIds = null;
        }
        // Clear animation frames.
        if (this._animationFrameIds) {
            for (id in this._animationFrameIds) {
                if (this._animationFrameIds.hasOwnProperty(id)) {
                    this.cancelAnimationFrame(parseInt(id, 10));
                }
            }
            this._animationFrameIds = null;
        }
    };
    /**
     * SetTimeout override, which will auto cancel the timeout during dispose.
     * @param callback - Callback to execute.
     * @param duration - Duration in milliseconds.
     * @returns The setTimeout id.
     */
    Async.prototype.setTimeout = function (callback, duration) {
        var _this = this;
        var timeoutId = 0;
        if (!this._isDisposed) {
            if (!this._timeoutIds) {
                this._timeoutIds = {};
            }
            timeoutId = setTimeout(function () {
                // Time to execute the timeout, enqueue it as a foreground task to be executed.
                try {
                    // Now delete the record and call the callback.
                    if (_this._timeoutIds) {
                        delete _this._timeoutIds[timeoutId];
                    }
                    callback.apply(_this._parent);
                }
                catch (e) {
                    _this._logError(e);
                }
            }, duration);
            this._timeoutIds[timeoutId] = true;
        }
        return timeoutId;
    };
    /**
     * Clears the timeout.
     * @param id - Id to cancel.
     */
    Async.prototype.clearTimeout = function (id) {
        if (this._timeoutIds && this._timeoutIds[id]) {
            clearTimeout(id);
            delete this._timeoutIds[id];
        }
    };
    /**
     * SetImmediate override, which will auto cancel the immediate during dispose.
     * @param callback - Callback to execute.
     * @param targetElement - Optional target element to use for identifying the correct window.
     * @returns The setTimeout id.
     */
    Async.prototype.setImmediate = function (callback, targetElement) {
        var _this = this;
        var immediateId = 0;
        var win = (0,_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__.getWindow)(targetElement);
        if (!this._isDisposed) {
            if (!this._immediateIds) {
                this._immediateIds = {};
            }
            var setImmediateCallback = function () {
                // Time to execute the timeout, enqueue it as a foreground task to be executed.
                try {
                    // Now delete the record and call the callback.
                    if (_this._immediateIds) {
                        delete _this._immediateIds[immediateId];
                    }
                    callback.apply(_this._parent);
                }
                catch (e) {
                    _this._logError(e);
                }
            };
            immediateId = win.setTimeout(setImmediateCallback, 0);
            this._immediateIds[immediateId] = true;
        }
        return immediateId;
    };
    /**
     * Clears the immediate.
     * @param id - Id to cancel.
     * @param targetElement - Optional target element to use for identifying the correct window.
     */
    Async.prototype.clearImmediate = function (id, targetElement) {
        var win = (0,_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__.getWindow)(targetElement);
        if (this._immediateIds && this._immediateIds[id]) {
            win.clearTimeout(id);
            delete this._immediateIds[id];
        }
    };
    /**
     * SetInterval override, which will auto cancel the timeout during dispose.
     * @param callback - Callback to execute.
     * @param duration - Duration in milliseconds.
     * @returns The setTimeout id.
     */
    Async.prototype.setInterval = function (callback, duration) {
        var _this = this;
        var intervalId = 0;
        if (!this._isDisposed) {
            if (!this._intervalIds) {
                this._intervalIds = {};
            }
            intervalId = setInterval(function () {
                // Time to execute the interval callback, enqueue it as a foreground task to be executed.
                try {
                    callback.apply(_this._parent);
                }
                catch (e) {
                    _this._logError(e);
                }
            }, duration);
            this._intervalIds[intervalId] = true;
        }
        return intervalId;
    };
    /**
     * Clears the interval.
     * @param id - Id to cancel.
     */
    Async.prototype.clearInterval = function (id) {
        if (this._intervalIds && this._intervalIds[id]) {
            clearInterval(id);
            delete this._intervalIds[id];
        }
    };
    /**
     * Creates a function that, when executed, will only call the func function at most once per
     * every wait milliseconds. Provide an options object to indicate that func should be invoked
     * on the leading and/or trailing edge of the wait timeout. Subsequent calls to the throttled
     * function will return the result of the last func call.
     *
     * Note: If leading and trailing options are true func will be called on the trailing edge of
     * the timeout only if the throttled function is invoked more than once during the wait timeout.
     *
     * @param func - The function to throttle.
     * @param wait - The number of milliseconds to throttle executions to. Defaults to 0.
     * @param options - The options object.
     * @returns The new throttled function.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Async.prototype.throttle = function (func, wait, options) {
        var _this = this;
        if (this._isDisposed) {
            return this._noop;
        }
        var waitMS = wait || 0;
        var leading = true;
        var trailing = true;
        var lastExecuteTime = 0;
        var lastResult;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var lastArgs;
        var timeoutId = null;
        if (options && typeof options.leading === 'boolean') {
            leading = options.leading;
        }
        if (options && typeof options.trailing === 'boolean') {
            trailing = options.trailing;
        }
        var callback = function (userCall) {
            var now = Date.now();
            var delta = now - lastExecuteTime;
            var waitLength = leading ? waitMS - delta : waitMS;
            if (delta >= waitMS && (!userCall || leading)) {
                lastExecuteTime = now;
                if (timeoutId) {
                    _this.clearTimeout(timeoutId);
                    timeoutId = null;
                }
                lastResult = func.apply(_this._parent, lastArgs);
            }
            else if (timeoutId === null && trailing) {
                timeoutId = _this.setTimeout(callback, waitLength);
            }
            return lastResult;
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var resultFunction = (function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            lastArgs = args;
            return callback(true);
        });
        return resultFunction;
    };
    /**
     * Creates a function that will delay the execution of func until after wait milliseconds have
     * elapsed since the last time it was invoked. Provide an options object to indicate that func
     * should be invoked on the leading and/or trailing edge of the wait timeout. Subsequent calls
     * to the debounced function will return the result of the last func call.
     *
     * Note: If leading and trailing options are true func will be called on the trailing edge of
     * the timeout only if the debounced function is invoked more than once during the wait
     * timeout.
     *
     * @param func - The function to debounce.
     * @param wait - The number of milliseconds to delay.
     * @param options - The options object.
     * @returns The new debounced function.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Async.prototype.debounce = function (func, wait, options) {
        var _this = this;
        if (this._isDisposed) {
            var noOpFunction = (function () {
                /** Do nothing */
            });
            noOpFunction.cancel = function () {
                return;
            };
            noOpFunction.flush = (function () { return null; });
            noOpFunction.pending = function () { return false; };
            return noOpFunction;
        }
        var waitMS = wait || 0;
        var leading = false;
        var trailing = true;
        var maxWait = null;
        var lastCallTime = 0;
        var lastExecuteTime = Date.now();
        var lastResult;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var lastArgs;
        var timeoutId = null;
        if (options && typeof options.leading === 'boolean') {
            leading = options.leading;
        }
        if (options && typeof options.trailing === 'boolean') {
            trailing = options.trailing;
        }
        if (options && typeof options.maxWait === 'number' && !isNaN(options.maxWait)) {
            maxWait = options.maxWait;
        }
        var markExecuted = function (time) {
            if (timeoutId) {
                _this.clearTimeout(timeoutId);
                timeoutId = null;
            }
            lastExecuteTime = time;
        };
        var invokeFunction = function (time) {
            markExecuted(time);
            lastResult = func.apply(_this._parent, lastArgs);
        };
        var callback = function (userCall) {
            var now = Date.now();
            var executeImmediately = false;
            if (userCall) {
                if (leading && now - lastCallTime >= waitMS) {
                    executeImmediately = true;
                }
                lastCallTime = now;
            }
            var delta = now - lastCallTime;
            var waitLength = waitMS - delta;
            var maxWaitDelta = now - lastExecuteTime;
            var maxWaitExpired = false;
            if (maxWait !== null) {
                // maxWait only matters when there is a pending callback
                if (maxWaitDelta >= maxWait && timeoutId) {
                    maxWaitExpired = true;
                }
                else {
                    waitLength = Math.min(waitLength, maxWait - maxWaitDelta);
                }
            }
            if (delta >= waitMS || maxWaitExpired || executeImmediately) {
                invokeFunction(now);
            }
            else if ((timeoutId === null || !userCall) && trailing) {
                timeoutId = _this.setTimeout(callback, waitLength);
            }
            return lastResult;
        };
        var pending = function () {
            return !!timeoutId;
        };
        var cancel = function () {
            if (pending()) {
                // Mark the debounced function as having executed
                markExecuted(Date.now());
            }
        };
        var flush = function () {
            if (pending()) {
                invokeFunction(Date.now());
            }
            return lastResult;
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var resultFunction = (function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            lastArgs = args;
            return callback(true);
        });
        resultFunction.cancel = cancel;
        resultFunction.flush = flush;
        resultFunction.pending = pending;
        return resultFunction;
    };
    Async.prototype.requestAnimationFrame = function (callback, targetElement) {
        var _this = this;
        var animationFrameId = 0;
        var win = (0,_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__.getWindow)(targetElement);
        if (!this._isDisposed) {
            if (!this._animationFrameIds) {
                this._animationFrameIds = {};
            }
            var animationFrameCallback = function () {
                try {
                    // Now delete the record and call the callback.
                    if (_this._animationFrameIds) {
                        delete _this._animationFrameIds[animationFrameId];
                    }
                    callback.apply(_this._parent);
                }
                catch (e) {
                    _this._logError(e);
                }
            };
            animationFrameId = win.requestAnimationFrame
                ? win.requestAnimationFrame(animationFrameCallback)
                : win.setTimeout(animationFrameCallback, 0);
            this._animationFrameIds[animationFrameId] = true;
        }
        return animationFrameId;
    };
    Async.prototype.cancelAnimationFrame = function (id, targetElement) {
        var win = (0,_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__.getWindow)(targetElement);
        if (this._animationFrameIds && this._animationFrameIds[id]) {
            win.cancelAnimationFrame ? win.cancelAnimationFrame(id) : win.clearTimeout(id);
            delete this._animationFrameIds[id];
        }
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Async.prototype._logError = function (e) {
        if (this._onErrorHandler) {
            this._onErrorHandler(e);
        }
    };
    return Async;
}());

//# sourceMappingURL=Async.js.map

/***/ }),
/* 169 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initializeComponentRef": () => (/* binding */ initializeComponentRef)
/* harmony export */ });
/* harmony import */ var _extendComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(170);

/**
 * Helper to manage componentRef resolution. Internally appends logic to
 * lifetime methods to resolve componentRef to the passed in object.
 *
 * Usage: call initializeComponentRef(this) in the constructor,
 */
function initializeComponentRef(obj) {
    (0,_extendComponent__WEBPACK_IMPORTED_MODULE_0__.extendComponent)(obj, {
        componentDidMount: _onMount,
        componentDidUpdate: _onUpdate,
        componentWillUnmount: _onUnmount,
    });
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function _onMount() {
    _setComponentRef(this.props.componentRef, this);
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function _onUpdate(prevProps) {
    if (prevProps.componentRef !== this.props.componentRef) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        _setComponentRef(prevProps.componentRef, null);
        _setComponentRef(this.props.componentRef, this);
    }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function _onUnmount() {
    _setComponentRef(this.props.componentRef, null);
}
function _setComponentRef(componentRef, value) {
    if (componentRef) {
        if (typeof componentRef === 'object') {
            componentRef.current = value;
        }
        else if (typeof componentRef === 'function') {
            componentRef(value);
        }
    }
}
//# sourceMappingURL=initializeComponentRef.js.map

/***/ }),
/* 170 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "extendComponent": () => (/* binding */ extendComponent)
/* harmony export */ });
/* harmony import */ var _appendFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(171);

/**
 * Extends a component's lifetime methods by appending new functions to the existing lifetime functions.
 */
function extendComponent(parent, methods) {
    for (var name_1 in methods) {
        if (methods.hasOwnProperty(name_1)) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            parent[name_1] = (0,_appendFunction__WEBPACK_IMPORTED_MODULE_0__.appendFunction)(parent, parent[name_1], methods[name_1]);
        }
    }
}
//# sourceMappingURL=extendComponent.js.map

/***/ }),
/* 171 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appendFunction": () => (/* binding */ appendFunction)
/* harmony export */ });
/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Returns a single function which will call each of the given functions in the context of the
 * parent.
 */
function appendFunction(parent) {
    var functions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        functions[_i - 1] = arguments[_i];
    }
    if (functions.length < 2) {
        return functions[0];
    }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        functions.forEach(function (f) { return f && f.apply(parent, args); });
    };
}
//# sourceMappingURL=appendFunction.js.map

/***/ }),
/* 172 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "warnDeprecations": () => (/* binding */ warnDeprecations)
/* harmony export */ });
/* harmony import */ var _warn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(124);
/* provided dependency */ var process = __webpack_require__(3);

/**
 * Warns when a deprecated props are being used.
 *
 * @public
 * @param componentName - The name of the component being used.
 * @param props - The props passed into the component.
 * @param deprecationMap - The map of deprecations, where key is the prop name and the value is
 * either null or a replacement prop name.
 */
function warnDeprecations(componentName, props, deprecationMap) {
    if (process.env.NODE_ENV !== 'production') {
        for (var propName in deprecationMap) {
            if (props && propName in props) {
                var deprecationMessage = componentName + " property '" + propName + "' was used but has been deprecated.";
                var replacementPropName = deprecationMap[propName];
                if (replacementPropName) {
                    deprecationMessage += " Use '" + replacementPropName + "' instead.";
                }
                (0,_warn__WEBPACK_IMPORTED_MODULE_0__.warn)(deprecationMessage);
            }
        }
    }
}
//# sourceMappingURL=warnDeprecations.js.map

/***/ }),
/* 173 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuContext": () => (/* binding */ MenuContext),
/* harmony export */   "useMenuContext": () => (/* binding */ useMenuContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

var MenuContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext({});
var useMenuContext = function () {
    return react__WEBPACK_IMPORTED_MODULE_0__.useContext(MenuContext);
};
//# sourceMappingURL=MenuContext.js.map

/***/ }),
/* 174 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Callout": () => (/* binding */ Callout)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _CalloutContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(175);
/* harmony import */ var _Layer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(184);




var Callout = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (_a, forwardedRef) {
    var layerProps = _a.layerProps, doNotLayer = _a.doNotLayer, rest = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__rest)(_a, ["layerProps", "doNotLayer"]);
    var content = react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CalloutContent__WEBPACK_IMPORTED_MODULE_2__.CalloutContent, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, rest, { doNotLayer: doNotLayer, ref: forwardedRef }));
    return doNotLayer ? content : react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Layer__WEBPACK_IMPORTED_MODULE_3__.Layer, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, layerProps), content);
});
Callout.displayName = 'Callout';
//# sourceMappingURL=Callout.js.map

/***/ }),
/* 175 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalloutContent": () => (/* binding */ CalloutContent)
/* harmony export */ });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);
/* harmony import */ var _CalloutContent_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(176);
/* harmony import */ var _CalloutContent_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(183);



var CalloutContent = (0,_Utilities__WEBPACK_IMPORTED_MODULE_0__.styled)(_CalloutContent_base__WEBPACK_IMPORTED_MODULE_1__.CalloutContentBase, _CalloutContent_styles__WEBPACK_IMPORTED_MODULE_2__.getStyles, undefined, {
    scope: 'CalloutContent',
});
//# sourceMappingURL=CalloutContent.js.map

/***/ }),
/* 176 */,
/* 177 */,
/* 178 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__positioningTestPackage": () => (/* binding */ __positioningTestPackage),
/* harmony export */   "positionElement": () => (/* binding */ positionElement),
/* harmony export */   "positionCallout": () => (/* binding */ positionCallout),
/* harmony export */   "positionCard": () => (/* binding */ positionCard),
/* harmony export */   "getMaxHeight": () => (/* binding */ getMaxHeight),
/* harmony export */   "getOppositeEdge": () => (/* binding */ getOppositeEdge),
/* harmony export */   "getBoundsFromTargetWindow": () => (/* binding */ getBoundsFromTargetWindow)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49);
/* harmony import */ var _common_DirectionalHint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(139);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(180);
/* harmony import */ var _positioning_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(177);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(179);
var _a;





function _createPositionData(targetEdge, alignmentEdge, isAuto) {
    return {
        targetEdge: targetEdge,
        alignmentEdge: alignmentEdge,
        isAuto: isAuto,
    };
}
// Currently the beakPercent is set to 50 for all positions meaning that it should tend to the center of the target
var DirectionalDictionary = (_a = {},
    _a[_common_DirectionalHint__WEBPACK_IMPORTED_MODULE_0__.DirectionalHint.topLeftEdge] = _createPositionData(_positioning_types__WEBPACK_IMPORTED_MODULE_1__.RectangleEdge.top, _positioning_types__WEBPACK_IMPORTED_MODULE_1__.RectangleEdge.left),
    _a[_common_DirectionalHint__WEBPACK_IMPORTED_MODULE_0__.DirectionalHint.topCenter] = _createPositionData(_positioning_types__WEBPACK_IMPORTED_MODULE_1__.RectangleEdge.top),
    _a[_common_DirectionalHint__WEBPACK_IMPORTED_MODULE_0__.DirectionalHint.topRightEdge] = _createPositionData(_positioning_types__WEBPACK_IMPORTED_MODULE_1__.RectangleEdge.top, _positioning_types__WEBPACK_IMPORTED_MODULE_1__.RectangleEdge.right),
    _a[_common_DirectionalHint__WEBPACK_IMPORTED_MODULE_0__.DirectionalHint.topAutoEdge] = _createPositionData(_positioning_types__WEBPACK_IMPORTED_MODULE_1__.RectangleEdge.top, undefined, true),
    _a[_common_DirectionalHint__WEBPACK_IMPORTED_MODULE_0__.DirectionalHint.bottomLeftEdge] = _createPositionData(_positioning_types__WEBPACK_IMPORTED_MODULE_1__.RectangleEdge.bottom, _positioning_types__WEBPACK_IMPORTED_MODULE_1__.RectangleEdge.left),
    _a[_common_DirectionalHint__WEBPACK_IMPORTED_MODULE_0__.DirectionalHint.bottomCenter] = _createPositionData(_positioning_types__WEBPACK_IMPORTED_MODULE_1__.RectangleEdge.bottom),
    _a[_common_DirectionalHint__WEBPACK_IMPORTED_MODULE_0__.DirectionalHint.bottomRightEdge] = _createPositionData(_positioning_types__WEBPACK_IMPORTED_MODULE_1__.RectangleEdge.bottom, _positioning_types__WEBPACK_IMPORTED_MODULE_1__.RectangleEdge.right),
    _a[_common_DirectionalHint__WEBPACK_IMPORTED_MODULE_0__.DirectionalHint.bottomAutoEdge] = _createPositionData(_positioning_types__WEBPACK_IMPORTED_MODULE_1__.RectangleEdge.bottom, undefined, true),
    _a[_common_DirectionalHint__WEBPACK_IMPORTED_MODULE_0__.DirectionalHint.leftTopEdge] = _createPositionData(_positioning_types__WEBPACK_IMPORTED_MODULE_1__.RectangleEdge.left, _positioning_types__WEBPACK_IMPORTED_MODULE_1__.RectangleEdge.top),
    _a[_common_DirectionalHint__WEBPACK_IMPORTED_MODULE_0__.DirectionalHint.leftCenter] = _createPositionData(_positioning_types__WEBPACK_IMPORTED_MODULE_1__.RectangleEdge.left),
    _a[_common_DirectionalHint__WEBPACK_IMPORTED_MODULE_0__.DirectionalHint.leftBottomEdge] = _createPositionData(_positioning_types__WEBPACK_IMPORTED_MODULE_1__.RectangleEdge.left, _positioning_types__WEBPACK_IMPORTED_MODULE_1__.RectangleEdge.bottom),
    _a[_common_DirectionalHint__WEBPACK_IMPORTED_MODULE_0__.DirectionalHint.rightTopEdge] = _createPositionData(_positioning_types__WEBPACK_IMPORTED_MODULE_1__.RectangleEdge.right, _positioning_types__WEBPACK_IMPORTED_MODULE_1__.RectangleEdge.top),
    _a[_common_DirectionalHint__WEBPACK_IMPORTED_MODULE_0__.DirectionalHint.rightCenter] = _createPositionData(_positioning_types__WEBPACK_IMPORTED_MODULE_1__.RectangleEdge.right),
    _a[_common_DirectionalHint__WEBPACK_IMPORTED_MODULE_0__.DirectionalHint.rightBottomEdge] = _createPositionData(_positioning_types__WEBPACK_IMPORTED_MODULE_1__.RectangleEdge.right, _positioning_types__WEBPACK_IMPORTED_MODULE_1__.RectangleEdge.bottom),
    _a);
function _isRectangleWithinBounds(rect, boundingRect) {
    if (rect.top < boundingRect.top) {
        return false;
    }
    if (rect.bottom > boundingRect.bottom) {
        return false;
    }
    if (rect.left < boundingRect.left) {
        return false;
    }
    if (rect.right > boundingRect.right) {
        return false;
    }
    return true;
}
/**
 * Gets all of the edges of a rectangle that are outside of the given bounds.
 * If there are no out of bounds edges it returns an empty array.
 */
function _getOutOfBoundsEdges(rect, boundingRect) {
    var outOfBounds = [];
    if (rect.top < boundingRect.top) {
        outOfBounds.push(_positioning_types__WEBPACK_IMPORTED_MODULE_1__.RectangleEdge.top);
    }
    if (rect.bottom > boundingRect.bottom) {
        outOfBounds.push(_positioning_types__WEBPACK_IMPORTED_MODULE_1__.RectangleEdge.bottom);
    }
    if (rect.left < boundingRect.left) {
        outOfBounds.push(_positioning_types__WEBPACK_IMPORTED_MODULE_1__.RectangleEdge.left);
    }
    if (rect.right > boundingRect.right) {
        outOfBounds.push(_positioning_types__WEBPACK_IMPORTED_MODULE_1__.RectangleEdge.right);
    }
    return outOfBounds;
}
function _getEdgeValue(rect, edge) {
    return rect[_positioning_types__WEBPACK_IMPORTED_MODULE_1__.RectangleEdge[edge]];
}
function _setEdgeValue(rect, edge, value) {
    rect[_positioning_types__WEBPACK_IMPORTED_MODULE_1__.RectangleEdge[edge]] = value;
    return rect;
}
/**
 * Returns the middle value of an edge. Only returns 1 value rather than xy coordinates as
 * the itself already contains the other coordinate.
 * For instance, a bottom edge's current value is it's y coordinate, so the number returned is the x.
 */
function _getCenterValue(rect, edge) {
    var edges = _getFlankingEdges(edge);
    return (_getEdgeValue(rect, edges.positiveEdge) + _getEdgeValue(rect, edges.negativeEdge)) / 2;
}
/**
 * Flips the value depending on the edge.
 * If the edge is a "positive" edge, Top or Left, then the value should stay as it is.
 * If the edge is a "negative" edge, Bottom or Right, then the value should be flipped.
 * This is to account for the fact that the coordinates are effectively reserved in certain cases for the
 * "negative" edges.
 *
 * For example, when testing to see if a bottom edge 1 is within the bounds of another bottom edge 2:
 * If edge 1 is greater than edge 2 then it is out of bounds. This is reversed for top edge 1 and top edge 2.
 * If top edge 1 is less than edge 2 then it is out of bounds.
 */
function _getRelativeEdgeValue(edge, value) {
    if (edge > 0) {
        return value;
    }
    else {
        return value * -1;
    }
}
function _getRelativeRectEdgeValue(edge, rect) {
    return _getRelativeEdgeValue(edge, _getEdgeValue(rect, edge));
}
function _getRelativeEdgeDifference(rect, hostRect, edge) {
    var edgeDifference = _getEdgeValue(rect, edge) - _getEdgeValue(hostRect, edge);
    return _getRelativeEdgeValue(edge, edgeDifference);
}
/**
 * Moves the edge of a rectangle to the value given. It only moves the edge in a linear direction based on that edge.
 * For example, if it's a bottom edge it will only change y coordinates.
 */
function _moveEdge(rect, edge, newValue) {
    var difference = _getEdgeValue(rect, edge) - newValue;
    rect = _setEdgeValue(rect, edge, newValue);
    rect = _setEdgeValue(rect, edge * -1, _getEdgeValue(rect, edge * -1) - difference);
    return rect;
}
/**
 * Aligns the edge on the passed in rect to the target. If there is a gap then it will have that space between the two.
 */
function _alignEdges(rect, target, edge, gap) {
    if (gap === void 0) { gap = 0; }
    return _moveEdge(rect, edge, _getEdgeValue(target, edge) + _getRelativeEdgeValue(edge, gap));
}
/**
 * Aligns the targetEdge on the passed in target to the rects corresponding opposite edge.
 * For instance if targetEdge is bottom, then the rects top will be moved to match it.
 */
function _alignOppositeEdges(rect, target, targetEdge, gap) {
    if (gap === void 0) { gap = 0; }
    var oppositeEdge = targetEdge * -1;
    var adjustedGap = _getRelativeEdgeValue(oppositeEdge, gap);
    return _moveEdge(rect, targetEdge * -1, _getEdgeValue(target, targetEdge) + adjustedGap);
}
/**
 * Tests to see if the given edge is within the bounds of the given rectangle.
 */
function _isEdgeInBounds(rect, bounds, edge) {
    var adjustedRectValue = _getRelativeRectEdgeValue(edge, rect);
    return adjustedRectValue > _getRelativeRectEdgeValue(edge, bounds);
}
/**
 * Attempts to move the rectangle through various sides of the target to find a place to fit.
 * If no fit is found, the original position should be returned.
 */
function _flipToFit(rect, target, bounding, positionData, gap) {
    if (gap === void 0) { gap = 0; }
    var directions = [
        _positioning_types__WEBPACK_IMPORTED_MODULE_1__.RectangleEdge.left,
        _positioning_types__WEBPACK_IMPORTED_MODULE_1__.RectangleEdge.right,
        _positioning_types__WEBPACK_IMPORTED_MODULE_1__.RectangleEdge.bottom,
        _positioning_types__WEBPACK_IMPORTED_MODULE_1__.RectangleEdge.top,
    ];
    // In RTL page, RectangleEdge.right has a higher priority than RectangleEdge.left, so the order should be updated.
    if ((0,_Utilities__WEBPACK_IMPORTED_MODULE_2__.getRTL)()) {
        directions[0] *= -1;
        directions[1] *= -1;
    }
    var currentEstimate = rect;
    var currentEdge = positionData.targetEdge;
    var currentAlignment = positionData.alignmentEdge;
    // Keep switching sides until one is found with enough space.
    // If all sides don't fit then return the unmodified element.
    for (var i = 0; i < 4; i++) {
        if (!_isEdgeInBounds(currentEstimate, bounding, currentEdge)) {
            directions.splice(directions.indexOf(currentEdge), 1);
            if (directions.length > 0) {
                if (directions.indexOf(currentEdge * -1) > -1) {
                    currentEdge = currentEdge * -1;
                }
                else {
                    currentAlignment = currentEdge;
                    currentEdge = directions.slice(-1)[0];
                }
                currentEstimate = _estimatePosition(rect, target, { targetEdge: currentEdge, alignmentEdge: currentAlignment }, gap);
            }
        }
        else {
            return {
                elementRectangle: currentEstimate,
                targetEdge: currentEdge,
                alignmentEdge: currentAlignment,
            };
        }
    }
    return {
        elementRectangle: rect,
        targetEdge: positionData.targetEdge,
        alignmentEdge: positionData.alignmentEdge,
    };
}
/**
 * Flips only the alignment edge of an element rectangle. This is used instead of nudging the alignment edges
 * into position, when `alignTargetEdge` is specified.
 */
function _flipAlignmentEdge(elementEstimate, target, gap, coverTarget) {
    var alignmentEdge = elementEstimate.alignmentEdge, targetEdge = elementEstimate.targetEdge, elementRectangle = elementEstimate.elementRectangle;
    var oppositeEdge = alignmentEdge * -1;
    var newEstimate = _estimatePosition(elementRectangle, target, { targetEdge: targetEdge, alignmentEdge: oppositeEdge }, gap, coverTarget);
    return {
        elementRectangle: newEstimate,
        targetEdge: targetEdge,
        alignmentEdge: oppositeEdge,
    };
}
/**
 * Adjusts a element rectangle to fit within the bounds given. If directionalHintFixed or covertarget is passed in
 * then the element will not flip sides on the target. They will, however, be nudged to fit within the bounds given.
 */
function _adjustFitWithinBounds(element, target, bounding, positionData, gap, directionalHintFixed, coverTarget) {
    if (gap === void 0) { gap = 0; }
    var alignmentEdge = positionData.alignmentEdge, alignTargetEdge = positionData.alignTargetEdge;
    var elementEstimate = {
        elementRectangle: element,
        targetEdge: positionData.targetEdge,
        alignmentEdge: alignmentEdge,
    };
    if (!directionalHintFixed && !coverTarget) {
        elementEstimate = _flipToFit(element, target, bounding, positionData, gap);
    }
    var outOfBounds = _getOutOfBoundsEdges(element, bounding);
    if (alignTargetEdge) {
        // The edge opposite to the alignment edge might be out of bounds.
        // Flip alignment to see if we can get it within bounds.
        if (elementEstimate.alignmentEdge && outOfBounds.indexOf(elementEstimate.alignmentEdge * -1) > -1) {
            var flippedElementEstimate = _flipAlignmentEdge(elementEstimate, target, gap, coverTarget);
            if (_isRectangleWithinBounds(flippedElementEstimate.elementRectangle, bounding)) {
                return flippedElementEstimate;
            }
            else {
                // If the flipped elements edges are still out of bounds, try nudging it.
                elementEstimate = _alignOutOfBoundsEdges(_getOutOfBoundsEdges(flippedElementEstimate.elementRectangle, bounding), elementEstimate, bounding);
            }
        }
    }
    else {
        elementEstimate = _alignOutOfBoundsEdges(outOfBounds, elementEstimate, bounding);
    }
    return elementEstimate;
}
/**
 * Iterates through a list of out of bounds edges and tries to nudge and align them.
 * @param outOfBoundsEdges - Array of edges that are out of bounds
 * @param elementEstimate - The current element positioning estimate
 * @param bounding - The current bounds
 */
function _alignOutOfBoundsEdges(outOfBoundsEdges, elementEstimate, bounding) {
    for (var _i = 0, outOfBoundsEdges_1 = outOfBoundsEdges; _i < outOfBoundsEdges_1.length; _i++) {
        var direction = outOfBoundsEdges_1[_i];
        elementEstimate.elementRectangle = _alignEdges(elementEstimate.elementRectangle, bounding, direction);
    }
    return elementEstimate;
}
/**
 * Moves the middle point on an edge to the point given.
 * Only moves in one direction. For instance if a bottom edge is passed in, then
 * the bottom edge will be moved in the x axis to match the point.
 */
function _centerEdgeToPoint(rect, edge, point) {
    var positiveEdge = _getFlankingEdges(edge).positiveEdge;
    var elementMiddle = _getCenterValue(rect, edge);
    var distanceToMiddle = elementMiddle - _getEdgeValue(rect, positiveEdge);
    return _moveEdge(rect, positiveEdge, point - distanceToMiddle);
}
/**
 * Moves the element rectangle to be appropriately positioned relative to a given target.
 * Does not flip or adjust the element.
 */
function _estimatePosition(elementToPosition, target, positionData, gap, coverTarget) {
    if (gap === void 0) { gap = 0; }
    var estimatedElementPosition;
    var alignmentEdge = positionData.alignmentEdge, targetEdge = positionData.targetEdge;
    var elementEdge = coverTarget ? targetEdge : targetEdge * -1;
    estimatedElementPosition = coverTarget
        ? _alignEdges(elementToPosition, target, targetEdge, gap)
        : _alignOppositeEdges(elementToPosition, target, targetEdge, gap);
    // if no alignment edge is provided it's supposed to be centered.
    if (!alignmentEdge) {
        var targetMiddlePoint = _getCenterValue(target, targetEdge);
        estimatedElementPosition = _centerEdgeToPoint(estimatedElementPosition, elementEdge, targetMiddlePoint);
    }
    else {
        estimatedElementPosition = _alignEdges(estimatedElementPosition, target, alignmentEdge);
    }
    return estimatedElementPosition;
}
/**
 * Returns the non-opposite edges of the target edge.
 * For instance if bottom is passed in then left and right will be returned.
 */
function _getFlankingEdges(edge) {
    if (edge === _positioning_types__WEBPACK_IMPORTED_MODULE_1__.RectangleEdge.top || edge === _positioning_types__WEBPACK_IMPORTED_MODULE_1__.RectangleEdge.bottom) {
        return {
            positiveEdge: _positioning_types__WEBPACK_IMPORTED_MODULE_1__.RectangleEdge.left,
            negativeEdge: _positioning_types__WEBPACK_IMPORTED_MODULE_1__.RectangleEdge.right,
        };
    }
    else {
        return {
            positiveEdge: _positioning_types__WEBPACK_IMPORTED_MODULE_1__.RectangleEdge.top,
            negativeEdge: _positioning_types__WEBPACK_IMPORTED_MODULE_1__.RectangleEdge.bottom,
        };
    }
}
/**
 * Retrieve the final value for the return edge of `elementRectangle`. If the `elementRectangle` is closer to one side
 * of the bounds versus the other, the return edge is flipped to grow inward.
 */
function _finalizeReturnEdge(elementRectangle, returnEdge, bounds) {
    if (bounds &&
        Math.abs(_getRelativeEdgeDifference(elementRectangle, bounds, returnEdge)) >
            Math.abs(_getRelativeEdgeDifference(elementRectangle, bounds, returnEdge * -1))) {
        return returnEdge * -1;
    }
    return returnEdge;
}
/**
 * Finalizes the element position based on the hostElement. Only returns the
 * rectangle values to position such that they are anchored to the target.
 * This helps prevent resizing from looking very strange.
 * For instance, if the target edge is top and aligned with the left side then
 * the bottom and left values are returned so as the Callout shrinks it shrinks towards that corner.
 */
function _finalizeElementPosition(elementRectangle, hostElement, targetEdge, bounds, alignmentEdge, coverTarget, doNotFinalizeReturnEdge) {
    var returnValue = {};
    var hostRect = _getRectangleFromElement(hostElement);
    var elementEdge = coverTarget ? targetEdge : targetEdge * -1;
    var elementEdgeString = _positioning_types__WEBPACK_IMPORTED_MODULE_1__.RectangleEdge[elementEdge];
    var returnEdge = alignmentEdge ? alignmentEdge : _getFlankingEdges(targetEdge).positiveEdge;
    if (!doNotFinalizeReturnEdge) {
        returnEdge = _finalizeReturnEdge(elementRectangle, returnEdge, bounds);
    }
    returnValue[elementEdgeString] = _getRelativeEdgeDifference(elementRectangle, hostRect, elementEdge);
    returnValue[_positioning_types__WEBPACK_IMPORTED_MODULE_1__.RectangleEdge[returnEdge]] = _getRelativeEdgeDifference(elementRectangle, hostRect, returnEdge);
    return returnValue;
}
// Since the beak is rotated 45 degrees the actual height/width is the length of the diagonal.
// We still want to position the beak based on it's midpoint which does not change. It will
// be at (beakwidth / 2, beakwidth / 2)
function _calculateActualBeakWidthInPixels(beakWidth) {
    return Math.sqrt(beakWidth * beakWidth * 2);
}
/**
 * Returns the appropriate IPositionData based on the props altered for RTL.
 * If directionalHintForRTL is passed in that is used if the page is RTL.
 * If directionalHint is specified, no directionalHintForRTL is available, and the page is RTL, the hint will be
 * flipped (e.g. bottomLeftEdge would become bottomRightEdge).
 *
 * If there is no directionalHint passed in, bottomAutoEdge is chosen automatically.
 */
function _getPositionData(directionalHint, directionalHintForRTL, previousPositions) {
    if (directionalHint === void 0) { directionalHint = _common_DirectionalHint__WEBPACK_IMPORTED_MODULE_0__.DirectionalHint.bottomAutoEdge; }
    if (previousPositions) {
        return {
            alignmentEdge: previousPositions.alignmentEdge,
            isAuto: previousPositions.isAuto,
            targetEdge: previousPositions.targetEdge,
        };
    }
    var positionInformation = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, DirectionalDictionary[directionalHint]);
    if ((0,_Utilities__WEBPACK_IMPORTED_MODULE_2__.getRTL)()) {
        // If alignment edge exists and that alignment edge is -2 or 2, right or left, then flip it.
        if (positionInformation.alignmentEdge && positionInformation.alignmentEdge % 2 === 0) {
            positionInformation.alignmentEdge = positionInformation.alignmentEdge * -1;
        }
        return directionalHintForRTL !== undefined ? DirectionalDictionary[directionalHintForRTL] : positionInformation;
    }
    return positionInformation;
}
/**
 * Gets the alignment data for the given information. This only really matters if the positioning is Auto.
 * If it is auto then the alignmentEdge should be chosen based on the target edge's position relative to
 * the center of the page.
 */
function _getAlignmentData(positionData, target, boundingRect, coverTarget, alignTargetEdge) {
    if (positionData.isAuto) {
        positionData.alignmentEdge = getClosestEdge(positionData.targetEdge, target, boundingRect);
    }
    positionData.alignTargetEdge = alignTargetEdge;
    return positionData;
}
function getClosestEdge(targetEdge, target, boundingRect) {
    var targetCenter = _getCenterValue(target, targetEdge);
    var boundingCenter = _getCenterValue(boundingRect, targetEdge);
    var _a = _getFlankingEdges(targetEdge), positiveEdge = _a.positiveEdge, negativeEdge = _a.negativeEdge;
    if (targetCenter <= boundingCenter) {
        return positiveEdge;
    }
    else {
        return negativeEdge;
    }
}
function _positionElementWithinBounds(elementToPosition, target, bounding, positionData, gap, directionalHintFixed, coverTarget) {
    var estimatedElementPosition = _estimatePosition(elementToPosition, target, positionData, gap, coverTarget);
    if (_isRectangleWithinBounds(estimatedElementPosition, bounding)) {
        return {
            elementRectangle: estimatedElementPosition,
            targetEdge: positionData.targetEdge,
            alignmentEdge: positionData.alignmentEdge,
        };
    }
    else {
        return _adjustFitWithinBounds(elementToPosition, target, bounding, positionData, gap, directionalHintFixed, coverTarget);
    }
}
function _finalizeBeakPosition(elementPosition, positionedBeak, bounds) {
    var targetEdge = elementPosition.targetEdge * -1;
    // The "host" element that we will use to help position the beak.
    var actualElement = new _Utilities__WEBPACK_IMPORTED_MODULE_4__.Rectangle(0, elementPosition.elementRectangle.width, 0, elementPosition.elementRectangle.height);
    var returnValue = {};
    var returnEdge = _finalizeReturnEdge(elementPosition.elementRectangle, elementPosition.alignmentEdge ? elementPosition.alignmentEdge : _getFlankingEdges(targetEdge).positiveEdge, bounds);
    returnValue[_positioning_types__WEBPACK_IMPORTED_MODULE_1__.RectangleEdge[targetEdge]] = _getEdgeValue(positionedBeak, targetEdge);
    returnValue[_positioning_types__WEBPACK_IMPORTED_MODULE_1__.RectangleEdge[returnEdge]] = _getRelativeEdgeDifference(positionedBeak, actualElement, returnEdge);
    return {
        elementPosition: (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, returnValue),
        closestEdge: getClosestEdge(elementPosition.targetEdge, positionedBeak, actualElement),
        targetEdge: targetEdge,
    };
}
function _positionBeak(beakWidth, elementPosition) {
    var target = elementPosition.targetRectangle;
    /**
     * Note about beak positioning: The actual beak width only matters for getting the gap between the callout and
     * target, it does not impact the beak placement within the callout. For example example, if the beakWidth is 8,
     * then the actual beakWidth is sqrroot(8^2 + 8^2) = 11.31x11.31. So the callout will need to be an extra 3 pixels
     * away from its target. While the beak is being positioned in the callout it still acts as though it were 8x8.
     */
    var _a = _getFlankingEdges(elementPosition.targetEdge), positiveEdge = _a.positiveEdge, negativeEdge = _a.negativeEdge;
    var beakTargetPoint = _getCenterValue(target, elementPosition.targetEdge);
    var elementBounds = new _Utilities__WEBPACK_IMPORTED_MODULE_4__.Rectangle(beakWidth / 2, elementPosition.elementRectangle.width - beakWidth / 2, beakWidth / 2, elementPosition.elementRectangle.height - beakWidth / 2);
    var beakPosition = new _Utilities__WEBPACK_IMPORTED_MODULE_4__.Rectangle(0, beakWidth, 0, beakWidth);
    beakPosition = _moveEdge(beakPosition, elementPosition.targetEdge * -1, -beakWidth / 2);
    beakPosition = _centerEdgeToPoint(beakPosition, elementPosition.targetEdge * -1, beakTargetPoint - _getRelativeRectEdgeValue(positiveEdge, elementPosition.elementRectangle));
    if (!_isEdgeInBounds(beakPosition, elementBounds, positiveEdge)) {
        beakPosition = _alignEdges(beakPosition, elementBounds, positiveEdge);
    }
    else if (!_isEdgeInBounds(beakPosition, elementBounds, negativeEdge)) {
        beakPosition = _alignEdges(beakPosition, elementBounds, negativeEdge);
    }
    return beakPosition;
}
function _getRectangleFromElement(element) {
    var clientRect = element.getBoundingClientRect();
    return new _Utilities__WEBPACK_IMPORTED_MODULE_4__.Rectangle(clientRect.left, clientRect.right, clientRect.top, clientRect.bottom);
}
function _getRectangleFromIRect(rect) {
    return new _Utilities__WEBPACK_IMPORTED_MODULE_4__.Rectangle(rect.left, rect.right, rect.top, rect.bottom);
}
function _getTargetRect(bounds, target) {
    var targetRectangle;
    if (target) {
        // eslint-disable-next-line no-extra-boolean-cast
        if (!!target.preventDefault) {
            var ev = target;
            targetRectangle = new _Utilities__WEBPACK_IMPORTED_MODULE_4__.Rectangle(ev.clientX, ev.clientX, ev.clientY, ev.clientY);
            // eslint-disable-next-line no-extra-boolean-cast
        }
        else if (!!target.getBoundingClientRect) {
            targetRectangle = _getRectangleFromElement(target);
            // HTMLImgElements can have x and y values. The check for it being a point must go last.
        }
        else {
            var rectOrPoint = target;
            // eslint-disable-next-line deprecation/deprecation
            var left = rectOrPoint.left || rectOrPoint.x;
            // eslint-disable-next-line deprecation/deprecation
            var top_1 = rectOrPoint.top || rectOrPoint.y;
            var right = rectOrPoint.right || left;
            var bottom = rectOrPoint.bottom || top_1;
            targetRectangle = new _Utilities__WEBPACK_IMPORTED_MODULE_4__.Rectangle(left, right, top_1, bottom);
        }
        if (!_isRectangleWithinBounds(targetRectangle, bounds)) {
            var outOfBounds = _getOutOfBoundsEdges(targetRectangle, bounds);
            for (var _i = 0, outOfBounds_1 = outOfBounds; _i < outOfBounds_1.length; _i++) {
                var direction = outOfBounds_1[_i];
                targetRectangle[_positioning_types__WEBPACK_IMPORTED_MODULE_1__.RectangleEdge[direction]] = bounds[_positioning_types__WEBPACK_IMPORTED_MODULE_1__.RectangleEdge[direction]];
            }
        }
    }
    else {
        targetRectangle = new _Utilities__WEBPACK_IMPORTED_MODULE_4__.Rectangle(0, 0, 0, 0);
    }
    return targetRectangle;
}
/**
 * If max height is less than zero it returns the bounds height instead.
 */
function _getMaxHeightFromTargetRectangle(targetRectangle, targetEdge, gapSpace, bounds, coverTarget) {
    var maxHeight = 0;
    var directionalHint = DirectionalDictionary[targetEdge];
    // If cover target is set, then the max height should be calculated using the opposite of the target edge since
    // that's the direction that the callout will expand in.
    // For instance, if the directionalhint is bottomLeftEdge then the callout will position so it's bottom edge
    // is aligned with the bottom of the target and expand up towards the top of the screen and the calculated max height
    // is (bottom of target) - (top of screen) - gapSpace.
    var target = coverTarget ? directionalHint.targetEdge * -1 : directionalHint.targetEdge;
    if (target === _positioning_types__WEBPACK_IMPORTED_MODULE_1__.RectangleEdge.top) {
        maxHeight = _getEdgeValue(targetRectangle, directionalHint.targetEdge) - bounds.top - gapSpace;
    }
    else if (target === _positioning_types__WEBPACK_IMPORTED_MODULE_1__.RectangleEdge.bottom) {
        maxHeight = bounds.bottom - _getEdgeValue(targetRectangle, directionalHint.targetEdge) - gapSpace;
    }
    else {
        maxHeight = bounds.bottom - targetRectangle.top - gapSpace;
    }
    return maxHeight > 0 ? maxHeight : bounds.height;
}
function _positionElementRelative(props, elementToPosition, boundingRect, previousPositions) {
    var gap = props.gapSpace ? props.gapSpace : 0;
    var targetRect = _getTargetRect(boundingRect, props.target);
    var positionData = _getAlignmentData(_getPositionData(props.directionalHint, props.directionalHintForRTL, previousPositions), targetRect, boundingRect, props.coverTarget, props.alignTargetEdge);
    var positionedElement = _positionElementWithinBounds(_getRectangleFromElement(elementToPosition), targetRect, boundingRect, positionData, gap, props.directionalHintFixed, props.coverTarget);
    return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, positionedElement), { targetRectangle: targetRect });
}
function _finalizePositionData(positionedElement, hostElement, bounds, coverTarget, doNotFinalizeReturnEdge) {
    var finalizedElement = _finalizeElementPosition(positionedElement.elementRectangle, hostElement, positionedElement.targetEdge, bounds, positionedElement.alignmentEdge, coverTarget, doNotFinalizeReturnEdge);
    return {
        elementPosition: finalizedElement,
        targetEdge: positionedElement.targetEdge,
        alignmentEdge: positionedElement.alignmentEdge,
    };
}
function _positionElement(props, hostElement, elementToPosition, previousPositions) {
    var boundingRect = props.bounds
        ? _getRectangleFromIRect(props.bounds)
        : new _Utilities__WEBPACK_IMPORTED_MODULE_4__.Rectangle(0, window.innerWidth - (0,_Utilities__WEBPACK_IMPORTED_MODULE_5__.getScrollbarWidth)(), 0, window.innerHeight);
    var positionedElement = _positionElementRelative(props, elementToPosition, boundingRect, previousPositions);
    return _finalizePositionData(positionedElement, hostElement, boundingRect, props.coverTarget);
}
function _positionCallout(props, hostElement, callout, previousPositions, doNotFinalizeReturnEdge) {
    var beakWidth = props.isBeakVisible ? props.beakWidth || 0 : 0;
    var gap = _calculateActualBeakWidthInPixels(beakWidth) / 2 + (props.gapSpace ? props.gapSpace : 0);
    var positionProps = props;
    positionProps.gapSpace = gap;
    var boundingRect = props.bounds
        ? _getRectangleFromIRect(props.bounds)
        : new _Utilities__WEBPACK_IMPORTED_MODULE_4__.Rectangle(0, window.innerWidth - (0,_Utilities__WEBPACK_IMPORTED_MODULE_5__.getScrollbarWidth)(), 0, window.innerHeight);
    var positionedElement = _positionElementRelative(positionProps, callout, boundingRect, previousPositions);
    var beakPositioned = _positionBeak(beakWidth, positionedElement);
    var finalizedBeakPosition = _finalizeBeakPosition(positionedElement, beakPositioned, boundingRect);
    return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, _finalizePositionData(positionedElement, hostElement, boundingRect, props.coverTarget, doNotFinalizeReturnEdge)), { beakPosition: finalizedBeakPosition });
}
function _positionCard(props, hostElement, callout, previousPositions) {
    return _positionCallout(props, hostElement, callout, previousPositions, true);
}
// END PRIVATE FUNCTIONS
var __positioningTestPackage = {
    _finalizePositionData: _finalizePositionData,
    _finalizeBeakPosition: _finalizeBeakPosition,
    _calculateActualBeakWidthInPixels: _calculateActualBeakWidthInPixels,
    _positionElementWithinBounds: _positionElementWithinBounds,
    _positionBeak: _positionBeak,
    _getPositionData: _getPositionData,
    _getMaxHeightFromTargetRectangle: _getMaxHeightFromTargetRectangle,
};
/**
 * Used to position an element relative to the given positioning props.
 * If positioning has been completed before, previousPositions can be passed to ensure that the positioning element
 * repositions based on its previous targets rather than starting with directionalhint.
 */
function positionElement(props, hostElement, elementToPosition, previousPositions) {
    return _positionElement(props, hostElement, elementToPosition, previousPositions);
}
function positionCallout(props, hostElement, elementToPosition, previousPositions) {
    return _positionCallout(props, hostElement, elementToPosition, previousPositions);
}
function positionCard(props, hostElement, elementToPosition, previousPositions) {
    return _positionCard(props, hostElement, elementToPosition, previousPositions);
}
/**
 * Gets the maximum height that a rectangle can have in order to fit below or above a target.
 * If the directional hint specifies a left or right edge (i.e. leftCenter) it will limit the height to the topBorder
 * of the target given.
 * If no bounds are provided then the window is treated as the bounds.
 */
function getMaxHeight(target, targetEdge, gapSpace, bounds, coverTarget) {
    if (gapSpace === void 0) { gapSpace = 0; }
    var mouseTarget = target;
    var elementTarget = target;
    var rectOrPointTarget = target;
    var targetRect;
    var boundingRectangle = bounds
        ? _getRectangleFromIRect(bounds)
        : new _Utilities__WEBPACK_IMPORTED_MODULE_4__.Rectangle(0, window.innerWidth - (0,_Utilities__WEBPACK_IMPORTED_MODULE_5__.getScrollbarWidth)(), 0, window.innerHeight);
    // eslint-disable-next-line deprecation/deprecation
    var left = rectOrPointTarget.left || rectOrPointTarget.x;
    // eslint-disable-next-line deprecation/deprecation
    var top = rectOrPointTarget.top || rectOrPointTarget.y;
    var right = rectOrPointTarget.right || left;
    var bottom = rectOrPointTarget.bottom || top;
    // eslint-disable-next-line no-extra-boolean-cast -- may not actually be a MouseEvent
    if (!!mouseTarget.stopPropagation) {
        targetRect = new _Utilities__WEBPACK_IMPORTED_MODULE_4__.Rectangle(mouseTarget.clientX, mouseTarget.clientX, mouseTarget.clientY, mouseTarget.clientY);
    }
    else if (left !== undefined && top !== undefined) {
        targetRect = new _Utilities__WEBPACK_IMPORTED_MODULE_4__.Rectangle(left, right, top, bottom);
    }
    else {
        targetRect = _getRectangleFromElement(elementTarget);
    }
    return _getMaxHeightFromTargetRectangle(targetRect, targetEdge, gapSpace, boundingRectangle, coverTarget);
}
/**
 * Returns the opposite edge of the given RectangleEdge.
 */
function getOppositeEdge(edge) {
    return edge * -1;
}
function _getBoundsFromTargetWindow(target, targetWindow) {
    var segments = undefined;
    if (targetWindow.getWindowSegments) {
        segments = targetWindow.getWindowSegments();
    }
    // Identify if we're dealing with single screen scenarios.
    if (segments === undefined || segments.length <= 1) {
        return {
            top: 0,
            left: 0,
            right: targetWindow.innerWidth,
            bottom: targetWindow.innerHeight,
            width: targetWindow.innerWidth,
            height: targetWindow.innerHeight,
        };
    }
    // Logic for determining dual screen scenarios.
    var x = 0;
    var y = 0;
    // If the target is an Element get coordinates for its center.
    if (target !== null && !!target.getBoundingClientRect) {
        var clientRect = target.getBoundingClientRect();
        x = (clientRect.left + clientRect.right) / 2;
        y = (clientRect.top + clientRect.bottom) / 2;
    }
    // If the target is not null get x-axis and y-axis coordinates directly.
    else if (target !== null) {
        // eslint-disable-next-line deprecation/deprecation
        x = target.left || target.x;
        // eslint-disable-next-line deprecation/deprecation
        y = target.top || target.y;
    }
    var bounds = { top: 0, left: 0, right: 0, bottom: 0, width: 0, height: 0 };
    // Define which window segment are the coordinates in and calculate bounds based on that.
    for (var _i = 0, segments_1 = segments; _i < segments_1.length; _i++) {
        var segment = segments_1[_i];
        if (x && segment.left <= x && segment.right >= x && y && segment.top <= y && segment.bottom >= y) {
            bounds = {
                top: segment.top,
                left: segment.left,
                right: segment.right,
                bottom: segment.bottom,
                width: segment.width,
                height: segment.height,
            };
        }
    }
    return bounds;
}
function getBoundsFromTargetWindow(target, targetWindow) {
    return _getBoundsFromTargetWindow(target, targetWindow);
}
//# sourceMappingURL=positioning.js.map

/***/ }),
/* 179 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Rectangle": () => (/* binding */ Rectangle)
/* harmony export */ });
/**
 * Rectangle helper class.
 *
 * @public
 * {@docCategory Rectangle}
 */
var Rectangle = /** @class */ (function () {
    function Rectangle(left, right, top, bottom) {
        if (left === void 0) { left = 0; }
        if (right === void 0) { right = 0; }
        if (top === void 0) { top = 0; }
        if (bottom === void 0) { bottom = 0; }
        this.top = top;
        this.bottom = bottom;
        this.left = left;
        this.right = right;
    }
    Object.defineProperty(Rectangle.prototype, "width", {
        /**
         * Calculated automatically by subtracting the right from left
         */
        get: function () {
            return this.right - this.left;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "height", {
        /**
         * Calculated automatically by subtracting the bottom from top.
         */
        get: function () {
            return this.bottom - this.top;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Tests if another rect is approximately equal to this rect (within 4 decimal places.)
     */
    Rectangle.prototype.equals = function (rect) {
        // Fixing to 4 decimal places because it allows enough precision and will handle cases when something
        // should be rounded, like .999999 should round to 1.
        return (parseFloat(this.top.toFixed(4)) === parseFloat(rect.top.toFixed(4)) &&
            parseFloat(this.bottom.toFixed(4)) === parseFloat(rect.bottom.toFixed(4)) &&
            parseFloat(this.left.toFixed(4)) === parseFloat(rect.left.toFixed(4)) &&
            parseFloat(this.right.toFixed(4)) === parseFloat(rect.right.toFixed(4)));
    };
    return Rectangle;
}());

//# sourceMappingURL=Rectangle.js.map

/***/ }),
/* 180 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DATA_IS_SCROLLABLE_ATTRIBUTE": () => (/* binding */ DATA_IS_SCROLLABLE_ATTRIBUTE),
/* harmony export */   "allowScrollOnElement": () => (/* binding */ allowScrollOnElement),
/* harmony export */   "allowOverscrollOnElement": () => (/* binding */ allowOverscrollOnElement),
/* harmony export */   "disableBodyScroll": () => (/* binding */ disableBodyScroll),
/* harmony export */   "enableBodyScroll": () => (/* binding */ enableBodyScroll),
/* harmony export */   "getScrollbarWidth": () => (/* binding */ getScrollbarWidth),
/* harmony export */   "findScrollableParent": () => (/* binding */ findScrollableParent)
/* harmony export */ });
/* harmony import */ var _dom_getDocument__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57);
/* harmony import */ var _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88);
/* harmony import */ var _dom_getWindow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47);



var _scrollbarWidth;
var _bodyScrollDisabledCount = 0;
var DisabledScrollClassName = (0,_fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_0__.mergeStyles)({
    overflow: 'hidden !important',
});
/**
 * Placing this attribute on scrollable divs optimizes detection to know
 * if the div is scrollable or not (given we can avoid expensive operations
 * like getComputedStyle.)
 *
 * @public
 */
var DATA_IS_SCROLLABLE_ATTRIBUTE = 'data-is-scrollable';
/**
 * Allows the user to scroll within a element,
 * while preventing the user from scrolling the body
 */
var allowScrollOnElement = function (element, events) {
    if (!element) {
        return;
    }
    var _previousClientY = 0;
    var _element = null;
    // remember the clientY for future calls of _preventOverscrolling
    var _saveClientY = function (event) {
        if (event.targetTouches.length === 1) {
            _previousClientY = event.targetTouches[0].clientY;
        }
    };
    // prevent the body from scrolling when the user attempts
    // to scroll past the top or bottom of the element
    var _preventOverscrolling = function (event) {
        // only respond to a single-finger touch
        if (event.targetTouches.length !== 1) {
            return;
        }
        // prevent the body touchmove handler from firing
        // so that scrolling is allowed within the element
        event.stopPropagation();
        if (!_element) {
            return;
        }
        var clientY = event.targetTouches[0].clientY - _previousClientY;
        var scrollableParent = findScrollableParent(event.target);
        if (scrollableParent) {
            _element = scrollableParent;
        }
        // if the element is scrolled to the top,
        // prevent the user from scrolling up
        if (_element.scrollTop === 0 && clientY > 0) {
            event.preventDefault();
        }
        // if the element is scrolled to the bottom,
        // prevent the user from scrolling down
        if (_element.scrollHeight - Math.ceil(_element.scrollTop) <= _element.clientHeight && clientY < 0) {
            event.preventDefault();
        }
    };
    events.on(element, 'touchstart', _saveClientY, { passive: false });
    events.on(element, 'touchmove', _preventOverscrolling, { passive: false });
    _element = element;
};
/**
 * Same as allowScrollOnElement but does not prevent overscrolling.
 */
var allowOverscrollOnElement = function (element, events) {
    if (!element) {
        return;
    }
    var _allowElementScroll = function (event) {
        event.stopPropagation();
    };
    events.on(element, 'touchmove', _allowElementScroll, { passive: false });
};
var _disableIosBodyScroll = function (event) {
    event.preventDefault();
};
/**
 * Disables the body scrolling.
 *
 * @public
 */
function disableBodyScroll() {
    var doc = (0,_dom_getDocument__WEBPACK_IMPORTED_MODULE_1__.getDocument)();
    if (doc && doc.body && !_bodyScrollDisabledCount) {
        doc.body.classList.add(DisabledScrollClassName);
        doc.body.addEventListener('touchmove', _disableIosBodyScroll, { passive: false, capture: false });
    }
    _bodyScrollDisabledCount++;
}
/**
 * Enables the body scrolling.
 *
 * @public
 */
function enableBodyScroll() {
    if (_bodyScrollDisabledCount > 0) {
        var doc = (0,_dom_getDocument__WEBPACK_IMPORTED_MODULE_1__.getDocument)();
        if (doc && doc.body && _bodyScrollDisabledCount === 1) {
            doc.body.classList.remove(DisabledScrollClassName);
            doc.body.removeEventListener('touchmove', _disableIosBodyScroll);
        }
        _bodyScrollDisabledCount--;
    }
}
/**
 * Calculates the width of a scrollbar for the browser/os.
 *
 * @public
 */
function getScrollbarWidth() {
    if (_scrollbarWidth === undefined) {
        var scrollDiv = document.createElement('div');
        scrollDiv.style.setProperty('width', '100px');
        scrollDiv.style.setProperty('height', '100px');
        scrollDiv.style.setProperty('overflow', 'scroll');
        scrollDiv.style.setProperty('position', 'absolute');
        scrollDiv.style.setProperty('top', '-9999px');
        document.body.appendChild(scrollDiv);
        // Get the scrollbar width
        _scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        // Delete the DIV
        document.body.removeChild(scrollDiv);
    }
    return _scrollbarWidth;
}
/**
 * Traverses up the DOM for the element with the data-is-scrollable=true attribute, or returns
 * document.body.
 *
 * @public
 */
function findScrollableParent(startingElement) {
    var el = startingElement;
    var doc = (0,_dom_getDocument__WEBPACK_IMPORTED_MODULE_1__.getDocument)(startingElement);
    // First do a quick scan for the scrollable attribute.
    while (el && el !== doc.body) {
        if (el.getAttribute(DATA_IS_SCROLLABLE_ATTRIBUTE) === 'true') {
            return el;
        }
        el = el.parentElement;
    }
    // If we haven't found it, the use the slower method: compute styles to evaluate if overflow is set.
    el = startingElement;
    while (el && el !== doc.body) {
        if (el.getAttribute(DATA_IS_SCROLLABLE_ATTRIBUTE) !== 'false') {
            var computedStyles = getComputedStyle(el);
            var overflowY = computedStyles ? computedStyles.getPropertyValue('overflow-y') : '';
            if (overflowY && (overflowY === 'scroll' || overflowY === 'auto')) {
                return el;
            }
        }
        el = el.parentElement;
    }
    // Fall back to window scroll.
    if (!el || el === doc.body) {
        el = (0,_dom_getWindow__WEBPACK_IMPORTED_MODULE_2__.getWindow)(startingElement);
    }
    return el;
}
//# sourceMappingURL=scroll.js.map

/***/ }),
/* 181 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useAsync": () => (/* binding */ useAsync)
/* harmony export */ });
/* harmony import */ var _fluentui_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(168);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _useConst__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70);



/**
 * Hook to provide an Async instance that is automatically cleaned up on dismount.
 */
function useAsync() {
    var async = (0,_useConst__WEBPACK_IMPORTED_MODULE_1__.useConst)(function () { return new _fluentui_utilities__WEBPACK_IMPORTED_MODULE_2__.Async(); });
    // Function that returns a function in order to dispose the async instance on unmount
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () { return function () { return async.dispose(); }; }, [async]);
    return async;
}
//# sourceMappingURL=useAsync.js.map

/***/ }),
/* 182 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Popup": () => (/* binding */ Popup)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(49);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(161);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(59);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(73);
/* harmony import */ var _fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(181);
/* harmony import */ var _fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(154);
/* harmony import */ var _fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(134);
/* harmony import */ var _fluentui_react_window_provider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(146);





function useScrollbarAsync(props, root) {
    var async = (0,_fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_1__.useAsync)();
    var _a = react__WEBPACK_IMPORTED_MODULE_0__.useState(false), needsVerticalScrollBarState = _a[0], setNeedsVerticalScrollBar = _a[1];
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        async.requestAnimationFrame(function () {
            var _a;
            // If overflowY is overridden, don't waste time calculating whether the scrollbar is necessary.
            if (props.style && props.style.overflowY) {
                return;
            }
            var needsVerticalScrollBar = false;
            if (root && root.current && ((_a = root.current) === null || _a === void 0 ? void 0 : _a.firstElementChild)) {
                // ClientHeight returns the client height of an element rounded to an
                // integer. On some browsers at different zoom levels this rounding
                // can generate different results for the root container and child even
                // though they are the same height. This causes us to show a scroll bar
                // when not needed. Ideally we would use BoundingClientRect().height
                // instead however seems that the API is 90% slower than using ClientHeight.
                // Therefore instead we will calculate the difference between heights and
                // allow for a 1px difference to still be considered ok and not show the
                // scroll bar.
                var rootHeight = root.current.clientHeight;
                var firstChildHeight = root.current.firstElementChild.clientHeight;
                if (rootHeight > 0 && firstChildHeight > rootHeight) {
                    needsVerticalScrollBar = firstChildHeight - rootHeight > 1;
                }
            }
            if (needsVerticalScrollBarState !== needsVerticalScrollBar) {
                setNeedsVerticalScrollBar(needsVerticalScrollBar);
            }
        });
        return function () { return async.dispose(); };
    });
    return needsVerticalScrollBarState;
}
function defaultFocusRestorer(options) {
    var originalElement = options.originalElement, containsFocus = options.containsFocus;
    if (originalElement && containsFocus && originalElement !== (0,_Utilities__WEBPACK_IMPORTED_MODULE_2__.getWindow)()) {
        // Make sure that the focus method actually exists
        // In some cases the object might exist but not be a real element.
        // This is primarily for IE 11 and should be removed once IE 11 is no longer in use.
        // This is wrapped in a setTimeout because of a React 16 bug that is resolved in 17.
        // Once we move to 17, the setTimeout should be removed (ref: https://github.com/facebook/react/issues/17894#issuecomment-656094405)
        setTimeout(function () {
            var _a;
            (_a = originalElement.focus) === null || _a === void 0 ? void 0 : _a.call(originalElement);
        }, 0);
    }
}
function useRestoreFocus(props, root) {
    var _a = props.onRestoreFocus, onRestoreFocus = _a === void 0 ? defaultFocusRestorer : _a;
    var originalFocusedElement = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    var containsFocus = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        originalFocusedElement.current = (0,_Utilities__WEBPACK_IMPORTED_MODULE_3__.getDocument)().activeElement;
        if ((0,_Utilities__WEBPACK_IMPORTED_MODULE_4__.doesElementContainFocus)(root.current)) {
            containsFocus.current = true;
        }
        return function () {
            var _a;
            onRestoreFocus === null || onRestoreFocus === void 0 ? void 0 : onRestoreFocus({
                originalElement: originalFocusedElement.current,
                containsFocus: containsFocus.current,
                documentContainsFocus: ((_a = (0,_Utilities__WEBPACK_IMPORTED_MODULE_3__.getDocument)()) === null || _a === void 0 ? void 0 : _a.hasFocus()) || false,
            });
            // De-reference DOM Node to avoid retainment via transpiled closure of _onKeyDown
            originalFocusedElement.current = undefined;
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps -- should only run on first render
    }, []);
    (0,_fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_5__.useOnEvent)(root, 'focus', react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function () {
        containsFocus.current = true;
    }, []), true);
    (0,_fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_5__.useOnEvent)(root, 'blur', react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (ev) {
        /** The popup should update this._containsFocus when:
         * relatedTarget exists AND
         * the relatedTarget is not contained within the popup.
         * If the relatedTarget is within the popup, that means the popup still has focus
         * and focused moved from one element to another within the popup.
         * If relatedTarget is undefined or null that usually means that a
         * keyboard event occurred and focus didn't change
         */
        if (root.current && ev.relatedTarget && !root.current.contains(ev.relatedTarget)) {
            containsFocus.current = false;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps -- should only run on first render
    }, []), true);
}
function useHideSiblingNodes(props) {
    var isModalOrPanel = props['aria-modal'];
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        var targetDocument = (0,_Utilities__WEBPACK_IMPORTED_MODULE_3__.getDocument)();
        if (isModalOrPanel && targetDocument) {
            var children = targetDocument.body.children;
            var nodesToHide_1 = [];
            for (var i = 0; i < children.length - 1; i++) {
                nodesToHide_1.push(children[i]);
            }
            nodesToHide_1 = nodesToHide_1.filter(function (child) {
                return child.tagName !== 'TEMPLATE' &&
                    child.tagName !== 'SCRIPT' &&
                    child.tagName !== 'STYLE' &&
                    !child.hasAttribute('aria-hidden');
            });
            nodesToHide_1.forEach(function (node) { return node.setAttribute('aria-hidden', 'true'); });
            return function () { return nodesToHide_1.forEach(function (child) { return child.removeAttribute('aria-hidden'); }); };
        }
    }, [isModalOrPanel]);
}
/**
 * This adds accessibility to Dialog and Panel controls
 */
var Popup = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, forwardedRef) {
    // Default props
    // eslint-disable-next-line deprecation/deprecation
    props = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)({ shouldRestoreFocus: true }, props);
    var root = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    var mergedRootRef = (0,_fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_7__.useMergedRefs)(root, forwardedRef);
    useHideSiblingNodes(props);
    useRestoreFocus(props, root);
    var role = props.role, className = props.className, ariaLabel = props.ariaLabel, ariaLabelledBy = props.ariaLabelledBy, ariaDescribedBy = props.ariaDescribedBy, style = props.style, children = props.children, onDismiss = props.onDismiss;
    var needsVerticalScrollBar = useScrollbarAsync(props, root);
    var onKeyDown = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (ev) {
        // eslint-disable-next-line deprecation/deprecation
        switch (ev.which) {
            case _Utilities__WEBPACK_IMPORTED_MODULE_8__.KeyCodes.escape:
                if (onDismiss) {
                    onDismiss(ev);
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                break;
        }
    }, [onDismiss]);
    var win = (0,_fluentui_react_window_provider__WEBPACK_IMPORTED_MODULE_9__.useWindow)();
    (0,_fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_5__.useOnEvent)(win, 'keydown', onKeyDown);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)({ ref: mergedRootRef }, (0,_Utilities__WEBPACK_IMPORTED_MODULE_10__.getNativeProps)(props, _Utilities__WEBPACK_IMPORTED_MODULE_10__.divProperties), { className: className, role: role, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, "aria-describedby": ariaDescribedBy, onKeyDown: onKeyDown, style: (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__assign)({ overflowY: needsVerticalScrollBar ? 'scroll' : undefined, outline: 'none' }, style) }), children));
});
//# sourceMappingURL=Popup.js.map

/***/ }),
/* 183 */,
/* 184 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Layer": () => (/* binding */ Layer)
/* harmony export */ });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);
/* harmony import */ var _Layer_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(185);
/* harmony import */ var _Layer_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(201);



var Layer = (0,_Utilities__WEBPACK_IMPORTED_MODULE_0__.styled)(_Layer_base__WEBPACK_IMPORTED_MODULE_1__.LayerBase, _Layer_styles__WEBPACK_IMPORTED_MODULE_2__.getStyles, undefined, {
    scope: 'Layer',
    fields: ['hostId', 'theme', 'styles'],
});
//# sourceMappingURL=Layer.js.map

/***/ }),
/* 185 */,
/* 186 */,
/* 187 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DATA_PORTAL_ATTRIBUTE": () => (/* binding */ DATA_PORTAL_ATTRIBUTE),
/* harmony export */   "setPortalAttribute": () => (/* binding */ setPortalAttribute)
/* harmony export */ });
var DATA_PORTAL_ATTRIBUTE = 'data-portal-element';
/**
 * Identify element as a portal by setting an attribute.
 * @param element - Element to mark as a portal.
 */
function setPortalAttribute(element) {
    element.setAttribute(DATA_PORTAL_ATTRIBUTE, 'true');
}
//# sourceMappingURL=setPortalAttribute.js.map

/***/ }),
/* 188 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setVirtualParent": () => (/* binding */ setVirtualParent)
/* harmony export */ });
/**
 * Sets the virtual parent of an element.
 * Pass `undefined` as the `parent` to clear the virtual parent.
 *
 * @public
 */
function setVirtualParent(child, parent) {
    var virtualChild = child;
    var virtualParent = parent;
    if (!virtualChild._virtual) {
        virtualChild._virtual = {
            children: [],
        };
    }
    var oldParent = virtualChild._virtual.parent;
    if (oldParent && oldParent !== parent) {
        // Remove the child from its old parent.
        var index = oldParent._virtual.children.indexOf(virtualChild);
        if (index > -1) {
            oldParent._virtual.children.splice(index, 1);
        }
    }
    virtualChild._virtual.parent = virtualParent || undefined;
    if (virtualParent) {
        if (!virtualParent._virtual) {
            virtualParent._virtual = {
                children: [],
            };
        }
        virtualParent._virtual.children.push(virtualChild);
    }
}
//# sourceMappingURL=setVirtualParent.js.map

/***/ }),
/* 189 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fabric": () => (/* binding */ Fabric)
/* harmony export */ });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);
/* harmony import */ var _Fabric_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(190);
/* harmony import */ var _Fabric_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(195);



/**
 * @deprecated This component is deprecated as of `@fluentui/react` version 8. Use `ThemeProvider` instead.
 */
var Fabric = (0,_Utilities__WEBPACK_IMPORTED_MODULE_0__.styled)(_Fabric_base__WEBPACK_IMPORTED_MODULE_1__.FabricBase, _Fabric_styles__WEBPACK_IMPORTED_MODULE_2__.getStyles, undefined, {
    scope: 'Fabric',
});
//# sourceMappingURL=Fabric.js.map

/***/ }),
/* 190 */,
/* 191 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useFocusRects": () => (/* binding */ useFocusRects),
/* harmony export */   "FocusRects": () => (/* binding */ FocusRects)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _dom_getWindow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47);
/* harmony import */ var _keyboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(192);
/* harmony import */ var _setFocusVisibility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(111);




/**
 * Counter for mounted component that uses focus rectangle.
 * We want to cleanup the listners before last component that uses focus rectangle unmounts.
 */
var mountCounters = new WeakMap();
function setMountCounters(key, delta) {
    var newValue;
    var currValue = mountCounters.get(key);
    if (currValue) {
        newValue = currValue + delta;
    }
    else {
        newValue = 1;
    }
    mountCounters.set(key, newValue);
    return newValue;
}
/**
 * Initializes the logic which:
 *
 * 1. Subscribes keydown and mousedown events. (It will only do it once per window,
 *    so it's safe to call this method multiple times.)
 * 2. When the user presses directional keyboard keys, adds the 'ms-Fabric--isFocusVisible' classname
 *    to the document body, removes the 'ms-Fabric-isFocusHidden' classname.
 * 3. When the user clicks a mouse button, adds the 'ms-Fabric-isFocusHidden' classname to the
 *    document body, removes the 'ms-Fabric--isFocusVisible' classname.
 *
 * This logic allows components on the page to conditionally render focus treatments based on
 * the existence of global classnames, which simplifies logic overall.
 *
 * @param rootRef - A Ref object. Focus rectangle can be applied on itself and all its children.
 */
function useFocusRects(rootRef) {
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        var _a;
        var win = (0,_dom_getWindow__WEBPACK_IMPORTED_MODULE_1__.getWindow)(rootRef === null || rootRef === void 0 ? void 0 : rootRef.current);
        if (!win || ((_a = win.FabricConfig) === null || _a === void 0 ? void 0 : _a.disableFocusRects) === true) {
            return undefined;
        }
        var count = setMountCounters(win, 1);
        if (count <= 1) {
            win.addEventListener('mousedown', _onMouseDown, true);
            win.addEventListener('pointerdown', _onPointerDown, true);
            win.addEventListener('keydown', _onKeyDown, true);
        }
        return function () {
            var _a;
            if (!win || ((_a = win.FabricConfig) === null || _a === void 0 ? void 0 : _a.disableFocusRects) === true) {
                return;
            }
            count = setMountCounters(win, -1);
            if (count === 0) {
                win.removeEventListener('mousedown', _onMouseDown, true);
                win.removeEventListener('pointerdown', _onPointerDown, true);
                win.removeEventListener('keydown', _onKeyDown, true);
            }
        };
    }, [rootRef]);
}
/**
 * Function Component wrapper which enables calling `useFocusRects` hook.
 * Renders nothing.
 */
var FocusRects = function (props) {
    useFocusRects(props.rootRef);
    return null;
};
function _onMouseDown(ev) {
    (0,_setFocusVisibility__WEBPACK_IMPORTED_MODULE_2__.setFocusVisibility)(false, ev.target);
}
function _onPointerDown(ev) {
    if (ev.pointerType !== 'mouse') {
        (0,_setFocusVisibility__WEBPACK_IMPORTED_MODULE_2__.setFocusVisibility)(false, ev.target);
    }
}
function _onKeyDown(ev) {
    // eslint-disable-next-line deprecation/deprecation
    if ((0,_keyboard__WEBPACK_IMPORTED_MODULE_3__.isDirectionalKeyCode)(ev.which)) {
        (0,_setFocusVisibility__WEBPACK_IMPORTED_MODULE_2__.setFocusVisibility)(true, ev.target);
    }
}
//# sourceMappingURL=useFocusRects.js.map

/***/ }),
/* 192 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isDirectionalKeyCode": () => (/* binding */ isDirectionalKeyCode),
/* harmony export */   "addDirectionalKeyCode": () => (/* binding */ addDirectionalKeyCode)
/* harmony export */ });
/* harmony import */ var _KeyCodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59);
var _a;

var DirectionalKeyCodes = (_a = {},
    _a[_KeyCodes__WEBPACK_IMPORTED_MODULE_0__.KeyCodes.up] = 1,
    _a[_KeyCodes__WEBPACK_IMPORTED_MODULE_0__.KeyCodes.down] = 1,
    _a[_KeyCodes__WEBPACK_IMPORTED_MODULE_0__.KeyCodes.left] = 1,
    _a[_KeyCodes__WEBPACK_IMPORTED_MODULE_0__.KeyCodes.right] = 1,
    _a[_KeyCodes__WEBPACK_IMPORTED_MODULE_0__.KeyCodes.home] = 1,
    _a[_KeyCodes__WEBPACK_IMPORTED_MODULE_0__.KeyCodes.end] = 1,
    _a[_KeyCodes__WEBPACK_IMPORTED_MODULE_0__.KeyCodes.tab] = 1,
    _a[_KeyCodes__WEBPACK_IMPORTED_MODULE_0__.KeyCodes.pageUp] = 1,
    _a[_KeyCodes__WEBPACK_IMPORTED_MODULE_0__.KeyCodes.pageDown] = 1,
    _a);
/**
 * Returns true if the keycode is a directional keyboard key.
 */
function isDirectionalKeyCode(which) {
    return !!DirectionalKeyCodes[which];
}
/**
 * Adds a keycode to the list of keys that, when pressed, should cause the focus outlines to be visible.
 * This can be used to add global shortcut keys that directionally move from section to section within
 * an app or between focus trap zones.
 */
function addDirectionalKeyCode(which) {
    DirectionalKeyCodes[which] = 1;
}
//# sourceMappingURL=keyboard.js.map

/***/ }),
/* 193 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Customizer": () => (/* binding */ Customizer)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _Customizations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45);
/* harmony import */ var _CustomizerContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44);
/* harmony import */ var _mergeCustomizations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(194);





/**
 * The Customizer component allows for default props to be mixed into components which
 * are decorated with the customizable() decorator, or use the styled HOC. This enables
 * injection scenarios like:
 *
 * 1. render svg icons instead of the icon font within all buttons
 * 2. inject a custom theme object into a component
 *
 * Props are provided via the settings prop which should be one of the following:
 * - A json map which contains 1 or more name/value pairs representing injectable props.
 * - A function that receives the current settings and returns the new ones that apply to the scope
 *
 * @public
 *
 * @deprecated This component is deprecated for purpose of applying theme to components
 * as of `@fluentui/react` version 8. Use `ThemeProvider` for applying theme instead.
 */
var Customizer = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(Customizer, _super);
    function Customizer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._onCustomizationChange = function () { return _this.forceUpdate(); };
        return _this;
    }
    Customizer.prototype.componentDidMount = function () {
        _Customizations__WEBPACK_IMPORTED_MODULE_2__.Customizations.observe(this._onCustomizationChange);
    };
    Customizer.prototype.componentWillUnmount = function () {
        _Customizations__WEBPACK_IMPORTED_MODULE_2__.Customizations.unobserve(this._onCustomizationChange);
    };
    Customizer.prototype.render = function () {
        var _this = this;
        var contextTransform = this.props.contextTransform;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CustomizerContext__WEBPACK_IMPORTED_MODULE_3__.CustomizerContext.Consumer, null, function (parentContext) {
            var newContext = (0,_mergeCustomizations__WEBPACK_IMPORTED_MODULE_4__.mergeCustomizations)(_this.props, parentContext);
            if (contextTransform) {
                newContext = contextTransform(newContext);
            }
            return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CustomizerContext__WEBPACK_IMPORTED_MODULE_3__.CustomizerContext.Provider, { value: newContext }, _this.props.children);
        }));
    };
    return Customizer;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));

//# sourceMappingURL=Customizer.js.map

/***/ }),
/* 194 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mergeCustomizations": () => (/* binding */ mergeCustomizations)
/* harmony export */ });
/* harmony import */ var _mergeSettings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(118);

/**
 * Merge props and customizations giving priority to props over context.
 * NOTE: This function will always perform multiple merge operations. Use with caution.
 * @param props - New settings to merge in.
 * @param parentContext - Context containing current settings.
 * @returns Merged customizations.
 */
function mergeCustomizations(props, parentContext) {
    var _a = (parentContext || {}).customizations, customizations = _a === void 0 ? { settings: {}, scopedSettings: {} } : _a;
    return {
        customizations: {
            settings: (0,_mergeSettings__WEBPACK_IMPORTED_MODULE_0__.mergeSettings)(customizations.settings, props.settings),
            scopedSettings: (0,_mergeSettings__WEBPACK_IMPORTED_MODULE_0__.mergeScopedSettings)(customizations.scopedSettings, props.scopedSettings),
            inCustomizerContext: true,
        },
    };
}
//# sourceMappingURL=mergeCustomizations.js.map

/***/ }),
/* 195 */,
/* 196 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useWarnings": () => (/* binding */ useWarnings)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(49);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _fluentui_utilities_lib_warn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(124);
/* harmony import */ var _fluentui_utilities_lib_warn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(197);
/* harmony import */ var _fluentui_utilities_lib_warn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(172);
/* harmony import */ var _fluentui_utilities_lib_warn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(198);
/* harmony import */ var _fluentui_utilities_lib_warn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(199);
/* harmony import */ var _usePrevious__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(143);
/* harmony import */ var _useConst__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70);
/* provided dependency */ var process = __webpack_require__(3);





var warningId = 0;
/**
 * Only in development mode, display console warnings when certain conditions are met.
 * Note that all warnings except `controlledUsage` will only be shown on first render
 * (new `controlledUsage` warnings may be shown later due to prop changes).
 */
function useWarnings(options) {
    if (process.env.NODE_ENV !== 'production') {
        var name_1 = options.name, props = options.props, _a = options.other, other = _a === void 0 ? [] : _a, conditionallyRequired = options.conditionallyRequired, deprecations = options.deprecations, mutuallyExclusive = options.mutuallyExclusive, controlledUsage = options.controlledUsage;
        /* eslint-disable react-hooks/rules-of-hooks -- build-time conditional */
        var hasWarnedRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
        var componentId = (0,_useConst__WEBPACK_IMPORTED_MODULE_1__.useConst)(function () { return "useWarnings_" + warningId++; });
        var oldProps = (0,_usePrevious__WEBPACK_IMPORTED_MODULE_2__.usePrevious)(props);
        /* eslint-enable react-hooks/rules-of-hooks */
        // Warn synchronously (not in useEffect) on first render to make debugging easier.
        if (!hasWarnedRef.current) {
            hasWarnedRef.current = true;
            for (var _i = 0, other_1 = other; _i < other_1.length; _i++) {
                var warning = other_1[_i];
                (0,_fluentui_utilities_lib_warn__WEBPACK_IMPORTED_MODULE_3__.warn)(warning);
            }
            if (conditionallyRequired) {
                for (var _b = 0, conditionallyRequired_1 = conditionallyRequired; _b < conditionallyRequired_1.length; _b++) {
                    var req = conditionallyRequired_1[_b];
                    (0,_fluentui_utilities_lib_warn__WEBPACK_IMPORTED_MODULE_4__.warnConditionallyRequiredProps)(name_1, props, req.requiredProps, req.conditionalPropName, req.condition);
                }
            }
            deprecations && (0,_fluentui_utilities_lib_warn__WEBPACK_IMPORTED_MODULE_5__.warnDeprecations)(name_1, props, deprecations);
            mutuallyExclusive && (0,_fluentui_utilities_lib_warn__WEBPACK_IMPORTED_MODULE_6__.warnMutuallyExclusive)(name_1, props, mutuallyExclusive);
        }
        // Controlled usage warnings may be displayed on either first or subsequent renders due to
        // prop changes. Note that it's safe to run this synchronously (not in useEffect) even in
        // concurrent mode because `warnControlledUsage` internally tracks which warnings have been
        // displayed for each component instance (so nothing will be displayed twice).
        controlledUsage && (0,_fluentui_utilities_lib_warn__WEBPACK_IMPORTED_MODULE_7__.warnControlledUsage)((0,tslib__WEBPACK_IMPORTED_MODULE_8__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_8__.__assign)({}, controlledUsage), { componentId: componentId, props: props, componentName: name_1, oldProps: oldProps }));
    }
}
//# sourceMappingURL=useWarnings.js.map

/***/ }),
/* 197 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "warnConditionallyRequiredProps": () => (/* binding */ warnConditionallyRequiredProps)
/* harmony export */ });
/* harmony import */ var _warn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(124);
/* provided dependency */ var process = __webpack_require__(3);

/**
 * Warns when props are required if a condition is met.
 *
 * @public
 * @param componentName - The name of the component being used.
 * @param props - The props passed into the component.
 * @param requiredProps - The name of the props that are required when the condition is met.
 * @param conditionalPropName - The name of the prop that the condition is based on.
 * @param condition - Whether the condition is met.
 */
function warnConditionallyRequiredProps(componentName, props, requiredProps, conditionalPropName, condition) {
    if (condition === true && process.env.NODE_ENV !== 'production') {
        for (var _i = 0, requiredProps_1 = requiredProps; _i < requiredProps_1.length; _i++) {
            var requiredPropName = requiredProps_1[_i];
            if (!(requiredPropName in props)) {
                (0,_warn__WEBPACK_IMPORTED_MODULE_0__.warn)(componentName + " property '" + requiredPropName + "' is required when '" + conditionalPropName + "' is used.'");
            }
        }
    }
}
//# sourceMappingURL=warnConditionallyRequiredProps.js.map

/***/ }),
/* 198 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "warnMutuallyExclusive": () => (/* binding */ warnMutuallyExclusive)
/* harmony export */ });
/* harmony import */ var _warn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(124);
/* provided dependency */ var process = __webpack_require__(3);

/**
 * Warns when two props which are mutually exclusive are both being used.
 *
 * @public
 * @param componentName - The name of the component being used.
 * @param props - The props passed into the component.
 * @param exclusiveMap - A map where the key is a parameter, and the value is the other parameter.
 */
function warnMutuallyExclusive(componentName, props, exclusiveMap) {
    if (process.env.NODE_ENV !== 'production') {
        for (var propName in exclusiveMap) {
            if (props && props[propName] !== undefined) {
                var propInExclusiveMapValue = exclusiveMap[propName];
                if (propInExclusiveMapValue && props[propInExclusiveMapValue] !== undefined) {
                    (0,_warn__WEBPACK_IMPORTED_MODULE_0__.warn)(componentName + " property '" + propName + "' is mutually exclusive with '" + exclusiveMap[propName] + "'. " +
                        "Use one or the other.");
                }
            }
        }
    }
}
//# sourceMappingURL=warnMutuallyExclusive.js.map

/***/ }),
/* 199 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "resetControlledWarnings": () => (/* binding */ resetControlledWarnings),
/* harmony export */   "warnControlledUsage": () => (/* binding */ warnControlledUsage)
/* harmony export */ });
/* harmony import */ var _warn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(124);
/* harmony import */ var _controlled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(200);
/* provided dependency */ var process = __webpack_require__(3);


var warningsMap;
if (process.env.NODE_ENV !== 'production') {
    warningsMap = {
        valueOnChange: {},
        valueDefaultValue: {},
        controlledToUncontrolled: {},
        uncontrolledToControlled: {},
    };
}
/** Reset controlled usage warnings for testing purposes. */
function resetControlledWarnings() {
    if (process.env.NODE_ENV !== 'production') {
        warningsMap.valueOnChange = {};
        warningsMap.valueDefaultValue = {};
        warningsMap.controlledToUncontrolled = {};
        warningsMap.uncontrolledToControlled = {};
    }
}
/**
 * Check for and warn on the following error conditions with a form component:
 * - A value prop is provided (indicated it's being used as controlled) without a change handler,
 *    and the component is not read-only
 * - Both the value and defaultValue props are provided
 * - The component is attempting to switch between controlled and uncontrolled
 *
 * The messages mimic the warnings React gives for these error conditions on input elements.
 * The warning will only be displayed once per component ID.
 */
function warnControlledUsage(params) {
    if (process.env.NODE_ENV !== 'production') {
        var componentId = params.componentId, componentName = params.componentName, defaultValueProp = params.defaultValueProp, props = params.props, oldProps = params.oldProps, onChangeProp = params.onChangeProp, readOnlyProp = params.readOnlyProp, valueProp = params.valueProp;
        // This warning logic closely follows what React does for native <input> elements.
        var oldIsControlled = oldProps ? (0,_controlled__WEBPACK_IMPORTED_MODULE_0__.isControlled)(oldProps, valueProp) : undefined;
        var newIsControlled = (0,_controlled__WEBPACK_IMPORTED_MODULE_0__.isControlled)(props, valueProp);
        if (newIsControlled) {
            // onChange (or readOnly) must be provided if value is provided
            var hasOnChange = !!props[onChangeProp];
            var isReadOnly = !!(readOnlyProp && props[readOnlyProp]);
            if (!(hasOnChange || isReadOnly) && !warningsMap.valueOnChange[componentId]) {
                warningsMap.valueOnChange[componentId] = true;
                (0,_warn__WEBPACK_IMPORTED_MODULE_1__.warn)("Warning: You provided a '" + valueProp + "' prop to a " + componentName + " without an '" + onChangeProp + "' handler. " +
                    ("This will render a read-only field. If the field should be mutable use '" + defaultValueProp + "'. ") +
                    ("Otherwise, set '" + onChangeProp + "'" + (readOnlyProp ? " or '" + readOnlyProp + "'" : '') + "."));
            }
            // value and defaultValue are mutually exclusive
            var defaultValue = props[defaultValueProp];
            if (defaultValue !== undefined && defaultValue !== null && !warningsMap.valueDefaultValue[componentId]) {
                warningsMap.valueDefaultValue[componentId] = true;
                (0,_warn__WEBPACK_IMPORTED_MODULE_1__.warn)("Warning: You provided both '" + valueProp + "' and '" + defaultValueProp + "' to a " + componentName + ". " +
                    ("Form fields must be either controlled or uncontrolled (specify either the '" + valueProp + "' prop, ") +
                    ("or the '" + defaultValueProp + "' prop, but not both). Decide between using a controlled or uncontrolled ") +
                    (componentName + " and remove one of these props. More info: https://fb.me/react-controlled-components"));
            }
        }
        // Warn if switching between uncontrolled and controlled. (One difference between this implementation
        // and React's <input> is that if oldIsControlled is indeterminate and newIsControlled true, we don't warn.)
        if (oldProps && newIsControlled !== oldIsControlled) {
            var oldType = oldIsControlled ? 'a controlled' : 'an uncontrolled';
            var newType = oldIsControlled ? 'uncontrolled' : 'controlled';
            var warnMap = oldIsControlled ? warningsMap.controlledToUncontrolled : warningsMap.uncontrolledToControlled;
            if (!warnMap[componentId]) {
                warnMap[componentId] = true;
                (0,_warn__WEBPACK_IMPORTED_MODULE_1__.warn)("Warning: A component is changing " + oldType + " " + componentName + " to be " + newType + ". " +
                    (componentName + "s should not switch from controlled to uncontrolled (or vice versa). ") +
                    "Decide between using controlled or uncontrolled for the lifetime of the component. " +
                    "More info: https://fb.me/react-controlled-components");
            }
        }
    }
}
//# sourceMappingURL=warnControlledUsage.js.map

/***/ }),
/* 200 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isControlled": () => (/* binding */ isControlled)
/* harmony export */ });
/**
 * Determines whether a component is controlled.
 * @param props - Component props
 * @param valueProp - Prop containing the controlled value
 * @returns true if controlled, false if uncontrolled
 */
function isControlled(props, valueProp) {
    // React's built-in <input> considers a prop to be provided if its value is non-null/undefined.
    // Mirror that behavior here (rather than checking for just undefined).
    return props[valueProp] !== undefined && props[valueProp] !== null;
}
//# sourceMappingURL=controlled.js.map

/***/ }),
/* 201 */,
/* 202 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FocusZone": () => (/* binding */ FocusZone)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _FocusZone_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(160);
/* harmony import */ var _fluentui_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76);
/* harmony import */ var _fluentui_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(161);
/* harmony import */ var _fluentui_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(163);
/* harmony import */ var _fluentui_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(59);
/* harmony import */ var _fluentui_utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(55);
/* harmony import */ var _fluentui_utilities__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(169);
/* harmony import */ var _fluentui_utilities__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(172);
/* harmony import */ var _fluentui_utilities__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(72);
/* harmony import */ var _fluentui_utilities__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(47);
/* harmony import */ var _fluentui_utilities__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(73);
/* harmony import */ var _fluentui_utilities__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(130);
/* harmony import */ var _fluentui_utilities__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(162);
/* harmony import */ var _fluentui_utilities__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(203);
/* harmony import */ var _fluentui_utilities__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(180);
/* harmony import */ var _fluentui_utilities__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(204);
/* harmony import */ var _fluentui_utilities__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(57);
/* harmony import */ var _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88);
/* harmony import */ var _fluentui_style_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84);
/* provided dependency */ var process = __webpack_require__(3);






var IS_FOCUSABLE_ATTRIBUTE = 'data-is-focusable';
var IS_ENTER_DISABLED_ATTRIBUTE = 'data-disable-click-on-enter';
var FOCUSZONE_ID_ATTRIBUTE = 'data-focuszone-id';
var TABINDEX = 'tabindex';
var NO_VERTICAL_WRAP = 'data-no-vertical-wrap';
var NO_HORIZONTAL_WRAP = 'data-no-horizontal-wrap';
var LARGE_DISTANCE_FROM_CENTER = 999999999;
var LARGE_NEGATIVE_DISTANCE_FROM_CENTER = -999999999;
var focusZoneStyles;
var focusZoneClass = 'ms-FocusZone';
// Helper function that will return a class for when the root is focused
function getRootClass() {
    if (!focusZoneStyles) {
        focusZoneStyles = (0,_fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_2__.mergeStyles)({
            selectors: {
                ':focus': {
                    outline: 'none',
                },
            },
        }, focusZoneClass);
    }
    return focusZoneStyles;
}
var _allInstances = {};
var _outerZones = new Set();
var ALLOWED_INPUT_TYPES = ['text', 'number', 'password', 'email', 'tel', 'url', 'search'];
var ALLOW_VIRTUAL_ELEMENTS = false;
var FocusZone = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(FocusZone, _super);
    function FocusZone(props) {
        var _this = _super.call(this, props) || this;
        _this._root = react__WEBPACK_IMPORTED_MODULE_0__.createRef();
        _this._mergedRef = (0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_4__.createMergedRef)();
        _this._onFocus = function (ev) {
            if (_this._portalContainsElement(ev.target)) {
                // If the event target is inside a portal do not process the event.
                return;
            }
            var _a = _this.props, onActiveElementChanged = _a.onActiveElementChanged, 
            // eslint-disable-next-line deprecation/deprecation
            doNotAllowFocusEventToPropagate = _a.doNotAllowFocusEventToPropagate, stopFocusPropagation = _a.stopFocusPropagation, 
            // eslint-disable-next-line deprecation/deprecation
            onFocusNotification = _a.onFocusNotification, onFocus = _a.onFocus, shouldFocusInnerElementWhenReceivedFocus = _a.shouldFocusInnerElementWhenReceivedFocus, defaultTabbableElement = _a.defaultTabbableElement;
            var isImmediateDescendant = _this._isImmediateDescendantOfZone(ev.target);
            var newActiveElement;
            if (isImmediateDescendant) {
                newActiveElement = ev.target;
            }
            else {
                var parentElement = ev.target;
                while (parentElement && parentElement !== _this._root.current) {
                    if ((0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_5__.isElementTabbable)(parentElement) && _this._isImmediateDescendantOfZone(parentElement)) {
                        newActiveElement = parentElement;
                        break;
                    }
                    parentElement = (0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_6__.getParent)(parentElement, ALLOW_VIRTUAL_ELEMENTS);
                }
            }
            // If an inner focusable element should be focused when FocusZone container receives focus
            if (shouldFocusInnerElementWhenReceivedFocus && ev.target === _this._root.current) {
                var maybeElementToFocus = defaultTabbableElement &&
                    typeof defaultTabbableElement === 'function' &&
                    defaultTabbableElement(_this._root.current);
                // try to focus defaultTabbable element
                if (maybeElementToFocus && (0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_5__.isElementTabbable)(maybeElementToFocus)) {
                    newActiveElement = maybeElementToFocus;
                    maybeElementToFocus.focus();
                }
                else {
                    // force focus on first focusable element
                    _this.focus(true);
                    if (_this._activeElement) {
                        // set to null as new active element was handled in method above
                        newActiveElement = null;
                    }
                }
            }
            var initialElementFocused = !_this._activeElement;
            // If the new active element is a child of this zone and received focus,
            // update alignment an immediate descendant
            if (newActiveElement && newActiveElement !== _this._activeElement) {
                if (isImmediateDescendant || initialElementFocused) {
                    _this._setFocusAlignment(newActiveElement, true, true);
                }
                _this._activeElement = newActiveElement;
                if (initialElementFocused) {
                    _this._updateTabIndexes();
                }
            }
            if (onActiveElementChanged) {
                onActiveElementChanged(_this._activeElement, ev);
            }
            if (stopFocusPropagation || doNotAllowFocusEventToPropagate) {
                ev.stopPropagation();
            }
            if (onFocus) {
                onFocus(ev);
            }
            else if (onFocusNotification) {
                onFocusNotification();
            }
        };
        _this._onBlur = function () {
            _this._setParkedFocus(false);
        };
        _this._onMouseDown = function (ev) {
            if (_this._portalContainsElement(ev.target)) {
                // If the event target is inside a portal do not process the event.
                return;
            }
            var disabled = _this.props.disabled;
            if (disabled) {
                return;
            }
            var target = ev.target;
            var path = [];
            while (target && target !== _this._root.current) {
                path.push(target);
                target = (0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_6__.getParent)(target, ALLOW_VIRTUAL_ELEMENTS);
            }
            while (path.length) {
                target = path.pop();
                if (target && (0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_5__.isElementTabbable)(target)) {
                    _this._setActiveElement(target, true);
                }
                if ((0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_5__.isElementFocusZone)(target)) {
                    // Stop here since the focus zone will take care of its own children.
                    break;
                }
            }
        };
        /**
         * Handle the keystrokes.
         */
        _this._onKeyDown = function (ev, theme) {
            if (_this._portalContainsElement(ev.target)) {
                // If the event target is inside a portal do not process the event.
                return;
            }
            // eslint-disable-next-line deprecation/deprecation
            var _a = _this.props, direction = _a.direction, disabled = _a.disabled, isInnerZoneKeystroke = _a.isInnerZoneKeystroke, pagingSupportDisabled = _a.pagingSupportDisabled, shouldEnterInnerZone = _a.shouldEnterInnerZone;
            if (disabled) {
                return;
            }
            if (_this.props.onKeyDown) {
                _this.props.onKeyDown(ev);
            }
            // If the default has been prevented, do not process keyboard events.
            if (ev.isDefaultPrevented()) {
                return;
            }
            if (_this._getDocument().activeElement === _this._root.current && _this._isInnerZone) {
                // If this element has focus, it is being controlled by a parent.
                // Ignore the keystroke.
                return;
            }
            if (((shouldEnterInnerZone && shouldEnterInnerZone(ev)) || (isInnerZoneKeystroke && isInnerZoneKeystroke(ev))) &&
                _this._isImmediateDescendantOfZone(ev.target)) {
                // Try to focus
                var innerZone = _this._getFirstInnerZone();
                if (innerZone) {
                    if (!innerZone.focus(true)) {
                        return;
                    }
                }
                else if ((0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_5__.isElementFocusSubZone)(ev.target)) {
                    if (!_this.focusElement((0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_5__.getNextElement)(ev.target, ev.target.firstChild, true))) {
                        return;
                    }
                }
                else {
                    return;
                }
            }
            else if (ev.altKey) {
                return;
            }
            else {
                // eslint-disable-next-line @fluentui/deprecated-keyboard-event-props, deprecation/deprecation
                switch (ev.which) {
                    case _fluentui_utilities__WEBPACK_IMPORTED_MODULE_7__.KeyCodes.space:
                        if (_this._tryInvokeClickForFocusable(ev.target)) {
                            break;
                        }
                        return;
                    case _fluentui_utilities__WEBPACK_IMPORTED_MODULE_7__.KeyCodes.left:
                        if (direction !== _FocusZone_types__WEBPACK_IMPORTED_MODULE_8__.FocusZoneDirection.vertical) {
                            _this._preventDefaultWhenHandled(ev);
                            if (_this._moveFocusLeft(theme)) {
                                break;
                            }
                        }
                        return;
                    case _fluentui_utilities__WEBPACK_IMPORTED_MODULE_7__.KeyCodes.right:
                        if (direction !== _FocusZone_types__WEBPACK_IMPORTED_MODULE_8__.FocusZoneDirection.vertical) {
                            _this._preventDefaultWhenHandled(ev);
                            if (_this._moveFocusRight(theme)) {
                                break;
                            }
                        }
                        return;
                    case _fluentui_utilities__WEBPACK_IMPORTED_MODULE_7__.KeyCodes.up:
                        if (direction !== _FocusZone_types__WEBPACK_IMPORTED_MODULE_8__.FocusZoneDirection.horizontal) {
                            _this._preventDefaultWhenHandled(ev);
                            if (_this._moveFocusUp()) {
                                break;
                            }
                        }
                        return;
                    case _fluentui_utilities__WEBPACK_IMPORTED_MODULE_7__.KeyCodes.down:
                        if (direction !== _FocusZone_types__WEBPACK_IMPORTED_MODULE_8__.FocusZoneDirection.horizontal) {
                            _this._preventDefaultWhenHandled(ev);
                            if (_this._moveFocusDown()) {
                                break;
                            }
                        }
                        return;
                    case _fluentui_utilities__WEBPACK_IMPORTED_MODULE_7__.KeyCodes.pageDown:
                        if (!pagingSupportDisabled && _this._moveFocusPaging(true)) {
                            break;
                        }
                        return;
                    case _fluentui_utilities__WEBPACK_IMPORTED_MODULE_7__.KeyCodes.pageUp:
                        if (!pagingSupportDisabled && _this._moveFocusPaging(false)) {
                            break;
                        }
                        return;
                    case _fluentui_utilities__WEBPACK_IMPORTED_MODULE_7__.KeyCodes.tab:
                        if (
                        // eslint-disable-next-line deprecation/deprecation
                        _this.props.allowTabKey ||
                            _this.props.handleTabKey === _FocusZone_types__WEBPACK_IMPORTED_MODULE_8__.FocusZoneTabbableElements.all ||
                            (_this.props.handleTabKey === _FocusZone_types__WEBPACK_IMPORTED_MODULE_8__.FocusZoneTabbableElements.inputOnly &&
                                _this._isElementInput(ev.target))) {
                            var focusChanged = false;
                            _this._processingTabKey = true;
                            if (direction === _FocusZone_types__WEBPACK_IMPORTED_MODULE_8__.FocusZoneDirection.vertical ||
                                !_this._shouldWrapFocus(_this._activeElement, NO_HORIZONTAL_WRAP)) {
                                focusChanged = ev.shiftKey ? _this._moveFocusUp() : _this._moveFocusDown();
                            }
                            else {
                                var tabWithDirection = (0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_9__.getRTL)(theme) ? !ev.shiftKey : ev.shiftKey;
                                focusChanged = tabWithDirection ? _this._moveFocusLeft(theme) : _this._moveFocusRight(theme);
                            }
                            _this._processingTabKey = false;
                            if (focusChanged) {
                                break;
                            }
                            else if (_this.props.shouldResetActiveElementWhenTabFromZone) {
                                _this._activeElement = null;
                            }
                        }
                        return;
                    case _fluentui_utilities__WEBPACK_IMPORTED_MODULE_7__.KeyCodes.home:
                        if (_this._isContentEditableElement(ev.target) ||
                            (_this._isElementInput(ev.target) &&
                                !_this._shouldInputLoseFocus(ev.target, false))) {
                            return false;
                        }
                        var firstChild = _this._root.current && _this._root.current.firstChild;
                        if (_this._root.current &&
                            firstChild &&
                            _this.focusElement((0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_5__.getNextElement)(_this._root.current, firstChild, true))) {
                            break;
                        }
                        return;
                    case _fluentui_utilities__WEBPACK_IMPORTED_MODULE_7__.KeyCodes.end:
                        if (_this._isContentEditableElement(ev.target) ||
                            (_this._isElementInput(ev.target) &&
                                !_this._shouldInputLoseFocus(ev.target, true))) {
                            return false;
                        }
                        var lastChild = _this._root.current && _this._root.current.lastChild;
                        if (_this._root.current &&
                            _this.focusElement((0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_5__.getPreviousElement)(_this._root.current, lastChild, true, true, true))) {
                            break;
                        }
                        return;
                    case _fluentui_utilities__WEBPACK_IMPORTED_MODULE_7__.KeyCodes.enter:
                        if (_this._tryInvokeClickForFocusable(ev.target)) {
                            break;
                        }
                        return;
                    default:
                        return;
                }
            }
            ev.preventDefault();
            ev.stopPropagation();
        };
        _this._getHorizontalDistanceFromCenter = function (isForward, activeRect, targetRect) {
            // eslint-disable-next-line deprecation/deprecation
            var leftAlignment = _this._focusAlignment.left || _this._focusAlignment.x || 0;
            // ClientRect values can be floats that differ by very small fractions of a decimal.
            // If the difference between top and bottom are within a pixel then we should treat
            // them as equivalent by using Math.floor. For instance 5.2222 and 5.222221 should be equivalent,
            // but without Math.Floor they will be handled incorrectly.
            var targetRectTop = Math.floor(targetRect.top);
            var activeRectBottom = Math.floor(activeRect.bottom);
            var targetRectBottom = Math.floor(targetRect.bottom);
            var activeRectTop = Math.floor(activeRect.top);
            var isValidCandidateOnpagingDown = isForward && targetRectTop > activeRectBottom;
            var isValidCandidateOnpagingUp = !isForward && targetRectBottom < activeRectTop;
            if (isValidCandidateOnpagingDown || isValidCandidateOnpagingUp) {
                if (leftAlignment >= targetRect.left && leftAlignment <= targetRect.left + targetRect.width) {
                    return 0;
                }
                return Math.abs(targetRect.left + targetRect.width / 2 - leftAlignment);
            }
            if (!_this._shouldWrapFocus(_this._activeElement, NO_VERTICAL_WRAP)) {
                return LARGE_NEGATIVE_DISTANCE_FROM_CENTER;
            }
            return LARGE_DISTANCE_FROM_CENTER;
        };
        // Manage componentRef resolution.
        (0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_10__.initializeComponentRef)(_this);
        if (process.env.NODE_ENV !== 'production') {
            (0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_11__.warnDeprecations)('FocusZone', props, {
                rootProps: undefined,
                allowTabKey: 'handleTabKey',
                elementType: 'as',
                ariaDescribedBy: 'aria-describedby',
                ariaLabelledBy: 'aria-labelledby',
            });
        }
        _this._id = (0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_12__.getId)('FocusZone');
        _this._focusAlignment = {
            left: 0,
            top: 0,
        };
        _this._processingTabKey = false;
        return _this;
    }
    /** Used for testing purposes only. */
    FocusZone.getOuterZones = function () {
        return _outerZones.size;
    };
    /**
     * Handle global tab presses so that we can patch tabindexes on the fly.
     * HEADS UP: This must not be an arrow function in order to be referentially equal among instances
     * for ref counting to work correctly!
     */
    FocusZone._onKeyDownCapture = function (ev) {
        // eslint-disable-next-line deprecation/deprecation, @fluentui/deprecated-keyboard-event-props
        if (ev.which === _fluentui_utilities__WEBPACK_IMPORTED_MODULE_7__.KeyCodes.tab) {
            _outerZones.forEach(function (zone) { return zone._updateTabIndexes(); });
        }
    };
    FocusZone.prototype.componentDidMount = function () {
        var root = this._root.current;
        _allInstances[this._id] = this;
        if (root) {
            this._windowElement = (0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_13__.getWindow)(root);
            var parentElement = (0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_6__.getParent)(root, ALLOW_VIRTUAL_ELEMENTS);
            while (parentElement && parentElement !== this._getDocument().body && parentElement.nodeType === 1) {
                if ((0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_5__.isElementFocusZone)(parentElement)) {
                    this._isInnerZone = true;
                    break;
                }
                parentElement = (0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_6__.getParent)(parentElement, ALLOW_VIRTUAL_ELEMENTS);
            }
            if (!this._isInnerZone) {
                _outerZones.add(this);
                if (this._windowElement && _outerZones.size === 1) {
                    this._windowElement.addEventListener('keydown', FocusZone._onKeyDownCapture, true);
                }
            }
            this._root.current && this._root.current.addEventListener('blur', this._onBlur, true);
            // Assign initial tab indexes so that we can set initial focus as appropriate.
            this._updateTabIndexes();
            if (this.props.defaultTabbableElement && typeof this.props.defaultTabbableElement === 'string') {
                this._activeElement = this._getDocument().querySelector(this.props.defaultTabbableElement);
                // eslint-disable-next-line deprecation/deprecation
            }
            else if (this.props.defaultActiveElement) {
                // eslint-disable-next-line deprecation/deprecation
                this._activeElement = this._getDocument().querySelector(this.props.defaultActiveElement);
            }
            if (this.props.shouldFocusOnMount) {
                this.focus();
            }
        }
    };
    FocusZone.prototype.componentDidUpdate = function () {
        var root = this._root.current;
        var doc = this._getDocument();
        if (doc &&
            this._lastIndexPath &&
            (doc.activeElement === doc.body ||
                doc.activeElement === null ||
                (!this.props.preventFocusRestoration && doc.activeElement === root))) {
            // The element has been removed after the render, attempt to restore focus.
            var elementToFocus = (0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_5__.getFocusableByIndexPath)(root, this._lastIndexPath);
            if (elementToFocus) {
                this._setActiveElement(elementToFocus, true);
                elementToFocus.focus();
                this._setParkedFocus(false);
            }
            else {
                // We had a focus path to restore, but now that path is unresolvable. Park focus
                // on the container until we can try again.
                this._setParkedFocus(true);
            }
        }
    };
    FocusZone.prototype.componentWillUnmount = function () {
        delete _allInstances[this._id];
        if (!this._isInnerZone) {
            _outerZones.delete(this);
            // If this is the last outer zone, remove the keydown listener.
            if (this._windowElement && _outerZones.size === 0) {
                this._windowElement.removeEventListener('keydown', FocusZone._onKeyDownCapture, true);
            }
        }
        if (this._root.current) {
            this._root.current.removeEventListener('blur', this._onBlur, true);
        }
        this._activeElement = null;
        this._defaultFocusElement = null;
    };
    FocusZone.prototype.render = function () {
        var _this = this;
        // eslint-disable-next-line deprecation/deprecation
        var _a = this.props, tag = _a.as, elementType = _a.elementType, rootProps = _a.rootProps, ariaDescribedBy = _a.ariaDescribedBy, ariaLabelledBy = _a.ariaLabelledBy, className = _a.className;
        var divProps = (0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_14__.getNativeProps)(this.props, _fluentui_utilities__WEBPACK_IMPORTED_MODULE_14__.htmlElementProperties);
        var Tag = tag || elementType || 'div';
        // Note, right before rendering/reconciling proceeds, we need to record if focus
        // was in the zone before the update. This helper will track this and, if focus
        // was actually in the zone, what the index path to the element is at this time.
        // Then, later in componentDidUpdate, we can evaluate if we need to restore it in
        // the case the element was removed.
        this._evaluateFocusBeforeRender();
        // Only support RTL defined in global theme, not contextual theme/RTL.
        var theme = (0,_fluentui_style_utilities__WEBPACK_IMPORTED_MODULE_1__.getTheme)();
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(Tag, (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({ "aria-labelledby": ariaLabelledBy, "aria-describedby": ariaDescribedBy }, divProps, rootProps, { 
            // Once the getClassName correctly memoizes inputs this should
            // be replaced so that className is passed to getRootClass and is included there so
            // the class names will always be in the same order.
            className: (0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_15__.css)(getRootClass(), className), 
            // eslint-disable-next-line deprecation/deprecation
            ref: this._mergedRef(this.props.elementRef, this._root), "data-focuszone-id": this._id, 
            // eslint-disable-next-line react/jsx-no-bind
            onKeyDown: function (ev) { return _this._onKeyDown(ev, theme); }, onFocus: this._onFocus, onMouseDownCapture: this._onMouseDown }), this.props.children));
    };
    /**
     * Sets focus to the first tabbable item in the zone.
     * @param forceIntoFirstElement - If true, focus will be forced into the first element, even
     * if focus is already in the focus zone.
     * @returns True if focus could be set to an active element, false if no operation was taken.
     */
    FocusZone.prototype.focus = function (forceIntoFirstElement) {
        if (forceIntoFirstElement === void 0) { forceIntoFirstElement = false; }
        if (this._root.current) {
            if (!forceIntoFirstElement &&
                this._root.current.getAttribute(IS_FOCUSABLE_ATTRIBUTE) === 'true' &&
                this._isInnerZone) {
                var ownerZoneElement = this._getOwnerZone(this._root.current);
                if (ownerZoneElement !== this._root.current) {
                    var ownerZone = _allInstances[ownerZoneElement.getAttribute(FOCUSZONE_ID_ATTRIBUTE)];
                    return !!ownerZone && ownerZone.focusElement(this._root.current);
                }
                return false;
            }
            else if (!forceIntoFirstElement &&
                this._activeElement &&
                (0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_16__.elementContains)(this._root.current, this._activeElement) &&
                (0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_5__.isElementTabbable)(this._activeElement)) {
                this._activeElement.focus();
                return true;
            }
            else {
                var firstChild = this._root.current.firstChild;
                return this.focusElement((0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_5__.getNextElement)(this._root.current, firstChild, true));
            }
        }
        return false;
    };
    /**
     * Sets focus to the last tabbable item in the zone.
     * @returns True if focus could be set to an active element, false if no operation was taken.
     */
    FocusZone.prototype.focusLast = function () {
        if (this._root.current) {
            var lastChild = this._root.current && this._root.current.lastChild;
            return this.focusElement((0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_5__.getPreviousElement)(this._root.current, lastChild, true, true, true));
        }
        return false;
    };
    /**
     * Sets focus to a specific child element within the zone. This can be used in conjunction with
     * shouldReceiveFocus to create delayed focus scenarios (like animate the scroll position to the correct
     * location and then focus.)
     * @param element - The child element within the zone to focus.
     * @param forceAlignment - If true, focus alignment will be set according to the element provided.
     * @returns True if focus could be set to an active element, false if no operation was taken.
     */
    FocusZone.prototype.focusElement = function (element, forceAlignment) {
        // eslint-disable-next-line deprecation/deprecation
        var _a = this.props, onBeforeFocus = _a.onBeforeFocus, shouldReceiveFocus = _a.shouldReceiveFocus;
        if ((shouldReceiveFocus && !shouldReceiveFocus(element)) || (onBeforeFocus && !onBeforeFocus(element))) {
            return false;
        }
        if (element) {
            // when we set focus to a specific child, we should recalculate the alignment depending on its position.
            this._setActiveElement(element, forceAlignment);
            if (this._activeElement) {
                this._activeElement.focus();
            }
            return true;
        }
        return false;
    };
    /**
     * Forces horizontal alignment in the context of vertical arrowing to use specific point as the reference,
     * rather than a center based on the last horizontal motion.
     * @param point - the new reference point.
     */
    FocusZone.prototype.setFocusAlignment = function (point) {
        this._focusAlignment = point;
    };
    FocusZone.prototype._evaluateFocusBeforeRender = function () {
        var root = this._root.current;
        var doc = this._getDocument();
        if (doc) {
            var focusedElement = doc.activeElement;
            // Only update the index path if we are not parked on the root.
            if (focusedElement !== root) {
                var shouldRestoreFocus = (0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_16__.elementContains)(root, focusedElement, false);
                this._lastIndexPath = shouldRestoreFocus ? (0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_5__.getElementIndexPath)(root, focusedElement) : undefined;
            }
        }
    };
    /**
     * When focus is in the zone at render time but then all focusable elements are removed,
     * we "park" focus temporarily on the root. Once we update with focusable children, we restore
     * focus to the closest path from previous. If the user tabs away from the parked container,
     * we restore focusability to the pre-parked state.
     */
    FocusZone.prototype._setParkedFocus = function (isParked) {
        var root = this._root.current;
        if (root && this._isParked !== isParked) {
            this._isParked = isParked;
            if (isParked) {
                if (!this.props.allowFocusRoot) {
                    this._parkedTabIndex = root.getAttribute('tabindex');
                    root.setAttribute('tabindex', '-1');
                }
                root.focus();
            }
            else if (!this.props.allowFocusRoot) {
                if (this._parkedTabIndex) {
                    root.setAttribute('tabindex', this._parkedTabIndex);
                    this._parkedTabIndex = undefined;
                }
                else {
                    root.removeAttribute('tabindex');
                }
            }
        }
    };
    FocusZone.prototype._setActiveElement = function (element, forceAlignment) {
        var previousActiveElement = this._activeElement;
        this._activeElement = element;
        if (previousActiveElement) {
            if ((0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_5__.isElementFocusZone)(previousActiveElement)) {
                this._updateTabIndexes(previousActiveElement);
            }
            previousActiveElement.tabIndex = -1;
        }
        if (this._activeElement) {
            if (!this._focusAlignment || forceAlignment) {
                this._setFocusAlignment(element, true, true);
            }
            this._activeElement.tabIndex = 0;
        }
    };
    FocusZone.prototype._preventDefaultWhenHandled = function (ev) {
        this.props.preventDefaultWhenHandled && ev.preventDefault();
    };
    /**
     * Walk up the dom try to find a focusable element.
     */
    FocusZone.prototype._tryInvokeClickForFocusable = function (target) {
        if (target === this._root.current || !this.props.shouldRaiseClicks) {
            return false;
        }
        do {
            if (target.tagName === 'BUTTON' ||
                target.tagName === 'A' ||
                target.tagName === 'INPUT' ||
                target.tagName === 'TEXTAREA') {
                return false;
            }
            if (this._isImmediateDescendantOfZone(target) &&
                target.getAttribute(IS_FOCUSABLE_ATTRIBUTE) === 'true' &&
                target.getAttribute(IS_ENTER_DISABLED_ATTRIBUTE) !== 'true') {
                (0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_17__.raiseClick)(target);
                return true;
            }
            target = (0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_6__.getParent)(target, ALLOW_VIRTUAL_ELEMENTS);
        } while (target !== this._root.current);
        return false;
    };
    /**
     * Traverse to find first child zone.
     */
    FocusZone.prototype._getFirstInnerZone = function (rootElement) {
        rootElement = rootElement || this._activeElement || this._root.current;
        if (!rootElement) {
            return null;
        }
        if ((0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_5__.isElementFocusZone)(rootElement)) {
            return _allInstances[rootElement.getAttribute(FOCUSZONE_ID_ATTRIBUTE)];
        }
        var child = rootElement.firstElementChild;
        while (child) {
            if ((0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_5__.isElementFocusZone)(child)) {
                return _allInstances[child.getAttribute(FOCUSZONE_ID_ATTRIBUTE)];
            }
            var match = this._getFirstInnerZone(child);
            if (match) {
                return match;
            }
            child = child.nextElementSibling;
        }
        return null;
    };
    FocusZone.prototype._moveFocus = function (isForward, getDistanceFromCenter, ev, useDefaultWrap) {
        if (useDefaultWrap === void 0) { useDefaultWrap = true; }
        var element = this._activeElement;
        var candidateDistance = -1;
        var candidateElement = undefined;
        var changedFocus = false;
        var isBidirectional = this.props.direction === _FocusZone_types__WEBPACK_IMPORTED_MODULE_8__.FocusZoneDirection.bidirectional;
        if (!element || !this._root.current) {
            return false;
        }
        if (this._isElementInput(element)) {
            if (!this._shouldInputLoseFocus(element, isForward)) {
                return false;
            }
        }
        var activeRect = isBidirectional ? element.getBoundingClientRect() : null;
        do {
            element = (isForward
                ? (0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_5__.getNextElement)(this._root.current, element)
                : (0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_5__.getPreviousElement)(this._root.current, element));
            if (isBidirectional) {
                if (element) {
                    var targetRect = element.getBoundingClientRect();
                    var elementDistance = getDistanceFromCenter(activeRect, targetRect);
                    if (elementDistance === -1 && candidateDistance === -1) {
                        candidateElement = element;
                        break;
                    }
                    if (elementDistance > -1 && (candidateDistance === -1 || elementDistance < candidateDistance)) {
                        candidateDistance = elementDistance;
                        candidateElement = element;
                    }
                    if (candidateDistance >= 0 && elementDistance < 0) {
                        break;
                    }
                }
            }
            else {
                candidateElement = element;
                break;
            }
        } while (element);
        // Focus the closest candidate
        if (candidateElement && candidateElement !== this._activeElement) {
            changedFocus = true;
            this.focusElement(candidateElement);
        }
        else if (this.props.isCircularNavigation && useDefaultWrap) {
            if (isForward) {
                return this.focusElement((0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_5__.getNextElement)(this._root.current, this._root.current.firstElementChild, true));
            }
            else {
                return this.focusElement((0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_5__.getPreviousElement)(this._root.current, this._root.current.lastElementChild, true, true, true));
            }
        }
        return changedFocus;
    };
    FocusZone.prototype._moveFocusDown = function () {
        var _this = this;
        var targetTop = -1;
        // eslint-disable-next-line deprecation/deprecation
        var leftAlignment = this._focusAlignment.left || this._focusAlignment.x || 0;
        if (this._moveFocus(true, function (activeRect, targetRect) {
            var distance = -1;
            // ClientRect values can be floats that differ by very small fractions of a decimal.
            // If the difference between top and bottom are within a pixel then we should treat
            // them as equivalent by using Math.floor. For instance 5.2222 and 5.222221 should be equivalent,
            // but without Math.Floor they will be handled incorrectly.
            var targetRectTop = Math.floor(targetRect.top);
            var activeRectBottom = Math.floor(activeRect.bottom);
            if (targetRectTop < activeRectBottom) {
                if (!_this._shouldWrapFocus(_this._activeElement, NO_VERTICAL_WRAP)) {
                    return LARGE_NEGATIVE_DISTANCE_FROM_CENTER;
                }
                return LARGE_DISTANCE_FROM_CENTER;
            }
            if ((targetTop === -1 && targetRectTop >= activeRectBottom) || targetRectTop === targetTop) {
                targetTop = targetRectTop;
                if (leftAlignment >= targetRect.left && leftAlignment <= targetRect.left + targetRect.width) {
                    distance = 0;
                }
                else {
                    distance = Math.abs(targetRect.left + targetRect.width / 2 - leftAlignment);
                }
            }
            return distance;
        })) {
            this._setFocusAlignment(this._activeElement, false, true);
            return true;
        }
        return false;
    };
    FocusZone.prototype._moveFocusUp = function () {
        var _this = this;
        var targetTop = -1;
        // eslint-disable-next-line deprecation/deprecation
        var leftAlignment = this._focusAlignment.left || this._focusAlignment.x || 0;
        if (this._moveFocus(false, function (activeRect, targetRect) {
            var distance = -1;
            // ClientRect values can be floats that differ by very small fractions of a decimal.
            // If the difference between top and bottom are within a pixel then we should treat
            // them as equivalent by using Math.floor. For instance 5.2222 and 5.222221 should be equivalent,
            // but without Math.Floor they will be handled incorrectly.
            var targetRectBottom = Math.floor(targetRect.bottom);
            var targetRectTop = Math.floor(targetRect.top);
            var activeRectTop = Math.floor(activeRect.top);
            if (targetRectBottom > activeRectTop) {
                if (!_this._shouldWrapFocus(_this._activeElement, NO_VERTICAL_WRAP)) {
                    return LARGE_NEGATIVE_DISTANCE_FROM_CENTER;
                }
                return LARGE_DISTANCE_FROM_CENTER;
            }
            if ((targetTop === -1 && targetRectBottom <= activeRectTop) || targetRectTop === targetTop) {
                targetTop = targetRectTop;
                if (leftAlignment >= targetRect.left && leftAlignment <= targetRect.left + targetRect.width) {
                    distance = 0;
                }
                else {
                    distance = Math.abs(targetRect.left + targetRect.width / 2 - leftAlignment);
                }
            }
            return distance;
        })) {
            this._setFocusAlignment(this._activeElement, false, true);
            return true;
        }
        return false;
    };
    FocusZone.prototype._moveFocusLeft = function (theme) {
        var _this = this;
        var shouldWrap = this._shouldWrapFocus(this._activeElement, NO_HORIZONTAL_WRAP);
        if (this._moveFocus((0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_9__.getRTL)(theme), function (activeRect, targetRect) {
            var distance = -1;
            var topBottomComparison;
            if ((0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_9__.getRTL)(theme)) {
                // When in RTL, this comparison should be the same as the one in _moveFocusRight for LTR.
                // Going left at a leftmost rectangle will go down a line instead of up a line like in LTR.
                // This is important, because we want to be comparing the top of the target rect
                // with the bottom of the active rect.
                topBottomComparison = parseFloat(targetRect.top.toFixed(3)) < parseFloat(activeRect.bottom.toFixed(3));
            }
            else {
                topBottomComparison = parseFloat(targetRect.bottom.toFixed(3)) > parseFloat(activeRect.top.toFixed(3));
            }
            if (topBottomComparison &&
                targetRect.right <= activeRect.right &&
                _this.props.direction !== _FocusZone_types__WEBPACK_IMPORTED_MODULE_8__.FocusZoneDirection.vertical) {
                distance = activeRect.right - targetRect.right;
            }
            else if (!shouldWrap) {
                distance = LARGE_NEGATIVE_DISTANCE_FROM_CENTER;
            }
            return distance;
        }, undefined /*ev*/, shouldWrap)) {
            this._setFocusAlignment(this._activeElement, true, false);
            return true;
        }
        return false;
    };
    FocusZone.prototype._moveFocusRight = function (theme) {
        var _this = this;
        var shouldWrap = this._shouldWrapFocus(this._activeElement, NO_HORIZONTAL_WRAP);
        if (this._moveFocus(!(0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_9__.getRTL)(theme), function (activeRect, targetRect) {
            var distance = -1;
            var topBottomComparison;
            if ((0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_9__.getRTL)(theme)) {
                // When in RTL, this comparison should be the same as the one in _moveFocusLeft for LTR.
                // Going right at a rightmost rectangle will go up a line instead of down a line like in LTR.
                // This is important, because we want to be comparing the bottom of the target rect
                // with the top of the active rect.
                topBottomComparison = parseFloat(targetRect.bottom.toFixed(3)) > parseFloat(activeRect.top.toFixed(3));
            }
            else {
                topBottomComparison = parseFloat(targetRect.top.toFixed(3)) < parseFloat(activeRect.bottom.toFixed(3));
            }
            if (topBottomComparison &&
                targetRect.left >= activeRect.left &&
                _this.props.direction !== _FocusZone_types__WEBPACK_IMPORTED_MODULE_8__.FocusZoneDirection.vertical) {
                distance = targetRect.left - activeRect.left;
            }
            else if (!shouldWrap) {
                distance = LARGE_NEGATIVE_DISTANCE_FROM_CENTER;
            }
            return distance;
        }, undefined /*ev*/, shouldWrap)) {
            this._setFocusAlignment(this._activeElement, true, false);
            return true;
        }
        return false;
    };
    FocusZone.prototype._moveFocusPaging = function (isForward, useDefaultWrap) {
        if (useDefaultWrap === void 0) { useDefaultWrap = true; }
        var element = this._activeElement;
        if (!element || !this._root.current) {
            return false;
        }
        if (this._isElementInput(element)) {
            if (!this._shouldInputLoseFocus(element, isForward)) {
                return false;
            }
        }
        var scrollableParent = (0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_18__.findScrollableParent)(element);
        if (!scrollableParent) {
            return false;
        }
        var candidateDistance = -1;
        var candidateElement = undefined;
        var targetTop = -1;
        var targetBottom = -1;
        var pagesize = scrollableParent.clientHeight;
        var activeRect = element.getBoundingClientRect();
        do {
            element = isForward
                ? (0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_5__.getNextElement)(this._root.current, element)
                : (0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_5__.getPreviousElement)(this._root.current, element);
            if (element) {
                var targetRect = element.getBoundingClientRect();
                var targetRectTop = Math.floor(targetRect.top);
                var activeRectBottom = Math.floor(activeRect.bottom);
                var targetRectBottom = Math.floor(targetRect.bottom);
                var activeRectTop = Math.floor(activeRect.top);
                var elementDistance = this._getHorizontalDistanceFromCenter(isForward, activeRect, targetRect);
                var isElementPassedPageSizeOnPagingDown = isForward && targetRectTop > activeRectBottom + pagesize;
                var isElementPassedPageSizeOnPagingUp = !isForward && targetRectBottom < activeRectTop - pagesize;
                if (isElementPassedPageSizeOnPagingDown || isElementPassedPageSizeOnPagingUp) {
                    break;
                }
                if (elementDistance > -1) {
                    // for paging down
                    if (isForward && targetRectTop > targetTop) {
                        targetTop = targetRectTop;
                        candidateDistance = elementDistance;
                        candidateElement = element;
                    }
                    else if (!isForward && targetRectBottom < targetBottom) {
                        // for paging up
                        targetBottom = targetRectBottom;
                        candidateDistance = elementDistance;
                        candidateElement = element;
                    }
                    else if (candidateDistance === -1 || elementDistance <= candidateDistance) {
                        candidateDistance = elementDistance;
                        candidateElement = element;
                    }
                }
            }
        } while (element);
        var changedFocus = false;
        // Focus the closest candidate
        if (candidateElement && candidateElement !== this._activeElement) {
            changedFocus = true;
            this.focusElement(candidateElement);
            this._setFocusAlignment(candidateElement, false, true);
        }
        else if (this.props.isCircularNavigation && useDefaultWrap) {
            if (isForward) {
                return this.focusElement((0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_5__.getNextElement)(this._root.current, this._root.current.firstElementChild, true));
            }
            return this.focusElement((0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_5__.getPreviousElement)(this._root.current, this._root.current.lastElementChild, true, true, true));
        }
        return changedFocus;
    };
    FocusZone.prototype._setFocusAlignment = function (element, isHorizontal, isVertical) {
        if (this.props.direction === _FocusZone_types__WEBPACK_IMPORTED_MODULE_8__.FocusZoneDirection.bidirectional &&
            (!this._focusAlignment || isHorizontal || isVertical)) {
            var rect = element.getBoundingClientRect();
            var left = rect.left + rect.width / 2;
            var top_1 = rect.top + rect.height / 2;
            if (!this._focusAlignment) {
                this._focusAlignment = { left: left, top: top_1 };
            }
            if (isHorizontal) {
                this._focusAlignment.left = left;
            }
            if (isVertical) {
                this._focusAlignment.top = top_1;
            }
        }
    };
    FocusZone.prototype._isImmediateDescendantOfZone = function (element) {
        return this._getOwnerZone(element) === this._root.current;
    };
    FocusZone.prototype._getOwnerZone = function (element) {
        var parentElement = (0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_6__.getParent)(element, ALLOW_VIRTUAL_ELEMENTS);
        while (parentElement && parentElement !== this._root.current && parentElement !== this._getDocument().body) {
            if ((0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_5__.isElementFocusZone)(parentElement)) {
                return parentElement;
            }
            parentElement = (0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_6__.getParent)(parentElement, ALLOW_VIRTUAL_ELEMENTS);
        }
        return parentElement;
    };
    FocusZone.prototype._updateTabIndexes = function (element) {
        if (!this._activeElement &&
            this.props.defaultTabbableElement &&
            typeof this.props.defaultTabbableElement === 'function') {
            this._activeElement = this.props.defaultTabbableElement(this._root.current);
        }
        if (!element && this._root.current) {
            this._defaultFocusElement = null;
            element = this._root.current;
            if (this._activeElement && !(0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_16__.elementContains)(element, this._activeElement)) {
                this._activeElement = null;
            }
        }
        // If active element changes state to disabled, set it to null.
        // Otherwise, we lose keyboard accessibility to other elements in focus zone.
        if (this._activeElement && !(0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_5__.isElementTabbable)(this._activeElement)) {
            this._activeElement = null;
        }
        var childNodes = element && element.children;
        for (var childIndex = 0; childNodes && childIndex < childNodes.length; childIndex++) {
            var child = childNodes[childIndex];
            if (!(0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_5__.isElementFocusZone)(child)) {
                // If the item is explicitly set to not be focusable then TABINDEX needs to be set to -1.
                if (child.getAttribute && child.getAttribute(IS_FOCUSABLE_ATTRIBUTE) === 'false') {
                    child.setAttribute(TABINDEX, '-1');
                }
                if ((0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_5__.isElementTabbable)(child)) {
                    if (this.props.disabled) {
                        child.setAttribute(TABINDEX, '-1');
                    }
                    else if (!this._isInnerZone &&
                        ((!this._activeElement && !this._defaultFocusElement) || this._activeElement === child)) {
                        this._defaultFocusElement = child;
                        if (child.getAttribute(TABINDEX) !== '0') {
                            child.setAttribute(TABINDEX, '0');
                        }
                    }
                    else if (child.getAttribute(TABINDEX) !== '-1') {
                        child.setAttribute(TABINDEX, '-1');
                    }
                }
                else if (child.tagName === 'svg' && child.getAttribute('focusable') !== 'false') {
                    // Disgusting IE hack. Sad face.
                    child.setAttribute('focusable', 'false');
                }
            }
            else if (child.getAttribute(IS_FOCUSABLE_ATTRIBUTE) === 'true') {
                if (!this._isInnerZone &&
                    ((!this._activeElement && !this._defaultFocusElement) || this._activeElement === child)) {
                    this._defaultFocusElement = child;
                    if (child.getAttribute(TABINDEX) !== '0') {
                        child.setAttribute(TABINDEX, '0');
                    }
                }
                else if (child.getAttribute(TABINDEX) !== '-1') {
                    child.setAttribute(TABINDEX, '-1');
                }
            }
            this._updateTabIndexes(child);
        }
    };
    FocusZone.prototype._isContentEditableElement = function (element) {
        return element && element.getAttribute('contenteditable') === 'true';
    };
    FocusZone.prototype._isElementInput = function (element) {
        if (element &&
            element.tagName &&
            (element.tagName.toLowerCase() === 'input' || element.tagName.toLowerCase() === 'textarea')) {
            return true;
        }
        return false;
    };
    FocusZone.prototype._shouldInputLoseFocus = function (element, isForward) {
        // If a tab was used, we want to focus on the next element.
        if (!this._processingTabKey &&
            element &&
            element.type &&
            ALLOWED_INPUT_TYPES.indexOf(element.type.toLowerCase()) > -1) {
            var selectionStart = element.selectionStart;
            var selectionEnd = element.selectionEnd;
            var isRangeSelected = selectionStart !== selectionEnd;
            var inputValue = element.value;
            var isReadonly = element.readOnly;
            // We shouldn't lose focus in the following cases:
            // 1. There is range selected.
            // 2. When selection start is larger than 0 and it is backward and not readOnly.
            // 3. when selection start is not the end of length, it is forward and not readOnly.
            // 4. We press any of the arrow keys when our handleTabKey isn't none or undefined (only losing focus if we hit
            // tab) and if shouldInputLoseFocusOnArrowKey is defined, if scenario prefers to not loose the focus which is
            // determined by calling the callback shouldInputLoseFocusOnArrowKey
            if (isRangeSelected ||
                (selectionStart > 0 && !isForward && !isReadonly) ||
                (selectionStart !== inputValue.length && isForward && !isReadonly) ||
                (!!this.props.handleTabKey &&
                    !(this.props.shouldInputLoseFocusOnArrowKey && this.props.shouldInputLoseFocusOnArrowKey(element)))) {
                return false;
            }
        }
        return true;
    };
    FocusZone.prototype._shouldWrapFocus = function (element, noWrapDataAttribute) {
        return this.props.checkForNoWrap ? (0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_5__.shouldWrapFocus)(element, noWrapDataAttribute) : true;
    };
    /**
     * Returns true if the element is a descendant of the FocusZone through a React portal.
     */
    FocusZone.prototype._portalContainsElement = function (element) {
        return element && !!this._root.current && (0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_19__.portalContainsElement)(element, this._root.current);
    };
    FocusZone.prototype._getDocument = function () {
        return (0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_20__.getDocument)(this._root.current);
    };
    FocusZone.defaultProps = {
        isCircularNavigation: false,
        direction: _FocusZone_types__WEBPACK_IMPORTED_MODULE_8__.FocusZoneDirection.bidirectional,
        shouldRaiseClicks: true,
    };
    return FocusZone;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));

//# sourceMappingURL=FocusZone.js.map

/***/ }),
/* 203 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "raiseClick": () => (/* binding */ raiseClick)
/* harmony export */ });
/** Raises a click event. */
function raiseClick(target) {
    var event = createNewEvent('MouseEvents');
    event.initEvent('click', true, true);
    target.dispatchEvent(event);
}
function createNewEvent(eventName) {
    var event;
    if (typeof Event === 'function') {
        // Chrome, Opera, Firefox
        event = new Event(eventName);
    }
    else {
        // IE
        event = document.createEvent('Event');
        event.initEvent(eventName, true, true);
    }
    return event;
}
//# sourceMappingURL=raiseClick.js.map

/***/ }),
/* 204 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "portalContainsElement": () => (/* binding */ portalContainsElement)
/* harmony export */ });
/* harmony import */ var _findElementRecursive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(167);
/* harmony import */ var _setPortalAttribute__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(187);


/**
 * Determine whether a target is within a portal from perspective of root or optional parent.
 * This function only works against portal components that use the setPortalAttribute function.
 * If both parent and child are within the same portal this function will return false.
 * @param target - Element to query portal containment status of.
 * @param parent - Optional parent perspective. Search for containing portal stops at parent
 * (or root if parent is undefined or invalid.)
 */
function portalContainsElement(target, parent) {
    var elementMatch = (0,_findElementRecursive__WEBPACK_IMPORTED_MODULE_0__.findElementRecursive)(target, function (testElement) { return parent === testElement || testElement.hasAttribute(_setPortalAttribute__WEBPACK_IMPORTED_MODULE_1__.DATA_PORTAL_ATTRIBUTE); });
    return elementMatch !== null && elementMatch.hasAttribute(_setPortalAttribute__WEBPACK_IMPORTED_MODULE_1__.DATA_PORTAL_ATTRIBUTE);
}
//# sourceMappingURL=portalContainsElement.js.map

/***/ }),
/* 205 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContextualMenuItem": () => (/* binding */ ContextualMenuItem)
/* harmony export */ });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);
/* harmony import */ var _ContextualMenuItem_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(206);
/* harmony import */ var _ContextualMenu_classNames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(140);



/**
 * ContextualMenuItem description
 */
var ContextualMenuItem = (0,_Utilities__WEBPACK_IMPORTED_MODULE_0__.styled)(_ContextualMenuItem_base__WEBPACK_IMPORTED_MODULE_1__.ContextualMenuItemBase, _ContextualMenu_classNames__WEBPACK_IMPORTED_MODULE_2__.getItemStyles, undefined, { scope: 'ContextualMenuItem' });
//# sourceMappingURL=ContextualMenuItem.js.map

/***/ }),
/* 206 */,
/* 207 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContextualMenuAnchor": () => (/* binding */ ContextualMenuAnchor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(208);
/* harmony import */ var _ContextualMenuItemWrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(214);
/* harmony import */ var _KeytipData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(209);
/* harmony import */ var _utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(157);
/* harmony import */ var _ContextualMenuItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(205);







var ContextualMenuAnchor = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(ContextualMenuAnchor, _super);
    function ContextualMenuAnchor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._anchor = react__WEBPACK_IMPORTED_MODULE_0__.createRef();
        _this._getMemoizedMenuButtonKeytipProps = (0,_Utilities__WEBPACK_IMPORTED_MODULE_2__.memoizeFunction)(function (keytipProps) {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, keytipProps), { hasMenu: true });
        });
        _this._getSubmenuTarget = function () {
            return _this._anchor.current ? _this._anchor.current : undefined;
        };
        _this._onItemClick = function (ev) {
            var _a = _this.props, item = _a.item, onItemClick = _a.onItemClick;
            if (onItemClick) {
                onItemClick(item, ev);
            }
        };
        _this._renderAriaDescription = function (ariaDescription, className) {
            // If ariaDescription is given, descriptionId will be assigned to ariaDescriptionSpan
            return ariaDescription ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { id: _this._ariaDescriptionId, className: className }, ariaDescription)) : null;
        };
        return _this;
    }
    ContextualMenuAnchor.prototype.render = function () {
        var _this = this;
        var _a = this.props, item = _a.item, classNames = _a.classNames, index = _a.index, focusableElementIndex = _a.focusableElementIndex, totalItemCount = _a.totalItemCount, hasCheckmarks = _a.hasCheckmarks, hasIcons = _a.hasIcons, _b = _a.contextualMenuItemAs, ChildrenRenderer = _b === void 0 ? _ContextualMenuItem__WEBPACK_IMPORTED_MODULE_3__.ContextualMenuItem : _b, expandedMenuItemKey = _a.expandedMenuItemKey, onItemClick = _a.onItemClick, openSubMenu = _a.openSubMenu, dismissSubMenu = _a.dismissSubMenu, dismissMenu = _a.dismissMenu;
        var anchorRel = item.rel;
        if (item.target && item.target.toLowerCase() === '_blank') {
            anchorRel = anchorRel ? anchorRel : 'nofollow noopener noreferrer'; // Safe default to prevent tabjacking
        }
        var itemHasSubmenu = (0,_utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_4__.hasSubmenu)(item);
        var nativeProps = (0,_Utilities__WEBPACK_IMPORTED_MODULE_5__.getNativeProps)(item, _Utilities__WEBPACK_IMPORTED_MODULE_5__.anchorProperties);
        var disabled = (0,_utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_4__.isItemDisabled)(item);
        var itemProps = item.itemProps, ariaDescription = item.ariaDescription;
        var keytipProps = item.keytipProps;
        if (keytipProps && itemHasSubmenu) {
            keytipProps = this._getMemoizedMenuButtonKeytipProps(keytipProps);
        }
        // Check for ariaDescription to set the _ariaDescriptionId and render a hidden span with
        // the description in it to be added to ariaDescribedBy
        if (ariaDescription) {
            this._ariaDescriptionId = (0,_Utilities__WEBPACK_IMPORTED_MODULE_6__.getId)();
        }
        var ariaDescribedByIds = (0,_Utilities__WEBPACK_IMPORTED_MODULE_7__.mergeAriaAttributeValues)(item.ariaDescribedBy, ariaDescription ? this._ariaDescriptionId : undefined, nativeProps['aria-describedby']);
        var additionalItemProperties = {
            'aria-describedby': ariaDescribedByIds,
        };
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_KeytipData__WEBPACK_IMPORTED_MODULE_8__.KeytipData, { keytipProps: item.keytipProps, ariaDescribedBy: ariaDescribedByIds, disabled: disabled }, function (keytipAttributes) { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, additionalItemProperties, nativeProps, keytipAttributes, { ref: _this._anchor, href: item.href, target: item.target, rel: anchorRel, className: classNames.root, role: "menuitem", "aria-haspopup": itemHasSubmenu || undefined, "aria-expanded": itemHasSubmenu ? item.key === expandedMenuItemKey : undefined, "aria-posinset": focusableElementIndex + 1, "aria-setsize": totalItemCount, "aria-disabled": (0,_utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_4__.isItemDisabled)(item), 
                // eslint-disable-next-line deprecation/deprecation
                style: item.style, onClick: _this._onItemClick, onMouseEnter: _this._onItemMouseEnter, onMouseLeave: _this._onItemMouseLeave, onMouseMove: _this._onItemMouseMove, onKeyDown: itemHasSubmenu ? _this._onItemKeyDown : undefined }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(ChildrenRenderer, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({ componentRef: item.componentRef, item: item, classNames: classNames, index: index, onCheckmarkClick: hasCheckmarks && onItemClick ? onItemClick : undefined, hasIcons: hasIcons, openSubMenu: openSubMenu, dismissSubMenu: dismissSubMenu, dismissMenu: dismissMenu, getSubmenuTarget: _this._getSubmenuTarget }, itemProps)),
                _this._renderAriaDescription(ariaDescription, classNames.screenReaderText))); })));
    };
    return ContextualMenuAnchor;
}(_ContextualMenuItemWrapper__WEBPACK_IMPORTED_MODULE_9__.ContextualMenuItemWrapper));

//# sourceMappingURL=ContextualMenuAnchor.js.map

/***/ }),
/* 208 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mergeAriaAttributeValues": () => (/* binding */ mergeAriaAttributeValues)
/* harmony export */ });
/**
 * ARIA helper to concatenate attributes, returning undefined if all attributes
 * are undefined. (Empty strings are not a valid ARIA attribute value.)
 *
 * @param ariaAttributes - ARIA attributes to merge
 */
function mergeAriaAttributeValues() {
    var ariaAttributes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ariaAttributes[_i] = arguments[_i];
    }
    var mergedAttribute = ariaAttributes
        .filter(function (arg) { return arg; })
        .join(' ')
        .trim();
    return mergedAttribute === '' ? undefined : mergedAttribute;
}
//# sourceMappingURL=aria.js.map

/***/ }),
/* 209 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KeytipData": () => (/* binding */ KeytipData)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49);
/* harmony import */ var _utilities_keytips_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(212);
/* harmony import */ var _useKeytipData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(210);



/**
 * A small element to help the target component correctly read out its aria-describedby for its Keytip
 * {@docCategory Keytips}
 */
var KeytipData = function (props) {
    var _a;
    var children = props.children, keytipDataProps = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(props, ["children"]);
    var _b = (0,_useKeytipData__WEBPACK_IMPORTED_MODULE_1__.useKeytipData)(keytipDataProps), keytipId = _b.keytipId, ariaDescribedBy = _b.ariaDescribedBy;
    return children((_a = {},
        _a[_utilities_keytips_index__WEBPACK_IMPORTED_MODULE_2__.DATAKTP_TARGET] = keytipId,
        _a[_utilities_keytips_index__WEBPACK_IMPORTED_MODULE_2__.DATAKTP_EXECUTE_TARGET] = keytipId,
        _a['aria-describedby'] = ariaDescribedBy,
        _a));
};
//# sourceMappingURL=KeytipData.js.map

/***/ }),
/* 210 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useKeytipData": () => (/* binding */ useKeytipData)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70);
/* harmony import */ var _fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(143);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(208);
/* harmony import */ var _utilities_keytips_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(211);
/* harmony import */ var _utilities_keytips_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(213);





/**
 * Hook that creates attributes for components which are enabled with Keytip.
 */
function useKeytipData(options) {
    var uniqueId = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    var keytipProps = options.keytipProps
        ? (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({ disabled: options.disabled }, options.keytipProps) : undefined;
    var keytipManager = (0,_fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_2__.useConst)(_utilities_keytips_index__WEBPACK_IMPORTED_MODULE_3__.KeytipManager.getInstance());
    var prevOptions = (0,_fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_4__.usePrevious)(options);
    // useLayoutEffect used to strictly emulate didUpdate/didMount behavior
    // eslint-disable-next-line no-restricted-properties
    react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(function () {
        if (uniqueId.current &&
            keytipProps &&
            ((prevOptions === null || prevOptions === void 0 ? void 0 : prevOptions.keytipProps) !== options.keytipProps || (prevOptions === null || prevOptions === void 0 ? void 0 : prevOptions.disabled) !== options.disabled)) {
            keytipManager.update(keytipProps, uniqueId.current);
        }
    });
    // eslint-disable-next-line no-restricted-properties
    react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(function () {
        // Register Keytip in KeytipManager
        if (keytipProps) {
            uniqueId.current = keytipManager.register(keytipProps);
        }
        return function () {
            // Unregister Keytip in KeytipManager
            keytipProps && keytipManager.unregister(keytipProps, uniqueId.current);
        };
        // this is meant to run only at mount, and updates are handled separately
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    var nativeKeytipProps = {
        ariaDescribedBy: undefined,
        keytipId: undefined,
    };
    if (keytipProps) {
        nativeKeytipProps = getKeytipData(keytipManager, keytipProps, options.ariaDescribedBy);
    }
    return nativeKeytipProps;
}
/**
 * Gets the aria- and data- attributes to attach to the component
 * @param keytipProps - options for Keytip
 * @param describedByPrepend - ariaDescribedBy value to prepend
 */
function getKeytipData(keytipManager, keytipProps, describedByPrepend) {
    // Add the parent overflow sequence if necessary
    var newKeytipProps = keytipManager.addParentOverflow(keytipProps);
    // Construct aria-describedby and data-ktp-id attributes
    var ariaDescribedBy = (0,_Utilities__WEBPACK_IMPORTED_MODULE_5__.mergeAriaAttributeValues)(describedByPrepend, (0,_utilities_keytips_index__WEBPACK_IMPORTED_MODULE_6__.getAriaDescribedBy)(newKeytipProps.keySequences));
    var keySequences = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArrays)(newKeytipProps.keySequences);
    if (newKeytipProps.overflowSetSequence) {
        keySequences = (0,_utilities_keytips_index__WEBPACK_IMPORTED_MODULE_6__.mergeOverflows)(keySequences, newKeytipProps.overflowSetSequence);
    }
    var keytipId = (0,_utilities_keytips_index__WEBPACK_IMPORTED_MODULE_6__.sequencesToID)(keySequences);
    return {
        ariaDescribedBy: ariaDescribedBy,
        keytipId: keytipId,
    };
}
//# sourceMappingURL=useKeytipData.js.map

/***/ }),
/* 211 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KeytipManager": () => (/* binding */ KeytipManager)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(149);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72);
/* harmony import */ var _utilities_keytips_KeytipConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(212);



/**
 * This class is responsible for handling registering, updating, and unregistering of keytips
 */
var KeytipManager = /** @class */ (function () {
    function KeytipManager() {
        this.keytips = {};
        this.persistedKeytips = {};
        this.sequenceMapping = {};
        // This is (and should be) updated and kept in sync
        // with the inKeytipMode in KeytipLayer.
        this.inKeytipMode = false;
        // Boolean that gets checked before entering keytip mode by the KeytipLayer
        // Used for an override in special cases (e.g. Disable entering keytip mode when a modal is shown)
        this.shouldEnterKeytipMode = true;
        // Boolean to indicate whether to delay firing an event to update subscribers of
        // keytip data changed.
        this.delayUpdatingKeytipChange = false;
    }
    /**
     * Static function to get singleton KeytipManager instance
     *
     * @returns Singleton KeytipManager instance
     */
    KeytipManager.getInstance = function () {
        return this._instance;
    };
    /**
     * Initialization code to set set parameters to define
     * how the KeytipManager handles keytip data.
     *
     * @param delayUpdatingKeytipChange - T/F if we should delay notifiying keytip subscribers
     * of keytip changes
     */
    KeytipManager.prototype.init = function (delayUpdatingKeytipChange) {
        this.delayUpdatingKeytipChange = delayUpdatingKeytipChange;
    };
    /**
     * Registers a keytip
     *
     * @param keytipProps - Keytip to register
     * @param persisted - T/F if this keytip should be persisted, default is false
     * @returns Unique ID for this keytip
     */
    KeytipManager.prototype.register = function (keytipProps, persisted) {
        if (persisted === void 0) { persisted = false; }
        var props = keytipProps;
        if (!persisted) {
            // Add the overflowSetSequence if necessary
            props = this.addParentOverflow(keytipProps);
            this.sequenceMapping[props.keySequences.toString()] = props;
        }
        // Create a unique keytip
        var uniqueKeytip = this._getUniqueKtp(props);
        // Add to dictionary
        persisted
            ? (this.persistedKeytips[uniqueKeytip.uniqueID] = uniqueKeytip)
            : (this.keytips[uniqueKeytip.uniqueID] = uniqueKeytip);
        // We only want to add something new if we are currently showing keytip mode
        if (this.inKeytipMode || !this.delayUpdatingKeytipChange) {
            var event_1 = persisted ? _utilities_keytips_KeytipConstants__WEBPACK_IMPORTED_MODULE_0__.KeytipEvents.PERSISTED_KEYTIP_ADDED : _utilities_keytips_KeytipConstants__WEBPACK_IMPORTED_MODULE_0__.KeytipEvents.KEYTIP_ADDED;
            _Utilities__WEBPACK_IMPORTED_MODULE_1__.EventGroup.raise(this, event_1, {
                keytip: props,
                uniqueID: uniqueKeytip.uniqueID,
            });
        }
        return uniqueKeytip.uniqueID;
    };
    /**
     * Update a keytip
     *
     * @param keytipProps - Keytip to update
     * @param uniqueID - Unique ID of this keytip
     */
    KeytipManager.prototype.update = function (keytipProps, uniqueID) {
        var newKeytipProps = this.addParentOverflow(keytipProps);
        var uniqueKeytip = this._getUniqueKtp(newKeytipProps, uniqueID);
        var oldKeyTip = this.keytips[uniqueID];
        if (oldKeyTip) {
            // Update everything except 'visible'
            uniqueKeytip.keytip.visible = oldKeyTip.keytip.visible;
            // Update keytip in this.keytips
            this.keytips[uniqueID] = uniqueKeytip;
            // Update the sequence to be up to date
            delete this.sequenceMapping[oldKeyTip.keytip.keySequences.toString()];
            this.sequenceMapping[uniqueKeytip.keytip.keySequences.toString()] = uniqueKeytip.keytip;
            // Raise event only if we are currently in keytip mode
            if (this.inKeytipMode || !this.delayUpdatingKeytipChange) {
                _Utilities__WEBPACK_IMPORTED_MODULE_1__.EventGroup.raise(this, _utilities_keytips_KeytipConstants__WEBPACK_IMPORTED_MODULE_0__.KeytipEvents.KEYTIP_UPDATED, {
                    keytip: uniqueKeytip.keytip,
                    uniqueID: uniqueKeytip.uniqueID,
                });
            }
        }
    };
    /**
     * Unregisters a keytip
     *
     * @param keytipToRemove - IKeytipProps of the keytip to remove
     * @param uniqueID - Unique ID of this keytip
     * @param persisted - T/F if this keytip should be persisted, default is false
     */
    KeytipManager.prototype.unregister = function (keytipToRemove, uniqueID, persisted) {
        if (persisted === void 0) { persisted = false; }
        persisted ? delete this.persistedKeytips[uniqueID] : delete this.keytips[uniqueID];
        !persisted && delete this.sequenceMapping[keytipToRemove.keySequences.toString()];
        var event = persisted ? _utilities_keytips_KeytipConstants__WEBPACK_IMPORTED_MODULE_0__.KeytipEvents.PERSISTED_KEYTIP_REMOVED : _utilities_keytips_KeytipConstants__WEBPACK_IMPORTED_MODULE_0__.KeytipEvents.KEYTIP_REMOVED;
        // Update keytips only if we're in keytip mode
        if (this.inKeytipMode || !this.delayUpdatingKeytipChange) {
            _Utilities__WEBPACK_IMPORTED_MODULE_1__.EventGroup.raise(this, event, {
                keytip: keytipToRemove,
                uniqueID: uniqueID,
            });
        }
    };
    /**
     * Manual call to enter keytip mode
     */
    KeytipManager.prototype.enterKeytipMode = function () {
        _Utilities__WEBPACK_IMPORTED_MODULE_1__.EventGroup.raise(this, _utilities_keytips_KeytipConstants__WEBPACK_IMPORTED_MODULE_0__.KeytipEvents.ENTER_KEYTIP_MODE);
    };
    /**
     * Manual call to exit keytip mode
     */
    KeytipManager.prototype.exitKeytipMode = function () {
        _Utilities__WEBPACK_IMPORTED_MODULE_1__.EventGroup.raise(this, _utilities_keytips_KeytipConstants__WEBPACK_IMPORTED_MODULE_0__.KeytipEvents.EXIT_KEYTIP_MODE);
    };
    /**
     * Gets all IKeytipProps from this.keytips
     *
     * @returns All keytips stored in the manager
     */
    KeytipManager.prototype.getKeytips = function () {
        var _this = this;
        return Object.keys(this.keytips).map(function (key) { return _this.keytips[key].keytip; });
    };
    /**
     * Adds the overflowSetSequence to the keytipProps if its parent keytip also has it
     *
     * @param keytipProps - Keytip props to add overflowSetSequence to if necessary
     * @returns - Modified keytip props, if needed to be modified
     */
    KeytipManager.prototype.addParentOverflow = function (keytipProps) {
        var fullSequence = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__spreadArrays)(keytipProps.keySequences);
        fullSequence.pop();
        if (fullSequence.length !== 0) {
            var parentKeytip = this.sequenceMapping[fullSequence.toString()];
            if (parentKeytip && parentKeytip.overflowSetSequence) {
                return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, keytipProps), { overflowSetSequence: parentKeytip.overflowSetSequence });
            }
        }
        return keytipProps;
    };
    /**
     * Public function to bind for overflow items that have a submenu
     */
    KeytipManager.prototype.menuExecute = function (overflowButtonSequences, keytipSequences) {
        _Utilities__WEBPACK_IMPORTED_MODULE_1__.EventGroup.raise(this, _utilities_keytips_KeytipConstants__WEBPACK_IMPORTED_MODULE_0__.KeytipEvents.PERSISTED_KEYTIP_EXECUTE, {
            overflowButtonSequences: overflowButtonSequences,
            keytipSequences: keytipSequences,
        });
    };
    /**
     * Creates an IUniqueKeytip object
     *
     * @param keytipProps - IKeytipProps
     * @param uniqueID - Unique ID, will default to the next unique ID if not passed
     * @returns IUniqueKeytip object
     */
    KeytipManager.prototype._getUniqueKtp = function (keytipProps, uniqueID) {
        if (uniqueID === void 0) { uniqueID = (0,_Utilities__WEBPACK_IMPORTED_MODULE_3__.getId)(); }
        return { keytip: (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, keytipProps), uniqueID: uniqueID };
    };
    KeytipManager._instance = new KeytipManager();
    return KeytipManager;
}());

//# sourceMappingURL=KeytipManager.js.map

/***/ }),
/* 212 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KTP_PREFIX": () => (/* binding */ KTP_PREFIX),
/* harmony export */   "KTP_SEPARATOR": () => (/* binding */ KTP_SEPARATOR),
/* harmony export */   "KTP_FULL_PREFIX": () => (/* binding */ KTP_FULL_PREFIX),
/* harmony export */   "DATAKTP_TARGET": () => (/* binding */ DATAKTP_TARGET),
/* harmony export */   "DATAKTP_EXECUTE_TARGET": () => (/* binding */ DATAKTP_EXECUTE_TARGET),
/* harmony export */   "DATAKTP_ARIA_TARGET": () => (/* binding */ DATAKTP_ARIA_TARGET),
/* harmony export */   "KTP_LAYER_ID": () => (/* binding */ KTP_LAYER_ID),
/* harmony export */   "KTP_ARIA_SEPARATOR": () => (/* binding */ KTP_ARIA_SEPARATOR),
/* harmony export */   "KeytipEvents": () => (/* binding */ KeytipEvents)
/* harmony export */ });
var KTP_PREFIX = 'ktp';
var KTP_SEPARATOR = '-';
var KTP_FULL_PREFIX = KTP_PREFIX + KTP_SEPARATOR;
var DATAKTP_TARGET = 'data-ktp-target';
var DATAKTP_EXECUTE_TARGET = 'data-ktp-execute-target';
var DATAKTP_ARIA_TARGET = 'data-ktp-aria-target';
var KTP_LAYER_ID = 'ktp-layer-id';
var KTP_ARIA_SEPARATOR = ', ';
// Events
var KeytipEvents;
(function (KeytipEvents) {
    KeytipEvents.KEYTIP_ADDED = 'keytipAdded';
    KeytipEvents.KEYTIP_REMOVED = 'keytipRemoved';
    KeytipEvents.KEYTIP_UPDATED = 'keytipUpdated';
    KeytipEvents.PERSISTED_KEYTIP_ADDED = 'persistedKeytipAdded';
    KeytipEvents.PERSISTED_KEYTIP_REMOVED = 'persistedKeytipRemoved';
    KeytipEvents.PERSISTED_KEYTIP_EXECUTE = 'persistedKeytipExecute';
    KeytipEvents.ENTER_KEYTIP_MODE = 'enterKeytipMode';
    KeytipEvents.EXIT_KEYTIP_MODE = 'exitKeytipMode';
})(KeytipEvents || (KeytipEvents = {}));
//# sourceMappingURL=KeytipConstants.js.map

/***/ }),
/* 213 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sequencesToID": () => (/* binding */ sequencesToID),
/* harmony export */   "mergeOverflows": () => (/* binding */ mergeOverflows),
/* harmony export */   "ktpTargetFromSequences": () => (/* binding */ ktpTargetFromSequences),
/* harmony export */   "ktpTargetFromId": () => (/* binding */ ktpTargetFromId),
/* harmony export */   "getAriaDescribedBy": () => (/* binding */ getAriaDescribedBy)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49);
/* harmony import */ var _KeytipConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(212);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77);



/**
 * Converts a whole set of KeySequences into one keytip ID, which will be the ID for the last keytip sequence specified
 * keySequences should not include the initial keytip 'start' sequence.
 *
 * @param keySequences - Full path of IKeySequences for one keytip.
 * @returns String to use for the keytip ID.
 */
function sequencesToID(keySequences) {
    return keySequences.reduce(function (prevValue, keySequence) {
        return prevValue + _KeytipConstants__WEBPACK_IMPORTED_MODULE_0__.KTP_SEPARATOR + keySequence.split('').join(_KeytipConstants__WEBPACK_IMPORTED_MODULE_0__.KTP_SEPARATOR);
    }, _KeytipConstants__WEBPACK_IMPORTED_MODULE_0__.KTP_PREFIX);
}
/**
 * Merges an overflow sequence with a key sequence.
 *
 * @param keySequences - Full sequence for one keytip.
 * @param overflowKeySequences - Full overflow keytip sequence.
 * @returns Sequence that will be used by the keytip when in the overflow.
 */
function mergeOverflows(keySequences, overflowKeySequences) {
    var overflowSequenceLen = overflowKeySequences.length;
    var overflowSequence = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArrays)(overflowKeySequences).pop();
    var newKeySequences = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArrays)(keySequences);
    return (0,_Utilities__WEBPACK_IMPORTED_MODULE_2__.addElementAtIndex)(newKeySequences, overflowSequenceLen - 1, overflowSequence);
}
/**
 * Constructs the data-ktp-target attribute selector from a full key sequence.
 *
 * @param keySequences - Full string[] for a Keytip.
 * @returns String selector to use to query for the keytip target.
 */
function ktpTargetFromSequences(keySequences) {
    return '[' + _KeytipConstants__WEBPACK_IMPORTED_MODULE_0__.DATAKTP_TARGET + '="' + sequencesToID(keySequences) + '"]';
}
/**
 * Constructs the data-ktp-execute-target attribute selector from a keytip ID.
 *
 * @param keytipId - ID of the Keytip.
 * @returns String selector to use to query for the keytip execute target.
 */
function ktpTargetFromId(keytipId) {
    return '[' + _KeytipConstants__WEBPACK_IMPORTED_MODULE_0__.DATAKTP_EXECUTE_TARGET + '="' + keytipId + '"]';
}
/**
 * Gets the aria-describedby value to put on the component with this keytip.
 *
 * @param keySequences - KeySequences of the keytip.
 * @returns The aria-describedby value to set on the component with this keytip.
 */
function getAriaDescribedBy(keySequences) {
    var describedby = ' ' + _KeytipConstants__WEBPACK_IMPORTED_MODULE_0__.KTP_LAYER_ID;
    if (!keySequences.length) {
        // Return just the layer ID
        return describedby;
    }
    return describedby + ' ' + sequencesToID(keySequences);
}
//# sourceMappingURL=KeytipUtils.js.map

/***/ }),
/* 214 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContextualMenuItemWrapper": () => (/* binding */ ContextualMenuItemWrapper)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(169);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(150);



var ContextualMenuItemWrapper = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(ContextualMenuItemWrapper, _super);
    function ContextualMenuItemWrapper(props) {
        var _this = _super.call(this, props) || this;
        _this._onItemMouseEnter = function (ev) {
            var _a = _this.props, item = _a.item, onItemMouseEnter = _a.onItemMouseEnter;
            if (onItemMouseEnter) {
                onItemMouseEnter(item, ev, ev.currentTarget);
            }
        };
        _this._onItemClick = function (ev) {
            var _a = _this.props, item = _a.item, onItemClickBase = _a.onItemClickBase;
            if (onItemClickBase) {
                onItemClickBase(item, ev, ev.currentTarget);
            }
        };
        _this._onItemMouseLeave = function (ev) {
            var _a = _this.props, item = _a.item, onItemMouseLeave = _a.onItemMouseLeave;
            if (onItemMouseLeave) {
                onItemMouseLeave(item, ev);
            }
        };
        _this._onItemKeyDown = function (ev) {
            var _a = _this.props, item = _a.item, onItemKeyDown = _a.onItemKeyDown;
            if (onItemKeyDown) {
                onItemKeyDown(item, ev);
            }
        };
        _this._onItemMouseMove = function (ev) {
            var _a = _this.props, item = _a.item, onItemMouseMove = _a.onItemMouseMove;
            if (onItemMouseMove) {
                onItemMouseMove(item, ev, ev.currentTarget);
            }
        };
        _this._getSubmenuTarget = function () {
            return undefined;
        };
        (0,_Utilities__WEBPACK_IMPORTED_MODULE_2__.initializeComponentRef)(_this);
        return _this;
    }
    ContextualMenuItemWrapper.prototype.shouldComponentUpdate = function (newProps) {
        return !(0,_Utilities__WEBPACK_IMPORTED_MODULE_3__.shallowCompare)(newProps, this.props);
    };
    return ContextualMenuItemWrapper;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));

//# sourceMappingURL=ContextualMenuItemWrapper.js.map

/***/ }),
/* 215 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContextualMenuButton": () => (/* binding */ ContextualMenuButton)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(208);
/* harmony import */ var _ContextualMenuItemWrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(214);
/* harmony import */ var _KeytipData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(209);
/* harmony import */ var _utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(157);
/* harmony import */ var _ContextualMenuItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(205);







var ContextualMenuButton = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(ContextualMenuButton, _super);
    function ContextualMenuButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._btn = react__WEBPACK_IMPORTED_MODULE_0__.createRef();
        _this._getMemoizedMenuButtonKeytipProps = (0,_Utilities__WEBPACK_IMPORTED_MODULE_2__.memoizeFunction)(function (keytipProps) {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, keytipProps), { hasMenu: true });
        });
        _this._renderAriaDescription = function (ariaDescription, className) {
            // If ariaDescription is given, descriptionId will be assigned to ariaDescriptionSpan
            return ariaDescription ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { id: _this._ariaDescriptionId, className: className }, ariaDescription)) : null;
        };
        _this._getSubmenuTarget = function () {
            return _this._btn.current ? _this._btn.current : undefined;
        };
        return _this;
    }
    ContextualMenuButton.prototype.render = function () {
        var _this = this;
        var _a = this.props, item = _a.item, classNames = _a.classNames, index = _a.index, focusableElementIndex = _a.focusableElementIndex, totalItemCount = _a.totalItemCount, hasCheckmarks = _a.hasCheckmarks, hasIcons = _a.hasIcons, _b = _a.contextualMenuItemAs, ChildrenRenderer = _b === void 0 ? _ContextualMenuItem__WEBPACK_IMPORTED_MODULE_3__.ContextualMenuItem : _b, expandedMenuItemKey = _a.expandedMenuItemKey, onItemMouseDown = _a.onItemMouseDown, onItemClick = _a.onItemClick, openSubMenu = _a.openSubMenu, dismissSubMenu = _a.dismissSubMenu, dismissMenu = _a.dismissMenu;
        var isChecked = (0,_utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_4__.getIsChecked)(item);
        var canCheck = isChecked !== null;
        var defaultRole = (0,_utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_4__.getMenuItemAriaRole)(item);
        var itemHasSubmenu = (0,_utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_4__.hasSubmenu)(item);
        var itemProps = item.itemProps, ariaLabel = item.ariaLabel, ariaDescription = item.ariaDescription;
        var buttonNativeProperties = (0,_Utilities__WEBPACK_IMPORTED_MODULE_5__.getNativeProps)(item, _Utilities__WEBPACK_IMPORTED_MODULE_5__.buttonProperties);
        // Do not add the disabled attribute to the button so that it is focusable
        delete buttonNativeProperties.disabled;
        var itemRole = item.role || defaultRole;
        // Check for ariaDescription to set the _ariaDescriptionId and render a hidden span with
        // the description in it to be added to ariaDescribedBy
        if (ariaDescription) {
            this._ariaDescriptionId = (0,_Utilities__WEBPACK_IMPORTED_MODULE_6__.getId)();
        }
        var ariaDescribedByIds = (0,_Utilities__WEBPACK_IMPORTED_MODULE_7__.mergeAriaAttributeValues)(item.ariaDescribedBy, ariaDescription ? this._ariaDescriptionId : undefined, buttonNativeProperties['aria-describedby']);
        var itemButtonProperties = {
            className: classNames.root,
            onClick: this._onItemClick,
            onKeyDown: itemHasSubmenu ? this._onItemKeyDown : undefined,
            onMouseEnter: this._onItemMouseEnter,
            onMouseLeave: this._onItemMouseLeave,
            onMouseDown: function (ev) {
                return onItemMouseDown ? onItemMouseDown(item, ev) : undefined;
            },
            onMouseMove: this._onItemMouseMove,
            href: item.href,
            title: item.title,
            'aria-label': ariaLabel,
            'aria-describedby': ariaDescribedByIds,
            'aria-haspopup': itemHasSubmenu || undefined,
            'aria-expanded': itemHasSubmenu ? item.key === expandedMenuItemKey : undefined,
            'aria-posinset': focusableElementIndex + 1,
            'aria-setsize': totalItemCount,
            'aria-disabled': (0,_utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_4__.isItemDisabled)(item),
            'aria-checked': (itemRole === 'menuitemcheckbox' || itemRole === 'menuitemradio') && canCheck ? !!isChecked : undefined,
            'aria-selected': itemRole === 'menuitem' && canCheck ? !!isChecked : undefined,
            role: itemRole,
            // eslint-disable-next-line deprecation/deprecation
            style: item.style,
        };
        var keytipProps = item.keytipProps;
        if (keytipProps && itemHasSubmenu) {
            keytipProps = this._getMemoizedMenuButtonKeytipProps(keytipProps);
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_KeytipData__WEBPACK_IMPORTED_MODULE_8__.KeytipData, { keytipProps: keytipProps, ariaDescribedBy: ariaDescribedByIds, disabled: (0,_utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_4__.isItemDisabled)(item) }, function (keytipAttributes) { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({ ref: _this._btn }, buttonNativeProperties, itemButtonProperties, keytipAttributes),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(ChildrenRenderer, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({ componentRef: item.componentRef, item: item, classNames: classNames, index: index, onCheckmarkClick: hasCheckmarks && onItemClick ? onItemClick : undefined, hasIcons: hasIcons, openSubMenu: openSubMenu, dismissSubMenu: dismissSubMenu, dismissMenu: dismissMenu, getSubmenuTarget: _this._getSubmenuTarget }, itemProps)),
            _this._renderAriaDescription(ariaDescription, classNames.screenReaderText))); }));
    };
    return ContextualMenuButton;
}(_ContextualMenuItemWrapper__WEBPACK_IMPORTED_MODULE_9__.ContextualMenuItemWrapper));

//# sourceMappingURL=ContextualMenuButton.js.map

/***/ }),
/* 216 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContextualMenuSplitButton": () => (/* binding */ ContextualMenuSplitButton)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(168);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(149);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(72);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(208);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(73);
/* harmony import */ var _ContextualMenuItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(205);
/* harmony import */ var _ContextualMenu_classNames__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(140);
/* harmony import */ var _KeytipData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(209);
/* harmony import */ var _utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(157);
/* harmony import */ var _Divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(217);
/* harmony import */ var _ContextualMenuItemWrapper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(214);









var TouchIdleDelay = 500; /* ms */
var ContextualMenuSplitButton = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(ContextualMenuSplitButton, _super);
    function ContextualMenuSplitButton(props) {
        var _this = _super.call(this, props) || this;
        _this._getMemoizedMenuButtonKeytipProps = (0,_Utilities__WEBPACK_IMPORTED_MODULE_2__.memoizeFunction)(function (keytipProps) {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, keytipProps), { hasMenu: true });
        });
        _this._onItemKeyDown = function (ev) {
            var _a = _this.props, item = _a.item, onItemKeyDown = _a.onItemKeyDown;
            // eslint-disable-next-line deprecation/deprecation
            if (ev.which === _Utilities__WEBPACK_IMPORTED_MODULE_3__.KeyCodes.enter) {
                _this._executeItemClick(ev);
                ev.preventDefault();
                ev.stopPropagation();
            }
            else if (onItemKeyDown) {
                onItemKeyDown(item, ev);
            }
        };
        _this._getSubmenuTarget = function () {
            return _this._splitButton;
        };
        _this._renderAriaDescription = function (ariaDescription, className) {
            // If ariaDescription is given, descriptionId will be assigned to ariaDescriptionSpan
            return ariaDescription ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { id: _this._ariaDescriptionId, className: className }, ariaDescription)) : null;
        };
        _this._onItemMouseEnterPrimary = function (ev) {
            var _a = _this.props, item = _a.item, onItemMouseEnter = _a.onItemMouseEnter;
            if (onItemMouseEnter) {
                onItemMouseEnter((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, item), { subMenuProps: undefined, items: undefined }), ev, _this._splitButton);
            }
        };
        _this._onItemMouseEnterIcon = function (ev) {
            var _a = _this.props, item = _a.item, onItemMouseEnter = _a.onItemMouseEnter;
            if (onItemMouseEnter) {
                onItemMouseEnter(item, ev, _this._splitButton);
            }
        };
        _this._onItemMouseMovePrimary = function (ev) {
            var _a = _this.props, item = _a.item, onItemMouseMove = _a.onItemMouseMove;
            if (onItemMouseMove) {
                onItemMouseMove((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, item), { subMenuProps: undefined, items: undefined }), ev, _this._splitButton);
            }
        };
        _this._onItemMouseMoveIcon = function (ev) {
            var _a = _this.props, item = _a.item, onItemMouseMove = _a.onItemMouseMove;
            if (onItemMouseMove) {
                onItemMouseMove(item, ev, _this._splitButton);
            }
        };
        _this._onIconItemClick = function (ev) {
            var _a = _this.props, item = _a.item, onItemClickBase = _a.onItemClickBase;
            if (onItemClickBase) {
                onItemClickBase(item, ev, (_this._splitButton ? _this._splitButton : ev.currentTarget));
            }
        };
        _this._executeItemClick = function (ev) {
            var _a = _this.props, item = _a.item, executeItemClick = _a.executeItemClick, onItemClick = _a.onItemClick;
            if (item.disabled || item.isDisabled) {
                return;
            }
            if (_this._processingTouch && onItemClick) {
                return onItemClick(item, ev);
            }
            if (executeItemClick) {
                executeItemClick(item, ev);
            }
        };
        _this._onTouchStart = function (ev) {
            if (_this._splitButton && !('onpointerdown' in _this._splitButton)) {
                _this._handleTouchAndPointerEvent(ev);
            }
        };
        _this._onPointerDown = function (ev) {
            if (ev.pointerType === 'touch') {
                _this._handleTouchAndPointerEvent(ev);
                ev.preventDefault();
                ev.stopImmediatePropagation();
            }
        };
        _this._async = new _Utilities__WEBPACK_IMPORTED_MODULE_4__.Async(_this);
        _this._events = new _Utilities__WEBPACK_IMPORTED_MODULE_5__.EventGroup(_this);
        return _this;
    }
    ContextualMenuSplitButton.prototype.componentDidMount = function () {
        if (this._splitButton && 'onpointerdown' in this._splitButton) {
            this._events.on(this._splitButton, 'pointerdown', this._onPointerDown, true);
        }
    };
    ContextualMenuSplitButton.prototype.componentWillUnmount = function () {
        this._async.dispose();
        this._events.dispose();
    };
    ContextualMenuSplitButton.prototype.render = function () {
        var _this = this;
        var _a = this.props, item = _a.item, classNames = _a.classNames, index = _a.index, focusableElementIndex = _a.focusableElementIndex, totalItemCount = _a.totalItemCount, hasCheckmarks = _a.hasCheckmarks, hasIcons = _a.hasIcons, onItemMouseLeave = _a.onItemMouseLeave, expandedMenuItemKey = _a.expandedMenuItemKey;
        var itemHasSubmenu = (0,_utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_6__.hasSubmenu)(item);
        var keytipProps = item.keytipProps;
        if (keytipProps) {
            keytipProps = this._getMemoizedMenuButtonKeytipProps(keytipProps);
        }
        // Check for ariaDescription to set the _ariaDescriptionId and render a hidden span with
        // the description in it to be added to ariaDescribedBy
        var ariaDescription = item.ariaDescription;
        if (ariaDescription) {
            this._ariaDescriptionId = (0,_Utilities__WEBPACK_IMPORTED_MODULE_7__.getId)();
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_KeytipData__WEBPACK_IMPORTED_MODULE_8__.KeytipData, { keytipProps: keytipProps, disabled: (0,_utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_6__.isItemDisabled)(item) }, function (keytipAttributes) { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { "data-ktp-target": keytipAttributes['data-ktp-target'], ref: function (splitButton) { return (_this._splitButton = splitButton); }, role: (0,_utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_6__.getMenuItemAriaRole)(item), "aria-label": item.ariaLabel, className: classNames.splitContainer, "aria-disabled": (0,_utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_6__.isItemDisabled)(item), "aria-expanded": itemHasSubmenu ? item.key === expandedMenuItemKey : undefined, "aria-haspopup": true, "aria-describedby": (0,_Utilities__WEBPACK_IMPORTED_MODULE_9__.mergeAriaAttributeValues)(item.ariaDescribedBy, ariaDescription ? _this._ariaDescriptionId : undefined, keytipAttributes['aria-describedby']), "aria-checked": item.isChecked || item.checked, "aria-posinset": focusableElementIndex + 1, "aria-setsize": totalItemCount, onMouseEnter: _this._onItemMouseEnterPrimary, onMouseLeave: onItemMouseLeave ? onItemMouseLeave.bind(_this, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, item), { subMenuProps: null, items: null })) : undefined, onMouseMove: _this._onItemMouseMovePrimary, onKeyDown: _this._onItemKeyDown, onClick: _this._executeItemClick, onTouchStart: _this._onTouchStart, tabIndex: 0, "data-is-focusable": true, "aria-roledescription": item['aria-roledescription'] },
            _this._renderSplitPrimaryButton(item, classNames, index, hasCheckmarks, hasIcons),
            _this._renderSplitDivider(item),
            _this._renderSplitIconButton(item, classNames, index, keytipAttributes),
            _this._renderAriaDescription(ariaDescription, classNames.screenReaderText))); }));
    };
    ContextualMenuSplitButton.prototype._renderSplitPrimaryButton = function (item, 
    // eslint-disable-next-line deprecation/deprecation
    classNames, index, hasCheckmarks, hasIcons) {
        var _a = this.props, _b = _a.contextualMenuItemAs, ChildrenRenderer = _b === void 0 ? _ContextualMenuItem__WEBPACK_IMPORTED_MODULE_10__.ContextualMenuItem : _b, onItemClick = _a.onItemClick;
        var itemProps = {
            key: item.key,
            disabled: (0,_utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_6__.isItemDisabled)(item) || item.primaryDisabled,
            /* eslint-disable deprecation/deprecation */
            name: item.name,
            text: item.text || item.name,
            secondaryText: item.secondaryText,
            /* eslint-enable deprecation/deprecation */
            className: classNames.splitPrimary,
            canCheck: item.canCheck,
            isChecked: item.isChecked,
            checked: item.checked,
            iconProps: item.iconProps,
            onRenderIcon: item.onRenderIcon,
            data: item.data,
            'data-is-focusable': false,
        };
        var itemComponentProps = item.itemProps;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, (0,_Utilities__WEBPACK_IMPORTED_MODULE_11__.getNativeProps)(itemProps, _Utilities__WEBPACK_IMPORTED_MODULE_11__.buttonProperties)),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(ChildrenRenderer, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({ "data-is-focusable": false, item: itemProps, classNames: classNames, index: index, onCheckmarkClick: hasCheckmarks && onItemClick ? onItemClick : undefined, hasIcons: hasIcons }, itemComponentProps))));
    };
    ContextualMenuSplitButton.prototype._renderSplitDivider = function (item) {
        var getDividerClassNames = item.getSplitButtonVerticalDividerClassNames || _ContextualMenu_classNames__WEBPACK_IMPORTED_MODULE_12__.getSplitButtonVerticalDividerClassNames;
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Divider__WEBPACK_IMPORTED_MODULE_13__.VerticalDivider, { getClassNames: getDividerClassNames });
    };
    ContextualMenuSplitButton.prototype._renderSplitIconButton = function (item, classNames, // eslint-disable-line deprecation/deprecation
    index, keytipAttributes) {
        var _a = this.props, _b = _a.contextualMenuItemAs, ChildrenRenderer = _b === void 0 ? _ContextualMenuItem__WEBPACK_IMPORTED_MODULE_10__.ContextualMenuItem : _b, onItemMouseLeave = _a.onItemMouseLeave, onItemMouseDown = _a.onItemMouseDown, openSubMenu = _a.openSubMenu, dismissSubMenu = _a.dismissSubMenu, dismissMenu = _a.dismissMenu;
        var itemProps = {
            onClick: this._onIconItemClick,
            disabled: (0,_utilities_contextualMenu_index__WEBPACK_IMPORTED_MODULE_6__.isItemDisabled)(item),
            className: classNames.splitMenu,
            subMenuProps: item.subMenuProps,
            submenuIconProps: item.submenuIconProps,
            split: true,
            key: item.key,
        };
        var buttonProps = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, (0,_Utilities__WEBPACK_IMPORTED_MODULE_11__.getNativeProps)(itemProps, _Utilities__WEBPACK_IMPORTED_MODULE_11__.buttonProperties)), {
            onMouseEnter: this._onItemMouseEnterIcon,
            onMouseLeave: onItemMouseLeave ? onItemMouseLeave.bind(this, item) : undefined,
            onMouseDown: function (ev) {
                return onItemMouseDown ? onItemMouseDown(item, ev) : undefined;
            },
            onMouseMove: this._onItemMouseMoveIcon,
            'data-is-focusable': false,
            'data-ktp-execute-target': keytipAttributes['data-ktp-execute-target'],
            'aria-hidden': true,
        });
        var itemComponentProps = item.itemProps;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, buttonProps),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(ChildrenRenderer, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({ componentRef: item.componentRef, item: itemProps, classNames: classNames, index: index, hasIcons: false, openSubMenu: openSubMenu, dismissSubMenu: dismissSubMenu, dismissMenu: dismissMenu, getSubmenuTarget: this._getSubmenuTarget }, itemComponentProps))));
    };
    ContextualMenuSplitButton.prototype._handleTouchAndPointerEvent = function (ev) {
        var _this = this;
        var onTap = this.props.onTap;
        if (onTap) {
            onTap(ev);
        }
        // If we already have an existing timeout from a previous touch/pointer event
        // cancel that timeout so we can set a new one.
        if (this._lastTouchTimeoutId) {
            this._async.clearTimeout(this._lastTouchTimeoutId);
            this._lastTouchTimeoutId = undefined;
        }
        this._processingTouch = true;
        this._lastTouchTimeoutId = this._async.setTimeout(function () {
            _this._processingTouch = false;
            _this._lastTouchTimeoutId = undefined;
        }, TouchIdleDelay);
    };
    return ContextualMenuSplitButton;
}(_ContextualMenuItemWrapper__WEBPACK_IMPORTED_MODULE_14__.ContextualMenuItemWrapper));

//# sourceMappingURL=ContextualMenuSplitButton.js.map

/***/ }),
/* 217 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerticalDivider": () => (/* binding */ VerticalDivider)
/* harmony export */ });
/* harmony import */ var _VerticalDivider_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(219);
/* harmony import */ var _VerticalDivider_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(218);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);



var VerticalDivider = (0,_Utilities__WEBPACK_IMPORTED_MODULE_0__.styled)(_VerticalDivider_base__WEBPACK_IMPORTED_MODULE_1__.VerticalDividerBase, _VerticalDivider_styles__WEBPACK_IMPORTED_MODULE_2__.getStyles, undefined, {
    scope: 'VerticalDivider',
});
//# sourceMappingURL=VerticalDivider.js.map

/***/ }),
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseComponent": () => (/* binding */ BaseComponent),
/* harmony export */   "nullRender": () => (/* binding */ nullRender)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _Async__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(168);
/* harmony import */ var _EventGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(149);
/* harmony import */ var _warn_warnConditionallyRequiredProps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(197);
/* harmony import */ var _warn_warnMutuallyExclusive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(198);
/* harmony import */ var _warn_warnDeprecations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(172);







/**
 * BaseComponent class, which provides basic helpers for all components.
 *
 * @public
 * {@docCategory BaseComponent}
 *
 * @deprecated Do not use. We are moving away from class component.
 */
var BaseComponent = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(BaseComponent, _super);
    /**
     * BaseComponent constructor
     * @param props - The props for the component.
     * @param context - The context for the component.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function BaseComponent(props, context) {
        var _this = _super.call(this, props, context) || this;
        // eslint-disable-next-line deprecation/deprecation
        _makeAllSafe(_this, BaseComponent.prototype, [
            'componentDidMount',
            'shouldComponentUpdate',
            'getSnapshotBeforeUpdate',
            'render',
            'componentDidUpdate',
            'componentWillUnmount',
        ]);
        return _this;
    }
    /**
     * When the component receives props, make sure the componentRef is updated.
     */
    BaseComponent.prototype.componentDidUpdate = function (prevProps, prevState) {
        this._updateComponentRef(prevProps, this.props);
    };
    /**
     * When the component has mounted, update the componentRef.
     */
    BaseComponent.prototype.componentDidMount = function () {
        this._setComponentRef(this.props.componentRef, this);
    };
    /**
     * If we have disposables, dispose them automatically on unmount.
     */
    BaseComponent.prototype.componentWillUnmount = function () {
        this._setComponentRef(this.props.componentRef, null);
        if (this.__disposables) {
            for (var i = 0, len = this._disposables.length; i < len; i++) {
                var disposable = this.__disposables[i];
                if (disposable.dispose) {
                    disposable.dispose();
                }
            }
            this.__disposables = null;
        }
    };
    Object.defineProperty(BaseComponent.prototype, "className", {
        /**
         * Gets the object's class name.
         */
        get: function () {
            if (!this.__className) {
                var funcNameRegex = /function (.{1,})\(/;
                var results = funcNameRegex.exec(this.constructor.toString());
                this.__className = results && results.length > 1 ? results[1] : '';
            }
            return this.__className;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseComponent.prototype, "_disposables", {
        /**
         * Allows subclasses to push things to this._disposables to be auto disposed.
         */
        get: function () {
            if (!this.__disposables) {
                this.__disposables = [];
            }
            return this.__disposables;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseComponent.prototype, "_async", {
        /**
         * Gets the async instance associated with the component, created on demand. The async instance gives
         * subclasses a way to execute setTimeout/setInterval async calls safely, where the callbacks
         * will be cleared/ignored automatically after unmounting. The helpers within the async object also
         * preserve the this pointer so that you don't need to "bind" the callbacks.
         */
        get: function () {
            if (!this.__async) {
                this.__async = new _Async__WEBPACK_IMPORTED_MODULE_2__.Async(this);
                this._disposables.push(this.__async);
            }
            return this.__async;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseComponent.prototype, "_events", {
        /**
         * Gets the event group instance assocaited with the component, created on demand. The event instance
         * provides on/off methods for listening to DOM (or regular javascript object) events. The event callbacks
         * will be automatically disconnected after unmounting. The helpers within the events object also
         * preserve the this reference so that you don't need to "bind" the callbacks.
         */
        get: function () {
            if (!this.__events) {
                this.__events = new _EventGroup__WEBPACK_IMPORTED_MODULE_3__.EventGroup(this);
                this._disposables.push(this.__events);
            }
            return this.__events;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Helper to return a memoized ref resolver function.
     * @param refName - Name of the member to assign the ref to.
     * @returns A function instance keyed from the given refname.
     * @deprecated Use `createRef` from React.createRef.
     */
    BaseComponent.prototype._resolveRef = function (refName) {
        var _this = this;
        if (!this.__resolves) {
            this.__resolves = {};
        }
        if (!this.__resolves[refName]) {
            this.__resolves[refName] = function (ref) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                return (_this[refName] = ref);
            };
        }
        return this.__resolves[refName];
    };
    /**
     * Updates the componentRef (by calling it with "this" when necessary.)
     */
    BaseComponent.prototype._updateComponentRef = function (currentProps, newProps) {
        if (newProps === void 0) { newProps = {}; }
        // currentProps *should* always be defined, but verify that just in case a subclass is manually
        // calling a lifecycle method with no parameters (which has happened) or other odd usage.
        if (currentProps && newProps && currentProps.componentRef !== newProps.componentRef) {
            this._setComponentRef(currentProps.componentRef, null);
            this._setComponentRef(newProps.componentRef, this);
        }
    };
    /**
     * Warns when a deprecated props are being used.
     *
     * @param deprecationMap - The map of deprecations, where key is the prop name and the value is
     * either null or a replacement prop name.
     */
    BaseComponent.prototype._warnDeprecations = function (deprecationMap) {
        (0,_warn_warnDeprecations__WEBPACK_IMPORTED_MODULE_4__.warnDeprecations)(this.className, this.props, deprecationMap);
    };
    /**
     * Warns when props which are mutually exclusive with each other are both used.
     *
     * @param mutuallyExclusiveMap - The map of mutually exclusive props.
     */
    BaseComponent.prototype._warnMutuallyExclusive = function (mutuallyExclusiveMap) {
        (0,_warn_warnMutuallyExclusive__WEBPACK_IMPORTED_MODULE_5__.warnMutuallyExclusive)(this.className, this.props, mutuallyExclusiveMap);
    };
    /**
     * Warns when props are required if a condition is met.
     *
     * @param requiredProps - The name of the props that are required when the condition is met.
     * @param conditionalPropName - The name of the prop that the condition is based on.
     * @param condition - Whether the condition is met.
     */
    BaseComponent.prototype._warnConditionallyRequiredProps = function (requiredProps, conditionalPropName, condition) {
        (0,_warn_warnConditionallyRequiredProps__WEBPACK_IMPORTED_MODULE_6__.warnConditionallyRequiredProps)(this.className, this.props, requiredProps, conditionalPropName, condition);
    };
    BaseComponent.prototype._setComponentRef = function (ref, value) {
        if (!this._skipComponentRefResolution && ref) {
            if (typeof ref === 'function') {
                ref(value);
            }
            if (typeof ref === 'object') {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                ref.current = value;
            }
        }
    };
    return BaseComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));

/**
 * Helper to override a given method with a wrapper method that can try/catch the original, but also
 * ensures that the BaseComponent's methods are called before the subclass's. This ensures that
 * componentWillUnmount in the base is called and that things in the _disposables array are disposed.
 */
// eslint-disable-next-line deprecation/deprecation
function _makeAllSafe(obj, prototype, methodNames) {
    for (var i = 0, len = methodNames.length; i < len; i++) {
        _makeSafe(obj, prototype, methodNames[i]);
    }
}
// eslint-disable-next-line deprecation/deprecation
function _makeSafe(obj, prototype, methodName) {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    var classMethod = obj[methodName];
    var prototypeMethod = prototype[methodName];
    if (classMethod || prototypeMethod) {
        obj[methodName] = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            /* eslint-enable @typescript-eslint/no-explicit-any */
            var retVal;
            if (prototypeMethod) {
                retVal = prototypeMethod.apply(this, args);
            }
            if (classMethod !== prototypeMethod) {
                retVal = classMethod.apply(this, args);
            }
            return retVal;
        };
    }
}
/**
 * Simple constant function for returning null, used to render empty templates in JSX.
 *
 * @public
 */
function nullRender() {
    return null;
}
//# sourceMappingURL=BaseComponent.js.map

/***/ }),
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "customizable": () => (/* binding */ customizable)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _Customizations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45);
/* harmony import */ var _hoistStatics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(153);
/* harmony import */ var _CustomizerContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44);
/* harmony import */ var _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51);






function customizable(scope, fields, concatStyles) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return function customizableFactory(ComposedComponent) {
        var _a;
        var resultClass = (_a = /** @class */ (function (_super) {
                (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(ComponentWithInjectedProps, _super);
                function ComponentWithInjectedProps(props) {
                    var _this = _super.call(this, props) || this;
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    _this._styleCache = {};
                    _this._onSettingChanged = _this._onSettingChanged.bind(_this);
                    return _this;
                }
                ComponentWithInjectedProps.prototype.componentDidMount = function () {
                    _Customizations__WEBPACK_IMPORTED_MODULE_2__.Customizations.observe(this._onSettingChanged);
                };
                ComponentWithInjectedProps.prototype.componentWillUnmount = function () {
                    _Customizations__WEBPACK_IMPORTED_MODULE_2__.Customizations.unobserve(this._onSettingChanged);
                };
                ComponentWithInjectedProps.prototype.render = function () {
                    var _this = this;
                    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CustomizerContext__WEBPACK_IMPORTED_MODULE_3__.CustomizerContext.Consumer, null, function (context) {
                        var defaultProps = _Customizations__WEBPACK_IMPORTED_MODULE_2__.Customizations.getSettings(fields, scope, context.customizations);
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        var componentProps = _this.props;
                        // If defaultProps.styles is a function, evaluate it before calling concatStyleSets
                        if (defaultProps.styles && typeof defaultProps.styles === 'function') {
                            defaultProps.styles = defaultProps.styles((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, defaultProps), componentProps));
                        }
                        // If concatStyles is true and custom styles have been defined compute those styles
                        if (concatStyles && defaultProps.styles) {
                            if (_this._styleCache.default !== defaultProps.styles ||
                                _this._styleCache.component !== componentProps.styles) {
                                var mergedStyles = (0,_fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_4__.concatStyleSets)(defaultProps.styles, componentProps.styles);
                                _this._styleCache.default = defaultProps.styles;
                                _this._styleCache.component = componentProps.styles;
                                _this._styleCache.merged = mergedStyles;
                            }
                            return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ComposedComponent, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, defaultProps, componentProps, { styles: _this._styleCache.merged }));
                        }
                        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ComposedComponent, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, defaultProps, componentProps));
                    }));
                };
                ComponentWithInjectedProps.prototype._onSettingChanged = function () {
                    this.forceUpdate();
                };
                return ComponentWithInjectedProps;
            }(react__WEBPACK_IMPORTED_MODULE_0__.Component)),
            _a.displayName = 'Customized' + scope,
            _a);
        return (0,_hoistStatics__WEBPACK_IMPORTED_MODULE_5__.hoistStatics)(ComposedComponent, resultClass);
    };
}
//# sourceMappingURL=customizable.js.map

/***/ }),
/* 228 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DelayedRender": () => (/* binding */ DelayedRender)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


/**
 * Utility component for delaying the render of a child component after a given delay. This component
 * requires a single child component; don't pass in many components. Wrap multiple components in a DIV
 * if necessary.
 *
 * @public
 * {@docCategory DelayedRender}
 */
var DelayedRender = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(DelayedRender, _super);
    function DelayedRender(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isRendered: false,
        };
        return _this;
    }
    DelayedRender.prototype.componentDidMount = function () {
        var _this = this;
        var delay = this.props.delay;
        this._timeoutId = window.setTimeout(function () {
            _this.setState({
                isRendered: true,
            });
        }, delay);
    };
    DelayedRender.prototype.componentWillUnmount = function () {
        if (this._timeoutId) {
            clearTimeout(this._timeoutId);
        }
    };
    DelayedRender.prototype.render = function () {
        return this.state.isRendered ? react__WEBPACK_IMPORTED_MODULE_0__.Children.only(this.props.children) : null;
    };
    DelayedRender.defaultProps = {
        delay: 0,
    };
    return DelayedRender;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));

//# sourceMappingURL=DelayedRender.js.map

/***/ }),
/* 229 */,
/* 230 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextField": () => (/* binding */ TextField)
/* harmony export */ });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);
/* harmony import */ var _TextField_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(231);
/* harmony import */ var _TextField_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(236);



var TextField = (0,_Utilities__WEBPACK_IMPORTED_MODULE_0__.styled)(_TextField_base__WEBPACK_IMPORTED_MODULE_1__.TextFieldBase, _TextField_styles__WEBPACK_IMPORTED_MODULE_2__.getStyles, undefined, {
    scope: 'TextField',
});
//# sourceMappingURL=TextField.js.map

/***/ }),
/* 231 */,
/* 232 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Label": () => (/* binding */ Label)
/* harmony export */ });
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);
/* harmony import */ var _Label_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(233);
/* harmony import */ var _Label_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(234);



var Label = (0,_Utilities__WEBPACK_IMPORTED_MODULE_0__.styled)(_Label_base__WEBPACK_IMPORTED_MODULE_1__.LabelBase, _Label_styles__WEBPACK_IMPORTED_MODULE_2__.getStyles, undefined, {
    scope: 'Label',
});
//# sourceMappingURL=Label.js.map

/***/ }),
/* 233 */,
/* 234 */,
/* 235 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isIE11": () => (/* binding */ isIE11)
/* harmony export */ });
/* harmony import */ var _dom_getWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);

var isIE11 = function () {
    var _a;
    var win = (0,_dom_getWindow__WEBPACK_IMPORTED_MODULE_0__.getWindow)();
    if (!((_a = win === null || win === void 0 ? void 0 : win.navigator) === null || _a === void 0 ? void 0 : _a.userAgent)) {
        return false;
    }
    return win.navigator.userAgent.indexOf('rv:11.0') > -1;
};
//# sourceMappingURL=ie11Detector.js.map

/***/ }),
/* 236 */,
/* 237 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrimaryButton": () => (/* binding */ PrimaryButton)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(222);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(227);
/* harmony import */ var _DefaultButton_DefaultButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(238);




/**
 * {@docCategory Button}
 */
var PrimaryButton = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(PrimaryButton, _super);
    function PrimaryButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PrimaryButton.prototype.render = function () {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DefaultButton_DefaultButton__WEBPACK_IMPORTED_MODULE_2__.DefaultButton, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, this.props, { primary: true, onRenderDescription: _Utilities__WEBPACK_IMPORTED_MODULE_3__.nullRender }));
    };
    PrimaryButton = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,_Utilities__WEBPACK_IMPORTED_MODULE_4__.customizable)('PrimaryButton', ['theme', 'styles'], true)
    ], PrimaryButton);
    return PrimaryButton;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));

//# sourceMappingURL=PrimaryButton.js.map

/***/ }),
/* 238 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultButton": () => (/* binding */ DefaultButton)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _BaseButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(222);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(227);
/* harmony import */ var _DefaultButton_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(239);





/**
 * {@docCategory Button}
 */
var DefaultButton = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(DefaultButton, _super);
    function DefaultButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DefaultButton.prototype.render = function () {
        var _a = this.props, _b = _a.primary, primary = _b === void 0 ? false : _b, styles = _a.styles, theme = _a.theme;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_BaseButton__WEBPACK_IMPORTED_MODULE_2__.BaseButton, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, this.props, { variantClassName: primary ? 'ms-Button--primary' : 'ms-Button--default', styles: (0,_DefaultButton_styles__WEBPACK_IMPORTED_MODULE_3__.getStyles)(theme, styles, primary), onRenderDescription: _Utilities__WEBPACK_IMPORTED_MODULE_4__.nullRender })));
    };
    DefaultButton = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
        (0,_Utilities__WEBPACK_IMPORTED_MODULE_5__.customizable)('DefaultButton', ['theme', 'styles'], true)
    ], DefaultButton);
    return DefaultButton;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));

//# sourceMappingURL=DefaultButton.js.map

/***/ }),
/* 239 */,
/* 240 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "standardStyles": () => (/* binding */ standardStyles),
/* harmony export */   "primaryStyles": () => (/* binding */ primaryStyles)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49);
/* harmony import */ var _Styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(111);



var splitButtonDividerBaseStyles = function () {
    return {
        position: 'absolute',
        width: 1,
        right: 31,
        top: 8,
        bottom: 8,
    };
};
function standardStyles(theme) {
    var _a, _b, _c, _d, _e;
    var s = theme.semanticColors, p = theme.palette;
    var buttonBackground = s.buttonBackground;
    var buttonBackgroundPressed = s.buttonBackgroundPressed;
    var buttonBackgroundHovered = s.buttonBackgroundHovered;
    var buttonBackgroundDisabled = s.buttonBackgroundDisabled;
    var buttonText = s.buttonText;
    var buttonTextHovered = s.buttonTextHovered;
    var buttonTextDisabled = s.buttonTextDisabled;
    var buttonTextChecked = s.buttonTextChecked;
    var buttonTextCheckedHovered = s.buttonTextCheckedHovered;
    return {
        root: {
            backgroundColor: buttonBackground,
            color: buttonText,
        },
        rootHovered: {
            backgroundColor: buttonBackgroundHovered,
            color: buttonTextHovered,
            selectors: (_a = {},
                _a[_Styling__WEBPACK_IMPORTED_MODULE_0__.HighContrastSelector] = {
                    borderColor: 'Highlight',
                    color: 'Highlight',
                },
                _a),
        },
        rootPressed: {
            backgroundColor: buttonBackgroundPressed,
            color: buttonTextChecked,
        },
        rootExpanded: {
            backgroundColor: buttonBackgroundPressed,
            color: buttonTextChecked,
        },
        rootChecked: {
            backgroundColor: buttonBackgroundPressed,
            color: buttonTextChecked,
        },
        rootCheckedHovered: {
            backgroundColor: buttonBackgroundPressed,
            color: buttonTextCheckedHovered,
        },
        rootDisabled: {
            color: buttonTextDisabled,
            backgroundColor: buttonBackgroundDisabled,
            selectors: (_b = {},
                _b[_Styling__WEBPACK_IMPORTED_MODULE_0__.HighContrastSelector] = {
                    color: 'GrayText',
                    borderColor: 'GrayText',
                    backgroundColor: 'Window',
                },
                _b),
        },
        // Split button styles
        splitButtonContainer: {
            selectors: (_c = {},
                _c[_Styling__WEBPACK_IMPORTED_MODULE_0__.HighContrastSelector] = {
                    border: 'none',
                },
                _c),
        },
        splitButtonMenuButton: {
            color: p.white,
            backgroundColor: 'transparent',
            selectors: {
                ':hover': {
                    backgroundColor: p.neutralLight,
                    selectors: (_d = {},
                        _d[_Styling__WEBPACK_IMPORTED_MODULE_0__.HighContrastSelector] = {
                            color: 'Highlight',
                        },
                        _d),
                },
            },
        },
        splitButtonMenuButtonDisabled: {
            backgroundColor: s.buttonBackgroundDisabled,
            selectors: {
                ':hover': {
                    backgroundColor: s.buttonBackgroundDisabled,
                },
            },
        },
        splitButtonDivider: (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, splitButtonDividerBaseStyles()), { backgroundColor: p.neutralTertiaryAlt, selectors: (_e = {},
                _e[_Styling__WEBPACK_IMPORTED_MODULE_0__.HighContrastSelector] = {
                    backgroundColor: 'WindowText',
                },
                _e) }),
        splitButtonDividerDisabled: {
            backgroundColor: theme.palette.neutralTertiaryAlt,
        },
        splitButtonMenuButtonChecked: {
            backgroundColor: p.neutralQuaternaryAlt,
            selectors: {
                ':hover': {
                    backgroundColor: p.neutralQuaternaryAlt,
                },
            },
        },
        splitButtonMenuButtonExpanded: {
            backgroundColor: p.neutralQuaternaryAlt,
            selectors: {
                ':hover': {
                    backgroundColor: p.neutralQuaternaryAlt,
                },
            },
        },
        splitButtonMenuIcon: {
            color: s.buttonText,
        },
        splitButtonMenuIconDisabled: {
            color: s.buttonTextDisabled,
        },
    };
}
function primaryStyles(theme) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    var p = theme.palette, s = theme.semanticColors;
    return {
        root: {
            backgroundColor: s.primaryButtonBackground,
            border: "1px solid " + s.primaryButtonBackground,
            color: s.primaryButtonText,
            selectors: (_a = {},
                _a[_Styling__WEBPACK_IMPORTED_MODULE_0__.HighContrastSelector] = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({ color: 'Window', backgroundColor: 'WindowText', borderColor: 'WindowText' }, (0,_Styling__WEBPACK_IMPORTED_MODULE_0__.getHighContrastNoAdjustStyle)()),
                _a["." + _Utilities__WEBPACK_IMPORTED_MODULE_2__.IsFocusVisibleClassName + " &:focus"] = {
                    selectors: {
                        ':after': {
                            border: "none",
                            outlineColor: p.white,
                        },
                    },
                },
                _a),
        },
        rootHovered: {
            backgroundColor: s.primaryButtonBackgroundHovered,
            border: "1px solid " + s.primaryButtonBackgroundHovered,
            color: s.primaryButtonTextHovered,
            selectors: (_b = {},
                _b[_Styling__WEBPACK_IMPORTED_MODULE_0__.HighContrastSelector] = {
                    color: 'Window',
                    backgroundColor: 'Highlight',
                    borderColor: 'Highlight',
                },
                _b),
        },
        rootPressed: {
            backgroundColor: s.primaryButtonBackgroundPressed,
            border: "1px solid " + s.primaryButtonBackgroundPressed,
            color: s.primaryButtonTextPressed,
            selectors: (_c = {},
                _c[_Styling__WEBPACK_IMPORTED_MODULE_0__.HighContrastSelector] = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({ color: 'Window', backgroundColor: 'WindowText', borderColor: 'WindowText' }, (0,_Styling__WEBPACK_IMPORTED_MODULE_0__.getHighContrastNoAdjustStyle)()),
                _c),
        },
        rootExpanded: {
            backgroundColor: s.primaryButtonBackgroundPressed,
            color: s.primaryButtonTextPressed,
        },
        rootChecked: {
            backgroundColor: s.primaryButtonBackgroundPressed,
            color: s.primaryButtonTextPressed,
        },
        rootCheckedHovered: {
            backgroundColor: s.primaryButtonBackgroundPressed,
            color: s.primaryButtonTextPressed,
        },
        rootDisabled: {
            color: s.primaryButtonTextDisabled,
            backgroundColor: s.primaryButtonBackgroundDisabled,
            selectors: (_d = {},
                _d[_Styling__WEBPACK_IMPORTED_MODULE_0__.HighContrastSelector] = {
                    color: 'GrayText',
                    borderColor: 'GrayText',
                    backgroundColor: 'Window',
                },
                _d),
        },
        // Split button styles
        splitButtonContainer: {
            selectors: (_e = {},
                _e[_Styling__WEBPACK_IMPORTED_MODULE_0__.HighContrastSelector] = {
                    border: 'none',
                },
                _e),
        },
        splitButtonDivider: (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, splitButtonDividerBaseStyles()), { backgroundColor: p.white, selectors: (_f = {},
                _f[_Styling__WEBPACK_IMPORTED_MODULE_0__.HighContrastSelector] = {
                    backgroundColor: 'Window',
                },
                _f) }),
        splitButtonMenuButton: {
            backgroundColor: s.primaryButtonBackground,
            color: s.primaryButtonText,
            selectors: (_g = {},
                _g[_Styling__WEBPACK_IMPORTED_MODULE_0__.HighContrastSelector] = {
                    backgroundColor: 'WindowText',
                },
                _g[':hover'] = {
                    backgroundColor: s.primaryButtonBackgroundHovered,
                    selectors: (_h = {},
                        _h[_Styling__WEBPACK_IMPORTED_MODULE_0__.HighContrastSelector] = {
                            color: 'Highlight',
                        },
                        _h),
                },
                _g),
        },
        splitButtonMenuButtonDisabled: {
            backgroundColor: s.primaryButtonBackgroundDisabled,
            selectors: {
                ':hover': {
                    backgroundColor: s.primaryButtonBackgroundDisabled,
                },
            },
        },
        splitButtonMenuButtonChecked: {
            backgroundColor: s.primaryButtonBackgroundPressed,
            selectors: {
                ':hover': {
                    backgroundColor: s.primaryButtonBackgroundPressed,
                },
            },
        },
        splitButtonMenuButtonExpanded: {
            backgroundColor: s.primaryButtonBackgroundPressed,
            selectors: {
                ':hover': {
                    backgroundColor: s.primaryButtonBackgroundPressed,
                },
            },
        },
        splitButtonMenuIcon: {
            color: s.primaryButtonText,
        },
        splitButtonMenuIconDisabled: {
            color: p.neutralTertiary,
            selectors: (_j = {},
                _j[_Styling__WEBPACK_IMPORTED_MODULE_0__.HighContrastSelector] = {
                    color: 'GrayText',
                },
                _j),
        },
    };
}
//# sourceMappingURL=ButtonThemes.js.map

/***/ }),
/* 241 */,
/* 242 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeProvider": () => (/* binding */ ThemeProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _useThemeProviderClasses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(249);
/* harmony import */ var _useThemeProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(243);
/* harmony import */ var _fluentui_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(191);
/* harmony import */ var _fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(134);





/**
 * ThemeProvider, used for providing css variables and registering stylesheets.
 */
var ThemeProvider = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
    var rootRef = (0,_fluentui_react_hooks__WEBPACK_IMPORTED_MODULE_1__.useMergedRefs)(ref, react__WEBPACK_IMPORTED_MODULE_0__.useRef(null));
    var _a = (0,_useThemeProvider__WEBPACK_IMPORTED_MODULE_2__.useThemeProvider)(props, {
        ref: rootRef,
        as: 'div',
        applyTo: 'element',
    }), render = _a.render, state = _a.state;
    // Render styles.
    (0,_useThemeProviderClasses__WEBPACK_IMPORTED_MODULE_3__.useThemeProviderClasses)(state);
    // Apply focus rect class on key presses.
    (0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_4__.useFocusRects)(state.ref);
    // Return the rendered content.
    return render(state);
});
ThemeProvider.displayName = 'ThemeProvider';
//# sourceMappingURL=ThemeProvider.js.map

/***/ }),
/* 243 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useThemeProvider": () => (/* binding */ useThemeProvider)
/* harmony export */ });
/* harmony import */ var _renderThemeProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(247);
/* harmony import */ var _useThemeProviderState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(244);
/* harmony import */ var _fluentui_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(144);



/**
 * Returns the ThemeProvider render function and calculated state, given user input, ref, and
 * a set of default prop values.
 */
var useThemeProvider = function (props, defaultProps) {
    var state = (0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_0__.getPropsWithDefaults)(defaultProps, props);
    // Apply changes to state.
    (0,_useThemeProviderState__WEBPACK_IMPORTED_MODULE_1__.useThemeProviderState)(state);
    return {
        state: state,
        render: _renderThemeProvider__WEBPACK_IMPORTED_MODULE_2__.renderThemeProvider,
    };
};
//# sourceMappingURL=useThemeProvider.js.map

/***/ }),
/* 244 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useThemeProviderState": () => (/* binding */ useThemeProviderState)
/* harmony export */ });
/* harmony import */ var _fluentui_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(107);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _useTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(245);
/* harmony import */ var _fluentui_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72);




var themeToIdMap = new Map();
var getThemeId = function () {
    var themes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        themes[_i] = arguments[_i];
    }
    var ids = [];
    for (var _a = 0, themes_1 = themes; _a < themes_1.length; _a++) {
        var theme = themes_1[_a];
        if (theme) {
            var id = theme.id || themeToIdMap.get(theme);
            if (!id) {
                id = (0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_1__.getId)('');
                themeToIdMap.set(theme, id);
            }
            ids.push(id);
        }
    }
    return ids.join('-');
};
var useThemeProviderState = function (draftState) {
    var userTheme = draftState.theme;
    // Pull contextual theme.
    var parentTheme = (0,_useTheme__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
    // Update the incoming theme with a memoized version of the merged theme.
    var theme = (draftState.theme = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(function () {
        var mergedTheme = (0,_fluentui_theme__WEBPACK_IMPORTED_MODULE_3__.mergeThemes)(parentTheme, userTheme);
        mergedTheme.id = getThemeId(parentTheme, userTheme);
        return mergedTheme;
    }, [parentTheme, userTheme]));
    draftState.customizerContext = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(function () { return ({
        customizations: {
            inCustomizerContext: true,
            settings: { theme: theme },
            scopedSettings: theme.components || {},
        },
    }); }, [theme]);
    if (draftState.theme.rtl !== parentTheme.rtl) {
        draftState.dir = draftState.theme.rtl ? 'rtl' : 'ltr';
    }
};
//# sourceMappingURL=useThemeProviderState.js.map

/***/ }),
/* 245 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useTheme": () => (/* binding */ useTheme)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _fluentui_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43);
/* harmony import */ var _fluentui_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(102);
/* harmony import */ var _ThemeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(246);




/**
 * Get theme from CustomizerContext or Customizations singleton.
 */
function useCompatTheme() {
    return (0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_1__.useCustomizationSettings)(['theme']).theme;
}
/**
 * React hook for programmatically accessing the theme.
 */
var useTheme = function () {
    var theme = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_ThemeContext__WEBPACK_IMPORTED_MODULE_2__.ThemeContext);
    var legacyTheme = useCompatTheme();
    return theme || legacyTheme || (0,_fluentui_theme__WEBPACK_IMPORTED_MODULE_3__.createTheme)({});
};
//# sourceMappingURL=useTheme.js.map

/***/ }),
/* 246 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeContext": () => (/* binding */ ThemeContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

var ThemeContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(undefined);
//# sourceMappingURL=ThemeContext.js.map

/***/ }),
/* 247 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderThemeProvider": () => (/* binding */ renderThemeProvider)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _fluentui_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(248);
/* harmony import */ var _fluentui_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(150);
/* harmony import */ var _fluentui_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44);
/* harmony import */ var _ThemeContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(246);




var renderThemeProvider = function (state) {
    var theme = state.theme, customizerContext = state.customizerContext;
    var Root = state.as || 'div';
    var rootProps = typeof state.as === 'string' ? (0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_1__.getNativeElementProps)(state.as, state) : (0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_2__.omit)(state, ['as']);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ThemeContext__WEBPACK_IMPORTED_MODULE_3__.ThemeContext.Provider, { value: theme },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_utilities__WEBPACK_IMPORTED_MODULE_4__.CustomizerContext.Provider, { value: customizerContext },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(Root, (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)({}, rootProps)))));
};
//# sourceMappingURL=renderThemeProvider.js.map

/***/ }),
/* 248 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getNativeElementProps": () => (/* binding */ getNativeElementProps)
/* harmony export */ });
/* harmony import */ var _properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73);

var nativeElementMap = {
    label: _properties__WEBPACK_IMPORTED_MODULE_0__.labelProperties,
    audio: _properties__WEBPACK_IMPORTED_MODULE_0__.audioProperties,
    video: _properties__WEBPACK_IMPORTED_MODULE_0__.videoProperties,
    ol: _properties__WEBPACK_IMPORTED_MODULE_0__.olProperties,
    li: _properties__WEBPACK_IMPORTED_MODULE_0__.liProperties,
    a: _properties__WEBPACK_IMPORTED_MODULE_0__.anchorProperties,
    button: _properties__WEBPACK_IMPORTED_MODULE_0__.buttonProperties,
    input: _properties__WEBPACK_IMPORTED_MODULE_0__.inputProperties,
    textarea: _properties__WEBPACK_IMPORTED_MODULE_0__.textAreaProperties,
    select: _properties__WEBPACK_IMPORTED_MODULE_0__.selectProperties,
    option: _properties__WEBPACK_IMPORTED_MODULE_0__.optionProperties,
    table: _properties__WEBPACK_IMPORTED_MODULE_0__.tableProperties,
    tr: _properties__WEBPACK_IMPORTED_MODULE_0__.trProperties,
    th: _properties__WEBPACK_IMPORTED_MODULE_0__.thProperties,
    td: _properties__WEBPACK_IMPORTED_MODULE_0__.tdProperties,
    colGroup: _properties__WEBPACK_IMPORTED_MODULE_0__.colGroupProperties,
    col: _properties__WEBPACK_IMPORTED_MODULE_0__.colProperties,
    form: _properties__WEBPACK_IMPORTED_MODULE_0__.formProperties,
    iframe: _properties__WEBPACK_IMPORTED_MODULE_0__.iframeProperties,
    img: _properties__WEBPACK_IMPORTED_MODULE_0__.imgProperties,
};
/**
 * Given an element tagname and user props, filters the props to only allowed props for the given
 * element type.
 * @param tagName - Tag name (e.g. "div")
 * @param props - Props object
 * @param excludedPropNames - List of props to disallow
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getNativeElementProps(tagName, props, excludedPropNames) {
    var allowedPropNames = (tagName && nativeElementMap[tagName]) || _properties__WEBPACK_IMPORTED_MODULE_0__.htmlElementProperties;
    return (0,_properties__WEBPACK_IMPORTED_MODULE_0__.getNativeProps)(props, allowedPropNames, excludedPropNames);
}
//# sourceMappingURL=getNativeElementProps.js.map

/***/ }),
/* 249 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useThemeProviderClasses": () => (/* binding */ useThemeProviderClasses)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _fluentui_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(130);
/* harmony import */ var _fluentui_react_window_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(146);
/* harmony import */ var _makeStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(250);




var useThemeProviderStyles = (0,_makeStyles__WEBPACK_IMPORTED_MODULE_1__.makeStyles)(function (theme) {
    var semanticColors = theme.semanticColors, fonts = theme.fonts;
    return {
        body: [
            {
                color: semanticColors.bodyText,
                background: semanticColors.bodyBackground,
                fontFamily: fonts.medium.fontFamily,
                fontWeight: fonts.medium.fontWeight,
                fontSize: fonts.medium.fontSize,
                MozOsxFontSmoothing: fonts.medium.MozOsxFontSmoothing,
                WebkitFontSmoothing: fonts.medium.WebkitFontSmoothing,
            },
        ],
    };
});
/**
 * Hook to add class to body element.
 */
function useApplyClassToBody(state, classesToApply) {
    var _a;
    var applyTo = state.applyTo;
    var applyToBody = applyTo === 'body';
    var body = (_a = (0,_fluentui_react_window_provider__WEBPACK_IMPORTED_MODULE_2__.useDocument)()) === null || _a === void 0 ? void 0 : _a.body;
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        if (!applyToBody || !body) {
            return;
        }
        for (var _i = 0, classesToApply_1 = classesToApply; _i < classesToApply_1.length; _i++) {
            var classToApply = classesToApply_1[_i];
            if (classToApply) {
                body.classList.add(classToApply);
            }
        }
        return function () {
            if (!applyToBody || !body) {
                return;
            }
            for (var _i = 0, classesToApply_2 = classesToApply; _i < classesToApply_2.length; _i++) {
                var classToApply = classesToApply_2[_i];
                if (classToApply) {
                    body.classList.remove(classToApply);
                }
            }
        };
    }, [applyToBody, body, classesToApply]);
}
function useThemeProviderClasses(state) {
    var classes = useThemeProviderStyles(state);
    var className = state.className, applyTo = state.applyTo;
    useApplyClassToBody(state, [classes.root, classes.body]);
    state.className = (0,_fluentui_utilities__WEBPACK_IMPORTED_MODULE_3__.css)(className, classes.root, applyTo === 'element' && classes.body);
}
//# sourceMappingURL=useThemeProviderClasses.js.map

/***/ }),
/* 250 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeStyles": () => (/* binding */ makeStyles)
/* harmony export */ });
/* harmony import */ var _useTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(245);
/* harmony import */ var _fluentui_react_window_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(146);
/* harmony import */ var _styleRenderers_mergeStylesRenderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(251);



var graphGet = function (graphNode, path) {
    for (var _i = 0, path_1 = path; _i < path_1.length; _i++) {
        var key = path_1[_i];
        graphNode = graphNode.get(key);
        if (!graphNode) {
            return;
        }
    }
    return graphNode;
};
var graphSet = function (graphNode, path, value) {
    for (var i = 0; i < path.length - 1; i++) {
        var key = path[i];
        var current = graphNode.get(key);
        if (!current) {
            current = new Map();
            graphNode.set(key, current);
        }
        graphNode = current;
    }
    graphNode.set(path[path.length - 1], value);
};
/**
 * Registers a css object, optionally as a function of the theme.
 *
 * @param styleOrFunction - Either a css javascript object, or a function which takes in `ITheme`
 * and returns a css javascript object.
 */
function makeStyles(styleOrFunction) {
    // Create graph of inputs to map to output.
    var graph = new Map();
    return function (options) {
        if (options === void 0) { options = {}; }
        var theme = options.theme;
        var win = (0,_fluentui_react_window_provider__WEBPACK_IMPORTED_MODULE_0__.useWindow)();
        var contextualTheme = (0,_useTheme__WEBPACK_IMPORTED_MODULE_1__.useTheme)();
        theme = theme || contextualTheme;
        var renderer = _styleRenderers_mergeStylesRenderer__WEBPACK_IMPORTED_MODULE_2__.mergeStylesRenderer;
        var id = renderer.getId();
        var isStyleFunction = typeof styleOrFunction === 'function';
        var path = isStyleFunction ? [id, win, theme] : [id, win];
        var value = graphGet(graph, path);
        if (!value) {
            var styles = isStyleFunction ? styleOrFunction(theme) : styleOrFunction;
            value = _styleRenderers_mergeStylesRenderer__WEBPACK_IMPORTED_MODULE_2__.mergeStylesRenderer.renderStyles(styles, { targetWindow: win, rtl: !!theme.rtl });
            graphSet(graph, path, value);
        }
        return value;
    };
}
//# sourceMappingURL=makeStyles.js.map

/***/ }),
/* 251 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mergeStylesRenderer": () => (/* binding */ mergeStylesRenderer)
/* harmony export */ });
/* harmony import */ var _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54);
/* harmony import */ var _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60);
/* harmony import */ var _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97);
/* harmony import */ var _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90);

var _seed = 0;
var mergeStylesRenderer = {
    reset: function () {
        // If the stylesheet reset call is made, invalidate the cache keys.
        _fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_0__.Stylesheet.getInstance().onReset(function () { return _seed++; });
    },
    getId: function () { return _seed; },
    renderStyles: function (styleSet, options) {
        return (0,_fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_1__.mergeCssSets)((Array.isArray(styleSet) ? styleSet : [styleSet]), options);
    },
    renderFontFace: function (fontFace, options) {
        return (0,_fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_2__.fontFace)(fontFace);
    },
    renderKeyframes: function (keyframes) {
        return (0,_fluentui_merge_styles__WEBPACK_IMPORTED_MODULE_3__.keyframes)(keyframes);
    },
};
//# sourceMappingURL=mergeStylesRenderer.js.map

/***/ }),
/* 252 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initializeIcons": () => (/* binding */ initializeIcons)
/* harmony export */ });
/* harmony import */ var _fabric_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(253);
/* harmony import */ var _fabric_icons_0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(254);
/* harmony import */ var _fabric_icons_1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(255);
/* harmony import */ var _fabric_icons_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(256);
/* harmony import */ var _fabric_icons_3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(257);
/* harmony import */ var _fabric_icons_4__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(258);
/* harmony import */ var _fabric_icons_5__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(259);
/* harmony import */ var _fabric_icons_6__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(260);
/* harmony import */ var _fabric_icons_7__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(261);
/* harmony import */ var _fabric_icons_8__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(262);
/* harmony import */ var _fabric_icons_9__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(263);
/* harmony import */ var _fabric_icons_10__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(264);
/* harmony import */ var _fabric_icons_11__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(265);
/* harmony import */ var _fabric_icons_12__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(266);
/* harmony import */ var _fabric_icons_13__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(267);
/* harmony import */ var _fabric_icons_14__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(268);
/* harmony import */ var _fabric_icons_15__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(269);
/* harmony import */ var _fabric_icons_16__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(270);
/* harmony import */ var _fabric_icons_17__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(271);
/* harmony import */ var _iconAliases__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(272);
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(273);




















var DEFAULT_BASE_URL = 'https://spoprod-a.akamaihd.net/files/fabric/assets/icons/';
function initializeIcons(baseUrl, options) {
    if (baseUrl === void 0) { baseUrl = DEFAULT_BASE_URL; }
    [
        _fabric_icons__WEBPACK_IMPORTED_MODULE_0__.initializeIcons,
        _fabric_icons_0__WEBPACK_IMPORTED_MODULE_1__.initializeIcons,
        _fabric_icons_1__WEBPACK_IMPORTED_MODULE_2__.initializeIcons,
        _fabric_icons_2__WEBPACK_IMPORTED_MODULE_3__.initializeIcons,
        _fabric_icons_3__WEBPACK_IMPORTED_MODULE_4__.initializeIcons,
        _fabric_icons_4__WEBPACK_IMPORTED_MODULE_5__.initializeIcons,
        _fabric_icons_5__WEBPACK_IMPORTED_MODULE_6__.initializeIcons,
        _fabric_icons_6__WEBPACK_IMPORTED_MODULE_7__.initializeIcons,
        _fabric_icons_7__WEBPACK_IMPORTED_MODULE_8__.initializeIcons,
        _fabric_icons_8__WEBPACK_IMPORTED_MODULE_9__.initializeIcons,
        _fabric_icons_9__WEBPACK_IMPORTED_MODULE_10__.initializeIcons,
        _fabric_icons_10__WEBPACK_IMPORTED_MODULE_11__.initializeIcons,
        _fabric_icons_11__WEBPACK_IMPORTED_MODULE_12__.initializeIcons,
        _fabric_icons_12__WEBPACK_IMPORTED_MODULE_13__.initializeIcons,
        _fabric_icons_13__WEBPACK_IMPORTED_MODULE_14__.initializeIcons,
        _fabric_icons_14__WEBPACK_IMPORTED_MODULE_15__.initializeIcons,
        _fabric_icons_15__WEBPACK_IMPORTED_MODULE_16__.initializeIcons,
        _fabric_icons_16__WEBPACK_IMPORTED_MODULE_17__.initializeIcons,
        _fabric_icons_17__WEBPACK_IMPORTED_MODULE_18__.initializeIcons,
    ].forEach(function (initialize) { return initialize(baseUrl, options); });
    (0,_iconAliases__WEBPACK_IMPORTED_MODULE_19__.registerIconAliases)();
}

//# sourceMappingURL=index.js.map

/***/ }),
/* 253 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initializeIcons": () => (/* binding */ initializeIcons)
/* harmony export */ });
/* harmony import */ var _fluentui_style_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84);
// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fluentui-assets-license

function initializeIcons(baseUrl, options) {
    if (baseUrl === void 0) { baseUrl = ''; }
    var subset = {
        style: {
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            fontStyle: 'normal',
            fontWeight: 'normal',
            speak: 'none',
        },
        fontFace: {
            fontFamily: "\"FabricMDL2Icons\"",
            src: "url('" + baseUrl + "fabric-icons-a13498cf.woff') format('woff')",
        },
        icons: {
            GlobalNavButton: '\uE700',
            ChevronDown: '\uE70D',
            ChevronUp: '\uE70E',
            Edit: '\uE70F',
            Add: '\uE710',
            Cancel: '\uE711',
            More: '\uE712',
            Settings: '\uE713',
            Mail: '\uE715',
            Filter: '\uE71C',
            Search: '\uE721',
            Share: '\uE72D',
            BlockedSite: '\uE72F',
            FavoriteStar: '\uE734',
            FavoriteStarFill: '\uE735',
            CheckMark: '\uE73E',
            Delete: '\uE74D',
            ChevronLeft: '\uE76B',
            ChevronRight: '\uE76C',
            Calendar: '\uE787',
            Megaphone: '\uE789',
            Undo: '\uE7A7',
            Flag: '\uE7C1',
            Page: '\uE7C3',
            Pinned: '\uE840',
            View: '\uE890',
            Clear: '\uE894',
            Download: '\uE896',
            Upload: '\uE898',
            Folder: '\uE8B7',
            Sort: '\uE8CB',
            AlignRight: '\uE8E2',
            AlignLeft: '\uE8E4',
            Tag: '\uE8EC',
            AddFriend: '\uE8FA',
            Info: '\uE946',
            SortLines: '\uE9D0',
            List: '\uEA37',
            CircleRing: '\uEA3A',
            Heart: '\uEB51',
            HeartFill: '\uEB52',
            Tiles: '\uECA5',
            Embed: '\uECCE',
            Glimmer: '\uECF4',
            Ascending: '\uEDC0',
            Descending: '\uEDC1',
            SortUp: '\uEE68',
            SortDown: '\uEE69',
            SyncToPC: '\uEE6E',
            LargeGrid: '\uEECB',
            SkypeCheck: '\uEF80',
            SkypeClock: '\uEF81',
            SkypeMinus: '\uEF82',
            ClearFilter: '\uEF8F',
            Flow: '\uEF90',
            StatusCircleCheckmark: '\uF13E',
            MoreVertical: '\uF2BC',
        },
    };
    (0,_fluentui_style_utilities__WEBPACK_IMPORTED_MODULE_0__.registerIcons)(subset, options);
}
//# sourceMappingURL=fabric-icons.js.map

/***/ }),
/* 254 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initializeIcons": () => (/* binding */ initializeIcons)
/* harmony export */ });
/* harmony import */ var _fluentui_style_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84);
// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fluentui-assets-license

function initializeIcons(baseUrl, options) {
    if (baseUrl === void 0) { baseUrl = ''; }
    var subset = {
        style: {
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            fontStyle: 'normal',
            fontWeight: 'normal',
            speak: 'none'
        },
        fontFace: {
            fontFamily: "\"FabricMDL2Icons-0\"",
            src: "url('" + baseUrl + "fabric-icons-0-467ee27f.woff') format('woff')"
        },
        icons: {
            'PageLink': '\uE302',
            'CommentSolid': '\uE30E',
            'ChangeEntitlements': '\uE310',
            'Installation': '\uE311',
            'WebAppBuilderModule': '\uE313',
            'WebAppBuilderFragment': '\uE314',
            'WebAppBuilderSlot': '\uE315',
            'BullseyeTargetEdit': '\uE319',
            'WebAppBuilderFragmentCreate': '\uE31B',
            'PageData': '\uE31C',
            'PageHeaderEdit': '\uE31D',
            'ProductList': '\uE31E',
            'UnpublishContent': '\uE31F',
            'DependencyAdd': '\uE344',
            'DependencyRemove': '\uE345',
            'EntitlementPolicy': '\uE346',
            'EntitlementRedemption': '\uE347',
            'SchoolDataSyncLogo': '\uE34C',
            'PinSolid12': '\uE352',
            'PinSolidOff12': '\uE353',
            'AddLink': '\uE35E',
            'SharepointAppIcon16': '\uE365',
            'DataflowsLink': '\uE366',
            'TimePicker': '\uE367',
            'UserWarning': '\uE368',
            'ComplianceAudit': '\uE369',
            'InternetSharing': '\uE704',
            'Brightness': '\uE706',
            'MapPin': '\uE707',
            'Airplane': '\uE709',
            'Tablet': '\uE70A',
            'QuickNote': '\uE70B',
            'Video': '\uE714',
            'People': '\uE716',
            'Phone': '\uE717',
            'Pin': '\uE718',
            'Shop': '\uE719',
            'Stop': '\uE71A',
            'Link': '\uE71B',
            'AllApps': '\uE71D',
            'Zoom': '\uE71E',
            'ZoomOut': '\uE71F',
            'Microphone': '\uE720',
            'Camera': '\uE722',
            'Attach': '\uE723',
            'Send': '\uE724',
            'FavoriteList': '\uE728',
            'PageSolid': '\uE729',
            'Forward': '\uE72A',
            'Back': '\uE72B',
            'Refresh': '\uE72C',
            'Lock': '\uE72E',
            'ReportHacked': '\uE730',
            'EMI': '\uE731',
            'MiniLink': '\uE732',
            'Blocked': '\uE733',
            'ReadingMode': '\uE736',
            'Favicon': '\uE737',
            'Remove': '\uE738',
            'Checkbox': '\uE739',
            'CheckboxComposite': '\uE73A',
            'CheckboxFill': '\uE73B',
            'CheckboxIndeterminate': '\uE73C',
            'CheckboxCompositeReversed': '\uE73D',
            'BackToWindow': '\uE73F',
            'FullScreen': '\uE740',
            'Print': '\uE749',
            'Up': '\uE74A',
            'Down': '\uE74B',
            'OEM': '\uE74C',
            'Save': '\uE74E',
            'ReturnKey': '\uE751',
            'Cloud': '\uE753',
            'Flashlight': '\uE754',
            'CommandPrompt': '\uE756',
            'Sad': '\uE757',
            'RealEstate': '\uE758',
            'SIPMove': '\uE759',
            'EraseTool': '\uE75C',
            'GripperTool': '\uE75E',
            'Dialpad': '\uE75F',
            'PageLeft': '\uE760',
            'PageRight': '\uE761',
            'MultiSelect': '\uE762',
            'KeyboardClassic': '\uE765',
            'Play': '\uE768',
            'Pause': '\uE769',
            'InkingTool': '\uE76D',
            'Emoji2': '\uE76E',
            'GripperBarHorizontal': '\uE76F',
            'System': '\uE770',
            'Personalize': '\uE771',
            'SearchAndApps': '\uE773',
            'Globe': '\uE774',
            'EaseOfAccess': '\uE776',
            'ContactInfo': '\uE779',
            'Unpin': '\uE77A',
            'Contact': '\uE77B',
            'Memo': '\uE77C',
            'IncomingCall': '\uE77E'
        }
    };
    (0,_fluentui_style_utilities__WEBPACK_IMPORTED_MODULE_0__.registerIcons)(subset, options);
}
//# sourceMappingURL=fabric-icons-0.js.map

/***/ }),
/* 255 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initializeIcons": () => (/* binding */ initializeIcons)
/* harmony export */ });
/* harmony import */ var _fluentui_style_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84);
// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fluentui-assets-license

function initializeIcons(baseUrl, options) {
    if (baseUrl === void 0) { baseUrl = ''; }
    var subset = {
        style: {
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            fontStyle: 'normal',
            fontWeight: 'normal',
            speak: 'none'
        },
        fontFace: {
            fontFamily: "\"FabricMDL2Icons-1\"",
            src: "url('" + baseUrl + "fabric-icons-1-4d521695.woff') format('woff')"
        },
        icons: {
            'Paste': '\uE77F',
            'WindowsLogo': '\uE782',
            'Error': '\uE783',
            'GripperBarVertical': '\uE784',
            'Unlock': '\uE785',
            'Slideshow': '\uE786',
            'Trim': '\uE78A',
            'AutoEnhanceOn': '\uE78D',
            'AutoEnhanceOff': '\uE78E',
            'Color': '\uE790',
            'SaveAs': '\uE792',
            'Light': '\uE793',
            'Filters': '\uE795',
            'AspectRatio': '\uE799',
            'Contrast': '\uE7A1',
            'Redo': '\uE7A6',
            'Crop': '\uE7A8',
            'PhotoCollection': '\uE7AA',
            'Album': '\uE7AB',
            'Rotate': '\uE7AD',
            'PanoIndicator': '\uE7B0',
            'Translate': '\uE7B2',
            'RedEye': '\uE7B3',
            'ViewOriginal': '\uE7B4',
            'ThumbnailView': '\uE7B6',
            'Package': '\uE7B8',
            'Telemarketer': '\uE7B9',
            'Warning': '\uE7BA',
            'Financial': '\uE7BB',
            'Education': '\uE7BE',
            'ShoppingCart': '\uE7BF',
            'Train': '\uE7C0',
            'Move': '\uE7C2',
            'TouchPointer': '\uE7C9',
            'Merge': '\uE7D5',
            'TurnRight': '\uE7DB',
            'Ferry': '\uE7E3',
            'Highlight': '\uE7E6',
            'PowerButton': '\uE7E8',
            'Tab': '\uE7E9',
            'Admin': '\uE7EF',
            'TVMonitor': '\uE7F4',
            'Speakers': '\uE7F5',
            'Game': '\uE7FC',
            'HorizontalTabKey': '\uE7FD',
            'UnstackSelected': '\uE7FE',
            'StackIndicator': '\uE7FF',
            'Nav2DMapView': '\uE800',
            'StreetsideSplitMinimize': '\uE802',
            'Car': '\uE804',
            'Bus': '\uE806',
            'EatDrink': '\uE807',
            'SeeDo': '\uE808',
            'LocationCircle': '\uE80E',
            'Home': '\uE80F',
            'SwitcherStartEnd': '\uE810',
            'ParkingLocation': '\uE811',
            'IncidentTriangle': '\uE814',
            'Touch': '\uE815',
            'MapDirections': '\uE816',
            'CaretHollow': '\uE817',
            'CaretSolid': '\uE818',
            'History': '\uE81C',
            'Location': '\uE81D',
            'MapLayers': '\uE81E',
            'SearchNearby': '\uE820',
            'Work': '\uE821',
            'Recent': '\uE823',
            'Hotel': '\uE824',
            'Bank': '\uE825',
            'LocationDot': '\uE827',
            'Dictionary': '\uE82D',
            'ChromeBack': '\uE830',
            'FolderOpen': '\uE838',
            'PinnedFill': '\uE842',
            'RevToggleKey': '\uE845',
            'USB': '\uE88E',
            'Previous': '\uE892',
            'Next': '\uE893',
            'Sync': '\uE895',
            'Help': '\uE897',
            'Emoji': '\uE899',
            'MailForward': '\uE89C',
            'ClosePane': '\uE89F',
            'OpenPane': '\uE8A0',
            'PreviewLink': '\uE8A1',
            'ZoomIn': '\uE8A3',
            'Bookmarks': '\uE8A4',
            'Document': '\uE8A5',
            'ProtectedDocument': '\uE8A6',
            'OpenInNewWindow': '\uE8A7',
            'MailFill': '\uE8A8',
            'ViewAll': '\uE8A9',
            'Switch': '\uE8AB',
            'Rename': '\uE8AC',
            'Go': '\uE8AD',
            'Remote': '\uE8AF',
            'SelectAll': '\uE8B3',
            'Orientation': '\uE8B4',
            'Import': '\uE8B5'
        }
    };
    (0,_fluentui_style_utilities__WEBPACK_IMPORTED_MODULE_0__.registerIcons)(subset, options);
}
//# sourceMappingURL=fabric-icons-1.js.map

/***/ }),
/* 256 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initializeIcons": () => (/* binding */ initializeIcons)
/* harmony export */ });
/* harmony import */ var _fluentui_style_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84);
// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fluentui-assets-license

function initializeIcons(baseUrl, options) {
    if (baseUrl === void 0) { baseUrl = ''; }
    var subset = {
        style: {
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            fontStyle: 'normal',
            fontWeight: 'normal',
            speak: 'none'
        },
        fontFace: {
            fontFamily: "\"FabricMDL2Icons-2\"",
            src: "url('" + baseUrl + "fabric-icons-2-63c99abf.woff') format('woff')"
        },
        icons: {
            'Picture': '\uE8B9',
            'ChromeClose': '\uE8BB',
            'ShowResults': '\uE8BC',
            'Message': '\uE8BD',
            'CalendarDay': '\uE8BF',
            'CalendarWeek': '\uE8C0',
            'MailReplyAll': '\uE8C2',
            'Read': '\uE8C3',
            'Cut': '\uE8C6',
            'PaymentCard': '\uE8C7',
            'Copy': '\uE8C8',
            'Important': '\uE8C9',
            'MailReply': '\uE8CA',
            'GotoToday': '\uE8D1',
            'Font': '\uE8D2',
            'FontColor': '\uE8D3',
            'FolderFill': '\uE8D5',
            'Permissions': '\uE8D7',
            'DisableUpdates': '\uE8D8',
            'Unfavorite': '\uE8D9',
            'Italic': '\uE8DB',
            'Underline': '\uE8DC',
            'Bold': '\uE8DD',
            'MoveToFolder': '\uE8DE',
            'Dislike': '\uE8E0',
            'Like': '\uE8E1',
            'AlignCenter': '\uE8E3',
            'OpenFile': '\uE8E5',
            'ClearSelection': '\uE8E6',
            'FontDecrease': '\uE8E7',
            'FontIncrease': '\uE8E8',
            'FontSize': '\uE8E9',
            'CellPhone': '\uE8EA',
            'RepeatOne': '\uE8ED',
            'RepeatAll': '\uE8EE',
            'Calculator': '\uE8EF',
            'Library': '\uE8F1',
            'PostUpdate': '\uE8F3',
            'NewFolder': '\uE8F4',
            'CalendarReply': '\uE8F5',
            'UnsyncFolder': '\uE8F6',
            'SyncFolder': '\uE8F7',
            'BlockContact': '\uE8F8',
            'Accept': '\uE8FB',
            'BulletedList': '\uE8FD',
            'Preview': '\uE8FF',
            'News': '\uE900',
            'Chat': '\uE901',
            'Group': '\uE902',
            'World': '\uE909',
            'Comment': '\uE90A',
            'DockLeft': '\uE90C',
            'DockRight': '\uE90D',
            'Repair': '\uE90F',
            'Accounts': '\uE910',
            'Street': '\uE913',
            'RadioBullet': '\uE915',
            'Stopwatch': '\uE916',
            'Clock': '\uE917',
            'WorldClock': '\uE918',
            'AlarmClock': '\uE919',
            'Photo': '\uE91B',
            'ActionCenter': '\uE91C',
            'Hospital': '\uE91D',
            'Timer': '\uE91E',
            'FullCircleMask': '\uE91F',
            'LocationFill': '\uE920',
            'ChromeMinimize': '\uE921',
            'ChromeRestore': '\uE923',
            'Annotation': '\uE924',
            'Fingerprint': '\uE928',
            'Handwriting': '\uE929',
            'ChromeFullScreen': '\uE92D',
            'Completed': '\uE930',
            'Label': '\uE932',
            'FlickDown': '\uE935',
            'FlickUp': '\uE936',
            'FlickLeft': '\uE937',
            'FlickRight': '\uE938',
            'MiniExpand': '\uE93A',
            'MiniContract': '\uE93B',
            'Streaming': '\uE93E',
            'MusicInCollection': '\uE940',
            'OneDriveLogo': '\uE941',
            'CompassNW': '\uE942',
            'Code': '\uE943',
            'LightningBolt': '\uE945',
            'CalculatorMultiply': '\uE947',
            'CalculatorAddition': '\uE948',
            'CalculatorSubtract': '\uE949',
            'CalculatorPercentage': '\uE94C',
            'CalculatorEqualTo': '\uE94E',
            'PrintfaxPrinterFile': '\uE956',
            'StorageOptical': '\uE958',
            'Communications': '\uE95A',
            'Headset': '\uE95B',
            'Health': '\uE95E',
            'Webcam2': '\uE960',
            'FrontCamera': '\uE96B',
            'ChevronUpSmall': '\uE96D'
        }
    };
    (0,_fluentui_style_utilities__WEBPACK_IMPORTED_MODULE_0__.registerIcons)(subset, options);
}
//# sourceMappingURL=fabric-icons-2.js.map

/***/ }),
/* 257 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initializeIcons": () => (/* binding */ initializeIcons)
/* harmony export */ });
/* harmony import */ var _fluentui_style_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84);
// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fluentui-assets-license

function initializeIcons(baseUrl, options) {
    if (baseUrl === void 0) { baseUrl = ''; }
    var subset = {
        style: {
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            fontStyle: 'normal',
            fontWeight: 'normal',
            speak: 'none'
        },
        fontFace: {
            fontFamily: "\"FabricMDL2Icons-3\"",
            src: "url('" + baseUrl + "fabric-icons-3-089e217a.woff') format('woff')"
        },
        icons: {
            'ChevronDownSmall': '\uE96E',
            'ChevronLeftSmall': '\uE96F',
            'ChevronRightSmall': '\uE970',
            'ChevronUpMed': '\uE971',
            'ChevronDownMed': '\uE972',
            'ChevronLeftMed': '\uE973',
            'ChevronRightMed': '\uE974',
            'Devices2': '\uE975',
            'PC1': '\uE977',
            'PresenceChickletVideo': '\uE979',
            'Reply': '\uE97A',
            'HalfAlpha': '\uE97E',
            'ConstructionCone': '\uE98F',
            'DoubleChevronLeftMed': '\uE991',
            'Volume0': '\uE992',
            'Volume1': '\uE993',
            'Volume2': '\uE994',
            'Volume3': '\uE995',
            'Chart': '\uE999',
            'Robot': '\uE99A',
            'Manufacturing': '\uE99C',
            'LockSolid': '\uE9A2',
            'FitPage': '\uE9A6',
            'FitWidth': '\uE9A7',
            'BidiLtr': '\uE9AA',
            'BidiRtl': '\uE9AB',
            'RightDoubleQuote': '\uE9B1',
            'Sunny': '\uE9BD',
            'CloudWeather': '\uE9BE',
            'Cloudy': '\uE9BF',
            'PartlyCloudyDay': '\uE9C0',
            'PartlyCloudyNight': '\uE9C1',
            'ClearNight': '\uE9C2',
            'RainShowersDay': '\uE9C3',
            'Rain': '\uE9C4',
            'Thunderstorms': '\uE9C6',
            'RainSnow': '\uE9C7',
            'Snow': '\uE9C8',
            'BlowingSnow': '\uE9C9',
            'Frigid': '\uE9CA',
            'Fog': '\uE9CB',
            'Squalls': '\uE9CC',
            'Duststorm': '\uE9CD',
            'Unknown': '\uE9CE',
            'Precipitation': '\uE9CF',
            'Ribbon': '\uE9D1',
            'AreaChart': '\uE9D2',
            'Assign': '\uE9D3',
            'FlowChart': '\uE9D4',
            'CheckList': '\uE9D5',
            'Diagnostic': '\uE9D9',
            'Generate': '\uE9DA',
            'LineChart': '\uE9E6',
            'Equalizer': '\uE9E9',
            'BarChartHorizontal': '\uE9EB',
            'BarChartVertical': '\uE9EC',
            'Freezing': '\uE9EF',
            'FunnelChart': '\uE9F1',
            'Processing': '\uE9F5',
            'Quantity': '\uE9F8',
            'ReportDocument': '\uE9F9',
            'StackColumnChart': '\uE9FC',
            'SnowShowerDay': '\uE9FD',
            'HailDay': '\uEA00',
            'WorkFlow': '\uEA01',
            'HourGlass': '\uEA03',
            'StoreLogoMed20': '\uEA04',
            'TimeSheet': '\uEA05',
            'TriangleSolid': '\uEA08',
            'UpgradeAnalysis': '\uEA0B',
            'VideoSolid': '\uEA0C',
            'RainShowersNight': '\uEA0F',
            'SnowShowerNight': '\uEA11',
            'Teamwork': '\uEA12',
            'HailNight': '\uEA13',
            'PeopleAdd': '\uEA15',
            'Glasses': '\uEA16',
            'DateTime2': '\uEA17',
            'Shield': '\uEA18',
            'Header1': '\uEA19',
            'PageAdd': '\uEA1A',
            'NumberedList': '\uEA1C',
            'PowerBILogo': '\uEA1E',
            'Info2': '\uEA1F',
            'MusicInCollectionFill': '\uEA36',
            'Asterisk': '\uEA38',
            'ErrorBadge': '\uEA39',
            'CircleFill': '\uEA3B',
            'Record2': '\uEA3F',
            'AllAppsMirrored': '\uEA40',
            'BookmarksMirrored': '\uEA41',
            'BulletedListMirrored': '\uEA42',
            'CaretHollowMirrored': '\uEA45',
            'CaretSolidMirrored': '\uEA46',
            'ChromeBackMirrored': '\uEA47',
            'ClearSelectionMirrored': '\uEA48',
            'ClosePaneMirrored': '\uEA49',
            'DockLeftMirrored': '\uEA4C',
            'DoubleChevronLeftMedMirrored': '\uEA4D',
            'GoMirrored': '\uEA4F'
        }
    };
    (0,_fluentui_style_utilities__WEBPACK_IMPORTED_MODULE_0__.registerIcons)(subset, options);
}
//# sourceMappingURL=fabric-icons-3.js.map

/***/ }),
/* 258 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initializeIcons": () => (/* binding */ initializeIcons)
/* harmony export */ });
/* harmony import */ var _fluentui_style_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84);
// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fluentui-assets-license

function initializeIcons(baseUrl, options) {
    if (baseUrl === void 0) { baseUrl = ''; }
    var subset = {
        style: {
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            fontStyle: 'normal',
            fontWeight: 'normal',
            speak: 'none'
        },
        fontFace: {
            fontFamily: "\"FabricMDL2Icons-4\"",
            src: "url('" + baseUrl + "fabric-icons-4-a656cc0a.woff') format('woff')"
        },
        icons: {
            'HelpMirrored': '\uEA51',
            'ImportMirrored': '\uEA52',
            'ImportAllMirrored': '\uEA53',
            'ListMirrored': '\uEA55',
            'MailForwardMirrored': '\uEA56',
            'MailReplyMirrored': '\uEA57',
            'MailReplyAllMirrored': '\uEA58',
            'MiniContractMirrored': '\uEA59',
            'MiniExpandMirrored': '\uEA5A',
            'OpenPaneMirrored': '\uEA5B',
            'ParkingLocationMirrored': '\uEA5E',
            'SendMirrored': '\uEA63',
            'ShowResultsMirrored': '\uEA65',
            'ThumbnailViewMirrored': '\uEA67',
            'Media': '\uEA69',
            'Devices3': '\uEA6C',
            'Focus': '\uEA6F',
            'VideoLightOff': '\uEA74',
            'Lightbulb': '\uEA80',
            'StatusTriangle': '\uEA82',
            'VolumeDisabled': '\uEA85',
            'Puzzle': '\uEA86',
            'EmojiNeutral': '\uEA87',
            'EmojiDisappointed': '\uEA88',
            'HomeSolid': '\uEA8A',
            'Ringer': '\uEA8F',
            'PDF': '\uEA90',
            'HeartBroken': '\uEA92',
            'StoreLogo16': '\uEA96',
            'MultiSelectMirrored': '\uEA98',
            'Broom': '\uEA99',
            'AddToShoppingList': '\uEA9A',
            'Cocktails': '\uEA9D',
            'Wines': '\uEABF',
            'Articles': '\uEAC1',
            'Cycling': '\uEAC7',
            'DietPlanNotebook': '\uEAC8',
            'Pill': '\uEACB',
            'ExerciseTracker': '\uEACC',
            'HandsFree': '\uEAD0',
            'Medical': '\uEAD4',
            'Running': '\uEADA',
            'Weights': '\uEADB',
            'Trackers': '\uEADF',
            'AddNotes': '\uEAE3',
            'AllCurrency': '\uEAE4',
            'BarChart4': '\uEAE7',
            'CirclePlus': '\uEAEE',
            'Coffee': '\uEAEF',
            'Cotton': '\uEAF3',
            'Market': '\uEAFC',
            'Money': '\uEAFD',
            'PieDouble': '\uEB04',
            'PieSingle': '\uEB05',
            'RemoveFilter': '\uEB08',
            'Savings': '\uEB0B',
            'Sell': '\uEB0C',
            'StockDown': '\uEB0F',
            'StockUp': '\uEB11',
            'Lamp': '\uEB19',
            'Source': '\uEB1B',
            'MSNVideos': '\uEB1C',
            'Cricket': '\uEB1E',
            'Golf': '\uEB1F',
            'Baseball': '\uEB20',
            'Soccer': '\uEB21',
            'MoreSports': '\uEB22',
            'AutoRacing': '\uEB24',
            'CollegeHoops': '\uEB25',
            'CollegeFootball': '\uEB26',
            'ProFootball': '\uEB27',
            'ProHockey': '\uEB28',
            'Rugby': '\uEB2D',
            'SubstitutionsIn': '\uEB31',
            'Tennis': '\uEB33',
            'Arrivals': '\uEB34',
            'Design': '\uEB3C',
            'Website': '\uEB41',
            'Drop': '\uEB42',
            'HistoricalWeather': '\uEB43',
            'SkiResorts': '\uEB45',
            'Snowflake': '\uEB46',
            'BusSolid': '\uEB47',
            'FerrySolid': '\uEB48',
            'AirplaneSolid': '\uEB4C',
            'TrainSolid': '\uEB4D',
            'Ticket': '\uEB54',
            'WifiWarning4': '\uEB63',
            'Devices4': '\uEB66',
            'AzureLogo': '\uEB6A',
            'BingLogo': '\uEB6B',
            'MSNLogo': '\uEB6C',
            'OutlookLogoInverse': '\uEB6D',
            'OfficeLogo': '\uEB6E',
            'SkypeLogo': '\uEB6F',
            'Door': '\uEB75',
            'EditMirrored': '\uEB7E',
            'GiftCard': '\uEB8E',
            'DoubleBookmark': '\uEB8F',
            'StatusErrorFull': '\uEB90'
        }
    };
    (0,_fluentui_style_utilities__WEBPACK_IMPORTED_MODULE_0__.registerIcons)(subset, options);
}
//# sourceMappingURL=fabric-icons-4.js.map

/***/ }),
/* 259 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initializeIcons": () => (/* binding */ initializeIcons)
/* harmony export */ });
/* harmony import */ var _fluentui_style_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84);
// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fluentui-assets-license

function initializeIcons(baseUrl, options) {
    if (baseUrl === void 0) { baseUrl = ''; }
    var subset = {
        style: {
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            fontStyle: 'normal',
            fontWeight: 'normal',
            speak: 'none'
        },
        fontFace: {
            fontFamily: "\"FabricMDL2Icons-5\"",
            src: "url('" + baseUrl + "fabric-icons-5-f95ba260.woff') format('woff')"
        },
        icons: {
            'Certificate': '\uEB95',
            'FastForward': '\uEB9D',
            'Rewind': '\uEB9E',
            'Photo2': '\uEB9F',
            'OpenSource': '\uEBC2',
            'Movers': '\uEBCD',
            'CloudDownload': '\uEBD3',
            'Family': '\uEBDA',
            'WindDirection': '\uEBE6',
            'Bug': '\uEBE8',
            'SiteScan': '\uEBEC',
            'BrowserScreenShot': '\uEBED',
            'F12DevTools': '\uEBEE',
            'CSS': '\uEBEF',
            'JS': '\uEBF0',
            'DeliveryTruck': '\uEBF4',
            'ReminderPerson': '\uEBF7',
            'ReminderGroup': '\uEBF8',
            'ReminderTime': '\uEBF9',
            'TabletMode': '\uEBFC',
            'Umbrella': '\uEC04',
            'NetworkTower': '\uEC05',
            'CityNext': '\uEC06',
            'CityNext2': '\uEC07',
            'Section': '\uEC0C',
            'OneNoteLogoInverse': '\uEC0D',
            'ToggleFilled': '\uEC11',
            'ToggleBorder': '\uEC12',
            'SliderThumb': '\uEC13',
            'ToggleThumb': '\uEC14',
            'Documentation': '\uEC17',
            'Badge': '\uEC1B',
            'Giftbox': '\uEC1F',
            'VisualStudioLogo': '\uEC22',
            'HomeGroup': '\uEC26',
            'ExcelLogoInverse': '\uEC28',
            'WordLogoInverse': '\uEC29',
            'PowerPointLogoInverse': '\uEC2A',
            'Cafe': '\uEC32',
            'SpeedHigh': '\uEC4A',
            'Commitments': '\uEC4D',
            'ThisPC': '\uEC4E',
            'MusicNote': '\uEC4F',
            'MicOff': '\uEC54',
            'PlaybackRate1x': '\uEC57',
            'EdgeLogo': '\uEC60',
            'CompletedSolid': '\uEC61',
            'AlbumRemove': '\uEC62',
            'MessageFill': '\uEC70',
            'TabletSelected': '\uEC74',
            'MobileSelected': '\uEC75',
            'LaptopSelected': '\uEC76',
            'TVMonitorSelected': '\uEC77',
            'DeveloperTools': '\uEC7A',
            'Shapes': '\uEC7C',
            'InsertTextBox': '\uEC7D',
            'LowerBrightness': '\uEC8A',
            'WebComponents': '\uEC8B',
            'OfflineStorage': '\uEC8C',
            'DOM': '\uEC8D',
            'CloudUpload': '\uEC8E',
            'ScrollUpDown': '\uEC8F',
            'DateTime': '\uEC92',
            'Event': '\uECA3',
            'Cake': '\uECA4',
            'Org': '\uECA6',
            'PartyLeader': '\uECA7',
            'DRM': '\uECA8',
            'CloudAdd': '\uECA9',
            'AppIconDefault': '\uECAA',
            'Photo2Add': '\uECAB',
            'Photo2Remove': '\uECAC',
            'Calories': '\uECAD',
            'POI': '\uECAF',
            'AddTo': '\uECC8',
            'RadioBtnOff': '\uECCA',
            'RadioBtnOn': '\uECCB',
            'ExploreContent': '\uECCD',
            'Product': '\uECDC',
            'ProgressLoopInner': '\uECDE',
            'ProgressLoopOuter': '\uECDF',
            'Blocked2': '\uECE4',
            'FangBody': '\uECEB',
            'Toolbox': '\uECED',
            'PageHeader': '\uECEE',
            'ChatInviteFriend': '\uECFE',
            'Brush': '\uECFF',
            'Shirt': '\uED00',
            'Crown': '\uED01',
            'Diamond': '\uED02',
            'ScaleUp': '\uED09',
            'QRCode': '\uED14',
            'Feedback': '\uED15',
            'SharepointLogoInverse': '\uED18',
            'YammerLogo': '\uED19',
            'Hide': '\uED1A',
            'Uneditable': '\uED1D',
            'ReturnToSession': '\uED24',
            'OpenFolderHorizontal': '\uED25',
            'CalendarMirrored': '\uED28'
        }
    };
    (0,_fluentui_style_utilities__WEBPACK_IMPORTED_MODULE_0__.registerIcons)(subset, options);
}
//# sourceMappingURL=fabric-icons-5.js.map

/***/ }),
/* 260 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initializeIcons": () => (/* binding */ initializeIcons)
/* harmony export */ });
/* harmony import */ var _fluentui_style_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84);
// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fluentui-assets-license

function initializeIcons(baseUrl, options) {
    if (baseUrl === void 0) { baseUrl = ''; }
    var subset = {
        style: {
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            fontStyle: 'normal',
            fontWeight: 'normal',
            speak: 'none'
        },
        fontFace: {
            fontFamily: "\"FabricMDL2Icons-6\"",
            src: "url('" + baseUrl + "fabric-icons-6-ef6fd590.woff') format('woff')"
        },
        icons: {
            'SwayLogoInverse': '\uED29',
            'OutOfOffice': '\uED34',
            'Trophy': '\uED3F',
            'ReopenPages': '\uED50',
            'EmojiTabSymbols': '\uED58',
            'AADLogo': '\uED68',
            'AccessLogo': '\uED69',
            'AdminALogoInverse32': '\uED6A',
            'AdminCLogoInverse32': '\uED6B',
            'AdminDLogoInverse32': '\uED6C',
            'AdminELogoInverse32': '\uED6D',
            'AdminLLogoInverse32': '\uED6E',
            'AdminMLogoInverse32': '\uED6F',
            'AdminOLogoInverse32': '\uED70',
            'AdminPLogoInverse32': '\uED71',
            'AdminSLogoInverse32': '\uED72',
            'AdminYLogoInverse32': '\uED73',
            'DelveLogoInverse': '\uED76',
            'ExchangeLogoInverse': '\uED78',
            'LyncLogo': '\uED79',
            'OfficeVideoLogoInverse': '\uED7A',
            'SocialListeningLogo': '\uED7C',
            'VisioLogoInverse': '\uED7D',
            'Balloons': '\uED7E',
            'Cat': '\uED7F',
            'MailAlert': '\uED80',
            'MailCheck': '\uED81',
            'MailLowImportance': '\uED82',
            'MailPause': '\uED83',
            'MailRepeat': '\uED84',
            'SecurityGroup': '\uED85',
            'Table': '\uED86',
            'VoicemailForward': '\uED87',
            'VoicemailReply': '\uED88',
            'Waffle': '\uED89',
            'RemoveEvent': '\uED8A',
            'EventInfo': '\uED8B',
            'ForwardEvent': '\uED8C',
            'WipePhone': '\uED8D',
            'AddOnlineMeeting': '\uED8E',
            'JoinOnlineMeeting': '\uED8F',
            'RemoveLink': '\uED90',
            'PeopleBlock': '\uED91',
            'PeopleRepeat': '\uED92',
            'PeopleAlert': '\uED93',
            'PeoplePause': '\uED94',
            'TransferCall': '\uED95',
            'AddPhone': '\uED96',
            'UnknownCall': '\uED97',
            'NoteReply': '\uED98',
            'NoteForward': '\uED99',
            'NotePinned': '\uED9A',
            'RemoveOccurrence': '\uED9B',
            'Timeline': '\uED9C',
            'EditNote': '\uED9D',
            'CircleHalfFull': '\uED9E',
            'Room': '\uED9F',
            'Unsubscribe': '\uEDA0',
            'Subscribe': '\uEDA1',
            'HardDrive': '\uEDA2',
            'RecurringTask': '\uEDB2',
            'TaskManager': '\uEDB7',
            'TaskManagerMirrored': '\uEDB8',
            'Combine': '\uEDBB',
            'Split': '\uEDBC',
            'DoubleChevronUp': '\uEDBD',
            'DoubleChevronLeft': '\uEDBE',
            'DoubleChevronRight': '\uEDBF',
            'TextBox': '\uEDC2',
            'TextField': '\uEDC3',
            'NumberField': '\uEDC4',
            'Dropdown': '\uEDC5',
            'PenWorkspace': '\uEDC6',
            'BookingsLogo': '\uEDC7',
            'ClassNotebookLogoInverse': '\uEDC8',
            'DelveAnalyticsLogo': '\uEDCA',
            'DocsLogoInverse': '\uEDCB',
            'Dynamics365Logo': '\uEDCC',
            'DynamicSMBLogo': '\uEDCD',
            'OfficeAssistantLogo': '\uEDCE',
            'OfficeStoreLogo': '\uEDCF',
            'OneNoteEduLogoInverse': '\uEDD0',
            'PlannerLogo': '\uEDD1',
            'PowerApps': '\uEDD2',
            'Suitcase': '\uEDD3',
            'ProjectLogoInverse': '\uEDD4',
            'CaretLeft8': '\uEDD5',
            'CaretRight8': '\uEDD6',
            'CaretUp8': '\uEDD7',
            'CaretDown8': '\uEDD8',
            'CaretLeftSolid8': '\uEDD9',
            'CaretRightSolid8': '\uEDDA',
            'CaretUpSolid8': '\uEDDB',
            'CaretDownSolid8': '\uEDDC',
            'ClearFormatting': '\uEDDD',
            'Superscript': '\uEDDE',
            'Subscript': '\uEDDF',
            'Strikethrough': '\uEDE0',
            'Export': '\uEDE1',
            'ExportMirrored': '\uEDE2'
        }
    };
    (0,_fluentui_style_utilities__WEBPACK_IMPORTED_MODULE_0__.registerIcons)(subset, options);
}
//# sourceMappingURL=fabric-icons-6.js.map

/***/ }),
/* 261 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initializeIcons": () => (/* binding */ initializeIcons)
/* harmony export */ });
/* harmony import */ var _fluentui_style_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84);
// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fluentui-assets-license

function initializeIcons(baseUrl, options) {
    if (baseUrl === void 0) { baseUrl = ''; }
    var subset = {
        style: {
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            fontStyle: 'normal',
            fontWeight: 'normal',
            speak: 'none'
        },
        fontFace: {
            fontFamily: "\"FabricMDL2Icons-7\"",
            src: "url('" + baseUrl + "fabric-icons-7-2b97bb99.woff') format('woff')"
        },
        icons: {
            'SingleBookmark': '\uEDFF',
            'SingleBookmarkSolid': '\uEE00',
            'DoubleChevronDown': '\uEE04',
            'FollowUser': '\uEE05',
            'ReplyAll': '\uEE0A',
            'WorkforceManagement': '\uEE0F',
            'RecruitmentManagement': '\uEE12',
            'Questionnaire': '\uEE19',
            'ManagerSelfService': '\uEE23',
            'ProductionFloorManagement': '\uEE29',
            'ProductRelease': '\uEE2E',
            'ProductVariant': '\uEE30',
            'ReplyMirrored': '\uEE35',
            'ReplyAllMirrored': '\uEE36',
            'Medal': '\uEE38',
            'AddGroup': '\uEE3D',
            'QuestionnaireMirrored': '\uEE4B',
            'CloudImportExport': '\uEE55',
            'TemporaryUser': '\uEE58',
            'CaretSolid16': '\uEE62',
            'GroupedDescending': '\uEE66',
            'GroupedAscending': '\uEE67',
            'AwayStatus': '\uEE6A',
            'MyMoviesTV': '\uEE6C',
            'GenericScan': '\uEE6F',
            'AustralianRules': '\uEE70',
            'WifiEthernet': '\uEE77',
            'TrackersMirrored': '\uEE92',
            'DateTimeMirrored': '\uEE93',
            'StopSolid': '\uEE95',
            'DoubleChevronUp12': '\uEE96',
            'DoubleChevronDown12': '\uEE97',
            'DoubleChevronLeft12': '\uEE98',
            'DoubleChevronRight12': '\uEE99',
            'CalendarAgenda': '\uEE9A',
            'ConnectVirtualMachine': '\uEE9D',
            'AddEvent': '\uEEB5',
            'AssetLibrary': '\uEEB6',
            'DataConnectionLibrary': '\uEEB7',
            'DocLibrary': '\uEEB8',
            'FormLibrary': '\uEEB9',
            'FormLibraryMirrored': '\uEEBA',
            'ReportLibrary': '\uEEBB',
            'ReportLibraryMirrored': '\uEEBC',
            'ContactCard': '\uEEBD',
            'CustomList': '\uEEBE',
            'CustomListMirrored': '\uEEBF',
            'IssueTracking': '\uEEC0',
            'IssueTrackingMirrored': '\uEEC1',
            'PictureLibrary': '\uEEC2',
            'OfficeAddinsLogo': '\uEEC7',
            'OfflineOneDriveParachute': '\uEEC8',
            'OfflineOneDriveParachuteDisabled': '\uEEC9',
            'TriangleSolidUp12': '\uEECC',
            'TriangleSolidDown12': '\uEECD',
            'TriangleSolidLeft12': '\uEECE',
            'TriangleSolidRight12': '\uEECF',
            'TriangleUp12': '\uEED0',
            'TriangleDown12': '\uEED1',
            'TriangleLeft12': '\uEED2',
            'TriangleRight12': '\uEED3',
            'ArrowUpRight8': '\uEED4',
            'ArrowDownRight8': '\uEED5',
            'DocumentSet': '\uEED6',
            'GoToDashboard': '\uEEED',
            'DelveAnalytics': '\uEEEE',
            'ArrowUpRightMirrored8': '\uEEEF',
            'ArrowDownRightMirrored8': '\uEEF0',
            'CompanyDirectory': '\uEF0D',
            'OpenEnrollment': '\uEF1C',
            'CompanyDirectoryMirrored': '\uEF2B',
            'OneDriveAdd': '\uEF32',
            'ProfileSearch': '\uEF35',
            'Header2': '\uEF36',
            'Header3': '\uEF37',
            'Header4': '\uEF38',
            'RingerSolid': '\uEF3A',
            'Eyedropper': '\uEF3C',
            'MarketDown': '\uEF42',
            'CalendarWorkWeek': '\uEF51',
            'SidePanel': '\uEF52',
            'GlobeFavorite': '\uEF53',
            'CaretTopLeftSolid8': '\uEF54',
            'CaretTopRightSolid8': '\uEF55',
            'ViewAll2': '\uEF56',
            'DocumentReply': '\uEF57',
            'PlayerSettings': '\uEF58',
            'ReceiptForward': '\uEF59',
            'ReceiptReply': '\uEF5A',
            'ReceiptCheck': '\uEF5B',
            'Fax': '\uEF5C',
            'RecurringEvent': '\uEF5D',
            'ReplyAlt': '\uEF5E',
            'ReplyAllAlt': '\uEF5F',
            'EditStyle': '\uEF60',
            'EditMail': '\uEF61',
            'Lifesaver': '\uEF62',
            'LifesaverLock': '\uEF63',
            'InboxCheck': '\uEF64',
            'FolderSearch': '\uEF65'
        }
    };
    (0,_fluentui_style_utilities__WEBPACK_IMPORTED_MODULE_0__.registerIcons)(subset, options);
}
//# sourceMappingURL=fabric-icons-7.js.map

/***/ }),
/* 262 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initializeIcons": () => (/* binding */ initializeIcons)
/* harmony export */ });
/* harmony import */ var _fluentui_style_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84);
// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fluentui-assets-license

function initializeIcons(baseUrl, options) {
    if (baseUrl === void 0) { baseUrl = ''; }
    var subset = {
        style: {
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            fontStyle: 'normal',
            fontWeight: 'normal',
            speak: 'none'
        },
        fontFace: {
            fontFamily: "\"FabricMDL2Icons-8\"",
            src: "url('" + baseUrl + "fabric-icons-8-6fdf1528.woff') format('woff')"
        },
        icons: {
            'CollapseMenu': '\uEF66',
            'ExpandMenu': '\uEF67',
            'Boards': '\uEF68',
            'SunAdd': '\uEF69',
            'SunQuestionMark': '\uEF6A',
            'LandscapeOrientation': '\uEF6B',
            'DocumentSearch': '\uEF6C',
            'PublicCalendar': '\uEF6D',
            'PublicContactCard': '\uEF6E',
            'PublicEmail': '\uEF6F',
            'PublicFolder': '\uEF70',
            'WordDocument': '\uEF71',
            'PowerPointDocument': '\uEF72',
            'ExcelDocument': '\uEF73',
            'GroupedList': '\uEF74',
            'ClassroomLogo': '\uEF75',
            'Sections': '\uEF76',
            'EditPhoto': '\uEF77',
            'Starburst': '\uEF78',
            'ShareiOS': '\uEF79',
            'AirTickets': '\uEF7A',
            'PencilReply': '\uEF7B',
            'Tiles2': '\uEF7C',
            'SkypeCircleCheck': '\uEF7D',
            'SkypeCircleClock': '\uEF7E',
            'SkypeCircleMinus': '\uEF7F',
            'SkypeMessage': '\uEF83',
            'ClosedCaption': '\uEF84',
            'ATPLogo': '\uEF85',
            'OfficeFormsLogoInverse': '\uEF86',
            'RecycleBin': '\uEF87',
            'EmptyRecycleBin': '\uEF88',
            'Hide2': '\uEF89',
            'Breadcrumb': '\uEF8C',
            'BirthdayCake': '\uEF8D',
            'TimeEntry': '\uEF95',
            'CRMProcesses': '\uEFB1',
            'PageEdit': '\uEFB6',
            'PageArrowRight': '\uEFB8',
            'PageRemove': '\uEFBA',
            'Database': '\uEFC7',
            'DataManagementSettings': '\uEFC8',
            'CRMServices': '\uEFD2',
            'EditContact': '\uEFD3',
            'ConnectContacts': '\uEFD4',
            'AppIconDefaultAdd': '\uEFDA',
            'AppIconDefaultList': '\uEFDE',
            'ActivateOrders': '\uEFE0',
            'DeactivateOrders': '\uEFE1',
            'ProductCatalog': '\uEFE8',
            'ScatterChart': '\uEFEB',
            'AccountActivity': '\uEFF4',
            'DocumentManagement': '\uEFFC',
            'CRMReport': '\uEFFE',
            'KnowledgeArticle': '\uF000',
            'Relationship': '\uF003',
            'HomeVerify': '\uF00E',
            'ZipFolder': '\uF012',
            'SurveyQuestions': '\uF01B',
            'TextDocument': '\uF029',
            'TextDocumentShared': '\uF02B',
            'PageCheckedOut': '\uF02C',
            'PageShared': '\uF02D',
            'SaveAndClose': '\uF038',
            'Script': '\uF03A',
            'Archive': '\uF03F',
            'ActivityFeed': '\uF056',
            'Compare': '\uF057',
            'EventDate': '\uF059',
            'ArrowUpRight': '\uF069',
            'CaretRight': '\uF06B',
            'SetAction': '\uF071',
            'ChatBot': '\uF08B',
            'CaretSolidLeft': '\uF08D',
            'CaretSolidDown': '\uF08E',
            'CaretSolidRight': '\uF08F',
            'CaretSolidUp': '\uF090',
            'PowerAppsLogo': '\uF091',
            'PowerApps2Logo': '\uF092',
            'SearchIssue': '\uF09A',
            'SearchIssueMirrored': '\uF09B',
            'FabricAssetLibrary': '\uF09C',
            'FabricDataConnectionLibrary': '\uF09D',
            'FabricDocLibrary': '\uF09E',
            'FabricFormLibrary': '\uF09F',
            'FabricFormLibraryMirrored': '\uF0A0',
            'FabricReportLibrary': '\uF0A1',
            'FabricReportLibraryMirrored': '\uF0A2',
            'FabricPublicFolder': '\uF0A3',
            'FabricFolderSearch': '\uF0A4',
            'FabricMovetoFolder': '\uF0A5',
            'FabricUnsyncFolder': '\uF0A6',
            'FabricSyncFolder': '\uF0A7',
            'FabricOpenFolderHorizontal': '\uF0A8',
            'FabricFolder': '\uF0A9',
            'FabricFolderFill': '\uF0AA',
            'FabricNewFolder': '\uF0AB',
            'FabricPictureLibrary': '\uF0AC',
            'PhotoVideoMedia': '\uF0B1',
            'AddFavorite': '\uF0C8'
        }
    };
    (0,_fluentui_style_utilities__WEBPACK_IMPORTED_MODULE_0__.registerIcons)(subset, options);
}
//# sourceMappingURL=fabric-icons-8.js.map

/***/ }),
/* 263 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initializeIcons": () => (/* binding */ initializeIcons)
/* harmony export */ });
/* harmony import */ var _fluentui_style_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84);
// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fluentui-assets-license

function initializeIcons(baseUrl, options) {
    if (baseUrl === void 0) { baseUrl = ''; }
    var subset = {
        style: {
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            fontStyle: 'normal',
            fontWeight: 'normal',
            speak: 'none'
        },
        fontFace: {
            fontFamily: "\"FabricMDL2Icons-9\"",
            src: "url('" + baseUrl + "fabric-icons-9-c6162b42.woff') format('woff')"
        },
        icons: {
            'AddFavoriteFill': '\uF0C9',
            'BufferTimeBefore': '\uF0CF',
            'BufferTimeAfter': '\uF0D0',
            'BufferTimeBoth': '\uF0D1',
            'PublishContent': '\uF0D4',
            'ClipboardList': '\uF0E3',
            'ClipboardListMirrored': '\uF0E4',
            'CannedChat': '\uF0F2',
            'SkypeForBusinessLogo': '\uF0FC',
            'TabCenter': '\uF100',
            'PageCheckedin': '\uF104',
            'PageList': '\uF106',
            'ReadOutLoud': '\uF112',
            'CaretBottomLeftSolid8': '\uF121',
            'CaretBottomRightSolid8': '\uF122',
            'FolderHorizontal': '\uF12B',
            'MicrosoftStaffhubLogo': '\uF130',
            'GiftboxOpen': '\uF133',
            'StatusCircleOuter': '\uF136',
            'StatusCircleInner': '\uF137',
            'StatusCircleRing': '\uF138',
            'StatusTriangleOuter': '\uF139',
            'StatusTriangleInner': '\uF13A',
            'StatusTriangleExclamation': '\uF13B',
            'StatusCircleExclamation': '\uF13C',
            'StatusCircleErrorX': '\uF13D',
            'StatusCircleInfo': '\uF13F',
            'StatusCircleBlock': '\uF140',
            'StatusCircleBlock2': '\uF141',
            'StatusCircleQuestionMark': '\uF142',
            'StatusCircleSync': '\uF143',
            'Toll': '\uF160',
            'ExploreContentSingle': '\uF164',
            'CollapseContent': '\uF165',
            'CollapseContentSingle': '\uF166',
            'InfoSolid': '\uF167',
            'GroupList': '\uF168',
            'ProgressRingDots': '\uF16A',
            'CaloriesAdd': '\uF172',
            'BranchFork': '\uF173',
            'MuteChat': '\uF17A',
            'AddHome': '\uF17B',
            'AddWork': '\uF17C',
            'MobileReport': '\uF18A',
            'ScaleVolume': '\uF18C',
            'HardDriveGroup': '\uF18F',
            'FastMode': '\uF19A',
            'ToggleLeft': '\uF19E',
            'ToggleRight': '\uF19F',
            'TriangleShape': '\uF1A7',
            'RectangleShape': '\uF1A9',
            'CubeShape': '\uF1AA',
            'Trophy2': '\uF1AE',
            'BucketColor': '\uF1B6',
            'BucketColorFill': '\uF1B7',
            'Taskboard': '\uF1C2',
            'SingleColumn': '\uF1D3',
            'DoubleColumn': '\uF1D4',
            'TripleColumn': '\uF1D5',
            'ColumnLeftTwoThirds': '\uF1D6',
            'ColumnRightTwoThirds': '\uF1D7',
            'AccessLogoFill': '\uF1DB',
            'AnalyticsLogo': '\uF1DE',
            'AnalyticsQuery': '\uF1DF',
            'NewAnalyticsQuery': '\uF1E0',
            'AnalyticsReport': '\uF1E1',
            'WordLogo': '\uF1E3',
            'WordLogoFill': '\uF1E4',
            'ExcelLogo': '\uF1E5',
            'ExcelLogoFill': '\uF1E6',
            'OneNoteLogo': '\uF1E7',
            'OneNoteLogoFill': '\uF1E8',
            'OutlookLogo': '\uF1E9',
            'OutlookLogoFill': '\uF1EA',
            'PowerPointLogo': '\uF1EB',
            'PowerPointLogoFill': '\uF1EC',
            'PublisherLogo': '\uF1ED',
            'PublisherLogoFill': '\uF1EE',
            'ScheduleEventAction': '\uF1EF',
            'FlameSolid': '\uF1F3',
            'ServerProcesses': '\uF1FE',
            'Server': '\uF201',
            'SaveAll': '\uF203',
            'LinkedInLogo': '\uF20A',
            'Decimals': '\uF218',
            'SidePanelMirrored': '\uF221',
            'ProtectRestrict': '\uF22A',
            'Blog': '\uF22B',
            'UnknownMirrored': '\uF22E',
            'PublicContactCardMirrored': '\uF230',
            'GridViewSmall': '\uF232',
            'GridViewMedium': '\uF233',
            'GridViewLarge': '\uF234',
            'Step': '\uF241',
            'StepInsert': '\uF242',
            'StepShared': '\uF243',
            'StepSharedAdd': '\uF244',
            'StepSharedInsert': '\uF245',
            'ViewDashboard': '\uF246',
            'ViewList': '\uF247'
        }
    };
    (0,_fluentui_style_utilities__WEBPACK_IMPORTED_MODULE_0__.registerIcons)(subset, options);
}
//# sourceMappingURL=fabric-icons-9.js.map

/***/ }),
/* 264 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initializeIcons": () => (/* binding */ initializeIcons)
/* harmony export */ });
/* harmony import */ var _fluentui_style_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84);
// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fluentui-assets-license

function initializeIcons(baseUrl, options) {
    if (baseUrl === void 0) { baseUrl = ''; }
    var subset = {
        style: {
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            fontStyle: 'normal',
            fontWeight: 'normal',
            speak: 'none'
        },
        fontFace: {
            fontFamily: "\"FabricMDL2Icons-10\"",
            src: "url('" + baseUrl + "fabric-icons-10-c4ded8e4.woff') format('woff')"
        },
        icons: {
            'ViewListGroup': '\uF248',
            'ViewListTree': '\uF249',
            'TriggerAuto': '\uF24A',
            'TriggerUser': '\uF24B',
            'PivotChart': '\uF24C',
            'StackedBarChart': '\uF24D',
            'StackedLineChart': '\uF24E',
            'BuildQueue': '\uF24F',
            'BuildQueueNew': '\uF250',
            'UserFollowed': '\uF25C',
            'ContactLink': '\uF25F',
            'Stack': '\uF26F',
            'Bullseye': '\uF272',
            'VennDiagram': '\uF273',
            'FiveTileGrid': '\uF274',
            'FocalPoint': '\uF277',
            'Insert': '\uF278',
            'RingerRemove': '\uF279',
            'TeamsLogoInverse': '\uF27A',
            'TeamsLogo': '\uF27B',
            'TeamsLogoFill': '\uF27C',
            'SkypeForBusinessLogoFill': '\uF27D',
            'SharepointLogo': '\uF27E',
            'SharepointLogoFill': '\uF27F',
            'DelveLogo': '\uF280',
            'DelveLogoFill': '\uF281',
            'OfficeVideoLogo': '\uF282',
            'OfficeVideoLogoFill': '\uF283',
            'ExchangeLogo': '\uF284',
            'ExchangeLogoFill': '\uF285',
            'Signin': '\uF286',
            'DocumentApproval': '\uF28B',
            'CloneToDesktop': '\uF28C',
            'InstallToDrive': '\uF28D',
            'Blur': '\uF28E',
            'Build': '\uF28F',
            'ProcessMetaTask': '\uF290',
            'BranchFork2': '\uF291',
            'BranchLocked': '\uF292',
            'BranchCommit': '\uF293',
            'BranchCompare': '\uF294',
            'BranchMerge': '\uF295',
            'BranchPullRequest': '\uF296',
            'BranchSearch': '\uF297',
            'BranchShelveset': '\uF298',
            'RawSource': '\uF299',
            'MergeDuplicate': '\uF29A',
            'RowsGroup': '\uF29B',
            'RowsChild': '\uF29C',
            'Deploy': '\uF29D',
            'Redeploy': '\uF29E',
            'ServerEnviroment': '\uF29F',
            'VisioDiagram': '\uF2A0',
            'HighlightMappedShapes': '\uF2A1',
            'TextCallout': '\uF2A2',
            'IconSetsFlag': '\uF2A4',
            'VisioLogo': '\uF2A7',
            'VisioLogoFill': '\uF2A8',
            'VisioDocument': '\uF2A9',
            'TimelineProgress': '\uF2AA',
            'TimelineDelivery': '\uF2AB',
            'Backlog': '\uF2AC',
            'TeamFavorite': '\uF2AD',
            'TaskGroup': '\uF2AE',
            'TaskGroupMirrored': '\uF2AF',
            'ScopeTemplate': '\uF2B0',
            'AssessmentGroupTemplate': '\uF2B1',
            'NewTeamProject': '\uF2B2',
            'CommentAdd': '\uF2B3',
            'CommentNext': '\uF2B4',
            'CommentPrevious': '\uF2B5',
            'ShopServer': '\uF2B6',
            'LocaleLanguage': '\uF2B7',
            'QueryList': '\uF2B8',
            'UserSync': '\uF2B9',
            'UserPause': '\uF2BA',
            'StreamingOff': '\uF2BB',
            'ArrowTallUpLeft': '\uF2BD',
            'ArrowTallUpRight': '\uF2BE',
            'ArrowTallDownLeft': '\uF2BF',
            'ArrowTallDownRight': '\uF2C0',
            'FieldEmpty': '\uF2C1',
            'FieldFilled': '\uF2C2',
            'FieldChanged': '\uF2C3',
            'FieldNotChanged': '\uF2C4',
            'RingerOff': '\uF2C5',
            'PlayResume': '\uF2C6',
            'BulletedList2': '\uF2C7',
            'BulletedList2Mirrored': '\uF2C8',
            'ImageCrosshair': '\uF2C9',
            'GitGraph': '\uF2CA',
            'Repo': '\uF2CB',
            'RepoSolid': '\uF2CC',
            'FolderQuery': '\uF2CD',
            'FolderList': '\uF2CE',
            'FolderListMirrored': '\uF2CF',
            'LocationOutline': '\uF2D0',
            'POISolid': '\uF2D1',
            'CalculatorNotEqualTo': '\uF2D2',
            'BoxSubtractSolid': '\uF2D3'
        }
    };
    (0,_fluentui_style_utilities__WEBPACK_IMPORTED_MODULE_0__.registerIcons)(subset, options);
}
//# sourceMappingURL=fabric-icons-10.js.map

/***/ }),
/* 265 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initializeIcons": () => (/* binding */ initializeIcons)
/* harmony export */ });
/* harmony import */ var _fluentui_style_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84);
// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fluentui-assets-license

function initializeIcons(baseUrl, options) {
    if (baseUrl === void 0) { baseUrl = ''; }
    var subset = {
        style: {
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            fontStyle: 'normal',
            fontWeight: 'normal',
            speak: 'none'
        },
        fontFace: {
            fontFamily: "\"FabricMDL2Icons-11\"",
            src: "url('" + baseUrl + "fabric-icons-11-2a8393d6.woff') format('woff')"
        },
        icons: {
            'BoxAdditionSolid': '\uF2D4',
            'BoxMultiplySolid': '\uF2D5',
            'BoxPlaySolid': '\uF2D6',
            'BoxCheckmarkSolid': '\uF2D7',
            'CirclePauseSolid': '\uF2D8',
            'CirclePause': '\uF2D9',
            'MSNVideosSolid': '\uF2DA',
            'CircleStopSolid': '\uF2DB',
            'CircleStop': '\uF2DC',
            'NavigateBack': '\uF2DD',
            'NavigateBackMirrored': '\uF2DE',
            'NavigateForward': '\uF2DF',
            'NavigateForwardMirrored': '\uF2E0',
            'UnknownSolid': '\uF2E1',
            'UnknownMirroredSolid': '\uF2E2',
            'CircleAddition': '\uF2E3',
            'CircleAdditionSolid': '\uF2E4',
            'FilePDB': '\uF2E5',
            'FileTemplate': '\uF2E6',
            'FileSQL': '\uF2E7',
            'FileJAVA': '\uF2E8',
            'FileASPX': '\uF2E9',
            'FileCSS': '\uF2EA',
            'FileSass': '\uF2EB',
            'FileLess': '\uF2EC',
            'FileHTML': '\uF2ED',
            'JavaScriptLanguage': '\uF2EE',
            'CSharpLanguage': '\uF2EF',
            'CSharp': '\uF2F0',
            'VisualBasicLanguage': '\uF2F1',
            'VB': '\uF2F2',
            'CPlusPlusLanguage': '\uF2F3',
            'CPlusPlus': '\uF2F4',
            'FSharpLanguage': '\uF2F5',
            'FSharp': '\uF2F6',
            'TypeScriptLanguage': '\uF2F7',
            'PythonLanguage': '\uF2F8',
            'PY': '\uF2F9',
            'CoffeeScript': '\uF2FA',
            'MarkDownLanguage': '\uF2FB',
            'FullWidth': '\uF2FE',
            'FullWidthEdit': '\uF2FF',
            'Plug': '\uF300',
            'PlugSolid': '\uF301',
            'PlugConnected': '\uF302',
            'PlugDisconnected': '\uF303',
            'UnlockSolid': '\uF304',
            'Variable': '\uF305',
            'Parameter': '\uF306',
            'CommentUrgent': '\uF307',
            'Storyboard': '\uF308',
            'DiffInline': '\uF309',
            'DiffSideBySide': '\uF30A',
            'ImageDiff': '\uF30B',
            'ImagePixel': '\uF30C',
            'FileBug': '\uF30D',
            'FileCode': '\uF30E',
            'FileComment': '\uF30F',
            'BusinessHoursSign': '\uF310',
            'FileImage': '\uF311',
            'FileSymlink': '\uF312',
            'AutoFillTemplate': '\uF313',
            'WorkItem': '\uF314',
            'WorkItemBug': '\uF315',
            'LogRemove': '\uF316',
            'ColumnOptions': '\uF317',
            'Packages': '\uF318',
            'BuildIssue': '\uF319',
            'AssessmentGroup': '\uF31A',
            'VariableGroup': '\uF31B',
            'FullHistory': '\uF31C',
            'Wheelchair': '\uF31F',
            'SingleColumnEdit': '\uF321',
            'DoubleColumnEdit': '\uF322',
            'TripleColumnEdit': '\uF323',
            'ColumnLeftTwoThirdsEdit': '\uF324',
            'ColumnRightTwoThirdsEdit': '\uF325',
            'StreamLogo': '\uF329',
            'PassiveAuthentication': '\uF32A',
            'AlertSolid': '\uF331',
            'MegaphoneSolid': '\uF332',
            'TaskSolid': '\uF333',
            'ConfigurationSolid': '\uF334',
            'BugSolid': '\uF335',
            'CrownSolid': '\uF336',
            'Trophy2Solid': '\uF337',
            'QuickNoteSolid': '\uF338',
            'ConstructionConeSolid': '\uF339',
            'PageListSolid': '\uF33A',
            'PageListMirroredSolid': '\uF33B',
            'StarburstSolid': '\uF33C',
            'ReadingModeSolid': '\uF33D',
            'SadSolid': '\uF33E',
            'HealthSolid': '\uF33F',
            'ShieldSolid': '\uF340',
            'GiftBoxSolid': '\uF341',
            'ShoppingCartSolid': '\uF342',
            'MailSolid': '\uF343',
            'ChatSolid': '\uF344',
            'RibbonSolid': '\uF345'
        }
    };
    (0,_fluentui_style_utilities__WEBPACK_IMPORTED_MODULE_0__.registerIcons)(subset, options);
}
//# sourceMappingURL=fabric-icons-11.js.map

/***/ }),
/* 266 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initializeIcons": () => (/* binding */ initializeIcons)
/* harmony export */ });
/* harmony import */ var _fluentui_style_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84);
// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fluentui-assets-license

function initializeIcons(baseUrl, options) {
    if (baseUrl === void 0) { baseUrl = ''; }
    var subset = {
        style: {
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            fontStyle: 'normal',
            fontWeight: 'normal',
            speak: 'none'
        },
        fontFace: {
            fontFamily: "\"FabricMDL2Icons-12\"",
            src: "url('" + baseUrl + "fabric-icons-12-7e945a1e.woff') format('woff')"
        },
        icons: {
            'FinancialSolid': '\uF346',
            'FinancialMirroredSolid': '\uF347',
            'HeadsetSolid': '\uF348',
            'PermissionsSolid': '\uF349',
            'ParkingSolid': '\uF34A',
            'ParkingMirroredSolid': '\uF34B',
            'DiamondSolid': '\uF34C',
            'AsteriskSolid': '\uF34D',
            'OfflineStorageSolid': '\uF34E',
            'BankSolid': '\uF34F',
            'DecisionSolid': '\uF350',
            'Parachute': '\uF351',
            'ParachuteSolid': '\uF352',
            'FiltersSolid': '\uF353',
            'ColorSolid': '\uF354',
            'ReviewSolid': '\uF355',
            'ReviewRequestSolid': '\uF356',
            'ReviewRequestMirroredSolid': '\uF357',
            'ReviewResponseSolid': '\uF358',
            'FeedbackRequestSolid': '\uF359',
            'FeedbackRequestMirroredSolid': '\uF35A',
            'FeedbackResponseSolid': '\uF35B',
            'WorkItemBar': '\uF35C',
            'WorkItemBarSolid': '\uF35D',
            'Separator': '\uF35E',
            'NavigateExternalInline': '\uF35F',
            'PlanView': '\uF360',
            'TimelineMatrixView': '\uF361',
            'EngineeringGroup': '\uF362',
            'ProjectCollection': '\uF363',
            'CaretBottomRightCenter8': '\uF364',
            'CaretBottomLeftCenter8': '\uF365',
            'CaretTopRightCenter8': '\uF366',
            'CaretTopLeftCenter8': '\uF367',
            'DonutChart': '\uF368',
            'ChevronUnfold10': '\uF369',
            'ChevronFold10': '\uF36A',
            'DoubleChevronDown8': '\uF36B',
            'DoubleChevronUp8': '\uF36C',
            'DoubleChevronLeft8': '\uF36D',
            'DoubleChevronRight8': '\uF36E',
            'ChevronDownEnd6': '\uF36F',
            'ChevronUpEnd6': '\uF370',
            'ChevronLeftEnd6': '\uF371',
            'ChevronRightEnd6': '\uF372',
            'ContextMenu': '\uF37C',
            'AzureAPIManagement': '\uF37F',
            'AzureServiceEndpoint': '\uF380',
            'VSTSLogo': '\uF381',
            'VSTSAltLogo1': '\uF382',
            'VSTSAltLogo2': '\uF383',
            'FileTypeSolution': '\uF387',
            'WordLogoInverse16': '\uF390',
            'WordLogo16': '\uF391',
            'WordLogoFill16': '\uF392',
            'PowerPointLogoInverse16': '\uF393',
            'PowerPointLogo16': '\uF394',
            'PowerPointLogoFill16': '\uF395',
            'ExcelLogoInverse16': '\uF396',
            'ExcelLogo16': '\uF397',
            'ExcelLogoFill16': '\uF398',
            'OneNoteLogoInverse16': '\uF399',
            'OneNoteLogo16': '\uF39A',
            'OneNoteLogoFill16': '\uF39B',
            'OutlookLogoInverse16': '\uF39C',
            'OutlookLogo16': '\uF39D',
            'OutlookLogoFill16': '\uF39E',
            'PublisherLogoInverse16': '\uF39F',
            'PublisherLogo16': '\uF3A0',
            'PublisherLogoFill16': '\uF3A1',
            'VisioLogoInverse16': '\uF3A2',
            'VisioLogo16': '\uF3A3',
            'VisioLogoFill16': '\uF3A4',
            'TestBeaker': '\uF3A5',
            'TestBeakerSolid': '\uF3A6',
            'TestExploreSolid': '\uF3A7',
            'TestAutoSolid': '\uF3A8',
            'TestUserSolid': '\uF3A9',
            'TestImpactSolid': '\uF3AA',
            'TestPlan': '\uF3AB',
            'TestStep': '\uF3AC',
            'TestParameter': '\uF3AD',
            'TestSuite': '\uF3AE',
            'TestCase': '\uF3AF',
            'Sprint': '\uF3B0',
            'SignOut': '\uF3B1',
            'TriggerApproval': '\uF3B2',
            'Rocket': '\uF3B3',
            'AzureKeyVault': '\uF3B4',
            'Onboarding': '\uF3BA',
            'Transition': '\uF3BC',
            'LikeSolid': '\uF3BF',
            'DislikeSolid': '\uF3C0',
            'CRMCustomerInsightsApp': '\uF3C8',
            'EditCreate': '\uF3C9',
            'PlayReverseResume': '\uF3E4',
            'PlayReverse': '\uF3E5',
            'SearchData': '\uF3F1',
            'UnSetColor': '\uF3F9',
            'DeclineCall': '\uF405'
        }
    };
    (0,_fluentui_style_utilities__WEBPACK_IMPORTED_MODULE_0__.registerIcons)(subset, options);
}
//# sourceMappingURL=fabric-icons-12.js.map

/***/ }),
/* 267 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initializeIcons": () => (/* binding */ initializeIcons)
/* harmony export */ });
/* harmony import */ var _fluentui_style_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84);
// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fluentui-assets-license

function initializeIcons(baseUrl, options) {
    if (baseUrl === void 0) { baseUrl = ''; }
    var subset = {
        style: {
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            fontStyle: 'normal',
            fontWeight: 'normal',
            speak: 'none'
        },
        fontFace: {
            fontFamily: "\"FabricMDL2Icons-13\"",
            src: "url('" + baseUrl + "fabric-icons-13-c3989a02.woff') format('woff')"
        },
        icons: {
            'RectangularClipping': '\uF407',
            'TeamsLogo16': '\uF40A',
            'TeamsLogoFill16': '\uF40B',
            'Spacer': '\uF40D',
            'SkypeLogo16': '\uF40E',
            'SkypeForBusinessLogo16': '\uF40F',
            'SkypeForBusinessLogoFill16': '\uF410',
            'FilterSolid': '\uF412',
            'MailUndelivered': '\uF415',
            'MailTentative': '\uF416',
            'MailTentativeMirrored': '\uF417',
            'MailReminder': '\uF418',
            'ReceiptUndelivered': '\uF419',
            'ReceiptTentative': '\uF41A',
            'ReceiptTentativeMirrored': '\uF41B',
            'Inbox': '\uF41C',
            'IRMReply': '\uF41D',
            'IRMReplyMirrored': '\uF41E',
            'IRMForward': '\uF41F',
            'IRMForwardMirrored': '\uF420',
            'VoicemailIRM': '\uF421',
            'EventAccepted': '\uF422',
            'EventTentative': '\uF423',
            'EventTentativeMirrored': '\uF424',
            'EventDeclined': '\uF425',
            'IDBadge': '\uF427',
            'BackgroundColor': '\uF42B',
            'OfficeFormsLogoInverse16': '\uF433',
            'OfficeFormsLogo': '\uF434',
            'OfficeFormsLogoFill': '\uF435',
            'OfficeFormsLogo16': '\uF436',
            'OfficeFormsLogoFill16': '\uF437',
            'OfficeFormsLogoInverse24': '\uF43A',
            'OfficeFormsLogo24': '\uF43B',
            'OfficeFormsLogoFill24': '\uF43C',
            'PageLock': '\uF43F',
            'NotExecuted': '\uF440',
            'NotImpactedSolid': '\uF441',
            'FieldReadOnly': '\uF442',
            'FieldRequired': '\uF443',
            'BacklogBoard': '\uF444',
            'ExternalBuild': '\uF445',
            'ExternalTFVC': '\uF446',
            'ExternalXAML': '\uF447',
            'IssueSolid': '\uF448',
            'DefectSolid': '\uF449',
            'LadybugSolid': '\uF44A',
            'NugetLogo': '\uF44C',
            'TFVCLogo': '\uF44D',
            'ProjectLogo32': '\uF47E',
            'ProjectLogoFill32': '\uF47F',
            'ProjectLogo16': '\uF480',
            'ProjectLogoFill16': '\uF481',
            'SwayLogo32': '\uF482',
            'SwayLogoFill32': '\uF483',
            'SwayLogo16': '\uF484',
            'SwayLogoFill16': '\uF485',
            'ClassNotebookLogo32': '\uF486',
            'ClassNotebookLogoFill32': '\uF487',
            'ClassNotebookLogo16': '\uF488',
            'ClassNotebookLogoFill16': '\uF489',
            'ClassNotebookLogoInverse32': '\uF48A',
            'ClassNotebookLogoInverse16': '\uF48B',
            'StaffNotebookLogo32': '\uF48C',
            'StaffNotebookLogoFill32': '\uF48D',
            'StaffNotebookLogo16': '\uF48E',
            'StaffNotebookLogoFill16': '\uF48F',
            'StaffNotebookLogoInverted32': '\uF490',
            'StaffNotebookLogoInverted16': '\uF491',
            'KaizalaLogo': '\uF492',
            'TaskLogo': '\uF493',
            'ProtectionCenterLogo32': '\uF494',
            'GallatinLogo': '\uF496',
            'Globe2': '\uF49A',
            'Guitar': '\uF49B',
            'Breakfast': '\uF49C',
            'Brunch': '\uF49D',
            'BeerMug': '\uF49E',
            'Vacation': '\uF49F',
            'Teeth': '\uF4A0',
            'Taxi': '\uF4A1',
            'Chopsticks': '\uF4A2',
            'SyncOccurence': '\uF4A3',
            'UnsyncOccurence': '\uF4A4',
            'GIF': '\uF4A9',
            'PrimaryCalendar': '\uF4AE',
            'SearchCalendar': '\uF4AF',
            'VideoOff': '\uF4B0',
            'MicrosoftFlowLogo': '\uF4B1',
            'BusinessCenterLogo': '\uF4B2',
            'ToDoLogoBottom': '\uF4B3',
            'ToDoLogoTop': '\uF4B4',
            'EditSolid12': '\uF4B5',
            'EditSolidMirrored12': '\uF4B6',
            'UneditableSolid12': '\uF4B7',
            'UneditableSolidMirrored12': '\uF4B8',
            'UneditableMirrored': '\uF4B9',
            'AdminALogo32': '\uF4BA',
            'AdminALogoFill32': '\uF4BB',
            'ToDoLogoInverse': '\uF4BC'
        }
    };
    (0,_fluentui_style_utilities__WEBPACK_IMPORTED_MODULE_0__.registerIcons)(subset, options);
}
//# sourceMappingURL=fabric-icons-13.js.map

/***/ }),
/* 268 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initializeIcons": () => (/* binding */ initializeIcons)
/* harmony export */ });
/* harmony import */ var _fluentui_style_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84);
// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fluentui-assets-license

function initializeIcons(baseUrl, options) {
    if (baseUrl === void 0) { baseUrl = ''; }
    var subset = {
        style: {
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            fontStyle: 'normal',
            fontWeight: 'normal',
            speak: 'none'
        },
        fontFace: {
            fontFamily: "\"FabricMDL2Icons-14\"",
            src: "url('" + baseUrl + "fabric-icons-14-5cf58db8.woff') format('woff')"
        },
        icons: {
            'Snooze': '\uF4BD',
            'WaffleOffice365': '\uF4E0',
            'ImageSearch': '\uF4E8',
            'NewsSearch': '\uF4E9',
            'VideoSearch': '\uF4EA',
            'R': '\uF4EB',
            'FontColorA': '\uF4EC',
            'FontColorSwatch': '\uF4ED',
            'LightWeight': '\uF4EE',
            'NormalWeight': '\uF4EF',
            'SemiboldWeight': '\uF4F0',
            'GroupObject': '\uF4F1',
            'UngroupObject': '\uF4F2',
            'AlignHorizontalLeft': '\uF4F3',
            'AlignHorizontalCenter': '\uF4F4',
            'AlignHorizontalRight': '\uF4F5',
            'AlignVerticalTop': '\uF4F6',
            'AlignVerticalCenter': '\uF4F7',
            'AlignVerticalBottom': '\uF4F8',
            'HorizontalDistributeCenter': '\uF4F9',
            'VerticalDistributeCenter': '\uF4FA',
            'Ellipse': '\uF4FB',
            'Line': '\uF4FC',
            'Octagon': '\uF4FD',
            'Hexagon': '\uF4FE',
            'Pentagon': '\uF4FF',
            'RightTriangle': '\uF500',
            'HalfCircle': '\uF501',
            'QuarterCircle': '\uF502',
            'ThreeQuarterCircle': '\uF503',
            '6PointStar': '\uF504',
            '12PointStar': '\uF505',
            'ArrangeBringToFront': '\uF506',
            'ArrangeSendToBack': '\uF507',
            'ArrangeSendBackward': '\uF508',
            'ArrangeBringForward': '\uF509',
            'BorderDash': '\uF50A',
            'BorderDot': '\uF50B',
            'LineStyle': '\uF50C',
            'LineThickness': '\uF50D',
            'WindowEdit': '\uF50E',
            'HintText': '\uF50F',
            'MediaAdd': '\uF510',
            'AnchorLock': '\uF511',
            'AutoHeight': '\uF512',
            'ChartSeries': '\uF513',
            'ChartXAngle': '\uF514',
            'ChartYAngle': '\uF515',
            'Combobox': '\uF516',
            'LineSpacing': '\uF517',
            'Padding': '\uF518',
            'PaddingTop': '\uF519',
            'PaddingBottom': '\uF51A',
            'PaddingLeft': '\uF51B',
            'PaddingRight': '\uF51C',
            'NavigationFlipper': '\uF51D',
            'AlignJustify': '\uF51E',
            'TextOverflow': '\uF51F',
            'VisualsFolder': '\uF520',
            'VisualsStore': '\uF521',
            'PictureCenter': '\uF522',
            'PictureFill': '\uF523',
            'PicturePosition': '\uF524',
            'PictureStretch': '\uF525',
            'PictureTile': '\uF526',
            'Slider': '\uF527',
            'SliderHandleSize': '\uF528',
            'DefaultRatio': '\uF529',
            'NumberSequence': '\uF52A',
            'GUID': '\uF52B',
            'ReportAdd': '\uF52C',
            'DashboardAdd': '\uF52D',
            'MapPinSolid': '\uF52E',
            'WebPublish': '\uF52F',
            'PieSingleSolid': '\uF530',
            'BlockedSolid': '\uF531',
            'DrillDown': '\uF532',
            'DrillDownSolid': '\uF533',
            'DrillExpand': '\uF534',
            'DrillShow': '\uF535',
            'SpecialEvent': '\uF536',
            'OneDriveFolder16': '\uF53B',
            'FunctionalManagerDashboard': '\uF542',
            'BIDashboard': '\uF543',
            'CodeEdit': '\uF544',
            'RenewalCurrent': '\uF545',
            'RenewalFuture': '\uF546',
            'SplitObject': '\uF547',
            'BulkUpload': '\uF548',
            'DownloadDocument': '\uF549',
            'GreetingCard': '\uF54B',
            'Flower': '\uF54E',
            'WaitlistConfirm': '\uF550',
            'WaitlistConfirmMirrored': '\uF551',
            'LaptopSecure': '\uF552',
            'DragObject': '\uF553',
            'EntryView': '\uF554',
            'EntryDecline': '\uF555',
            'ContactCardSettings': '\uF556',
            'ContactCardSettingsMirrored': '\uF557'
        }
    };
    (0,_fluentui_style_utilities__WEBPACK_IMPORTED_MODULE_0__.registerIcons)(subset, options);
}
//# sourceMappingURL=fabric-icons-14.js.map

/***/ }),
/* 269 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initializeIcons": () => (/* binding */ initializeIcons)
/* harmony export */ });
/* harmony import */ var _fluentui_style_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84);
// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fluentui-assets-license

function initializeIcons(baseUrl, options) {
    if (baseUrl === void 0) { baseUrl = ''; }
    var subset = {
        style: {
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            fontStyle: 'normal',
            fontWeight: 'normal',
            speak: 'none'
        },
        fontFace: {
            fontFamily: "\"FabricMDL2Icons-15\"",
            src: "url('" + baseUrl + "fabric-icons-15-3807251b.woff') format('woff')"
        },
        icons: {
            'CalendarSettings': '\uF558',
            'CalendarSettingsMirrored': '\uF559',
            'HardDriveLock': '\uF55A',
            'HardDriveUnlock': '\uF55B',
            'AccountManagement': '\uF55C',
            'ReportWarning': '\uF569',
            'TransitionPop': '\uF5B2',
            'TransitionPush': '\uF5B3',
            'TransitionEffect': '\uF5B4',
            'LookupEntities': '\uF5B5',
            'ExploreData': '\uF5B6',
            'AddBookmark': '\uF5B7',
            'SearchBookmark': '\uF5B8',
            'DrillThrough': '\uF5B9',
            'MasterDatabase': '\uF5BA',
            'CertifiedDatabase': '\uF5BB',
            'MaximumValue': '\uF5BC',
            'MinimumValue': '\uF5BD',
            'VisualStudioIDELogo32': '\uF5D0',
            'PasteAsText': '\uF5D5',
            'PasteAsCode': '\uF5D6',
            'BrowserTab': '\uF5D7',
            'BrowserTabScreenshot': '\uF5D8',
            'DesktopScreenshot': '\uF5D9',
            'FileYML': '\uF5DA',
            'ClipboardSolid': '\uF5DC',
            'FabricUserFolder': '\uF5E5',
            'FabricNetworkFolder': '\uF5E6',
            'BullseyeTarget': '\uF5F0',
            'AnalyticsView': '\uF5F1',
            'Video360Generic': '\uF609',
            'Untag': '\uF60B',
            'Leave': '\uF627',
            'Trending12': '\uF62D',
            'Blocked12': '\uF62E',
            'Warning12': '\uF62F',
            'CheckedOutByOther12': '\uF630',
            'CheckedOutByYou12': '\uF631',
            'CircleShapeSolid': '\uF63C',
            'SquareShapeSolid': '\uF63D',
            'TriangleShapeSolid': '\uF63E',
            'DropShapeSolid': '\uF63F',
            'RectangleShapeSolid': '\uF640',
            'ZoomToFit': '\uF649',
            'InsertColumnsLeft': '\uF64A',
            'InsertColumnsRight': '\uF64B',
            'InsertRowsAbove': '\uF64C',
            'InsertRowsBelow': '\uF64D',
            'DeleteColumns': '\uF64E',
            'DeleteRows': '\uF64F',
            'DeleteRowsMirrored': '\uF650',
            'DeleteTable': '\uF651',
            'AccountBrowser': '\uF652',
            'VersionControlPush': '\uF664',
            'StackedColumnChart2': '\uF666',
            'TripleColumnWide': '\uF66E',
            'QuadColumn': '\uF66F',
            'WhiteBoardApp16': '\uF673',
            'WhiteBoardApp32': '\uF674',
            'PinnedSolid': '\uF676',
            'InsertSignatureLine': '\uF677',
            'ArrangeByFrom': '\uF678',
            'Phishing': '\uF679',
            'CreateMailRule': '\uF67A',
            'PublishCourse': '\uF699',
            'DictionaryRemove': '\uF69A',
            'UserRemove': '\uF69B',
            'UserEvent': '\uF69C',
            'Encryption': '\uF69D',
            'PasswordField': '\uF6AA',
            'OpenInNewTab': '\uF6AB',
            'Hide3': '\uF6AC',
            'VerifiedBrandSolid': '\uF6AD',
            'MarkAsProtected': '\uF6AE',
            'AuthenticatorApp': '\uF6B1',
            'WebTemplate': '\uF6B2',
            'DefenderTVM': '\uF6B3',
            'MedalSolid': '\uF6B9',
            'D365TalentLearn': '\uF6BB',
            'D365TalentInsight': '\uF6BC',
            'D365TalentHRCore': '\uF6BD',
            'BacklogList': '\uF6BF',
            'ButtonControl': '\uF6C0',
            'TableGroup': '\uF6D9',
            'MountainClimbing': '\uF6DB',
            'TagUnknown': '\uF6DF',
            'TagUnknownMirror': '\uF6E0',
            'TagUnknown12': '\uF6E1',
            'TagUnknown12Mirror': '\uF6E2',
            'Link12': '\uF6E3',
            'Presentation': '\uF6E4',
            'Presentation12': '\uF6E5',
            'Lock12': '\uF6E6',
            'BuildDefinition': '\uF6E9',
            'ReleaseDefinition': '\uF6EA',
            'SaveTemplate': '\uF6EC',
            'UserGauge': '\uF6ED',
            'BlockedSiteSolid12': '\uF70A',
            'TagSolid': '\uF70E',
            'OfficeChat': '\uF70F'
        }
    };
    (0,_fluentui_style_utilities__WEBPACK_IMPORTED_MODULE_0__.registerIcons)(subset, options);
}
//# sourceMappingURL=fabric-icons-15.js.map

/***/ }),
/* 270 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initializeIcons": () => (/* binding */ initializeIcons)
/* harmony export */ });
/* harmony import */ var _fluentui_style_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84);
// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fluentui-assets-license

function initializeIcons(baseUrl, options) {
    if (baseUrl === void 0) { baseUrl = ''; }
    var subset = {
        style: {
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            fontStyle: 'normal',
            fontWeight: 'normal',
            speak: 'none'
        },
        fontFace: {
            fontFamily: "\"FabricMDL2Icons-16\"",
            src: "url('" + baseUrl + "fabric-icons-16-9cf93f3b.woff') format('woff')"
        },
        icons: {
            'OfficeChatSolid': '\uF710',
            'MailSchedule': '\uF72E',
            'WarningSolid': '\uF736',
            'Blocked2Solid': '\uF737',
            'SkypeCircleArrow': '\uF747',
            'SkypeArrow': '\uF748',
            'SyncStatus': '\uF751',
            'SyncStatusSolid': '\uF752',
            'ProjectDocument': '\uF759',
            'ToDoLogoOutline': '\uF75B',
            'VisioOnlineLogoFill32': '\uF75F',
            'VisioOnlineLogo32': '\uF760',
            'VisioOnlineLogoCloud32': '\uF761',
            'VisioDiagramSync': '\uF762',
            'Event12': '\uF763',
            'EventDateMissed12': '\uF764',
            'UserOptional': '\uF767',
            'ResponsesMenu': '\uF768',
            'DoubleDownArrow': '\uF769',
            'DistributeDown': '\uF76A',
            'BookmarkReport': '\uF76B',
            'FilterSettings': '\uF76C',
            'GripperDotsVertical': '\uF772',
            'MailAttached': '\uF774',
            'AddIn': '\uF775',
            'LinkedDatabase': '\uF779',
            'TableLink': '\uF77A',
            'PromotedDatabase': '\uF77D',
            'BarChartVerticalFilter': '\uF77E',
            'BarChartVerticalFilterSolid': '\uF77F',
            'MicOff2': '\uF781',
            'MicrosoftTranslatorLogo': '\uF782',
            'ShowTimeAs': '\uF787',
            'FileRequest': '\uF789',
            'WorkItemAlert': '\uF78F',
            'PowerBILogo16': '\uF790',
            'PowerBILogoBackplate16': '\uF791',
            'BulletedListText': '\uF792',
            'BulletedListBullet': '\uF793',
            'BulletedListTextMirrored': '\uF794',
            'BulletedListBulletMirrored': '\uF795',
            'NumberedListText': '\uF796',
            'NumberedListNumber': '\uF797',
            'NumberedListTextMirrored': '\uF798',
            'NumberedListNumberMirrored': '\uF799',
            'RemoveLinkChain': '\uF79A',
            'RemoveLinkX': '\uF79B',
            'FabricTextHighlight': '\uF79C',
            'ClearFormattingA': '\uF79D',
            'ClearFormattingEraser': '\uF79E',
            'Photo2Fill': '\uF79F',
            'IncreaseIndentText': '\uF7A0',
            'IncreaseIndentArrow': '\uF7A1',
            'DecreaseIndentText': '\uF7A2',
            'DecreaseIndentArrow': '\uF7A3',
            'IncreaseIndentTextMirrored': '\uF7A4',
            'IncreaseIndentArrowMirrored': '\uF7A5',
            'DecreaseIndentTextMirrored': '\uF7A6',
            'DecreaseIndentArrowMirrored': '\uF7A7',
            'CheckListText': '\uF7A8',
            'CheckListCheck': '\uF7A9',
            'CheckListTextMirrored': '\uF7AA',
            'CheckListCheckMirrored': '\uF7AB',
            'NumberSymbol': '\uF7AC',
            'Coupon': '\uF7BC',
            'VerifiedBrand': '\uF7BD',
            'ReleaseGate': '\uF7BE',
            'ReleaseGateCheck': '\uF7BF',
            'ReleaseGateError': '\uF7C0',
            'M365InvoicingLogo': '\uF7C1',
            'RemoveFromShoppingList': '\uF7D5',
            'ShieldAlert': '\uF7D7',
            'FabricTextHighlightComposite': '\uF7DA',
            'Dataflows': '\uF7DD',
            'GenericScanFilled': '\uF7DE',
            'DiagnosticDataBarTooltip': '\uF7DF',
            'SaveToMobile': '\uF7E0',
            'Orientation2': '\uF7E1',
            'ScreenCast': '\uF7E2',
            'ShowGrid': '\uF7E3',
            'SnapToGrid': '\uF7E4',
            'ContactList': '\uF7E5',
            'NewMail': '\uF7EA',
            'EyeShadow': '\uF7EB',
            'FabricFolderConfirm': '\uF7FF',
            'InformationBarriers': '\uF803',
            'CommentActive': '\uF804',
            'ColumnVerticalSectionEdit': '\uF806',
            'WavingHand': '\uF807',
            'ShakeDevice': '\uF80A',
            'SmartGlassRemote': '\uF80B',
            'Rotate90Clockwise': '\uF80D',
            'Rotate90CounterClockwise': '\uF80E',
            'CampaignTemplate': '\uF811',
            'ChartTemplate': '\uF812',
            'PageListFilter': '\uF813',
            'SecondaryNav': '\uF814',
            'ColumnVerticalSection': '\uF81E',
            'SkypeCircleSlash': '\uF825',
            'SkypeSlash': '\uF826'
        }
    };
    (0,_fluentui_style_utilities__WEBPACK_IMPORTED_MODULE_0__.registerIcons)(subset, options);
}
//# sourceMappingURL=fabric-icons-16.js.map

/***/ }),
/* 271 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initializeIcons": () => (/* binding */ initializeIcons)
/* harmony export */ });
/* harmony import */ var _fluentui_style_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84);
// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fluentui-assets-license

function initializeIcons(baseUrl, options) {
    if (baseUrl === void 0) { baseUrl = ''; }
    var subset = {
        style: {
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            fontStyle: 'normal',
            fontWeight: 'normal',
            speak: 'none'
        },
        fontFace: {
            fontFamily: "\"FabricMDL2Icons-17\"",
            src: "url('" + baseUrl + "fabric-icons-17-0c4ed701.woff') format('woff')"
        },
        icons: {
            'CustomizeToolbar': '\uF828',
            'DuplicateRow': '\uF82A',
            'RemoveFromTrash': '\uF82B',
            'MailOptions': '\uF82C',
            'Childof': '\uF82D',
            'Footer': '\uF82E',
            'Header': '\uF82F',
            'BarChartVerticalFill': '\uF830',
            'StackedColumnChart2Fill': '\uF831',
            'PlainText': '\uF834',
            'AccessibiltyChecker': '\uF835',
            'DatabaseSync': '\uF842',
            'ReservationOrders': '\uF845',
            'TabOneColumn': '\uF849',
            'TabTwoColumn': '\uF84A',
            'TabThreeColumn': '\uF84B',
            'BulletedTreeList': '\uF84C',
            'MicrosoftTranslatorLogoGreen': '\uF852',
            'MicrosoftTranslatorLogoBlue': '\uF853',
            'InternalInvestigation': '\uF854',
            'AddReaction': '\uF85D',
            'ContactHeart': '\uF862',
            'VisuallyImpaired': '\uF866',
            'EventToDoLogo': '\uF869',
            'Variable2': '\uF86D',
            'ModelingView': '\uF871',
            'DisconnectVirtualMachine': '\uF873',
            'ReportLock': '\uF875',
            'Uneditable2': '\uF876',
            'Uneditable2Mirrored': '\uF877',
            'BarChartVerticalEdit': '\uF89D',
            'GlobalNavButtonActive': '\uF89F',
            'PollResults': '\uF8A0',
            'Rerun': '\uF8A1',
            'QandA': '\uF8A2',
            'QandAMirror': '\uF8A3',
            'BookAnswers': '\uF8A4',
            'AlertSettings': '\uF8B6',
            'TrimStart': '\uF8BB',
            'TrimEnd': '\uF8BC',
            'TableComputed': '\uF8F5',
            'DecreaseIndentLegacy': '\uE290',
            'IncreaseIndentLegacy': '\uE291',
            'SizeLegacy': '\uE2B2'
        }
    };
    (0,_fluentui_style_utilities__WEBPACK_IMPORTED_MODULE_0__.registerIcons)(subset, options);
}
//# sourceMappingURL=fabric-icons-17.js.map

/***/ }),
/* 272 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerIconAliases": () => (/* binding */ registerIconAliases),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fluentui_style_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84);

var registerIconAliases = function () {
    (0,_fluentui_style_utilities__WEBPACK_IMPORTED_MODULE_0__.registerIconAlias)('trash', 'delete');
    (0,_fluentui_style_utilities__WEBPACK_IMPORTED_MODULE_0__.registerIconAlias)('onedrive', 'onedrivelogo');
    (0,_fluentui_style_utilities__WEBPACK_IMPORTED_MODULE_0__.registerIconAlias)('alertsolid12', 'eventdatemissed12');
    (0,_fluentui_style_utilities__WEBPACK_IMPORTED_MODULE_0__.registerIconAlias)('sixpointstar', '6pointstar');
    (0,_fluentui_style_utilities__WEBPACK_IMPORTED_MODULE_0__.registerIconAlias)('twelvepointstar', '12pointstar');
    (0,_fluentui_style_utilities__WEBPACK_IMPORTED_MODULE_0__.registerIconAlias)('toggleon', 'toggleleft');
    (0,_fluentui_style_utilities__WEBPACK_IMPORTED_MODULE_0__.registerIconAlias)('toggleoff', 'toggleright');
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (registerIconAliases);
//# sourceMappingURL=iconAliases.js.map

/***/ }),
/* 273 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fluentui_set_version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(128);
// Do not modify this file; it is generated as part of publish.
// The checked in version is a placeholder only and will not be updated.

(0,_fluentui_set_version__WEBPACK_IMPORTED_MODULE_0__.setVersion)('@fluentui/font-icons-mdl2', '8.1.8');
//# sourceMappingURL=version.js.map

/***/ })
]]);
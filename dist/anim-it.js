(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["AnimIt"] = factory();
	else
		root["AnimIt"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
	                                                                                                                                                                                                                                                                   * Created by b1ncer on 16/8/3.
	                                                                                                                                                                                                                                                                   */


	var _easing = __webpack_require__(2);

	var Easing = _interopRequireWildcard(_easing);

	var _coreTweens = __webpack_require__(3);

	var Tween = _interopRequireWildcard(_coreTweens);

	var _animation = __webpack_require__(4);

	var Animation = _interopRequireWildcard(_animation);

	var _index = __webpack_require__(5);

	var Extra = _interopRequireWildcard(_index);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	module.exports = function (options) {
	    var animFn = void 0;
	    var curve = options.curve;
	    if (curve instanceof String) {
	        curve = Easing[curve];
	    }
	    if (options.tween) {
	        animFn = Animation.anim(options);
	    } else {
	        if (options.target) {
	            animFn = Animation.anim(_extends({
	                tween: Tween.tweenReference({
	                    target: options.target,
	                    setter: options.setter
	                })
	            }, options));
	        } else {
	            animFn = Animation.anim(_extends({
	                tween: Array.isArray(options.to) ? Tween.tweenArray({
	                    from: options.from,
	                    to: options.to,
	                    curve: curve
	                }) : Tween.tweenNumber({
	                    from: options.from,
	                    to: options.to,
	                    curve: curve
	                })
	            }, options));
	        }
	    }
	    return animFn;
	};

	module.exports = Object.assign(module.exports, _extends({
	    animation: Animation.anim
	}, Tween, Easing, {
	    Extra: Extra
	}));

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * Created by b1ncer on 16/7/4.
	 */
	var linear = exports.linear = function linear(t) {
	    return t;
	};

	var inQuad = exports.inQuad = function inQuad(t) {
	    return t * t;
	};

	var outQuad = exports.outQuad = function outQuad(t) {
	    return -(t -= 1) * t + 1;
	};

	var inOutQuad = exports.inOutQuad = function inOutQuad(t) {
	    if ((t /= .5) < 1) return .5 * t * t;
	    return -.5 * (--t * (t - 2) - 1);
	};

	var inCubic = exports.inCubic = function inCubic(t) {
	    return t * t * t;
	};

	var outCubic = exports.outCubic = function outCubic(t) {
	    return --t * t * t + 1;
	};

	var inOutCubic = exports.inOutCubic = function inOutCubic(t) {
	    if ((t /= .5) < 1) return .5 * t * t * t;
	    return .5 * ((t -= 2) * t * t + 2);
	};

	var inQuart = exports.inQuart = function inQuart(t) {
	    return t * t * t * t;
	};

	var outQuart = exports.outQuart = function outQuart(t) {
	    return -(--t * t * t * t - 1);
	};

	var inOutQuart = exports.inOutQuart = function inOutQuart(t) {
	    if ((t /= .5) < 1) return .5 * t * t * t * t;
	    return -.5 * ((t -= 2) * t * t * t - 2);
	};

	var inQuint = exports.inQuint = function inQuint(t) {
	    return t * t * t * t * t;
	};

	var outQuint = exports.outQuint = function outQuint(t) {
	    return --t * t * t * t * t + 1;
	};

	var inOutQuint = exports.inOutQuint = function inOutQuint(t) {
	    if ((t /= .5) < 1) return .5 * t * t * t * t * t;
	    return .5 * ((t -= 2) * t * t * t * t + 2);
	};

	var inSine = exports.inSine = function inSine(t) {
	    return -1.0 * Math.cos(t * (Math.PI / 2)) + 1.0;
	};

	var outSine = exports.outSine = function outSine(t) {
	    return Math.sin(t * (Math.PI / 2));
	};

	var inOutSine = exports.inOutSine = function inOutSine(t) {
	    return -.5 * (Math.cos(Math.PI * t) - 1);
	};

	var inExpo = exports.inExpo = function inExpo(t) {
	    return t === 0 ? 0.0 : Math.pow(2, 10 * (t - 1));
	};

	var outExpo = exports.outExpo = function outExpo(t) {
	    return t === 1.0 ? 1.0 : -Math.pow(2, -10 * t) + 1;
	};

	var inOutExpo = exports.inOutExpo = function inOutExpo(t) {
	    if (t === 0) return 0.0;
	    if (t === 1.0) return 1.0;
	    if ((t /= .5) < 1) return .5 * Math.pow(2, 10 * (t - 1));
	    return .5 * (-Math.pow(2, -10 * --t) + 2);
	};

	var inCirc = exports.inCirc = function inCirc(t) {
	    return -(Math.sqrt(1 - t * t) - 1);
	};

	var outCirc = exports.outCirc = function outCirc(t) {
	    return Math.sqrt(1 - --t * t);
	};

	var inOutCirc = exports.inOutCirc = function inOutCirc(t) {
	    if ((t /= .5) < 1) return -.5 * (Math.sqrt(1 - t * t) - 1);
	    return .5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
	};

	var inElastic = exports.inElastic = function inElastic(t) {
	    var s = 1.70158;var p = 0;var a = 1.0;
	    if (t === 0) return 0.0;if (t === 1) return 1.0;if (!p) p = .3;
	    s = p / (2 * Math.PI) * Math.asin(1.0 / a);
	    return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * (2 * Math.PI) / p));
	};

	var outElastic = exports.outElastic = function outElastic(t) {
	    var s = 1.70158;var p = 0;var a = 1.0;
	    if (t === 0) return 0.0;if (t === 1) return 1.0;if (!p) p = .3;
	    s = p / (2 * Math.PI) * Math.asin(1.0 / a);
	    return a * Math.pow(2, -10 * t) * Math.sin((t - s) * (2 * Math.PI) / p) + 1.0;
	};

	var inOutElastic = exports.inOutElastic = function inOutElastic(t) {
	    var s = 1.70158;var p = 0;var a = 1.0;
	    if (t === 0) return 0.0;if ((t /= .5) === 2) return 1.0;if (!p) p = .3 * 1.5;
	    s = p / (2 * Math.PI) * Math.asin(1.0 / a);
	    if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * (2 * Math.PI) / p));
	    return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - s) * (2 * Math.PI) / p) * .5 + 1.0;
	};

	var inBack = exports.inBack = function inBack(t, s) {
	    if (s === undefined) s = 1.70158;
	    return t * t * ((s + 1) * t - s);
	};

	var outBack = exports.outBack = function outBack(t, s) {
	    if (s === undefined) s = 1.70158;
	    return --t * t * ((s + 1) * t + s) + 1;
	};

	var inOutBack = exports.inOutBack = function inOutBack(t, s) {
	    if (s === undefined) s = 1.70158;
	    if ((t /= .5) < 1) return .5 * (t * t * (((s *= 1.525) + 1) * t - s));
	    return .5 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2);
	};

	var inBounce = exports.inBounce = function inBounce(t) {
	    return 1.0 - outBounce(1.0 - t);
	};

	var outBounce = exports.outBounce = function outBounce(t) {
	    if (t < 1 / 2.75) {
	        return 7.5625 * t * t;
	    } else if (t < 2 / 2.75) {
	        return 7.5625 * (t -= 1.5 / 2.75) * t + .75;
	    } else if (t < 2.5 / 2.75) {
	        return 7.5625 * (t -= 2.25 / 2.75) * t + .9375;
	    } else {
	        return 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
	    }
	};

	var inOutBounce = exports.inOutBounce = function inOutBounce(t) {
	    if (t < .5) return inBounce(t * 2) * .5;
	    return outBounce(t * 2 - 1.0) * .5 + .5;
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * Created by b1ncer on 16/7/5.
	 */
	var linear = function linear(t) {
	    return t;
	};

	var tweenNumber = exports.tweenNumber = function tweenNumber(options) {
	    var from = options.from;
	    var to = options.to;
	    var curve = options.curve || linear;
	    return function (progress) {
	        return curve(progress) * (to - from) + from;
	    };
	};

	var tweenArray = exports.tweenArray = function tweenArray(options) {
	    var from = options.from;
	    var to = options.to;
	    var curve = options.curve || linear;
	    return function (progress) {
	        var res = [];
	        for (var i = 0, j = from.length; i < j; i++) {
	            res[i] = curve(progress) * (to[i] - from[i]) + from[i];
	        }
	        return res;
	    };
	};

	var tweenReference = exports.tweenReference = function tweenReference(options) {
	    var target = options.target;
	    var setter = options.setter;
	    var visit = function visit(setter, target) {
	        var fns = [];

	        var _loop = function _loop(key) {
	            if (setter[key] instanceof Function) {
	                fns.push(function (progress) {
	                    target[key] = setter[key](progress);
	                });
	            } else {
	                fns = fns.concat(visit(setter[key], target[key]));
	            }
	        };

	        for (var key in setter) {
	            _loop(key);
	        }
	        return fns;
	    };
	    var fns = visit(setter, target);
	    return function (progress) {
	        fns.forEach(function (fn) {
	            fn(progress);
	        });
	        return target;
	    };
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * Created by b1ncer on 16/8/2.
	 */
	var tick = exports.tick = function tick(duration, fn, complete, start, stop) {
	    var isStop = false;

	    function runner(whenBegin) {
	        fn(whenBegin);
	        var now = new Date().getTime();
	        if (isStop) {
	            if (stop) {
	                stop(isStop);
	            }
	        } else if (now < whenBegin + duration) {
	            requestAnimationFrame(runner.bind(null, whenBegin));
	        } else {
	            if (complete) {
	                complete();
	            }
	        }
	    }

	    var tickFn = function tickFn() {
	        var begin = new Date().getTime();
	        if (start) {
	            start();
	        }
	        requestAnimationFrame(runner.bind(null, begin));
	    };

	    tickFn.stop = function () {
	        var reason = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

	        isStop = reason;
	    };

	    return tickFn;
	};

	var anim = exports.anim = function anim(options) {
	    var duration = options.duration;
	    var delay = options.delay;
	    var tween = options.tween;
	    var onStart = options.onStart;
	    var onUpdate = options.onUpdate;
	    var onComplete = options.onComplete;
	    var onStop = options.onStop;
	    var animFn = void 0;

	    var inPromise = function inPromise(resolve, reject) {
	        animFn = tick(duration, function (whenBegin) {
	            var now = new Date().getTime();
	            var progress = duration ? (now - whenBegin) / duration : 1;
	            progress = progress > 1 ? 1 : progress;
	            var value = tween(progress);
	            if (onUpdate) {
	                onUpdate(value, progress);
	            }
	        }, onComplete || resolve, onStart, onStop || reject);

	        if (delay) {
	            setTimeout(animFn, delay);
	        } else {
	            animFn();
	        }
	    };

	    var fn = function fn() {
	        return new Promise(inPromise);
	    };

	    fn.stop = function (reason) {
	        animFn.stop(reason);
	    };

	    return fn;
	};

	exports.default = anim;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.TweenCSSTransform = exports.TweenConcatStr = undefined;

	var _TweenConcatStr = __webpack_require__(6);

	var _TweenConcatStr2 = _interopRequireDefault(_TweenConcatStr);

	var _TweenCSSTransform = __webpack_require__(7);

	var TweenCSSTransform = _interopRequireWildcard(_TweenCSSTransform);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Created by b1ncer on 16/8/5.
	 */
	exports.TweenConcatStr = _TweenConcatStr2.default;
	exports.TweenCSSTransform = TweenCSSTransform;

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * Created by b1ncer on 16/8/5.
	 */
	var tweenConcatStr = exports.tweenConcatStr = function tweenConcatStr(options) {
	    var str = options.str;
	    var curve = options.curve || function (t) {
	        return t;
	    };
	    return function (progress) {
	        progress = curve(progress);
	        progress = progress > 1 ? 1 : progress;
	        progress = progress < 0 ? 0 : progress;
	        return str.slice(0, Math.round(str.length * progress));
	    };
	};

	exports.default = tweenConcatStr;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.tweenCSSTransform = exports.interpret = exports.inputCSSMatrix = undefined;

	var _coreTweens = __webpack_require__(3);

	var _Transform = __webpack_require__(8);

	/**
	 * Created by b1ncer on 16/8/5.
	 */
	exports.inputCSSMatrix = _Transform.inputCSSMatrix;
	exports.interpret = _Transform.interpret;
	var tweenCSSTransform = exports.tweenCSSTransform = function tweenCSSTransform(options) {
	    var from = Object.assign({
	        translate: [0, 0, 0],
	        rotate: [0, 0, 0],
	        skew: [0, 0, 0],
	        scale: [1, 1, 1]
	    }, options.from);
	    var to = Object.assign({}, options.to);
	    var curve = options.curve || function (t) {
	        return t;
	    };
	    var getter = {};
	    for (var key in to) {
	        getter[key] = (0, _coreTweens.tweenArray)({
	            from: from[key],
	            to: to[key],
	            curve: curve
	        });
	    }
	    return function (progress) {
	        var res = {};
	        for (var _key in getter) {
	            res[_key] = getter[_key](progress);
	        }
	        return (0, _Transform.outputCSSMatrix)((0, _Transform.build)(Object.assign({}, from, res)));
	    };
	};

	exports.default = tweenCSSTransform;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.inputCSSMatrix = exports.outputCSSMatrix = exports.identity = exports.precision = exports.behind = exports.inFront = exports.normalizeRotation = exports.notEquals = exports.equals = exports.build = exports.average = exports.interpret = exports.transpose = exports.inverse = exports.getTranslate = exports.perspective = exports.skewY = exports.skewX = exports.skew = exports.aboutOrigin = exports.rotateAxis = exports.rotate = exports.rotateZ = exports.rotateY = exports.rotateX = exports.scale = exports.thenScale = exports.translate = exports.moveThen = exports.thenMove = exports.multiply = exports.multiply4x4 = undefined;

	var _xcssmatrix = __webpack_require__(9);

	var _xcssmatrix2 = _interopRequireDefault(_xcssmatrix);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Multiply two or more Transform matrix types to return a Transform matrix.
	 *
	 * @method multiply4x4
	 * @static
	 * @param {Transform} a left Transform
	 * @param {Transform} b right Transform
	 * @return {Transform}
	 */
	var multiply4x4 = exports.multiply4x4 = function multiply4x4(a, b) {
	    return [a[0] * b[0] + a[4] * b[1] + a[8] * b[2] + a[12] * b[3], a[1] * b[0] + a[5] * b[1] + a[9] * b[2] + a[13] * b[3], a[2] * b[0] + a[6] * b[1] + a[10] * b[2] + a[14] * b[3], a[3] * b[0] + a[7] * b[1] + a[11] * b[2] + a[15] * b[3], a[0] * b[4] + a[4] * b[5] + a[8] * b[6] + a[12] * b[7], a[1] * b[4] + a[5] * b[5] + a[9] * b[6] + a[13] * b[7], a[2] * b[4] + a[6] * b[5] + a[10] * b[6] + a[14] * b[7], a[3] * b[4] + a[7] * b[5] + a[11] * b[6] + a[15] * b[7], a[0] * b[8] + a[4] * b[9] + a[8] * b[10] + a[12] * b[11], a[1] * b[8] + a[5] * b[9] + a[9] * b[10] + a[13] * b[11], a[2] * b[8] + a[6] * b[9] + a[10] * b[10] + a[14] * b[11], a[3] * b[8] + a[7] * b[9] + a[11] * b[10] + a[15] * b[11], a[0] * b[12] + a[4] * b[13] + a[8] * b[14] + a[12] * b[15], a[1] * b[12] + a[5] * b[13] + a[9] * b[14] + a[13] * b[15], a[2] * b[12] + a[6] * b[13] + a[10] * b[14] + a[14] * b[15], a[3] * b[12] + a[7] * b[13] + a[11] * b[14] + a[15] * b[15]];
	};

	/**
	 * Multiply two or more Transform matrix types to return a Transform matrix.
	 *
	 * @method multiply4x4
	 * @static
	 * @param {Transform} a left Transform
	 * @param {Transform} b right Transform
	 * @return {Transform}
	 */
	/**
	 * chenyutong@baixing.com
	 */
	var multiply = exports.multiply = function multiply(a, b) {
	    return [a[0] * b[0] + a[4] * b[1] + a[8] * b[2], a[1] * b[0] + a[5] * b[1] + a[9] * b[2], a[2] * b[0] + a[6] * b[1] + a[10] * b[2], 0, a[0] * b[4] + a[4] * b[5] + a[8] * b[6], a[1] * b[4] + a[5] * b[5] + a[9] * b[6], a[2] * b[4] + a[6] * b[5] + a[10] * b[6], 0, a[0] * b[8] + a[4] * b[9] + a[8] * b[10], a[1] * b[8] + a[5] * b[9] + a[9] * b[10], a[2] * b[8] + a[6] * b[9] + a[10] * b[10], 0, a[0] * b[12] + a[4] * b[13] + a[8] * b[14] + a[12], a[1] * b[12] + a[5] * b[13] + a[9] * b[14] + a[13], a[2] * b[12] + a[6] * b[13] + a[10] * b[14] + a[14], 1];
	};

	/**
	 * Return a Transform translated by additional amounts in each
	 *    dimension. This is equivalent to the result of
	 *
	 *    Transform.multiply(Matrix.translate(t[0], t[1], t[2]), m).
	 *
	 * @method thenMove
	 * @static
	 * @param {Transform} m a Transform
	 * @param {Array.Number} t floats delta vector of length 2 or 3
	 * @return {Transform}
	 */
	var thenMove = exports.thenMove = function thenMove(m, t) {
	    if (!t[2]) t[2] = 0;
	    return [m[0], m[1], m[2], 0, m[4], m[5], m[6], 0, m[8], m[9], m[10], 0, m[12] + t[0], m[13] + t[1], m[14] + t[2], 1];
	};

	/**
	 * Return a Transform matrix which represents the result of a transform matrix
	 *    applied after a move. This is faster than the equivalent multiply.
	 *    This is equivalent to the result of:
	 *
	 *    Transform.multiply(m, Transform.translate(t[0], t[1], t[2])).
	 *
	 * @method moveThen
	 * @static
	 * @param {Array.Number} v vector representing initial movement
	 * @param {Transform} m matrix to apply afterwards
	 * @return {Transform} the resulting matrix
	 */
	var moveThen = exports.moveThen = function moveThen(v, m) {
	    if (!v[2]) v[2] = 0;
	    var t0 = v[0] * m[0] + v[1] * m[4] + v[2] * m[8];
	    var t1 = v[0] * m[1] + v[1] * m[5] + v[2] * m[9];
	    var t2 = v[0] * m[2] + v[1] * m[6] + v[2] * m[10];
	    return thenMove(m, [t0, t1, t2]);
	};

	/**
	 * Return a Transform which represents a translation by specified
	 *    amounts in each dimension.
	 *
	 * @method translate
	 * @static
	 * @param {Number} x x translation
	 * @param {Number} y y translation
	 * @param {Number} z z translation
	 * @return {Transform}
	 */
	var translate = exports.translate = function translate(x, y, z) {
	    if (z === undefined) z = 0;
	    return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, x, y, z, 1];
	};

	/**
	 * Return a Transform scaled by a vector in each
	 *    dimension. This is a more performant equivalent to the result of
	 *
	 *    multiply(scale(s[0], s[1], s[2]), m).
	 *
	 * @method thenScale
	 * @static
	 * @param {Transform} m a matrix
	 * @param {Array.Number} s delta vector (array of floats &&
	 *    array.length == 3)
	 * @return {Transform}
	 */
	var thenScale = exports.thenScale = function thenScale(m, s) {
	    return [s[0] * m[0], s[1] * m[1], s[2] * m[2], 0, s[0] * m[4], s[1] * m[5], s[2] * m[6], 0, s[0] * m[8], s[1] * m[9], s[2] * m[10], 0, s[0] * m[12], s[1] * m[13], s[2] * m[14], 1];
	};

	/**
	 * Return a Transform which represents a scale by specified amounts
	 *    in each dimension.
	 *
	 * @method scale
	 * @static
	 * @param {Number} x x scale factor
	 * @param {Number} y y scale factor
	 * @param {Number} z z scale factor
	 * @return {Transform}
	 */
	var scale = exports.scale = function scale(x, y, z) {
	    if (z === undefined) z = 1;
	    if (y === undefined) y = x;
	    return [x, 0, 0, 0, 0, y, 0, 0, 0, 0, z, 0, 0, 0, 0, 1];
	};

	/**
	 * Return a Transform which represents a clockwise
	 *    rotation around the x axis.
	 *
	 * @method rotateX
	 * @static
	 * @param {Number} theta radians
	 * @return {Transform}
	 */
	var rotateX = exports.rotateX = function rotateX(theta) {
	    var cosTheta = Math.cos(theta);
	    var sinTheta = Math.sin(theta);
	    return [1, 0, 0, 0, 0, cosTheta, sinTheta, 0, 0, -sinTheta, cosTheta, 0, 0, 0, 0, 1];
	};

	/**
	 * Return a Transform which represents a clockwise
	 *    rotation around the y axis.
	 *
	 * @method rotateY
	 * @static
	 * @param {Number} theta radians
	 * @return {Transform}
	 */
	var rotateY = exports.rotateY = function rotateY(theta) {
	    var cosTheta = Math.cos(theta);
	    var sinTheta = Math.sin(theta);
	    return [cosTheta, 0, -sinTheta, 0, 0, 1, 0, 0, sinTheta, 0, cosTheta, 0, 0, 0, 0, 1];
	};

	/**
	 * Return a Transform which represents a clockwise
	 *    rotation around the z axis.
	 *
	 * @method rotateZ
	 * @static
	 * @param {Number} theta radians
	 * @return {Transform}
	 */
	var rotateZ = exports.rotateZ = function rotateZ(theta) {
	    var cosTheta = Math.cos(theta);
	    var sinTheta = Math.sin(theta);
	    return [cosTheta, sinTheta, 0, 0, -sinTheta, cosTheta, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
	};

	/**
	 * Return a Transform which represents composed clockwise
	 *    rotations along each of the axes. Equivalent to the result of
	 *    Matrix.multiply(rotateX(phi), rotateY(theta), rotateZ(psi)).
	 *
	 * @method rotate
	 * @static
	 * @param {Number} phi radians to rotate about the positive x axis
	 * @param {Number} theta radians to rotate about the positive y axis
	 * @param {Number} psi radians to rotate about the positive z axis
	 * @return {Transform}
	 */
	var rotate = exports.rotate = function rotate(phi, theta, psi) {
	    var cosPhi = Math.cos(phi);
	    var sinPhi = Math.sin(phi);
	    var cosTheta = Math.cos(theta);
	    var sinTheta = Math.sin(theta);
	    var cosPsi = Math.cos(psi);
	    var sinPsi = Math.sin(psi);
	    return [cosTheta * cosPsi, cosPhi * sinPsi + sinPhi * sinTheta * cosPsi, sinPhi * sinPsi - cosPhi * sinTheta * cosPsi, 0, -cosTheta * sinPsi, cosPhi * cosPsi - sinPhi * sinTheta * sinPsi, sinPhi * cosPsi + cosPhi * sinTheta * sinPsi, 0, sinTheta, -sinPhi * cosTheta, cosPhi * cosTheta, 0, 0, 0, 0, 1];
	};

	/**
	 * Return a Transform which represents an axis-angle rotation
	 *
	 * @method rotateAxis
	 * @static
	 * @param {Array.Number} v unit vector representing the axis to rotate about
	 * @param {Number} theta radians to rotate clockwise about the axis
	 * @return {Transform}
	 */
	var rotateAxis = exports.rotateAxis = function rotateAxis(v, theta) {
	    var sinTheta = Math.sin(theta);
	    var cosTheta = Math.cos(theta);
	    var verTheta = 1 - cosTheta; // versine of theta

	    var xxV = v[0] * v[0] * verTheta;
	    var xyV = v[0] * v[1] * verTheta;
	    var xzV = v[0] * v[2] * verTheta;
	    var yyV = v[1] * v[1] * verTheta;
	    var yzV = v[1] * v[2] * verTheta;
	    var zzV = v[2] * v[2] * verTheta;
	    var xs = v[0] * sinTheta;
	    var ys = v[1] * sinTheta;
	    var zs = v[2] * sinTheta;

	    return [xxV + cosTheta, xyV + zs, xzV - ys, 0, xyV - zs, yyV + cosTheta, yzV + xs, 0, xzV + ys, yzV - xs, zzV + cosTheta, 0, 0, 0, 0, 1];
	};

	/**
	 * Return a Transform which represents a transform matrix applied about
	 * a separate origin point.
	 *
	 * @method aboutOrigin
	 * @static
	 * @param {Array.Number} v origin point to apply matrix
	 * @param {Transform} m matrix to apply
	 * @return {Transform}
	 */
	var aboutOrigin = exports.aboutOrigin = function aboutOrigin(v, m) {
	    var t0 = v[0] - (v[0] * m[0] + v[1] * m[4] + v[2] * m[8]);
	    var t1 = v[1] - (v[0] * m[1] + v[1] * m[5] + v[2] * m[9]);
	    var t2 = v[2] - (v[0] * m[2] + v[1] * m[6] + v[2] * m[10]);
	    return thenMove(m, [t0, t1, t2]);
	};

	/**
	 * Return a Transform representation of a skew transformation
	 *
	 * @method skew
	 * @static
	 * @param {Number} phi scale factor skew in the x axis
	 * @param {Number} theta scale factor skew in the y axis
	 * @param {Number} psi scale factor skew in the z axis
	 * @return {Transform}
	 */
	var skew = exports.skew = function skew(phi, theta, psi) {
	    return [1, Math.tan(theta), 0, 0, Math.tan(psi), 1, 0, 0, 0, Math.tan(phi), 1, 0, 0, 0, 0, 1];
	};

	/**
	 * Return a Transform representation of a skew in the x-direction
	 *
	 * @method skewX
	 * @static
	 * @param {Number} angle the angle between the top and left sides
	 * @return {Transform}
	 */
	var skewX = exports.skewX = function skewX(angle) {
	    return [1, 0, 0, 0, Math.tan(angle), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
	};

	/**
	 * Return a Transform representation of a skew in the y-direction
	 *
	 * @method skewY
	 * @static
	 * @param {Number} angle the angle between the top and right sides
	 * @return {Transform}
	 */
	var skewY = exports.skewY = function skewY(angle) {
	    return [1, Math.tan(angle), 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
	};

	/**
	 * Returns a perspective Transform matrix
	 *
	 * @method perspective
	 * @static
	 * @param {Number} focusZ z position of focal point
	 * @return {Transform}
	 */
	var perspective = exports.perspective = function perspective(focusZ) {
	    return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, -1 / focusZ, 0, 0, 0, 1];
	};

	/**
	 * Return translation vector component of given Transform
	 *
	 * @method getTranslate
	 * @static
	 * @param {Transform} m Transform
	 * @return {Array.Number} the translation vector [t_x, t_y, t_z]
	 */
	var getTranslate = exports.getTranslate = function getTranslate(m) {
	    return [m[12], m[13], m[14]];
	};

	/**
	 * Return inverse affine transform for given Transform.
	 *   Note: This assumes m[3] = m[7] = m[11] = 0, and m[15] = 1.
	 *   Will provide incorrect results if not invertible or preconditions not met.
	 *
	 * @method inverse
	 * @static
	 * @param {Transform} m Transform
	 * @return {Transform}
	 */
	var inverse = exports.inverse = function inverse(m) {
	    // only need to consider 3x3 section for affine
	    var c0 = m[5] * m[10] - m[6] * m[9];
	    var c1 = m[4] * m[10] - m[6] * m[8];
	    var c2 = m[4] * m[9] - m[5] * m[8];
	    var c4 = m[1] * m[10] - m[2] * m[9];
	    var c5 = m[0] * m[10] - m[2] * m[8];
	    var c6 = m[0] * m[9] - m[1] * m[8];
	    var c8 = m[1] * m[6] - m[2] * m[5];
	    var c9 = m[0] * m[6] - m[2] * m[4];
	    var c10 = m[0] * m[5] - m[1] * m[4];
	    var detM = m[0] * c0 - m[1] * c1 + m[2] * c2;
	    var invD = 1 / detM;
	    var result = [invD * c0, -invD * c4, invD * c8, 0, -invD * c1, invD * c5, -invD * c9, 0, invD * c2, -invD * c6, invD * c10, 0, 0, 0, 0, 1];
	    result[12] = -m[12] * result[0] - m[13] * result[4] - m[14] * result[8];
	    result[13] = -m[12] * result[1] - m[13] * result[5] - m[14] * result[9];
	    result[14] = -m[12] * result[2] - m[13] * result[6] - m[14] * result[10];
	    return result;
	};

	/**
	 * Returns the transpose of a 4x4 matrix
	 *
	 * @method transpose
	 * @static
	 * @param {Transform} m matrix
	 * @return {Transform} the resulting transposed matrix
	 */
	var transpose = exports.transpose = function transpose(m) {
	    return [m[0], m[4], m[8], m[12], m[1], m[5], m[9], m[13], m[2], m[6], m[10], m[14], m[3], m[7], m[11], m[15]];
	};

	/**
	 * Decompose Transform into separate .translate, .rotate, .scale,
	 *    and .skew components.
	 *
	 * @method interpret
	 * @static
	 * @param {Transform} M transform matrix
	 * @return {Object} matrix spec object with component matrices .translate,
	 *    .rotate, .scale, .skew
	 */
	var interpret = exports.interpret = function interpret(m) {

	    // QR decomposition via Householder reflections
	    //FIRST ITERATION

	    //default Q1 to the identity matrix;
	    var x = [M[0], M[1], M[2]]; // first column vector
	    var sgn = _sign(x[0]); // sign of first component of x (for stability)
	    var xNorm = _norm(x); // norm of first column vector
	    var v = [x[0] + sgn * xNorm, x[1], x[2]]; // v = x + sign(x[0])|x|e1
	    var mult = 2 / _normSquared(v); // mult = 2/v'v

	    //bail out if our Matrix is singular
	    if (mult >= Infinity) {
	        return { translate: getTranslate(M), rotate: [0, 0, 0], scale: [0, 0, 0], skew: [0, 0, 0] };
	    }

	    //evaluate Q1 = I - 2vv'/v'v
	    var Q1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];

	    //diagonals
	    Q1[0] = 1 - mult * v[0] * v[0]; // 0,0 entry
	    Q1[5] = 1 - mult * v[1] * v[1]; // 1,1 entry
	    Q1[10] = 1 - mult * v[2] * v[2]; // 2,2 entry

	    //upper diagonal
	    Q1[1] = -mult * v[0] * v[1]; // 0,1 entry
	    Q1[2] = -mult * v[0] * v[2]; // 0,2 entry
	    Q1[6] = -mult * v[1] * v[2]; // 1,2 entry

	    //lower diagonal
	    Q1[4] = Q1[1]; // 1,0 entry
	    Q1[8] = Q1[2]; // 2,0 entry
	    Q1[9] = Q1[6]; // 2,1 entry

	    //reduce first column of M
	    var MQ1 = multiply(Q1, M);

	    //SECOND ITERATION on (1,1) minor
	    var x2 = [MQ1[5], MQ1[6]];
	    var sgn2 = _sign(x2[0]); // sign of first component of x (for stability)
	    var x2Norm = _norm(x2); // norm of first column vector
	    var v2 = [x2[0] + sgn2 * x2Norm, x2[1]]; // v = x + sign(x[0])|x|e1
	    var mult2 = 2 / _normSquared(v2); // mult = 2/v'v

	    //evaluate Q2 = I - 2vv'/v'v
	    var Q2 = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];

	    //diagonal
	    Q2[5] = 1 - mult2 * v2[0] * v2[0]; // 1,1 entry
	    Q2[10] = 1 - mult2 * v2[1] * v2[1]; // 2,2 entry

	    //off diagonals
	    Q2[6] = -mult2 * v2[0] * v2[1]; // 2,1 entry
	    Q2[9] = Q2[6]; // 1,2 entry

	    //calc QR decomposition. Q = Q1*Q2, R = Q'*M
	    var Q = multiply(Q2, Q1); //note: really Q transpose
	    var R = multiply(Q, M);

	    //remove negative scaling
	    var remover = scale(R[0] < 0 ? -1 : 1, R[5] < 0 ? -1 : 1, R[10] < 0 ? -1 : 1);
	    R = multiply(R, remover);
	    Q = multiply(remover, Q);

	    //decompose into rotate/scale/skew matrices
	    var result = {};
	    result.translate = getTranslate(M);
	    result.rotate = [Math.atan2(-Q[6], Q[10]), Math.asin(Q[2]), Math.atan2(-Q[1], Q[0])];
	    if (!result.rotate[0]) {
	        result.rotate[0] = 0;
	        result.rotate[2] = Math.atan2(Q[4], Q[5]);
	    }
	    result.scale = [R[0], R[5], R[10]];
	    result.skew = [Math.atan2(R[9], result.scale[2]), Math.atan2(R[8], result.scale[2]), Math.atan2(R[4], result.scale[0])];

	    //double rotation workaround
	    if (Math.abs(result.rotate[0]) + Math.abs(result.rotate[2]) > 1.5 * Math.PI) {
	        result.rotate[1] = Math.PI - result.rotate[1];
	        if (result.rotate[1] > Math.PI) result.rotate[1] -= 2 * Math.PI;
	        if (result.rotate[1] < -Math.PI) result.rotate[1] += 2 * Math.PI;
	        if (result.rotate[0] < 0) result.rotate[0] += Math.PI;else result.rotate[0] -= Math.PI;
	        if (result.rotate[2] < 0) result.rotate[2] += Math.PI;else result.rotate[2] -= Math.PI;
	    }

	    return result;
	};

	/**
	 * Weighted average between two matrices by averaging their
	 *     translation, rotation, scale, skew components.
	 *     f(M1,M2,t) = (1 - t) * M1 + t * M2
	 *
	 * @method average
	 * @static
	 * @param {Transform} m1 f(M1,M2,0) = M1
	 * @param {Transform} m2 f(M1,M2,1) = M2
	 * @param {Number} t
	 * @return {Transform}
	 */
	var average = exports.average = function average(m1, m2, t) {
	    t = t === undefined ? 0.5 : t;
	    var specM1 = interpret(M1);
	    var specM2 = interpret(M2);

	    var specAvg = {
	        translate: [0, 0, 0],
	        rotate: [0, 0, 0],
	        scale: [0, 0, 0],
	        skew: [0, 0, 0]
	    };

	    for (var i = 0; i < 3; i++) {
	        specAvg.translate[i] = (1 - t) * specM1.translate[i] + t * specM2.translate[i];
	        specAvg.rotate[i] = (1 - t) * specM1.rotate[i] + t * specM2.rotate[i];
	        specAvg.scale[i] = (1 - t) * specM1.scale[i] + t * specM2.scale[i];
	        specAvg.skew[i] = (1 - t) * specM1.skew[i] + t * specM2.skew[i];
	    }
	    return build(specAvg);
	};

	/**
	 * Compose .translate, .rotate, .scale, .skew components into
	 * Transform matrix
	 *
	 * @method build
	 * @static
	 * @param {matrixSpec} spec object with component matrices .translate,
	 *    .rotate, .scale, .skew
	 * @return {Transform} composed transform
	 */
	var build = exports.build = function build(spec) {
	    var scaleMatrix = scale(spec.scale[0], spec.scale[1], spec.scale[2]);
	    var skewMatrix = skew(spec.skew[0], spec.skew[1], spec.skew[2]);
	    var rotateMatrix = rotate(spec.rotate[0], spec.rotate[1], spec.rotate[2]);
	    return thenMove(multiply(multiply(rotateMatrix, skewMatrix), scaleMatrix), spec.translate);
	};

	/**
	 * Determine if two Transforms are component-wise equal
	 *   Warning: breaks on perspective Transforms
	 *
	 * @method equals
	 * @static
	 * @param {Transform} a matrix
	 * @param {Transform} b matrix
	 * @return {boolean}
	 */
	var equals = exports.equals = function equals(a, b) {
	    return !notEquals(a, b);
	};

	/**
	 * Determine if two Transforms are component-wise unequal
	 *   Warning: breaks on perspective Transforms
	 *
	 * @method notEquals
	 * @static
	 * @param {Transform} a matrix
	 * @param {Transform} b matrix
	 * @return {boolean}
	 */
	var notEquals = exports.notEquals = function notEquals(a, b) {
	    if (a === b) return false;

	    // shortci
	    return !(a && b) || a[12] !== b[12] || a[13] !== b[13] || a[14] !== b[14] || a[0] !== b[0] || a[1] !== b[1] || a[2] !== b[2] || a[4] !== b[4] || a[5] !== b[5] || a[6] !== b[6] || a[8] !== b[8] || a[9] !== b[9] || a[10] !== b[10];
	};

	/**
	 * Constrain angle-trio components to range of [-pi, pi).
	 *
	 * @method normalizeRotation
	 * @static
	 * @param {Array.Number} rotation phi, theta, psi (array of floats
	 *    && array.length == 3)
	 * @return {Array.Number} new phi, theta, psi triplet
	 *    (array of floats && array.length == 3)
	 */
	var normalizeRotation = exports.normalizeRotation = function normalizeRotation(rotation) {
	    var result = rotation.slice(0);
	    if (result[0] === Math.PI * 0.5 || result[0] === -Math.PI * 0.5) {
	        result[0] = -result[0];
	        result[1] = Math.PI - result[1];
	        result[2] -= Math.PI;
	    }
	    if (result[0] > Math.PI * 0.5) {
	        result[0] = result[0] - Math.PI;
	        result[1] = Math.PI - result[1];
	        result[2] -= Math.PI;
	    }
	    if (result[0] < -Math.PI * 0.5) {
	        result[0] = result[0] + Math.PI;
	        result[1] = -Math.PI - result[1];
	        result[2] -= Math.PI;
	    }
	    while (result[1] < -Math.PI) {
	        result[1] += 2 * Math.PI;
	    }while (result[1] >= Math.PI) {
	        result[1] -= 2 * Math.PI;
	    }while (result[2] < -Math.PI) {
	        result[2] += 2 * Math.PI;
	    }while (result[2] >= Math.PI) {
	        result[2] -= 2 * Math.PI;
	    }return result;
	};

	var inFront = exports.inFront = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1e-3, 1];

	var behind = exports.behind = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, -1e-3, 1];

	var precision = exports.precision = 1e-6;

	var identity = exports.identity = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

	var outputCSSMatrix = exports.outputCSSMatrix = function outputCSSMatrix(m) {
	    return 'matrix3d(' + m[0] + ',' + m[1] + ',' + m[2] + ',' + m[3] + ',' + m[4] + ',' + m[5] + ',' + m[6] + ',' + m[7] + ',' + m[8] + ',' + m[9] + ',' + m[10] + ',' + m[11] + ',' + m[12] + ',' + m[13] + ',' + m[14] + ',' + m[15] + ')';
	};

	var inputCSSMatrix = exports.inputCSSMatrix = function inputCSSMatrix(mStr) {
	    //TODO 移除对 CSSMatrix 的依赖
	    var m = new _xcssmatrix2.default(mStr);
	    return [m11, m12, m13, m14, m21, m22, m23, m24, m31, m32, m33, m34, m41, m42, m43, m44];
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var XCSSMatrix = __webpack_require__(10);
	module.exports = XCSSMatrix;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var utils = {
	    angles: __webpack_require__(11),
	    matrix: __webpack_require__(12),
	    transp: __webpack_require__(15),
	    funcs: {
	        // Given a function `fn`, return a function which calls `fn` with only 1
	        //   argument, no matter how many are given.
	        // Most useful where you only want the first value from a map/foreach/etc
	        onlyFirstArg: function (fn, context) {
	            context = context || this;

	            return function (first) {
	                return fn.call(context, first);
	            };
	        }
	    }
	};


	/**
	 *  Given a CSS transform string (like `rotate(3rad)`, or
	 *    `matrix(1, 0, 0, 0, 1, 0)`), return an instance compatible with
	 *    [`WebKitCSSMatrix`](http://developer.apple.com/library/safari/documentation/AudioVideo/Reference/WebKitCSSMatrixClassReference/WebKitCSSMatrix/WebKitCSSMatrix.html)
	 *  @constructor
	 *  @param {string} domstr - a string representation of a 2D or 3D transform matrix
	 *    in the form given by the CSS transform property, i.e. just like the
	 *    output from [[@link#toString]].
	 *  @member {number} a - The first 2D vector value.
	 *  @member {number} b - The second 2D vector value.
	 *  @member {number} c - The third 2D vector value.
	 *  @member {number} d - The fourth 2D vector value.
	 *  @member {number} e - The fifth 2D vector value.
	 *  @member {number} f - The sixth 2D vector value.
	 *  @member {number} m11 - The 3D matrix value in the first row and first column.
	 *  @member {number} m12 - The 3D matrix value in the first row and second column.
	 *  @member {number} m13 - The 3D matrix value in the first row and third column.
	 *  @member {number} m14 - The 3D matrix value in the first row and fourth column.
	 *  @member {number} m21 - The 3D matrix value in the second row and first column.
	 *  @member {number} m22 - The 3D matrix value in the second row and second column.
	 *  @member {number} m23 - The 3D matrix value in the second row and third column.
	 *  @member {number} m24 - The 3D matrix value in the second row and fourth column.
	 *  @member {number} m31 - The 3D matrix value in the third row and first column.
	 *  @member {number} m32 - The 3D matrix value in the third row and second column.
	 *  @member {number} m33 - The 3D matrix value in the third row and third column.
	 *  @member {number} m34 - The 3D matrix value in the third row and fourth column.
	 *  @member {number} m41 - The 3D matrix value in the fourth row and first column.
	 *  @member {number} m42 - The 3D matrix value in the fourth row and second column.
	 *  @member {number} m43 - The 3D matrix value in the fourth row and third column.
	 *  @member {number} m44 - The 3D matrix value in the fourth row and fourth column.
	 *  @returns {XCSSMatrix} matrix
	 */
	function XCSSMatrix(domstr) {
	    this.m11 = this.m22 = this.m33 = this.m44 = 1;

	               this.m12 = this.m13 = this.m14 =
	    this.m21 =            this.m23 = this.m24 =
	    this.m31 = this.m32 =            this.m34 =
	    this.m41 = this.m42 = this.m43            = 0;

	    if (typeof domstr === 'string') {
	        this.setMatrixValue(domstr);
	    }
	}

	/**
	 *  XCSSMatrix.displayName = 'XCSSMatrix'
	 */
	XCSSMatrix.displayName = 'XCSSMatrix';

	var points2d = ['a', 'b', 'c', 'd', 'e', 'f'];
	var points3d = [
	    'm11', 'm12', 'm13', 'm14',
	    'm21', 'm22', 'm23', 'm24',
	    'm31', 'm32', 'm33', 'm34',
	    'm41', 'm42', 'm43', 'm44'
	];

	([
	    ['m11', 'a'],
	    ['m12', 'b'],
	    ['m21', 'c'],
	    ['m22', 'd'],
	    ['m41', 'e'],
	    ['m42', 'f']
	]).forEach(function (pair) {
	    var key3d = pair[0], key2d = pair[1];

	    Object.defineProperty(XCSSMatrix.prototype, key2d, {
	        set: function (val) {
	            this[key3d] = val;
	        },

	        get: function () {
	            return this[key3d];
	        },
	        enumerable : true,
	        configurable : true
	    });
	});


	/**
	 *  Multiply one matrix by another
	 *  @method
	 *  @member
	 *  @param {XCSSMatrix} otherMatrix - The matrix to multiply this one by.
	 */
	XCSSMatrix.prototype.multiply = function (otherMatrix) {
	    return utils.matrix.multiply(this, otherMatrix);
	};

	/**
	 *  If the matrix is invertible, returns its inverse, otherwise returns null.
	 *  @method
	 *  @member
	 *  @returns {XCSSMatrix|null}
	 */
	XCSSMatrix.prototype.inverse = function () {
	    return utils.matrix.inverse(this);
	};

	/**
	 *  Returns the result of rotating the matrix by a given vector.
	 *
	 *  If only the first argument is provided, the matrix is only rotated about
	 *  the z axis.
	 *  @method
	 *  @member
	 *  @param {number} rotX - The rotation around the x axis.
	 *  @param {number} rotY - The rotation around the y axis. If undefined, the x component is used.
	 *  @param {number} rotZ - The rotation around the z axis. If undefined, the x component is used.
	 *  @returns XCSSMatrix
	 */
	XCSSMatrix.prototype.rotate = function (rx, ry, rz) {

	    if (typeof rx !== 'number' || isNaN(rx)) rx = 0;

	    if ((typeof ry !== 'number' || isNaN(ry)) &&
	        (typeof rz !== 'number' || isNaN(rz))) {
	        rz = rx;
	        rx = 0;
	        ry = 0;
	    }

	    if (typeof ry !== 'number' || isNaN(ry)) ry = 0;
	    if (typeof rz !== 'number' || isNaN(rz)) rz = 0;

	    rx = utils.angles.deg2rad(rx);
	    ry = utils.angles.deg2rad(ry);
	    rz = utils.angles.deg2rad(rz);

	    var tx = new XCSSMatrix(),
	        ty = new XCSSMatrix(),
	        tz = new XCSSMatrix(),
	        sinA, cosA, sq;

	    rz /= 2;
	    sinA  = Math.sin(rz);
	    cosA  = Math.cos(rz);
	    sq = sinA * sinA;

	    // Matrices are identity outside the assigned values
	    tz.m11 = tz.m22 = 1 - 2 * sq;
	    tz.m12 = tz.m21 = 2 * sinA * cosA;
	    tz.m21 *= -1;

	    ry /= 2;
	    sinA  = Math.sin(ry);
	    cosA  = Math.cos(ry);
	    sq = sinA * sinA;

	    ty.m11 = ty.m33 = 1 - 2 * sq;
	    ty.m13 = ty.m31 = 2 * sinA * cosA;
	    ty.m13 *= -1;

	    rx /= 2;
	    sinA = Math.sin(rx);
	    cosA = Math.cos(rx);
	    sq = sinA * sinA;

	    tx.m22 = tx.m33 = 1 - 2 * sq;
	    tx.m23 = tx.m32 = 2 * sinA * cosA;
	    tx.m32 *= -1;

	    var identityMatrix = new XCSSMatrix(); // returns identity matrix by default
	    var isIdentity     = this.toString() === identityMatrix.toString();
	    var rotatedMatrix  = isIdentity ?
	            tz.multiply(ty).multiply(tx) :
	            this.multiply(tx).multiply(ty).multiply(tz);

	    return rotatedMatrix;
	};

	/**
	 *  Returns the result of rotating the matrix around a given vector by a given
	 *  angle.
	 *
	 *  If the given vector is the origin vector then the matrix is rotated by the
	 *  given angle around the z axis.
	 *  @method
	 *  @member
	 *  @param {number} rotX - The rotation around the x axis.
	 *  @param {number} rotY - The rotation around the y axis. If undefined, the x component is used.
	 *  @param {number} rotZ - The rotation around the z axis. If undefined, the x component is used.
	 *  @param {number} angle - The angle of rotation about the axis vector, in degrees.
	 *  @returns XCSSMatrix
	 */
	XCSSMatrix.prototype.rotateAxisAngle = function (x, y, z, a) {
	    if (typeof x !== 'number' || isNaN(x)) x = 0;
	    if (typeof y !== 'number' || isNaN(y)) y = 0;
	    if (typeof z !== 'number' || isNaN(z)) z = 0;
	    if (typeof a !== 'number' || isNaN(a)) a = 0;
	    if (x === 0 && y === 0 && z === 0) z = 1;
	    a = (utils.angles.deg2rad(a) || 0) / 2;
	    var t         = new XCSSMatrix(),
	        len       = Math.sqrt(x * x + y * y + z * z),
	        cosA      = Math.cos(a),
	        sinA      = Math.sin(a),
	        sq        = sinA * sinA,
	        sc        = sinA * cosA,
	        precision = function(v) { return parseFloat((v).toFixed(6)); },
	        x2, y2, z2;

	    // Bad vector, use something sensible
	    if (len === 0) {
	        x = 0;
	        y = 0;
	        z = 1;
	    } else if (len !== 1) {
	        x /= len;
	        y /= len;
	        z /= len;
	    }

	    // Optimise cases where axis is along major axis
	    if (x === 1 && y === 0 && z === 0) {
	        t.m22 = t.m33 = 1 - 2 * sq;
	        t.m23 = t.m32 = 2 * sc;
	        t.m32 *= -1;
	    } else if (x === 0 && y === 1 && z === 0) {
	        t.m11 = t.m33 = 1 - 2 * sq;
	        t.m13 = t.m31 = 2 * sc;
	        t.m13 *= -1;
	    } else if (x === 0 && y === 0 && z === 1) {
	        t.m11 = t.m22 = 1 - 2 * sq;
	        t.m12 = t.m21 = 2 * sc;
	        t.m21 *= -1;
	    } else {
	        x2  = x * x;
	        y2  = y * y;
	        z2  = z * z;
	        // http://dev.w3.org/csswg/css-transforms/#mathematical-description
	        t.m11 = precision(1 - 2 * (y2 + z2) * sq);
	        t.m12 = precision(2 * (x * y * sq + z * sc));
	        t.m13 = precision(2 * (x * z * sq - y * sc));
	        t.m21 = precision(2 * (x * y * sq - z * sc));
	        t.m22 = precision(1 - 2 * (x2 + z2) * sq);
	        t.m23 = precision(2 * (y * z * sq + x * sc));
	        t.m31 = precision(2 * (x * z * sq + y * sc));
	        t.m32 = precision(2 * (y * z * sq - x * sc));
	        t.m33 = precision(1 - 2 * (x2 + y2) * sq);
	    }

	    return this.multiply(t);
	};

	/**
	 *  Returns the result of scaling the matrix by a given vector.
	 *  @method
	 *  @member
	 *  @param {number} scaleX - the scaling factor in the x axis.
	 *  @param {number} scaleY - the scaling factor in the y axis. If undefined, the x component is used.
	 *  @param {number} scaleZ - the scaling factor in the z axis. If undefined, 1 is used.
	 *  @returns XCSSMatrix
	 */
	XCSSMatrix.prototype.scale = function (scaleX, scaleY, scaleZ) {
	    var transform = new XCSSMatrix();

	    if (typeof scaleX !== 'number' || isNaN(scaleX)) scaleX = 1;
	    if (typeof scaleY !== 'number' || isNaN(scaleY)) scaleY = scaleX;
	    if (typeof scaleZ !== 'number' || isNaN(scaleZ)) scaleZ = 1;

	    transform.m11 = scaleX;
	    transform.m22 = scaleY;
	    transform.m33 = scaleZ;

	    return this.multiply(transform);
	};

	/**
	 *  Returns the result of skewing the matrix by a given vector.
	 *  @method
	 *  @member
	 *  @param {number} skewX - The scaling factor in the x axis.
	 *  @returns XCSSMatrix
	 */
	XCSSMatrix.prototype.skewX = function (degrees) {
	    var radians   = utils.angles.deg2rad(degrees);
	    var transform = new XCSSMatrix();

	    transform.c = Math.tan(radians);

	    return this.multiply(transform);
	};

	/**
	 *  Returns the result of skewing the matrix by a given vector.
	 *  @method
	 *  @member
	 *  @param {number} skewY - the scaling factor in the x axis.
	 *  @returns XCSSMatrix
	 */
	XCSSMatrix.prototype.skewY = function (degrees) {
	    var radians   = utils.angles.deg2rad(degrees);
	    var transform = new XCSSMatrix();

	    transform.b = Math.tan(radians);

	    return this.multiply(transform);
	};

	/**
	 *  Returns the result of translating the matrix by a given vector.
	 *  @method
	 *  @member
	 *  @param {number} x - The x component of the vector.
	 *  @param {number} y - The y component of the vector.
	 *  @param {number} z - The z component of the vector. If undefined, 0 is used.
	 *  @returns XCSSMatrix
	 */
	XCSSMatrix.prototype.translate = function (x, y, z) {
	    var t = new XCSSMatrix();

	    if (typeof x !== 'number' || isNaN(x)) x = 0;
	    if (typeof y !== 'number' || isNaN(y)) y = 0;
	    if (typeof z !== 'number' || isNaN(z)) z = 0;

	    t.m41 = x;
	    t.m42 = y;
	    t.m43 = z;

	    return this.multiply(t);
	};

	/**
	 *  Sets the matrix values using a string representation, such as that produced
	 *  by the [[XCSSMatrix#toString]] method.
	 *  @method
	 *  @member
	 *  @params {string} domstr - A string representation of a 2D or 3D transform matrix
	 *    in the form given by the CSS transform property, i.e. just like the
	 *    output from [[XCSSMatrix#toString]].
	 *  @returns undefined
	 */
	XCSSMatrix.prototype.setMatrixValue = function (domstr) {

	    var matrixString = toMatrixString(domstr.trim());
	    var matrixObject = utils.transp.statementToObject(matrixString);

	    if (!matrixObject) return;

	    var is3d   = matrixObject.key === utils.transp.matrixFn3d;
	    var keygen = is3d ? indextoKey3d : indextoKey2d;
	    var values = matrixObject.value;
	    var count  = values.length;

	    if ((is3d && count !== 16) || !(is3d || count === 6)) return;

	    values.forEach(function (obj, i) {
	        var key = keygen(i);
	        this[key] = obj.value;
	    }, this);
	};

	function indextoKey2d (index) {
	    return String.fromCharCode(index + 97); // ASCII char 97 == 'a'
	}

	function indextoKey3d (index) {
	    return ('m' + (Math.floor(index / 4) + 1)) + (index % 4 + 1);
	}
	/**
	 *  Returns a string representation of the matrix.
	 *  @method
	 *  @memberof XCSSMatrix
	 *  @returns {string} matrixString - a string like `matrix(1.000000, 0.000000, 0.000000, 1.000000, 0.000000, 0.000000)`
	 *
	 **/
	XCSSMatrix.prototype.toString = function () {
	    var points, prefix;

	    if (utils.matrix.isAffine(this)) {
	        prefix = utils.transp.matrixFn2d;
	        points = points2d;
	    } else {
	        prefix = utils.transp.matrixFn3d;
	        points = points3d;
	    }

	    return prefix + '(' +
	        points.map(function (p) {
	            return this[p].toFixed(6);
	        }, this) .join(', ') +
	        ')';
	};

	// ====== toMatrixString ====== //
	var jsFunctions = {
	    matrix: function (m, o) {
	        var m2 = new XCSSMatrix(o.unparsed);

	        return m.multiply(m2);
	    },
	    matrix3d: function (m, o) {
	        var m2 = new XCSSMatrix(o.unparsed);

	        return m.multiply(m2);
	    },

	    perspective: function (m, o) {
	        var m2 = new XCSSMatrix();
	        m2.m34 -= 1 / o.value[0].value;

	        return m.multiply(m2);
	    },

	    rotate: function (m, o) {
	        return m.rotate.apply(m, o.value.map(objectValues));
	    },
	    rotate3d: function (m, o) {
	        return m.rotateAxisAngle.apply(m, o.value.map(objectValues));
	    },
	    rotateX: function (m, o) {
	        return m.rotate.apply(m, [o.value[0].value, 0, 0]);
	    },
	    rotateY: function (m, o) {
	        return m.rotate.apply(m, [0, o.value[0].value, 0]);
	    },
	    rotateZ: function (m, o) {
	        return m.rotate.apply(m, [0, 0, o.value[0].value]);
	    },

	    scale: function (m, o) {
	        return m.scale.apply(m, o.value.map(objectValues));
	    },
	    scale3d: function (m, o) {
	        return m.scale.apply(m, o.value.map(objectValues));
	    },
	    scaleX: function (m, o) {
	        return m.scale.apply(m, o.value.map(objectValues));
	    },
	    scaleY: function (m, o) {
	        return m.scale.apply(m, [0, o.value[0].value, 0]);
	    },
	    scaleZ: function (m, o) {
	        return m.scale.apply(m, [0, 0, o.value[0].value]);
	    },

	    skew: function (m, o) {
	        var mX = new XCSSMatrix('skewX(' + o.value[0].unparsed + ')');
	        var mY = new XCSSMatrix('skewY(' + (o.value[1]&&o.value[1].unparsed || 0) + ')');
	        var sM = 'matrix(1.00000, '+ mY.b +', '+ mX.c +', 1.000000, 0.000000, 0.000000)';
	        var m2 = new XCSSMatrix(sM);

	        return m.multiply(m2);
	    },
	    skewX: function (m, o) {
	        return m.skewX.apply(m, [o.value[0].value]);
	    },
	    skewY: function (m, o) {
	        return m.skewY.apply(m, [o.value[0].value]);
	    },

	    translate: function (m, o) {
	        return m.translate.apply(m, o.value.map(objectValues));
	    },
	    translate3d: function (m, o) {
	        return m.translate.apply(m, o.value.map(objectValues));
	    },
	    translateX: function (m, o) {
	        return m.translate.apply(m, [o.value[0].value, 0, 0]);
	    },
	    translateY: function (m, o) {
	        return m.translate.apply(m, [0, o.value[0].value, 0]);
	    },
	    translateZ: function (m, o) {
	        return m.translate.apply(m, [0, 0, o.value[0].value]);
	    }
	};

	function objectValues(obj) {
	    return obj.value;
	}

	function cssFunctionToJsFunction(cssFunctionName) {
	    return jsFunctions[cssFunctionName];
	}

	function parsedToDegrees(parsed) {
	    if (parsed.units === 'rad') {
	        parsed.value = utils.angles.rad2deg(parsed.value);
	        parsed.units = 'deg';
	    }
	    else if (parsed.units === 'grad') {
	        parsed.value = utils.angles.grad2deg(parsed.value);
	        parsed.units = 'deg';
	    }

	    return parsed;
	}

	function transformMatrix(matrix, operation) {
	    // convert to degrees because all CSSMatrix methods expect degrees
	    operation.value = operation.value.map(parsedToDegrees);

	    var jsFunction = cssFunctionToJsFunction(operation.key);
	    var result     = jsFunction(matrix, operation);

	    return result || matrix;
	}

	/**
	 *  Tranforms a `el.style.WebkitTransform`-style string
	 *  (like `rotate(18rad) translate3d(50px, 100px, 10px)`)
	 *  into a `getComputedStyle(el)`-style matrix string
	 *  (like `matrix3d(0.660316, -0.750987, 0, 0, 0.750987, 0.660316, 0, 0, 0, 0, 1, 0, 108.114560, 28.482308, 10, 1)`)
	 *  @private
	 *  @method
	 *  @param {string} transformString - `el.style.WebkitTransform`-style string (like `rotate(18rad) translate3d(50px, 100px, 10px)`)
	 */
	function toMatrixString(transformString) {
	    var statements = utils.transp.stringToStatements(transformString);

	    if (statements.length === 1 && (/^matrix/).test(transformString)) {
	        return transformString;
	    }

	    // We only want the statement to pass to `utils.transp.statementToObject`
	    //   not the other values (index, list) from `map`
	    var statementToObject = utils.funcs.onlyFirstArg(utils.transp.statementToObject);
	    var operations        = statements.map(statementToObject);
	    var startingMatrix    = new XCSSMatrix();
	    var transformedMatrix = operations.reduce(transformMatrix, startingMatrix);
	    var matrixString      = transformedMatrix.toString();

	    return matrixString;
	}

	module.exports = XCSSMatrix;


/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = {
	  deg2rad: deg2rad,
	  rad2deg: rad2deg,
	  grad2deg: grad2deg
	};

	/**
	 *  Converts angles in degrees, which are used by the external API, to angles
	 *  in radians used in internal calculations.
	 *  @param {number} angle - An angle in degrees.
	 *  @returns {number} radians
	 */
	function deg2rad(angle) {
	    return angle * Math.PI / 180;
	}

	function rad2deg(radians) {
	    return radians * (180 / Math.PI);
	}

	function grad2deg(gradians) {
	    // 400 gradians in 360 degrees
	    return gradians / (400 / 360);
	}


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  determinant2x2: determinant2x2,
	  determinant3x3: determinant3x3,
	  determinant4x4: determinant4x4,
	  isAffine: isAffine,
	  isIdentityOrTranslation: isIdentityOrTranslation,
	  adjoint: adjoint,
	  inverse: inverse,
	  multiply: multiply,
	  decompose: decompose
	};

	/**
	 *  Calculates the determinant of a 2x2 matrix.
	 *  @param {number} a - Top-left value of the matrix.
	 *  @param {number} b - Top-right value of the matrix.
	 *  @param {number} c - Bottom-left value of the matrix.
	 *  @param {number} d - Bottom-right value of the matrix.
	 *  @returns {number}
	 */
	function determinant2x2(a, b, c, d) {
	    return a * d - b * c;
	}

	/**
	 *  Calculates the determinant of a 3x3 matrix.
	 *  @param {number} a1 - Matrix value in position [1, 1].
	 *  @param {number} a2 - Matrix value in position [1, 2].
	 *  @param {number} a3 - Matrix value in position [1, 3].
	 *  @param {number} b1 - Matrix value in position [2, 1].
	 *  @param {number} b2 - Matrix value in position [2, 2].
	 *  @param {number} b3 - Matrix value in position [2, 3].
	 *  @param {number} c1 - Matrix value in position [3, 1].
	 *  @param {number} c2 - Matrix value in position [3, 2].
	 *  @param {number} c3 - Matrix value in position [3, 3].
	 *  @returns {number}
	 */
	function determinant3x3(a1, a2, a3, b1, b2, b3, c1, c2, c3) {

	    return a1 * determinant2x2(b2, b3, c2, c3) -
	           b1 * determinant2x2(a2, a3, c2, c3) +
	           c1 * determinant2x2(a2, a3, b2, b3);
	}

	/**
	 *  Calculates the determinant of a 4x4 matrix.
	 *  @param {XCSSMatrix} matrix - The matrix to calculate the determinant of.
	 *  @returns {number}
	 */
	function determinant4x4(matrix) {
	    var
	        m = matrix,
	        // Assign to individual variable names to aid selecting correct elements
	        a1 = m.m11, b1 = m.m21, c1 = m.m31, d1 = m.m41,
	        a2 = m.m12, b2 = m.m22, c2 = m.m32, d2 = m.m42,
	        a3 = m.m13, b3 = m.m23, c3 = m.m33, d3 = m.m43,
	        a4 = m.m14, b4 = m.m24, c4 = m.m34, d4 = m.m44;

	    return a1 * determinant3x3(b2, b3, b4, c2, c3, c4, d2, d3, d4) -
	           b1 * determinant3x3(a2, a3, a4, c2, c3, c4, d2, d3, d4) +
	           c1 * determinant3x3(a2, a3, a4, b2, b3, b4, d2, d3, d4) -
	           d1 * determinant3x3(a2, a3, a4, b2, b3, b4, c2, c3, c4);
	}

	/**
	 *  Determines whether the matrix is affine.
	 *  @returns {boolean}
	 */
	function isAffine(matrix) {
	    return matrix.m13 === 0 && matrix.m14 === 0 &&
	           matrix.m23 === 0 && matrix.m24 === 0 &&
	           matrix.m31 === 0 && matrix.m32 === 0 &&
	           matrix.m33 === 1 && matrix.m34 === 0 &&
	           matrix.m43 === 0 && matrix.m44 === 1;
	}

	/**
	 *  Returns whether the matrix is the identity matrix or a translation matrix.
	 *  @return {boolean}
	 */
	function isIdentityOrTranslation(matrix) {
	    var m = matrix;

	    return m.m11 === 1 && m.m12 === 0 && m.m13 === 0 && m.m14 === 0 &&
	           m.m21 === 0 && m.m22 === 1 && m.m23 === 0 && m.m24 === 0 &&
	           m.m31 === 0 && m.m31 === 0 && m.m33 === 1 && m.m34 === 0 &&
	    /* m41, m42 and m43 are the translation points */   m.m44 === 1;
	}

	/**
	 *  Returns the adjoint matrix.
	 *  @return {XCSSMatrix}
	 */
	function adjoint(matrix) {
	    var m = matrix,
	        // make `result` the same type as the given metric
	        result = new matrix.constructor(),

	        a1 = m.m11, b1 = m.m12, c1 = m.m13, d1 = m.m14,
	        a2 = m.m21, b2 = m.m22, c2 = m.m23, d2 = m.m24,
	        a3 = m.m31, b3 = m.m32, c3 = m.m33, d3 = m.m34,
	        a4 = m.m41, b4 = m.m42, c4 = m.m43, d4 = m.m44;

	    // Row column labeling reversed since we transpose rows & columns
	    result.m11 =  determinant3x3(b2, b3, b4, c2, c3, c4, d2, d3, d4);
	    result.m21 = -determinant3x3(a2, a3, a4, c2, c3, c4, d2, d3, d4);
	    result.m31 =  determinant3x3(a2, a3, a4, b2, b3, b4, d2, d3, d4);
	    result.m41 = -determinant3x3(a2, a3, a4, b2, b3, b4, c2, c3, c4);

	    result.m12 = -determinant3x3(b1, b3, b4, c1, c3, c4, d1, d3, d4);
	    result.m22 =  determinant3x3(a1, a3, a4, c1, c3, c4, d1, d3, d4);
	    result.m32 = -determinant3x3(a1, a3, a4, b1, b3, b4, d1, d3, d4);
	    result.m42 =  determinant3x3(a1, a3, a4, b1, b3, b4, c1, c3, c4);

	    result.m13 =  determinant3x3(b1, b2, b4, c1, c2, c4, d1, d2, d4);
	    result.m23 = -determinant3x3(a1, a2, a4, c1, c2, c4, d1, d2, d4);
	    result.m33 =  determinant3x3(a1, a2, a4, b1, b2, b4, d1, d2, d4);
	    result.m43 = -determinant3x3(a1, a2, a4, b1, b2, b4, c1, c2, c4);

	    result.m14 = -determinant3x3(b1, b2, b3, c1, c2, c3, d1, d2, d3);
	    result.m24 =  determinant3x3(a1, a2, a3, c1, c2, c3, d1, d2, d3);
	    result.m34 = -determinant3x3(a1, a2, a3, b1, b2, b3, d1, d2, d3);
	    result.m44 =  determinant3x3(a1, a2, a3, b1, b2, b3, c1, c2, c3);

	    return result;
	}

	function inverse(matrix) {
	  var inv;

	  if (isIdentityOrTranslation(matrix)) {
	      inv = new matrix.constructor();

	      if (!(matrix.m41 === 0 && matrix.m42 === 0 && matrix.m43 === 0)) {
	          inv.m41 = -matrix.m41;
	          inv.m42 = -matrix.m42;
	          inv.m43 = -matrix.m43;
	      }

	      return inv;
	  }

	  // Calculate the adjoint matrix
	  var result = adjoint(matrix);

	  // Calculate the 4x4 determinant
	  var det = determinant4x4(matrix);

	  // If the determinant is zero, then the inverse matrix is not unique
	  if (Math.abs(det) < 1e-8) return null;

	  // Scale the adjoint matrix to get the inverse
	  for (var i = 1; i < 5; i++) {
	      for (var j = 1; j < 5; j++) {
	          result[('m' + i) + j] /= det;
	      }
	  }

	  return result;
	}

	function multiply(matrix, otherMatrix) {
	  if (!otherMatrix) return null;

	  var a = otherMatrix,
	      b = matrix,
	      c = new matrix.constructor();

	  c.m11 = a.m11 * b.m11 + a.m12 * b.m21 + a.m13 * b.m31 + a.m14 * b.m41;
	  c.m12 = a.m11 * b.m12 + a.m12 * b.m22 + a.m13 * b.m32 + a.m14 * b.m42;
	  c.m13 = a.m11 * b.m13 + a.m12 * b.m23 + a.m13 * b.m33 + a.m14 * b.m43;
	  c.m14 = a.m11 * b.m14 + a.m12 * b.m24 + a.m13 * b.m34 + a.m14 * b.m44;

	  c.m21 = a.m21 * b.m11 + a.m22 * b.m21 + a.m23 * b.m31 + a.m24 * b.m41;
	  c.m22 = a.m21 * b.m12 + a.m22 * b.m22 + a.m23 * b.m32 + a.m24 * b.m42;
	  c.m23 = a.m21 * b.m13 + a.m22 * b.m23 + a.m23 * b.m33 + a.m24 * b.m43;
	  c.m24 = a.m21 * b.m14 + a.m22 * b.m24 + a.m23 * b.m34 + a.m24 * b.m44;

	  c.m31 = a.m31 * b.m11 + a.m32 * b.m21 + a.m33 * b.m31 + a.m34 * b.m41;
	  c.m32 = a.m31 * b.m12 + a.m32 * b.m22 + a.m33 * b.m32 + a.m34 * b.m42;
	  c.m33 = a.m31 * b.m13 + a.m32 * b.m23 + a.m33 * b.m33 + a.m34 * b.m43;
	  c.m34 = a.m31 * b.m14 + a.m32 * b.m24 + a.m33 * b.m34 + a.m34 * b.m44;

	  c.m41 = a.m41 * b.m11 + a.m42 * b.m21 + a.m43 * b.m31 + a.m44 * b.m41;
	  c.m42 = a.m41 * b.m12 + a.m42 * b.m22 + a.m43 * b.m32 + a.m44 * b.m42;
	  c.m43 = a.m41 * b.m13 + a.m42 * b.m23 + a.m43 * b.m33 + a.m44 * b.m43;
	  c.m44 = a.m41 * b.m14 + a.m42 * b.m24 + a.m43 * b.m34 + a.m44 * b.m44;

	  return c;
	}

	function transpose(matrix) {
	  var result = new matrix.constructor();
	  var rows = 4, cols = 4;
	  var i = cols, j;
	  while (i) {
	    j = rows;
	    while (j) {
	      result['m' + i + j] = matrix['m'+ j + i];
	      j--;
	    }
	    i--;
	  }
	  return result;
	}

	/*
	  Input:  matrix      ; a 4x4 matrix
	  Output: translation ; a 3 component vector
	          scale       ; a 3 component vector
	          skew        ; skew factors XY,XZ,YZ represented as a 3 component vector
	          perspective ; a 4 component vector
	          rotate  ; a 4 component vector
	  Returns false if the matrix cannot be decomposed, true if it can
	*/
	var Vector4 = __webpack_require__(13);
	function decompose(matrix) {
	  var perspectiveMatrix, rightHandSide, inversePerspectiveMatrix, transposedInversePerspectiveMatrix,
	      perspective, translate, row, i, len, scale, skew, pdum3, rotate;

	  // Normalize the matrix.
	  if (matrix.m33 == 0) { return false; }

	  for (i = 1; i <= 4; i++) {
	    for (j = 1; j < 4; j++) {
	      matrix['m'+i+j] /= matrix.m44;
	    }
	  }

	  // perspectiveMatrix is used to solve for perspective, but it also provides
	  // an easy way to test for singularity of the upper 3x3 component.
	  perspectiveMatrix = matrix;
	  perspectiveMatrix.m14 = 0;
	  perspectiveMatrix.m24 = 0;
	  perspectiveMatrix.m34 = 0;
	  perspectiveMatrix.m44 = 1;

	  if (determinant4x4(perspectiveMatrix) == 0) {
	    return false;
	  }

	  // First, isolate perspective.
	  if (matrix.m14 != 0 || matrix.m24 != 0 || matrix.m34 != 0) {
	    // rightHandSide is the right hand side of the equation.
	    rightHandSide = new Vector4(matrix.m14, matrix.m24, matrix.m34, matrix.m44);

	    // Solve the equation by inverting perspectiveMatrix and multiplying
	    // rightHandSide by the inverse.
	    inversePerspectiveMatrix = inverse(perspectiveMatrix);
	    transposedInversePerspectiveMatrix = transpose(inversePerspectiveMatrix);
	    perspective = rightHandSide.multiplyByMatrix(transposedInversePerspectiveMatrix);
	  }
	  else {
	    // No perspective.
	    perspective = new Vector4(0, 0, 0, 1);
	  }

	  // Next take care of translation
	  translate = new Vector4(matrix.m41, matrix.m42, matrix.m43);

	  // Now get scale and shear. 'row' is a 3 element array of 3 component vectors
	  row = [ new Vector4(), new Vector4(), new Vector4() ];
	  for (i = 1, len = row.length; i < len; i++) {
	    row[i-1].x = matrix['m'+i+'1'];
	    row[i-1].y = matrix['m'+i+'2'];
	    row[i-1].z = matrix['m'+i+'3'];
	  }

	  // Compute X scale factor and normalize first row.
	  scale = new Vector4();
	  skew = new Vector4();

	  scale.x = row[0].length();
	  row[0] = row[0].normalize();

	  // Compute XY shear factor and make 2nd row orthogonal to 1st.
	  skew.x = row[0].dot(row[1]);
	  row[1] = row[1].combine(row[0], 1.0, -skew.x);

	  // Now, compute Y scale and normalize 2nd row.
	  scale.y = row[1].length();
	  row[1] = row[1].normalize();
	  skew.x /= scale.y;

	  // Compute XZ and YZ shears, orthogonalize 3rd row
	  skew.y = row[0].dot(row[2]);
	  row[2] = row[2].combine(row[0], 1.0, -skew.y);
	  skew.z = row[1].dot(row[2]);
	  row[2] = row[2].combine(row[1], 1.0, -skew.z);

	  // Next, get Z scale and normalize 3rd row.
	  scale.z = row[2].length();
	  row[2] = row[2].normalize();
	  skew.y = (skew.y / scale.z) || 0;
	  skew.z = (skew.z / scale.z) || 0;

	  // At this point, the matrix (in rows) is orthonormal.
	  // Check for a coordinate system flip.  If the determinant
	  // is -1, then negate the matrix and the scaling factors.
	  pdum3 = row[1].cross(row[2]);
	  if (row[0].dot(pdum3) < 0) {
	    for (i = 0; i < 3; i++) {
	      scale.x *= -1;
	      row[i].x *= -1;
	      row[i].y *= -1;
	      row[i].z *= -1;
	    }
	  }

	  // Now, get the rotations out
	  // FROM W3C
	  rotate = new Vector4();
	  rotate.x = 0.5 * Math.sqrt(Math.max(1 + row[0].x - row[1].y - row[2].z, 0));
	  rotate.y = 0.5 * Math.sqrt(Math.max(1 - row[0].x + row[1].y - row[2].z, 0));
	  rotate.z = 0.5 * Math.sqrt(Math.max(1 - row[0].x - row[1].y + row[2].z, 0));
	  rotate.w = 0.5 * Math.sqrt(Math.max(1 + row[0].x + row[1].y + row[2].z, 0));

	  // if (row[2].y > row[1].z) rotate[0] = -rotate[0];
	  // if (row[0].z > row[2].x) rotate[1] = -rotate[1];
	  // if (row[1].x > row[0].y) rotate[2] = -rotate[2];

	  // FROM MORF.JS
	  rotate.y = Math.asin(-row[0].z);
	  if (Math.cos(rotate.y) != 0) {
	    rotate.x = Math.atan2(row[1].z, row[2].z);
	    rotate.z = Math.atan2(row[0].y, row[0].x);
	  } else {
	    rotate.x = Math.atan2(-row[2].x, row[1].y);
	    rotate.z = 0;
	  }

	  // FROM http://blog.bwhiting.co.uk/?p=26
	  // scale.x2 = Math.sqrt(matrix.m11*matrix.m11 + matrix.m21*matrix.m21 + matrix.m31*matrix.m31);
	  // scale.y2 = Math.sqrt(matrix.m12*matrix.m12 + matrix.m22*matrix.m22 + matrix.m32*matrix.m32);
	  // scale.z2 = Math.sqrt(matrix.m13*matrix.m13 + matrix.m23*matrix.m23 + matrix.m33*matrix.m33);

	  // rotate.x2 = Math.atan2(matrix.m23/scale.z2, matrix.m33/scale.z2);
	  // rotate.y2 = -Math.asin(matrix.m13/scale.z2);
	  // rotate.z2 = Math.atan2(matrix.m12/scale.y2, matrix.m11/scale.x2);

	  return {
	    perspective : perspective,
	    translate   : translate,
	    skew        : skew,
	    scale       : scale,
	    rotate      : rotate
	  };
	}


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var vector = __webpack_require__(14);
	module.exports = Vector4;

	/**
	 * A 4 dimensional vector
	 * @author Joe Lambert
	 * @constructor
	 */
	function Vector4(x, y, z, w) {
	  this.x = x;
	  this.y = y;
	  this.z = z;
	  this.w = w;
	  this.checkValues();
	}

	/**
	 * Ensure that values are not undefined
	 * @author Joe Lambert
	 * @returns null
	 */

	Vector4.prototype.checkValues = function() {
	  this.x = this.x || 0;
	  this.y = this.y || 0;
	  this.z = this.z || 0;
	  this.w = this.w || 0;
	};

	/**
	 * Get the length of the vector
	 * @author Joe Lambert
	 * @returns {float}
	 */

	Vector4.prototype.length = function() {
	  this.checkValues();
	  return vector.length(this);
	};


	/**
	 * Get a normalised representation of the vector
	 * @author Joe Lambert
	 * @returns {Vector4}
	 */

	Vector4.prototype.normalize = function() {
		return vector.normalize(this);
	};


	/**
	 * Vector Dot-Product
	 * @param {Vector4} v The second vector to apply the product to
	 * @author Joe Lambert
	 * @returns {float} The Dot-Product of this and v.
	 */

	Vector4.prototype.dot = function(v) {
	  return vector.dot(this, v);
	};


	/**
	 * Vector Cross-Product
	 * @param {Vector4} v The second vector to apply the product to
	 * @author Joe Lambert
	 * @returns {Vector4} The Cross-Product of this and v.
	 */

	Vector4.prototype.cross = function(v) {
	  return vector.cross(this, v);
	};


	/**
	 * Helper function required for matrix decomposition
	 * A Javascript implementation of pseudo code available from http://www.w3.org/TR/css3-2d-transforms/#matrix-decomposition
	 * @param {Vector4} aPoint A 3D point
	 * @param {float} ascl
	 * @param {float} bscl
	 * @author Joe Lambert
	 * @returns {Vector4}
	 */

	Vector4.prototype.combine = function(bPoint, ascl, bscl) {
	  return vector.combine(this, bPoint, ascl, bscl);
	};

	Vector4.prototype.multiplyByMatrix = function (matrix) {
	  return vector.multiplyByMatrix(this, matrix);
	};


/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = {
	  length           : length,
	  normalize        : normalize,
	  dot              : dot,
	  cross            : cross,
	  combine          : combine,
	  multiplyByMatrix : multiplyByMatrix
	};

	/**
	 * Get the length of the vector
	 * @author Joe Lambert
	 * @returns {float}
	 */

	function length(vector) {
	  return Math.sqrt(vector.x*vector.x + vector.y*vector.y + vector.z*vector.z);
	}


	/**
	 * Get a normalized representation of the vector
	 * @author Joe Lambert
	 * @returns {Vector4}
	 */

	function normalize(vector) {
	  var len = length(vector),
	    v = new vector.constructor(vector.x / len, vector.y / len, vector.z / len);

	  return v;
	}


	/**
	 * Vector Dot-Product
	 * @param {Vector4} v The second vector to apply the product to
	 * @author Joe Lambert
	 * @returns {float} The Dot-Product of a and b.
	 */

	function dot(a, b) {
	  return a.x*b.x + a.y*b.y + a.z*b.z + a.w*b.w;
	}


	/**
	 * Vector Cross-Product
	 * @param {Vector4} v The second vector to apply the product to
	 * @author Joe Lambert
	 * @returns {Vector4} The Cross-Product of a and b.
	 */

	function cross(a, b) {
	  return new a.constructor(
	    (a.y * b.z) - (a.z * b.y),
	    (a.z * b.x) - (a.x * b.z),
	    (a.x * b.y) - (a.y * b.x)
	  );
	}


	/**
	 * Helper function required for matrix decomposition
	 * A Javascript implementation of pseudo code available from http://www.w3.org/TR/css3-2d-transforms/#matrix-decomposition
	 * @param {Vector4} aPoint A 3D point
	 * @param {float} ascl
	 * @param {float} bscl
	 * @author Joe Lambert
	 * @returns {Vector4}
	 */

	function combine(aPoint, bPoint, ascl, bscl) {
	  return new aPoint.constructor(
	    (ascl * aPoint.x) + (bscl * bPoint.x),
	    (ascl * aPoint.y) + (bscl * bPoint.y),
	    (ascl * aPoint.z) + (bscl * bPoint.z)
	  );
	}

	function multiplyByMatrix(vector, matrix) {
	  return new vector.constructor(
	    (matrix.m11 * vector.x) + (matrix.m12 * vector.y) + (matrix.m13 * vector.z),
	    (matrix.m21 * vector.x) + (matrix.m22 * vector.y) + (matrix.m23 * vector.z),
	    (matrix.m31 * vector.x) + (matrix.m32 * vector.y) + (matrix.m33 * vector.z)
	  );
	}


/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = {
	    matrixFn2d: 'matrix',
	    matrixFn3d: 'matrix3d',
	    valueToObject: valueToObject,
	    statementToObject: statementToObject,
	    stringToStatements: stringToStatements
	};

	function valueToObject(value) {
	    var units = /([\-\+]?[0-9]+[\.0-9]*)(deg|rad|grad|px|%)*/;
	    var parts = value.match(units) || [];

	    return {
	        value: parseFloat(parts[1]),
	        units: parts[2],
	        unparsed: value
	    };
	}

	function statementToObject(statement, skipValues) {
	    var nameAndArgs    = /(\w+)\(([^\)]+)\)/i;
	    var statementParts = statement.toString().match(nameAndArgs).slice(1);
	    var functionName   = statementParts[0];
	    var stringValues   = statementParts[1].split(/, ?/);
	    var parsedValues   = !skipValues && stringValues.map(valueToObject);

	    return {
	        key: functionName,
	        value: parsedValues || stringValues,
	        unparsed: statement
	    };
	}

	function stringToStatements(transformString) {
	    var functionSignature   = /(\w+)\([^\)]+\)/ig;
	    var transformStatements = transformString.match(functionSignature) || [];

	    return transformStatements;
	}


/***/ }
/******/ ])
});
;
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/config/index.js":
/*!*****************************!*\
  !*** ./src/config/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "globalButtonConstants": () => (/* binding */ globalButtonConstants),
/* harmony export */   "supportedControllers": () => (/* binding */ supportedControllers)
/* harmony export */ });
const globalButtonConstants = {
  BUTTON_DOWN: 'button_down',
  BUTTON_RIGHT: 'button_right',
  BUTTON_LEFT: 'button_left',
  BUTTON_UP: 'button_up',
  L1: 'l1',
  R1: 'r1',
  L2: 'l2',
  R2: 'r2',
  SELECT: 'select',
  START: 'start',
  L3: 'l3',
  R3: 'r3',
  UP: 'up',
  DOWN: 'down',
  LEFT: 'left',
  RIGHT: 'right',
  JOYSTICKS: 'joysticks',
  CONNECTED: 'connected',
  DISCONNECTED: 'disconnected',
  ALL: 'all'
}

const supportedControllers = {
  standard: {
    0: globalButtonConstants.BUTTON_DOWN,
    1: globalButtonConstants.BUTTON_RIGHT,
    2: globalButtonConstants.BUTTON_LEFT,
    3: globalButtonConstants.BUTTON_UP,
    4: globalButtonConstants.L1,
    5: globalButtonConstants.R1,
    6: globalButtonConstants.L2,
    7: globalButtonConstants.R2,
    8: globalButtonConstants.SELECT,
    9: globalButtonConstants.START,
    10: globalButtonConstants.L3,
    11: globalButtonConstants.R3,
    12: globalButtonConstants.UP,
    13: globalButtonConstants.DOWN,
    14: globalButtonConstants.LEFT,
    15: globalButtonConstants.RIGHT,
    16: globalButtonConstants.HOME
  }
}

/***/ }),

/***/ "./src/events/index.js":
/*!*****************************!*\
  !*** ./src/events/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "on": () => (/* binding */ on),
/* harmony export */   "dispatchCallbacks": () => (/* binding */ dispatchCallbacks)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./src/config/index.js");


const callbacks = {}

function on(type, cb) {
  if (type === _config__WEBPACK_IMPORTED_MODULE_0__.globalButtonConstants.CONNECTED) {
    window.addEventListener("gamepadconnected", cb)
  }

  if (type === _config__WEBPACK_IMPORTED_MODULE_0__.globalButtonConstants.DISCONNECTED) {
    window.addEventListener("gamepaddisconnected", cb)
  }

  callbacks[type] = callbacks[type] ?? []
  callbacks[type].push(cb)
}

function dispatchCallbacks(type, data) {
  if (callbacks[type]) {
    callbacks[type].forEach(cb => cb(data))
  }
}


/***/ }),

/***/ "./src/input/index.js":
/*!****************************!*\
  !*** ./src/input/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateInput": () => (/* binding */ generateInput)
/* harmony export */ });
/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../validate */ "./src/validate/index.js");


function generateInput(names, index) {
  const gamepads = navigator.getGamepads()
  const gamepad = gamepads[index]
  const buttons = (0,_validate__WEBPACK_IMPORTED_MODULE_0__.findInput)(gamepad, names)
  
  const joysticks = {
    left: [gamepad.axes[0], gamepad.axes[1]],
    right: [gamepad.axes[2], gamepad.axes[3]]
  }
  
  return {
    buttons,
    joysticks
  }
}

/***/ }),

/***/ "./src/validate/index.js":
/*!*******************************!*\
  !*** ./src/validate/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "findInput": () => (/* binding */ findInput),
/* harmony export */   "getActiveInput": () => (/* binding */ getActiveInput),
/* harmony export */   "isNewButtonInput": () => (/* binding */ isNewButtonInput),
/* harmony export */   "isNewJoystickInput": () => (/* binding */ isNewJoystickInput),
/* harmony export */   "getSupportedController": () => (/* binding */ getSupportedController)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./src/config/index.js");


function findInput(gamepad, names) {
  return gamepad.buttons
    .map((button, index) => {
      return {button, index, type: names[index]}
    })  
}

function getActiveInput(input) {
  return {
    buttons: input.buttons.filter(obj => obj.button.pressed),
    joysticks: input.joysticks
  }
}

function isNewButtonInput(input, lastInput) {
  if (input.buttons.length !== lastInput.buttons.length) return true
  if (input.buttons.length === 0 && lastInput.buttons.length === 0) return false
  if (JSON.stringify(input.buttons) !== JSON.stringify(lastInput.buttons)) return true
  if (input.buttons.some((btn, index) => btn.button.value !== lastInput.buttons[index].button.value)) return true
}

function isNewJoystickInput(input, lastInput) {
  if (JSON.stringify(input.joysticks) !== JSON.stringify(lastInput.joysticks)) return true
}

function getSupportedController(mapping) {
  return _config__WEBPACK_IMPORTED_MODULE_0__.supportedControllers[mapping] || console.error(`${mapping} is an unsupported controller`)
}


/***/ })

/******/ 	});
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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gam3pad": () => (/* binding */ Gam3pad)
/* harmony export */ });
/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate */ "./src/validate/index.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events */ "./src/events/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./src/config/index.js");
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./input */ "./src/input/index.js");





class Gam3pad {
  #gamepadIndex
  #buttonNames
  #isConnected = false
  #lastInput = { buttons: [], joysticks: [] }

  constructor() {
    window.addEventListener("gamepadconnected", event => {
      this.#buttonNames = (0,_validate__WEBPACK_IMPORTED_MODULE_0__.getSupportedController)(event.gamepad.mapping)

      if (this.#buttonNames) {
        this.#isConnected = true
        this.#gamepadIndex = event.gamepad.index
        
        window.requestAnimationFrame(this.#loop.bind(this))
      }
    })

    window.addEventListener("gamepaddisconnected", () => {
      this.#isConnected = false
    })
  }

  #loop() {
    if (!this.#isConnected) return

    const input = (0,_input__WEBPACK_IMPORTED_MODULE_3__.generateInput)(this.#buttonNames, this.#gamepadIndex)
    const activeInput = (0,_validate__WEBPACK_IMPORTED_MODULE_0__.getActiveInput)(input) 

    let hasUpdated = false

    if ((0,_validate__WEBPACK_IMPORTED_MODULE_0__.isNewButtonInput)(activeInput, this.#lastInput)) {
      const newButtonTypes = []

      hasUpdated = true

      activeInput.buttons.forEach(button => {       
        ;(0,_events__WEBPACK_IMPORTED_MODULE_1__.dispatchCallbacks)(button.type, button)
        newButtonTypes.push(button.type)
      })
      
      this.#lastInput.buttons
        .forEach(data => {
          if (!newButtonTypes.includes(data.type)) {
            (0,_events__WEBPACK_IMPORTED_MODULE_1__.dispatchCallbacks)(data.type, input.buttons[data.index])
          }
        })
    }

    if ((0,_validate__WEBPACK_IMPORTED_MODULE_0__.isNewJoystickInput)(activeInput, this.#lastInput)) {
      hasUpdated = true

      ;(0,_events__WEBPACK_IMPORTED_MODULE_1__.dispatchCallbacks)(_config__WEBPACK_IMPORTED_MODULE_2__.globalButtonConstants.JOYSTICKS, activeInput.joysticks)
    }

    if (hasUpdated) {
      this.#lastInput = activeInput
      ;(0,_events__WEBPACK_IMPORTED_MODULE_1__.dispatchCallbacks)(_config__WEBPACK_IMPORTED_MODULE_2__.globalButtonConstants.ALL, activeInput)
    }

    window.requestAnimationFrame(this.#loop.bind(this))
  }

  on = _events__WEBPACK_IMPORTED_MODULE_1__.on
  static INPUT = _config__WEBPACK_IMPORTED_MODULE_2__.globalButtonConstants
}
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL2dhbTNwYWQvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2dhbTNwYWQvLi9zcmMvY29uZmlnL2luZGV4LmpzIiwid2VicGFjazovL2dhbTNwYWQvLi9zcmMvZXZlbnRzL2luZGV4LmpzIiwid2VicGFjazovL2dhbTNwYWQvLi9zcmMvaW5wdXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ2FtM3BhZC8uL3NyYy92YWxpZGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9nYW0zcGFkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2dhbTNwYWQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2dhbTNwYWQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9nYW0zcGFkL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZ2FtM3BhZC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkoc2VsZiwgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiZXhwb3J0IGNvbnN0IGdsb2JhbEJ1dHRvbkNvbnN0YW50cyA9IHtcclxuICBCVVRUT05fRE9XTjogJ2J1dHRvbl9kb3duJyxcclxuICBCVVRUT05fUklHSFQ6ICdidXR0b25fcmlnaHQnLFxyXG4gIEJVVFRPTl9MRUZUOiAnYnV0dG9uX2xlZnQnLFxyXG4gIEJVVFRPTl9VUDogJ2J1dHRvbl91cCcsXHJcbiAgTDE6ICdsMScsXHJcbiAgUjE6ICdyMScsXHJcbiAgTDI6ICdsMicsXHJcbiAgUjI6ICdyMicsXHJcbiAgU0VMRUNUOiAnc2VsZWN0JyxcclxuICBTVEFSVDogJ3N0YXJ0JyxcclxuICBMMzogJ2wzJyxcclxuICBSMzogJ3IzJyxcclxuICBVUDogJ3VwJyxcclxuICBET1dOOiAnZG93bicsXHJcbiAgTEVGVDogJ2xlZnQnLFxyXG4gIFJJR0hUOiAncmlnaHQnLFxyXG4gIEpPWVNUSUNLUzogJ2pveXN0aWNrcycsXHJcbiAgQ09OTkVDVEVEOiAnY29ubmVjdGVkJyxcclxuICBESVNDT05ORUNURUQ6ICdkaXNjb25uZWN0ZWQnLFxyXG4gIEFMTDogJ2FsbCdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHN1cHBvcnRlZENvbnRyb2xsZXJzID0ge1xyXG4gIHN0YW5kYXJkOiB7XHJcbiAgICAwOiBnbG9iYWxCdXR0b25Db25zdGFudHMuQlVUVE9OX0RPV04sXHJcbiAgICAxOiBnbG9iYWxCdXR0b25Db25zdGFudHMuQlVUVE9OX1JJR0hULFxyXG4gICAgMjogZ2xvYmFsQnV0dG9uQ29uc3RhbnRzLkJVVFRPTl9MRUZULFxyXG4gICAgMzogZ2xvYmFsQnV0dG9uQ29uc3RhbnRzLkJVVFRPTl9VUCxcclxuICAgIDQ6IGdsb2JhbEJ1dHRvbkNvbnN0YW50cy5MMSxcclxuICAgIDU6IGdsb2JhbEJ1dHRvbkNvbnN0YW50cy5SMSxcclxuICAgIDY6IGdsb2JhbEJ1dHRvbkNvbnN0YW50cy5MMixcclxuICAgIDc6IGdsb2JhbEJ1dHRvbkNvbnN0YW50cy5SMixcclxuICAgIDg6IGdsb2JhbEJ1dHRvbkNvbnN0YW50cy5TRUxFQ1QsXHJcbiAgICA5OiBnbG9iYWxCdXR0b25Db25zdGFudHMuU1RBUlQsXHJcbiAgICAxMDogZ2xvYmFsQnV0dG9uQ29uc3RhbnRzLkwzLFxyXG4gICAgMTE6IGdsb2JhbEJ1dHRvbkNvbnN0YW50cy5SMyxcclxuICAgIDEyOiBnbG9iYWxCdXR0b25Db25zdGFudHMuVVAsXHJcbiAgICAxMzogZ2xvYmFsQnV0dG9uQ29uc3RhbnRzLkRPV04sXHJcbiAgICAxNDogZ2xvYmFsQnV0dG9uQ29uc3RhbnRzLkxFRlQsXHJcbiAgICAxNTogZ2xvYmFsQnV0dG9uQ29uc3RhbnRzLlJJR0hULFxyXG4gICAgMTY6IGdsb2JhbEJ1dHRvbkNvbnN0YW50cy5IT01FXHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgZ2xvYmFsQnV0dG9uQ29uc3RhbnRzIH0gZnJvbSAnLi4vY29uZmlnJ1xyXG5cclxuY29uc3QgY2FsbGJhY2tzID0ge31cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvbih0eXBlLCBjYikge1xyXG4gIGlmICh0eXBlID09PSBnbG9iYWxCdXR0b25Db25zdGFudHMuQ09OTkVDVEVEKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImdhbWVwYWRjb25uZWN0ZWRcIiwgY2IpXHJcbiAgfVxyXG5cclxuICBpZiAodHlwZSA9PT0gZ2xvYmFsQnV0dG9uQ29uc3RhbnRzLkRJU0NPTk5FQ1RFRCkge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJnYW1lcGFkZGlzY29ubmVjdGVkXCIsIGNiKVxyXG4gIH1cclxuXHJcbiAgY2FsbGJhY2tzW3R5cGVdID0gY2FsbGJhY2tzW3R5cGVdID8/IFtdXHJcbiAgY2FsbGJhY2tzW3R5cGVdLnB1c2goY2IpXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwYXRjaENhbGxiYWNrcyh0eXBlLCBkYXRhKSB7XHJcbiAgaWYgKGNhbGxiYWNrc1t0eXBlXSkge1xyXG4gICAgY2FsbGJhY2tzW3R5cGVdLmZvckVhY2goY2IgPT4gY2IoZGF0YSkpXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGZpbmRJbnB1dCB9IGZyb20gJy4uL3ZhbGlkYXRlJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlSW5wdXQobmFtZXMsIGluZGV4KSB7XHJcbiAgY29uc3QgZ2FtZXBhZHMgPSBuYXZpZ2F0b3IuZ2V0R2FtZXBhZHMoKVxyXG4gIGNvbnN0IGdhbWVwYWQgPSBnYW1lcGFkc1tpbmRleF1cclxuICBjb25zdCBidXR0b25zID0gZmluZElucHV0KGdhbWVwYWQsIG5hbWVzKVxyXG4gIFxyXG4gIGNvbnN0IGpveXN0aWNrcyA9IHtcclxuICAgIGxlZnQ6IFtnYW1lcGFkLmF4ZXNbMF0sIGdhbWVwYWQuYXhlc1sxXV0sXHJcbiAgICByaWdodDogW2dhbWVwYWQuYXhlc1syXSwgZ2FtZXBhZC5heGVzWzNdXVxyXG4gIH1cclxuICBcclxuICByZXR1cm4ge1xyXG4gICAgYnV0dG9ucyxcclxuICAgIGpveXN0aWNrc1xyXG4gIH1cclxufSIsImltcG9ydCB7IHN1cHBvcnRlZENvbnRyb2xsZXJzIH0gZnJvbSAnLi4vY29uZmlnJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRJbnB1dChnYW1lcGFkLCBuYW1lcykge1xyXG4gIHJldHVybiBnYW1lcGFkLmJ1dHRvbnNcclxuICAgIC5tYXAoKGJ1dHRvbiwgaW5kZXgpID0+IHtcclxuICAgICAgcmV0dXJuIHtidXR0b24sIGluZGV4LCB0eXBlOiBuYW1lc1tpbmRleF19XHJcbiAgICB9KSAgXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRBY3RpdmVJbnB1dChpbnB1dCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBidXR0b25zOiBpbnB1dC5idXR0b25zLmZpbHRlcihvYmogPT4gb2JqLmJ1dHRvbi5wcmVzc2VkKSxcclxuICAgIGpveXN0aWNrczogaW5wdXQuam95c3RpY2tzXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNOZXdCdXR0b25JbnB1dChpbnB1dCwgbGFzdElucHV0KSB7XHJcbiAgaWYgKGlucHV0LmJ1dHRvbnMubGVuZ3RoICE9PSBsYXN0SW5wdXQuYnV0dG9ucy5sZW5ndGgpIHJldHVybiB0cnVlXHJcbiAgaWYgKGlucHV0LmJ1dHRvbnMubGVuZ3RoID09PSAwICYmIGxhc3RJbnB1dC5idXR0b25zLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGZhbHNlXHJcbiAgaWYgKEpTT04uc3RyaW5naWZ5KGlucHV0LmJ1dHRvbnMpICE9PSBKU09OLnN0cmluZ2lmeShsYXN0SW5wdXQuYnV0dG9ucykpIHJldHVybiB0cnVlXHJcbiAgaWYgKGlucHV0LmJ1dHRvbnMuc29tZSgoYnRuLCBpbmRleCkgPT4gYnRuLmJ1dHRvbi52YWx1ZSAhPT0gbGFzdElucHV0LmJ1dHRvbnNbaW5kZXhdLmJ1dHRvbi52YWx1ZSkpIHJldHVybiB0cnVlXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc05ld0pveXN0aWNrSW5wdXQoaW5wdXQsIGxhc3RJbnB1dCkge1xyXG4gIGlmIChKU09OLnN0cmluZ2lmeShpbnB1dC5qb3lzdGlja3MpICE9PSBKU09OLnN0cmluZ2lmeShsYXN0SW5wdXQuam95c3RpY2tzKSkgcmV0dXJuIHRydWVcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFN1cHBvcnRlZENvbnRyb2xsZXIobWFwcGluZykge1xyXG4gIHJldHVybiBzdXBwb3J0ZWRDb250cm9sbGVyc1ttYXBwaW5nXSB8fCBjb25zb2xlLmVycm9yKGAke21hcHBpbmd9IGlzIGFuIHVuc3VwcG9ydGVkIGNvbnRyb2xsZXJgKVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgaXNOZXdCdXR0b25JbnB1dCwgaXNOZXdKb3lzdGlja0lucHV0LCBnZXRTdXBwb3J0ZWRDb250cm9sbGVyLCBnZXRBY3RpdmVJbnB1dCB9IGZyb20gJy4vdmFsaWRhdGUnXHJcbmltcG9ydCB7IG9uLCBkaXNwYXRjaENhbGxiYWNrcyB9IGZyb20gJy4vZXZlbnRzJ1xyXG5pbXBvcnQgeyBnbG9iYWxCdXR0b25Db25zdGFudHMgfSBmcm9tICcuL2NvbmZpZydcclxuaW1wb3J0IHsgZ2VuZXJhdGVJbnB1dCB9IGZyb20gJy4vaW5wdXQnXHJcblxyXG5leHBvcnQgY2xhc3MgR2FtM3BhZCB7XHJcbiAgI2dhbWVwYWRJbmRleFxyXG4gICNidXR0b25OYW1lc1xyXG4gICNpc0Nvbm5lY3RlZCA9IGZhbHNlXHJcbiAgI2xhc3RJbnB1dCA9IHsgYnV0dG9uczogW10sIGpveXN0aWNrczogW10gfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiZ2FtZXBhZGNvbm5lY3RlZFwiLCBldmVudCA9PiB7XHJcbiAgICAgIHRoaXMuI2J1dHRvbk5hbWVzID0gZ2V0U3VwcG9ydGVkQ29udHJvbGxlcihldmVudC5nYW1lcGFkLm1hcHBpbmcpXHJcblxyXG4gICAgICBpZiAodGhpcy4jYnV0dG9uTmFtZXMpIHtcclxuICAgICAgICB0aGlzLiNpc0Nvbm5lY3RlZCA9IHRydWVcclxuICAgICAgICB0aGlzLiNnYW1lcGFkSW5kZXggPSBldmVudC5nYW1lcGFkLmluZGV4XHJcbiAgICAgICAgXHJcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLiNsb29wLmJpbmQodGhpcykpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJnYW1lcGFkZGlzY29ubmVjdGVkXCIsICgpID0+IHtcclxuICAgICAgdGhpcy4jaXNDb25uZWN0ZWQgPSBmYWxzZVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gICNsb29wKCkge1xyXG4gICAgaWYgKCF0aGlzLiNpc0Nvbm5lY3RlZCkgcmV0dXJuXHJcblxyXG4gICAgY29uc3QgaW5wdXQgPSBnZW5lcmF0ZUlucHV0KHRoaXMuI2J1dHRvbk5hbWVzLCB0aGlzLiNnYW1lcGFkSW5kZXgpXHJcbiAgICBjb25zdCBhY3RpdmVJbnB1dCA9IGdldEFjdGl2ZUlucHV0KGlucHV0KSBcclxuXHJcbiAgICBsZXQgaGFzVXBkYXRlZCA9IGZhbHNlXHJcblxyXG4gICAgaWYgKGlzTmV3QnV0dG9uSW5wdXQoYWN0aXZlSW5wdXQsIHRoaXMuI2xhc3RJbnB1dCkpIHtcclxuICAgICAgY29uc3QgbmV3QnV0dG9uVHlwZXMgPSBbXVxyXG5cclxuICAgICAgaGFzVXBkYXRlZCA9IHRydWVcclxuXHJcbiAgICAgIGFjdGl2ZUlucHV0LmJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4geyAgICAgICBcclxuICAgICAgICBkaXNwYXRjaENhbGxiYWNrcyhidXR0b24udHlwZSwgYnV0dG9uKVxyXG4gICAgICAgIG5ld0J1dHRvblR5cGVzLnB1c2goYnV0dG9uLnR5cGUpXHJcbiAgICAgIH0pXHJcbiAgICAgIFxyXG4gICAgICB0aGlzLiNsYXN0SW5wdXQuYnV0dG9uc1xyXG4gICAgICAgIC5mb3JFYWNoKGRhdGEgPT4ge1xyXG4gICAgICAgICAgaWYgKCFuZXdCdXR0b25UeXBlcy5pbmNsdWRlcyhkYXRhLnR5cGUpKSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoQ2FsbGJhY2tzKGRhdGEudHlwZSwgaW5wdXQuYnV0dG9uc1tkYXRhLmluZGV4XSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc05ld0pveXN0aWNrSW5wdXQoYWN0aXZlSW5wdXQsIHRoaXMuI2xhc3RJbnB1dCkpIHtcclxuICAgICAgaGFzVXBkYXRlZCA9IHRydWVcclxuXHJcbiAgICAgIGRpc3BhdGNoQ2FsbGJhY2tzKGdsb2JhbEJ1dHRvbkNvbnN0YW50cy5KT1lTVElDS1MsIGFjdGl2ZUlucHV0LmpveXN0aWNrcylcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaGFzVXBkYXRlZCkge1xyXG4gICAgICB0aGlzLiNsYXN0SW5wdXQgPSBhY3RpdmVJbnB1dFxyXG4gICAgICBkaXNwYXRjaENhbGxiYWNrcyhnbG9iYWxCdXR0b25Db25zdGFudHMuQUxMLCBhY3RpdmVJbnB1dClcclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuI2xvb3AuYmluZCh0aGlzKSlcclxuICB9XHJcblxyXG4gIG9uID0gb25cclxuICBzdGF0aWMgSU5QVVQgPSBnbG9iYWxCdXR0b25Db25zdGFudHNcclxufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QTs7Ozs7Ozs7Ozs7Ozs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBOzs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0E7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9
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
/* harmony export */   "supportedControllers": () => (/* binding */ supportedControllers)
/* harmony export */ });
const supportedControllers = {
  standard: {
    0: 'bottom',
    1: 'right',
    2: 'left',
    3: 'top',
    4: 'l1',
    5: 'r1',
    6: 'l2',
    7: 'r2',
    8: 'select',
    9: 'start',
    10: 'l3',
    11: 'r3',
    12: 'topArrow',
    13: 'bottomArrow',
    14: 'leftArrow',
    15: 'rightArrow'
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
const callbacks = {}

function on(type, cb) {
  if (type === 'connected') {
    window.addEventListener("gamepadconnected", cb)
  }

  if (type === 'disconnected') {
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
  const buttons = (0,_validate__WEBPACK_IMPORTED_MODULE_0__.findActiveButtons)(gamepad, names)
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
/* harmony export */   "findActiveButtons": () => (/* binding */ findActiveButtons),
/* harmony export */   "isNewButtonInput": () => (/* binding */ isNewButtonInput),
/* harmony export */   "isNewJoystickInput": () => (/* binding */ isNewJoystickInput),
/* harmony export */   "getSupportedController": () => (/* binding */ getSupportedController)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./src/config/index.js");


function findActiveButtons(gamepad, names) {
  return gamepad.buttons
    .map((button, index) => {
      return {button, index, type: names[index]}
    })  
    .filter(obj => obj.button.pressed)
}

function isNewButtonInput(input, lastInput) {
  if (input.buttons.length !== lastInput.buttons.length) return true
  if (input.buttons.length === 0) return false
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
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input */ "./src/input/index.js");




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
    
    const input = (0,_input__WEBPACK_IMPORTED_MODULE_2__.generateInput)(this.#buttonNames, this.#gamepadIndex)

    let hasUpdated = false

    if ((0,_validate__WEBPACK_IMPORTED_MODULE_0__.isNewButtonInput)(input, this.#lastInput)) {
      hasUpdated = true
      
      input.buttons.forEach(button => {
        ;(0,_events__WEBPACK_IMPORTED_MODULE_1__.dispatchCallbacks)(button.type, button)
      })
    }

    if ((0,_validate__WEBPACK_IMPORTED_MODULE_0__.isNewJoystickInput)(input, this.#lastInput)) {
      hasUpdated = true

      ;(0,_events__WEBPACK_IMPORTED_MODULE_1__.dispatchCallbacks)('joysticks', input.joysticks)
    }

    if (hasUpdated) {
      this.#lastInput = input
      ;(0,_events__WEBPACK_IMPORTED_MODULE_1__.dispatchCallbacks)('input', input)
    }

    window.requestAnimationFrame(this.#loop.bind(this))
  }

  on = _events__WEBPACK_IMPORTED_MODULE_1__.on
}
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL2dhbTNwYWQvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2dhbTNwYWQvLi9zcmMvY29uZmlnL2luZGV4LmpzIiwid2VicGFjazovL2dhbTNwYWQvLi9zcmMvZXZlbnRzL2luZGV4LmpzIiwid2VicGFjazovL2dhbTNwYWQvLi9zcmMvaW5wdXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ2FtM3BhZC8uL3NyYy92YWxpZGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9nYW0zcGFkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2dhbTNwYWQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2dhbTNwYWQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9nYW0zcGFkL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZ2FtM3BhZC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkoc2VsZiwgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiZXhwb3J0IGNvbnN0IHN1cHBvcnRlZENvbnRyb2xsZXJzID0ge1xyXG4gIHN0YW5kYXJkOiB7XHJcbiAgICAwOiAnYm90dG9tJyxcclxuICAgIDE6ICdyaWdodCcsXHJcbiAgICAyOiAnbGVmdCcsXHJcbiAgICAzOiAndG9wJyxcclxuICAgIDQ6ICdsMScsXHJcbiAgICA1OiAncjEnLFxyXG4gICAgNjogJ2wyJyxcclxuICAgIDc6ICdyMicsXHJcbiAgICA4OiAnc2VsZWN0JyxcclxuICAgIDk6ICdzdGFydCcsXHJcbiAgICAxMDogJ2wzJyxcclxuICAgIDExOiAncjMnLFxyXG4gICAgMTI6ICd0b3BBcnJvdycsXHJcbiAgICAxMzogJ2JvdHRvbUFycm93JyxcclxuICAgIDE0OiAnbGVmdEFycm93JyxcclxuICAgIDE1OiAncmlnaHRBcnJvdydcclxuICB9XHJcbn0iLCJjb25zdCBjYWxsYmFja3MgPSB7fVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9uKHR5cGUsIGNiKSB7XHJcbiAgaWYgKHR5cGUgPT09ICdjb25uZWN0ZWQnKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImdhbWVwYWRjb25uZWN0ZWRcIiwgY2IpXHJcbiAgfVxyXG5cclxuICBpZiAodHlwZSA9PT0gJ2Rpc2Nvbm5lY3RlZCcpIHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiZ2FtZXBhZGRpc2Nvbm5lY3RlZFwiLCBjYilcclxuICB9XHJcblxyXG4gIGNhbGxiYWNrc1t0eXBlXSA9IGNhbGxiYWNrc1t0eXBlXSA/PyBbXVxyXG4gIGNhbGxiYWNrc1t0eXBlXS5wdXNoKGNiKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGF0Y2hDYWxsYmFja3ModHlwZSwgZGF0YSkge1xyXG4gIGlmIChjYWxsYmFja3NbdHlwZV0pIHtcclxuICAgIGNhbGxiYWNrc1t0eXBlXS5mb3JFYWNoKGNiID0+IGNiKGRhdGEpKVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBmaW5kQWN0aXZlQnV0dG9ucyB9IGZyb20gJy4uL3ZhbGlkYXRlJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlSW5wdXQobmFtZXMsIGluZGV4KSB7XHJcbiAgY29uc3QgZ2FtZXBhZHMgPSBuYXZpZ2F0b3IuZ2V0R2FtZXBhZHMoKVxyXG4gIGNvbnN0IGdhbWVwYWQgPSBnYW1lcGFkc1tpbmRleF1cclxuICBjb25zdCBidXR0b25zID0gZmluZEFjdGl2ZUJ1dHRvbnMoZ2FtZXBhZCwgbmFtZXMpXHJcbiAgY29uc3Qgam95c3RpY2tzID0ge1xyXG4gICAgbGVmdDogW2dhbWVwYWQuYXhlc1swXSwgZ2FtZXBhZC5heGVzWzFdXSxcclxuICAgIHJpZ2h0OiBbZ2FtZXBhZC5heGVzWzJdLCBnYW1lcGFkLmF4ZXNbM11dXHJcbiAgfVxyXG4gIFxyXG4gIHJldHVybiB7XHJcbiAgICBidXR0b25zLFxyXG4gICAgam95c3RpY2tzXHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgc3VwcG9ydGVkQ29udHJvbGxlcnMgfSBmcm9tICcuLi9jb25maWcnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmluZEFjdGl2ZUJ1dHRvbnMoZ2FtZXBhZCwgbmFtZXMpIHtcclxuICByZXR1cm4gZ2FtZXBhZC5idXR0b25zXHJcbiAgICAubWFwKChidXR0b24sIGluZGV4KSA9PiB7XHJcbiAgICAgIHJldHVybiB7YnV0dG9uLCBpbmRleCwgdHlwZTogbmFtZXNbaW5kZXhdfVxyXG4gICAgfSkgIFxyXG4gICAgLmZpbHRlcihvYmogPT4gb2JqLmJ1dHRvbi5wcmVzc2VkKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNOZXdCdXR0b25JbnB1dChpbnB1dCwgbGFzdElucHV0KSB7XHJcbiAgaWYgKGlucHV0LmJ1dHRvbnMubGVuZ3RoICE9PSBsYXN0SW5wdXQuYnV0dG9ucy5sZW5ndGgpIHJldHVybiB0cnVlXHJcbiAgaWYgKGlucHV0LmJ1dHRvbnMubGVuZ3RoID09PSAwKSByZXR1cm4gZmFsc2VcclxuICBpZiAoSlNPTi5zdHJpbmdpZnkoaW5wdXQuYnV0dG9ucykgIT09IEpTT04uc3RyaW5naWZ5KGxhc3RJbnB1dC5idXR0b25zKSkgcmV0dXJuIHRydWVcclxuICBpZiAoaW5wdXQuYnV0dG9ucy5zb21lKChidG4sIGluZGV4KSA9PiBidG4uYnV0dG9uLnZhbHVlICE9PSBsYXN0SW5wdXQuYnV0dG9uc1tpbmRleF0uYnV0dG9uLnZhbHVlKSkgcmV0dXJuIHRydWVcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzTmV3Sm95c3RpY2tJbnB1dChpbnB1dCwgbGFzdElucHV0KSB7XHJcbiAgaWYgKEpTT04uc3RyaW5naWZ5KGlucHV0LmpveXN0aWNrcykgIT09IEpTT04uc3RyaW5naWZ5KGxhc3RJbnB1dC5qb3lzdGlja3MpKSByZXR1cm4gdHJ1ZVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3VwcG9ydGVkQ29udHJvbGxlcihtYXBwaW5nKSB7XHJcbiAgcmV0dXJuIHN1cHBvcnRlZENvbnRyb2xsZXJzW21hcHBpbmddIHx8IGNvbnNvbGUuZXJyb3IoYCR7bWFwcGluZ30gaXMgYW4gdW5zdXBwb3J0ZWQgY29udHJvbGxlcmApXHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBpc05ld0J1dHRvbklucHV0LCBpc05ld0pveXN0aWNrSW5wdXQsIGdldFN1cHBvcnRlZENvbnRyb2xsZXIgfSBmcm9tICcuL3ZhbGlkYXRlJ1xyXG5pbXBvcnQgeyBvbiwgZGlzcGF0Y2hDYWxsYmFja3MgfSBmcm9tICcuL2V2ZW50cydcclxuaW1wb3J0IHsgZ2VuZXJhdGVJbnB1dCB9IGZyb20gJy4vaW5wdXQnXHJcblxyXG5leHBvcnQgY2xhc3MgR2FtM3BhZCB7XHJcbiAgI2dhbWVwYWRJbmRleFxyXG4gICNidXR0b25OYW1lc1xyXG4gICNpc0Nvbm5lY3RlZCA9IGZhbHNlXHJcbiAgI2xhc3RJbnB1dCA9IHsgYnV0dG9uczogW10sIGpveXN0aWNrczogW10gfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiZ2FtZXBhZGNvbm5lY3RlZFwiLCBldmVudCA9PiB7XHJcbiAgICAgIHRoaXMuI2J1dHRvbk5hbWVzID0gZ2V0U3VwcG9ydGVkQ29udHJvbGxlcihldmVudC5nYW1lcGFkLm1hcHBpbmcpXHJcblxyXG4gICAgICBpZiAodGhpcy4jYnV0dG9uTmFtZXMpIHtcclxuICAgICAgICB0aGlzLiNpc0Nvbm5lY3RlZCA9IHRydWVcclxuICAgICAgICB0aGlzLiNnYW1lcGFkSW5kZXggPSBldmVudC5nYW1lcGFkLmluZGV4XHJcbiAgICAgICAgXHJcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLiNsb29wLmJpbmQodGhpcykpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJnYW1lcGFkZGlzY29ubmVjdGVkXCIsICgpID0+IHtcclxuICAgICAgdGhpcy4jaXNDb25uZWN0ZWQgPSBmYWxzZVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gICNsb29wKCkge1xyXG4gICAgaWYgKCF0aGlzLiNpc0Nvbm5lY3RlZCkgcmV0dXJuXHJcbiAgICBcclxuICAgIGNvbnN0IGlucHV0ID0gZ2VuZXJhdGVJbnB1dCh0aGlzLiNidXR0b25OYW1lcywgdGhpcy4jZ2FtZXBhZEluZGV4KVxyXG5cclxuICAgIGxldCBoYXNVcGRhdGVkID0gZmFsc2VcclxuXHJcbiAgICBpZiAoaXNOZXdCdXR0b25JbnB1dChpbnB1dCwgdGhpcy4jbGFzdElucHV0KSkge1xyXG4gICAgICBoYXNVcGRhdGVkID0gdHJ1ZVxyXG4gICAgICBcclxuICAgICAgaW5wdXQuYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2hDYWxsYmFja3MoYnV0dG9uLnR5cGUsIGJ1dHRvbilcclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNOZXdKb3lzdGlja0lucHV0KGlucHV0LCB0aGlzLiNsYXN0SW5wdXQpKSB7XHJcbiAgICAgIGhhc1VwZGF0ZWQgPSB0cnVlXHJcblxyXG4gICAgICBkaXNwYXRjaENhbGxiYWNrcygnam95c3RpY2tzJywgaW5wdXQuam95c3RpY2tzKVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChoYXNVcGRhdGVkKSB7XHJcbiAgICAgIHRoaXMuI2xhc3RJbnB1dCA9IGlucHV0XHJcbiAgICAgIGRpc3BhdGNoQ2FsbGJhY2tzKCdpbnB1dCcsIGlucHV0KVxyXG4gICAgfVxyXG5cclxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy4jbG9vcC5iaW5kKHRoaXMpKVxyXG4gIH1cclxuXHJcbiAgb24gPSBvblxyXG59Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0E7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0E7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBOzs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
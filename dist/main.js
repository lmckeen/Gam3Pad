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

      ;(0,_events__WEBPACK_IMPORTED_MODULE_1__.dispatchCallbacks)('joysticks', activeInput.joysticks)
    }

    if (hasUpdated) {
      this.#lastInput = activeInput
      ;(0,_events__WEBPACK_IMPORTED_MODULE_1__.dispatchCallbacks)('input', activeInput)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL2dhbTNwYWQvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2dhbTNwYWQvLi9zcmMvY29uZmlnL2luZGV4LmpzIiwid2VicGFjazovL2dhbTNwYWQvLi9zcmMvZXZlbnRzL2luZGV4LmpzIiwid2VicGFjazovL2dhbTNwYWQvLi9zcmMvaW5wdXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ2FtM3BhZC8uL3NyYy92YWxpZGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9nYW0zcGFkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2dhbTNwYWQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2dhbTNwYWQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9nYW0zcGFkL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZ2FtM3BhZC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkoc2VsZiwgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiZXhwb3J0IGNvbnN0IHN1cHBvcnRlZENvbnRyb2xsZXJzID0ge1xyXG4gIHN0YW5kYXJkOiB7XHJcbiAgICAwOiAnYm90dG9tJyxcclxuICAgIDE6ICdyaWdodCcsXHJcbiAgICAyOiAnbGVmdCcsXHJcbiAgICAzOiAndG9wJyxcclxuICAgIDQ6ICdsMScsXHJcbiAgICA1OiAncjEnLFxyXG4gICAgNjogJ2wyJyxcclxuICAgIDc6ICdyMicsXHJcbiAgICA4OiAnc2VsZWN0JyxcclxuICAgIDk6ICdzdGFydCcsXHJcbiAgICAxMDogJ2wzJyxcclxuICAgIDExOiAncjMnLFxyXG4gICAgMTI6ICd0b3BBcnJvdycsXHJcbiAgICAxMzogJ2JvdHRvbUFycm93JyxcclxuICAgIDE0OiAnbGVmdEFycm93JyxcclxuICAgIDE1OiAncmlnaHRBcnJvdydcclxuICB9XHJcbn0iLCJjb25zdCBjYWxsYmFja3MgPSB7fVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9uKHR5cGUsIGNiKSB7XHJcbiAgaWYgKHR5cGUgPT09ICdjb25uZWN0ZWQnKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImdhbWVwYWRjb25uZWN0ZWRcIiwgY2IpXHJcbiAgfVxyXG5cclxuICBpZiAodHlwZSA9PT0gJ2Rpc2Nvbm5lY3RlZCcpIHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiZ2FtZXBhZGRpc2Nvbm5lY3RlZFwiLCBjYilcclxuICB9XHJcblxyXG4gIGNhbGxiYWNrc1t0eXBlXSA9IGNhbGxiYWNrc1t0eXBlXSA/PyBbXVxyXG4gIGNhbGxiYWNrc1t0eXBlXS5wdXNoKGNiKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGF0Y2hDYWxsYmFja3ModHlwZSwgZGF0YSkge1xyXG4gIGlmIChjYWxsYmFja3NbdHlwZV0pIHtcclxuICAgIGNhbGxiYWNrc1t0eXBlXS5mb3JFYWNoKGNiID0+IGNiKGRhdGEpKVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBmaW5kSW5wdXQgfSBmcm9tICcuLi92YWxpZGF0ZSdcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUlucHV0KG5hbWVzLCBpbmRleCkge1xyXG4gIGNvbnN0IGdhbWVwYWRzID0gbmF2aWdhdG9yLmdldEdhbWVwYWRzKClcclxuICBjb25zdCBnYW1lcGFkID0gZ2FtZXBhZHNbaW5kZXhdXHJcbiAgY29uc3QgYnV0dG9ucyA9IGZpbmRJbnB1dChnYW1lcGFkLCBuYW1lcylcclxuICBcclxuICBjb25zdCBqb3lzdGlja3MgPSB7XHJcbiAgICBsZWZ0OiBbZ2FtZXBhZC5heGVzWzBdLCBnYW1lcGFkLmF4ZXNbMV1dLFxyXG4gICAgcmlnaHQ6IFtnYW1lcGFkLmF4ZXNbMl0sIGdhbWVwYWQuYXhlc1szXV1cclxuICB9XHJcbiAgXHJcbiAgcmV0dXJuIHtcclxuICAgIGJ1dHRvbnMsXHJcbiAgICBqb3lzdGlja3NcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBzdXBwb3J0ZWRDb250cm9sbGVycyB9IGZyb20gJy4uL2NvbmZpZydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmaW5kSW5wdXQoZ2FtZXBhZCwgbmFtZXMpIHtcclxuICByZXR1cm4gZ2FtZXBhZC5idXR0b25zXHJcbiAgICAubWFwKChidXR0b24sIGluZGV4KSA9PiB7XHJcbiAgICAgIHJldHVybiB7YnV0dG9uLCBpbmRleCwgdHlwZTogbmFtZXNbaW5kZXhdfVxyXG4gICAgfSkgIFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWN0aXZlSW5wdXQoaW5wdXQpIHtcclxuICByZXR1cm4ge1xyXG4gICAgYnV0dG9uczogaW5wdXQuYnV0dG9ucy5maWx0ZXIob2JqID0+IG9iai5idXR0b24ucHJlc3NlZCksXHJcbiAgICBqb3lzdGlja3M6IGlucHV0LmpveXN0aWNrc1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzTmV3QnV0dG9uSW5wdXQoaW5wdXQsIGxhc3RJbnB1dCkge1xyXG4gIGlmIChpbnB1dC5idXR0b25zLmxlbmd0aCAhPT0gbGFzdElucHV0LmJ1dHRvbnMubGVuZ3RoKSByZXR1cm4gdHJ1ZVxyXG4gIGlmIChpbnB1dC5idXR0b25zLmxlbmd0aCA9PT0gMCAmJiBsYXN0SW5wdXQuYnV0dG9ucy5sZW5ndGggPT09IDApIHJldHVybiBmYWxzZVxyXG4gIGlmIChKU09OLnN0cmluZ2lmeShpbnB1dC5idXR0b25zKSAhPT0gSlNPTi5zdHJpbmdpZnkobGFzdElucHV0LmJ1dHRvbnMpKSByZXR1cm4gdHJ1ZVxyXG4gIGlmIChpbnB1dC5idXR0b25zLnNvbWUoKGJ0biwgaW5kZXgpID0+IGJ0bi5idXR0b24udmFsdWUgIT09IGxhc3RJbnB1dC5idXR0b25zW2luZGV4XS5idXR0b24udmFsdWUpKSByZXR1cm4gdHJ1ZVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNOZXdKb3lzdGlja0lucHV0KGlucHV0LCBsYXN0SW5wdXQpIHtcclxuICBpZiAoSlNPTi5zdHJpbmdpZnkoaW5wdXQuam95c3RpY2tzKSAhPT0gSlNPTi5zdHJpbmdpZnkobGFzdElucHV0LmpveXN0aWNrcykpIHJldHVybiB0cnVlXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTdXBwb3J0ZWRDb250cm9sbGVyKG1hcHBpbmcpIHtcclxuICByZXR1cm4gc3VwcG9ydGVkQ29udHJvbGxlcnNbbWFwcGluZ10gfHwgY29uc29sZS5lcnJvcihgJHttYXBwaW5nfSBpcyBhbiB1bnN1cHBvcnRlZCBjb250cm9sbGVyYClcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGlzTmV3QnV0dG9uSW5wdXQsIGlzTmV3Sm95c3RpY2tJbnB1dCwgZ2V0U3VwcG9ydGVkQ29udHJvbGxlciwgZ2V0QWN0aXZlSW5wdXQgfSBmcm9tICcuL3ZhbGlkYXRlJ1xyXG5pbXBvcnQgeyBvbiwgZGlzcGF0Y2hDYWxsYmFja3MgfSBmcm9tICcuL2V2ZW50cydcclxuaW1wb3J0IHsgZ2VuZXJhdGVJbnB1dCB9IGZyb20gJy4vaW5wdXQnXHJcblxyXG5leHBvcnQgY2xhc3MgR2FtM3BhZCB7XHJcbiAgI2dhbWVwYWRJbmRleFxyXG4gICNidXR0b25OYW1lc1xyXG4gICNpc0Nvbm5lY3RlZCA9IGZhbHNlXHJcbiAgI2xhc3RJbnB1dCA9IHsgYnV0dG9uczogW10sIGpveXN0aWNrczogW10gfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiZ2FtZXBhZGNvbm5lY3RlZFwiLCBldmVudCA9PiB7XHJcbiAgICAgIHRoaXMuI2J1dHRvbk5hbWVzID0gZ2V0U3VwcG9ydGVkQ29udHJvbGxlcihldmVudC5nYW1lcGFkLm1hcHBpbmcpXHJcblxyXG4gICAgICBpZiAodGhpcy4jYnV0dG9uTmFtZXMpIHtcclxuICAgICAgICB0aGlzLiNpc0Nvbm5lY3RlZCA9IHRydWVcclxuICAgICAgICB0aGlzLiNnYW1lcGFkSW5kZXggPSBldmVudC5nYW1lcGFkLmluZGV4XHJcbiAgICAgICAgXHJcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLiNsb29wLmJpbmQodGhpcykpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJnYW1lcGFkZGlzY29ubmVjdGVkXCIsICgpID0+IHtcclxuICAgICAgdGhpcy4jaXNDb25uZWN0ZWQgPSBmYWxzZVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gICNsb29wKCkge1xyXG4gICAgaWYgKCF0aGlzLiNpc0Nvbm5lY3RlZCkgcmV0dXJuXHJcblxyXG4gICAgY29uc3QgaW5wdXQgPSBnZW5lcmF0ZUlucHV0KHRoaXMuI2J1dHRvbk5hbWVzLCB0aGlzLiNnYW1lcGFkSW5kZXgpXHJcbiAgICBjb25zdCBhY3RpdmVJbnB1dCA9IGdldEFjdGl2ZUlucHV0KGlucHV0KSBcclxuXHJcbiAgICBsZXQgaGFzVXBkYXRlZCA9IGZhbHNlXHJcblxyXG4gICAgaWYgKGlzTmV3QnV0dG9uSW5wdXQoYWN0aXZlSW5wdXQsIHRoaXMuI2xhc3RJbnB1dCkpIHtcclxuICAgICAgY29uc3QgbmV3QnV0dG9uVHlwZXMgPSBbXVxyXG5cclxuICAgICAgaGFzVXBkYXRlZCA9IHRydWVcclxuXHJcbiAgICAgIGFjdGl2ZUlucHV0LmJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4geyAgICAgICBcclxuICAgICAgICBkaXNwYXRjaENhbGxiYWNrcyhidXR0b24udHlwZSwgYnV0dG9uKVxyXG4gICAgICAgIG5ld0J1dHRvblR5cGVzLnB1c2goYnV0dG9uLnR5cGUpXHJcbiAgICAgIH0pXHJcbiAgICAgIFxyXG4gICAgICB0aGlzLiNsYXN0SW5wdXQuYnV0dG9uc1xyXG4gICAgICAgIC5mb3JFYWNoKGRhdGEgPT4ge1xyXG4gICAgICAgICAgaWYgKCFuZXdCdXR0b25UeXBlcy5pbmNsdWRlcyhkYXRhLnR5cGUpKSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoQ2FsbGJhY2tzKGRhdGEudHlwZSwgaW5wdXQuYnV0dG9uc1tkYXRhLmluZGV4XSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc05ld0pveXN0aWNrSW5wdXQoYWN0aXZlSW5wdXQsIHRoaXMuI2xhc3RJbnB1dCkpIHtcclxuICAgICAgaGFzVXBkYXRlZCA9IHRydWVcclxuXHJcbiAgICAgIGRpc3BhdGNoQ2FsbGJhY2tzKCdqb3lzdGlja3MnLCBhY3RpdmVJbnB1dC5qb3lzdGlja3MpXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGhhc1VwZGF0ZWQpIHtcclxuICAgICAgdGhpcy4jbGFzdElucHV0ID0gYWN0aXZlSW5wdXRcclxuICAgICAgZGlzcGF0Y2hDYWxsYmFja3MoJ2lucHV0JywgYWN0aXZlSW5wdXQpXHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLiNsb29wLmJpbmQodGhpcykpXHJcbiAgfVxyXG5cclxuICBvbiA9IG9uXHJcbn0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QTs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QTs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBOzs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
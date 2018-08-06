/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/02_main_menu/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/02_main_menu/components/ApplicationsList.ts":
/*!*********************************************************!*\
  !*** ./src/02_main_menu/components/ApplicationsList.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Component_1 = __webpack_require__(/*! ./Component */ "./src/02_main_menu/components/Component.ts");
class ApplicationsList extends Component_1.Component {
    constructor() {
        super(`<strong>Applications List</strong>`, '.c-app__content');
    }
}
exports.ApplicationsList = ApplicationsList;


/***/ }),

/***/ "./src/02_main_menu/components/BatteryStatus.ts":
/*!******************************************************!*\
  !*** ./src/02_main_menu/components/BatteryStatus.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Component_1 = __webpack_require__(/*! ./Component */ "./src/02_main_menu/components/Component.ts");
class BatteryStatus extends Component_1.Component {
    constructor() {
        super(`<strong>Battery</strong>`, '.c-app__device-info');
    }
}
exports.BatteryStatus = BatteryStatus;


/***/ }),

/***/ "./src/02_main_menu/components/Component.ts":
/*!**************************************************!*\
  !*** ./src/02_main_menu/components/Component.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Component {
    constructor(theTemplate = `<div>Template</div>`, theRenderTarget = 'body') {
        this.theTemplate = theTemplate;
        this.template = theTemplate;
        this.renderTarget = theRenderTarget;
        this.render(this.renderTarget);
    }
    render(target) {
        const elm = document.createElement('template');
        elm.innerHTML = this.template;
        // Tip: Using content.cloneNode(true) will completely replace the HTMLElement
        // tag with whatever we pass in, yielding a result similar to React or Vue.
        document.querySelector(target).appendChild(elm.content.cloneNode(true));
    }
}
exports.Component = Component;


/***/ }),

/***/ "./src/02_main_menu/components/ControllerStatus.ts":
/*!*********************************************************!*\
  !*** ./src/02_main_menu/components/ControllerStatus.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Component_1 = __webpack_require__(/*! ./Component */ "./src/02_main_menu/components/Component.ts");
class ControllerStatus extends Component_1.Component {
    constructor() {
        super(`<strong>ControllerStatus</strong>`, '.c-app__footer');
    }
}
exports.ControllerStatus = ControllerStatus;


/***/ }),

/***/ "./src/02_main_menu/components/CurrentActionHelp.ts":
/*!**********************************************************!*\
  !*** ./src/02_main_menu/components/CurrentActionHelp.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Component_1 = __webpack_require__(/*! ./Component */ "./src/02_main_menu/components/Component.ts");
class CurrentActionHelp extends Component_1.Component {
    constructor() {
        super(`<strong class="align-right">CurrentActionHelp</strong>`, '.c-app__footer');
    }
}
exports.CurrentActionHelp = CurrentActionHelp;


/***/ }),

/***/ "./src/02_main_menu/components/CurrentTime.ts":
/*!****************************************************!*\
  !*** ./src/02_main_menu/components/CurrentTime.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Component_1 = __webpack_require__(/*! ./Component */ "./src/02_main_menu/components/Component.ts");
class CurrentTime extends Component_1.Component {
    constructor() {
        super(`<strong>CurrentTime</strong>`, '.c-app__device-info');
        console.log('Hello from CurrentTime');
    }
}
exports.CurrentTime = CurrentTime;


/***/ }),

/***/ "./src/02_main_menu/components/MainMenuNavigation.ts":
/*!***********************************************************!*\
  !*** ./src/02_main_menu/components/MainMenuNavigation.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Component_1 = __webpack_require__(/*! ./Component */ "./src/02_main_menu/components/Component.ts");
class MainMenuNavigation extends Component_1.Component {
    constructor() {
        super(`<strong>Main Menu Navigation</strong>`, '.c-app__content');
    }
}
exports.MainMenuNavigation = MainMenuNavigation;


/***/ }),

/***/ "./src/02_main_menu/components/UserAvatars.ts":
/*!****************************************************!*\
  !*** ./src/02_main_menu/components/UserAvatars.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Component_1 = __webpack_require__(/*! ./Component */ "./src/02_main_menu/components/Component.ts");
function renderAvatars(users = []) {
    return users.map(user => `
      <div class="c-avatar">
        <img src="https://api.adorable.io/avatars/285/${user.username}" class="c-avatar__image" />
        <div class="c-avatar__name">${user.name}'s Page</div>
      </div>
    `).join('');
}
class UserAvatars extends Component_1.Component {
    constructor(users = []) {
        const template = renderAvatars(users);
        super(template, '.c-app__avatars');
        console.log('Hello from avatars', users);
    }
}
exports.UserAvatars = UserAvatars;


/***/ }),

/***/ "./src/02_main_menu/components/WiFiConnectionStatus.ts":
/*!*************************************************************!*\
  !*** ./src/02_main_menu/components/WiFiConnectionStatus.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Component_1 = __webpack_require__(/*! ./Component */ "./src/02_main_menu/components/Component.ts");
class WiFiConnectionStatus extends Component_1.Component {
    constructor() {
        super(`<strong>WiFiConnectionStatus</strong>`, '.c-app__device-info');
    }
}
exports.WiFiConnectionStatus = WiFiConnectionStatus;


/***/ }),

/***/ "./src/02_main_menu/main.ts":
/*!**********************************!*\
  !*** ./src/02_main_menu/main.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* 02: Nintendo Switch Main Menu */
const UserAvatars_1 = __webpack_require__(/*! ./components/UserAvatars */ "./src/02_main_menu/components/UserAvatars.ts");
const CurrentTime_1 = __webpack_require__(/*! ./components/CurrentTime */ "./src/02_main_menu/components/CurrentTime.ts");
const BatteryStatus_1 = __webpack_require__(/*! ./components/BatteryStatus */ "./src/02_main_menu/components/BatteryStatus.ts");
const WiFiConnectionStatus_1 = __webpack_require__(/*! ./components/WiFiConnectionStatus */ "./src/02_main_menu/components/WiFiConnectionStatus.ts");
const ApplicationsList_1 = __webpack_require__(/*! ./components/ApplicationsList */ "./src/02_main_menu/components/ApplicationsList.ts");
const MainMenuNavigation_1 = __webpack_require__(/*! ./components/MainMenuNavigation */ "./src/02_main_menu/components/MainMenuNavigation.ts");
const ControllerStatus_1 = __webpack_require__(/*! ./components/ControllerStatus */ "./src/02_main_menu/components/ControllerStatus.ts");
const CurrentActionHelp_1 = __webpack_require__(/*! ./components/CurrentActionHelp */ "./src/02_main_menu/components/CurrentActionHelp.ts");
const users = [
    {
        name: 'Joe',
        username: 'joe@joe.com'
    },
    {
        name: 'Jane',
        username: 'jane@jane.com'
    }
];
const avatars = new UserAvatars_1.UserAvatars(users);
const currentTime = new CurrentTime_1.CurrentTime;
const wifiConnectionStatus = new WiFiConnectionStatus_1.WiFiConnectionStatus;
const batteryStatus = new BatteryStatus_1.BatteryStatus;
const applicationsList = new ApplicationsList_1.ApplicationsList;
const mainMenuNavigation = new MainMenuNavigation_1.MainMenuNavigation;
const controllerStatus = new ControllerStatus_1.ControllerStatus;
const currentActionHelp = new CurrentActionHelp_1.CurrentActionHelp;
console.log('Hello from main');


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjLzAyX21haW5fbWVudS9jb21wb25lbnRzL0FwcGxpY2F0aW9uc0xpc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjLzAyX21haW5fbWVudS9jb21wb25lbnRzL0JhdHRlcnlTdGF0dXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjLzAyX21haW5fbWVudS9jb21wb25lbnRzL0NvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvMDJfbWFpbl9tZW51L2NvbXBvbmVudHMvQ29udHJvbGxlclN0YXR1cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvMDJfbWFpbl9tZW51L2NvbXBvbmVudHMvQ3VycmVudEFjdGlvbkhlbHAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjLzAyX21haW5fbWVudS9jb21wb25lbnRzL0N1cnJlbnRUaW1lLnRzIiwid2VicGFjazovLy8uL3NyYy8wMl9tYWluX21lbnUvY29tcG9uZW50cy9NYWluTWVudU5hdmlnYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjLzAyX21haW5fbWVudS9jb21wb25lbnRzL1VzZXJBdmF0YXJzLnRzIiwid2VicGFjazovLy8uL3NyYy8wMl9tYWluX21lbnUvY29tcG9uZW50cy9XaUZpQ29ubmVjdGlvblN0YXR1cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvMDJfbWFpbl9tZW51L21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5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IFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvMDJfbWFpbl9tZW51L21haW4udHNcIik7XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiLi9Db21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHBsaWNhdGlvbnNMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKFxyXG4gICAgICBgPHN0cm9uZz5BcHBsaWNhdGlvbnMgTGlzdDwvc3Ryb25nPmAsXHJcbiAgICAgICcuYy1hcHBfX2NvbnRlbnQnXHJcbiAgICApXHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIi4vQ29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQmF0dGVyeVN0YXR1cyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcihcclxuICAgICAgYDxzdHJvbmc+QmF0dGVyeTwvc3Ryb25nPmAsXHJcbiAgICAgICcuYy1hcHBfX2RldmljZS1pbmZvJ1xyXG4gICAgKVxyXG4gIH1cclxufSIsImV4cG9ydCBjbGFzcyBDb21wb25lbnQge1xyXG4gIHB1YmxpYyB0ZW1wbGF0ZTpzdHJpbmdcclxuICBwdWJsaWMgcmVuZGVyVGFyZ2V0OnN0cmluZ1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgdGhlVGVtcGxhdGUgPSBgPGRpdj5UZW1wbGF0ZTwvZGl2PmAsIHRoZVJlbmRlclRhcmdldCA9ICdib2R5Jykge1xyXG4gICAgdGhpcy50ZW1wbGF0ZSA9IHRoZVRlbXBsYXRlXHJcbiAgICB0aGlzLnJlbmRlclRhcmdldCA9IHRoZVJlbmRlclRhcmdldFxyXG4gICAgdGhpcy5yZW5kZXIodGhpcy5yZW5kZXJUYXJnZXQpXHJcbiAgfVxyXG5cclxuICByZW5kZXIodGFyZ2V0KSB7XHJcbiAgICBjb25zdCBlbG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpXHJcbiAgICBlbG0uaW5uZXJIVE1MID0gdGhpcy50ZW1wbGF0ZVxyXG5cclxuICAgIC8vIFRpcDogVXNpbmcgY29udGVudC5jbG9uZU5vZGUodHJ1ZSkgd2lsbCBjb21wbGV0ZWx5IHJlcGxhY2UgdGhlIEhUTUxFbGVtZW50XHJcbiAgICAvLyB0YWcgd2l0aCB3aGF0ZXZlciB3ZSBwYXNzIGluLCB5aWVsZGluZyBhIHJlc3VsdCBzaW1pbGFyIHRvIFJlYWN0IG9yIFZ1ZS5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KS5hcHBlbmRDaGlsZChlbG0uY29udGVudC5jbG9uZU5vZGUodHJ1ZSkpXHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIi4vQ29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29udHJvbGxlclN0YXR1cyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcihcclxuICAgICAgYDxzdHJvbmc+Q29udHJvbGxlclN0YXR1czwvc3Ryb25nPmAsXHJcbiAgICAgICcuYy1hcHBfX2Zvb3RlcidcclxuICAgIClcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiLi9Db21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDdXJyZW50QWN0aW9uSGVscCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcihcclxuICAgICAgYDxzdHJvbmcgY2xhc3M9XCJhbGlnbi1yaWdodFwiPkN1cnJlbnRBY3Rpb25IZWxwPC9zdHJvbmc+YCxcclxuICAgICAgJy5jLWFwcF9fZm9vdGVyJ1xyXG4gICAgKVxyXG4gIH1cclxufSIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCIuL0NvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEN1cnJlbnRUaW1lIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKFxyXG4gICAgICBgPHN0cm9uZz5DdXJyZW50VGltZTwvc3Ryb25nPmAsXHJcbiAgICAgICcuYy1hcHBfX2RldmljZS1pbmZvJ1xyXG4gICAgKVxyXG4gICAgY29uc29sZS5sb2coJ0hlbGxvIGZyb20gQ3VycmVudFRpbWUnKVxyXG4gIH1cclxufSIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCIuL0NvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1haW5NZW51TmF2aWdhdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcihcclxuICAgICAgYDxzdHJvbmc+TWFpbiBNZW51IE5hdmlnYXRpb248L3N0cm9uZz5gLFxyXG4gICAgICAnLmMtYXBwX19jb250ZW50J1xyXG4gICAgKVxyXG4gIH1cclxufSIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCIuL0NvbXBvbmVudFwiO1xyXG5cclxuZnVuY3Rpb24gcmVuZGVyQXZhdGFycyh1c2VyczpBcnJheTxhbnk+ID0gW10pIHtcclxuICByZXR1cm4gdXNlcnMubWFwKHVzZXIgPT4gYFxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYy1hdmF0YXJcIj5cclxuICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vYXBpLmFkb3JhYmxlLmlvL2F2YXRhcnMvMjg1LyR7dXNlci51c2VybmFtZX1cIiBjbGFzcz1cImMtYXZhdGFyX19pbWFnZVwiIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImMtYXZhdGFyX19uYW1lXCI+JHt1c2VyLm5hbWV9J3MgUGFnZTwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIGApLmpvaW4oJycpXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VyQXZhdGFycyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IodXNlcnM6QXJyYXk8b2JqZWN0PiA9IFtdKSB7XHJcbiAgICBjb25zdCB0ZW1wbGF0ZTpzdHJpbmcgPSByZW5kZXJBdmF0YXJzKHVzZXJzKVxyXG4gICAgc3VwZXIodGVtcGxhdGUsICcuYy1hcHBfX2F2YXRhcnMnKVxyXG4gICAgY29uc29sZS5sb2coJ0hlbGxvIGZyb20gYXZhdGFycycsIHVzZXJzKVxyXG4gIH1cclxufSIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCIuL0NvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFdpRmlDb25uZWN0aW9uU3RhdHVzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKFxyXG4gICAgICBgPHN0cm9uZz5XaUZpQ29ubmVjdGlvblN0YXR1czwvc3Ryb25nPmAsXHJcbiAgICAgICcuYy1hcHBfX2RldmljZS1pbmZvJ1xyXG4gICAgKVxyXG4gIH1cclxufSIsIi8qIDAyOiBOaW50ZW5kbyBTd2l0Y2ggTWFpbiBNZW51ICovXHJcbmltcG9ydCB7IFVzZXJBdmF0YXJzIH0gZnJvbSAnLi9jb21wb25lbnRzL1VzZXJBdmF0YXJzJ1xyXG5pbXBvcnQgeyBDdXJyZW50VGltZSB9IGZyb20gJy4vY29tcG9uZW50cy9DdXJyZW50VGltZSdcclxuaW1wb3J0IHsgQmF0dGVyeVN0YXR1cyB9IGZyb20gJy4vY29tcG9uZW50cy9CYXR0ZXJ5U3RhdHVzJ1xyXG5pbXBvcnQgeyBXaUZpQ29ubmVjdGlvblN0YXR1cyB9IGZyb20gJy4vY29tcG9uZW50cy9XaUZpQ29ubmVjdGlvblN0YXR1cydcclxuaW1wb3J0IHsgQXBwbGljYXRpb25zTGlzdCB9IGZyb20gJy4vY29tcG9uZW50cy9BcHBsaWNhdGlvbnNMaXN0J1xyXG5pbXBvcnQgeyBNYWluTWVudU5hdmlnYXRpb24gfSBmcm9tICcuL2NvbXBvbmVudHMvTWFpbk1lbnVOYXZpZ2F0aW9uJ1xyXG5pbXBvcnQgeyBDb250cm9sbGVyU3RhdHVzIH0gZnJvbSAnLi9jb21wb25lbnRzL0NvbnRyb2xsZXJTdGF0dXMnXHJcbmltcG9ydCB7IEN1cnJlbnRBY3Rpb25IZWxwIH0gZnJvbSAnLi9jb21wb25lbnRzL0N1cnJlbnRBY3Rpb25IZWxwJ1xyXG5cclxuY29uc3QgdXNlcnMgPSBbXHJcbiAge1xyXG4gICAgbmFtZTogJ0pvZScsXHJcbiAgICB1c2VybmFtZTogJ2pvZUBqb2UuY29tJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0phbmUnLFxyXG4gICAgdXNlcm5hbWU6ICdqYW5lQGphbmUuY29tJ1xyXG4gIH1cclxuXVxyXG5cclxuY29uc3QgYXZhdGFycyA9IG5ldyBVc2VyQXZhdGFycyh1c2VycylcclxuY29uc3QgY3VycmVudFRpbWUgPSBuZXcgQ3VycmVudFRpbWVcclxuY29uc3Qgd2lmaUNvbm5lY3Rpb25TdGF0dXMgPSBuZXcgV2lGaUNvbm5lY3Rpb25TdGF0dXNcclxuY29uc3QgYmF0dGVyeVN0YXR1cyA9IG5ldyBCYXR0ZXJ5U3RhdHVzXHJcbmNvbnN0IGFwcGxpY2F0aW9uc0xpc3QgPSBuZXcgQXBwbGljYXRpb25zTGlzdFxyXG5jb25zdCBtYWluTWVudU5hdmlnYXRpb24gPSBuZXcgTWFpbk1lbnVOYXZpZ2F0aW9uXHJcbmNvbnN0IGNvbnRyb2xsZXJTdGF0dXMgPSBuZXcgQ29udHJvbGxlclN0YXR1c1xyXG5jb25zdCBjdXJyZW50QWN0aW9uSGVscCA9IG5ldyBDdXJyZW50QWN0aW9uSGVscFxyXG5cclxuY29uc29sZS5sb2coJ0hlbGxvIGZyb20gbWFpbicpXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9
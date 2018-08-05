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

/***/ "./src/02_main_menu/components sync recursive ^\\.\\/.*$":
/*!***************************************************!*\
  !*** ./src/02_main_menu/components sync ^\.\/.*$ ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ApplicationsList": "./src/02_main_menu/components/ApplicationsList.ts",
	"./ApplicationsList.ts": "./src/02_main_menu/components/ApplicationsList.ts",
	"./BatteryStatus": "./src/02_main_menu/components/BatteryStatus.ts",
	"./BatteryStatus.ts": "./src/02_main_menu/components/BatteryStatus.ts",
	"./Component": "./src/02_main_menu/components/Component.ts",
	"./Component.ts": "./src/02_main_menu/components/Component.ts",
	"./ControllerStatus": "./src/02_main_menu/components/ControllerStatus.ts",
	"./ControllerStatus.ts": "./src/02_main_menu/components/ControllerStatus.ts",
	"./CurrentActionHelp": "./src/02_main_menu/components/CurrentActionHelp.ts",
	"./CurrentActionHelp.ts": "./src/02_main_menu/components/CurrentActionHelp.ts",
	"./CurrentTime": "./src/02_main_menu/components/CurrentTime.ts",
	"./CurrentTime.ts": "./src/02_main_menu/components/CurrentTime.ts",
	"./MainMenuNavigation": "./src/02_main_menu/components/MainMenuNavigation.ts",
	"./MainMenuNavigation.ts": "./src/02_main_menu/components/MainMenuNavigation.ts",
	"./UserAvatars": "./src/02_main_menu/components/UserAvatars.ts",
	"./UserAvatars.ts": "./src/02_main_menu/components/UserAvatars.ts",
	"./WifiConnectionStatus": "./src/02_main_menu/components/WifiConnectionStatus.ts",
	"./WifiConnectionStatus.ts": "./src/02_main_menu/components/WifiConnectionStatus.ts"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/02_main_menu/components sync recursive ^\\.\\/.*$";

/***/ }),

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
        super(`<strong>Applications List</strong>`
        // '.c-app__content'
        );
        this.test = "hello world";
    }
    myFunc() {
        return "hehehehe";
    }
    myFunc2(a) {
        return "myFunc2 returned: " + a;
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
        super(`<strong>Battery</strong>`
        // '.c-app__device-info'
        );
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
        this.template = theTemplate;
    }
    isExpression(str) {
        return str.includes("(")
            || str.includes("*")
            || str.includes("-")
            || str.includes("+")
            || str.includes("=")
            || str.includes("/")
            || str.includes("%")
            || str.includes("*")
            || str.includes("<")
            || str.includes(">")
            || str.includes("&&")
            || str.includes("&")
            || str.includes("|")
            || str.includes("||")
            || str.includes("?")
            || str.includes(":")
            || str.includes("\"")
            || str.includes("'");
    }
    evaluatePropertyPaths(str) {
        console.log(str);
        if (str.indexOf("{{") < 0 || str.indexOf("}}") < 0) {
            return str;
        }
        const regex = /{{([^}]+)}}/gm;
        const self = this;
        const isFunction = (functionToCheck) => functionToCheck && {}.toString.call(functionToCheck) === "[object Function]";
        return str.replace(regex, m => {
            const x = m;
            if (x.index === regex.lastIndex) {
                regex.lastIndex++;
            }
            const propertyNameOrPath = m.substring(2, m.length - 2);
            const properties = [];
            let propertyPath = propertyNameOrPath;
            let value = self;
            if (this.isExpression(propertyPath)) {
                // complex evaluation required.
                try {
                    return eval("this." + propertyPath);
                }
                catch (e) {
                    return eval(propertyPath);
                }
            }
            else {
                while (propertyPath.includes(".")) {
                    properties.push(propertyPath.split(".")[0]);
                    propertyPath = propertyPath.substring(propertyPath.indexOf("."));
                }
                properties.push(propertyPath);
                for (let i = 0; i < properties.length; ++i) {
                    const prop = properties[i];
                    const propValue = value[prop];
                    if (isFunction(propValue)) {
                        value = propValue();
                    }
                    else {
                        value = propValue;
                    }
                }
                return `${value}`;
            }
        });
    }
    render(target) {
        const elm = document.createElement('template');
        elm.innerHTML = this.evaluatePropertyPaths(this.template);
        // Tip: Using content.cloneNode(true) will completely replace the HTMLElement
        // tag with whatever we pass in, yielding a result similar to React or Vue.
        target.appendChild(elm.content.cloneNode(true));
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
        super(`<strong>ControllerStatus</strong>`
        // '.c-app__footer'
        );
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
        super(`<strong class="align-right">CurrentActionHelp</strong>`
        // '.c-app__footer'
        );
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
        super(`<strong>CurrentTime</strong>`
        // '.c-app__device-info'
        );
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
        super(`<strong>Main Menu Navigation</strong>`
        // '.c-app__content'
        );
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
class UserAvatars extends Component_1.Component {
    constructor() {
        super(`
      <strong>UserAvatars</strong>`);
        console.log('Hello from avatars');
    }
}
exports.UserAvatars = UserAvatars;


/***/ }),

/***/ "./src/02_main_menu/components/WifiConnectionStatus.ts":
/*!*************************************************************!*\
  !*** ./src/02_main_menu/components/WifiConnectionStatus.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Component_1 = __webpack_require__(/*! ./Component */ "./src/02_main_menu/components/Component.ts");
class WifiConnectionStatus extends Component_1.Component {
    constructor() {
        super(`<strong>WiFiConnectionStatus</strong>`
        // '.c-app__device-info'
        );
    }
}
exports.WifiConnectionStatus = WifiConnectionStatus;


/***/ }),

/***/ "./src/02_main_menu/main.ts":
/*!**********************************!*\
  !*** ./src/02_main_menu/main.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* 02: Nintendo Switch Main Menu */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class ComponentLoader {
    constructor(ctx) {
        this.ctx = ctx;
    }
    getComponent(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const target = yield Promise.resolve().then(() => __webpack_require__("./src/02_main_menu/components sync recursive ^\\.\\/.*$")(`./${name}`));
            const component = (new target[name]());
            component.template = yield getAsync(`./templates/${name}.html`, component.template);
            return component;
        });
    }
}
const loader = new ComponentLoader(window);
function getAsync(url, fallbackValue) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return (yield requestAsync(url));
        }
        catch (e) {
            return fallbackValue;
        }
    });
}
function requestAsync(url) {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();
        xhttp.onload = () => {
            if (xhttp.status >= 200 && xhttp.status < 300) {
                resolve(xhttp.responseText);
            }
            else {
                reject();
            }
        };
        xhttp.onerror = () => reject();
        xhttp.open("GET", url, true);
        xhttp.send();
    });
}
function parseComponentName(name) {
    return name
        .split('-')
        .reduce((a, b) => a + (b.charAt(0).toUpperCase() + b.substring(1)));
}
function render(source) {
    return __awaiter(this, void 0, void 0, function* () {
        const name = source.tagName.toLowerCase();
        if (name.startsWith("cmp-")) {
            const componentName = parseComponentName(name.substring(3));
            const comp = yield loader.getComponent(componentName);
            comp.render(source);
            console.log("component name: " + componentName);
        }
        [...source.children].forEach((x) => __awaiter(this, void 0, void 0, function* () { return yield render(x); }));
    });
}
window.addEventListener("load", () => {
    render(document.querySelector("main"));
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjLzAyX21haW5fbWVudS9jb21wb25lbnRzIHN5bmMgXlxcLlxcLy4qJCIsIndlYnBhY2s6Ly8vLi9zcmMvMDJfbWFpbl9tZW51L2NvbXBvbmVudHMvQXBwbGljYXRpb25zTGlzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvMDJfbWFpbl9tZW51L2NvbXBvbmVudHMvQmF0dGVyeVN0YXR1cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvMDJfbWFpbl9tZW51L2NvbXBvbmVudHMvQ29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy8wMl9tYWluX21lbnUvY29tcG9uZW50cy9Db250cm9sbGVyU3RhdHVzLnRzIiwid2VicGFjazovLy8uL3NyYy8wMl9tYWluX21lbnUvY29tcG9uZW50cy9DdXJyZW50QWN0aW9uSGVscC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvMDJfbWFpbl9tZW51L2NvbXBvbmVudHMvQ3VycmVudFRpbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjLzAyX21haW5fbWVudS9jb21wb25lbnRzL01haW5NZW51TmF2aWdhdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvMDJfbWFpbl9tZW51L2NvbXBvbmVudHMvVXNlckF2YXRhcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjLzAyX21haW5fbWVudS9jb21wb25lbnRzL1dpZmlDb25uZWN0aW9uU3RhdHVzLnRzIiwid2VicGFjazovLy8uL3NyYy8wMl9tYWluX21lbnUvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdD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Q0FBQyIsImZpbGUiOiIwMl9tYWluX21lbnUvbWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjLzAyX21haW5fbWVudS9tYWluLnRzXCIpO1xuIiwidmFyIG1hcCA9IHtcblx0XCIuL0FwcGxpY2F0aW9uc0xpc3RcIjogXCIuL3NyYy8wMl9tYWluX21lbnUvY29tcG9uZW50cy9BcHBsaWNhdGlvbnNMaXN0LnRzXCIsXG5cdFwiLi9BcHBsaWNhdGlvbnNMaXN0LnRzXCI6IFwiLi9zcmMvMDJfbWFpbl9tZW51L2NvbXBvbmVudHMvQXBwbGljYXRpb25zTGlzdC50c1wiLFxuXHRcIi4vQmF0dGVyeVN0YXR1c1wiOiBcIi4vc3JjLzAyX21haW5fbWVudS9jb21wb25lbnRzL0JhdHRlcnlTdGF0dXMudHNcIixcblx0XCIuL0JhdHRlcnlTdGF0dXMudHNcIjogXCIuL3NyYy8wMl9tYWluX21lbnUvY29tcG9uZW50cy9CYXR0ZXJ5U3RhdHVzLnRzXCIsXG5cdFwiLi9Db21wb25lbnRcIjogXCIuL3NyYy8wMl9tYWluX21lbnUvY29tcG9uZW50cy9Db21wb25lbnQudHNcIixcblx0XCIuL0NvbXBvbmVudC50c1wiOiBcIi4vc3JjLzAyX21haW5fbWVudS9jb21wb25lbnRzL0NvbXBvbmVudC50c1wiLFxuXHRcIi4vQ29udHJvbGxlclN0YXR1c1wiOiBcIi4vc3JjLzAyX21haW5fbWVudS9jb21wb25lbnRzL0NvbnRyb2xsZXJTdGF0dXMudHNcIixcblx0XCIuL0NvbnRyb2xsZXJTdGF0dXMudHNcIjogXCIuL3NyYy8wMl9tYWluX21lbnUvY29tcG9uZW50cy9Db250cm9sbGVyU3RhdHVzLnRzXCIsXG5cdFwiLi9DdXJyZW50QWN0aW9uSGVscFwiOiBcIi4vc3JjLzAyX21haW5fbWVudS9jb21wb25lbnRzL0N1cnJlbnRBY3Rpb25IZWxwLnRzXCIsXG5cdFwiLi9DdXJyZW50QWN0aW9uSGVscC50c1wiOiBcIi4vc3JjLzAyX21haW5fbWVudS9jb21wb25lbnRzL0N1cnJlbnRBY3Rpb25IZWxwLnRzXCIsXG5cdFwiLi9DdXJyZW50VGltZVwiOiBcIi4vc3JjLzAyX21haW5fbWVudS9jb21wb25lbnRzL0N1cnJlbnRUaW1lLnRzXCIsXG5cdFwiLi9DdXJyZW50VGltZS50c1wiOiBcIi4vc3JjLzAyX21haW5fbWVudS9jb21wb25lbnRzL0N1cnJlbnRUaW1lLnRzXCIsXG5cdFwiLi9NYWluTWVudU5hdmlnYXRpb25cIjogXCIuL3NyYy8wMl9tYWluX21lbnUvY29tcG9uZW50cy9NYWluTWVudU5hdmlnYXRpb24udHNcIixcblx0XCIuL01haW5NZW51TmF2aWdhdGlvbi50c1wiOiBcIi4vc3JjLzAyX21haW5fbWVudS9jb21wb25lbnRzL01haW5NZW51TmF2aWdhdGlvbi50c1wiLFxuXHRcIi4vVXNlckF2YXRhcnNcIjogXCIuL3NyYy8wMl9tYWluX21lbnUvY29tcG9uZW50cy9Vc2VyQXZhdGFycy50c1wiLFxuXHRcIi4vVXNlckF2YXRhcnMudHNcIjogXCIuL3NyYy8wMl9tYWluX21lbnUvY29tcG9uZW50cy9Vc2VyQXZhdGFycy50c1wiLFxuXHRcIi4vV2lmaUNvbm5lY3Rpb25TdGF0dXNcIjogXCIuL3NyYy8wMl9tYWluX21lbnUvY29tcG9uZW50cy9XaWZpQ29ubmVjdGlvblN0YXR1cy50c1wiLFxuXHRcIi4vV2lmaUNvbm5lY3Rpb25TdGF0dXMudHNcIjogXCIuL3NyYy8wMl9tYWluX21lbnUvY29tcG9uZW50cy9XaWZpQ29ubmVjdGlvblN0YXR1cy50c1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHR2YXIgaWQgPSBtYXBbcmVxXTtcblx0aWYoIShpZCArIDEpKSB7IC8vIGNoZWNrIGZvciBudW1iZXIgb3Igc3RyaW5nXG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBpZDtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjLzAyX21haW5fbWVudS9jb21wb25lbnRzIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLiokXCI7IiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIi4vQ29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQXBwbGljYXRpb25zTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcHVibGljIHRlc3Q6IHN0cmluZztcclxuICBjb25zdHJ1Y3RvcigpIHsgICAgXHJcbiAgICBzdXBlcihcclxuICAgICAgYDxzdHJvbmc+QXBwbGljYXRpb25zIExpc3Q8L3N0cm9uZz5gXHJcbiAgICAgIC8vICcuYy1hcHBfX2NvbnRlbnQnXHJcbiAgICApXHJcbiAgICB0aGlzLnRlc3QgPSBcImhlbGxvIHdvcmxkXCI7XHJcbiAgfVxyXG4gIG15RnVuYygpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIFwiaGVoZWhlaGVcIjtcclxuICB9XHJcbiAgbXlGdW5jMihhOnN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gXCJteUZ1bmMyIHJldHVybmVkOiBcIiArIGE7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIi4vQ29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQmF0dGVyeVN0YXR1cyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcihcclxuICAgICAgYDxzdHJvbmc+QmF0dGVyeTwvc3Ryb25nPmBcclxuICAgICAgLy8gJy5jLWFwcF9fZGV2aWNlLWluZm8nXHJcbiAgICApXHJcbiAgfVxyXG59IiwiXHJcbmV4cG9ydCBjbGFzcyBDb21wb25lbnQge1xyXG4gIHB1YmxpYyB0ZW1wbGF0ZTpzdHJpbmdcclxuXHJcbiAgY29uc3RydWN0b3IodGhlVGVtcGxhdGUgPSBgPGRpdj5UZW1wbGF0ZTwvZGl2PmAsIHRoZVJlbmRlclRhcmdldCA9ICdib2R5Jykge1xyXG4gICAgdGhpcy50ZW1wbGF0ZSA9IHRoZVRlbXBsYXRlXHJcbiAgfVxyXG5cclxuICBpc0V4cHJlc3Npb24oc3RyOnN0cmluZyk6Ym9vbGVhbiB7XHJcbiAgICByZXR1cm4gc3RyLmluY2x1ZGVzKFwiKFwiKSBcclxuICAgICAgICB8fCBzdHIuaW5jbHVkZXMoXCIqXCIpXHJcbiAgICAgICAgfHwgc3RyLmluY2x1ZGVzKFwiLVwiKVxyXG4gICAgICAgIHx8IHN0ci5pbmNsdWRlcyhcIitcIilcclxuICAgICAgICB8fCBzdHIuaW5jbHVkZXMoXCI9XCIpXHJcbiAgICAgICAgfHwgc3RyLmluY2x1ZGVzKFwiL1wiKVxyXG4gICAgICAgIHx8IHN0ci5pbmNsdWRlcyhcIiVcIilcclxuICAgICAgICB8fCBzdHIuaW5jbHVkZXMoXCIqXCIpXHJcbiAgICAgICAgfHwgc3RyLmluY2x1ZGVzKFwiPFwiKVxyXG4gICAgICAgIHx8IHN0ci5pbmNsdWRlcyhcIj5cIilcclxuICAgICAgICB8fCBzdHIuaW5jbHVkZXMoXCImJlwiKVxyXG4gICAgICAgIHx8IHN0ci5pbmNsdWRlcyhcIiZcIilcclxuICAgICAgICB8fCBzdHIuaW5jbHVkZXMoXCJ8XCIpXHJcbiAgICAgICAgfHwgc3RyLmluY2x1ZGVzKFwifHxcIilcclxuICAgICAgICB8fCBzdHIuaW5jbHVkZXMoXCI/XCIpXHJcbiAgICAgICAgfHwgc3RyLmluY2x1ZGVzKFwiOlwiKVxyXG4gICAgICAgIHx8IHN0ci5pbmNsdWRlcyhcIlxcXCJcIilcclxuICAgICAgICB8fCBzdHIuaW5jbHVkZXMoXCInXCIpXHJcbiAgfVxyXG5cclxuICBldmFsdWF0ZVByb3BlcnR5UGF0aHMoc3RyOnN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBjb25zb2xlLmxvZyhzdHIpO1xyXG4gICAgaWYgKHN0ci5pbmRleE9mKFwie3tcIikgPCAwIHx8IHN0ci5pbmRleE9mKFwifX1cIikgPCAwKSB7XHJcbiAgICAgIHJldHVybiBzdHI7XHJcbiAgICB9XHJcbiAgICBjb25zdCByZWdleCA9IC97eyhbXn1dKyl9fS9nbTtcclxuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgY29uc3QgaXNGdW5jdGlvbiA9IChmdW5jdGlvblRvQ2hlY2spID0+IFxyXG4gICAgICBmdW5jdGlvblRvQ2hlY2sgJiYge30udG9TdHJpbmcuY2FsbChmdW5jdGlvblRvQ2hlY2spID09PSBcIltvYmplY3QgRnVuY3Rpb25dXCI7XHJcbiAgICBcclxuICAgIHJldHVybiBzdHIucmVwbGFjZShyZWdleCwgbSA9PiB7XHJcbiAgICAgIGNvbnN0IHggOiBhbnkgPSBtO1xyXG4gICAgICBpZiAoeC5pbmRleCA9PT0gcmVnZXgubGFzdEluZGV4KSB7XHJcbiAgICAgICAgcmVnZXgubGFzdEluZGV4Kys7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgcHJvcGVydHlOYW1lT3JQYXRoID0gbS5zdWJzdHJpbmcoMiwgbS5sZW5ndGggLSAyKTtcclxuICAgICAgY29uc3QgcHJvcGVydGllcyA9IFtdO1xyXG4gICAgICBsZXQgcHJvcGVydHlQYXRoID0gcHJvcGVydHlOYW1lT3JQYXRoO1xyXG4gICAgICBsZXQgdmFsdWUgPSBzZWxmO1xyXG5cclxuICAgICAgaWYgKHRoaXMuaXNFeHByZXNzaW9uKHByb3BlcnR5UGF0aCkpIHtcclxuICAgICAgICAvLyBjb21wbGV4IGV2YWx1YXRpb24gcmVxdWlyZWQuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIHJldHVybiBldmFsKFwidGhpcy5cIiArIHByb3BlcnR5UGF0aCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgcmV0dXJuIGV2YWwocHJvcGVydHlQYXRoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgd2hpbGUgKHByb3BlcnR5UGF0aC5pbmNsdWRlcyhcIi5cIikpIHtcclxuICAgICAgICAgIHByb3BlcnRpZXMucHVzaChwcm9wZXJ0eVBhdGguc3BsaXQoXCIuXCIpWzBdKTtcclxuICAgICAgICAgIHByb3BlcnR5UGF0aCA9IHByb3BlcnR5UGF0aC5zdWJzdHJpbmcocHJvcGVydHlQYXRoLmluZGV4T2YoXCIuXCIpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJvcGVydGllcy5wdXNoKHByb3BlcnR5UGF0aCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9wZXJ0aWVzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICBjb25zdCBwcm9wICAgICAgPSBwcm9wZXJ0aWVzW2ldO1xyXG4gICAgICAgICAgY29uc3QgcHJvcFZhbHVlID0gdmFsdWVbcHJvcF07ICAgICAgICBcclxuICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKHByb3BWYWx1ZSkpIHtcclxuICAgICAgICAgICAgdmFsdWUgPSBwcm9wVmFsdWUoKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gcHJvcFZhbHVlO1xyXG4gICAgICAgICAgfSAgICAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYCR7dmFsdWV9YDsgICAgICBcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIodGFyZ2V0KTogdm9pZCB7ICAgIFxyXG4gICAgY29uc3QgZWxtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKVxyXG4gICAgZWxtLmlubmVySFRNTCA9IHRoaXMuZXZhbHVhdGVQcm9wZXJ0eVBhdGhzKHRoaXMudGVtcGxhdGUpO1xyXG4gICAgXHJcbiAgICAvLyBUaXA6IFVzaW5nIGNvbnRlbnQuY2xvbmVOb2RlKHRydWUpIHdpbGwgY29tcGxldGVseSByZXBsYWNlIHRoZSBIVE1MRWxlbWVudFxyXG4gICAgLy8gdGFnIHdpdGggd2hhdGV2ZXIgd2UgcGFzcyBpbiwgeWllbGRpbmcgYSByZXN1bHQgc2ltaWxhciB0byBSZWFjdCBvciBWdWUuXHJcbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoZWxtLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpKVxyXG4gIH1cclxufSIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCIuL0NvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbnRyb2xsZXJTdGF0dXMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoXHJcbiAgICAgIGA8c3Ryb25nPkNvbnRyb2xsZXJTdGF0dXM8L3N0cm9uZz5gXHJcbiAgICAgIC8vICcuYy1hcHBfX2Zvb3RlcidcclxuICAgIClcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiLi9Db21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDdXJyZW50QWN0aW9uSGVscCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcihcclxuICAgICAgYDxzdHJvbmcgY2xhc3M9XCJhbGlnbi1yaWdodFwiPkN1cnJlbnRBY3Rpb25IZWxwPC9zdHJvbmc+YFxyXG4gICAgICAvLyAnLmMtYXBwX19mb290ZXInXHJcbiAgICApXHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIi4vQ29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ3VycmVudFRpbWUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoXHJcbiAgICAgIGA8c3Ryb25nPkN1cnJlbnRUaW1lPC9zdHJvbmc+YFxyXG4gICAgICAvLyAnLmMtYXBwX19kZXZpY2UtaW5mbydcclxuICAgIClcclxuICAgIGNvbnNvbGUubG9nKCdIZWxsbyBmcm9tIEN1cnJlbnRUaW1lJylcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiLi9Db21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBNYWluTWVudU5hdmlnYXRpb24gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoXHJcbiAgICAgIGA8c3Ryb25nPk1haW4gTWVudSBOYXZpZ2F0aW9uPC9zdHJvbmc+YFxyXG4gICAgICAvLyAnLmMtYXBwX19jb250ZW50J1xyXG4gICAgKVxyXG4gIH1cclxufSIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCIuL0NvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXJBdmF0YXJzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKGBcclxuICAgICAgPHN0cm9uZz5Vc2VyQXZhdGFyczwvc3Ryb25nPmAsXHJcbiAgICAgIC8vICAnLmMtYXBwX19hdmF0YXJzJ1xyXG4gIClcclxuICAgIGNvbnNvbGUubG9nKCdIZWxsbyBmcm9tIGF2YXRhcnMnKVxyXG4gIH1cclxufSIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCIuL0NvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFdpZmlDb25uZWN0aW9uU3RhdHVzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKFxyXG4gICAgICBgPHN0cm9uZz5XaUZpQ29ubmVjdGlvblN0YXR1czwvc3Ryb25nPmBcclxuICAgICAgLy8gJy5jLWFwcF9fZGV2aWNlLWluZm8nXHJcbiAgICApXHJcbiAgfVxyXG59IiwiLyogMDI6IE5pbnRlbmRvIFN3aXRjaCBNYWluIE1lbnUgKi9cclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvQ29tcG9uZW50XCI7XHJcblxyXG5jbGFzcyBDb21wb25lbnRMb2FkZXIge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBjdHg6IE9iamVjdCkgeyAgICAgICAgXHJcbiAgICB9XHJcbiAgICBhc3luYyBnZXRDb21wb25lbnQobmFtZTogc3RyaW5nKSB7ICAgICAgICBcclxuICAgICAgICBjb25zdCB0YXJnZXQgICAgPSBhd2FpdCBpbXBvcnQoYC4vY29tcG9uZW50cy8ke25hbWV9YCk7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IDxDb21wb25lbnQ+KG5ldyB0YXJnZXRbbmFtZV0oKSk7XHJcbiAgICAgICAgY29tcG9uZW50LnRlbXBsYXRlID0gYXdhaXQgZ2V0QXN5bmMoYC4vdGVtcGxhdGVzLyR7bmFtZX0uaHRtbGAsIGNvbXBvbmVudC50ZW1wbGF0ZSk7ICAgICAgICBcclxuICAgICAgICByZXR1cm4gY29tcG9uZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBsb2FkZXIgPSBuZXcgQ29tcG9uZW50TG9hZGVyKHdpbmRvdyk7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRBc3luYyh1cmw6IHN0cmluZywgZmFsbGJhY2tWYWx1ZTogc3RyaW5nKXtcclxuICAgIHRyeSB7ICAgICAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIDxzdHJpbmc+KGF3YWl0IHJlcXVlc3RBc3luYyh1cmwpKTtcclxuICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgIHJldHVybiBmYWxsYmFja1ZhbHVlO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZXF1ZXN0QXN5bmModXJsOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBjb25zdCB4aHR0cCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIHhodHRwLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICAgIGlmICh4aHR0cC5zdGF0dXMgPj0gMjAwICYmIHhodHRwLnN0YXR1cyA8IDMwMCkge1xyXG4gICAgICAgICAgICByZXNvbHZlKHhodHRwLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZWplY3QoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHhodHRwLm9uZXJyb3IgPSAoKSA9PiByZWplY3QoKTtcclxuICAgICAgICB4aHR0cC5vcGVuKFwiR0VUXCIsIHVybCwgdHJ1ZSk7XHJcbiAgICAgICAgeGh0dHAuc2VuZCgpO1xyXG4gICAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGFyc2VDb21wb25lbnROYW1lKG5hbWUpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIG5hbWVcclxuICAgICAgICAuc3BsaXQoJy0nKVxyXG4gICAgICAgIC5yZWR1Y2UoKGEsIGIpID0+IGEgKyAoYi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGIuc3Vic3RyaW5nKDEpKSk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHJlbmRlcihzb3VyY2UpIHtcclxuICAgIGNvbnN0IG5hbWUgPSBzb3VyY2UudGFnTmFtZS50b0xvd2VyQ2FzZSgpOyAgICBcclxuICAgIGlmIChuYW1lLnN0YXJ0c1dpdGgoXCJjbXAtXCIpKSB7XHJcbiAgICAgICAgY29uc3QgY29tcG9uZW50TmFtZSA9IHBhcnNlQ29tcG9uZW50TmFtZShuYW1lLnN1YnN0cmluZygzKSk7XHJcbiAgICAgICAgY29uc3QgY29tcCA9IGF3YWl0IGxvYWRlci5nZXRDb21wb25lbnQoY29tcG9uZW50TmFtZSk7XHJcbiAgICAgICAgY29tcC5yZW5kZXIoc291cmNlKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjb21wb25lbnQgbmFtZTogXCIgKyBjb21wb25lbnROYW1lKTtcclxuICAgIH1cclxuICAgIFsuLi5zb3VyY2UuY2hpbGRyZW5dLmZvckVhY2goYXN5bmMgeCA9PiBhd2FpdCByZW5kZXIoeCkpO1xyXG59XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xyXG4gICAgcmVuZGVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpKTtcclxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==
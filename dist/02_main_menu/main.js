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
        super();
        this._counter = 0;
        this.test = "hello world";
        setTimeout(() => this.increment(), 1000);
    }
    get counter() {
        return this._counter;
    }
    increment() {
        this._counter++;
        this.render();
        setTimeout(() => this.increment(), 1000);
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
        if (target && target != null) {
            this.parentElement = target;
        }
        // Tip: Using content.cloneNode(true) will completely replace the HTMLElement
        // tag with whatever we pass in, yielding a result similar to React or Vue.
        const newChild = elm.content.cloneNode(true);
        if (this.cmpElement && this.parentElement) {
            this.cmpElement.innerHTML = elm.innerHTML;
        }
        else if (this.parentElement) {
            this.parentElement.appendChild(newChild);
            this.cmpElement = this.parentElement.children[this.parentElement.children.length - 1];
        }
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
        }
        [...source.children].forEach((x) => __awaiter(this, void 0, void 0, function* () { return yield render(x); }));
    });
}
window.addEventListener("load", () => {
    render(document.querySelector("main"));
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjLzAyX21haW5fbWVudS9jb21wb25lbnRzIHN5bmMgXlxcLlxcLy4qJCIsIndlYnBhY2s6Ly8vLi9zcmMvMDJfbWFpbl9tZW51L2NvbXBvbmVudHMvQXBwbGljYXRpb25zTGlzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvMDJfbWFpbl9tZW51L2NvbXBvbmVudHMvQmF0dGVyeVN0YXR1cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvMDJfbWFpbl9tZW51L2NvbXBvbmVudHMvQ29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy8wMl9tYWluX21lbnUvY29tcG9uZW50cy9Db250cm9sbGVyU3RhdHVzLnRzIiwid2VicGFjazovLy8uL3NyYy8wMl9tYWluX21lbnUvY29tcG9uZW50cy9DdXJyZW50QWN0aW9uSGVscC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvMDJfbWFpbl9tZW51L2NvbXBvbmVudHMvQ3VycmVudFRpbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjLzAyX21haW5fbWVudS9jb21wb25lbnRzL01haW5NZW51TmF2aWdhdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvMDJfbWFpbl9tZW51L2NvbXBvbmVudHMvVXNlckF2YXRhcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjLzAyX21haW5fbWVudS9jb21wb25lbnRzL1dpZmlDb25uZWN0aW9uU3RhdHVzLnRzIiwid2VicGFjazovLy8uL3NyYy8wMl9tYWluX21lbnUvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdD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QyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDekIsTUFBTSxhQUFhLEdBQUcsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVELE1BQU0sSUFBSSxHQUFHLE1BQU0sTUFBTSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUN0RCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3ZCO1FBQ0QsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBTSxDQUFDLEVBQUMsRUFBRSxnREFBQyxhQUFNLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBQyxDQUFDO0lBQzdELENBQUM7Q0FBQTtBQUVELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFO0lBQ2pDLE1BQU0sQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDM0MsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiMDJfbWFpbl9tZW51L21haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy8wMl9tYWluX21lbnUvbWFpbi50c1wiKTtcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9BcHBsaWNhdGlvbnNMaXN0XCI6IFwiLi9zcmMvMDJfbWFpbl9tZW51L2NvbXBvbmVudHMvQXBwbGljYXRpb25zTGlzdC50c1wiLFxuXHRcIi4vQXBwbGljYXRpb25zTGlzdC50c1wiOiBcIi4vc3JjLzAyX21haW5fbWVudS9jb21wb25lbnRzL0FwcGxpY2F0aW9uc0xpc3QudHNcIixcblx0XCIuL0JhdHRlcnlTdGF0dXNcIjogXCIuL3NyYy8wMl9tYWluX21lbnUvY29tcG9uZW50cy9CYXR0ZXJ5U3RhdHVzLnRzXCIsXG5cdFwiLi9CYXR0ZXJ5U3RhdHVzLnRzXCI6IFwiLi9zcmMvMDJfbWFpbl9tZW51L2NvbXBvbmVudHMvQmF0dGVyeVN0YXR1cy50c1wiLFxuXHRcIi4vQ29tcG9uZW50XCI6IFwiLi9zcmMvMDJfbWFpbl9tZW51L2NvbXBvbmVudHMvQ29tcG9uZW50LnRzXCIsXG5cdFwiLi9Db21wb25lbnQudHNcIjogXCIuL3NyYy8wMl9tYWluX21lbnUvY29tcG9uZW50cy9Db21wb25lbnQudHNcIixcblx0XCIuL0NvbnRyb2xsZXJTdGF0dXNcIjogXCIuL3NyYy8wMl9tYWluX21lbnUvY29tcG9uZW50cy9Db250cm9sbGVyU3RhdHVzLnRzXCIsXG5cdFwiLi9Db250cm9sbGVyU3RhdHVzLnRzXCI6IFwiLi9zcmMvMDJfbWFpbl9tZW51L2NvbXBvbmVudHMvQ29udHJvbGxlclN0YXR1cy50c1wiLFxuXHRcIi4vQ3VycmVudEFjdGlvbkhlbHBcIjogXCIuL3NyYy8wMl9tYWluX21lbnUvY29tcG9uZW50cy9DdXJyZW50QWN0aW9uSGVscC50c1wiLFxuXHRcIi4vQ3VycmVudEFjdGlvbkhlbHAudHNcIjogXCIuL3NyYy8wMl9tYWluX21lbnUvY29tcG9uZW50cy9DdXJyZW50QWN0aW9uSGVscC50c1wiLFxuXHRcIi4vQ3VycmVudFRpbWVcIjogXCIuL3NyYy8wMl9tYWluX21lbnUvY29tcG9uZW50cy9DdXJyZW50VGltZS50c1wiLFxuXHRcIi4vQ3VycmVudFRpbWUudHNcIjogXCIuL3NyYy8wMl9tYWluX21lbnUvY29tcG9uZW50cy9DdXJyZW50VGltZS50c1wiLFxuXHRcIi4vTWFpbk1lbnVOYXZpZ2F0aW9uXCI6IFwiLi9zcmMvMDJfbWFpbl9tZW51L2NvbXBvbmVudHMvTWFpbk1lbnVOYXZpZ2F0aW9uLnRzXCIsXG5cdFwiLi9NYWluTWVudU5hdmlnYXRpb24udHNcIjogXCIuL3NyYy8wMl9tYWluX21lbnUvY29tcG9uZW50cy9NYWluTWVudU5hdmlnYXRpb24udHNcIixcblx0XCIuL1VzZXJBdmF0YXJzXCI6IFwiLi9zcmMvMDJfbWFpbl9tZW51L2NvbXBvbmVudHMvVXNlckF2YXRhcnMudHNcIixcblx0XCIuL1VzZXJBdmF0YXJzLnRzXCI6IFwiLi9zcmMvMDJfbWFpbl9tZW51L2NvbXBvbmVudHMvVXNlckF2YXRhcnMudHNcIixcblx0XCIuL1dpZmlDb25uZWN0aW9uU3RhdHVzXCI6IFwiLi9zcmMvMDJfbWFpbl9tZW51L2NvbXBvbmVudHMvV2lmaUNvbm5lY3Rpb25TdGF0dXMudHNcIixcblx0XCIuL1dpZmlDb25uZWN0aW9uU3RhdHVzLnRzXCI6IFwiLi9zcmMvMDJfbWFpbl9tZW51L2NvbXBvbmVudHMvV2lmaUNvbm5lY3Rpb25TdGF0dXMudHNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0dmFyIGlkID0gbWFwW3JlcV07XG5cdGlmKCEoaWQgKyAxKSkgeyAvLyBjaGVjayBmb3IgbnVtYmVyIG9yIHN0cmluZ1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gaWQ7XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy8wMl9tYWluX21lbnUvY29tcG9uZW50cyBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qJFwiOyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCIuL0NvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFwcGxpY2F0aW9uc0xpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHB1YmxpYyB0ZXN0OiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBfY291bnRlcjogbnVtYmVyID0gMDtcclxuICBjb25zdHJ1Y3RvcigpIHsgICAgXHJcbiAgICBzdXBlcigpXHJcbiAgICB0aGlzLnRlc3QgPSBcImhlbGxvIHdvcmxkXCI7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5jcmVtZW50KCksIDEwMDApO1xyXG4gIH0gIFxyXG4gIGdldCBjb3VudGVyKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fY291bnRlcjtcclxuICB9XHJcbiAgaW5jcmVtZW50KCk6IHZvaWQge1xyXG4gICAgdGhpcy5fY291bnRlcisrO1xyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5pbmNyZW1lbnQoKSwgMTAwMCk7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIi4vQ29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQmF0dGVyeVN0YXR1cyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcihcclxuICAgICAgYDxzdHJvbmc+QmF0dGVyeTwvc3Ryb25nPmBcclxuICAgICAgLy8gJy5jLWFwcF9fZGV2aWNlLWluZm8nXHJcbiAgICApXHJcbiAgfVxyXG59IiwiXHJcbmV4cG9ydCBjbGFzcyBDb21wb25lbnQge1xyXG4gIHB1YmxpYyB0ZW1wbGF0ZTogc3RyaW5nO1xyXG4gIHByaXZhdGUgcGFyZW50RWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBjbXBFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IodGhlVGVtcGxhdGUgPSBgPGRpdj5UZW1wbGF0ZTwvZGl2PmAsIHRoZVJlbmRlclRhcmdldCA9ICdib2R5Jykge1xyXG4gICAgdGhpcy50ZW1wbGF0ZSA9IHRoZVRlbXBsYXRlXHJcbiAgfVxyXG5cclxuICBpc0V4cHJlc3Npb24oc3RyOnN0cmluZyk6Ym9vbGVhbiB7XHJcbiAgICByZXR1cm4gc3RyLmluY2x1ZGVzKFwiKFwiKSBcclxuICAgICAgICB8fCBzdHIuaW5jbHVkZXMoXCIqXCIpXHJcbiAgICAgICAgfHwgc3RyLmluY2x1ZGVzKFwiLVwiKVxyXG4gICAgICAgIHx8IHN0ci5pbmNsdWRlcyhcIitcIilcclxuICAgICAgICB8fCBzdHIuaW5jbHVkZXMoXCI9XCIpXHJcbiAgICAgICAgfHwgc3RyLmluY2x1ZGVzKFwiL1wiKVxyXG4gICAgICAgIHx8IHN0ci5pbmNsdWRlcyhcIiVcIilcclxuICAgICAgICB8fCBzdHIuaW5jbHVkZXMoXCIqXCIpXHJcbiAgICAgICAgfHwgc3RyLmluY2x1ZGVzKFwiPFwiKVxyXG4gICAgICAgIHx8IHN0ci5pbmNsdWRlcyhcIj5cIilcclxuICAgICAgICB8fCBzdHIuaW5jbHVkZXMoXCImJlwiKVxyXG4gICAgICAgIHx8IHN0ci5pbmNsdWRlcyhcIiZcIilcclxuICAgICAgICB8fCBzdHIuaW5jbHVkZXMoXCJ8XCIpXHJcbiAgICAgICAgfHwgc3RyLmluY2x1ZGVzKFwifHxcIilcclxuICAgICAgICB8fCBzdHIuaW5jbHVkZXMoXCI/XCIpXHJcbiAgICAgICAgfHwgc3RyLmluY2x1ZGVzKFwiOlwiKVxyXG4gICAgICAgIHx8IHN0ci5pbmNsdWRlcyhcIlxcXCJcIilcclxuICAgICAgICB8fCBzdHIuaW5jbHVkZXMoXCInXCIpXHJcbiAgfVxyXG5cclxuICBldmFsdWF0ZVByb3BlcnR5UGF0aHMoc3RyOnN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBpZiAoc3RyLmluZGV4T2YoXCJ7e1wiKSA8IDAgfHwgc3RyLmluZGV4T2YoXCJ9fVwiKSA8IDApIHtcclxuICAgICAgcmV0dXJuIHN0cjtcclxuICAgIH1cclxuICAgIGNvbnN0IHJlZ2V4ID0gL3t7KFtefV0rKX19L2dtO1xyXG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICBjb25zdCBpc0Z1bmN0aW9uID0gKGZ1bmN0aW9uVG9DaGVjaykgPT4gXHJcbiAgICAgIGZ1bmN0aW9uVG9DaGVjayAmJiB7fS50b1N0cmluZy5jYWxsKGZ1bmN0aW9uVG9DaGVjaykgPT09IFwiW29iamVjdCBGdW5jdGlvbl1cIjtcclxuICAgIFxyXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKHJlZ2V4LCBtID0+IHtcclxuICAgICAgY29uc3QgeCA6IGFueSA9IG07XHJcbiAgICAgIGlmICh4LmluZGV4ID09PSByZWdleC5sYXN0SW5kZXgpIHtcclxuICAgICAgICByZWdleC5sYXN0SW5kZXgrKztcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBwcm9wZXJ0eU5hbWVPclBhdGggPSBtLnN1YnN0cmluZygyLCBtLmxlbmd0aCAtIDIpO1xyXG4gICAgICBjb25zdCBwcm9wZXJ0aWVzID0gW107XHJcbiAgICAgIGxldCBwcm9wZXJ0eVBhdGggPSBwcm9wZXJ0eU5hbWVPclBhdGg7XHJcbiAgICAgIGxldCB2YWx1ZSA9IHNlbGY7XHJcblxyXG4gICAgICBpZiAodGhpcy5pc0V4cHJlc3Npb24ocHJvcGVydHlQYXRoKSkge1xyXG4gICAgICAgIC8vIGNvbXBsZXggZXZhbHVhdGlvbiByZXF1aXJlZC5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgcmV0dXJuIGV2YWwoXCJ0aGlzLlwiICsgcHJvcGVydHlQYXRoKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICByZXR1cm4gZXZhbChwcm9wZXJ0eVBhdGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB3aGlsZSAocHJvcGVydHlQYXRoLmluY2x1ZGVzKFwiLlwiKSkge1xyXG4gICAgICAgICAgcHJvcGVydGllcy5wdXNoKHByb3BlcnR5UGF0aC5zcGxpdChcIi5cIilbMF0pO1xyXG4gICAgICAgICAgcHJvcGVydHlQYXRoID0gcHJvcGVydHlQYXRoLnN1YnN0cmluZyhwcm9wZXJ0eVBhdGguaW5kZXhPZihcIi5cIikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcm9wZXJ0aWVzLnB1c2gocHJvcGVydHlQYXRoKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb3BlcnRpZXMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgIGNvbnN0IHByb3AgICAgICA9IHByb3BlcnRpZXNbaV07XHJcbiAgICAgICAgICBjb25zdCBwcm9wVmFsdWUgPSB2YWx1ZVtwcm9wXTsgICAgICAgIFxyXG4gICAgICAgICAgaWYgKGlzRnVuY3Rpb24ocHJvcFZhbHVlKSkge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHByb3BWYWx1ZSgpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFsdWUgPSBwcm9wVmFsdWU7XHJcbiAgICAgICAgICB9ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBgJHt2YWx1ZX1gOyAgICAgIFxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlbmRlcih0YXJnZXQ/OiBIVE1MRWxlbWVudCk6IHZvaWQge1xyXG4gICAgY29uc3QgZWxtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKVxyXG4gICAgZWxtLmlubmVySFRNTCA9IHRoaXMuZXZhbHVhdGVQcm9wZXJ0eVBhdGhzKHRoaXMudGVtcGxhdGUpOyAgICBcclxuXHJcbiAgICBpZiAodGFyZ2V0ICYmIHRhcmdldCAhPSBudWxsKSB7XHJcbiAgICAgIHRoaXMucGFyZW50RWxlbWVudCA9IHRhcmdldDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUaXA6IFVzaW5nIGNvbnRlbnQuY2xvbmVOb2RlKHRydWUpIHdpbGwgY29tcGxldGVseSByZXBsYWNlIHRoZSBIVE1MRWxlbWVudFxyXG4gICAgLy8gdGFnIHdpdGggd2hhdGV2ZXIgd2UgcGFzcyBpbiwgeWllbGRpbmcgYSByZXN1bHQgc2ltaWxhciB0byBSZWFjdCBvciBWdWUuXHJcbiAgICBjb25zdCBuZXdDaGlsZCA9IGVsbS5jb250ZW50LmNsb25lTm9kZSh0cnVlKSBhcyBIVE1MRWxlbWVudFxyXG4gICAgaWYgKHRoaXMuY21wRWxlbWVudCAmJiB0aGlzLnBhcmVudEVsZW1lbnQpIHsgICAgICBcclxuICAgICAgdGhpcy5jbXBFbGVtZW50LmlubmVySFRNTCA9IGVsbS5pbm5lckhUTUxcclxuICAgIH0gZWxzZSBpZiAodGhpcy5wYXJlbnRFbGVtZW50KSB7XHJcbiAgICAgIHRoaXMucGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChuZXdDaGlsZCkgICAgICAgXHJcbiAgICAgIHRoaXMuY21wRWxlbWVudCA9IHRoaXMucGFyZW50RWxlbWVudC5jaGlsZHJlblt0aGlzLnBhcmVudEVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoIC0gMV0gYXMgSFRNTEVsZW1lbnRcclxuICAgIH1cclxuICB9XHJcbn0iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiLi9Db21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDb250cm9sbGVyU3RhdHVzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKFxyXG4gICAgICBgPHN0cm9uZz5Db250cm9sbGVyU3RhdHVzPC9zdHJvbmc+YFxyXG4gICAgICAvLyAnLmMtYXBwX19mb290ZXInXHJcbiAgICApXHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIi4vQ29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ3VycmVudEFjdGlvbkhlbHAgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoXHJcbiAgICAgIGA8c3Ryb25nIGNsYXNzPVwiYWxpZ24tcmlnaHRcIj5DdXJyZW50QWN0aW9uSGVscDwvc3Ryb25nPmBcclxuICAgICAgLy8gJy5jLWFwcF9fZm9vdGVyJ1xyXG4gICAgKVxyXG4gIH1cclxufSIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCIuL0NvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEN1cnJlbnRUaW1lIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKFxyXG4gICAgICBgPHN0cm9uZz5DdXJyZW50VGltZTwvc3Ryb25nPmBcclxuICAgICAgLy8gJy5jLWFwcF9fZGV2aWNlLWluZm8nXHJcbiAgICApXHJcbiAgICBjb25zb2xlLmxvZygnSGVsbG8gZnJvbSBDdXJyZW50VGltZScpXHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIi4vQ29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTWFpbk1lbnVOYXZpZ2F0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKFxyXG4gICAgICBgPHN0cm9uZz5NYWluIE1lbnUgTmF2aWdhdGlvbjwvc3Ryb25nPmBcclxuICAgICAgLy8gJy5jLWFwcF9fY29udGVudCdcclxuICAgIClcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiLi9Db21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VyQXZhdGFycyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcihgXHJcbiAgICAgIDxzdHJvbmc+VXNlckF2YXRhcnM8L3N0cm9uZz5gLFxyXG4gICAgICAvLyAgJy5jLWFwcF9fYXZhdGFycydcclxuICApXHJcbiAgICBjb25zb2xlLmxvZygnSGVsbG8gZnJvbSBhdmF0YXJzJylcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiLi9Db21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBXaWZpQ29ubmVjdGlvblN0YXR1cyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcihcclxuICAgICAgYDxzdHJvbmc+V2lGaUNvbm5lY3Rpb25TdGF0dXM8L3N0cm9uZz5gXHJcbiAgICAgIC8vICcuYy1hcHBfX2RldmljZS1pbmZvJ1xyXG4gICAgKVxyXG4gIH1cclxufSIsIi8qIDAyOiBOaW50ZW5kbyBTd2l0Y2ggTWFpbiBNZW51ICovXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL0NvbXBvbmVudFwiO1xyXG5cclxuY2xhc3MgQ29tcG9uZW50TG9hZGVyIHsgICAgXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IGN0eDogT2JqZWN0KSB7ICAgICAgICBcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIGFzeW5jIGdldENvbXBvbmVudChuYW1lOiBzdHJpbmcpIHsgICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHRhcmdldCAgICA9IGF3YWl0IGltcG9ydChgLi9jb21wb25lbnRzLyR7bmFtZX1gKTsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gPENvbXBvbmVudD4obmV3IHRhcmdldFtuYW1lXSgpKTtcclxuICAgICAgICBjb21wb25lbnQudGVtcGxhdGUgPSBhd2FpdCBnZXRBc3luYyhgLi90ZW1wbGF0ZXMvJHtuYW1lfS5odG1sYCwgY29tcG9uZW50LnRlbXBsYXRlKTsgICAgICAgIFxyXG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGxvYWRlciA9IG5ldyBDb21wb25lbnRMb2FkZXIod2luZG93KTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldEFzeW5jKHVybDogc3RyaW5nLCBmYWxsYmFja1ZhbHVlOiBzdHJpbmcpe1xyXG4gICAgdHJ5IHsgICAgICAgICAgICBcclxuICAgICAgICByZXR1cm4gPHN0cmluZz4oYXdhaXQgcmVxdWVzdEFzeW5jKHVybCkpO1xyXG4gICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbGxiYWNrVmFsdWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlcXVlc3RBc3luYyh1cmw6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHhodHRwID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgeGh0dHAub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgICAgaWYgKHhodHRwLnN0YXR1cyA+PSAyMDAgJiYgeGh0dHAuc3RhdHVzIDwgMzAwKSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoeGh0dHAucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlamVjdCgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgeGh0dHAub25lcnJvciA9ICgpID0+IHJlamVjdCgpO1xyXG4gICAgICAgIHhodHRwLm9wZW4oXCJHRVRcIiwgdXJsLCB0cnVlKTtcclxuICAgICAgICB4aHR0cC5zZW5kKCk7XHJcbiAgICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwYXJzZUNvbXBvbmVudE5hbWUobmFtZSk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gbmFtZVxyXG4gICAgICAgIC5zcGxpdCgnLScpXHJcbiAgICAgICAgLnJlZHVjZSgoYSwgYikgPT4gYSArIChiLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgYi5zdWJzdHJpbmcoMSkpKTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gcmVuZGVyKHNvdXJjZSkge1xyXG4gICAgY29uc3QgbmFtZSA9IHNvdXJjZS50YWdOYW1lLnRvTG93ZXJDYXNlKCk7ICAgIFxyXG4gICAgaWYgKG5hbWUuc3RhcnRzV2l0aChcImNtcC1cIikpIHtcclxuICAgICAgICBjb25zdCBjb21wb25lbnROYW1lID0gcGFyc2VDb21wb25lbnROYW1lKG5hbWUuc3Vic3RyaW5nKDMpKTtcclxuICAgICAgICBjb25zdCBjb21wID0gYXdhaXQgbG9hZGVyLmdldENvbXBvbmVudChjb21wb25lbnROYW1lKTtcclxuICAgICAgICBjb21wLnJlbmRlcihzb3VyY2UpO1xyXG4gICAgfVxyXG4gICAgWy4uLnNvdXJjZS5jaGlsZHJlbl0uZm9yRWFjaChhc3luYyB4ID0+IGF3YWl0IHJlbmRlcih4KSk7XHJcbn1cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XHJcbiAgICByZW5kZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIikpO1xyXG59KTsiXSwic291cmNlUm9vdCI6IiJ9
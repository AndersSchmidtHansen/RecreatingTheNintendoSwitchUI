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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/01_lockscreen/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/01_lockscreen/main.ts":
/*!***********************************!*\
  !*** ./src/01_lockscreen/main.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* 01: Creating the Nintendo Switch Lock Screen */
// Utility Methods
/**
 * If you need to generate more than one HTML element, like when generating a list
 * or when generating a bunch of dots, this method can make it easier. You just
 * create an empty array with some empty "slots", which you then fill with
 * whatever HTML string you want to generate.
 */
function generateMultipleHTML(html = '', amount = 0) {
    return Array.from({ length: amount }).fill(html).join('');
}
/**
 * Playing sounds on keypresses can be a bit messed up if we don't reset the time
 * to zero immediatedly. By doing this, we can hammer away on the keys and the
 * sound clip will just start over from scratch. And since we have different
 * sounds, we also allow it to swap out the sound file's source.
 */
function playSound(audioElm, src = null) {
    audioElm.currentTime = 0;
    if (src) {
        audioElm.src = src;
    }
    audioElm.play();
}
/**
 * There are so many ways to reset an array. This is just a quick example of one way
 * of doing it by setting the length of the array to 0. Fun fact, a JavaScript
 * array's innards look like an object where the indexes are the keys mapped
 * to a value, along with a "length" key that can be changed.
 */
function resetArray(array) {
    array.length = 0;
}
/**
 * We could just manually add our audio tags to our `index.html`, but for the heck of
 * it we'll use JavaScript to generate them instead. That way we can grab them here
 * without having to do a query selection (even though it's trivial).
 */
function generateAudioElement(id, src) {
    const elm = document.createElement('audio');
    elm.id = id;
    elm.src = src;
    document.body.appendChild(elm);
    return elm;
}
/**
 * We could just as well have created this manually in `index.html`, but we'll let JavaScript
 * handle that this time. It also allows us to generate any number of keypress dots easily.
 */
function generateKeypressSequenceElm(target = document.body, amount = 3) {
    const elm = document.createElement('div');
    elm.id = 'KeypressSequence';
    elm.classList.add('c-keypress-sequence');
    elm.innerHTML = generateMultipleHTML(`<div class="c-keypress-sequence__dot"></div>`, amount);
    if (target)
        target.appendChild(elm);
    return elm;
}
// State
let pressedKeys = [];
const keysNeedingPressing = 3;
// Resource Collections
const SoundCollection = {
    default: '../01_lockscreen/assets/sounds/default.ogg',
    failed: '../01_lockscreen/assets/sounds/failure.ogg',
    unlocked: '../01_lockscreen/assets/sounds/unlocked.ogg'
};
// Elements 
const KeypressSequenceElm = generateKeypressSequenceElm(document.querySelector('#KeypressSequenceContainer'), keysNeedingPressing);
const KeypressDotsElm = KeypressSequenceElm.querySelectorAll('.c-keypress-sequence__dot');
const DefaultAudioController = generateAudioElement('DefaultAudioController', SoundCollection.default);
const FailedAudioController = generateAudioElement('FailedAudioController', SoundCollection.failed);
const UnlockedAudioController = generateAudioElement('UnlockedAudioController', SoundCollection.unlocked);
// Methods
function unlockScreen() {
    playSound(UnlockedAudioController);
    toggleAllDots(true);
    toggleAppIconLockState();
    setTimeout(() => lockScreen(), 500);
}
function lockScreen() {
    resetArray(pressedKeys);
    toggleAllDots(false);
    toggleAppIconLockState();
}
function toggleAppIconLockState() {
    const CurrentAppIconClone = document.body.querySelector('#CurrentAppIconClone');
    CurrentAppIconClone.classList.toggle('c-current-app__icon-clone--unlocked');
}
function toggleAllDots(on = false) {
    Array.from(KeypressDotsElm).map(dot => {
        dot.classList[on ? 'add' : 'remove']('c-keypress-sequence__dot--active');
    });
}
function checkKeypressSequence(event, limit = 3) {
    pressedKeys.push(event.code);
    const keyLimitReached = pressedKeys.length >= limit;
    const someKeysAreDifferent = pressedKeys.length && pressedKeys.some(key => key !== event.code);
    const keypressSequenceDots = KeypressSequenceElm.querySelectorAll('.c-keypress-sequence__dot');
    if (!keyLimitReached) {
        pressedKeys.map((key, index) => {
            keypressSequenceDots[index].classList.add('c-keypress-sequence__dot--active');
        });
    }
    playSound(someKeysAreDifferent ? FailedAudioController : DefaultAudioController);
    if (someKeysAreDifferent) {
        toggleAllDots(false);
        return resetArray(pressedKeys);
    }
    if (keyLimitReached)
        unlockScreen();
}
// Events
document.addEventListener('keydown', event => checkKeypressSequence(event, keysNeedingPressing));


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjLzAxX2xvY2tzY3JlZW4vbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsa0RBQWtEO0FBRWxELGtCQUFrQjtBQUVsQjs7Ozs7R0FLRztBQUNILFNBQVMsb0JBQW9CLENBQUUsT0FBYyxFQUFFLEVBQUUsU0FBZ0IsQ0FBQztJQUNoRSxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztBQUMzRCxDQUFDO0FBRUQ7Ozs7O0dBS0c7QUFDSCxTQUFTLFNBQVMsQ0FBRSxRQUF5QixFQUFFLE1BQWEsSUFBSTtJQUM5RCxRQUFRLENBQUMsV0FBVyxHQUFH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bWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjLzAxX2xvY2tzY3JlZW4vbWFpbi50c1wiKTtcbiIsIi8qIDAxOiBDcmVhdGluZyB0aGUgTmludGVuZG8gU3dpdGNoIExvY2sgU2NyZWVuICovXHJcblxyXG4vLyBVdGlsaXR5IE1ldGhvZHNcclxuXHJcbi8qKlxyXG4gKiBJZiB5b3UgbmVlZCB0byBnZW5lcmF0ZSBtb3JlIHRoYW4gb25lIEhUTUwgZWxlbWVudCwgbGlrZSB3aGVuIGdlbmVyYXRpbmcgYSBsaXN0XHJcbiAqIG9yIHdoZW4gZ2VuZXJhdGluZyBhIGJ1bmNoIG9mIGRvdHMsIHRoaXMgbWV0aG9kIGNhbiBtYWtlIGl0IGVhc2llci4gWW91IGp1c3RcclxuICogY3JlYXRlIGFuIGVtcHR5IGFycmF5IHdpdGggc29tZSBlbXB0eSBcInNsb3RzXCIsIHdoaWNoIHlvdSB0aGVuIGZpbGwgd2l0aFxyXG4gKiB3aGF0ZXZlciBIVE1MIHN0cmluZyB5b3Ugd2FudCB0byBnZW5lcmF0ZS5cclxuICovXHJcbmZ1bmN0aW9uIGdlbmVyYXRlTXVsdGlwbGVIVE1MIChodG1sOnN0cmluZyA9ICcnLCBhbW91bnQ6bnVtYmVyID0gMCkge1xyXG4gIHJldHVybiBBcnJheS5mcm9tKHsgbGVuZ3RoOiBhbW91bnQgfSkuZmlsbChodG1sKS5qb2luKCcnKVxyXG59XHJcblxyXG4vKipcclxuICogUGxheWluZyBzb3VuZHMgb24ga2V5cHJlc3NlcyBjYW4gYmUgYSBiaXQgbWVzc2VkIHVwIGlmIHdlIGRvbid0IHJlc2V0IHRoZSB0aW1lXHJcbiAqIHRvIHplcm8gaW1tZWRpYXRlZGx5LiBCeSBkb2luZyB0aGlzLCB3ZSBjYW4gaGFtbWVyIGF3YXkgb24gdGhlIGtleXMgYW5kIHRoZVxyXG4gKiBzb3VuZCBjbGlwIHdpbGwganVzdCBzdGFydCBvdmVyIGZyb20gc2NyYXRjaC4gQW5kIHNpbmNlIHdlIGhhdmUgZGlmZmVyZW50XHJcbiAqIHNvdW5kcywgd2UgYWxzbyBhbGxvdyBpdCB0byBzd2FwIG91dCB0aGUgc291bmQgZmlsZSdzIHNvdXJjZS5cclxuICovXHJcbmZ1bmN0aW9uIHBsYXlTb3VuZCAoYXVkaW9FbG06SFRNTEF1ZGlvRWxlbWVudCwgc3JjOnN0cmluZyA9IG51bGwpIHtcclxuICBhdWRpb0VsbS5jdXJyZW50VGltZSA9IDBcclxuICBpZiAoc3JjKSB7IGF1ZGlvRWxtLnNyYyA9IHNyYyB9XHJcbiAgYXVkaW9FbG0ucGxheSgpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGVyZSBhcmUgc28gbWFueSB3YXlzIHRvIHJlc2V0IGFuIGFycmF5LiBUaGlzIGlzIGp1c3QgYSBxdWljayBleGFtcGxlIG9mIG9uZSB3YXlcclxuICogb2YgZG9pbmcgaXQgYnkgc2V0dGluZyB0aGUgbGVuZ3RoIG9mIHRoZSBhcnJheSB0byAwLiBGdW4gZmFjdCwgYSBKYXZhU2NyaXB0XHJcbiAqIGFycmF5J3MgaW5uYXJkcyBsb29rIGxpa2UgYW4gb2JqZWN0IHdoZXJlIHRoZSBpbmRleGVzIGFyZSB0aGUga2V5cyBtYXBwZWRcclxuICogdG8gYSB2YWx1ZSwgYWxvbmcgd2l0aCBhIFwibGVuZ3RoXCIga2V5IHRoYXQgY2FuIGJlIGNoYW5nZWQuXHJcbiAqL1xyXG5mdW5jdGlvbiByZXNldEFycmF5KGFycmF5OiBBcnJheTxhbnk+KSB7XHJcbiAgYXJyYXkubGVuZ3RoID0gMFxyXG59XHJcblxyXG4vKipcclxuICogV2UgY291bGQganVzdCBtYW51YWxseSBhZGQgb3VyIGF1ZGlvIHRhZ3MgdG8gb3VyIGBpbmRleC5odG1sYCwgYnV0IGZvciB0aGUgaGVjayBvZlxyXG4gKiBpdCB3ZSdsbCB1c2UgSmF2YVNjcmlwdCB0byBnZW5lcmF0ZSB0aGVtIGluc3RlYWQuIFRoYXQgd2F5IHdlIGNhbiBncmFiIHRoZW0gaGVyZVxyXG4gKiB3aXRob3V0IGhhdmluZyB0byBkbyBhIHF1ZXJ5IHNlbGVjdGlvbiAoZXZlbiB0aG91Z2ggaXQncyB0cml2aWFsKS4gXHJcbiAqL1xyXG5mdW5jdGlvbiBnZW5lcmF0ZUF1ZGlvRWxlbWVudCAoaWQ6c3RyaW5nLCBzcmM6c3RyaW5nKSB7XHJcbiAgY29uc3QgZWxtOkhUTUxBdWRpb0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhdWRpbycpXHJcbiAgZWxtLmlkID0gaWRcclxuICBlbG0uc3JjID0gc3JjXHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbG0pXHJcbiAgcmV0dXJuIGVsbVxyXG59XHJcblxyXG4vKipcclxuICogV2UgY291bGQganVzdCBhcyB3ZWxsIGhhdmUgY3JlYXRlZCB0aGlzIG1hbnVhbGx5IGluIGBpbmRleC5odG1sYCwgYnV0IHdlJ2xsIGxldCBKYXZhU2NyaXB0XHJcbiAqIGhhbmRsZSB0aGF0IHRoaXMgdGltZS4gSXQgYWxzbyBhbGxvd3MgdXMgdG8gZ2VuZXJhdGUgYW55IG51bWJlciBvZiBrZXlwcmVzcyBkb3RzIGVhc2lseS5cclxuICovXHJcbmZ1bmN0aW9uIGdlbmVyYXRlS2V5cHJlc3NTZXF1ZW5jZUVsbSAodGFyZ2V0OmFueSA9IGRvY3VtZW50LmJvZHksIGFtb3VudDpudW1iZXIgPSAzKSB7XHJcbiAgY29uc3QgZWxtOkhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICBlbG0uaWQgPSAnS2V5cHJlc3NTZXF1ZW5jZSdcclxuICBlbG0uY2xhc3NMaXN0LmFkZCgnYy1rZXlwcmVzcy1zZXF1ZW5jZScpXHJcbiAgZWxtLmlubmVySFRNTCA9IGdlbmVyYXRlTXVsdGlwbGVIVE1MKGA8ZGl2IGNsYXNzPVwiYy1rZXlwcmVzcy1zZXF1ZW5jZV9fZG90XCI+PC9kaXY+YCwgYW1vdW50KVxyXG4gIFxyXG4gIGlmICh0YXJnZXQpIHRhcmdldC5hcHBlbmRDaGlsZChlbG0pXHJcbiAgXHJcbiAgcmV0dXJuIGVsbVxyXG59XHJcblxyXG4vLyBTdGF0ZVxyXG5sZXQgcHJlc3NlZEtleXM6QXJyYXk8YW55PiA9IFtdXHJcbmNvbnN0IGtleXNOZWVkaW5nUHJlc3Npbmc6bnVtYmVyID0gM1xyXG5cclxuLy8gUmVzb3VyY2UgQ29sbGVjdGlvbnNcclxuY29uc3QgU291bmRDb2xsZWN0aW9uID0ge1xyXG4gIGRlZmF1bHQ6ICcuLi8wMV9sb2Nrc2NyZWVuL2Fzc2V0cy9zb3VuZHMvZGVmYXVsdC5vZ2cnLFxyXG4gIGZhaWxlZDogJy4uLzAxX2xvY2tzY3JlZW4vYXNzZXRzL3NvdW5kcy9mYWlsdXJlLm9nZycsXHJcbiAgdW5sb2NrZWQ6ICcuLi8wMV9sb2Nrc2NyZWVuL2Fzc2V0cy9zb3VuZHMvdW5sb2NrZWQub2dnJ1xyXG59XHJcblxyXG4vLyBFbGVtZW50cyBcclxuY29uc3QgS2V5cHJlc3NTZXF1ZW5jZUVsbSA9IGdlbmVyYXRlS2V5cHJlc3NTZXF1ZW5jZUVsbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjS2V5cHJlc3NTZXF1ZW5jZUNvbnRhaW5lcicpLCBrZXlzTmVlZGluZ1ByZXNzaW5nKVxyXG5jb25zdCBLZXlwcmVzc0RvdHNFbG0gPSBLZXlwcmVzc1NlcXVlbmNlRWxtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jLWtleXByZXNzLXNlcXVlbmNlX19kb3QnKVxyXG5cclxuY29uc3QgRGVmYXVsdEF1ZGlvQ29udHJvbGxlciA9IGdlbmVyYXRlQXVkaW9FbGVtZW50KCdEZWZhdWx0QXVkaW9Db250cm9sbGVyJywgU291bmRDb2xsZWN0aW9uLmRlZmF1bHQpXHJcbmNvbnN0IEZhaWxlZEF1ZGlvQ29udHJvbGxlciA9IGdlbmVyYXRlQXVkaW9FbGVtZW50KCdGYWlsZWRBdWRpb0NvbnRyb2xsZXInLCBTb3VuZENvbGxlY3Rpb24uZmFpbGVkKVxyXG5jb25zdCBVbmxvY2tlZEF1ZGlvQ29udHJvbGxlciA9IGdlbmVyYXRlQXVkaW9FbGVtZW50KCdVbmxvY2tlZEF1ZGlvQ29udHJvbGxlcicsIFNvdW5kQ29sbGVjdGlvbi51bmxvY2tlZClcclxuXHJcbi8vIE1ldGhvZHNcclxuZnVuY3Rpb24gdW5sb2NrU2NyZWVuKCkge1xyXG4gIHBsYXlTb3VuZChVbmxvY2tlZEF1ZGlvQ29udHJvbGxlcilcclxuICB0b2dnbGVBbGxEb3RzKHRydWUpXHJcbiAgdG9nZ2xlQXBwSWNvbkxvY2tTdGF0ZSgpXHJcbiAgc2V0VGltZW91dCgoKSA9PiBsb2NrU2NyZWVuKCksIDUwMClcclxufVxyXG5cclxuZnVuY3Rpb24gbG9ja1NjcmVlbigpIHtcclxuICByZXNldEFycmF5KHByZXNzZWRLZXlzKVxyXG4gIHRvZ2dsZUFsbERvdHMoZmFsc2UpXHJcbiAgdG9nZ2xlQXBwSWNvbkxvY2tTdGF0ZSgpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZUFwcEljb25Mb2NrU3RhdGUoKSB7XHJcbiAgY29uc3QgQ3VycmVudEFwcEljb25DbG9uZSA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignI0N1cnJlbnRBcHBJY29uQ2xvbmUnKVxyXG4gIEN1cnJlbnRBcHBJY29uQ2xvbmUuY2xhc3NMaXN0LnRvZ2dsZSgnYy1jdXJyZW50LWFwcF9faWNvbi1jbG9uZS0tdW5sb2NrZWQnKVxyXG59XHJcblxyXG5mdW5jdGlvbiB0b2dnbGVBbGxEb3RzKG9uOmJvb2xlYW4gPSBmYWxzZSkge1xyXG4gIEFycmF5LmZyb20oS2V5cHJlc3NEb3RzRWxtKS5tYXAoZG90ID0+IHtcclxuICAgIGRvdC5jbGFzc0xpc3Rbb24gPyAnYWRkJyA6ICdyZW1vdmUnXSgnYy1rZXlwcmVzcy1zZXF1ZW5jZV9fZG90LS1hY3RpdmUnKVxyXG4gIH0pICBcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tLZXlwcmVzc1NlcXVlbmNlKGV2ZW50OiBLZXlib2FyZEV2ZW50LCBsaW1pdDogbnVtYmVyID0gMykge1xyXG4gIHByZXNzZWRLZXlzLnB1c2goZXZlbnQuY29kZSlcclxuXHJcbiAgY29uc3Qga2V5TGltaXRSZWFjaGVkOmJvb2xlYW4gPSBwcmVzc2VkS2V5cy5sZW5ndGggPj0gbGltaXRcclxuICBjb25zdCBzb21lS2V5c0FyZURpZmZlcmVudDpib29sZWFuID0gcHJlc3NlZEtleXMubGVuZ3RoICYmIHByZXNzZWRLZXlzLnNvbWUoa2V5ID0+IGtleSAhPT0gZXZlbnQuY29kZSlcclxuICBjb25zdCBrZXlwcmVzc1NlcXVlbmNlRG90cyA9IEtleXByZXNzU2VxdWVuY2VFbG0ucXVlcnlTZWxlY3RvckFsbCgnLmMta2V5cHJlc3Mtc2VxdWVuY2VfX2RvdCcpXHJcblxyXG4gIGlmICgha2V5TGltaXRSZWFjaGVkKSB7XHJcbiAgICBwcmVzc2VkS2V5cy5tYXAoKGtleSwgaW5kZXgpID0+IHtcclxuICAgICAga2V5cHJlc3NTZXF1ZW5jZURvdHNbaW5kZXhdLmNsYXNzTGlzdC5hZGQoJ2Mta2V5cHJlc3Mtc2VxdWVuY2VfX2RvdC0tYWN0aXZlJylcclxuICAgIH0pXHJcbiAgfVxyXG4gIFxyXG4gIHBsYXlTb3VuZChzb21lS2V5c0FyZURpZmZlcmVudCA/IEZhaWxlZEF1ZGlvQ29udHJvbGxlciA6IERlZmF1bHRBdWRpb0NvbnRyb2xsZXIpXHJcblxyXG4gIGlmIChzb21lS2V5c0FyZURpZmZlcmVudCkge1xyXG4gICAgdG9nZ2xlQWxsRG90cyhmYWxzZSlcclxuICAgIHJldHVybiByZXNldEFycmF5KHByZXNzZWRLZXlzKVxyXG4gIH1cclxuXHJcbiAgaWYgKGtleUxpbWl0UmVhY2hlZCkgdW5sb2NrU2NyZWVuKClcclxufVxyXG5cclxuLy8gRXZlbnRzXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBldmVudCA9PiBjaGVja0tleXByZXNzU2VxdWVuY2UoZXZlbnQsIGtleXNOZWVkaW5nUHJlc3NpbmcpKVxyXG4iXSwic291cmNlUm9vdCI6IiJ9
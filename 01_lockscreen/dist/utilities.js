"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    generateMultipleHTML(html = '', amount = 0) {
        return Array.from({ length: amount }).fill(html).join('');
    },
    playSound(audioElm, src = null) {
        audioElm.currentTime = 0;
        if (src) {
            audioElm.src = src;
        }
        audioElm.play();
    },
    resetArray(array) {
        array.length = 0;
    },
    emit(eventName, target = document) {
        return target.dispatchEvent(new Event(eventName));
    }
};
//# sourceMappingURL=utilities.js.map
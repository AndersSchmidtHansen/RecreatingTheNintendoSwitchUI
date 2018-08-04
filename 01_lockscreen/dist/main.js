/* Nintendo Switch Lock Screen */
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
// HTML Generators
function generateAudioElement(id, src) {
    const elm = document.createElement('audio');
    elm.id = id;
    elm.src = src;
    document.body.appendChild(elm);
    return elm;
}
function generateKeypressSequenceElm(target = document.body, amount = 3) {
    const elm = document.createElement('div');
    elm.id = 'KeypressSequence';
    elm.classList.add('c-keypress-sequence');
    elm.innerHTML = generateMultipleHTML(`<div class="c-keypress-sequence__dot"></div>`, amount);
    if (target)
        target.appendChild(elm);
    return elm;
}
// Methods
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
        emit('unlockSuccess');
}
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
    const CurrentAppIcon = document.body.querySelector('#CurrentAppIcon');
    CurrentAppIcon.classList.toggle('c-current-app__icon--unlocked');
}
function toggleAllDots(on = false) {
    Array.from(KeypressDotsElm).map(dot => {
        dot.classList[on ? 'add' : 'remove']('c-keypress-sequence__dot--active');
    });
}
// Utility Methods
function generateMultipleHTML(html = '', amount = 0) {
    return Array.from({ length: amount }).fill(html).join('');
}
function playSound(audioElm, src = null) {
    audioElm.currentTime = 0;
    if (src) {
        audioElm.src = src;
    }
    audioElm.play();
}
function resetArray(array) {
    array.length = 0;
}
function emit(eventName, target = document) {
    return target.dispatchEvent(new Event(eventName));
}
// Events
document.addEventListener('keydown', event => checkKeypressSequence(event, keysNeedingPressing));
document.addEventListener('unlockSuccess', unlockScreen);
//# sourceMappingURL=main.js.map
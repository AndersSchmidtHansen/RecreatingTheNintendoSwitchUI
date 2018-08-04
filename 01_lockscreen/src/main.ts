/* 01: Creating the Nintendo Switch Lock Screen */

// Utility Methods

/**
 * If you need to generate more than one HTML element, like when generating a list
 * or when generating a bunch of dots, this method can make it easier. You just
 * create an empty array with some empty "slots", which you then fill with
 * whatever HTML string you want to generate.
 */
function generateMultipleHTML (html:string = '', amount:number = 0) {
  return Array.from({ length: amount }).fill(html).join('')
}

/**
 * Playing sounds on keypresses can be a bit messed up if we don't reset the time
 * to zero immediatedly. By doing this, we can hammer away on the keys and the
 * sound clip will just start over from scratch. And since we have different
 * sounds, we also allow it to swap out the sound file's source.
 */
function playSound (audioElm:HTMLAudioElement, src:string = null) {
  audioElm.currentTime = 0
  if (src) { audioElm.src = src }
  audioElm.play()
}

/**
 * There are so many ways to reset an array. This is just a quick example of one way
 * of doing it by setting the length of the array to 0. Fun fact, a JavaScript
 * array's innards look like an object where the indexes are the keys mapped
 * to a value, along with a "length" key that can be changed.
 */
function resetArray(array: Array<any>) {
  array.length = 0
}

/**
 * We could just manually add our audio tags to our `index.html`, but for the heck of
 * it we'll use JavaScript to generate them instead. That way we can grab them here
 * without having to do a query selection (even though it's trivial). 
 */
function generateAudioElement (id:string, src:string) {
  const elm:HTMLAudioElement = document.createElement('audio')
  elm.id = id
  elm.src = src
  document.body.appendChild(elm)
  return elm
}

/**
 * We could just as well have created this manually in `index.html`, but we'll let JavaScript
 * handle that this time. It also allows us to generate any number of keypress dots easily.
 */
function generateKeypressSequenceElm (target:any = document.body, amount:number = 3) {
  const elm:HTMLDivElement = document.createElement('div')
  elm.id = 'KeypressSequence'
  elm.classList.add('c-keypress-sequence')
  elm.innerHTML = generateMultipleHTML(`<div class="c-keypress-sequence__dot"></div>`, amount)
  
  if (target) target.appendChild(elm)
  
  return elm
}

// State
let pressedKeys:Array<any> = []
const keysNeedingPressing:number = 3

// Resource Collections
const SoundCollection = {
  default: '../01_lockscreen/assets/sounds/default.ogg',
  failed: '../01_lockscreen/assets/sounds/failure.ogg',
  unlocked: '../01_lockscreen/assets/sounds/unlocked.ogg'
}

// Elements 
const KeypressSequenceElm = generateKeypressSequenceElm(document.querySelector('#KeypressSequenceContainer'), keysNeedingPressing)
const KeypressDotsElm = KeypressSequenceElm.querySelectorAll('.c-keypress-sequence__dot')

const DefaultAudioController = generateAudioElement('DefaultAudioController', SoundCollection.default)
const FailedAudioController = generateAudioElement('FailedAudioController', SoundCollection.failed)
const UnlockedAudioController = generateAudioElement('UnlockedAudioController', SoundCollection.unlocked)

// Methods
function unlockScreen() {
  playSound(UnlockedAudioController)
  toggleAllDots(true)
  toggleAppIconLockState()
  setTimeout(() => lockScreen(), 500)
}

function lockScreen() {
  resetArray(pressedKeys)
  toggleAllDots(false)
  toggleAppIconLockState()
}

function toggleAppIconLockState() {
  const CurrentAppIconClone = document.body.querySelector('#CurrentAppIconClone')
  CurrentAppIconClone.classList.toggle('c-current-app__icon-clone--unlocked')
}

function toggleAllDots(on:boolean = false) {
  Array.from(KeypressDotsElm).map(dot => {
    dot.classList[on ? 'add' : 'remove']('c-keypress-sequence__dot--active')
  })  
}

function checkKeypressSequence(event: KeyboardEvent, limit: number = 3) {
  pressedKeys.push(event.code)

  const keyLimitReached:boolean = pressedKeys.length >= limit
  const someKeysAreDifferent:boolean = pressedKeys.length && pressedKeys.some(key => key !== event.code)
  const keypressSequenceDots = KeypressSequenceElm.querySelectorAll('.c-keypress-sequence__dot')

  if (!keyLimitReached) {
    pressedKeys.map((key, index) => {
      keypressSequenceDots[index].classList.add('c-keypress-sequence__dot--active')
    })
  }
  
  playSound(someKeysAreDifferent ? FailedAudioController : DefaultAudioController)

  if (someKeysAreDifferent) {
    toggleAllDots(false)
    return resetArray(pressedKeys)
  }

  if (keyLimitReached) unlockScreen()
}

// Events
document.addEventListener('keydown', event => checkKeypressSequence(event, keysNeedingPressing))

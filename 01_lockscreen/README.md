# A Nintendo Switch Lock Screen in the Browser

## What you might learn (if you didn't know already)

1. How to quickly set up a prototype environment in Visual Studio Code using the Live Server Extension

2. Layouting a UI using the latest CSS Grid and Flexbox tools.

3. Working with different audio samples using JavaScript and making them play when a user presses different keys.

4. Checking for a sequence of keypresses and evaluating if it's correct or not (using Event Listeners).

5. Using `setTimeout` to reset a sequence if a user stops pressing keys.

6. Structuring assets and using a modular ES6 approach to importing and exporting files.

7. (Hopefully) get an example of clean code, but I make no promises.

8. Using TypeScript in a very basic way and setting up a basic TypeScript build process in Visual Studio Code.

9. Using the extremely useful [`Quokka.js`](https://quokkajs.com/) extension for Visual Studio Code to get instant feedback from our code.

## TypeScript? Why?

Despite having worked with JavaScript throughout the years, I've never really dived into the whole TypeScript-hype that's been unfolding for the past few years. 

Not that I'm a skeptic per se, not at all, I just didn't have a good reason for seriously trying it out. Until now. TypeScript has evolved a lot and can provide you with some very nice benefits that we usually don't have access to when developing in "plain ol' JS". So why not give it a spin for something simple as this and get a better understanding of whether TypeScript is something for you or not.

## Setting up TypeScript in Visual Studio Code

Since TypeScript is developed by Microsoft (and evolved through the amazing community of contributors) it's quite easy to set up in Visual Studio Code. I basically just had to the following:

1. Install `typescript` globally via `npm` by running `npm install -g typescript`. This gives Visual Studio Code access to the terminal command `tsc`, which will make it possible for Visual Studio Code to automatically watch our `.ts` files and transpile (convert) to normal `.js` files.

2. Create a new `tsconfig.json` file in the root folder that includes settings for how and where we want our files to be compiled. You can see the included `tsconfig.json` file for an example. In relation to how we organize a project, note the `"rootDir": "./src","outDir": "./dist"` parts of the `tsconfig.json` file. These are important for keeping our source files (files we work in) separated from our dist files (files that the browser will consume).

3. Create a `main.ts` file inside our `src` folder, press `ctrl+shift+p` to bring up the VS Code command line, write `tsc:watch`, and press `enter`. Now, after writing something in `main.ts` and saving, I saw my `.ts` file compile to a `.js` file inside `dist` and everyone's happy. Great.


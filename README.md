# Recreating the Nintendo Switch UI

## But why?

I like recreating user interface elements from games and consoles when I'm not working on my day-to-day frontend and UI/UX development tasks. And instead of letting the code collect dust locally, maybe someone might learn a thing or two if I shared the what's and how's in a public repo.

That's all :wink:.

## If you want to follow along, I'd recommend...

- A text editor (like Visual Studio Code).
- Basic experience with JavaScript, CSS and HTML.
- Something that can open up an `index.html` file and live reload it when code changes (like `Live Server` for VS Code or `BrowserSync`).
- The extremely useful [`Quokka.js`](https://quokkajs.com/) extension for Visual Studio Code to get instant feedback from your code.

## How's the project structured?

I've aimed to keep things structured in a chapter-to-chapter format, a bit similar to how [Wes Bos does it](https://github.com/wesbos/css-grid). It keeps things isolated, so I can focus on parts of the UI that I find interesting instead of creating a big master application.

Keep in mind that I like to be explorative, so I won't be implementing every single nook and cranny of the UI. Only the "fun" parts that I think would be a fun challenge.

## Why's it in plain JavaScript/TypeScript and not in XYZ framework?

I've worked with UI frameworks and libraries such as Angular and VueJS for the past 5 years and it's tempting to just use those for this project. But I think it's good to try without relying on these tools from time to time. This project is one of those times. I might do an implementation in Vue if I really think it's necessary, but I'll try to avoid it.

The same goes for CSS; I love using Sass, but since we have now have CSS Variables available, it's a good opportunity to just use plain CSS as well.

## Why TypeScript?
Despite having worked with JavaScript throughout the years, I've never really dived into the whole TypeScript-hype that's been unfolding for the past few years. 

Not that I'm a skeptic per se, not at all, I just didn't have a good reason for seriously trying it out. Until now. TypeScript has evolved a lot and can provide you with some very nice benefits that we usually don't have access to when developing in "plain ol' JS". So why not give it a spin for something simple as this and get a better understanding of whether TypeScript is something for you or not.

## What's that mix of CSS methodologies, I see?
For some part I'll be using a [BEM approach](http://getbem.com/introduction/), which most of you are probably familiar with today. But after years of BEM, I've also found it incredibly useful to take on a more atomic approach at times. If you're interested in that, I can recommend [Basscss](http://basscss.com/).


# Opening up the project files

## Setting up a Live Server in Visual Studio Code
Things are just much easier when the browser automatically renders new changes when our code changes. Visual Studio Code has several nice extensions for this, and I use `Live Server` by Ritwick Dey. It should be fairly easy to install and get up and running.


## Setting up TypeScript in Visual Studio Code
Since TypeScript is developed by Microsoft (and evolved through the amazing community of contributors) it's quite easy to set up in Visual Studio Code. I basically just had to the following:

1. Install `typescript` globally via `npm` by running `npm install -g typescript`. This gives Visual Studio Code access to the terminal command `tsc`, which will make it possible for Visual Studio Code to automatically watch our `.ts` files and transpile (convert) to normal `.js` files.

2. Open one of the `main.ts` files located inside a chapter's `src` folder and make your changes.

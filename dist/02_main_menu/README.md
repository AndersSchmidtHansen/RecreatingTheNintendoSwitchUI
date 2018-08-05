# 02: The Nintendo Switch Main Menu

## What you might learn
* Using CSS Grid to create a typical header, content, footer layout.

* Creating colorful, circular avatars.

* How to create a horizontal list of application icons that overflow off the right edge of the screen.

* How to create a list of circular main menu buttons that use SVG icons as graphics.

* A standard clock component to show the user the current time.

* A WiFi connectivity icon that shows how good the reception is.

* A battery indicator, showing how much batter that's left on the device.

* Playings different sounds when interacting with the different UI elements.

* A controller connectivity indicator to show the user if one or both controller devices are correctly connected.

## Let's get started
Alright, so where do we start on this? Usually I apply two approaches when creating an interface from a design or prototype; defining the core layout itself and defining the different components themselves.

More often than not, I focus more on the components themselves in isolation than the layouting at first since the layout may change and we want our components to be as independent as possible anyway.

Your mileage may vary, of course.

## A1: Defining the layout
At a quick top-level glance, the main menu is structured in a typical three-row layout with a fixed header and footer along with a main content area where the primary user focus should be.

Inside each area (header, content, footer) we see some micro-layouting going on where some components live on the right, and some on the left. Pretty straightforward.

We'll start out by using CSS' Grid to layout this foundation and then move on to adding in the individual components.

```css
```

As a sidenote; we would probably want our main content area to use `align-content: center` since it seems that the components inside the main content area are vertically centered.

## A2: Defining the different components in isolation
Again, at a quick glance, the main menu consists of the following components:

* A `UserAvatars` component in the top left corner.
* `CurrentTime`, `WiFiConnectionStatus` and `BatteryStatus` components in the top right corner.
* An `ApplicationsList` component in the main content area.
* A `MainMenuNavigation` component, also in the main content area.
  > Note: These can have a small red dot indicating news or updates.
  > Note: The icons animate when selected.

* A `ControllerStatus` component in the bottom left corner.
* A `CurrentActionHelp` component in the bottom right corner (admittedly a little thin for a component, but let's go with it anyway).

> General Note: The avatars, applications and navigation items have an animated blue border that pulsates when in focus.

## B: Creating component shells and rendering them out
To get a good start on the different components, I began writing their shells and added them to the layout. What I mean by shells is simply to create a bare minimum version of each component file (the `ComponentName.ts` files) that take a HTML template string and a destination of where it should render. Like this:

```typescript
import { Component } from "./Component";

export class ControllerStatus extends Component {
  constructor() {
    super(
      `<strong>ControllerStatus</strong>`,
      '.c-app__footer'
    )
  }
}
```

What you might notice is that I created a top-level `Component` class to make rendering a little bit easier as it gets tiresome to type out all the boilerplate code over and over again. The `Component.ts` looks something like this:

```typescript
export class Component {
  public template:string
  public renderTarget:string

  constructor(theTemplate = `<div>Template</div>`, theRenderTarget = 'body') {
    this.template = theTemplate
    this.renderTarget = theRenderTarget
    this.render(this.renderTarget)
  }

  render(target) {
    const elm = document.createElement('template')
    elm.innerHTML = this.template
    document.querySelector(target).appendChild(elm.content.cloneNode(true))
  }
}
```

Keep in mind that I'm not very familiar with `TypeScript`, and it's learning experience for me as well. It basically just tages a template string and a query (the `document.querySelector` part) and replaces the `template` HTML element with whatever HTML we give it. I imagine It's a poor man's implementation of how React and Vue do it.

I then did this to all the described components, one by one, before moving on to some micro-layouting.

## Micro-layouting with CSS grid
This part is pretty trivial. Since I can see that some of the components are aligned to the right, which gives this "split" layouting in the header and footer, I needed to do the same. With CSS grid's `justify-self`, this is easy.

Both `.c-app__header` and `.c-app__footer` got a `display: grid` rule on them and a `grid-template-columns: repeat(2, minmax(10px, 1fr)`) to create 2 columns, each filling up 1 fraction each.

Aligning the elements to the right was handled with a `.align-right` helper class that simply sets `justify-self: right` on whatever element it's attached to.
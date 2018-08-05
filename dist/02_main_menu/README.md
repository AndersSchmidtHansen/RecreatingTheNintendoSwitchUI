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
* `CurrentTime`, `WiFiConnectionStatus` and `DeviceBatteryStatus` components in the top right corner.
* An `ApplicationsList` component in the main content area.
* A `MainMenuNavigation` component, also in the main content area.
  > Note: These can have a small red dot indicating news or updates.
  > Note: The icons animate when selected.

* A `DeviceControllersStatus` component in the bottom left corner.
* A `CurrentActionHelp` component in the bottom right corner (admittedly a little thin for a component, but let's go with it anyway).

> General Note: The avatars, applications and navigation items have an animated blue border that pulsates when in focus.
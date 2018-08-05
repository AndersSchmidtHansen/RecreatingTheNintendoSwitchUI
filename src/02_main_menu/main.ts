/* 02: Nintendo Switch Main Menu */

import { Component } from "./components/Component";

class ComponentLoader {
    constructor(
        private readonly ctx: Object) {        
    }
    async getComponent(name: string) {        
        const component = await import(`./components/${name}`);
        return <Component>(new component[name]());        
    }
}

const loader = new ComponentLoader(window);

function parseComponentName(name) {
    return name
        .split('-')
        .reduce((a, b) => a + (b.charAt(0).toUpperCase() + b.substring(1)));
}

async function render(source) {
    const name = source.tagName.toLowerCase();    
    if (name.startsWith("cmp-")) {
        const componentName = parseComponentName(name.substring(3));
        const comp = await loader.getComponent(componentName);        
        comp.render(source);
        console.log("component name: " + componentName);
    }
    [...source.children].forEach(async x => await render(x));
}

window.addEventListener("load", () => {
    render(document.querySelector("main"));
});
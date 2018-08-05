/* 02: Nintendo Switch Main Menu */

import { Component } from "./components/Component";

class ComponentLoader {    
    constructor(
        private readonly ctx: Object) {        
        
    }
    async getComponent(name: string) {        
        const target    = await import(`./components/${name}`);                
        const component = <Component>(new target[name]());
        component.template = await getAsync(`./templates/${name}.html`, component.template);        
        return component;
    }
}

const loader = new ComponentLoader(window);

async function getAsync(url: string, fallbackValue: string){
    try {            
        return <string>(await requestAsync(url));
    } catch(e) {
        return fallbackValue;
    }
}

function requestAsync(url: string): Promise<string> {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();
        xhttp.onload = () => {
          if (xhttp.status >= 200 && xhttp.status < 300) {
            resolve(xhttp.responseText);
          } else {
            reject();
          }
        };
        xhttp.onerror = () => reject();
        xhttp.open("GET", url, true);
        xhttp.send();
      });
}

function parseComponentName(name): string {
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
    }
    [...source.children].forEach(async x => await render(x));
}

window.addEventListener("load", () => {
    render(document.querySelector("main"));
});
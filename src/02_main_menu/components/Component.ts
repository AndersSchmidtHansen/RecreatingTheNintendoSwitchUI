
export class Component {
  public template: string;
  private parentElement: HTMLElement;
  private cmpElement: HTMLElement;

  constructor(theTemplate = `<div>Template</div>`, theRenderTarget = 'body') {
    this.template = theTemplate
  }

  isExpression(str:string):boolean {
    return str.includes("(") 
        || str.includes("*")
        || str.includes("-")
        || str.includes("+")
        || str.includes("=")
        || str.includes("/")
        || str.includes("%")
        || str.includes("*")
        || str.includes("<")
        || str.includes(">")
        || str.includes("&&")
        || str.includes("&")
        || str.includes("|")
        || str.includes("||")
        || str.includes("?")
        || str.includes(":")
        || str.includes("\"")
        || str.includes("'")
  }

  evaluatePropertyPaths(str:string): string {
    if (str.indexOf("{{") < 0 || str.indexOf("}}") < 0) {
      return str;
    }
    const regex = /{{([^}]+)}}/gm;
    const self = this;
    const isFunction = (functionToCheck) => 
      functionToCheck && {}.toString.call(functionToCheck) === "[object Function]";
    
    return str.replace(regex, m => {
      const x : any = m;
      if (x.index === regex.lastIndex) {
        regex.lastIndex++;
      }
      const propertyNameOrPath = m.substring(2, m.length - 2);
      const properties = [];
      let propertyPath = propertyNameOrPath;
      let value = self;

      if (this.isExpression(propertyPath)) {
        // complex evaluation required.
        try {
          return eval("this." + propertyPath);
        } catch (e) {
          return eval(propertyPath);
        }
      } else {
        while (propertyPath.includes(".")) {
          properties.push(propertyPath.split(".")[0]);
          propertyPath = propertyPath.substring(propertyPath.indexOf("."));
        }
        properties.push(propertyPath);
        for (let i = 0; i < properties.length; ++i) {
          const prop      = properties[i];
          const propValue = value[prop];        
          if (isFunction(propValue)) {
            value = propValue();
          } else {
            value = propValue;
          }               
        }
        return `${value}`;      
      }
    });
  }

  render(target?: HTMLElement): void {
    const elm = document.createElement('template')
    elm.innerHTML = this.evaluatePropertyPaths(this.template);    

    if (target && target != null) {
      this.parentElement = target;
    }

    // Tip: Using content.cloneNode(true) will completely replace the HTMLElement
    // tag with whatever we pass in, yielding a result similar to React or Vue.
    const newChild = elm.content.cloneNode(true) as HTMLElement
    if (this.cmpElement && this.parentElement) {      
      this.cmpElement.innerHTML = elm.innerHTML
    } else if (this.parentElement) {
      this.parentElement.appendChild(newChild)       
      this.cmpElement = this.parentElement.children[this.parentElement.children.length - 1] as HTMLElement
    }
  }
}
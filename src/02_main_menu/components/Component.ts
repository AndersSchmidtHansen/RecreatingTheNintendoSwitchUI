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

    // Tip: Using content.cloneNode(true) will completely replace the HTMLElement
    // tag with whatever we pass in, yielding a result similar to React or Vue.
    document.querySelector(target).appendChild(elm.content.cloneNode(true))
  }
}
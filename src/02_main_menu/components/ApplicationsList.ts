import { Component } from "./Component";

export class ApplicationsList extends Component {
  public test: string;
  private _counter: number = 0;
  constructor() {    
    super()
    this.test = "hello world";
    setTimeout(() => this.increment(), 1000);
  }  
  get counter(): number {
    return this._counter;
  }
  increment(): void {
    this._counter++;
    this.render();
    setTimeout(() => this.increment(), 1000);
  }
}
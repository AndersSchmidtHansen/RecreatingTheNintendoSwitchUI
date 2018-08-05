import { Component } from "./Component";

export class ApplicationsList extends Component {
  public test: string;
  constructor() {    
    super(
      `<strong>Applications List</strong>`
      // '.c-app__content'
    )
    this.test = "hello world";
  }
  myFunc(): string {
    return "hehehehe";
  }
  myFunc2(a:string): string {
    return "myFunc2 returned: " + a;
  }
}
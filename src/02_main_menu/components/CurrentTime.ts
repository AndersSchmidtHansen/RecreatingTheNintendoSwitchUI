import { Component } from "./Component";

export class CurrentTime extends Component {
  constructor() {
    super(
      `<strong>CurrentTime</strong>`,
      '.c-app__device-info'
    )
    console.log('Hello from CurrentTime')
  }
}
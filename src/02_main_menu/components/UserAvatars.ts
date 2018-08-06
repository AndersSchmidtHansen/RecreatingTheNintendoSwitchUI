import { Component } from "./Component";

function renderAvatars(users:Array<any> = []) {
  return users.map(user => `
      <div class="c-avatar">
        <img src="https://api.adorable.io/avatars/285/${user.username}" class="c-avatar__image" />
        <div class="c-avatar__name">${user.name}'s Page</div>
      </div>
    `).join('')
}

export class UserAvatars extends Component {
  constructor(users:Array<object> = []) {
    const template:string = renderAvatars(users)
    super(template, '.c-app__avatars')
    console.log('Hello from avatars', users)
  }
}
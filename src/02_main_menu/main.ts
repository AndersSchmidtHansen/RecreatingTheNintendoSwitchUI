/* 02: Nintendo Switch Main Menu */
import { UserAvatars } from './components/UserAvatars'
import { CurrentTime } from './components/CurrentTime'
import { BatteryStatus } from './components/BatteryStatus'
import { WiFiConnectionStatus } from './components/WiFiConnectionStatus'
import { ApplicationsList } from './components/ApplicationsList'
import { MainMenuNavigation } from './components/MainMenuNavigation'
import { ControllerStatus } from './components/ControllerStatus'
import { CurrentActionHelp } from './components/CurrentActionHelp'

const users = [
  {
    name: 'Joe',
    username: 'joe@joe.com'
  },
  {
    name: 'Jane',
    username: 'jane@jane.com'
  }
]

const avatars = new UserAvatars(users)
const currentTime = new CurrentTime
const wifiConnectionStatus = new WiFiConnectionStatus
const batteryStatus = new BatteryStatus
const applicationsList = new ApplicationsList
const mainMenuNavigation = new MainMenuNavigation
const controllerStatus = new ControllerStatus
const currentActionHelp = new CurrentActionHelp

console.log('Hello from main')


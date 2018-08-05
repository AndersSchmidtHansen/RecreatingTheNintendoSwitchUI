/* 02: Nintendo Switch Main Menu */
import { UserAvatars } from './components/UserAvatars'
import { CurrentTime } from './components/CurrentTime'
import { BatteryStatus } from './components/BatteryStatus'
import { WiFiConnectionStatus } from './components/WiFiConnectionStatus'
import { ApplicationsList } from './components/ApplicationsList'
import { MainMenuNavigation } from './components/MainMenuNavigation'
import { ControllerStatus } from './components/ControllerStatus'
import { CurrentActionHelp } from './components/CurrentActionHelp'

const avatars = new UserAvatars
const currentTime = new CurrentTime
const wifiConnectionStatus = new WiFiConnectionStatus
const batteryStatus = new BatteryStatus
const applicationsList = new ApplicationsList
const mainMenuNavigation = new MainMenuNavigation
const controllerStatus = new ControllerStatus
const currentActionHelp = new CurrentActionHelp

console.log('Hello from main')


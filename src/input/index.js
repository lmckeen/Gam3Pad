import { findActiveButtons } from '../validate'

export function generateInput(names, index) {
  const gamepads = navigator.getGamepads()
  const gamepad = gamepads[index]
  const buttons = findActiveButtons(gamepad, names)
  const joysticks = {
    left: [gamepad.axes[0], gamepad.axes[1]],
    right: [gamepad.axes[2], gamepad.axes[3]]
  }
  
  return {
    buttons,
    joysticks
  }
}
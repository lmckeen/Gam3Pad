import { supportedControllers } from '../config'

export function findInput(gamepad, names) {
  return gamepad.buttons
    .map((button, index) => {
      const buttonClone = {
        pressed: button.pressed,
        touched: button.touched,
        value: button.value
      }

      return {button: buttonClone, index, type: names[index]}
    })  
}

export function getActiveInput(input) {
  return {
    buttons: input.buttons.filter(obj => obj.button.pressed),
    joysticks: input.joysticks
  }
}

export function isNewButtonInput(input, lastInput) {
  if (input.buttons.length !== lastInput.buttons.length) return true
  if (input.buttons.length === 0 && lastInput.buttons.length === 0) return false
  if (JSON.stringify(input.buttons) !== JSON.stringify(lastInput.buttons)) return true
  if (input.buttons.some((btn, index) => btn.button.value !== lastInput.buttons[index].button.value)) return true
}

export function isNewJoystickInput(input, lastInput) {
  if (JSON.stringify(input.joysticks) !== JSON.stringify(lastInput.joysticks)) return true
}

export function getSupportedController(mapping) {
  return supportedControllers[mapping] || console.error(`${mapping} is an unsupported controller`)
}

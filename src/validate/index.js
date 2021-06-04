import { supportedControllers } from '../config'

export function findActiveButtons(gamepad, names) {
  return gamepad.buttons
    .map((button, index) => {
      return {button, index, type: names[index]}
    })  
    .filter(obj => obj.button.pressed)
}

export function isNewButtonInput(input, lastInput) {
  if (input.buttons.length !== lastInput.buttons.length) return true
  if (input.buttons.length === 0) return false
  if (JSON.stringify(input.buttons) !== JSON.stringify(lastInput.buttons)) return true
  if (input.buttons.some((btn, index) => btn.button.value !== lastInput.buttons[index].button.value)) return true
}

export function isNewJoystickInput(input, lastInput) {
  if (JSON.stringify(input.joysticks) !== JSON.stringify(lastInput.joysticks)) return true
}

export function getSupportedController(mapping) {
  return supportedControllers[mapping] || console.error(`${mapping} is an unsupported controller`)
}

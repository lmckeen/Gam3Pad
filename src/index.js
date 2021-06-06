import {
  isNewButtonInput,
  isNewJoystickInput,
  getSupportedController,
  getActiveInput,
} from './validate'
import { on, dispatchCallbacks } from './events'
import { globalGamepadConstants } from './config'
import { generateInput, vibrate } from './input'

export class Gam3pad {
  #gamepadIndex
  #buttonNames
  #isConnected = false
  #lastInput = { buttons: [], joysticks: [] }

  constructor() {
    window.addEventListener("gamepadconnected", event => {
      this.#buttonNames = getSupportedController(event.gamepad.mapping)

      if (this.#buttonNames) {
        this.#isConnected = true
        this.#gamepadIndex = event.gamepad.index
        
        window.requestAnimationFrame(this.#loop.bind(this))
      }
    })

    window.addEventListener("gamepaddisconnected", () => {
      this.#isConnected = false
    })
  }

  #loop() {
    if (!this.#isConnected) return

    const input = generateInput(this.#buttonNames, this.#gamepadIndex)
    const activeInput = getActiveInput(input)
    
    let hasUpdated = false
    
    if (isNewButtonInput(activeInput, this.#lastInput)) {
      const newButtonTypes = []

      hasUpdated = true

      activeInput.buttons.forEach(button => {       
        dispatchCallbacks(button.type, button)
        newButtonTypes.push(button.type)
      })

      this.#lastInput.buttons.forEach(data => {
        if (!newButtonTypes.includes(data.type)) {
          dispatchCallbacks(data.type, input.buttons[data.index])
          dispatchCallbacks(globalGamepadConstants.ALL, { 
            buttons: [input.buttons[data.index]], 
            joysticks: input.joysticks
          })
        }
      })
    }

    if (isNewJoystickInput(activeInput, this.#lastInput)) {
      dispatchCallbacks(globalGamepadConstants.JOYSTICKS, activeInput.joysticks)
      
      if (!hasUpdated) {
        dispatchCallbacks(globalGamepadConstants.ALL, activeInput)
      } 
    }

    if (hasUpdated && activeInput.buttons.length > 0) {
      dispatchCallbacks(globalGamepadConstants.ALL, activeInput)
    } 

    this.#lastInput = activeInput

    window.requestAnimationFrame(this.#loop.bind(this))
  }

  on = on
  vibrate = vibrate
  static INPUT = globalGamepadConstants
}
import { isNewButtonInput, isNewJoystickInput, getSupportedController } from './validate'
import { on, dispatchCallbacks } from './events'
import { generateInput } from './input'

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

    let hasUpdated = false

    if (isNewButtonInput(input, this.#lastInput)) {
      hasUpdated = true
      
      input.buttons.forEach(button => {
        dispatchCallbacks(button.type, button)
      })
    }

    if (isNewJoystickInput(input, this.#lastInput)) {
      hasUpdated = true

      dispatchCallbacks('joysticks', input.joysticks)
    }

    if (hasUpdated) {
      this.#lastInput = input
      dispatchCallbacks('input', input)
    }

    window.requestAnimationFrame(this.#loop.bind(this))
  }

  on = on
}
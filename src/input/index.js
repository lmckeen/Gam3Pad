import { findInput } from '../validate'

let gamepad

export function generateInput(names, index) {
  const gamepads = navigator.getGamepads()
  gamepad = gamepads[index]
  const buttons = findInput(gamepad, names)
  
  const joysticks = {
    left: [gamepad.axes[0], gamepad.axes[1]],
    right: [gamepad.axes[2], gamepad.axes[3]]
  }
  
  return {
    buttons,
    joysticks
  }
}

export function vibrate({delay = 0, duration = 500, weak = 0.5, strong = 0.5} = {}) {
  const clampedDelay = Math.min(Math.max(delay, 0), 5000)
  const clampedDuration = Math.min(Math.max(duration, 1), 5000, 5000 - clampedDelay)
  const clampedStrong = Math.min(Math.max(strong, 0), 1)
  const clampedWeak = Math.min(Math.max(weak, 0), 1)

  if (gamepad.vibrationActuator) {
    gamepad.vibrationActuator.playEffect("dual-rumble", {
      startDelay: clampedDelay,
      duration: clampedDuration,
      weakMagnitude: clampedWeak,
      strongMagnitude: clampedStrong,
    })
  }
}

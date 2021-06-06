import { globalGamepadConstants } from '../config'

const callbacks = {}

export function on(type, cb) {
  if (type === globalGamepadConstants.CONNECTED) {
    window.addEventListener("gamepadconnected", cb)
  }

  if (type === globalGamepadConstants.DISCONNECTED) {
    window.addEventListener("gamepaddisconnected", cb)
  }

  callbacks[type] = callbacks[type] ?? []
  callbacks[type].push(cb)
}

export function dispatchCallbacks(type, data) {
  if (!callbacks[type]) return
  
  callbacks[type].forEach(cb => cb(data))
}

import { globalButtonConstants } from '../config'

const callbacks = {}

export function on(type, cb) {
  if (type === globalButtonConstants.CONNECTED) {
    window.addEventListener("gamepadconnected", cb)
  }

  if (type === globalButtonConstants.DISCONNECTED) {
    window.addEventListener("gamepaddisconnected", cb)
  }

  callbacks[type] = callbacks[type] ?? []
  callbacks[type].push(cb)
}

export function dispatchCallbacks(type, data) {
  if (callbacks[type]) {
    callbacks[type].forEach(cb => cb(data))
  }
}

const callbacks = {}

export function on(type, cb) {
  if (type === 'connected') {
    window.addEventListener("gamepadconnected", cb)
  }

  if (type === 'disconnected') {
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

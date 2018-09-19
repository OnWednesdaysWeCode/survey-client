'use strict'

const authEvents = require('./auth/events.js')

$(() => {
  authEvents.addHandlers()
})

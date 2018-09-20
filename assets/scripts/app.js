'use strict'

const authEvents = require('./auth/events.js')
const surveyEvents = require('./survey/events.js')

$(() => {
  authEvents.addHandlers()
  surveyEvents.addHandlers()
})

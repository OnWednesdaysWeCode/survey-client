'use strict'

const authEvents = require('./auth/events.js')
const surveyEvents = require('./survey/events.js')
const responseEvents = require('./response/events.js')

$(() => {
  authEvents.addHandlers()
  surveyEvents.addHandlers()
  responseEvents.addHandlers()
})

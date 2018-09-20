
'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
// const ui = require('./ui')
const store = require('../store.js')

const onGetSurveys = function (event) {
  event.preventDefault()
  api.getSurveys()
    .then(console.log)
    .catch(console.error)
}

const onCreateSurvey = function (event) {
  event.preventDefault()
  console.log('clicked!')
  const data = getFormFields(this)
  api.createSurvey(data)
    .then(console.log)
    .catch(console.error)
}

const addHandlers = () => {
  $('#create-survey').on('submit', onCreateSurvey)
  $('#get-surveys').on('click', onGetSurveys)
}

module.exports = {
  addHandlers
}

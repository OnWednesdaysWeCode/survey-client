
'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')
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

const getSurveys = function (event) {
  api.getSurveys()
    .then(ui.showAllSurveys)
    .catch(console.error)
}

const submitAnswer = function (event) {
  event.preventDefault()
  const form = $(event.target).closest('form')
  console.log(form)
  const option1 = form[0][0]
  const option2 = form[0][1]
  console.log(option1.checked)
  console.log(option2.checked)
  if (option1.checked === true) {
    console.log(option1.value)
  } else if (option2.checked === true) {
    console.log(option2.value)
  }
  console.log('submitted')
}

const seeResults = function (event) {
  event.preventDefault()
  const surveyId = $(event.target).closest('section').data('id')
  console.log('see results', surveyId)
}

const addHandlers = () => {
  $('#create-survey').on('submit', onCreateSurvey)
  $('#get-surveys').on('click', onGetSurveys)
  $('#get-surveys').on('click', getSurveys)
  $('.populate-surveys').on('click', '.submit-answer', submitAnswer)
  $('.populate-surveys').on('click', '.see-results', seeResults)
}

module.exports = {
  addHandlers
}

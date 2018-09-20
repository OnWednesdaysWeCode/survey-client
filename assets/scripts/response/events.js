'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
// const ui = require('./ui')
const store = require('../store.js')

const onGetResponses = function (event) {
  api.getResponses()
    .then(console.log)
    .catch(console.error)
}

const onCreateResponse = function (event) {
  event.preventDefault()
  const form = $(event.target).closest('form')
  const option1 = form[0][0]
  const option2 = form[0][1]
  let answer = null
  if (option1.checked === true) {
    answer = (option1.value)
  } else if (option2.checked === true) {
    answer = (option2.value)
  }
  console.log('submitted')
  $(form).hide()
  const div = $(event.target).closest('div')
  console.log(div[0].children[1])
  const results = div[0].children[1]
  $(results).removeClass('d-none')
  const surveyId = $(event.target).closest('section').data('id')
  api.createResponse(answer, surveyId)
    .then(console.log)
    .catch(console.error)
}

const addHandlers = () => {
  $('.populate-surveys').on('click', '.submit-answer', onCreateResponse)
}

module.exports = {
  addHandlers
}

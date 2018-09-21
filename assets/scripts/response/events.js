'use strict'

const api = require('./api')
const store = require('../store.js')
const pieChart = require('./pie-chart.js')
const ui = require('./ui')

const onGetResponses = function (event) {
  event.preventDefault()
  const id = $(event.target).closest('section').data('id')
  api.showSurvey(id)
    .then(survey => {
      store.responseArray = survey.survey.responses
      calculateResponse(id)
    })
    .catch(ui.failure)
}

const calculateResponse = function (id) {
  const responseCount = store.responseArray.length
  let option1Count = 0
  let option2Count = 0
  for (let i = 0; i < responseCount; i++) {
    if (store.option1.value === store.responseArray[i].answer) {
      option1Count += 1
    } else if (store.option2.value === store.responseArray[i].answer) {
      option2Count += 1
    }
  }
  pieChart.pieChart(store.option1.value, store.option2.value, option1Count, option2Count, id)
}

const onCreateResponse = function (event) {
  event.preventDefault()
  const form = $(event.target).closest('form')
  const option1 = form[0][0]
  store.option1 = option1
  const option2 = form[0][1]
  store.option2 = option2
  let answer = null
  if (option1.checked === true) {
    answer = (option1.value)
  } else if (option2.checked === true) {
    answer = (option2.value)
  }
  if (answer !== null) {
    $(form).hide()
    const div = $(event.target).closest('div')
    const results = div[0].children[1]
    $(results).removeClass('d-none')
    const surveyId = $(event.target).closest('section').data('id')
    api.createResponse(answer, surveyId)
      .then(() => onGetResponses(event))
      .catch(ui.failure)
  } else {
    const errorSurveyId = $(event.target).closest('section').data('id')
    $('[data-id=' + errorSurveyId + '] .card-body .error-message').text('Please select an answer before submitting')
  }
}

const addHandlers = () => {
  $('.populate-surveys').on('click', '.submit-answer', onCreateResponse)
}

module.exports = {
  addHandlers
}

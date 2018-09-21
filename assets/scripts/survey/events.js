
'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')
const store = require('../store.js')

const onGetMySurveys = function (event) {
  api.getSurveys()
    .then(surveys => {
      // collects all the surveys and passes in a function that sorts for user surveys
      const surveryArray = surveys.surveys
      userSurveys(surveryArray)
    })
    .catch(ui.failure)
}

// creates an array in store.userSurveys that has only the user's created surveys
const userSurveys = function (allSurveyArray) {
  store.userSurveys = []
  for (let i = 0; i < allSurveyArray.length; i++) {
    if (allSurveyArray[i].creator === store.user._id) {
      store.userSurveys.push(allSurveyArray[i])
    }
  }
  ui.showMySurveys(store.userSurveys)
}

const onCreateSurvey = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.createSurvey(data)
    .then(ui.createSurveySuccess)
    .catch(ui.createSurveyFailure)
}

const onGetSurveys = function (event) {
  api.getSurveys()
    .then(ui.showAllSurveys)
    .catch(ui.failure)
}

const onDeleteSurvey = function (event) {
  const surveyId = $(event.target).closest('section').data('id')
  api.destroySurvey(surveyId)
    .then(() => onGetMySurveys())
    .catch(ui.failure)
}

const onSaveSurvey = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updateSurvey(store.surveyId, data)
    .then(() => {
      onGetMySurveys()
    })
    .catch(ui.failure)
}

const editSurvey = function (event) {
  const surveyId = $(event.target).closest('section').data('id')
  store.surveyId = surveyId
  $('[data-id=' + surveyId + '] .card-body form.take-survey').addClass('d-none')
  $('[data-id=' + surveyId + '] .card-body form.edit-survey').removeClass('d-none')
  $('[data-id=' + surveyId + '] .card-body .edit-survey-btn').addClass('d-none')
  $('[data-id=' + surveyId + '] .card-body .save-changes-btn').removeClass('d-none')
}

const addHandlers = () => {
  $('#create-survey').on('submit', onCreateSurvey)
  $('#get-surveys').on('click', onGetSurveys)
  $('#my-surveys').on('click', onGetMySurveys)
  $('.populate-surveys').on('click', '.delete-survey', onDeleteSurvey)
  $('.populate-surveys').on('click', '.edit-survey-btn', editSurvey)
  $('.populate-surveys').on('submit', '.edit-survey', onSaveSurvey)
}

module.exports = {
  addHandlers
}

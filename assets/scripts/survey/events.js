
'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')
const store = require('../store.js')

const onGetMySurveys = function (event) {
  event.preventDefault()
  api.getSurveys()
    .then(surveys => {
      // collects all the surveys and passes in a function that sorts for user surveys
      const surveryArray = surveys.surveys
      userSurveys(surveryArray)
    })
    .then()
    .catch(console.error)
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
  console.log(store.userSurveys)
}

const onCreateSurvey = function (event) {
  event.preventDefault()
  console.log('clicked!')
  const data = getFormFields(this)
  api.createSurvey(data)
    .then(ui.createSurveySuccess)
    // .then(() => onGetSurveys(event))
    .catch(ui.createSurveyFailure)
}

const onGetSurveys = function (event) {
  api.getSurveys()
    .then(ui.showAllSurveys)
    .catch(console.error)
}

const addHandlers = () => {
  $('#create-survey').on('submit', onCreateSurvey)
  $('#get-surveys').on('click', onGetSurveys)
  $('#my-surveys').on('click', onGetMySurveys)
}

module.exports = {
  addHandlers
}

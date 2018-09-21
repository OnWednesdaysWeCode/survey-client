const surveysPopulate = require('./surveys-listing.handlebars')

const removeFailStyle = function (className) {
  $(`.${className}-status`).removeClass('fail')
  $(`.${className}`).removeClass('border-danger')
}

const removeSuccessStyle = function (className) {
  $(`.${className}-status`).removeClass('success')
  $(`.${className}`).removeClass('border-success')
}

const addFailStyle = function (className) {
  $(`.${className}-status`).addClass('fail')
  $(`.${className}`).addClass('border-danger')
}

const addSuccessStyle = function (className) {
  $(`.${className}-status`).addClass('success')
  $(`.${className}`).addClass('border-success')
}

const showAllSurveys = function (data) {
  const getSurveysHtml = surveysPopulate({surveys: data.surveys})
  $('.populate-surveys').append(getSurveysHtml)
  // remove border color
  $('.create-survey').removeClass('border-success')
  $('.create-survey').removeClass('border-danger')
  // clear form input
  $('#create-survey input').val('')
  // clear survey message
  $('.create-survey-status').html('')
}

const showMySurveys = function (mySurveys) {
  const getSurveysHtml = surveysPopulate({surveys: mySurveys})
  $('.populate-surveys').append(getSurveysHtml)
  // remove border color
  $('.create-survey').removeClass('border-success')
  $('.create-survey').removeClass('border-danger')
  // clear form input
  $('#create-survey input').val('')
  // clear survey message
  $('.create-survey-status').html('')
}

const createSurveySuccess = function (event) {
  $('.create-survey-status').html('survey created!')
  $('#create-survey input').val('')
  removeFailStyle('create-survey')
  addSuccessStyle('create-survey')
  console.log('survey created')
}

const createSurveyFailure = function () {
  $('.create-survey-status').html('unable to create your survey')
  $('#create-survey input').val('')
  addFailStyle('create-survey')
  removeSuccessStyle('create-survey')
  console.log('survey not created')
}

module.exports = {
  showAllSurveys,
  createSurveySuccess,
  createSurveyFailure,
  showMySurveys
}

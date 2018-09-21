const store = require('./../store.js')
// const config = require('./../config.js')

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

const toggleSignUp = function () {
  $('.sign-in').hide()
  $('.sign-up').show()
  $('.sign-up-status').empty()
  removeFailStyle('sign-up')
  removeSuccessStyle('sign-up')
}

const toggleSignIn = function () {
  $('.sign-in').show()
  $('.sign-up').hide()
  removeFailStyle('sign-in')
  removeSuccessStyle('sign-in')
}

const signUpSuccess = function () {
  $('#sign-up input').val('')
  removeFailStyle('sign-up')
  addSuccessStyle('sign-up')
  $('.sign-up-status').text('You are now signed up! Log in to create or take surveys.')
}

const signUpFail = function () {
  $('#sign-up input').val('')
  $('.sign-up-status').text('We are having trouble signing you up right now. Try again later.')
  $('input').val('')
  removeSuccessStyle('sign-up')
  addFailStyle('sign-up')
}

const signInSuccess = function (response) {
  store.user = response.user
  $('#sign-in input').val('')
  $('.sign-in').hide()
  $('.sign-up').hide()
  $('.change-password').show()
  $('.create-survey').show()
  $('#get-surveys').show()
  $('#my-surveys').show()
  $('.general-errors').removeClass('d-none')
  $('.navbar-toggler').removeClass('d-none')
  $('.navbar-nav').removeClass('d-none')
  removeFailStyle('sign-in')
  $('.navbar').removeClass('d-none')
  $('img').addClass('d-none')
  $('body').addClass('background')
}

const signInFail = function () {
  $('#sign-in input').val('')
  addFailStyle('sign-in')
  $('.sign-in-status').text("We couldn't find you in our database! Make sure you enter the right username and password.")
  $('input').val('')
}

const changePasswordSuccess = function () {
  $('#change-password input').val('')
  $('.change-password-status').text('Your password has been changed!')
  removeFailStyle('change-password')
  addSuccessStyle('change-password')
  $('.change-password').delay(500).hide('slow')
}

const changePasswordFail = function () {
  $('#change-password input').val('')
  $('.change-password-status').text('Try re-entering your credentials.')
  removeSuccessStyle('change-password')
  addFailStyle('change-password')
}

const logOutSuccess = function () {
  store.user = null
  $('.sign-in').show()
  $('.change-password').hide()
  $('.change-password').addClass('d-none')
  $('.create-survey').hide()
  $('#get-surveys').hide()
  $('#my-surveys').hide()
  $('.navbar-toggler').addClass('d-none')
  $('.navbar-nav').addClass('d-none')
  $('#populate-surveys').empty()
  removeSuccessStyle('sign-up')
  removeSuccessStyle('sign-in')
  removeSuccessStyle('change-password')
  removeFailStyle('sign-up')
  removeFailStyle('sign-in')
  removeFailStyle('change-password')
  $('.change-password-status').text('')
  $('.sign-in-status').text('')
  $('.sign-up-status').text('')
  $('#create-survey input').val('')
  $('#change-password input').val('')
  $('.navbar').addClass('d-none')
  $('.general-errors').addClass('d-none')
  $('img').removeClass('d-none')
  $('body').removeClass('background')
}

const logOutFail = function () {
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  logOutSuccess,
  signInFail,
  signUpFail,
  logOutFail,
  changePasswordFail,
  toggleSignIn,
  toggleSignUp,
  removeFailStyle,
  removeSuccessStyle
}

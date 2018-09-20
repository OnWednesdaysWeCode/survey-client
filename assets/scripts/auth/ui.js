const store = require('./../store.js')
const config = require('./../config.js')

const signUpSuccess = function () {
  console.log('signed up')
  $('#sign-up input').val('')
}

const signUpFail = function () {
  console.log('not signed up')
  $('#sign-up input').val('')
  $('.sign-up-status').text('We are having trouble signing you up right now. Try again later.')
  $('input').val('')
  $('.sign-up-status').addClass('fail')
  $('.sign-up').addClass('border-danger')
}

const signInSuccess = function (response) {
  store.user = response.user
  console.log(store.user.email + 'signed in')
  $('#sign-in input').val('')
  $('.sign-in').hide()
  $('.sign-up').hide()
  $('.change-password').show()
  $('.create-survey').show()
  $('#get-surveys').show()
  $('#sign-out').show()
}

const signInFail = function () {
  console.log('not signed in')
  $('#sign-in input').val('')
}

const changePasswordSuccess = function () {
  console.log('password changed')
  $('#change-password input').val('')
}

const changePasswordFail = function () {
  console.log('password not changed')
  $('#change-password input').val('')
}

const logOutSuccess = function () {
  store.user = null
  $('.sign-in').show()
  $('.sign-up').show()
  $('.change-password').hide()
  $('.create-survey').hide()
  $('#get-surveys').hide()
  $('#sign-out').hide()
  $('#populate-surveys').empty()
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
  changePasswordFail
}

'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')

// function to sign up
const signUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFail)
}

// function to sign in
const signIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFail)
}

// function to log out
const signOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.logOutSuccess)
    .catch(ui.logOutFail)
    // .then(ui.signOutSuccess)
    // .catch(ui.signOutFail)
}

// function to change password
const changePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFail)
}

// function to show change password section
const showChangePassword = function (event) {
  event.preventDefault()
  $('.change-password-status').text('')
  ui.removeSuccessStyle('change-password')
  ui.removeFailStyle('change-password')
  $('.change-password').removeClass('d-none')
  $('.change-password').show()
}

const addHandlers = () => {
  $('#sign-up').on('submit', signUp)
  $('#sign-in').on('submit', signIn)
  $('.sign-out').on('click', signOut)
  $('.change-password-link').on('click', showChangePassword)
  $('#change-password').on('submit', changePassword)
  $('.sign-up-btn').on('click', ui.toggleSignUp)
  $('.sign-in-btn').on('click', ui.toggleSignIn)
}

module.exports = {
  addHandlers
}

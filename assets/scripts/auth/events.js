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
    .then(console.log)
    .catch(console.error)
    // .then(ui.signOutSuccess)
    // .catch(ui.signOutFail)
}

// function to change password
const changePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(console.log('password changed'))
    .catch(console.error)
    // .then(ui.changePasswordSuccess)
    // .catch(ui.changePasswordFail)
}

const addHandlers = () => {
  $('#sign-up').on('submit', signUp)
  $('#sign-in').on('submit', signIn)
  $('#sign-out').on('click', signOut)
  $('#change-password').on('submit', changePassword)
}

module.exports = {
  addHandlers
}

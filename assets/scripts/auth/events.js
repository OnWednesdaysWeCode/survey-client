'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')

// function to sign up
const signUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(console.log)
    .catch(console.error)
    // .then(ui.signUpSuccess)
    // .catch(ui.signUpFail)
}

// function to sign in
const signIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(console.log)
    .catch(console.error)
    // .then(ui.signInSuccess)
    // .catch(ui.signInFail)
}

// function to log out
const signOut = function () {
  api.signOut(data)
    .then(console.log)
    .catch(console.error)
    // .then(ui.signOutSuccess)
    // .catch(ui.signOutFail)
}

// function to change password
const changePassword = function () {
  api.changePassword(data)
    .then(console.log)
    .catch(console.error)
    // .then(ui.changePasswordSuccess)
    // .catch(ui.changePasswordFail)
}

const addHandlers = () => {
  $('#sign-up').on('submit', signUp)
  $('#sign-in').on('submit', signIn)
  $('').on('click', signOut)
  $('').on('click', changePassword)
}

module.exports = {
  addHandlers
}

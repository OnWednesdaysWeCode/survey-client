'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')

// function to sign up
const signUp = function () {

}

// function to sign in
const signIn = function () {

}

// function to log out
const signOut = function () {

}


const addHandlers = () => {
  $('').on('click', signUp)
  $('').on('click', signIn)
  $('').on('click', signOut)
}

module.exports = {
  addHandlers
}

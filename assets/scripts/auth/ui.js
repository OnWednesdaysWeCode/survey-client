const store = require('./../store.js')
const config = require('./../config.js')

const signUpSuccess = function () {
  console.log('signed up')
  $('#sign-up input').val('')
}

const signUpFail = function (response) {
  console.log('not signed up')
  $('#sign-up input').val('')
}

const signInSuccess = function (response) {
  store.user = response.user
  console.log(store.user.email + 'signed in')
  $('#sign-in input').val('')
}

const signInFail = function () {
  console.log('not signed in')
  $('#sign-in input').val('')
}

const changePasswordSuccess = function () {

}

const changePasswordFail = function () {
}

const logOutSuccess = function () {
  store.user = null
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

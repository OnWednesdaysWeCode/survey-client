const store = require('./../store.js')
const config = require('./../config.js')

const signUpSuccess = function () {
}

const signUpFail = function (response) {

}

const signInSuccess = function (response) {
  store.user = response.user
}

const signInFail = function () {
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

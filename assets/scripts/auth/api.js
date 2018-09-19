const config = require('../config.js')
const store = require('../store.js')

const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl,
    method: 'POST',
    data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl,
    method: 'POST',
    data
  })
}

const signOut = function (data) {
  return $.ajax({
    url: config.apiUrl,
    method: 'DELETE',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    data
  })
}

const changePassword = function (data) {
  return $.ajax({
    url: config.apiUrl,
    method: 'PATCH',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword
}

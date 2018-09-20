'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
// const ui = require('./ui')
const store = require('../store.js')

const onGetResponses = function (event) {
  api.getResponses()
    .then(console.log)
    .catch(console.error)
}

const onCreateResponse = function (event) {
  api.createResponse(data)
    .then(console.log)
    .catch(console.error)
}

const addHandlers = () => {
  // put handlers here
}

module.exports = {
  addHandlers
}

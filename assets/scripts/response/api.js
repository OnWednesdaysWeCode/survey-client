'use strict'

const config = require('../config.js')
const store = require('../store.js')

// POST create response
const createResponse = (answer, surveyId) => {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/responses',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    data: {
      response: {
        answer: answer,
        survey: surveyId
      }
    }
  })
}

const showSurvey = (id) => {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + `/surveys/${id}`,
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

// GET index response
// const getResponses = () => {
//   return $.ajax({
//     method: 'GET',
//     url: config.apiUrl + '/responses',
//     headers: {
//       'Authorization': 'Token token=' + store.user.token
//     }
//   })
// }

module.exports = {
  createResponse,
  showSurvey
}

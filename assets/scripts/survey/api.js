'use strict'

const config = require('../config.js')
const store = require('../store.js')

const createSurvey = (data) => {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/surveys',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    data
  })
}

const updateSurvey = (id, data) => {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + `/surveys/${id}`,
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    data
  })
}

const getSurveys = () => {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/surveys',
    headers: {
      'Authorization': 'Token token=' + store.user.token
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

const destroySurvey = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + `/surveys/${id}`,
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createSurvey,
  updateSurvey,
  getSurveys,
  showSurvey,
  destroySurvey
}

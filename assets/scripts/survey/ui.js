const surveysPopulate = require('./surveys-listing.handlebars')

const showAllSurveys = function (data) {
  console.log(data)
  const getSurveysHtml = surveysPopulate({surveys: data.surveys})
  $('.populate-surveys').append(getSurveysHtml)
}

module.exports = {
  showAllSurveys
}

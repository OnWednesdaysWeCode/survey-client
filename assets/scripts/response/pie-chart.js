const pieChart = function (option1, option2, count1, count2, surveyId) {

  // set the data
  const data = [
    {x: option1, value: count1},
    {x: option2, value: count2}
  ]

  // create the chart
  const chart = anychart.pie()

  // set the chart title
  chart.title('Survey results')

  // add the data
  chart.data(data)

  // display the chart in the container
  chart.container(surveyId)
  chart.draw()
}

module.exports = {
  pieChart
}

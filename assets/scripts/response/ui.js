

const removeFailStyle = function (className) {
  $(`.${className}-status`).removeClass('fail')
  $(`.${className}`).removeClass('border-danger')
}

const removeSuccessStyle = function (className) {
  $(`.${className}-status`).removeClass('success')
  $(`.${className}`).removeClass('border-success')
}

const addFailStyle = function (className) {
  $(`.${className}-status`).addClass('fail')
  $(`.${className}`).addClass('border-danger')
}

const addSuccessStyle = function (className) {
  $(`.${className}-status`).addClass('success')
  $(`.${className}`).addClass('border-success')
}

module.exports = {
  removeFailStyle,
  removeSuccessStyle,
  addFailStyle,
  addSuccessStyle
}

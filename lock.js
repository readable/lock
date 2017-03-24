window.Rd = window.Rd || {}

window.Rd.lock = function (asyncFunction) {
  var ready = true

  return function (callback) {
    if (ready) {
      ready = false
      asyncFunction(function () {
        callback()
        ready = true
      })
    }
  }
}

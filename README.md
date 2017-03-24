[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# Lock

Tool to create a trailing edge throttle out of any deferring function.

Places a lock on a function preventing its simultaneous execution.
While another execution is due, all other requests to run will be ignored.

``` js
var throttle = Rd.lock(function (callback) {
  setTimeout(callback, 16)
})

window.addEventListener('resize', function () {
  throttle(function () {
    // Update DOM no more than every 16ms (~ 60fps)
  })
})

```

``` js
var throttledRAF = Rd.lock(requestAnimationFrame)

window.addEventListener('resize', function () {
  throttledRAF(function () {
    // Update DOM before repaint
  })
})
```

---
---
// Google Analytics
window.dataLayer = window.dataLayer || []
const gtag = function () {
  window.dataLayer.push(arguments)
}
gtag('js', new Date())
gtag('config', 'UA-118450969-1')

// Smooth navigation
window.onload = () => {
  setTimeout(() => {
    $('body').addClass('ok')
  }, 1000)
}

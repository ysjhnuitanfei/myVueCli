;
(function (win, document) {
  var documentEl = document.documentElement
  var maxwidth = 540
  var dpr = devicePixelRatio == 4 ? 1 : devicePixelRatio
  var scale = 1 / dpr
  var tid = null
  documentEl.dataset.dpr = dpr

  var metaEl = document.createElement('meta')
  metaEl.name = 'viewport'
  metaEl.content = 'width=device-width,initial-scale=' + scale + ',maximum-scale=' + scale + ',minimum-scale=' + scale

  documentEl.firstElementChild.appendChild(metaEl)
  var designScale = (documentEl.dataset.width || 1080) / 100

  var rootFontSize = parseFloat(getComputedStyle(documentEl).fontSize)
  var refreshRem = function () {
    var width = documentEl.clientWidth
    if (width / dpr > maxwidth) {
      width = maxwidth * 1
      console.log(width, designScale, rootFontSize)
    }
    // documentEl.style.fontSize = width / designScale + 'px'
    documentEl.style.fontSize = width / designScale / rootFontSize * 100 + '%'
  }

  refreshRem()

  win.addEventListener('resize', function () {
    clearTimeout(tid)
    tid = setTimeout(refreshRem, 300)
  }, false)

  win.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      clearTimeout(tid)
      tid = setTimeout(refreshRem, 300)
    }
  }, false)

  win.addEventListener('DOMContentLoaded', function (e) {
    var body = document.getElementsByTagName('body')[0]
    body.style.maxWidth = designScale + 'rem'
    body.style.margin = '0 auto'
    documentEl.style.fontSize = width / designScale / rootFontSize * 100 + '%'
  }, false)
})(window, document)

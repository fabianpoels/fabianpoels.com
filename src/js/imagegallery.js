$('#gallery').justifiedGallery({
  rowHeight: 270,
  lastRow: 'nojustify',
  waitThumbnailsLoad: false,
  margins: 20,
  captions: false
}).on('jg.complete', function () {
  $('[data-fancybox]').fancybox({
    loop: true,
    idleTime: 2,
    margin: [20, 0],
    buttons: ['fullScreen', 'close'],
    // animationEffect: false,
    // transitionEffect: false,
    backFocus: false,
    protect: true
  })
})

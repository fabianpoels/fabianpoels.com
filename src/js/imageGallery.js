$("#gallery").justifiedGallery({
  rowHeight : 350,
  lastRow : 'nojustify',
  waitThumbnailsLoad : false,
  margins : 10,
  captions: false,
}).on('jg.complete', function() {
  $("[data-fancybox]").fancybox({
    loop: false,
    idleTime : 2,
    margin : [20, 0],
    buttons : ['fullScreen', 'close'],
    animationEffect : false,
    transitionEffect : false,
    backFocus : false,
  });
});

$('#gallery').justifiedGallery({
  rowHeight: 270,
  lastRow: 'nojustify',
  waitThumbnailsLoad: false,
  margins: 20,
  captions: false
})

Fancybox.bind('[data-fancybox="gallery"]', {
  Thumbs: false,
  Toolbar: {
    display: {
      left: [],
      middle: [],
      right: ["fullscreen", "close"],
    },
  }
})
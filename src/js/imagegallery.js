$('#gallery').justifiedGallery({
  rowHeight: 270,
  lastRow: 'nojustify',
  waitThumbnailsLoad: false,
  margins: 20,
  captions: false,
})

Fancybox.bind('[data-fancybox="gallery"]', {
  Thumbs: false,
  Toolbar: {
    display: {
      left: [],
      middle: [],
      right: ['fullscreen', 'close'],
    },
  },
  on: {
    'Carousel.ready Carousel.settle': (fancybox) => {
      const slide = fancybox.getSlide()
      if (slide && slide.src) {
        gtag('event', 'view_image', {
          'image_name': slide.src
        });
      }
    },
  },
})

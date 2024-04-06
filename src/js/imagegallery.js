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
        const name = slide.src.split('fabianpoels_')[1].split('.jpg')[0]
        gtag('event', `view_image_${name}`, {
          'image_name': name
        });
      }
    },
  },
})

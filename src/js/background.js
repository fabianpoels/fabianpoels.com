var landscapeImages = [
  'fabianpoels_latelier_flo.jpg',
  'fabianpoels_yves_freyr_manhattantransfer.jpg',
  'fabianpoels_landscape_04.jpg',
  'fabianpoels_landscape_03.jpg',
]
var portraitImages = [
  'fabianpoels_ciastlins.jpg',
  'fabianpoels_ailefroide_boulder.jpg',
  'fabianpoels_matthiasschiestl_stohlwond_bockhaus.jpg',
  'fabianpoels_portrait_10.jpg',
]
var mq = window.matchMedia('(max-width: 1080px)')
setBackground(mq)
mq.addListener(setBackground)

function setBackground(mq) {
  if (mq.matches) {
    $('body').css({
      background:
        'url(images/covers/' +
        portraitImages[
          Math.floor(Math.random() * Math.floor(portraitImages.length))
        ] +
        ') no-repeat center center fixed',
      '-webkit-background-size': 'cover',
      '-moz-background-size': 'cover',
      '-o-background-size': 'cover',
      'background-size': 'cover',
    })
  } else {
    $('body').css({
      background:
        'url(images/covers/' +
        landscapeImages[
          Math.floor(Math.random() * Math.floor(landscapeImages.length))
        ] +
        ') no-repeat center center fixed',
      '-webkit-background-size': 'cover',
      '-moz-background-size': 'cover',
      '-o-background-size': 'cover',
      'background-size': 'cover',
    })
  }
}

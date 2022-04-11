var landscapeImages = ['fabianpoels_cover_image_mountain.jpg']
var portraitImages = []
setBackground()

function setBackground() {
  $('body').css({
    background:
      'url(images/covers/fabianpoels_cover_image_mountain.jpg) no-repeat center center fixed',
      '-webkit-background-size': 'cover',
      '-moz-background-size': 'cover',
      '-o-background-size': 'cover',
      'background-size': 'cover',
  })
}

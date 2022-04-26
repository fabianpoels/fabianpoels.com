var landscapeImages = ['fabianpoels_cover_image_mountain_hq.jpg', 'fabianpoels_cover_image_mountain_hq_3.jpg']
var portraitImages = []
setBackground()

function setBackground() {
  const image_url = landscapeImages[Math.floor(Math.random() * Math.floor(landscapeImages.length))]
  $('body').css({
    background:
      `url(images/covers/${image_url}) no-repeat center center fixed`,
      '-webkit-background-size': 'cover',
      '-moz-background-size': 'cover',
      '-o-background-size': 'cover',
      'background-size': 'cover',
  })
}

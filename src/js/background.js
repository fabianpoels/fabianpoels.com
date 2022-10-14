var landscapeImages = [
  'fabianpoels_cover_image_mountain_hq_1.jpg',
  'fabianpoels_cover_image_mountain_hq_2.jpg',
  'fabianpoels_cover_image_mountain_hq_3.jpg',
  'fabianpoels_cover_image_mountain_hq_4.jpg',
  'fabianpoels_cover_image_mountain_hq_5.jpg',
]
var portraitImages = []
setRandomBackground()

function setRandomBackground() {
  setBackground(Math.floor(Math.random() * Math.floor(landscapeImages.length)))
}

function setBackground(index) {
  const image_url = landscapeImages[index]
  $('body').css({
    background: `url(images/covers/${image_url}) no-repeat center center fixed`,
    '-webkit-background-size': 'cover',
    '-moz-background-size': 'cover',
    '-o-background-size': 'cover',
    'background-size': 'cover',
  })

  $('div.image-button').removeClass('selected')
  $(`div#image-${index}`).addClass('selected')
}

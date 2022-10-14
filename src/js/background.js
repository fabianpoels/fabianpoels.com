const landscapeImages = [
  'fabianpoels_cover_image_mountain_hq_1.jpg',
  'fabianpoels_cover_image_mountain_hq_2.jpg',
  'fabianpoels_cover_image_mountain_hq_3.jpg',
  'fabianpoels_cover_image_mountain_hq_4.jpg',
  'fabianpoels_cover_image_mountain_hq_5.jpg',
]
const portraitImages = []
let current_index
setRandomBackground()

document.addEventListener('keyup', (e) => {
  if (e.code === 'ArrowLeft' && current_index > 0) {
    current_index--
  }
  if (e.code === 'ArrowRight' && current_index < landscapeImages.length - 1) {
    current_index++
  }
  setBackground()
})

function setRandomBackground() {
  current_index = Math.floor(Math.random() * Math.floor(landscapeImages.length))
  setBackground()
}

function setBackground() {
  const image_url = landscapeImages[current_index]
  $('body').css({
    background: `url(images/covers/${image_url}) no-repeat center center fixed`,
    '-webkit-background-size': 'cover',
    '-moz-background-size': 'cover',
    '-o-background-size': 'cover',
    'background-size': 'cover',
  })

  $('div.image-button').removeClass('selected')
  $(`div#image-${current_index}`).addClass('selected')
}

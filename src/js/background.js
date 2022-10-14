const landscapeImages = [
  'fabianpoels_cover_image_mountain_hq_1.jpg',
  'fabianpoels_cover_image_mountain_hq_2.jpg',
  'fabianpoels_cover_image_mountain_hq_3.jpg',
  'fabianpoels_cover_image_mountain_hq_4.jpg',
  'fabianpoels_cover_image_mountain_hq_5.jpg',
]
const portraitImages = []
let current_index
// setRandomBackground()
setBackground(0)

document.addEventListener('keyup', (e) => {
  if (e.code === 'ArrowLeft' && current_index > 0) {
    setBackground(current_index - 1)
  }
  if (e.code === 'ArrowRight' && current_index < landscapeImages.length - 1) {
    setBackground(current_index + 1)
  }
})

function setRandomBackground() {
  setBackground(Math.floor(Math.random() * Math.floor(landscapeImages.length)))
}

function setBackground(index) {
  current_index = index
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

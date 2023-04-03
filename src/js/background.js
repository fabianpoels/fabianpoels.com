const images_count = 6
let current_index

setBackground(0)

document.addEventListener('keyup', (e) => {
  if (e.code === 'ArrowLeft' && current_index > 0) {
    setBackground(current_index - 1)
  }
  if (e.code === 'ArrowRight' && current_index < images_count - 1) {
    setBackground(current_index + 1)
  }
})

function setRandomBackground() {
  setBackground(Math.floor(Math.random() * Math.floor(images_count)))
}

function setBackground(index) {
  current_index = index

  $(`div.background`).removeClass('selected-background')
  $(`div#background-${index}`).addClass('selected-background')

  $('div.image-button').removeClass('selected')
  $(`div#image-${index}`).addClass('selected')
}

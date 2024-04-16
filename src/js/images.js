let images = [
  { name: 'fabianpoels_climbing_finale_lubna', description: 'Lubna, Grotta dell\'Edera, Finale (ITALY)', width: 360, heigth: 540 },
  { name: 'fabianpoels_landscape_langkofel', description: 'Langkofel, Dolomites (ITALY)', width: 809, heigth: 540 },
  { name: 'fabianpoels_landscape_airplane', description: 'Airplane', width: 360, heigth: 540 },
  { name: 'fabianpoels_landscape_val_badia', description: 'Val Badia, Dolomites (ITALY)', width: 809, heigth: 540 },
  { name: 'fabianpoels_climbing_cikola', description: 'Nina Landekar on \'Grenguar\', Čikola (CROATIA)', width: 809, heigth: 540 },
  { name: 'fabianpoels_landscape_krka', description: 'Krka national park (CROATIA)', width: 809, heigth: 540 },
  { name: 'fabianpoels_landscape_frost', description: 'Frost', width: 361, heigth: 540 },
  { name: 'fabianpoels_landscape_lagodigarda', description: 'Sunset on Lago di Garda (ITALY)', width: 361, heigth: 540 },
  { name: 'fabianpoels_landscape_autumntrees', description: 'Autumn trees', width: 809, heigth: 540 },
  { name: 'fabianpoels_portrait_italianguy', description: 'Italian guy', width: 809, heigth: 540 },
  { name: 'fabianpoels_climbing_finale_roccadicorno', description: 'Rombo di Vento, Rocca di Corno, Finale (ITALY)', width: 361, heigth: 540 },
  { name: 'fabianpoels_landscape_lightning', description: 'Lightning', width: 808, heigth: 540 },
  { name: 'fabianpoels_climbing_lumignano_boomerang', description: 'Cody Roth on Boomerang, Lumignano (ITALY)', width: 361, heigth: 540 },
  { name: 'fabianpoels_portrait_lithuanian_girl', description: 'Lithuanian girl', width: 361, heigth: 540 },
  { name: 'fabianpoels_landscape_rain', description: 'Rain', width: 808, heigth: 540 },
  { name: 'fabianpoels_climbing_menhir', description: 'Thomas Prenn on Menhir, Passo Gardena, Dolomites (ITALY)', width: 361, heigth: 540 },
  { name: 'fabianpoels_portrait_italianbride', description: 'Italian bride', width: 361, heigth: 540 },
]

let currentIndex = images.length

while (currentIndex != 0) {
  let randomIndex = Math.floor(Math.random() * currentIndex)
  currentIndex--
  [images[currentIndex], images[randomIndex]] = [images[randomIndex], images[currentIndex]]
}

article = document.getElementById('gallery')
images.forEach(image => {
  // create a element
  a_el = document.createElement('a')
  a_el.setAttribute('href', '#')
  a_el.setAttribute('data-src', `images/${image.name}.jpg`)
  a_el.setAttribute('data-fancybox', 'gallery')
  a_el.setAttribute('data-caption', image.description)

  // create img element
  img_el = document.createElement('img')
  img_el.setAttribute('src', `images/${image.name}_thumb.jpg`)
  img_el.setAttribute('alt', image.description)
  img_el.setAttribute('width', image.width)
  img_el.setAttribute('height', image.height)
  img_el.setAttribute('class', 'thumbnail')

  a_el.appendChild(img_el)
  article.appendChild(a_el)
})

article.style.display = 'block'
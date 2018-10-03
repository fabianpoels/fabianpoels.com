let express = require('express')
let app = express()

app.use(express.static('production'))

let server = app.listen (8080, () => {
  console.log('FABIANPOELS.COM running at localhost:' + server.address().port)
})

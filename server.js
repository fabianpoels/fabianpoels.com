let express = require('express')
let app = express()

app.use(express.static('production'))

let server = app.listen (8081, () => {
  console.log('FABIANPOELS.COM running at localhost:' + server.address().port)
})

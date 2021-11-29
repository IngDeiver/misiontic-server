const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const libroApi = require('./api/libro.routes')
const cors = require('cors')
const morgan = require('morgan')
require('./conecction')

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use('/api', libroApi)

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
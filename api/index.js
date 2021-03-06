const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const routes = require('./routes')
const cors = require('cors')

const app = express()

mongoose.connect(
  'mongodb+srv://omnistack:omnistack@cluster0-8fqsw.mongodb.net/Barca?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)

app.use(express.json())
app.use(morgan('dev'))
app.use(cors())
app.use(routes)

app.listen(3001)

require('dotenv').config()
const mongoose = require('mongoose')

const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

const cors = require('cors')

const routers = require('./routes/index')

const app = express()

app.use(
  cors({
    origin: '*',
  })
)

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to Mongo!')
  })
  .catch((err) => {
    console.error('Error connecting to Mongo', err)
  })

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/product', routers.productsRouter)
app.use('/image', routers.imagesRouter)

module.exports = app

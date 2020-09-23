const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const logger = require('./utils/logger')
const config = require('./utils/config')

const blogsRouter = require('./controllers/blogs')
app.use('/api/blogs', blogsRouter)

mongoose.connect(config.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true})

app.use(cors())
app.use(express.json())


module.exports = app
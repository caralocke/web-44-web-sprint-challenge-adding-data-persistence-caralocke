const express = require('express')
const helmet = require('helmet')
const server = express()
const resourceRouter = require('./resource/router')

server.use(helmet())
server.use(express.json())

server.use('/api/resources', resourceRouter)




  
  module.exports = server;
const express = require('express')
const helmet = require('helmet')
const server = express()
const resourceRouter = require('./resource/router')
const projectRouter = require('./project/router')

server.use(helmet())
server.use(express.json())

server.use('/api/resources', resourceRouter)
server.use('/api/projects', projectRouter)




  
  module.exports = server;
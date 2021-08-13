const express = require('express')
const Projects = require('./model')
const router = express.Router()

router.get('/', (req, res, next) => {
     Projects.findAll()
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(next)
})

module.exports = router
const express = require('express')
const Projects = require('./model')
const router = express.Router()

router.get('/', async (req, res, next) => {
    await Projects.getProjects()
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(next)
})

module.exports = router
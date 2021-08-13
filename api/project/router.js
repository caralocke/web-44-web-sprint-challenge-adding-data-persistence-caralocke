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

router.post('/', (req, res, next) => {
    const newProject = req.body
    Projects.add(newProject)
        .then((project_id) => {
            Projects.findById(project_id)
                .then(project => {
                    res.status(201).json(project)
                })
                .catch(next)
        })
        .catch(next)
})

module.exports = router
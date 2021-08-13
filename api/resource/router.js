const express = require('express')
const router = express.Router()
const Resources = require('./model')
const { validateResource } = require('./middleware')

router.get('/', (req, res, next) => {
    Resources.findAll()
        .then(resources => {
            res.status(200).json(resources)
        })
        .catch(next)
})

router.post('/', validateResource, (req, res, next) => {
    const newResource = req.body
    Resources.add(newResource)
        .then((resource_id) => {
            Resources.findById(resource_id)
                .then(resource => {
                    res.status(201).json(resource)
                })
                .catch(next)
        })
        .catch(next)
})

module.exports = router;
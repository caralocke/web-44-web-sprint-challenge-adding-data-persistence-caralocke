const express = require('express')
const router = express.Router()
const Resources = require('./model')

router.get('/', (req, res, next) => {
    Resources.findAll()
        .then(resources => {
            res.status(200).json(resources)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
    const resource = req.body
    Resources.add(resource)
        .then((resp) => {
            Resources.findById(resp)
                .then(resource => {
                    res.status(201).json(resource)
                })
                .catch(next)
        })
        .catch(next)
})

module.exports = router;
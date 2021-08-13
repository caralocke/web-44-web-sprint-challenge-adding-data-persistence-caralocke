const express = require('express')
const Tasks = require('./model')
const router = express.Router()
  

router.get('/', (req, res, next) => {
     Tasks.findAll()
        .then(tasks => {
            res.status(200).json(tasks)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
    const newTask = req.body
    Tasks.add(newTask)
        .then((task_id) => {
            Tasks.findById(task_id)
                .then(task => {
                    res.status(201).json(task)
                })
                .catch(next)
        })
        .catch(next)
})

module.exports = router

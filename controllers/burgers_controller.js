const router = require('express').Router()
const burger = require('../models/burger.js')

// get
router.get('/burgers', (req, res) => {
  burger.selectAll(burgers => {
    res.json(burgers)
  })
})

// create
router.post('/burgers', (req, res) => {
  burger.insertOne(req.body, id => {
    res.json({id})
  })
})

// update
router.put('/burgers/:id', (req, res) => {
  burger.updateOne(req.body, {id: req.params.id}, () => {
    res.sendStatus(200)
  })
})

module.exports = router

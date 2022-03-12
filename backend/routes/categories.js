const express = require('express')
const router = express.Router()

const Category = require('../models/Category')

router.get('/', function (req, res) {
  Category.find()
    .then((categories) => res.json(categories))
    .catch((error) => console.error(error))
})

router.get('/:id', function (req, res) {
  Category.findById(req.params.id)
    .then((category) => res.json(category))
    .catch((error) => console.error(error))
})

router.post('/', function (req, res) {
  const newCategory = new Category({
    name: req.body.name,
  })

  newCategory
    .save()
    .then((newCategory) =>
      res.json({
        message: 'New category created.',
        newCategory: newCategory,
      })
    )
    .catch((error) => console.error(error))
})

router.put('/:id', function (req, res) {
  Category.findByIdAndUpdate(id, req.body)
    .then((response) => res.json(response))
    .catch((error) => console.error(error))
})

router.delete('/:id', function (req, res) {
  Category.findByIdAndDelete(req.params.id)
    .then((response) => res.json(response))
    .catch((error) => console.error(error))
})

module.exports = router

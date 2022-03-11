const express = require('express')
const router = express.Router()

const Product = require('../models/Product')

router.get('/', function (req, res) {
  Product.find()
    .then((products) => res.json(products))
    .catch((err) => console.error(err))
})

router.get('/:id', function (req, res) {
  Product.findById(req.params.id)
    .then((product) => res.json(product))
    .catch((err) => console.error(err))
})

router.post('/', function (req, res) {
  const newProduct = new Product({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    category: req.body.category,
    image: req.body.image,
  })

  newProduct
    .save()
    .then((newProduct) =>
      res.json({
        message: 'New product created.',
        newReport: newProduct,
      })
    )
    .catch((err) => console.error(err))
})

router.put('/:id', function (req, res) {
  Product.findByIdAndUpdate(req.params.id, req.body)
    .then((response) => res.json(response))
    .catch((err) => console.error(err))
})

router.delete('/:id', function (req, res) {
  Product.findByIdAndDelete(req.params.id)
    .then((response) => res.json(response))
    .catch((err) => console.error(err))
})

module.exports = router

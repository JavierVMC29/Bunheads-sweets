const express = require('express')
const router = express.Router()

const Product = require('../models/Product')

router.get('/', function (req, res) {
  Product.find()
    .populate('category')
    .then((products) => res.json(products))
    .catch((error) => console.error(error))
})

router.get('/:id', function (req, res) {
  Product.findById(req.params.id)
    .populate('category')
    .then((product) => res.json(product))
    .catch((error) => console.error(error))
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
    .catch((error) => console.error(error))
})

router.put('/:id', function (req, res) {
  Product.findByIdAndUpdate(req.params.id, req.body)
    .then((response) => res.json(response))
    .catch((error) => console.error(error))
})

router.delete('/:id', function (req, res) {
  Product.findByIdAndDelete(req.params.id)
    .then((response) => res.json(response))
    .catch((error) => console.error(error))
})

module.exports = router

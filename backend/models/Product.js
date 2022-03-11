const { Schema, model } = require('mongoose')

const Product = new Schema({
  name: {
    type: String,
    required: [true, 'You must provide a name'],
    unique: true,
  },
  price: {
    type: Number,
    required: [true, 'You must provide a price'],
  },
  description: {
    type: String,
    required: [true, 'You must provide a description'],
  },
  category: {
    type: String,
    required: [true, 'You must provide a category'],
  },
  image: {
    type: String,
    required: [true, 'You must provide a image'],
  },
})
module.exports = model('Product', Product)

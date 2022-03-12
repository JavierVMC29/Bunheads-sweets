const { Schema, model } = require('mongoose')

const Category = new Schema({
  name: {
    type: String,
    required: [true, 'You must provide a name'],
    unique: true,
  },
})
module.exports = model('Category', Category)

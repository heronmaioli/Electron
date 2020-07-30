const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  BARCODE: String,
  NAME: String,
  QUANTITY: Number,
  DESCRIPTION: String,
  TYPE: String,
  DATE: Date
})

module.exports = mongoose.model('Product', productSchema)

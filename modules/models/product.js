const { Schema, model } = require('mongoose');

const productSchema = new Schema({
  name: String,
  rate_per_acer: Number,
  multiplier: Number, // Unit (eg dry oz = 16, fl oz = 128, lbs = 16)
  bill_unit: String,
  price_per: Number,
})

const Product = model('product', productSchema)

module.exports = Product

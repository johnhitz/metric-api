const { Schema, model } = require('mongoose');

const productSchema = new Schema({
  name: String,
  // rate_per_acre: Number,
  /*//////////////////////////////////////////////
  Multiplier is the nuber used to convert units per acre
  to billing units
  Eg. If the product is used at 3 oz per acre and sold by the
  pound then the (3 / 16) * cost/lbs so the multiplier is 1/16 or 0.00625
  //////////////////////////////////////////////*/
  // multiplier: Number, // Unit (eg dry oz = 16, fl oz = 128, lbs = 16)
  bill_unit: String,
  price_per_acre: Number
})

const Product = model('product', productSchema)

module.exports = Product

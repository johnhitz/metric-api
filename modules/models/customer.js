const { Schema, model } = require('mongoose')

const customerSchema = new Schema({
  name: String,
  contact: String,
  cell_phone: String,
  home_phone: String,
  alt_phone: String,
  email: String,
})

  const Customer = model('customer', customerSchema)

module.exports = Customer

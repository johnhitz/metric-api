const { Schema, model } = require('mongoose')

const customerSchema = new Schema({
  name: String,
  contact: String,
  location: String,
})

  const Customer = model('customer', customerSchema)

module.exports = Customer

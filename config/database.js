const mongoose = require('mongoose')

require('dotenv').config({ path: '.env' })

mongoose
  .connect(`${process.env.MONGO_URI}`, {useNewUrlParser: true})
  // .then(() => {console.log("DB connected")})
  // .catch((err) => {console.error(err)})

  mongoose.connection.once('open', () => console.log('Connected to a MongoDB instance'));
  mongoose.connection.on('error', error => console.error(error));

  module.exports = mongoose

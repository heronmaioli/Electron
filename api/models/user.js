const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  Usuario: String,
  Senha: String
})

module.exports = mongoose.model('User', userSchema)

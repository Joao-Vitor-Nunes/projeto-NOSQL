const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
  idUsuario: Number,
  nome: String,
  senha: String,
  tipo: String,
  email: String,
  endereco: String
});

module.exports = mongoose.model('Usuario', UsuarioSchema);

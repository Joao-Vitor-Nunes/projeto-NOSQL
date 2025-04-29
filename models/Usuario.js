const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  nome: { type: String, required: true, maxlength: 45 },
  senha: { type: String, required: true, maxlength: 20 },
  tipo: { type: String, required: true, maxlength: 20 },
  email: { type: String, required: true, maxlength: 255 },
  endereco: { type: String, required: true, maxlength: 45 }
});

module.exports = mongoose.model('Usuario', usuarioSchema);

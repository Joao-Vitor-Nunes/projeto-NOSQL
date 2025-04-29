const mongoose = require('mongoose');

const LivroSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  autor: { type: String, required: true },
  editora: String,
  dataPublicacao: Date,
  genero: String,
});

module.exports = mongoose.model('Livro', LivroSchema);

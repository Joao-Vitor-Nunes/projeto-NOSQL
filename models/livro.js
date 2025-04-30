const mongoose = require('mongoose');

const livroSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  autor: { type: String, required: true },
  editora: { type: String, required: true },
  ano: { type: Number, required: true },
  genero: { type: String, required: true },
  isbn: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('Livro', livroSchema);

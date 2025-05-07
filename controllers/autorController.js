const Autor = require('../models/autor');

exports.listarAutores = async (req, res) => {
  const autores = await Autor.find();
  res.render('autores/index', { autores });
};

exports.mostrarFormulario = (req, res) => {
  res.render('autores/novo');
};

exports.cadastrarAutor = async (req, res) => {
  const { nome, nacionalidade } = req.body;
  await Autor.create({ nome, nacionalidade });
  res.redirect('/autores');
};

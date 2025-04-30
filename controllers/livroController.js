const Livro = require('../models/livro');

exports.criarLivro = async (req, res) => {
  try {
    const novoLivro = new Livro(req.body);
    await novoLivro.save();
    res.redirect('/livros');
  } catch (error) {
    res.status(500).send('Erro ao criar livro: ' + error.message);
  }
};

exports.listarLivros = async (req, res) => {
  try {
    const livros = await Livro.find();
    res.render('livros/listar', { livros });
  } catch (error) {
    res.status(500).send('Erro ao listar livros: ' + error.message);
  }
};

exports.formularioNovoLivro = (req, res) => {
  res.render('livros/novo');
};

const Livro = require('../models/Livro');

// Mostrar todos os livros
exports.listarLivros = async (req, res) => {
  const livros = await Livro.find();
  res.render('livros/index', { livros });
};

// Mostrar formulário de cadastro
exports.formularioCadastro = (req, res) => {
  res.render('livros/cadastrar');
};

// Cadastrar livro
exports.cadastrarLivro = async (req, res) => {
  const { titulo, autor, editora, dataPublicacao, genero } = req.body;
  await Livro.create({ titulo, autor, editora, dataPublicacao, genero });
  res.redirect('/livros');
};

// Deletar livro
exports.deletarLivro = async (req, res) => {
  const { id } = req.params;
  await Livro.findByIdAndDelete(id);
  res.redirect('/livros');
};

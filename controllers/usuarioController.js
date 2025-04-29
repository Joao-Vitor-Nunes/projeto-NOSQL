
const Usuario = require('../models/Usuario');

exports.formularioCriacao = (req, res) => {
  res.render('usuarios/novo');
};

exports.criar = async (req, res) => {
  try {
    const { nome, senha, tipo, email, endereco } = req.body;
    const novoUsuario = new Usuario({ nome, senha, tipo, email, endereco });
    await novoUsuario.save();
    res.redirect('/usuarios');
  } catch (error) {
    res.status(500).send('Erro ao salvar o usuário: ' + error.message);
  }
};

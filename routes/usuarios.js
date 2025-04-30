const express = require('express');
const router = express.Router();
const Usuario = require('../models/Usuario');

// Rota GET: mostra o formulário
router.get('/novo', (req, res) => {
  res.render('usuarios/novo');
});

// Rota POST: recebe e salva os dados no banco
router.post('/', async (req, res) => {
  try {
    const novoUsuario = new Usuario(req.body);
    await novoUsuario.save();
    res.send('Usuário salvo com sucesso!');
  } catch (err) {
    res.status(500).send('Erro ao salvar usuário: ' + err.message);
  }
});

module.exports = router;

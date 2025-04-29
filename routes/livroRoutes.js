const express = require('express');
const router = express.Router();
const livroController = require('../controllers/livroController');

router.get('/', livroController.listarLivros);
router.get('/cadastrar', livroController.formularioCadastro);
router.post('/cadastrar', livroController.cadastrarLivro);
router.post('/deletar/:id', livroController.deletarLivro);

module.exports = router;

const express = require('express');
const router = express.Router();
const livroController = require('../controllers/livroController');

router.get('/', livroController.listarLivros); // <-- ESSA É A ROTA QUE PRECISA
router.get('/novo', livroController.formularioNovoLivro);
router.post('/', livroController.criarLivro);

module.exports = router;

const express = require('express');
const router = express.Router();
const autorController = require('../controllers/autorController');

router.get('/', autorController.listarAutores);
router.get('/novo', autorController.mostrarFormulario);
router.post('/', autorController.cadastrarAutor);

module.exports = router;

const express = require('express');
const router = express.Router();
const controller = require('../controllers/categoriaController');

router.post('/categorias', controller.criar);
router.get('/categorias', controller.listar);

module.exports = router;

const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.get('/novo', usuarioController.formularioCriacao);
router.post('/', usuarioController.criar);

module.exports = router;

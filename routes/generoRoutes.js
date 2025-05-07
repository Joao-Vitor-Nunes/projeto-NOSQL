const express = require('express');
const router = express.Router();
const controller = require('../controllers/generoController');

router.post('/generos', controller.criar);
router.get('/generos', controller.listar);

module.exports = router;

const express = require('express');
const router = express.Router();
const perfilController = require('../controllers/perfil.js');



router.post('/perfil', perfilController.createPerfil);

router.get('/perfil', perfilController.getAllPerfil);


module.exports = router;

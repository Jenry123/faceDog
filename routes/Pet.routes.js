const express = require('express');
const router = express.Router();
const petController = require('../controllers/petController.js');

// Ruta para crear un usuario
router.post('/pets', petController.createPet);

// Ruta para obtener todos los usuarios con sus publicaciones
router.get('/pets', petController.getAllPets);

module.exports = router;

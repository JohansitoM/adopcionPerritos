const express = require('express')
const perrosController = require('../controllers/perrosController')
const router = express.Router()

router.post('/perros', perrosController.ingresarPerrito)

router.get('/perros', perrosController.mostrarPerritosDisponibles)

router.put('/perros', perrosController.actualizarPerritoInfo)

module.exports = router
const express = require('express')
const adoptantesController = require('../controllers/adoptantesController')
const router = express.Router()

router.get('/adoptantes', adoptantesController.mostrarAdoptantes)

router.post('/adoptantes', adoptantesController.registrarAdoptante)
router.post('/adoptantes/adoptar', adoptantesController.asignarPerrito)

module.exports = router
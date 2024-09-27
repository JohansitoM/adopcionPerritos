const express = require('express')
const registrosController = require('../controllers/registrosController')
const router = express.Router()

router.get('/registros', registrosController.mostrarRegistros)

module.exports = router
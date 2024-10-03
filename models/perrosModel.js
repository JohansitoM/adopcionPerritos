const mongoose = require('mongoose')

const perrosSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    raza: {
        type: String,
        required: true
    },
    edad: {
        type: Number,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    adopcionDisponible: {
        type: Boolean,
        required: true
    }
})

const Perro = mongoose.model('perros', perrosSchema)

module.exports = Perro
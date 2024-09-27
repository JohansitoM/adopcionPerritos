const mongoose = require('mongoose')

const perrosSchema = new mongoose.Schema({
    nombre: {
        type: String,
        require: true
    },
    raza: {
        type: String,
        require: true
    },
    edad: {
        type: Number,
        require: true
    },
    size: {
        type: String,
        require: true
    },
    adopcionDisponible: {
        type: Boolean,
        require: true
    }
})

const Perro = mongoose.model('perros', perrosSchema)

module.exports = Perro
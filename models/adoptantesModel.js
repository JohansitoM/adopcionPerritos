const mongoose = require('mongoose')

const adoptantesSchema = new mongoose.Schema({
    nombre: {
        type: String,
        require: true
    },
    correo: {
        type: String,
        require: true
    },
    telefono: {
        type: String,
        require: true
    },
    direccion: {
        type: String,
        require: true
    }
})

const Adoptante = mongoose.model('adoptantes', adoptantesSchema)

module.exports = Adoptante
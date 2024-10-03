const mongoose = require('mongoose')

const adoptantesSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    mascotasAdoptadas: {
        type: Array,
        required: false
    }
})

const Adoptante = mongoose.model('adoptantes', adoptantesSchema)

module.exports = Adoptante
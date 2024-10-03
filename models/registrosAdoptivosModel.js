const mongoose = require('mongoose')

const registrosSchema = new mongoose.Schema({
    adoptante: {
        type: mongoose.Schema.Types.Mixed,
        required: true
    },
    perro: {
        type: mongoose.Schema.Types.Mixed,
        required: true
    },
    fechaAdopcion: {
        type: Date,
        required: true
    }
})

const Registro = mongoose.model('registros', registrosSchema)

module.exports = Registro
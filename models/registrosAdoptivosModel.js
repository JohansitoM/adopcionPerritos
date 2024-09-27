const mongoose = require('mongoose')

const registrosSchema = new mongoose.Schema({
    adoptante: {
        type: Mixed,
        require: true
    },
    perro: {
        type: Mixed,
        require: true
    },
    fechaAdopcion: {
        type: Date,
        require: true
    }
})

const Registro = mongoose.model('registros', registrosSchema)

module.exports = Registro
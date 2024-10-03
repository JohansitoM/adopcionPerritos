const mongoose = require('mongoose')

const conexionDB = async () => {
    try {
        mongoose.connect('mongodb://localhost:27017/gestionPets')

        mongoose.connection.once('connected', () => {
            console.log("Conectado a la base de datos ._.")
        })
    } catch(e) {
        console.log("Error al conectar x_x", e)
    }
}

module.exports = conexionDB;
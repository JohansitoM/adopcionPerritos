const mongoose = require('mongoose')

const conexionDB = async () => {
    try {
        mongoose.connect('mongodb://localhost:27017', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log("Conectado a la base de datos :)")
    } catch(e) {
        console.log("Error al conectar x_x", e)
    }
}

module.exports = conexionDB;
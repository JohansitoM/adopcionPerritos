const registro = require('../models/registrosAdoptivosModel')

const registrarAdopcion = async(adoptante, perro, fechaAdopcion) => {
    try {
        const registroDatos = new registro({adoptante, perro, fechaAdopcion})
        await registroDatos.save();
        return { mensaje: registroDatos }
    } catch(e) {
        throw new Error("Error al crear el registro " + e.message)
    }
}

const mostrarRegistros = async( req, res) => {
    try {
        const registros = await registro.find()
        res.json(registros)
    } catch (e) {
        res.status(500).json({mensajito: "Error al obtener los registros", error: e})
    }
}

module.exports = { registrarAdopcion, mostrarRegistros }
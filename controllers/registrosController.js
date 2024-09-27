const registro = require('../models/registrosAdoptivosModel')

const crearRegistro = async(req, res) => {
    try {
        const { nombre, area, poblacionTotal, capital, numeroMunicipios, pib, descripcion } = req.body;
        const nuevosDatos = new dpto({nombre, area, poblacionTotal, capital, numeroMunicipios, pib, descripcion})
        await nuevosDatos.save();
        res.json({mensaje: nuevosDatos})
    } catch(e) {
        res.status(500).json({mensaje: "Error al ingresar departamento"})
    }
}

const mostrarRegistros = async( req, res) => {
    try {
        const departaments = await dpto.find()
        res.json(departaments)
    } catch (e) {
        res.status(500).json({mensajito: "Error al obtener los departamentos", error: e})
    }
}

module.exports = { crearRegistro, mostrarRegistros }
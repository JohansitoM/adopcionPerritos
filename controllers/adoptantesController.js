const adoptante = require('../models/adoptantesModel')
const registroController = require('./registrosController')
const perritosController = require('./perrosController')

const registrarAdoptante = async(req, res) => {
    try {
        const { nombre, area, poblacionTotal, capital, numeroMunicipios, pib, descripcion } = req.body;
        const nuevosDatos = new dpto({nombre, area, poblacionTotal, capital, numeroMunicipios, pib, descripcion})
        await nuevosDatos.save();
        res.json({mensaje: nuevosDatos})
    } catch(e) {
        res.status(500).json({mensaje: "Error al ingresar departamento"})
    }
}

const mostrarAdoptantes = async( req, res) => {
    try {
        const departaments = await dpto.find()
        res.json(departaments)
    } catch (e) {
        res.status(500).json({mensajito: "Error al obtener los departamentos", error: e})
    }
}

const actualizarInfoAdoptante = async (req, res) => {
    try {
        const { id } = req.params
        const { nombre, area, poblacionTotal, capital, numeroMunicipios, pib, descripcion } = req.body
        if(!nombre || !area || !poblacionTotal || !capital || !numeroMunicipios || !pib || !descripcion) {
            return res.status(400).send("Escribe bien >:/")
        }

        const actualizado = await dpto.findByIdAndUpdate(id, {nombre, area, poblacionTotal, capital, numeroMunicipios, pib, descripcion})
        res.json({mensaje: "Departamento actualizado", actualizado: actualizado})

    } catch(e) {
        res.status(500).json({mensaje: "Error al actualizar el departamento", error: e})
    }
}

const asignarPerrito = async (req, res) => {

}

module.exports = { registrarAdoptante, mostrarAdoptantes, actualizarInfoAdoptante }
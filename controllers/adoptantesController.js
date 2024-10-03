const Adoptante = require('../models/adoptantesModel')
const { registrarAdopcion } = require('./registrosController')
const perrito = require('./perrosController')

const obtenerAdoptante = async( id ) => {
    try {
        const adoptante = await Adoptante.findById( id )
        if(!adoptante) {
            throw new Error("El adoptante no existe")
        }
        return adoptante
    } catch (e) {
        throw new Error("Error al obtener el adoptante " + e.message)
    }
}

const registrarAdoptante = async(req, res) => {
    try {
        const { nombre, correo, telefono, direccion } = req.body;

        if(!nombre || !correo || !telefono || !direccion) {
            return res.status(400).send("Escribe bien >:/")
        }

        const nuevosDatos = new Adoptante({ nombre, correo, telefono, direccion })
        await nuevosDatos.save();
        res.json({ mensaje: nuevosDatos })
    } catch(e) {
        res.status(500).json({mensaje: "Error al registrar el adoptante" + e})
    }
}

const mostrarAdoptantes = async( req, res) => {
    try {
        const adoptantes = await Adoptante.find()
        res.json(adoptantes)
    } catch (e) {
        res.status(500).json({mensajito: "Error al obtener los adoptantes", error: e})
    }
}

const asignarPerrito = async (req, res) => {
    try {
        const { idAdoptante, idPerrito, fechaAdopcion } = req.body
        let perro = await perrito.obtenerPerrito(idPerrito)
        let adoptante = await obtenerAdoptante(idAdoptante)
    
        await registrarAdopcion( adoptante, perro, fechaAdopcion )
        await perrito.cambiarEstado( idPerrito, false )
        
        adoptante.mascotasAdoptadas.push(perro)
        await adoptante.save()
        res.json({ adoptante, perro, fechaAdopcion })
    } catch (e) {
        res.json({mensaje: e.message})
    }
}

module.exports = { registrarAdoptante, mostrarAdoptantes, asignarPerrito }
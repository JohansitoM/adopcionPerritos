const Perro = require('../models/perrosModel')
const ingresarPerrito = async(req, res) => {
    try {
        const { nombre, raza, edad, size, adopcionDisponible } = req.body;
        const nuevosDatos = new Perro({ nombre, raza, edad, size, adopcionDisponible })
        await nuevosDatos.save();
        res.json({mensaje: nuevosDatos})
    } catch(e) {
        res.status(500).json({mensaje: "Error al ingresar el perrito " + e})
    }
}

const obtenerPerrito = async( id ) => {
    try {
        const perritoConsultado = await Perro.findById(id)
        if(!perritoConsultado) {
            throw new Error("Perrito no encontrado")
        }
        return perritoConsultado
    } catch (e) {
        throw new Error('Error al obtener el perrito ' + e.message)
    }
}

const cambiarEstado = async ( id, estado ) => {
    try {
        const actualizado = await Perro.findByIdAndUpdate( id, { adopcionDisponible: estado })
        return actualizado
    }
    catch (e) {
        throw new Error('Error al cambiar el estado ' + e.message)
    }
j
}

const mostrarPerritosDisponibles = async( req, res) => {
    try {
        const perritos = await Perro.find()

        const perritosDisponibles = () => {
            let listaDisponibles = []
            console.log(perritos.length)
            for (i = 0; i < perritos.length; i++) {
                if(perritos[i].adopcionDisponible == true) {
                    listaDisponibles.push(perritos[i])
                    console.log(listaDisponibles)
                }
            }
            return listaDisponibles
        }
        return res.json(perritosDisponibles())
    } catch (e) {
        return res.status(500).json({ mensajito: "Error al obtener los perritos" + e })
    }
}

const actualizarPerritoInfo = async (req, res) => {
    try {
        const { id } = req.params
        const { nombre, raza, edad, size, adopcionDisponible } = req.body
        if(!nombre || !raza || !edad || !size || !adopcionDisponible) {
            return res.status(400).send("Escribe bien >:/")
        }

        const actualizado = await Perro.findByIdAndUpdate(id, { nombre, raza, edad, size, adopcionDisponible })
        res.json({mensaje: "Perrito actualizado", actualizado: actualizado})

    } catch(e) {
        res.status(500).json({mensaje: "Error al actualizar el Perrito", error: e})
    }
}

module.exports = { ingresarPerrito, cambiarEstado,  obtenerPerrito, mostrarPerritosDisponibles, actualizarPerritoInfo }
// Adopción de Perros
// Desarrollar un sistema básico para gestionar la adopción de perros en un refugio. El sistema debe permitir:Registrar perros con información como nombre, raza, edad, tamaño y estado de adopción (disponible/adoptado).Registrar adoptantes con datos como nombre, correo electrónico y dirección.Asignar un perro a un adoptante, registrando el perro, el adoptante y la fecha de adopción.Mostrar un listado de perros disponibles para adopción y un historial de adopciones.
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const perrosRoutes = require('./routes/perrosRoutes')
const adoptantesRoutes = require('./routes/adoptantesRoutes')
const registrosRoutes = require('./routes/registrosRoutes')

app.use(express.json())

app.use('/api', perrosRoutes)
app.use('/api', adoptantesRoutes)
app.use('/api', registrosRoutes)

app.listen(PORT, () => {
    console.log(`Servidor listo en el puerto ${PORT} :B`)
})
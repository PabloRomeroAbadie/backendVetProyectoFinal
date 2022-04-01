import Turno from "../models/turnos";

const turnosCtrl = {};

// agregamos la logica para obtener la lista de productos
turnosCtrl.listarTurnos = (req, res) => {
    //toda la logica que quiero que suceda para obtener la lista
    res.send("hola desde el backend")
}

turnosCtrl.crearTurnos = async (req, res) => {
    try {
        console.log(req.body)

        //validar
        //crear el turno en la base de datos

    const turnoNuevo = new Turno({
            nombreDueño: req.body.nombreDueño,
            apellidoDueño: req.body.apellidoDueño,
            nombreMascota: req.body.nombreMascota,
            raza: req.body.raza,
            veterinario: req.body.veterinario,
            horario: req.body.horario
        })
        // guardar el objeto nuevo en BD
        await turnoNuevo.save();

        // enviar respuesta 

        res.status(201).json({
            mensaje: "Turno correctamente creado"
        })

    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "error al intentar agregar un turno"
        })
    }
}




export default turnosCtrl;
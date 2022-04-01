import Turno from "../models/turnos";

const turnosCtrl = {};


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

// agregamos la logica para obtener la lista de productos
turnosCtrl.listarTurnos = async (req, res) => {
    //toda la logica que quiero que suceda para obtener la lista
    try {
        //crear un arreglo de productos y enviarlo
        const listaTurno = await Turno.find();
        res.status(200).json(listaTurno)
    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "error al intentar agregar un turno"
        })
    }
}



turnosCtrl.obtenerTurnos = async (req, res) => {
    try {
     
        //obtener el id del request 
        console.log(req.params.id)


        //buscar el producto
        const turnoBuscado = await Turno.findById(req.params.id)

        //enviar el producto por respuesta para el frontend
        res.status(200).json(turnoBuscado);


    } catch (error) {
        console.log(error);
        //enviar codigo de error 
        res.status(404).json({
            mensaje: "Error no se pudo obtener el turno buscado"
        })
    }
}





export default turnosCtrl;
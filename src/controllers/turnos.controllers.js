import { validateFecha, validateHorario, validateNombreDueño, validateNombreMascota, validateRaza, validateVeterinario } from "../helpers/ValidateFields";
import Turno from "../models/turnos";

const turnosCtrl = {};


turnosCtrl.crearTurnos = async (req, res) => {
    try {
        if (
            !validateNombreDueño(req.body.nombreDueño) ||
            !validateNombreMascota(req.body.nombreMascota) ||
            !validateRaza(req.body.raza) ||
            !validateFecha(req.body.fecha) ||
            !validateHorario(req.body.horario) ||
            !validateVeterinario(req.body.veterinario)
          ) 
          {
            res.status(404).json({
                mensaje: "datos erroneos"
            })
            return;
        }

        const newTurno = new Turno({
            nombreDueño: req.body.nombreDueño,
            nombreMascota: req.body.nombreMascota,
            raza: req.body.raza,
            fecha: req.body.fecha,
            veterinario: req.body.veterinario,
            horario: req.body.horario
        })
    
        await newTurno.save();
 
        res.status(201).json({
            mensaje: "Turno correctamente creado"
        })

    } catch (error) {
        res.status(404).json({
            mensaje: "error al intentar agregar un turno"
        })
    }
}

turnosCtrl.listarTurnos = async (req, res) => {
    try {
        const listaTurno = await Turno.find();
        res.status(200).json(listaTurno)
    } catch (error) {
        res.status(404).json({
            mensaje: "error al intentar listar turno"
        })
    }
}

turnosCtrl.obtenerTurnos = async (req, res) => {
    try {
        const turnoBuscado = await Turno.findById(req.params.id)

        res.status(200).json(turnoBuscado);

    } catch (error) { 
        res.status(404).json({
            mensaje: "Error no se pudo obtener el turno buscado"
        })
    }
}

turnosCtrl.editarTurnos = async (req, res) => {
    try {
        await Turno.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).json({ mensaje: "Turno editado correctamente" });
    } catch (error) {
        res.status(404).json({
            mensaje: "error al intentar editar un turno"
        })
    }
}

turnosCtrl.borrarTurnos = async (req, res) => {
    try {
        await Turno.findByIdAndDelete(req.params.id);
        res.status(200).json({ mensaje: "se elimino  el turno correctamente" })

    } catch (error) {
        res.status(404).json({
            mensaje: "error al intentar borrar un turno"
        })
    }
}

export default turnosCtrl;
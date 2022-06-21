import { validateConsulta, validateEmail, validateNombreDueño } from "../helpers/ValidateFields";
import Consulta from "../models/consulta";

const consultasCtrl = {};

consultasCtrl.crearConsulta = async (req,res) => {
    try {   
        //validar
        if (
            !validateNombreDueño(req.body.nombreApellido) ||
            !validateEmail(req.body.email) ||
            !validateConsulta(req.body.consulta))
            {
                res.status(404).json({
                    mensaje: "datos erroneos"
                })
                return;
            }

        //guardar consulta en la base de datos
        const newConsulta = new Consulta ({
            nombreApellido: req.body.nombreApellido,
            email: req.body.email,
            consulta: req.body.consulta
        })

        //guardar consulta nueva en bd
        newConsulta.save();

        //enviar respuesta
        res.status(201).json({
            mensaje: "Consulta correctamente creada"
        })

    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "error al intentar realizar la consulta"
        })
    }
}

consultasCtrl.listarConsultas = async (req,res) => {
    try {
        const listaConsulta = await Consulta.find();
        res.status(200).json(listaConsulta)

    } catch (error){
        console.log(error);
        res.status(404).json({
            mensaje: "error al intentar listar consulta"
        })
    }
}

consultasCtrl.obtenerConsulta = async (req, res) => {
    try {

        //obtener el id del request 
        console.log(req.params.id)


        //buscar el turno
        const consultaBuscada = await Consulta.findById(req.params.id)

        //enviar el turno por respuesta para el frontend
        res.status(200).json(consultaBuscada);


    } catch (error) {
        console.log(error);
        //enviar codigo de error 
        res.status(404).json({
            mensaje: "Error no se pudo obtener la consulta buscada"
        })
    }
}

consultasCtrl.borrarConsulta = async (req, res) => {
    try {
        await Consulta.findByIdAndDelete(req.params.id);
        res.status(200).json({ mensaje: "se elimino  la consulta correctamente" })

    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "error al intentar borrar la consulta"
        })
    }
}

export default consultasCtrl;
import Consulta from "../models/consulta";

const consultasCtrl = {};

consultasCtrl.crearConsulta = async (req,res) => {
    try {   
        //validar

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

export default consultasCtrl;
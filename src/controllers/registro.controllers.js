import { validateNombreDueño, validateEmail, validateContraseña } from "../helpers/ValidateFields";
import Registro from "../models/registro"

const registroCtrl = {};

const crypto = require('crypto')

registroCtrl.login = async (req, res) => {
    //validar q tenga mail y contra
    if(!req.body.contraseña || !req.body.email)
    {
        res.status(404).json({
            mensaje: "error al intentar agregar un Usuario"
        })
    }

    Registro.findOne({email: req.body.email}, (err, registro) =>{
        if(err){
            console.log(2);
            res.status(404).json({
                mensaje: "error al intentar agregar un Usuario"
            })
        }
        if(!registro){
            console.log(3);
            res.status(404).json({
                mensaje: "error al intentar agregar un Usuario"
            })
        }
        if(registro.contraseña != encryptPassword(req.body.contraseña)){
            console.log(4);
            res.status(404).json({
                mensaje: "error al intentar agregar un Usuario"
            })
        }else{
            res.sendStatus(200);
        }
        
    })
}

registroCtrl.crearRegistro = async (req, res) => {
    try{

         //validar
         if (
            !validateNombreDueño(req.body.nombreApellido) ||
            !validateEmail(req.body.email) ||
            !validateContraseña(req.body.contraseña))
            {
                res.status(404).json({
                    mensaje: "datos erroneos"
                })
                return;
            }

        console.log(req.body)
        const pass = encryptPassword(req.body.contraseña)
        if(pass == ""){
            res.status(404).json({
                mensaje: "error al intentar agregar un Usuario"
            })
        }
        console.log("pass: ",pass);

        //Crear el registro en la base de dato
        const newRegistro = new Registro ({
            nombreApellido: req.body.nombreApellido,
            email: req.body.email,
            contraseña: pass,
        })
    
        //guardar el registro de usuario en la bd
        await newRegistro.save();
    
        //enviar respuesta
        res.status(201).json({
            mensaje: "Registrado correctamente"
        })
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "error al registrar el usuario"
        })
    }
}

const encryptPassword = (password) =>{
    if(!password) return '';
    try {
      return crypto.createHmac('sha1',"asdasdasdasd")
      .update(password)
      .digest('hex')
    } catch (err) {
      return "";
    }
  }

export default registroCtrl;
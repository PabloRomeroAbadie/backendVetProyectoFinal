import { validateCelular, validateEmail, validateEspecie, validateNombreDueño, validateNombreMascota, validateRaza } from "../helpers/ValidateFields";
import Usuario from "../models/usuarios";

const usuariosCtrl = {};


usuariosCtrl.crearUsuarios = async (req, res) => {
    try {
        if (
            !validateEmail(req.body.email) ||
            !validateNombreDueño( req.body.nombreDueño) ||
            !validateCelular(req.body.celular) ||
            !validateNombreMascota(req.body.nombreMascota) ||
            !validateEspecie(req.body.especie) ||
            !validateRaza(req.body.raza) 
        ){
            res.status(404).json({
                mensaje: "datos erroneos"
            })
            return;
        }

        const usuarioNuevo = new Usuario({
            email: req.body.email,
            nombreDueño: req.body.nombreDueño,
            celular: req.body.celular,
            nombreMascota: req.body.nombreMascota,
            especie: req.body.especie,
            raza: req.body.raza
        })
        await usuarioNuevo.save();

        res.status(201).json({
            mensaje: "Usuario correctamente creado"
        })

    } catch (error) {
        res.status(404).json({
            mensaje: "error al intentar agregar un Usuario"
        })
    }
}

usuariosCtrl.listarUsuarios = async (req, res) => {
    try {
        const listaUsuario = await Usuario.find();
        res.status(200).json(listaUsuario)
    } catch (error) {
        res.status(404).json({
            mensaje: "error al intentar agregar un Usuario"
        })
    }
}

usuariosCtrl.obtenerUsuarios = async (req, res) => {
    try { 
        const usuarioBuscado = await Usuario.findById(req.params.id)

        res.status(200).json(usuarioBuscado);

    } catch (error) { 
        res.status(404).json({
            mensaje: "Error no se pudo obtener el usuario buscado"
        })
    }
}

usuariosCtrl.editarUsuarios = async (req, res) => {
    try {
        await Usuario.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).json({ mensaje: "El usuario fue editado correctamente" });

    } catch (error) {
        res.status(404).json({
            mensaje: "error al intentar editar un usuario"
        })
    }
}

  usuariosCtrl.borrarUsuarios = async (req, res) => {
      try {
          await Usuario.findByIdAndDelete(req.params.id);
          res.status(200).json({ mensaje: "se elimino  el usuario correctamente" })

      } catch (error) {
          res.status(404).json({
              mensaje: "error al intentar borrar un usuario"
          })
      }
  }
  
export default usuariosCtrl;
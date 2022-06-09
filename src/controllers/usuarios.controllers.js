import Usuario from "../models/usuarios";

const usuariosCtrl = {};
const crypto = require('crypto')

usuariosCtrl.login = async (req, res) =>{
    //validar q tenga mail y contra
    if(!req.body.contraseña || !req.body.email)
    {
        res.status(404).json({
            mensaje: "error al intentar agregar un Usuario"
        })
    }

    Usuario.findOne({email: req.body.email}, (err, usuario) =>{
        if(err){
            console.log(2);
            res.status(404).json({
                mensaje: "error al intentar agregar un Usuario"
            })
        }
        if(!usuario){
            console.log(3);
            res.status(404).json({
                mensaje: "error al intentar agregar un Usuario"
            })
        }
        if(usuario.contraseña != encryptPassword(req.body.contraseña)){
            console.log(4);
            res.status(404).json({
                mensaje: "error al intentar agregar un Usuario"
            })
        }else{
            res.sendStatus(200);
        }
        
    })
}

usuariosCtrl.crearUsuarios = async (req, res) => {
    try {
        console.log(req.body)
        const pass = encryptPassword(req.body.contraseña)
        if(pass == ""){
            res.status(404).json({
                mensaje: "error al intentar agregar un Usuario"
            })
        }
        console.log("pass: ",pass);
        //validar

        //crear el usuarios en la base de datos

        const usuarioNuevo = new Usuario({
            email: req.body.email,
            nombreDueño: req.body.nombreDueño,
            nombreMascota: req.body.nombreMascota,
            contraseña: pass,
            fecha: req.body.fecha,
            celular: req.body.celular
        })
        // guardar el objeto nuevo en BD
        await usuarioNuevo.save();

        // enviar respuesta 

        res.status(201).json({
            mensaje: "Usuario correctamente creado"
        })

    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "error al intentar agregar un Usuario"
        })
    }
}

// agregamos la logica para obtener la lista de usuarios
usuariosCtrl.listarUsuarios = async (req, res) => {
    //toda la logica que quiero que suceda para obtener la lista
    try {
        //crear un arreglo de turnos y enviarlo
        const listaUsuario = await Usuario.find();
        res.status(200).json(listaUsuario)
    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "error al intentar agregar un Usuario"
        })
    }
}

usuariosCtrl.obtenerUsuarios = async (req, res) => {
    try {

        //obtener el id del request 
        console.log(req.params.id)


        //buscar el usuario
        const usuarioBuscado = await Usuario.findById(req.params.id)

        //enviar el Usuario por respuesta para el frontend
        res.status(200).json(usuarioBuscado);


    } catch (error) {
        console.log(error);
        //enviar codigo de error 
        res.status(404).json({
            mensaje: "Error no se pudo obtener el usuario buscado"
        })
    }
}

usuariosCtrl.editarUsuarios = async (req, res) => {
    try {
        console.log(req.params.id)
        console.log(req.body)
        //agregar validaciones de campos
        await Usuario.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).json({ mensaje: "El usuario fue editado correctamente" });

    } catch (error) {
        console.log(error)
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
          console.log(error)
          res.status(404).json({
              mensaje: "error al intentar borrar un usuario"
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
  

export default usuariosCtrl;
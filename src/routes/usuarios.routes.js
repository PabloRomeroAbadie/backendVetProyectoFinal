// la mision de este archivo es mantener las rutas 

import { Router } from "express";
import usuariosCtrl from "../controllers/usuarios.controllers";

// instancio al Router
const router = Router();  // puedo ponerle el nombre que quiera ( router x ejemplo )


// crear la ruta

router.route("/usuarios").get(usuariosCtrl.listarUsuarios).post(usuariosCtrl.crearUsuarios);
router.route("/usuarios/:id").get(usuariosCtrl.obtenerUsuarios).put(usuariosCtrl.editarUsuarios).delete(usuariosCtrl.borrarUsuarios);

export default router; 
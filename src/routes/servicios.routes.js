// la mision de este archivo es mantener las rutas o peticiones
import {Router} from "express";
import servicioCtrl from "../controllers/servicio.controllers";
import veterinarioCtrl from "../controllers/veterinario.controllers";
import productoCtrl from "../controllers/producto.controllers";
import planesCtrl from "../controllers/planes.controllers";
import turnosCtrl from "../controllers/turnos.controllers";
import usuariosCtrl from "../controllers/usuarios.controllers";

//instancio al router
const router = Router();

//crear la ruta
router.route("/servicios").get(servicioCtrl.listarServicios)
router.route("/veterinarios").get(veterinarioCtrl.listarVeterinarios)
router.route("/productos").get(productoCtrl.listarProductos)
router.route("/planes").get(planesCtrl.listarPlanes )
router.route("/turnos").get(turnosCtrl.listarTurnos).post(turnosCtrl.crearTurnos);
router.route("/turnos/:id").get(turnosCtrl.obtenerTurnos).put(turnosCtrl.editarTurnos).delete(turnosCtrl.borrarUsuarios);
router.route("/usuarios").get(usuariosCtrl.listarUsuarios).post(usuariosCtrl.crearUsuarios);
router.route("/usuarios/:id").get(usuariosCtrl.obtenerUsuarios).put(usuariosCtrl.editarUsuarios).delete(usuariosCtrl.borrarUsuarios);


export default router;

// la mision de este archivo es mantener las rutas o peticiones
import {Router} from "express";
import servicioCtrl from "../controllers/servicio.controllers";
import veterinarioCtrl from "../controllers/veterinario.controllers";
import productoCtrl from "../controllers/producto.controllers";
import planesCtrl from "../controllers/planes.controllers";

//instancio al router
const router = Router();

//crear la ruta
router.route("/servicios").get(servicioCtrl.listarServicios)
router.route("/veterinarios").get(veterinarioCtrl.listarVeterinarios)
router.route("/productos").get(productoCtrl.listarProductos)
router.route("/planes").get(planesCtrl.listarPlanes )


export default router;

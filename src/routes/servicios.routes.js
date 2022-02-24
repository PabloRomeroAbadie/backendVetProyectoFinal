// la mision de este archivo es mantener las rutas o peticiones
import {Router} from "express";
import servicioCtrl from "../controllers/servicio.controllers";

//instancio al router
const router = Router();

//crear la ruta
router.route("/servicios").get(servicioCtrl.listarServicios)

export default router;

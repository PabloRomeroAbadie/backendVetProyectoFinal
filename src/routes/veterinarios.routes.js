import { Router } from "express";
import veterinarioCtrl from "../controllers/veterinario.controllers"

//instancio al router
const router = Router();

//crear la ruta
router.route("/").get(veterinarioCtrl.listarVeterinarios)

export default router;
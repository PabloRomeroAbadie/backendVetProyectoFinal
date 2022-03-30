// la mision de este archivo es mantener las rutas 

import { Router } from "express";
import turnosCtrl from "../controllers/turnos.controllers";

// instancio al Router
const router = Router();  // puedo ponerle el nombre que quiera ( router x ejemplo )


// crear la ruta

router.route("/turnos").get(turnosCtrl.listarTurnos);

export default router; 
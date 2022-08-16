import Servicio from "../models/servicio";
const servicioCtrl = {};

servicioCtrl.listarServicios = async (req, res) =>{
    try{ 
        const listarServicios = await Servicio.find();
        res.status(200).json(listarServicios);
    }catch(error){
        console.log(error)
    }
}

export default servicioCtrl;
import Servicio from "../models/servicio";
const servicioCtrl = {};

// agregamos la logica para obtener la lista de servicios
servicioCtrl.listarServicios = async (req, res) =>{
    // toda la logica que quiero que suceda para obtener la lista
    try{
        // crear un arreglo de productos y enviarlo 
        const listarServicios = await Servicio.find();
        res.status(200).json(listarServicios);
    }catch(error){
        console.log(error)
    }
}

export default servicioCtrl;
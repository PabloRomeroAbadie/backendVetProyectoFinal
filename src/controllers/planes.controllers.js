import Plan from "../models/planes";

const planesCtrl = {};

// agregamos la logica para obtener la lista de planes
planesCtrl.listarPlanes = async (req, res) =>{
    // toda la logica que quiero que suceda para obtener la lista
    try{
        // crear un arreglo de productos y enviarlo 
        const listarPlanes = await Plan.find();
        res.status(200).json(listarPlanes);
    }catch(error){
        console.log(error)
    }
}

export default planesCtrl;
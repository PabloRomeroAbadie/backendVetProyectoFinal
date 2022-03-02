import Veterinario from "../models/veterinario";
const veterinarioCtrl = {};

// agregamos la logica para obtener la lista de servicios
veterinarioCtrl.listarVeterinarios= async (req, res) =>{
    // toda la logica que quiero que suceda para obtener la lista
    try{
        // crear un arreglo de productos y enviarlo 
        const listarVeterinarios = await Veterinario.find();
        res.status(200).json(listarVeterinarios);
    }catch(error){
        console.log(error)
    }
}

export default veterinarioCtrl;
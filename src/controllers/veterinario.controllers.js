import Veterinario from "../models/veterinario";
const veterinarioCtrl = {};

veterinarioCtrl.listarVeterinarios= async (req, res) =>{
    try{
        const listarVeterinarios = await Veterinario.find();
        res.status(200).json(listarVeterinarios);
    }catch(error){
        console.log(error)
    }
}

export default veterinarioCtrl;
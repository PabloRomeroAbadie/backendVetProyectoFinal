import Plan from "../models/planes";

const planesCtrl = {};

planesCtrl.listarPlanes = async (req, res) =>{
    try{ 
        const listarPlanes = await Plan.find();
        res.status(200).json(listarPlanes);
    }catch(error){
        console.log(error)
    }
}

export default planesCtrl;
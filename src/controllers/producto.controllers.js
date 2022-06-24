import Producto from "../models/producto";

const productoCtrl = {};

productoCtrl.listarProductos= async (req, res) =>{
    try{
        // crear un arreglo de productos y enviarlo 
        const listarProductos = await Producto.find();
        res.status(200).json(listarProductos);
    }catch(error){
        console.log(error)
    }
}

export default productoCtrl;
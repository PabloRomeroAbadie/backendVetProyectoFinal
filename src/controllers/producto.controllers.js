import Producto from "../models/producto";

const productoCtrl = {};

// agregamos la logica para obtener la lista de servicios
productoCtrl.listarProductos= async (req, res) =>{
    // toda la logica que quiero que suceda para obtener la lista
    try{
        // crear un arreglo de productos y enviarlo 
        const listarProductos = await Producto.find();
        res.status(200).json(listarProductos);
    }catch(error){
        console.log(error)
    }
}

export default productoCtrl;
import mongoose, {Schema} from "mongoose";

const productoSchema = new Schema({
    productoImg:{
        Type:String
    },
    productoTitle:{
        type:String,
    },
    productoPrecio:{
        type:String
    }
})

const Producto = mongoose.model("productos", productoSchema);

export default Producto;
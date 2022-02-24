//modelamos el dato a guardar en la base de datos
import mongoose, {Schema} from "mongoose";

const servicioSchema = new Schema({
    servicioImg:{
        data:Buffer,
        Type:String
    },
    servicioTitle:{
        type:String,
    },
    servicioText:{
        type:String
    }
})

const Servicio = mongoose.model("servicio", servicioSchema);

export default Servicio;
import mongoose, {Schema} from "mongoose";

const servicioSchema = new Schema({
    servicioImg:{
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
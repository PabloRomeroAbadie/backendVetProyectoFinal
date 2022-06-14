import mongoose, {Schema} from "mongoose";

const consultaSchema = new Schema({
    nombreApellido:{
        type:String
    },
    email:{
        type:String
    },
    consulta:{
        type:String
    }
})

const Consulta = mongoose.model("consulta", consultaSchema);

export default Consulta;
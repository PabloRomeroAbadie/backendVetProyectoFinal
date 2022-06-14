// modelamos el dato a guardar en la BD
import mongoose, { Schema } from "mongoose";


const registroSchema = new Schema({
    nombreApellido: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    contraseña:{
        type: String,
        required: true
    }
});


const Registro = mongoose.model("registro", registroSchema);

export default Registro;
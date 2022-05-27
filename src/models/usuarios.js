// modelamos el dato a guardar en la BD

import mongoose, { Schema } from "mongoose";


const usuarioSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    nombreDueño: {
        type: String,
        required: true
    },
    nombreMascota: {
        type: String,
        required: true
    },
    contraseña:{
        type: String,
        required: true
    },
    fecha: {
        type: String,
        required: true
    },
    celular: {
        type: String,
        required: true
    }
});


const Usuario = mongoose.model("usuario", usuarioSchema);

export default Usuario;
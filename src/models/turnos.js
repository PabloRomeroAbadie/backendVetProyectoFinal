// modelamos el dato a guardar en la BD

import mongoose, { Schema } from "mongoose";


const turnoSchema = new Schema({
    nombreDueño: {
        type: String,
        required: true
    },
    apellidoDueño: {
        type: String,
         required: true
    },
    nombreMascota: {
        type: String,
         required: true
    },
    raza: {
        type: String,
        required: true
    },
    veterinario: {
        type: String,
        required: true
    },
    horario: {
        type: String,
        required: true

    }
});


const Turno = mongoose.model("turno", turnoSchema);

export default Turno;
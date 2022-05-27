import mongoose, {Schema} from "mongoose";

const veterinarioSchema = new Schema({
    imgVeterinario:{
        Type:String
    },
    nombre:{
        type:String,
    },
    apellido:{
        type:String,
    },
    descripcion:{
        type:String
    }
})

const Veterinario = mongoose.model("veterinarios", veterinarioSchema);

export default Veterinario;
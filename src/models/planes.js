import mongoose, {Schema} from "mongoose";

const planesSchema = new Schema({
    planImg:{
        Type:String
    },
    planTitle:{
        type:String
    },
    planDescripcion:{
        type:String
    }
})

const Plan = mongoose.model("planes", planesSchema);

export default Plan;
import mongoose from "mongoose";

//const url = "mongodb://localhost:27017/rollingvet";
const url = "mongodb+srv://vetrolling:154064742aS@cluster0.wki4i.mongodb.net/vetrolling";

mongoose.connect(url)

const conexion = mongoose.connection;

conexion.once("open",()=>{
    console.log("BD conectada")
})

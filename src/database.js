import mongoose from "mongoose";

// const url = "mongodb://localhost:27017/rollingvet"
const url = "mongodb+srv://pabloabadie1995:pabloabadie95@clusterpablora.svsng.mongodb.net/rollingvet"

mongoose.connect(url)

const conexion = mongoose.connection;

conexion.once("open", ()=>{
    console.log("BD conectada")
})


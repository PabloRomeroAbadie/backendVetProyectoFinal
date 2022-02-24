import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import router from "./routes/servicios.routes";


//creo una instancia de express
const app = express();


//crear un puerto
app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"),()=>{
    console.log("estoy en el puerto " + app.get("port"));
})

// middlewares o configuraciones extras
app.use(morgan("dev")); //info extra en la terminal
app.use(cors()); // acepta peticiones remotas o externas 
//interpretar objetos en formato json 
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// aqui mostramos por defecto el index.html de la carpeta public
app.use(express.static(path.join(__dirname,"../public")));


// aqui van las rutas
app.use("/", router)
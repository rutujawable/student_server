import express  from "express"
import dotenv from "dotenv"
dotenv.config()
import mongoose from "mongoose"
import { getHealth } from "./controllers/Health.js"
import { postPlant ,
     getPlants,
     getPlantId,
     putPlantId,
    deletePlantId,} from "./controllers/Plants.js"
import { notFoundPage } from "./controllers/Errors.js"

const app = express()

app.use(express.json())

const dbConnection = async ()=>{
    const  conn = await mongoose.connect(process.env.mongoDB_URL)

    if (conn){
        console.log("mongodb connected☀")
    }
    else{
        console.log("mongodb not connected🌑")
    }
}
dbConnection();

const PORT = process.env.PORT




// app.get("/",(req,res)=>{

//     res.send("hii")
//     console.log(req)
//  })

// app.get("/student",(req,res)=>{

//     res.send("hello")
//  })


//  app.get("/about",(req,res)=>{

//     res.send("about")
//  })
    


    app.get('/health',getHealth)

    app.post('/plant', postPlant)
    
    app.get("/plants", getPlants)
    app.get("/plant/:id",getPlantId)
    app.put("/plant/:id",putPlantId)

    app.delete("/plant/:id",deletePlantId)

   

   app.use("*",notFoundPage)


     



  
 
app.listen(PORT, ()=>{

    console.log(`server is running on port ${PORT}`)




})


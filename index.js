import express  from "express"
import dotenv from "dotenv"
dotenv.config()
import { getHealth } from "./controllers/Health.js"
import { postPlant ,
     getPlants,
     getPlantId,
     putPlantId,
    deletePlantId,} from "./controllers/Plants.js"

const app = express()

app.use(express.json())

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

   

   app.use("*",(req,res)=>{
    res.send(`<div>
        <h1 style="text-align:center"> 404 not found</h1>
        </div>`)
   })


     



  
 
app.listen(PORT, ()=>{

    console.log(`server is running on port ${PORT}`)




})


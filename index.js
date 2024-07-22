import express  from "express"
import dotenv from "dotenv"
dotenv.config()

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
     const plants = [
        {
            "id":1,"plantname":"rose","cateogary":"flower","price":"50","height":"1.5","color":"pink"
         },
    
     {
        "id":2,"plantname":"sunflower","cateogary":"flower","price":"50","height":"1.5","color":"pink"
     },

     {
        "id":3,"plantname":"mango","cateogary":"fruits","price":"40","height":"1.5","color":"pink"
     }
    
    
    
    
    
    ]

app.post('/plant',(req,res)=>
    {
       const {
        name,
        cateogary,
        price,
        height,
        color

       }=req.body

       if(!name){
        return res.json({
            success:false,
            data:null,
            message:"name is required"
        })
       }

       if(!cateogary){
        return res.json({
            success:false,
            data:null,
            message:"cateogary is required"
        })
       }

       if(!price){
        return res.json({
            success:false,
            data:null,
            message:"price is required"
        })
       }
       if(!height){
        return res.json({
            success:false,
            data:null,
            message:"height is required"
        })
       }
       if(!color){
        return res.json({
            success:false,
            data:null,
            message:"color is required"
        })
       }


    const randomid= Math.round(Math.random()*1000)

    const newplant = {
        id:randomid,
        plantname:name,
        cateogary:cateogary,
        price:price,
        height:height,
        color:color
        
    }

    plants.push(newplant)


    res.json({
         success:true,
         data:newplant,
         message:"new plant added successfully"


    }
        


    )




}
    )


    app.get("/plants",(req,res)=>{

        res.json({
            success:true,
            data:plants,
            message:"all plants are fetched"
        })

    })
 app.get("/plant/:id",(req,res)=>{

 

  const {id} = req.params

  const plant = plants.find(
    (p)=>
         p.id == id
    

  )
    
    
  res.json({
    success:plant? true :false,
    data:plant || null,
    message:
    plant? "plant fetched successfully" :"plant not found"
  })
  })




  app.put("/plant/:id",(req,res)=>{
      const {id}= req.params
      const {
        name,
        cateogary,
        price,
        height,
        color

       }=req.body

      let index= -1
      plants.forEach((plant,i)=>{

         if( plant.id == id){
            index=i
         }
        })

         const newobj = {
            id:id,
            plantname:name,
            cateogary:cateogary,
            price:price,
            height:height,
            color:color
            
        }

         if(index==-1){
            return  res.json({
            success:false,
             data:null,
             message:`plant not found for id ${id}`

        
        })
         }

         else{
            plants[index]= newobj
           return  res.json({
                success:true,
                data:newobj,
                message:"plant updated successfully"
            })
         }

        })





   app.delete("/plant/:id",(req,res)=>
    {
        const {id}=req.params
        let index=-1

        plants.forEach((plant,i)=>{
            if(plant.id==id){
                index=i
            }
       

        })
        
        if(index==-1){
            res.json({
                success:false,
                message:`plant not found for  id ${id}`
            })
        }
        else{

            plants.splice(index,1)
            res.json({
                succes:true,
                message:"plant deleted successfully",
                data:null
            })


        }

    }


   )


     



  
 
app.listen(PORT, ()=>{

    console.log(`server is running on port ${PORT}`)




})


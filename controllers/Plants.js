
import Plant from "../models/Plant.js"


const postPlant =  async (req,res)=>
    {
       const {
        name,
        cateogary,
        price,
        height,
        color,
        image

       }=req.body




    const newPlant = new Plant({
        name:name,
        cateogary:cateogary,
        price:price,
        height:height,
        color:color,
        image:image
    })

    const savedplant = await newPlant.save();


    res.json({
         success:true,
         data:newPlant,
         message:"new plant added successfully"
}
 )
}

  const getPlants = async (req,res)=>{
    const allPlants = await Plant.find().sort({createdAt:-1})

    res.json({
        success:true,
        data:allPlants,
        message:"all plants are fetched"
    })

}

const getPlantId = async (req,res)=>{

 

    const {id} = req.params
  
   const plant = await Plant.findOne({_id:id})
      
  
    
      
      
    res.json({
      success:plant? true :false,
      data:plant || null,
      message:
      plant? "plant fetched successfully" :"plant not found"
    })
    }
  

    const putPlantId = async (req,res)=>{
        const {id}= req.params
        const {
          name,
          cateogary,
          price,
          height,
          color,
          image
  
         }=req.body
  
          const updatedPlant = await Plant.updateOne({_id:id},
            {$set:{
                name:name,
                cateogary:cateogary,
                price:price,
                height:height,
                color:color,
                image:image


            }
            }
          )

              res.json({
                  success:true,
                  data:updatedPlant,
                  message:"plant updated successfully"
              })
           }
  
          

          const deletePlantId = async (req,res)=>
            {
                const {id}=req.params

                 await Plant.deleteOne({_id:id})
                res.json({
                        succes:true,
                        message:"plant deleted successfully",
                        data:null
                    })
        
        
                }
        
            
        
    



export {postPlant, getPlants,getPlantId,putPlantId,deletePlantId}

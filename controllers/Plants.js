
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


const postPlant = (req,res)=>
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

  const getPlants = (req,res)=>{

    res.json({
        success:true,
        data:plants,
        message:"all plants are fetched"
    })

}

const getPlantId = (req,res)=>{

 

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
    }
  

    const putPlantId = (req,res)=>{
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
  
          }

          const deletePlantId = (req,res)=>
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
        
    



export {postPlant, getPlants,getPlantId,putPlantId,deletePlantId}

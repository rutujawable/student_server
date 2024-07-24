
const getHealth = (req,res)=>{
    res.json({
      success:true,
      message:"server is running successfully"
    })
}


export {getHealth}
import { Schema,model } from "mongoose";

const plantSchema = new Schema({
    name:String,
    cateogary:String,
    price:Number,
    height:Number,
    color:String

})

const Plant = model("Plant",plantSchema)

export default Plant;
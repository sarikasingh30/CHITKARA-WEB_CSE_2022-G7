const mongoose=require("mongoose")

const coursesSchema=new mongoose.Schema({
    name:{type:String , required:true},
    description:{ type:String},
    duration:{type:Number, required:true}
    
})
module.exports=mongoose.model("courses", coursesSchema)
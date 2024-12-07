const mongoose=require("mongoose")

const studentSchema=new mongoose.Schema({
    name:{type:String, required:true},
    age:{type:Number, required:true},
    marks:{type:Number, required:true, default:0}
})

const Student=mongoose.model("Student",studentSchema)

module.exports=Student
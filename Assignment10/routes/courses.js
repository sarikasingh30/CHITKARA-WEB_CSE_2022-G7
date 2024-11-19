const express=require("express")
const router=express.Router()
const Courses=require("../models/courses")
router.post("/",async(req,res)=>{
    try {
        const {name,description,duration}=req.body
        const newC=new Courses({name,description,duration})
        let Course=await newC.save()
        res.status(201).json({"data":Course})
    } catch (error) {
        res.status(400).json({"err":error})
    }
})
router.get("/",async(req,res)=>{
    try {
        
    } catch (error) {
        console.log(error)
    }
})

router.get("/:id", async(req,res)=>{
    const {id}=req.params
    // findById()
    try {
        
    } catch (error) {
        console.log(error)
    }
})

router.put("/:id", async(req,res)=>{
    const {id}=req.params
    const {name,age,marks}=req.body
    //findByIdAndUpdate(id, req.body)
    
})

router.delete("/:id", async(req,res)=>{
    const {id}=req.params
    // findByIdAndDelete()
    try {
       
    } catch (error) {
        console.log(error)
    }
    
})




module.exports=router
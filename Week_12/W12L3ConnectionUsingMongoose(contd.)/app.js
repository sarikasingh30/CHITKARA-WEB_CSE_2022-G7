const express=require("express")
const mongoose = require('mongoose');
const app=express()
const PORT=3030
app.use(express.json())
const Student=require("./models/students")

app.post("/students",async(req,res)=>{
    try {
        const {name,age,marks}=req.body
        const nStudent=new Student({name,age,marks})
        const sStudent=await nStudent.save()
        res.status(201).json({data:sStudent})
    } catch (error) {
        res.status(400).json({"err":error})
    }
})
app.get("/students",async(req,res)=>{
    try {
        let studentData=await Student.find()
        res.status(200).json({"data":studentData})
    } catch (error) {
        console.log(error)
    }
})

app.get("/students/:id", async(req,res)=>{
    const {id}=req.params
    // findById()
    try {
        let studentData=await Student.findById(id)
        res.status(200).json({"data":studentData})
    } catch (error) {
        console.log(error)
    }
})

app.put("/students/:id", async(req,res)=>{
    const {id}=req.params
    const {name,age,marks}=req.body
    //findByIdAndUpdate(id, req.body)
    
})

app.delete("/students/:id", async(req,res)=>{
    const {id}=req.params
    // findByIdAndDelete()
    try {
        let studentData=await Student.findByIdAndDelete(id)
        res.status(200).json({"data":studentData})
    } catch (error) {
        console.log(error)
    }
    
})



mongoose.connect('mongodb://127.0.0.1:27017/university')
  .then(() => {
    console.log('database Connected!')
    app.listen(PORT,(err)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log(`Listening on PORT ${PORT}`)
        }
    })
  }).catch((err)=>console.log(err));


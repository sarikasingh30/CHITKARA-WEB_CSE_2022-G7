const express=require("express")
const app=express()
const mongoose = require('mongoose');
const Student = require("./models/students");

app.use(express.json())

const PORT=8080

app.post("/students",async(req,res)=>{
    const {name,age,marks}=req.body
    const nStudent=new Student({name,age,marks})
    const SStudent=await nStudent.save()
    res.status(201).json({"data":SStudent})
})
app.get("/students",async(req,res)=>{
  try {
      let studentData=await Student.find()
      res.status(200).json({"data":studentData})
  } catch (error) {
      console.log(error)
  }
})

mongoose.connect('mongodb://127.0.0.1:27017/college')
  .then(() => {
    console.log('Database Connected!')
  }).catch((err)=>{
    console.log("Error in connection", err)
  })

  app.listen((err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(`Listening on PORT ${PORT}`)
    }
})

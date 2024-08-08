const express=require("express")
const router=express.Router()

let students=[
    "Ayush","Tina","Sam"
]


router.get("/",(req,res)=>{
    res.send(students)
})
router.post("/",(req,res)=>{
    let name=req.body.name
    students.push(name)
    res.redirect("/students")
})
module.exports=router
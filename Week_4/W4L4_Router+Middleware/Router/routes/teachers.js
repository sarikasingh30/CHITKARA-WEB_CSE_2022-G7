const express=require("express")
const router=express.Router()
const teachers=[
    "Sam",
    "Shivani",
    "Sonam",
    "Dev"
]
router.get("/",(req,res)=>{
    res.send(teachers)
})
router.post("/",(req,res)=>{
    let name=req.body.name
    teachers.push(name)
    res.redirect("/teachers")
})

module.exports=router
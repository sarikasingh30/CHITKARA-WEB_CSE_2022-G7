const express=require("express")
const mongoose=require("mongoose")
const jwt=require("jsonwebtoken")
const app=express()
const PORT=8080
const dotenv=require("dotenv")
const Users = require("./models/user")
const bcrypt=require("bcrypt")
dotenv.config()
app.use(express.json())

app.post("/signup",async(req,res)=>{
    const {username,password}=req.body
    try {
        let user=await Users.findOne({username})
        if(user){
            return res.send("Username already exists")
        }
        bcrypt.hash(password, 10, async function(err, hash) {
            let User=await Users.create({username,password:hash})
        });
        res.send("Successful SignUp")
    } catch (error) {
        console.log(error)
    }
})

app.post("/login",async(req,res)=>{
    const {username,password}=req.body
    try {
        let user=await Users.findOne({username})
        if(!user){
            return res.send("Username not exists / SignUp First")
        }
        bcrypt.compare(password, user.password, function(err, result) {
            if(result==true){
                const token=jwt.sign({
                    id:user._id,
                    username:user.username
                },process.env.JSON_WEBSECRET,{expiresIn:"1h"})
                return res.send({msg:"Successful Login, Welcome User",token})

            }else{
                return res.send("Invalid Credentials")
            }
        });
    } catch (error) {
        console.log(error)
    }
})
const authValidation=(req,res,next)=>{
    const token=req.headers.authorization?.split(" ")[1]
    if(!token){
        return res.send("No token provided")
    }
    jwt.verify(token, process.env.JSON_WEBSECRET, 
        function(err, decoded) {
        req.user=decoded
        next()
    });
      
}
app.get("/profile",authValidation,(req,res)=>{
    res.send("Welcome User to your Profile")
})

mongoose.connect(process.env.MONGO_URL)
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
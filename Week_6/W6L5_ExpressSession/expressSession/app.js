const express=require("express")
var session = require('express-session')
const path=require("path")
const app=express()
const PORT=8080
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,"public")))
app.use(express.json())
app.use(session({
    secret: 'g7 group',
    resave: false,
    saveUninitialized: true,
  }))

app.get("/",(req,res)=>{
    if(req.session.isAuth==true){
        return res.redirect("/profile")
    }
    res.redirect("/login")
})
app.get("/profile",(req,res)=>{
    res.sendFile(path.join(__dirname,"public/profile.html"))
})




app.get("/register",(req,res)=>{
    res.sendFile(path.join(__dirname,"public/register.html"))
})
app.get("/login",(req,res)=>{
    res.sendFile(path.join(__dirname,"public/login.html"))
})
app.post("/register",(req,res)=>{
    let {email,password}=req.body
    req.session.email=email
    req.session.password=password
    res.redirect("/login")
})

app.post("/login",(req,res)=>{
    let {email,password}=req.body
    if(req.session.email==email && req.session.password==password){
       req.session.isAuth=true
        return res.redirect("/")
    }
    res.redirect("/login")
})

app.get("/logout",(req,res)=>{
    req.session.destroy()
    res.redirect("/login")
})

app.listen(PORT,(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(`Listening on Port ${PORT}`)
    }
})
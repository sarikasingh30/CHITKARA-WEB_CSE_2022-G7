const express=require("express")
var session = require('express-session')
const path=require("path")
const app=express()
const PORT=8080
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,"public")))
app.use(express.json())

app.use(session({
    secret: 'group g7',
    resave: false,
    saveUninitialized: true,
}))
app.get("/",(req,res)=>{
    res.send("HomePage")
})
app.get("/register",(req,res)=>{
    res.sendFile(path.join(__dirname,"public/register.html"))
})
app.get("/login",(req,res)=>{
    res.sendFile(path.join(__dirname,"public/login.html"))
})

app.post("/register",(req,res)=>{
    let {email,password}=req.body
    console.log(req.session)
    req.session.email=email
    req.session.password=password
    console.log(req.session)
    res.redirect("/login")
})
app.post("/login",(req,res)=>{
    let {email,password}=req.body
    // compare email and password to the session's email and password

})


app.listen(PORT,(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(`Listening on Port ${PORT}`)
    }
})
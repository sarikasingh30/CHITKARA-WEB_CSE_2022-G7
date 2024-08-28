const express=require("express")
var session = require('express-session')
const path=require("path")
const app=express()
const registerHandler=require("./routes/register")
const profileHandler=require("./routes/profile")
const loginHandler=require("./routes/login")
const todosHandler=require("./routes/todos")
const PORT=8080
const authMiddleware=require("./middlewares/authMiddleware")
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,"public")))
app.use(express.json())
app.use(session({
    secret: 'group g7',
    resave: false,
    saveUninitialized: true,
}))
app.use("/register",registerHandler)
app.use("/login",loginHandler)
app.use("/profile",profileHandler)
app.use("/todos",todosHandler)
app.get("/",authMiddleware,(req,res)=>{
    return res.redirect("/profile")
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
const express = require("express")
const app = express()
PORT = 8080

function m1(req,res,next){
    console.log("Running Middleware 1")
    if(req.query.name=="sam"){
        return res.send("Its Done")
    }
    next()
}
function m2(req,res,next){
    console.log("Running Middleware 2")
    next()
}

// app.use(m1)
// app.use(m2)

app.get("/",m1,m2,(req,res)=>{
    res.send("Hello")
})
app.listen(PORT,(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(`Listening to PORT: ${PORT}`)
    }
})
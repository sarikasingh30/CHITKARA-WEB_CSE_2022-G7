const express=require("express")
const app=express()
const PORT=8080

function m1(req,res,next){
    console.log("Time:",Date.now())
    next()
}
app.use(m1)
app.get("/",(req,res)=>{
    res.send("Hello I am a GET Request")
})
// Error Occur Middleware
app.get("/error",(req,res)=>{
   next(err)
})
app.use((err, req, res, next) => {
    // console.error(err.stack)
    res.status(500).send('Something broke!')
})



app.listen(PORT,(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(`Listening on Port ${PORT}`)
    }
})
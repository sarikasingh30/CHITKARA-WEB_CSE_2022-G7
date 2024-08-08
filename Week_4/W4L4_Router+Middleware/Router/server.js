const express = require("express")
const app = express()
PORT = 8080
app.use(express.json())
const teacherHandler=require("./routes/teachers")
app.use("/teachers",teacherHandler)


app.listen(PORT,(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(`Listening to PORT: ${PORT}`)
    }
})
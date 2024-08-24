const express=require("express")
const app=express()
const path=require("path")
const PORT=8080
const multer  = require('multer')
app.use(express.static(path.join(__dirname,"public")))

const upload = multer({ dest: path.join(__dirname,'uploads') })

app.post('/profile', upload.single('avatar'),(req, res)=>{
    console.log(req.file)
    console.log(req.body)
    res.end("Uploaded Successfully")
   
  })
app.listen(PORT,(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(`Listening on PORT ${PORT}`)
    }
})
const express=require("express")
const app=express()
const path=require("path")
const PORT=8080
const multer  = require('multer')
app.use(express.static(path.join(__dirname,"public")))


var storage=multer.diskStorage({
    destination:(req,file,cb)=>{
            cb(null, path.join(__dirname,'uploads'))
        
    },
    filename:(req,file,cb)=>{
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})

function fileFilter(req,file,cb){
    if(file.mimetype.split("/")[0]=="image"){
        cb(null,true)
    }
    else{
        cb(null,false)
    }

}
// limits in bytes
const upload=multer({storage,limits:10000,fileFilter})

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
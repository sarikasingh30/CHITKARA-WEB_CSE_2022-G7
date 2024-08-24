const express=require("express")
const app=express()
const path=require("path")
const PORT=8080
const multer  = require('multer')
app.use(express.static(path.join(__dirname,"public")))


var storage=multer.diskStorage({
    // If folder already there, then pass a function 
    destination:(req,file,cb)=>{
        let extnsn=file.mimetype.split("/")[0]
        if(extnsn=="image"){
            cb(null, path.join(__dirname,'uploads/images'))
        }
        else{
            cb(null, path.join(__dirname,'uploads/others'))
        }
    },
    filename:(req,file,cb)=>{
        cb(null, `${file.originalname}-${Date.now()}`)
    }
    // The destination and the filename functions take
    //  three arguments - 
    //     the request object (req),
    //     the file object (file) and 
    //     a callback function(cb).
    //  The callback function takes two arguments: 
    //     error and 
    //     the name to be used for saving the file. 
})

// limits in bytes
const upload=multer({storage,limits:10000})

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
const express=require("express")
const path=require("path")
const app=express()
port=8080

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})



app.get("/about",(req,res)=>{
    res.sendFile(path.join(__dirname,'/index.html'),(err)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log("File Read")
        }
    })
    
})


app.listen(port,(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(`Listening to Port ${port}`)
    }
})
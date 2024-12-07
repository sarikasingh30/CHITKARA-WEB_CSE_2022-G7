const express=require("express")
const path=require("path")
const app=express()
const PORT=8080
app.set('view engine', 'ejs');
app.use(express.json())
app.use(express.urlencoded({extended:true}))

filepath=path.join(__dirname,"/views/index.ejs")

app.get("/",(req,res)=>{
    let name="Sam"
    let place="Hyderabad"
    res.render(filepath,{name,destination:place})
})



app.listen(PORT,(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(`Listening on PORT ${PORT}`)
    }
})


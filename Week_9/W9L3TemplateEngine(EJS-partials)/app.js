const express=require("express")
const path=require("path")
const app=express()
const PORT=8080
app.set('view engine', 'ejs');
app.use(express.json())
app.use(express.urlencoded({extended:true}))

filepath=path.join(__dirname,"/views/index.ejs")
filepathP=path.join(__dirname,"/views/products.ejs")
// app.get("/",(req,res)=>{
//     let name="Sam"
//     let place="Hyderabad"
//     res.render(filepath,{name,destination:place})
// })

let todos=[
"singing","dancing","cooking"
]
let products=[
    {name:"Laptop",price:34000},
    {name:"Electric Kettle",price:740},
    {name:"Ball",price:500}
]
app.get("/todo",(req,res)=>{
    res.render(filepath,{todos})
})

app.post("/todo",(req,res)=>{
    let {task}=req.body
    if(task){
        todos.push(task)
    }
    res.redirect("/todo")
})

app.get("/products",(req,res)=>{
    res.render(filepathP,{products})
})


app.listen(PORT,(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(`Listening on PORT ${PORT}`)
    }
})


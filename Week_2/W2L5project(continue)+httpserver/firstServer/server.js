const http=require("http")
let PORT=8080
const Server=http.createServer((req,res)=>{
    console.log(req)
    console.log(req.url)
    res.end("<h1 style=color:brown>Hello World</h1>")


})

Server.listen(PORT,(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(`Listening on port ${PORT}`)
    }
})
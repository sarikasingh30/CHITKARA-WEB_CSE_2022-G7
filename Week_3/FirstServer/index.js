const http= require("http")
const fs=require("fs")
let PORT=8080
let Server=http.createServer((req,res)=>{
    // console.log(req.url)
    // res.end("Hello Message")
    // res.end("<h1 style = color:blue >Hello Message</h1>")
    // let data=fs.readFileSync("index.html")
    // res.end(data)
    res.writeHead(200,{
        "Content-Type":"text/plain"
    })
    if(req.url == "/"){
        res.end("Home Page")
    }
    else if(req.url == "/about"){
        res.end("About page")
    }
    else if(req.url == "/contact/email"){
        res.end("Contact Via Email page")
    }
    else if(req.url == "/contact"){
        res.end("Contact page")
    }else{
        res.end("Error 404")
    }


})
Server.listen(PORT,(err)=>{
    if(err){
        console.log("err",err)
    }
    else{
        console.log(`Listening to Port ${PORT}`)
    }
})
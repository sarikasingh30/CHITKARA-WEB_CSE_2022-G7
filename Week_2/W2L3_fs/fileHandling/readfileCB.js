// Using Callback API
const fs=require("fs")
const path=require("path")

const filepath=path.join(__dirname,"/database/db.txt")
const filepath1=path.join(__dirname,"/database/data2.json")

// reading text file 
fs.readFile(filepath,"utf-8",(err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})

// reading json file
fs.readFile(filepath1,"utf-8",(err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(JSON.parse(data))
    }
})

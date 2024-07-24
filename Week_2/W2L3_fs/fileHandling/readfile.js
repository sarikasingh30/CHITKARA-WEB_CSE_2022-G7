// Using Promises API
const fspromises=require("fs/promises")
const path=require("path")
const filepath=path.join(__dirname,"/database/db.txt")
const filepath1=path.join(__dirname,"/database/data2.json")

// Reading Text File
fspromises.readFile(filepath,"utf-8").then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
})

// Reading JSON File
fspromises.readFile(filepath1,"utf-8").then((data)=>{
    console.log(JSON.parse(data))
}).catch((err)=>{
    console.log(err)
})
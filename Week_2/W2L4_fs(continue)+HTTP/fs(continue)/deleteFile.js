// // Using Promises API
const fspromises=require("fs/promises")
const path=require("path")
const filepath=path.join(__dirname,"/database/db.txt")
const filepath1=path.join(__dirname,"/database/db1.json")

// // Delete Text File
fspromises.unlink(filepath).then(()=>{
    console.log("File Deleted")
}).catch((err)=>{
    console.log(err)
})

// // Delete JSON File
fspromises.unlink(filepath1).then(()=>{
    console.log("File Deleted")
}).catch((err)=>{
    console.log(err)
})


let filepath2 = path.join(__dirname, "/database/data.txt")

fspromises.rm(filepath2)
.then(()=>{
    console.log("data.deleted")
})
.catch((err)=>{console.log(err)})


// Try rmdir also 

// (Know the difference between all the three :
// UNLINK , RM , RMDIR
// )
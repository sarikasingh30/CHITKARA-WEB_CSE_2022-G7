const fspromise = require("fs/promises")
const path = require("path")

let filepath = path.join(__dirname,"data.txt")
fspromise.appendFile(filepath,"\nsone more data...")
.then(()=>{
    console.log("Data appended")
})
.catch((err)=>{throw err})




















// // Using Promises API
// const fspromises=require("fs/promises")
// const path=require("path")
// const filepath=path.join(__dirname,"/database/db.txt")
// const filepath1=path.join(__dirname,"/database/db1.json")

// // Append / Updated Text File
// fspromises.appendFile(filepath,"Added using Promise API").then(()=>{
//     console.log("File Updated")
// }).catch((err)=>{
//     console.log(err)
// })

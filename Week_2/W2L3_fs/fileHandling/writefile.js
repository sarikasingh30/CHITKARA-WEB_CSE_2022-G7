// Using Promises API
const fspromises = require("fs/promises");
const path = require("path");
const filePath = path.join(__dirname, "/database/db.txt");
const filePath1 = path.join(__dirname, "/database/db1.json");

// Writing Text File
fspromises.writeFile(filePath, "Hi I am data promise file")
.then(() => {
    console.log("File Written ")
}).catch((err)=>{
    console.log(err)
});

// Writing JSON file
let data={
    name:"Sunny",
    roll:34
}
fspromises.writeFile(filePath1, JSON.stringify(data))
.then(() => {
    console.log("File Written ")
}).catch((err)=>{
    console.log(err)
});
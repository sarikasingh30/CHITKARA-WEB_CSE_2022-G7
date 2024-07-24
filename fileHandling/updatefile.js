const fs = require("fs/promises");
const path=require("path")
// console.log(__dirname)
// const filePath = __dirname + "/database/data.txt";
const filePath = path.join(__dirname ,"/database/data.txt");

let valS="I am appending data and updating file..."


fs.appendFile(filePath,valS).then(()=>{
        console.log("done...")
    }
).catch((err)=>console.log(err))
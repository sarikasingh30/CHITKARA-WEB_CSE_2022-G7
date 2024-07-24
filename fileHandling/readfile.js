const fs = require("fs/promises");
// console.log(__dirname)
const filePath = __dirname + "/database/data.json";

fs.readFile(filePath,"utf-8").then((data)=>{
    let val=JSON.parse(data)
    for(let key in val){
    console.log(key,":", val[key])
    }
}).catch((err)=>console.log(err))
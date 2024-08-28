const fs=require("fs")
const path=require("path")
module.exports.getTodos=(req,res)=>{
    let data=fs.readFileSync(path.resolve(__dirname,"../db.json"))
    console.log(JSON.parse(data))
    res.send(JSON.parse(data))
}
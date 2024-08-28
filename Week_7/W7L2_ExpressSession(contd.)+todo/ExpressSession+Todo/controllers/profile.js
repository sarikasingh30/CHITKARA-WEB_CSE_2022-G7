const path=require("path")
module.exports.getProfile=(req,res)=>{
    res.sendFile(path.resolve(__dirname,"../public/profile.html"))
}
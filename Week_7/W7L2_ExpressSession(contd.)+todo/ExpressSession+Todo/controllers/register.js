const path=require("path")
module.exports.getRegister=(req,res)=>{
    res.sendFile(path.resolve(__dirname,"../public/register.html"))
}
module.exports.postRegister=(req,res)=>{
    let {email,password}=req.body
    // console.log(req.session)
    req.session.email=email
    req.session.password=password
    // console.log(req.session)
    res.redirect("/login")
}
const path=require("path")
module.exports.getLogin=(req,res)=>{
    res.sendFile(path.resolve(__dirname,"../public/login.html"))
}
module.exports.postLogin=(req,res)=>{
    let {email,password}=req.body
    // compare email and password to the session's email and password
    if(req.session.email==email && req.session.password==password){
       req.session.isAuth=true
        return res.redirect("/")
    }
    res.redirect("/login")
}
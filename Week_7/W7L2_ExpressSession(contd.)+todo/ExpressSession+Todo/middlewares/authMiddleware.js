function authMiddleware(req,res,next){
    if(req.session.isAuth==true){
       return next()
    }
   res.redirect("/login")

}

module.exports=authMiddleware
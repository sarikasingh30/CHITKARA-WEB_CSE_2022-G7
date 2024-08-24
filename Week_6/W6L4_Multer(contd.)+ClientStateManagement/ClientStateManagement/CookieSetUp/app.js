const express = require("express");
const cookie = require("cookie");
const app = express();
const PORT = 8080;
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    var mycookies = cookie.parse(req.headers.cookie || '');
    console.log(mycookies.loggedIn)
    if(mycookies.loggedIn){
        res.redirect("/profile")
    }
    else{
        res.redirect("/login")
    }
    
});
app.get("/login",(req,res)=>{
    var mycookies = cookie.parse(req.headers.cookie || '');
    console.log(mycookies.loggedIn)
    if(mycookies.loggedIn){
        return res.redirect("/profile")
    }
    res.setHeader(
        "Set-Cookie",
        cookie.serialize("loggedIn", Boolean(true), {
          httpOnly: true,
          maxAge: 10
        })
      );
    res.send("Here is your Login Page")
})
app.get("/profile",(req,res)=>{
    var mycookies = cookie.parse(req.headers.cookie || '');
    console.log(mycookies.loggedIn)
    if(mycookies.loggedIn){
        res.send("You are inside App")
    }
    else{
        res.redirect("/login")
    }

})
app.get("/random",(req,res)=>{

})

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Listening on PORT ${PORT}`);
  }
});

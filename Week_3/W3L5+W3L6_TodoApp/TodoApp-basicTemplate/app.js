const express = require('express');
const app = express();
const path = require('path');
const PORT = 8080;

app.use(express.urlencoded({extended:true}));
app.use(express.json()); // otherwise Axios request could not be read
app.use(express.static(path.join(__dirname,'public')));

let todos=[{id:"1", name:"Task-1"},{id:"2", name:"Task-2"}]
app.get("/gettodos",(req,res)=>{

})

app.post("/addtodos",(req,res)=>{})
app.post("/deletetodos",(req,res)=>{})

app.listen(PORT, (err) => {
    if (err) {
      console.log("error", err);
    } else {
      console.log(`Listening on Port ${PORT}`);
    }
});
const express = require("express");
const { v4: uuidv4 } = require("uuid");
const app = express();
PORT = 8080;
app.use(express.json());
let users = [
  { id: "1", name: "Sam", group: "g7" },
  { id: "2", name: "Danny", group: "g6" },
];
// GET Request
app.get("/users", (req, res) => {
  res.send(users);
});

// POST Request
app.post("/users", (req, res) => {
  let { name, group } = req.body;
  let data = {
    id: uuidv4(),
    name: name,
    group: group,
  };
  users.push(data);
  res.redirect("/users");
});
// Single User
app.get("/users/:id", (req, res) => {
  let { id } = req.params;
  let user= users.find((el) => {
    if (el.id == id) return true;
  }); 
  if(user){
    res.status(200).send(user)
  }
  else{
    res.status(404).send("User Not found")
  }
});
// DELETE Method

app.delete("/users/:id",(req,res)=>{
   let {id}=req.params
   users=users.filter((el)=>{
    if(el.id==id)return false
    return true
   })
   res.redirect("/users")
})

// PUT and PATCH

app.put("/users/:id",(req,res)=>{
  let {id}=req.params
  let index
  index=users.findIndex((el)=>el.id==id)
  if(index!=-1){
    users[index]={id, ...req.body}
    res.status(200).redirect("/users")
  }
  else{
    res.status(404).send("User not found")
  }
})

// PATCH
app.patch("/users/:id",(req,res)=>{
  let {id}=req.params
  let index
  index=users.findIndex((el)=>el.id==id)
  if(index!=-1){
    users[index]={...users[index],...req.body}
    res.status(200).redirect("/users")
  }
  else{
    res.status(404).send("User not found")
  }
})




app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Listening to Port ${PORT}`);
  }
});

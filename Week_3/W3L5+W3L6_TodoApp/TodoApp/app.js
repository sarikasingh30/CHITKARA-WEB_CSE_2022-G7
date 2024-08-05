const express = require("express");
const app = express();
const { v4: uuidv4 } = require("uuid");
const path = require("path");
const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // otherwise Axios request could not be read
app.use(express.static(path.join(__dirname, "public")));

let todos = [
  { id: "1", name: "Task-1"},
  { id: "2", name: "Task-2"},
];

app.get("/gettodos", (req, res) => {
  res.send(todos);
});

app.post("/addtodos", (req, res) => {
  // const name=req.body.name
  const { name} = req.body;
  todos.push({
    id: uuidv4(),
    name,
  });
  // res.send("/")
  res.redirect("/gettodos")
});

app.post("/deletetodos", (req, res) => {
  const {id}=req.body
  todos=todos.filter((el)=>{
        if(el.id==id) return false
        return true 
  })
  res.redirect("/gettodos")
});


// POST REQUEST TO ADD TODOS HAVING MORE THAN 1 ENTRY
// app.post("/addtodos", (req, res) => {
//   // const name=req.body.name
//   const { name, isCompleted } = req.body;
//   val=isCompleted=="true"?true:false
//   todos.push({
//     id: uuidv4(),
//     name,
//     isCompleted:val
//   });
//   res.redirect("/gettodos")
// });


app.listen(PORT, (err) => {
  if (err) {
    console.log("error", err);
  } else {
    console.log(`Listening on Port ${PORT}`);
  }
});

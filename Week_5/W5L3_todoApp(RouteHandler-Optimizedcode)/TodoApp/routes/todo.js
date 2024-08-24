const express=require("express")
const router=express.Router()
const { v4: uuidv4 } = require('uuid');
let todos = [
    { id: "1", name: "Task-1"},
    { id: "2", name: "Task-2"},
  ];

router.get("/gettodos", (req, res) => {
    res.send(todos)
  });

router.post("/addtodos", (req, res) => {
    const {name}=req.body
    todos.push({
      id:uuidv4(),
      name
    })
    res.redirect("/gettodos")

});

router.post("/deletetodos", (req, res) => {
    const {id}=req.body 
    todos=todos.filter((el)=>{
      if(el.id==id) return false
      return true
    })
    res.redirect("/gettodos")
});

router.post("/increasepriority",(req,res)=>{
  const{id}=req.body
  const index=todos.findIndex(el=> el.id===id);
  if(index>0){
    [todos[index],todos[index-1]]=[todos[index-1],todos[index]]
  }
  console.log(todos)
  res.redirect('/gettodos')  
})

router.post("/decreasepriority",(req,res)=>{
  const{id}=req.body
  const index=todos.findIndex(el=> el.id===id);
  if(index<(todos.length-1)){
    let temp=todos[index]
    todos[index]=todos[index+1]
    todos[index+1]=temp
  }
  res.redirect('/gettodos')  
})
module.exports=router
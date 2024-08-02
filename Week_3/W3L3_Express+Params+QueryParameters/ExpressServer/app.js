const express = require("express");
const app = express();
const path = require("path");
const PORT = 5000;

pathName = path.join(__dirname, "/index.html");

// npm i -g nodemon --> -g means it is installed globally

app.get("/", (req, res) => {
  res.send("I am home page");
});
app.get("/about", (req, res) => {
  res.send("I am about page");
});
app.get("/contact", (req, res) => {
  res.sendFile(pathName, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("File Read");
    }
  });
});

//PARAMS
// http://localhost:8080/wish/sam
// http://localhost:8080/wish/sam/noon
app.get("/greet/:name/:day", (req, res) => {
  console.log(req.params);
  res.send(`<h1>Hello ${req.params.name}, Good ${req.params.day}</h1>`);
});

//QUERY PARAMETERS
// http://localhost:5000/wish?name=sam
// http://localhost:5000/wish?name=sam&day=morning
// http://localhost:5000/wish?name=sam&day=morning&voting=true
app.get("/wish", (req, res) => {
  // console.log(typeof(!!req.query.voting));
  let x=Boolean(req.query.voting)
  console.log(x)
  // if (req.query.voting==true) {
  //   res.send(`<h1>Hello ${req.query.name},
  //   day ${req.query.day}, You Are Eligible</h1>`);
  // }
  // else if(req.query.voting==false){
  //   res.send(`<h1>Hello ${req.query.name},
  //       day ${req.query.day}, You Are Not Eligible</h1>`);
  // }
});

app.listen(PORT, (err) => {
  if (err) {
    console.log("err:", err);
  } else {
    console.log(`Listening to port ${PORT}`);
  }
});

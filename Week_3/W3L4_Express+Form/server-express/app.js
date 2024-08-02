const express = require("express");
const app = express();
const PORT = 8080;
const path = require("path");

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
// Read File 
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"), (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("file created");
    }
  });
});
app.get("/greet", (req, res) => {
    
      console.log(req.query);
      res.send(`<h1>Hello! ${req.query.name}</h1>`)
    
  });

  app.post("/greet", (req, res) => {
    
    console.log(req.body);
    // res.send(`<h1>Hello! ${req.query.name}</h1>`)
    res.send(`<h1>Hello! ${req.body.name}</h1>`)
  
});




app.listen(PORT, (err) => {
  if (err) {
    console.log("error", err);
  } else {
    console.log(`Listening on Port ${PORT}`);
  }
});

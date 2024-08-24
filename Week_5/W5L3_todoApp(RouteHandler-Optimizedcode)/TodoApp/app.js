const express = require("express");
const app = express();
const path = require("path");
const PORT = 8080;
const todoHandler=require("./routes/todo")
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // otherwise Axios request could not be read
app.use(express.static(path.join(__dirname, "public")));
app.use("/",todoHandler)
app.listen(PORT, (err) => {
  if (err) {
    console.log("error", err);
  } else {
    console.log(`Listening on Port ${PORT}`);
  }
});

const express = require("express");
const app = express();
const path = require("path");
const PORT = 5000;


app.use(express.static('public'))

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"), (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("File Read");
    }
  });
});


app.listen(PORT, (err) => {
  if (err) {
    console.log("err:", err);
  } else {
    console.log(`Listening to port ${PORT}`);
  }
});

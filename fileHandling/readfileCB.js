const fs = require("fs");
// console.log(__dirname)
const filePath = __dirname + "/database/datacb.txt";

fs.readFile(filePath,"utf-8", (err,data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
const fs = require("fs");
// console.log(__dirname)
const filePath = __dirname + "/database/datacb.txt";

fs.writeFile(filePath, "Hi ! I am a file 2.", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("done");
  }
});

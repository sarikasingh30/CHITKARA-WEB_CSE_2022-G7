const fsPromise = require("fs/promises");
// console.log(__dirname)
const filePath = __dirname + "/database/data.txt";

fsPromise
  .writeFile(filePath, "Hi ! I am a file.")
  .then(() => console.log("Written......"))
  .catch((err) => {
    console.log(err);
  });
let file2Path=__dirname+"/database/data.json"
let dataObj={
    "name":"Sam",
    "age":78,
    "city": "Rajpura"
}

fsPromise.writeFile(file2Path,JSON.stringify(dataObj)).then(()=>{
    console.log("file2....Written")
}).catch((err)=>{
    console.log(err)
})
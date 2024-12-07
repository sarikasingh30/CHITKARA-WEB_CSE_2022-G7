const express=require("express")
const app=express()
const PORT=8080
const { MongoClient } = require('mongodb');

app.use(express.json())
// Connection URL
const url = 'mongodb://localhost:27017';
// const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

let db 

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to db server');
  db = client.db("test");

  // the following code examples can be pasted here...

  return 'done.';
}

function getDB(){
    if(db!==undefined) return db
    return null
}

app.post("/students",async(req,res)=>{
    const {name,age,marks}=req.body
    const db=getDB()
    console.log(db)
    let students=db.collection("students")
    let st=await students.insertOne({
        name,
        age,
        marks
    })
    res.send({message:"Added Successfully",data:st})
})
app.get("/students",async(req,res)=>{
    const db=getDB()
    console.log(db)
    let students=db.collection("students")
    let st=await students.find().toArray()
    res.send({message:"Added Successfully",data:st})
})

main()
  .then(()=>{
    app.listen(PORT,(err)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log(`Listening on PORT ${PORT}`)
        }
    })
  })
  .catch((err)=>{
    console.log(err)
  })





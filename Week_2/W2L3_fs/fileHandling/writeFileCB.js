// Using Callback API
const fs=require("fs")
const path=require("path")
// console.log(__dirname)
let filePath2=path.join(__dirname,"/database/data2.json")
let filePath1=path.join(__dirname,"/database/data1.txt")

// Writing text File

fs.writeFile(filePath1,"Hi... I am callback file",(err)=>{
    if(err){
        console.log("err",err)
    }
    else{
        console.log("File Written")
    }
})



// Writing JSON File
let val={
    name:"Sam",
    age:23,
    roll:567
}
fs.writeFile(filePath2,JSON.stringify(val),(err)=>{
    if(err){
        console.log("err",err)
    }
    else{
        console.log("File Written")
    }
})
































// fs.writeFile("data.txt","Hi I am text file",(err)=>{
//     if(err){
//         console.log("err",err)
//     }
//     else{
//         console.log("File Written")
//     }
// })


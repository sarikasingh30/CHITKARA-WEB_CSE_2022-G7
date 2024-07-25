// # Way 1
const fs=require("fs")
const path=require("path")
function generateRandomNumbers() {
    const randomNumbers = [];
    for (let i = 0; i < 50; i++) {
        const randomNumber = Math.floor(Math.random() * 101);
        randomNumbers.push(randomNumber);
    }
    
    return randomNumbers;
}

filePath=path.join(__dirname,"data1.json")
filePath2=path.join(__dirname,"data2.json")

let ans1= generateRandomNumbers();
let ans2= generateRandomNumbers();

//write
fs.writeFileSync(filePath,JSON.stringify(ans1))
fs.writeFileSync(filePath2,JSON.stringify(ans2))

// read
let data1=JSON.parse(fs.readFileSync(filePath,"utf-8"))
let data2=JSON.parse(fs.readFileSync(filePath2,"utf-8"))
function mergeAndSort(data1,data2){
    let data=[...data1, ...data2]
    data.sort((a,b)=>a-b)
    return data
}
let output=mergeAndSort(data1,data2)
filePath3=path.join(__dirname,"output.json")

fs.writeFileSync(filePath3,JSON.stringify(output))

// ......................................................







// ..................................................
// # Way 2
// const fs = require('fs/promises')
// const path = require('path')

// let path1 = path.join(__dirname,'/file1.txt')
// let path2 = path.join(__dirname,'/file2.txt')
// let path3 = path.join(__dirname,'/file3.txt')

// let arr1 = []
// for(let i=1;i<=50;i++){
//     arr1.push(i)
// }
// let arr2 = []
// for(let i=11;i<=60;i++){
//     arr2.push(i);
// }

// async function writeAndMerge(){
//     try{
//         fs.writeFile(path1,arr1.toString());
//         fs.writeFile(path2,arr2.toString());

//         const data1 = await fs.readFile(path1,'utf8')
//         const data2 = await fs.readFile(path2,'utf8')
//         console.log(typeof(data1), typeof(data2))
//         const array1 = data1.split(',').map(Number)
//         const array2 = data2.split(',').map(Number)
//         console.log(array1, array2)

//         const mergeArray = [...array1,...array2]
//         console.log(mergeArray)

//         mergeArray.sort((a,b) => a-b)
//         console.log(mergeArray)

//         fs.writeFile(path3,mergeArray.toString(),(err)=>{
//             if(err){
//                 console.log(err)
//             }
//             else{
//                 console.log("written")
//             }
//         })
       
//     }   catch(error){
//         console.log('failed',error)
//     }
    
// }
// writeAndMerge()







































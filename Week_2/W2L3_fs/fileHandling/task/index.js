function generateRandomNumbers() {
    const randomNumbers = [];
    for (let i = 0; i < 50; i++) {
        const randomNumber = Math.floor(Math.random() * 101);
        randomNumbers.push(randomNumber);
    }
    
    return randomNumbers;
}
const fs=require("fs")
const path=require("path")
filePath=path.join(__dirname,"data1.json")
filePath2=path.join(__dirname,"data2.json")

let ans1= generateRandomNumbers();
let ans2= generateRandomNumbers();
console.log(ans1,ans2);
fs.writeFile(filePath,JSON.stringify(ans1),(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("kkkkDone")
    }
})

fs.writeFile(filePath2,JSON.stringify(ans2),(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("kkkkDone")
    }
})
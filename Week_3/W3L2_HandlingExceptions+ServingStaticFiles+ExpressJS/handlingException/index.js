const fs=require("fs")


function main(){
   try {
    const data=fs.readFileSync("index.html")
    console.log(data)
   } catch (error) {
    console.log(error)
   }
}

main()
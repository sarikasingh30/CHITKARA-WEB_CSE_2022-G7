const Jimp=require("jimp")
const fs=require("fs")
function compressAndConvert() {
  return Jimp.read("img.png")
    .then((lenna) => {
      return lenna
        .resize(256, 256) // resize
        .quality(60) // set JPEG quality
        .greyscale() // set greyscale
        .getBufferAsync(Jimp.MIME_PNG); // Returns Promise
    })
    .catch((err) => {
      console.error(err);
    });
}

let file=compressAndConvert()

file.then((data)=>{
    data=data.toString("base64")
    fs.writeFileSync("img.txt",data,'utf8')
    
}).catch((err)=>{
    console.log(err)
})

let star=fs.readFileSync("img.txt","utf-8")
let data=Buffer.from(star,"base64")
fs.writeFileSync("imagnew.png",data)
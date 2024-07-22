// Callback.......................... 
// 1.

    // setTimeout(()=>{
    //     console.log("Hii1")
    // },5000)


    // setTimeout(()=>{
    //     console.log("Hii")
    // },5000)

// abc()
// def()
// ......................................
// 2.
// function def(){
//     setTimeout(()=>{
//         console.log("Hii1")
//     },5000)
// }
// function abc(cb){
//     setTimeout(()=>{
//         console.log("Hii")
//         cb()
//     },5000)
// }
// abc(def)

// real life useCase................

function download(cb){
    console.log("Download Starts")
    setTimeout(()=>{
        console.log("Download Ends...")
        cb(upload)
    },2000)
} // 2sec
function compress(cb){
    console.log("Compress Starts")
    setTimeout(()=>{
        console.log("Compress Ends...")
        upload()
    },2000)
} // 2sec
function upload(){
    console.log("Upload Starts")
    setTimeout(()=>{
        console.log("Upload Ends...")
    },2000)
} // 2sec
download(compress)
// .................................


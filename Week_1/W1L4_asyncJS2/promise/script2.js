// Yeh function promise kar raha hai movie download 
// krke dega 
// - FulFill: Movie download ho gai
// - Rejected: Movie due to any reason 
// download nahi ho paai 



// function downloadMovie (url) {
//     return new Promise(function (resolve, reject) {
//         let ext = url.split('/').pop().split('.').pop(); 
//         if(ext != 'mp4'){
//             reject("Sahi URL dedo");
//         }
//         else {
//             setTimeout(function(){
//             resolve(url.split('/').pop());
//             }, 2000);
//         }
//     })
// }
// // downloadMovie function ek promise return krta hai, 
// // downloadMovie is a promise 
// downloadMovie('myurl.com/avengers.mp4')
// .then(function(movie){
// console.log(movie);
// }).catch(function (err) {
// console.log(err);
// })



// ....................................................
// download => compress => upload (PROMISE CHAINING)
// ....................................................
function downloadMovie (url) {
    return new Promise(function (resolve, reject) {
        let ext = url.split('/').pop().split('.').pop(); 
        if(ext != 'mp4'){
            reject("Sahi URL dedo");
        }
        else {
            setTimeout(function(){
            resolve(url.split('/').pop());
            }, 2000);
        }
    })
}
// downloadMovie function ek promise return krta hai, 
// downloadMovie is a promise 

function compressMovie (file) {
    return new Promise(function (resolve, reject) {
        setTimeout(function(){
            let compressedM = file.split('.')[0]+".zip"; 
            console.log("filecompressed",compressedM)
            resolve(compressedM);
        }, 2000);
        
    })
}

function uploadMovie (file) {
    return new Promise(function (resolve, reject) {
        setTimeout(function(){
            let newLink= "www.newSite.com/"+file; 
            console.log("file uploaded",newLink)
            resolve(newLink);
        }, 2000);
        
    })
}

downloadMovie('myurl.com/avengers.mp4')
.then(function(movie){
console.log(movie);
return movie
}).then(compressMovie)
.then(uploadMovie)
.catch(function (err) {
console.log(err);
})







let bringMaggi=new Promise(function(resolve,reject){
    setTimeout(function(){
        let shopOpen=false
        if(shopOpen){
            resolve("Maggi mil gyi !!!!!")
        }
        else{
            reject("Maggi Nahi Mili ...")
        }
    },5000)
})
bringMaggi.then(function(data){
    console.log(data)
}).catch(function(msg){
    console.log(msg)
})

// ......................................

// function maggiLeneGya(){
//     return new Promise(function(resolve,reject){
//          setTimeout(function(){
//              let shopOpen=true
//              if(shopOpen){
//                  resolve("Maggi mil gyi !!!!!")
//              }
//              else{
//                  reject("Maggi Nahi Mili ...")
//              }
//          },5000)
//      })
//  }
//  maggiLeneGya.then().catch()
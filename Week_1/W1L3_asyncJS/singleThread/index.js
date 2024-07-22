// endTime - startTime >=1 sec

function delay1(){
    let currentTime=new Date().getTime()
    while(new Date().getTime()-currentTime<1000){
    }
}
function delay(n){
    for(let i=0;i<n;i++){
        delay1()
    }
}
delay(5)
console.log("Hello")

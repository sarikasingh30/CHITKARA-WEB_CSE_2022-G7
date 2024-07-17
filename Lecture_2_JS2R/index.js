// Hoisting
console.log(x)
sayHello()
var x
function sayHello(){
    console.log("Hello")
}
x=90
console.log(x)
sayHello()



// Higher Order Function

function abc(a,b){
    return a+b
}
console.log(abc(3,4))

// MAP FUNCTION
// arr=[1,2,3,4]
// let xa=arr.map((el)=> el*2)
// console.log(arr)
// console.log(xa)

// Filter 
arr=[1,2,3,4]
// let ans=arr.filter((el)=>el>2)
// console.log(ans)

// ForEach

// const a1 = ['a', 'b', 'c'];

// a1.forEach((el) => console.log(el));
// console.log(a1)
// arr=[1,2,3,4]


// Reduce 
let sum=arr.reduce((acc,curr)=>{
    acc=acc+curr
    return acc
},0)
console.log(sum)



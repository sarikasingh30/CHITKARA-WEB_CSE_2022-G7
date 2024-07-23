// object clone(copy)

// DEEP COPY vs SHALLOW COPY
let obj = {
  a: 2,
  b: 4,
  c: "GFDsasd",
  d: { e: 1, f: { hj: 32, ik: 12 },
   g: 45 },
};
// let obj1 = obj;
// console.log(obj,obj1)
// obj1.a = "erer";
// console.log(obj,obj1)

let obj2 = Object.assign({},obj);
console.log("obj:",obj,"obj2",obj2)
obj2.a="2321"
console.log("obj:",obj,"obj2",obj2)
obj2.d.f.ik = 99;
console.log(obj2,obj)
console.log(obj.d.f.ik, obj2.d.f.ik)


let obj3={...obj}
console.log(obj3,obj)
obj3.d.f.ik = 9921
console.log(obj3,obj)


// obj3 = JSON.stringify(obj);
// obj3 = JSON.parse(obj3);
// obj3.d.f.ik = 9909;

// console.log(obj3, obj);
// // clone deep

const lodash = require("lodash");
let x = { a: 1, b: 2, c: 3, d: { e: 1, f: { g: 1 } } };
let y = lodash.cloneDeep(x);
y.d.f.g = 56;
console.log(x, y);

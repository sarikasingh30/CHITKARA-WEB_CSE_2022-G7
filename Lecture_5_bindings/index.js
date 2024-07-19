function hello(){
    console.log(this)
}
hello()










// IMPLICIT BINDING
let obj={
    a:1,
    b:2,
    fun:function(){
        console.log("Hello", this.a)
    }
}
obj.fun()


//  EXPLICIT BINDING

function hello1(country, state){
    console.log("Name",this.name)
    console.log("Hobby",this.hobby,country,state)
}
let person1={
    name:"Sam",
    hobby:"Swimming"
}

hello1.call(person1)
hello1.call(person1,"India","Delhi")
let person2={
    name:"Sanya",
    hobby:"Dancing"
}
let x=hello1.bind(person2,"India","Delhi")
hello1.call(person2,"India","Delhi")
hello1.apply(person2,["India","Delhi"])
x()

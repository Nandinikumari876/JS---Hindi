// primitive

//7 types : string,number,bollean,null,undefined,symbol,bigint


// non -primitiv(refrence)

//array,objects,functions 
// const score=100
// const scoreValue=100.3 //=> number
// const isLoggedIn=false
// const outSideTemp=null //=> object
// let useremail;
// const id= Symbol('123')
const anotherId= Symbol('123')

// console.log(id=== anotherId); //=> false

const heroes =["shak","nag","doga"]
let myObj={
name:"nan",
age:20,

}
console.log( typeof heroes); //=>object
console.log(typeof anotherId);  //=>object

 const myFunction = function (){
    console.log("hello world");
 }

console.log(typeof myFunction);
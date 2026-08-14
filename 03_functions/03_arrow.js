// const user={
//     username:"nandini",
//     price:999,
//     welcomeMessage:function(){
//         console.log(`${this.username},welcome to website`);
//         // console.log(this);
//     }
// }
// // user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()
//console.log(this);

// function chai(){
//     let username="nan"
//     console.log(this.username);
// }
// chai()

// const chai = function(){
//     let username ="nandini"
//     console.log(this.username)
// }
//chai()
//const addtwo=(num1,num2) =>  ( num1 + num2 )
   
const addtwo=(num1,num2) =>  ({username:"nan"} )
   
console.log(addtwo(4,5))

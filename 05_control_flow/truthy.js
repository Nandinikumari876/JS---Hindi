// const useremail="n@gmail.ai"
// if(useremail) {
//     console.log(" got user email")
// } else{
//     console.log(" dont have user email")
// }

// falsy values
// false,0,-0,bigint 0n,"",null,nan


// truthy values
// "0","false"," ",{},[],function(){}


// const useremail=[]

// if(useremail.length === 0){
//     console.log(" array is empty");
// }

// const emptyObj = {}
// if (Object.keys(emptyObj).length===0){
//     console.log(" object is empty");
// }


// Nullish calescing operator (??): null undefined
// let val1;
//val1 =  5 ?? 10
//val1 = null ?? 23
//val1 = undefined ?? 56
// val1 = null ?? 20 ?? 90
// console.log(val1);

// terniary operator

// condition ? true : false

const iceteaprice = 100
iceteaprice <= 80 ? console.log(" less than 80") : console.log(" more than 80")
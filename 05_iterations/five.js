const coding=["js","ruby","python","java","cpp"]

// coding.forEach( function (val){
// console. log(val);
// })  --->> normal function

// coding.forEach((item) => {
// console.log(item);
// }

// ) --->> arrow function

// function printme(item){
//     console.log(item);
// }

// coding.forEach(printme)

// coding.forEach((item,index,arr) => {
// console.log(item,index,arr);
// }
// )


const mycoding=[
    {
        languagename:"javascipt",
        languagefilename:"js"
    },
    {
        languagename:"java",
        languagefilename:"js"
    },
    {
        languagename:"python",
        languagefilename:"py"
    }

]

mycoding.forEach((item) => {
    console.log(item)
})
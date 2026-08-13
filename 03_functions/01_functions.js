function sayMyName(){
    console.log("n");
    console.log("a");
    console.log("n");
    console.log("d");
    console.log("i");
    console.log("n");
    console.log("i");

}
// sayMyName()

function addTwoNumber(number1,number2){
 // let result=number1+number2
 // return result
 return number1+number2
  
}
//  const result = addTwoNumber(3,5)
//  console.log("result:",result)


function loginUserMessage(username){
    // if(username===undefined){
    //     console.log("please enter a userneme")
    //     return

    // }
    if(!username){
        console.log("please enter a userneme")
        return

    }
    return `${username} just loggen in`
}
//console.log(loginUserMessage("nandini"))
//console.log(loginUserMessage())

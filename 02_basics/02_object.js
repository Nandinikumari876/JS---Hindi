//singleton

// object literals

const mySym=Symbol("key1")
const JsUser ={
    name:"nan",
    [mySym]:"hello",
    age: 20,
    location : "india",
    email :"nan@goggle.com"
}
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser[mySym])

JsUser.email="nan@chatgpt.com"
//Object.freeze(JsUser)
console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello JS user");
}
console.log(JsUser.greeting())

JsUser.greetingTwo = function(){
    console.log(`hello JS user,${this.name}`);
}
console.log(JsUser.greetingTwo())


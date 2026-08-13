const instaUser = new Object()
//const instaUser = {}

instaUser.id="123abc"
instaUser.name="sammy"
instaUser.logIn=false
//console.log(instaUser);

const regularUser={
    email:"sammy@gmail.com",
    userFullname:{
        firstName:"sammy",
        lastName:"desouza"
    }

}
//console.log(regularUser.fullname.userFullname.firstName);

const obj1={1: "a",2: "b"}

const obj2={3: "a",4: "b"}

//const obj3 = {obj1,obj2}
//const obj3 = Object.assign(obj1,obj2)//=>min use
const obj3={...obj1,...obj2} //=> mainly  use
console.log(obj3);

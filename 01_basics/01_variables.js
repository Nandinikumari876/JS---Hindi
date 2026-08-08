const accountId = 11435
let accountEmail ="nandnienterprises1@gmail.com"
var accountPassword ="1234"
accountCity = "jaipur"

// accountId = 2
 accountEmail ="nan@gmail.com"
accountPassword ="4321"
accountCity = "rajasthan"
let accountState;

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
/*prefer not to use var
because of issue in block scope and function scope*/
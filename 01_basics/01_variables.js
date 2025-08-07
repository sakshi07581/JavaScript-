const accountId=14567
let accountEmail="sakshi12@gmail.com"
var accountPassword="sakshi123"
accountCity ="Birgunj"
//  accountId=2 //not allowed

accountEmail="sak@g.com"
accountPassword="sak12"
accountCity="kathmandu"
let accountState;

console.log(accountId);

/*
prefer not to use var 
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

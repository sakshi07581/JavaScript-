const name = "sakshi"
const repoCount =  7

const gameName = new String ('sakshi-sk-com') //another way to declare string 

// console.log(name +  repoCount + " value"); //outdated syntax

// console.log(`My name is ${name} and my repo count is ${repoCount}`);

// console.log(gameName[3]); //access key value
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(3)); //determine the character
// console.log(gameName.indexOf('h')); //determine the position of character
 
const newString = gameName.substring(0,5) //it doesnot give reverse value 
// console.log(newString);

const anotherString = gameName.slice(-5,3) //it gives the neg character i.e reverse value
// console.log(anotherString);

const newStringOne ="     sakshi     "
// console.log(newStringOne);
// console.log(newStringOne.trim()); //trim remove the unwanted space

const url = "https://sakshi.com/sakshi%20karna"
// console.log(url.replace('%20','_'));

// console.log(url.includes('sakshi')); //true
// console.log(url.includes('shri'));  //false


console.log(gameName.split('-'));

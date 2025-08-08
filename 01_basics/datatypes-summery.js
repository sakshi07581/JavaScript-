/*
    #primitive
        7 types:String,Number,Boolean,Null,Undefined,Symbol,BigInt.
        
    #non-primitive(Reference)
        Array,Objects,Functions

    Js is dynamically typed language which means that data types of variable are determined by the value they hold at runtime and can change throughout the program as we assign different value to them.
*/

const score = 100
const scorevalue  = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

//symbol
const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);

const bigNumber = 486579898647645764n

//array
const books = ["English","Math","DBMS"]
let myObj = {
    name :'sakshi',
    age : 24,
}

//function
const myFunction = function(){
    console.log("Hello Sakshi");
}

//typeof (determine the datatypes)

//console.log(typeof bigNumber);

//console.log(typeof outsideTemp); //object (in typeof null always gives ouyput in object)

//console.log(typeof scorevalue);

// console.log(typeof myFunction); //function

// console.log(typeof myObj); //object

//https://262.ecma-international.org/5.1/#sec-11.4.3


//*************Memory*************

//stack = IN stack Memroy primitive type is used (it gives copy)
//Heap = In Heap Memory non-primitive type is used(it gives reference)


let myName = "sakshi"
let anotherName = myName
anotherName="hello sakshi"

console.log(myName);
console.log(anotherName);

let userOne={
    email:"sakshi12@gmail.com",
    upi:"sakshi@yb1"
}

let userTwo = userOne

userTwo.email="shri@google.com"

console.log(userOne.email); // shri@google.com
console.log(userTwo.email); //shri@google.com


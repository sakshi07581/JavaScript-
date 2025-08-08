// console.log(2>3); //false
// console.log(2==3); //false
// console.log(2<3); //true
// console.log(2>=3); //false
// console.log(2<=3); //true


// console.log("2">1); //true
// console.log("02">1); //true

console.log(null>0); //false
console.log(null==0); //false
console.log(null>=0); //true
/*
    The reason is that an equality check == and comparisions 
    >,<,<=,>= works differently.
    Comparision convert null to number , treating it as 0.
    That's why null>=0 is true and null>0 is false.
 */








let name  = "Rahul";
let surname = "Meena";

console.log(`Hello my name is  ${name} and my surname is ${surname}`);

const gameName = new String('Rahul - Meena'); // String object

//console.log(gameName[2]);
//console.log(gameName.length);

//console.log(gameName.__proto__); // String prototype
//console.log(gameName.__proto__.__proto__); // Object prototype

console.log(gameName.charAt(0)); // charAt method
console.log(gameName.indexOf('u')); // indexOf method

let newString = gameName.substring(0, 2); // substring method
console.log(newString);

let anotherString = gameName.slice(1, 5);
console.log(anotherString);

let newStringOne = "    Rahul Meena    ";
console.log(newStringOne);
console.log(newStringOne.trim());
console.log(newStringOne.length); // length before trim

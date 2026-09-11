const score = 112233;
//console.log (score);

const balance = new Number(score);
//console.log(balance);

const newBalance = (balance.toString().length);
const newbalance = balance.toFixed(2);
//console.log(typeof balance);

const otherNumber = 123.692;
//console.log(otherNumber.toPrecision(5)); // toPrecision method

const bigNumber = 1000000;
//console.log(bigNumber.toLocaleString('en-IN')); // toLocaleString method


//important-------------------------------Math Methods-----------------------------

console.log(Math.random()); // random method
console.log((Math.random()*10) + 1);
console.log(Math.floor((Math.random()*10) + 1)); // floor method 

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // random integer between min and max



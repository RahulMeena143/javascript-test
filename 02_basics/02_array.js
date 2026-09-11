const arr1 = [1,2,3,5,4,];
const arr2 = [6,7,8,9,0];

//arr1.push(arr2);
//console.log(arr1);
const allArry = arr1.concat(arr2);
console.log(allArry);

const allArr = [...arr1,...arr2];
console.log(allArr);

const anotherArr = [123, [34345, [256,[787867],687], [7878,867]]]; // nested array
const allNewArr = anotherArr.flat(Infinity); // flat method flattens the nested array

console.log(allNewArr);

console.log(Array.isArray("Rahul"));
console.log(Array.from("Rahul")); // Array.from method creates a new array instance from an array-like or iterable object
console.log(Array.from({name: "Rahul"})); // important and intresting 

const arr4 = 1000;
const srr5 = 2000;
const arr6 = 3000;

console.log(Array.of(arr4, srr5, arr6));




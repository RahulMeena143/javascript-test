//Array:-

/* An array is an ordered list-like object 
   used to store multiple values under a single variable name.*/
// An array is a variable that stores multiple values in a single place.

const myarry = [0, 11, 2, 3, 8, 5, 6];
console.log(myarry);

myarry.unshift(10); // unshift method adds an element at the beginning of the array
//console.log(myarry);

myarry.shift(); // shift method removes the first element from the array
//console.log(myarry);

myarry.push(20); // push method adds an element at the end of the array
console.log(myarry);
//console.log(myarry.length);

//console.log(myarry.indexOf(11)); // indexOf method returns the first index at which a given element can be found in the array
//console.log(myarry.includes(2)); // includes method determines whether an array includes a certain value among its entries

const newArr = myarry.join();
console.log(newArr);

console.log(typeof newArr);

// slice - splice method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

console.log("A", myarry);

const myn1 = myarry.slice(1, 6);

console.log(myn1);

console.log("B", myarry);

const myn2 = myarry.splice(1, 3);
console.log(myn2);
console.log("C", myarry);

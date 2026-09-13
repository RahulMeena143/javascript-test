const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  //console.log(`list of array ${arr}`);
}

const greetings = "Hello world !";
for (const greet of greetings) {
  //console.log(`Each char is ${greet}`);
}


//------------------------------------ Maps------>

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("FI", "France");
map.set | ("IN", "India");

//console.log(map);

for (const[ key, value] of map) {
    console.log(key, ':-', value);
    
}
// ------------- next part  -------------
myObject = {
    "game1": 'spiddy',
    "game2": 'shaktiman'

}
for (const [key, value] of myObject) {

    console.log(key, ':-', value);
    
}
//------------------------Objects----------------------
// singleton
//object.create

//object literals---------

const mySym = Symbol('key1');

const jsUser = {
    name: "Rahul",
    age: 22,
    [mySym]: "mykey1",
    location: "jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDay: ["monday, friday"],


}
console.log(jsUser.email);
console.log(jsUser.isLoggedIn);

jsUser.email = "rahul@google.com",
//Object.freeze(jsUser)

jsUser.greeting = function(){
console.log("hello js user ");

}
jsUser.greetingTwo = function(){
console.log(` hello js user, ${this.name} ` );

}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

const user = {
    userName: "Rahul",
    price: 999,

    welcomeMessage: function (){

        //console.log(`Welcome to ${this.userName}, My new website `);
        //console.log(this );
        

    }

 
}
//user.welcomeMessage()
//user.userName = "Sam"
//user.welcomeMessage()

//-------------------------------Arrow function-------------------------

const chai = () => {
    const userName = "Rahul Meena"
    console.log(userName);

}
chai()
// ------   basic arrow function.  ------

//const addTwo = (num1, num2) => {
    //return(num1 + num2);

//}
//console.log(addTwo(3, 5));

// ------------Normal--------

//const addTwo = (num1, num2) => (num1 + num2);

const addTwo = (num1, num2) => num1 + num2

 console.log(addTwo(3, 9))

 const addOne = (num1, num2) => ({userName: "rahulmeenaji"})

console.log(addOne(3, 9))



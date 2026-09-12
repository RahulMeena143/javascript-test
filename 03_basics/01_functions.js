// -----------Functions---------------

function userName(num1, num2){
    
    console.log(num1 + num2)

}
userName(5, 8)

function addTwoNum(num1, num2){
    //let result = num1 + num2
    //return result

    // return num1 + num2

}
const result = addTwoNum(3, 3)
console.log("Result:", result);

function loginUserMsessage(userName){
    if(!userName){
        //console.log("Please enter the Name");
        
    }
    //return `${userName} Name to suna hi hoga!`
}
//console.log(loginUserMsessage("Rahul"))
 //console.log(loginUserMsessage())

function calculaterCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculaterCartPrice(5, 100, 500, 10000))


//--------function ke andr object kese dalteh --------


const user = 
    {
        //userName: "Rahul Meena",
        //Price: 299

    }
function handleObject(anyobject){

    console.log(`username is ${anyobject.userName} price is ${anyobject.Price}`);

}
// handleObject(user)
handleObject({
    userName: "Rahul",
    Price: 3999999

})

//-------- how to use Array in functions -----------

const myNewArray = [200, 300, 400, 500, 600, 650]

function returnNewArray(getArray){
    return getArray[5]
}
//console.log(returnNewArray());
console.log(returnNewArray([200, 300, 400, 500, 600, 650]));
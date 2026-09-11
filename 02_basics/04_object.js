const tinderUser = {}

tinderUser.id = "123abc",
tinderUser.name = "Rahul",
tinderUser.isLoggedIn = false;

console.log(tinderUser);

const regulerUser = {
    email: "Rahul@gmail.com",
    fullNmame: {
        userFullName: {
            name: "Rahul",
            surname: "Meena"
        }

    }
}

console.log(regulerUser.fullNmame?.userFullName.surname);


const obj1 = {1: "a",2: "b"}
const obj2 = {3: "c",4: "d"}
const obj3 = {5: "e",6: "f"}

const obj4 = {...obj1, ...obj2, ...obj3}

console.log(obj4);

const user = [
    {
        name: "rahul",
        surname: "meena"
    },
    {
        name: "rahul",
        surname: "meena"
    },{
        name: "rahul",
        surname: "meena"
    },{
        name: "rahul",
        surname: "meena"
    }
       
];

console.log(tinderUser)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'))








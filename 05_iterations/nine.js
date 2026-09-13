const mynum = [1, 2, 3, 5]

//const totalNum = mynum.reduce(function(acc, currval) {
    //console.log(`acc value ${acc} and currval ${currval}`);
    
    //return (acc + currval);

//},0 )

const totalNum = mynum.reduce((acc, curr)=> (acc + curr),0)
console.log(totalNum);


const shoppingCart =[ 
    {
    itemName: "java course",
     price: 9999

},
{
    itemName: "java course",
     price: 1999

},
{
    itemName: "java course",
     price: 9990

},
]

const myShoppingCart = shoppingCart.reduce((acc, item) => (acc + item.price),0)
console.log(myShoppingCart);

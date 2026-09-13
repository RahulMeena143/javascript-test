// ----for ---------


for (let i = 0; i <= 10; i++) {
    const element = i ;
    if (i == 5) {
        //console.log("5 is the lucky number");
        
    }
    //console.log(element);q
    
}

for (let i = 0; i <= 10; i++) {
   // console.log(`Outer loop value: ${i}`);
    
    for (let j = 0; j <= 10; j++) {
      //console.log(`inner loop value ${j}, and Inner loop value ${i}` );
     // console.log( i+ '*' +j + '=' + i*j);
      
    }
    
}
const myArray = ["shaktiman", "jaadu", "krish" ]

//console.log(myArray.length);

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    //console.log(element);
    
}

//---------break and continue--------

for (let index = 0; index <= 10 ; index++) {
    if (index == 5) {
        console.log(`Detected 5`);    
        // break 
        continue
    }
    console.log(`value of i is ${index}`);
    
    
}
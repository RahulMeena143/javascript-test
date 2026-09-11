//Dates

let mydate = new Date();
//console.log(mydate.toString());
//console.log(mydate.toDateString());
//console.log(mydate.toLocaleString());
//console.log(mydate.toLocaleDateString());



let myCreatedate = new Date(2026, 6, 11); // year, month, date
//console.log(myCreatedate.toString());
//console.log(myCreatedate.toDateString());
//console.log(myCreatedate.toLocaleString());
//console.log(myCreatedate.toLocaleDateString());
//console.log(myCreatedate.getMonth()+1 );

let myTimeStamp = new Date();
//console.log(myTimeStamp);
//console.log(myCreatedate.getTime());
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
//console.log(newDate.getFullYear());
//console.log(newDate.getMonth()+1);
//console.log(newDate.getDate());
//console.log(newDate.toLocaleDateString());


newDate.toLocaleString('default',{
    weekday: "long",
})
console.log(newDate.toLocaleDateString('default',{}));





 



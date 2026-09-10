const accountId =12345;
let accountName = "Dk";
var accountBalance = 1000;
    accountCity = "jaipur"; 

//accountId = 54321;     Not allowed as accountId is a constant variable

accountName = "Saurabh";
accountBalance = 2000;
accountCity = "Delhi";

accountstate = "Rajashthan"; // This variable is not declared with var, let, 
                             // or const, so it becomes a global variable

console.table([accountId, accountName, accountBalance, accountCity, accountstate]);
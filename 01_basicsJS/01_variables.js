const accountId = 144553
let accountEmail = "ravik12498@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 2 //not allowed

accountEmail = "ravi.kumar@mimit.com"
accountPassword = "21212"
accountCity = "bengaluru"
let accountState;

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity, accountState]);

/*
Prefer not to use var 
beacause of issue in the block scope and functional scope
*/
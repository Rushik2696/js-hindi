const accountId = 12355
let accountEmail = "fhtguhhfre@google.com"
var accountPassword = "12345"
accountCity = "palanpur"

// accountId = 2  not allowed

accountEmail = "rdsfur@gf.com"

accountPassword = "45678"
accountCity ="ahmedabad"
let accountState;

console.log(accountId);
/* 
prefer not to use var because of issue in block scope and functional scope
 */
console.table([accountId, accountEmail, accountPassword, accountCity , accountState]) 
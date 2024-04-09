const accountId = 13579
let accountName = "Javascript"
var accountPassword = "12345"
accountCity = "Noida"
let accountState;
// accountId = 456789 // we can't change const variable

accountName = "Github"
accountPassword = "54321"
accountCity = "Greater Noida"

console.log(accountName)

/* Generally we not use var nowdays
because the issue of block scope and functional scope */

console.table([accountId, accountName, accountPassword, accountCity, accountState])

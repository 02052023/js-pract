const acountId =144553
let accountEmail = "anitakhadka057@gmail.com"
var accountPassword ="123"
acountCity ="Jaipur"
let accoutState;

// example it can change or not
accountId = 2 // not allowed to chnage coz of const variable 
console.log(acountId);

accountEmail = "anita.com"
accountPassword ="11123"
acountCity ="Jaiur"

console.table([acountId, accountEmail, accountPassword, acountCity,accoutState])
// prefer not to use var coz ofissue in block scope and functional scope
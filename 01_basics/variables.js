const accountId = 123455;
let email = 'ahamd@google.com';
var password = '123455'
city = "Lahore"
let state;

// accountId = 2; NOT ALLOWED

email = "ahamd@.com"
password = '2345'
city = 'Karachi'

/*
Prefer not tot use var
because of issue in block scope and functional scope
*/

console.log(accountId);

console.table([accountId, email, password, city, state]);
const accountId = 132423;
let accountEmail = "parth@gmail.com";
var accountPassword = "12345";
accountcity = "jaispur";
 let accountState;

//accountId = 132423; //not allows const
accountEmail = "hihi@gmail.com";
accountPassword = "12355";
accountcity = "dilhi";
console.log(accountId);

console.table([accountEmail,
    ,accountPassword 
    ,accountcity,accountState]);

    /* prefer not use to var
    because of issuse in block scope and functional scope*/
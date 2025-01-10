let myDate = new Date();
// console.log(myDate);

// console.log(myDate.toDateString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);


//let myCreatedDate =new Date(2025,0,9);
//let myCreatedDate =new Date(2025,0,9,3,44);
let myCreatedDate =new Date("2025-01-10");
//console.log(myCreatedDate.toLocaleString());
let myTimeStemp = Date.now();
// console.log(myTimeStemp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
 console.log(newDate);
 console.log(newDate.getMonth());
 console.log(newDate.getDay());
newDate.toLocaleString('default',{weekday :"long" });
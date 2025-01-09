const name = "parth";
const repoCount = 50;
// console.log(name + repoCount + "value");
 console.log(`hello my name is ${name} and my repo cont is ${repoCount}`);

 const gameName = new String('parth-pm');
 console.log(gameName[2]);
 console.log(gameName.__proto__);
 console.log(gameName.length);
 console.log(gameName.toUpperCase());
 console.log(gameName.charAt(2));
 console.log(gameName.indexOf('t'));

const newString=gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-7,4);
console.log(anotherString);

const newStringone="  parth  "
console.log(newStringone);
console.log(newStringone.trim());

const url = "https//parth.com/parth%39maheshwari"
console.log(url.replace('%39','-'));
console.log(url.includes('raj'));
console.log(gameName.split('-'));

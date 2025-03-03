let myDate = new Date();
console.log(myDate);
console.log(typeof myDate); //object
console.log(myDate.toString()); //Tue May 19 2021 15:32:16 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); //Tue May 19 2021
console.log(myDate.toTimeString()); //15:32:16 GMT+0530 (India Standard Time)
console.log(myDate.toLocaleString()); //5/19/2021, 3:32:16 PM
console.log(myDate.toLocaleDateString()); //5/19/2021
console.log(myDate.toLocaleTimeString()); //3:32:16 PM
console.log(myDate.getTime()); //1621376736247
console.log(myDate.getFullYear()); //2021
console.log(myDate.getDay()); //4 day of week
console.log(myDate.getMinutes()); //32
console.log(myDate.getSeconds()); //16
console.log(myDate.getHours()); //15
console.log(myDate.getMonth()); //4
console.log(myDate.getDate()); //19
console.log(myDate.getTimezoneOffset()); //-330
console.log(myDate.getMilliseconds()); //247
console.log(myDate.getUTCDate()); //19

let myCreatedDate = new Date("08-09-2002");
console.log(myCreatedDate);
console.log(myCreatedDate.getTime()); //in this way we can compare both myCreatedDate and myDate

//we can convert the date into string and then convert it back to date
let myDateStr = myDate.toString();
console.log(myDateStr);
let myNewDate = new Date(myDateStr);
console.log(myNewDate);

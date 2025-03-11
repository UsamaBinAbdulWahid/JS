// ✅ CREATING A DATE OBJECT
let myDate = new Date(); // Creates a new Date object with the current date and time
console.log(myDate); // Example Output: Tue May 19 2021 15:32:16 GMT+0530 (India Standard Time)

console.log(typeof myDate); // Output: "object" (Date is an object in JavaScript)

// ✅ FORMATTING DATE INTO DIFFERENT STRING REPRESENTATIONS
console.log(myDate.toString()); // Full date and time string
// Example Output: "Tue May 19 2021 15:32:16 GMT+0530 (India Standard Time)"

console.log(myDate.toDateString()); // Only the date, no time
// Example Output: "Tue May 19 2021"

console.log(myDate.toTimeString()); // Only the time, no date
// Example Output: "15:32:16 GMT+0530 (India Standard Time)"

console.log(myDate.toLocaleString()); // Localized date and time (based on system settings)
// Example Output: "5/19/2021, 3:32:16 PM"

console.log(myDate.toLocaleDateString()); // Localized date only
// Example Output: "5/19/2021"

console.log(myDate.toLocaleTimeString()); // Localized time only
// Example Output: "3:32:16 PM"

// ✅ EXTRACTING SPECIFIC PARTS OF A DATE
console.log(myDate.getTime()); // Milliseconds since January 1, 1970 (Unix timestamp)
// Example Output: 1621376736247

console.log(myDate.getFullYear()); // Extracts the year
// Example Output: 2021

console.log(myDate.getMonth()); // Extracts the month (0 = January, 11 = December)
// Example Output: 4 (May, since JavaScript months start from 0)

console.log(myDate.getDate()); // Extracts the day of the month (1-31)
// Example Output: 19

console.log(myDate.getDay()); // Extracts the day of the week (0 = Sunday, 6 = Saturday)
// Example Output: 4 (Thursday)

console.log(myDate.getHours()); // Extracts the hour (0-23)
// Example Output: 15 (3 PM)

console.log(myDate.getMinutes()); // Extracts the minutes (0-59)
// Example Output: 32

console.log(myDate.getSeconds()); // Extracts the seconds (0-59)
// Example Output: 16

console.log(myDate.getMilliseconds()); // Extracts the milliseconds (0-999)
// Example Output: 247

console.log(myDate.getTimezoneOffset()); // Timezone difference from UTC in minutes
// Example Output: -330 (for India)

// ✅ CREATING A CUSTOM DATE (SPECIFIC DATE)
let myCreatedDate = new Date("08-09-2002"); // Date format (MM-DD-YYYY)
console.log(myCreatedDate);
// Example Output: Fri Aug 09 2002 00:00:00 GMT+0500 (Pakistan Standard Time)

console.log(myCreatedDate.getTime()); // Getting timestamp for comparisons

// ✅ COMPARING TWO DATES (Using getTime() because Date objects are not directly comparable)
let date1 = new Date("2022-05-10");
let date2 = new Date("2022-05-15");

if (date1.getTime() < date2.getTime()) {
    console.log("date1 is earlier than date2");
} else {
    console.log("date1 is later than date2");
}
// Output: "date1 is earlier than date2"

// ✅ CONVERTING A DATE TO STRING AND BACK
let myDateStr = myDate.toString(); // Convert Date to String
console.log(myDateStr);

let myNewDate = new Date(myDateStr); // Convert String back to Date
console.log(myNewDate);

/*
📌 Summary
Method	Description	Example Output
toString()	Full date and time	"Tue May 19 2021 15:32:16 GMT+0530"
toDateString()	Only the date	"Tue May 19 2021"
toTimeString()	Only the time	"15:32:16 GMT+0530"
toLocaleString()	Localized date and time	"5/19/2021, 3:32:16 PM"
getTime()	Milliseconds since 1970	1621376736247
getFullYear()	Year	2021
getMonth()	Month (0-11)	4 (May)
getDate()	Day of month (1-31)	19
getDay()	Day of week (0-6)	4 (Thursday)
getHours()	Hours (0-23)	15
getMinutes()	Minutes (0-59)	32
*/
/*
🚀 Final Takeaways

✔ Date is an object in JavaScript used to work with dates and times.
✔ Use toString(), toDateString(), toLocaleString() to format dates.
✔ Use getFullYear(), getMonth(), getDate() to extract date parts.
✔ Use getTime() for comparing two dates.
✔ Months are zero-based (0 = January, 11 = December).
*/
// 1. Write a JavaScript program to display the current day and time in the following format.  Go to the editor
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

// Solution : 1
var currentDate = new Date();
var day = currentDate.getDay();
var hours = currentDate.getHours();
var minutes = currentDate.getMinutes();
var seconds = currentDate.getSeconds();
var ampm = hours >= 12 ? "PM" : "AM";
var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
var dayName = days[day];

console.log("Today is : " + dayName + ".");
console.log(
  "Current time is : " + hours + " " + ampm + " : " + minutes + " : " + seconds
);

// Solution : 2
console.log(`Today is : ${days[new Date().getDay()]}.`);
console.log(`Current time is : ${hours} ${ampm} : ${minutes} : ${seconds}.`);

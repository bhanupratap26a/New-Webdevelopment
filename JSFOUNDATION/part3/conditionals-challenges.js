let num1 = 5;
let num2 = 8;

console.log("Upper Code");

if (num1 > num2) {
  console.log("Num1 is Greater");
} else {
  console.log("Nope Num1 is not Greater");
}
console.log("I am Lower code");

// Checking a string

let yes = "SIU";
let no = "SIU";

if (yes == no) {
  console.log("They are Same");
} else {
  console.log("They are Not Same");
}

// Checking Numbers

let num = 0;

if (typeof num == "number") {
  console.log("It is a number");
} else {
  console.log("Its not a number");
}

//checking Boolean

let isLoggedin = true;

if (isLoggedin) {
  console.log("Yes, its Loggedin");
} else {
  console.log("No, its Not Loggedin");
}

let arr = ["item1"];

console.log(arr.length);

if (arr.length == 0) {
  console.log("The Array is Empty");
} else {
  console.log("The Array is Not Empty");
}

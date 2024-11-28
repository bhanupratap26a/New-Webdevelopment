// let sum = 0;
// let i = 1;
// while (i <= 5) {
//   sum += i;
//   i++;
// }
// console.log(sum);

// let countDown = [];
// let j = 5;
// while (j > 0) {
//   countDown.push(j);
//   j--;
// }
// console.log(countDown);

// let teacollection = [];
// let tea;
// do {
//   tea = prompt(`Enter your favourite tea (Enter "stop" to stop)`);

//   if (tea !== "stop") {
//     teacollection.push(tea);
//   }
// } while (tea !== "stop");

// let total = 0;
// let k = 1;
// do {
//   total += k;
//   k++;
// } while (k <= 3);
// console.log(total);

// let multipleNumbers = [];
// let arr = [2, 4, 6];

// for (let i = 0; i < arr.length; i++) {
//   //   takeNumber = arr[i] * 2;
//   //   multipleNumbers.push(takeNumber);

//   multipleNumbers.push(arr[i] * 2);
// }
// console.log(multipleNumbers);

let cities = [
  "Mumbai",
  "Sydney",
  "HonkKong",
  "Brazil",
  "Usa",
  "Singapore",
  "Germany",
];
let NewArray = [];

for (let i = 0; i < cities.length; i++) {
  NewArray.push(cities[i]);
}
console.log(NewArray);

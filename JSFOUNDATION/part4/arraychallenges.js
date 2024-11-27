let teaFlavors = ["greeTea", "backTea", "oolongTea"];
const firstTea = teaFlavors[0];
console.log(firstTea);

let cities = ["London", "Tokyo", "Paris", "Newyork"];
const favCity = cities[2];
console.log(favCity);

let teaTypes = ["herbalTea", "whiteTea", "masalaChai"];
teaTypes[1] = "jasmineTea";
console.log(teaTypes[1]);

let cityVisited = ["Mumbai", "Sydney"];
cityVisited.push("Berlin");
console.log(cityVisited);

let teaOrders = ["chai", "icedTea", "matcha", "earl grey"];
const lastOrder = teaOrders.pop();
console.log(teaOrders);
console.log(lastOrder);

let popularTea = ["coldTea", "masalaChai", "adrakChai"];
let vowels = "aeiouAEIOU";
let copyTea = popularTea.slice();
let copyTea2 = [...popularTea];
let copyTea1 = popularTea.filter((element) => vowels.includes(element[0]));

// copyTea[0] = "Hello";

console.log(copyTea);
console.log(copyTea1);
console.log(...copyTea2);
// console.log(popularTea);

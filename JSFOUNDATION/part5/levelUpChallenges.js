let chai = ["MasalaChai", "Adrakchai", "Coffee", "oolongChai", "chai", "tea"];
let afterFilter = [];
for (let i = 0; i < chai.length; i++) {
  if (chai[i] == "chai") {
    break;
  }
  afterFilter.push(chai[i]);
}
console.log(afterFilter);

let cities = [
  "Mumbai",
  "Sydney",
  "HonkKong",
  "Brazil",
  "Usa",
  "Singapore",
  "Germany",
];

let visited = [];

for (let i = 0; i < cities.length; i++) {
  if (cities[i] === "Usa") {
    continue;
  }
  visited.push(cities[i]);
}
console.log(visited);

let numbers = [1, 2, 3, 4, 5];
let smallNumbers = [];

for (const num of numbers) {
  if (num == 4) {
    break;
  }
  smallNumbers.push(num);
}
console.log(smallNumbers);

let coffee = ["Black Coffee", "Cold Coffee", "Star coffee", "Herbal Coffee"];
let skipped = [];

for (const coff of coffee) {
  if (coff == "Star Coffee" || coff == "Star coffee") {
    continue;
  }
  skipped.push(coff);
}
console.log(skipped);

let citiesPopulation = {
  India: 90290000,
  Paris: 45040338,
  China: 78348293,
  London: 30493475,
};
let citiesPopulations = {};
// console.log(Object.keys(citiesPopulation));
// console.log(Object.values(citiesPopulation));

for (const city in citiesPopulation) {
  if (city == "Berlin") {
    break;
  }
  citiesPopulations[city] = citiesPopulation[city];
}
console.log(citiesPopulations);

let worldCities = {
  Sydney: 5000000,
  Tokyo: 9000000,
  Berlin: 3500000,
  Paris: 2200000,
};
let largeCities = {};

for (const cities in worldCities) {
  if (worldCities[cities] < 3000000) {
    continue;
  }
  largeCities[cities] = worldCities[cities];
}
console.log(largeCities);

let teaCollection = ["earl grey", "green tea", "chai", "oolong tea"];
let availableTeas = [];

teaCollection.forEach(function (tea) {
  if (tea === "chai") {
    return;
  }
  availableTeas.push(tea);
});
console.log(availableTeas);

let newcities = ["sydney", "mumbai", "osaka", "japan"];

let exeCities = [];

newcities.forEach(function (city) {
  if (city == "mumbai") {
    return;
  }
  exeCities.push(city);
});
console.log(exeCities);

let num = [2, 5, 7, 9];

let doubleNumbers = [];

for (let i = 0; i < num.length; i++) {
  if (num[i] == 7) {
    continue;
  }
  doubleNumbers.push(num[i] * 2);
}
console.log(doubleNumbers);

let myTeas = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];
let shortTeas = [];

for (const tea of myTeas) {
  if (tea.length > 10) {
    break;
  }
  shortTeas.push(tea);
}
console.log(shortTeas);

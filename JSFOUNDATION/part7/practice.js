// function Car() {}

// Car.prototype.Make = function (brand) {
//   this.brand = brand;
//   return `making car ${brand} please wait`;
// };

// function Start() {}

// Start.prototype = new Car();

// Start.prototype.Go = function (model) {
//   this.model = model;
//   return `Starting Car ${this.model} of ${this.brand}`;
// };

// const start = new Start();
// console.log(start.Make("Tata"));
// console.log(start.Go("Nano"));

function Person(name, age) {
  if (this.age === 0) {
    throw new Error("The age is not positive number");
  }
  this.name = name;
  this.age = age;
  this.greet = function () {
    return `Hello,my name is ${this.name}`;
  };
}

let person = new Person("virat", 18);
console.log(person.greet());

let car = {
  make: "Shelby",
  model: "Mustang",
  start: function () {
    return `${this.make} ${this.model} car is started `;
  },
};
console.log(car.start());

function Person(name, age) {
  this.name = name;
  this.age = age;
}
let John = new Person("Pushpa", 20);
console.log(John.name);

function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function () {
  return `${this.name} makes a sound`;
};

Array.prototype.Doon = function () {
  return `Custom method ${this}`;
};

let myArray = [1, 544, "Hello", 99];
console.log(myArray.Doon());
let myNewArray = [1, 544, "Hello", 99, 100];
console.log(myNewArray.Doon());

let animal = new Animal("Dog");
console.log(animal.speak());

class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  start() {
    return `${this.model} is a car from ${this.make}`;
  }
}

class Car extends Vehicle {
  drive() {
    return `${this.make} is inherited from Vehicle`;
  }
}

let myCar = new Car("Pagani", "Huayra");
console.log(myCar.start());
console.log(myCar.drive());

let vehicle1 = new Vehicle("Lamborghini", "Aventedor");
console.log(vehicle1.model);

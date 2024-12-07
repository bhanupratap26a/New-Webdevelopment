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

// Encapsulation

class Account {
  #balance = 0;

  Deposit(Amount) {
    this.#balance += Amount;
    return this.#balance;
  }
  getbalance() {
    return `$ ${this.#balance}`;
  }
}

let account = new Account();
account.Deposit(1000000);
console.log(account.getbalance());

// Abstraction

class coffeeMachine {
  start() {
    return `Starting coffee machine....`;
  }

  brew() {
    return `Brewing Coffee.....`;
  }
  pressStartButton() {
    return `${this.start()} + ${this.brew()}`;
  }
}

let makeCoffee = new coffeeMachine();
console.log(makeCoffee.pressStartButton());

// polymorphism

class Bird {
  fly() {
    return `Bird can fly`;
  }
}

class Ostrich extends Bird {
  fly() {
    return `Ostrich Can't fly`;
  }
}

let bird = new Bird();
console.log(bird.fly());

let ostrich = new Ostrich();
console.log(ostrich.fly());

//Static Method
class Calculator {
  static Add(a, b) {
    return a + b;
  }
}
// let add = new Calculator();
console.log(Calculator.Add(20, 30));



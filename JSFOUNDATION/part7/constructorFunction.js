function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}

let myCar = new Car("Lamborghini", "Urus");
let myNewCar = new Car("Pagani", "v12");

console.log(myCar);
console.log(myNewCar);

function tea(type) {
  this.type = type;
  this.describe = function () {
    return `It's a ${this.type} tea.`;
  };
}
let newTea = new tea("Lemon");
console.log(newTea.describe());

function Animal(species) {
  this.species = species;
}
Animal.prototype.sound = function () {
  return `${this.species} makes a sound`;
};
let Dog = new Animal("Dog");
console.log(Dog.sound());

let Cat = new Animal("Dog");
console.log(Cat.sound());

function Drink(name) {
  if (!new.target) {
    throw new Error("You Must Use New Keyword For Calling");
  }
  this.name = name;
}
let tea1 = new Drink("oolong tea");
let coffee = new Drink("Black Coffee");

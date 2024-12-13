function Animal(type) {
  this.type = type;
}
Animal.prototype.sound = function () {
  return `${this.type} makes sound`;
};

let animal = new Animal("Tiger");
console.log(animal.sound());

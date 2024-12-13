let person = {
  name: "Doon",
  greet() {
    console.log(`Hello  ${this.name}`);
  },
};
person.greet();
const greetFunction = person.greet;
greetFunction();
const bindFunction = person.greet.bind({ name: "John" });
bindFunction();

// bind,apply, call

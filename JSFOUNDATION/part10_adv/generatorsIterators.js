function* numberGenerators() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = numberGenerators();
const genTwo = numberGenerators();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

console.log(genTwo.next().value);
console.log(genTwo.next().value);

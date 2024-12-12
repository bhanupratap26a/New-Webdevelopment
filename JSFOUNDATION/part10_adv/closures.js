function main() {
  counter = 0;
  return function incre() {
    counter += 1;
    return counter;
  };
}

let Main = new main();
console.log(Main());
console.log(Main());
console.log(Main());
console.log(Main());

function sayHello() {
  console.log("Hello Js");
}

function loop() {
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
}
loop();

setTimeout(() => {
  sayHello();
}, 4000);

console.log("Hello World");

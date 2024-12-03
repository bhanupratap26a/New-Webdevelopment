let computer = { cpu: 14 };
let lenovo = {
  screen: "HDR",
  __proto__: computer,
};
let mac = {};

console.log(`computer `, computer.__proto__);
console.log(`lenovo `, lenovo.__proto__);

let genericCar = { tyres: 4 };

let tesla = {
  driver: "AI",
};

Object.setPrototypeOf(tesla, genericCar);

console.log(`tesla `, Object.getPrototypeOf(tesla));

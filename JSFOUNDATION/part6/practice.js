function needCar(typeofCar) {
  return `The Car you need : ${typeofCar}`;
}

function requestCar(selectType, model) {
  console.log(selectType + model);
}
requestCar(needCar("Lamborghini"), " urus");
 
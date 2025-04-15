
//04.14 dienos paskaita su moduliais


import {Car} from'./js/Car.js';



const volvo=new Car('Volvo S40','red',55);
const zapas=new Car('Zapas','white',35);
console.log(volvo.intro());
console.log(zapas.intro());

zapas.refill(5)
console.log(zapas);
console.log(zapas.refill(-5));
console.log(volvo.engineIsOn);

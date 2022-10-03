const name = 'Heni'; // string
const i = 30; // number
const isMonday = true; // boolean
const cars = ['BMW', "Mercedes", 'Audi']; //array

/* const car1brand = 'Volkswagen'
const car1model = 'Arteon'
const car1color = 'pink' */

const car2brand = 'Tesla';
const car2model = 'S';
const car2color = 'zwart';

// console.log(`${car1brand} ${car1model}in kleur ${car1color}`)

//objecten
const car1 ={
    brand: "Volkswagen",
    model: 'Arteon',
    color: 'Roos',
    maxSpeed: 200,
};
console.log(car1);

//objecten wijzigen en toevoegen
car1.color = 'fluogeel';
console.log(car1);
car1.horsePower = 128;
console.log(car1);
// property verwijderen
delete car1.horsePower;
console.log(car1);

const property = 'color';
console.log(car1[property]);



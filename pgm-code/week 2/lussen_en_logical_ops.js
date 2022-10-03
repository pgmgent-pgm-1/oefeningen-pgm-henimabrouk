// logical operators
console.log(true); // true
console.log(true && true); // true waarde voor en na de n moeten beiden waar zijn
console.log(true && true && true); // true want waarde voor na en tussen zijn true
console.log(true && false); // false want beide waarden moeten true zijn
console.log(true && false && false); // false want alle 3 de waarden moeten true zijn
console.log('Hallo' && true); // true elke waarde binnen een condition wordt als true gewien
console.log(undefined && true);// undefined geeft undefined

// if name
let name = 'Heni';
if (name) {
    console.log(`Name is ${name}`);
} else {
    console.log('Nog geen naam gekozen');
}
// if color && name
let color = 'red';
if (color === 'red' && name === 'Heni') {
    console.log('correct');
} else {
    console.log('Niet correct');
}

// || is or 
console.log(true || false); //true
console.log(true || false || false); //true
console.log(true || true); //true
console.log(false || false); // false
console.log('Hallo' || false); // true

// || test correct want min 1 van de x aantal condities is correct
color = 'green';
if (color === 'red' || name === 'Heni') {
    console.log('correct');
} else {
    console.log('Niet correct');
}

// quick mafs
const j = 2;
// 2 tot de macht 3
console.log(Math.pow(j, 3)); // 8
console.log(j ** 3); // 8 
console.log(10 / 0); // infinity nooit delen door 0

// if statement op 1 lijn plaatsen
console.log(color === 'green' ? 'Correct' : 'Niet correct'); 

// lussen for loop
for (let i = 0; i <= 10; i++) {
    console.log('Loop');
    console.log(i);
}

let text = '' //text = een string
for (let i = 10; i > 0; i = i - 2) {
    text += i;
}
console.log(text); // de uitkomst gaat aan elkaar geschreven worden want text is een string als text 0 was is de uitkomst 30 want hij gaat 0+10+8+6+4+2 doen =30
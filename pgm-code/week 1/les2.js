//quickmafs

let a = 20;
let b = 30;
let c = 40;
let d = 50;
let e = 24;

//basic
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

//modulo % aka restwaarde
console.log(d % b); 


let i = 0;
i = i + 1; // lange notatie
i += 1; // korte notatie i = i + 1
console.log(i);
i -= 1; // i = i - 1
console.log(i);
i *= 2; // i = i * 2
console.log(i);
i /= 2; // i = i / 2
console.log(i);

let j = 5;
console.log(j);
j++; // j +1
console.log(j);
console.log(++j); // j vermeerderd op vorige lijn ++ voor de j dus result is 7 en j is 7
console.log(j++); // j vermeerderd op de volgende lijn dus result is 7 maar j is 8
console.log(j--); // result is 8 maar j is nu 7
console.log(--j); // result is 6 en j is 6

// if

if (j > 5) {
    console.log('J is groter dan 5');
};
if (j >= 6) {
    console.log('j is 6')
};
if (j >= 6) {
    console.log('j is 6')
};
if (j === 6) {
    console.log('j is 6')
};
if (j !== 5) {
console.log('j is niet gelijk aan 5')
};

// if notatie 1
if (j > 6) {
    console.log('groter dan 6')
};
if (j <= 6) {
    console.log('kleiner of gelijk aan 6')
}
// if notatie 2 met else ipv if (j <= 6) sneller en makkelijker
else {
    console.log('groter dan 6')
};

let k = 10;
console.log(k > 5) // true  boolean
console.log(k < 5) // false boolean

let isTuesday = false;
if (isTuesday) {
    console.log('Het is dinsdag')
} // if true
else {
console.log('Het is niet disndag')
}; // if false

//if else if
if (j > 7) {
    console.log('groter dan 7')
}
else if (j > 6) {
    console.log('j is groter dan 6 en kleiner dan 7')
}
else if (j > 3) {
    console.log('j is groter dan 3 kleiner dan 7 en 6')
}
else {
console.log('j is kleiner dan of gelijk aan 3')
};
// je kan blijven if else toevoegen en sluit af met else

//switch case
            // eerste blok is else if
let x = 10
if (x === 9) {
    console.log('x is 9')
} else if (x === 8) {
console.log('x is 8')
} else if (x === 5) {
console.log('x is 5')
} else {
    console.log('x is niet 9, 8, 5')
}
            // deze blok is switch case enkel toepasbaar als er enkel === zijn geen <> etc
switch (x) {
    case 9:
        console.log('x is 9');
        break;
    case 8:
        console.log('x is 8');
        break;
    case 5:
        console.log('x is 5');
        break;
    default:
        console.log('x is niet 9, 8, 5')
        break;
}
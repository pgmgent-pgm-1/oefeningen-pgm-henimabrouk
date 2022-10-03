// programming 1 
// is commentaar die tussen code kan staan voor uitleg
/* nu kan je over meerdere lijnen typen dubbel slash is enkel op dewelfde lijn
jwsdhindksdnnks
*/ 
//tekst met console.log()
console.log("hello world");
console.log("hello ungabunga");
/* console log name with variable (f/lName)
namen van variabelen zijn case gevoelig => firstName /= Firstname */
const firstName = "Heni";
const lastName = "Mabrouk"
console.log(firstName);
console.log(lastName);
// 3 manieren om variable te noteren
var a; // waarde is undefined
console.log(a);
a = 31; // waarde is 31
a = 20; // waarde is 20 kan enkel 1 waarde hebben overwrite previous
console.log(a);

const b = 7
let c = 10; // new school let en cons
c = 15; //let kan veranderen
const d = 13; //const we verandere waarde niet
console.log(c);
console.log(d);

const e = 18;
//e = 17; //error want waarde kan niet veranderen
const name = "Heni Mabrouk";
const porto = 0; // nummer
const club = 4; // nummer
const pi = 3.14 // komma met punt schrijven
const isLector = true; // boolean true/false
const car = null; // null

// strings advanced
console.log(firstName+lastName); // first/last name aan elkaar
console.log(firstName + " " + lastName); // f/l name met spatie tussen

//let sentence = "de beer zei "hallo"; // error dezelfde quotes gaan niet
let sentence = 'De beer zei "hallo"'; // optie 1
sentence = 'De beer zei \'hallo\'';// optie 2
console.log(sentence);

const work = 'lector';
// Ik ben Heni en mijn beroep is lector
console.log('ik ben ' + firstName + ' en mijn beroep is ' + work);
console.log(`Ik ben ${firstName} en mijn beroep is ${work} `); // met backticks `${}` kan je overzichtelijk werken zonder plus spam

//multi lines
console.log('Hallo, \nwelkom in mijn les');// zo start je een nieuwe lijn na /n
console.log(`Hallo,
welkom in mijn les`);// met backticks kan je gwn enter gebruiken voor nieuwe lijn

// numbers
const width = 100 * 50;
console.log(width);
const sum = a + b + c;
console.log(sum);
const length = 100 / 50;
console.log(length);
const min = 100 - a;
console.log(min);


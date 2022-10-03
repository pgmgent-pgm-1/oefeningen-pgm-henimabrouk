// arrays is een nieuw datatype 9string, number, boolean
const brands = ['Nike', 'New Balance', 'Adidas'];
console.log(brands.length); // de uitkomst is 3 want 3 merken in de array
console.log(brands[0]); // de eerste array is 0 de tweede is 1 de derde is 2 etc array begint bij 0
console.log(brands[1]);
console.log(brands[2]);

const array = [true, false, 'Hallo', 10, 39]; // kan verschillende data types bevatten maar meestal gebruiken we dezelfde (strings of numbers of etc)
console.log(array[0]); // selecteerd de eerste waarde in array
console.log(array.length); // toont je hoeveel waardes er in een array zitten (5 in dit geval)
console.log(array[array.length - 1]) // selecteert de laatste waarde in een array want we beginnen met tellen bij 0 dus de eerste waarde is 0 en de laatste waarde is length - 1
let lastIndex = array.length - 1;
console.log(array[lastIndex]);

/* het volgende gaat alle waarden in een array weergeven 1 per 1 als i 0 is? i<array.length (aantal waarden in array = 5) i++ i vermeerderd op de volgende lijn dus i is nog altijd 0 
dus array i is de eerste waarde of true. volgende lijn is i 1 dan 2 etc
*/
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

//andere notatie om array aan te maken
let newArray1 = ['Hallo', 'Bonjour'];
let newArray2 = new Array('Hallo', 'Bonjour');

//lege array
let newArray3 = [];
let newArray4 = new Array();

// de waarde binnen een array veranderen 0 is de eerste waarde die we veranderen naar Hello ipv Hallo
newArray1[0] = 'Hello';
console.log(newArray1);

// waarde toevoegen in een array
newArray1[2] = 'Gutentag';
newArray1[4] = 'Konnichiwa'; //we skippen 1 index [3] dus die zal leeg zijn
console.log(newArray1);

const cars = [];
cars[0] = 'Saab';
cars[1] = 'Volvo';
cars[2] = 'BMW';
console.log(cars);

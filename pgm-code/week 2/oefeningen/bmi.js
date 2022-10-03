let length = 1.76;
let weight = 85;
let bmi = weight / Math.pow(length, 2);
console.log(bmi);
if(bmi <= 18.5){
    console.log(`Jouw bmi is ${bmi}. Je hebt ondergewicht`);
} 
else if(bmi < 25) {
    console.log(`Jouw bmi is ${bmi}. Je hebt het aanbevolen gewicht.`);
}
else if(bmi <= 30){
    console.log(`Jouw bmi is ${bmi}. Je hebt overgewicht`)
}
else{
    console.log(`Jouw bmi is ${bmi}. Je bent zwaarlijvig`)
}

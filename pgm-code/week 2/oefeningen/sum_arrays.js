const arrayOne = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2]; 
const arrayTwo = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26];
let sum1 = 0;
let sum2 = 0;
for (let i = 0; i < arrayOne.length; i++){
    sum1 += arrayOne[i]
    
}
for (let i = 0; i < arrayTwo.length; i++){
    sum2 += arrayTwo[i]

}
sum = sum1 + sum2;
console.log(sum);

/* for (let i = 0; i < arrayOne.length; i++){
     sum1 += arrayOne[i] + arrayTwo[i] verkorte schrijfwijze */
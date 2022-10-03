const year = 1998;
let isLeapYear = false;

if (isLeapYear % 4 === 0) {    
    if(isLeapYear % 100 === 0) {
        if(isLeapYear % 400 === 0){
            isLeapYear = true;
        }
    } else {
        isLeapYear = true;
    }
}

if (isLeapYear) {
    console.log(`${year} is een schrikkeljaar`)
} else {
    console.log(`${year} is geen schrikkeljaar`)
}

console.log(isLeapYear ? `${year} is een schrikkeljaar` : `${year} is geen schrikkeljaar`);


console.log(`${year} is ${isLeapYear ? 'een' : 'geen'} schrikkeljaar`);
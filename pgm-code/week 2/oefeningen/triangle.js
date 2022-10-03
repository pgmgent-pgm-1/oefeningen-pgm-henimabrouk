const nB = 14;
const nH = nB;
let output = '';

for(let b = 1; b <= nB; b++) { 
    for(let h = nH; h >= b; h--) {
        output += '* ';
    }
    output += '\n';
}
console.log(output);
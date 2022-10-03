const nB = 10;
const nH = nB;
let output = '';

for (let b = 1; b < nB; b++  ) { //verticaal
    for (let h = 1; h <= b; h++) { //horizontaal
        output += '* ';
    }
    output += '\n';
}
console.log(output);
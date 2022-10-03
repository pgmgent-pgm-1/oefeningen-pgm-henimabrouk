const nB = 10
const nH = nB
let output = ''

for (let b = 10; b < nB; b++  ) {
    for (let h = 10; h <= b; h++) {
        output += '* '
    }
    output += '\n'
}
console.log(output)
const nCols = 7
const nRows = 7
let output = ''

for (let row = 0; row < nRows; row++) {
    for (let col = 0; col < nCols; col++) {
        output += '* '
    }
    output += '\n'
}
console.log(output)
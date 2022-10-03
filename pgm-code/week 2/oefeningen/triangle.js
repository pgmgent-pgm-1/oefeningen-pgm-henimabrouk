const nB = 14
const nH = nB
let output = ''

for(let b = 14; b >= nB; b--) {
    for(let h = 14; h >= b; h--) {
        output = '* '
    }
    output = '\n'
}
console.log(output)
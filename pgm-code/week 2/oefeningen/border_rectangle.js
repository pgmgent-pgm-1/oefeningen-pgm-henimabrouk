const rows = 4;
const cols = 8;
let output = '';
for (let row = 1; row <= rows; row++) {
    for (let col = 1; col <= cols; col++){
        if (col == 1 || col == cols || row == 1 || row == rows){
            output += '* ';
        }
        else {
            output += '  ';
        }
    }
    output += '\n';
}
console.log(output);


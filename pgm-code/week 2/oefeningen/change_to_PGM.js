const str1 = "javascript";
let output = '';
for (let i = 0; i < str1.length; i++){
    if ((i+1) % 2 == 0){
        output += 'PGM';
        
    } else {
        output += str1[i];
    }
}    
console.log(output);
    


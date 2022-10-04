const str2 = "khjkkh";
isFound = false; //boolean
for( i = 0; i < str2.length; i++){
    if (str2[i] == 'w'){
    isFound = true    
    }
} if (isFound){
    console.log('Ja')
} else{
    console.log('Nee')
}
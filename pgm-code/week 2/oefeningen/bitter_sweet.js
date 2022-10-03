

for(let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('bittersweet')
    } else if(i % 3 === 0) {
        console.log('bitter')
    } else if(i % 5 === 0) {
        console.log('sweet')
    } 
    else {
        console.log(i)
    }

}
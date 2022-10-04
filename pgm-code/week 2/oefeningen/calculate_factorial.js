const n2 = 4; //  4 * 3 * 2 * 1 = 24
function factorial(n) {
    n = Math.abs(Math.round(n));
    let result = 1;
    if (1 < n) {
      result = n * factorial(n - 1);
    }
    return result;
  }
  console.log('factorial(n2)', factorial(n2)) //aantal possibilities berekenen
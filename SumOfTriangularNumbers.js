/* 
[01]
02 [03]
04 05 [06]
07 08 09 [10]
11 12 13 14 [15]
16 17 18 19 20 [21]
*/

// If 4 is given: 1 + 3 + 6 + 10 = 20.

function sumTriangularNumbers(n) {
  let sum = 0,
      total = 0;
  
  for(let i = 0; i <= n; i++){
  sum += i*1;
  total += sum;
  }

  return total;
}
// Return an array
function fizzbuzz(n){
  const arr = [];
  for(let i = 1; i <= n; i++) {
    arr.push(i);
  }

  const result = arr.map(number => {
    if(number % 3 === 0 && number % 5 === 0) return number = "FizzBuzz";
    if(number % 5 === 0) return number = "Buzz";
    if (number % 3 === 0) return number = "Fizz";
    return number;
  });

  return console.log(result);
}
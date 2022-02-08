function positiveSum(arr) {
  let sum;
  const positive = arr.map(item => {
    if(item <= 0 || item === undefined) return item = 0;
    return item;
    });

  if(arr.length > 0) {
   return sum = positive.reduce((a, b) => a + b);
  }
  return sum = 0;
}
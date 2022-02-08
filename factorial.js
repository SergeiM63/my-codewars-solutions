function factorial(n) {
  let f = [];
  if(n == 0 || n == 1) return 1;
  if(f[n] > 0) return f[n];
  if(n < 0 || n > 12 ) throw new RangeError(`Параметр должен быть между 0 и 12`);
  return f[n] = factorial(n-1) * n;
}
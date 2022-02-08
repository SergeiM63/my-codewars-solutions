function squares(x, n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(x);
    x = Math.pow(x, 2);
  }
  return arr;
}

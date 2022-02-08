function decToBin(d) {
  if(d === 0) return '0';
  let bin = [];
  
  while(d >= 1) {
    let remainder = d % 2;
    d = Math.trunc(d / 2);
    bin.push(remainder);
  }
  return (bin.reverse().join(''));
}
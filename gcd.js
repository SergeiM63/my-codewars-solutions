function mygcd(x,y){
  const min = Math.min(x, y);
  const max = Math.max(x, y);
  const arr = [];

  for(let i = 0; i <= min; i++) {
    if(max % i === 0 && min % i === 0 ) arr.push(i);
  }

  return Math.max(...arr);
}
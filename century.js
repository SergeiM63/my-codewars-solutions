function century(year) {
  let century = Math.floor(year / 100);
  if(year % 100 === 0) return century;
  return century + 1;
}
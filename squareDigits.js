function squareDigits(num){
  const arrStrings = num.toString().split('');
  const result = Number(arrStrings.map(num => num**2).join(''));
  return result;
}
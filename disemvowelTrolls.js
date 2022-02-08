function disemvowel(str) {
  const regExp = /[aeiou]/gi;
  str = str.replace(regExp, "");
  return str;
}

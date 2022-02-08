function duplicateEncode(word) {
  const obj = {};
  let letter = word.toLowerCase().split("");
  for (let i = 0; i < letter.length; i++) {
    obj[letter[i]] === undefined ? (obj[letter[i]] = 1) : (obj[letter[i]] += 1);
  }

  return letter
    .map((letter) => {
      return obj[letter] === 1 ? "(" : ")";
    })
    .join("");
}

function findShort(s){
  const wordsArr = s.split(/\W+/);
  console.log(wordsArr);
  const length = wordsArr.map(word => word.length);
  console.log(length);
  return console.log(Math.min(...length));
}

findShort('bitcoin take over the world maybe who knows perhaps')
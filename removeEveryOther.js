function removeEveryOther(arr){
  for (let i = 0; i < arr.length; i += 2) {
    arr.splice(i + 1, 1);
    arr.splice(i + 2, 1);
  }
  return arr;
}
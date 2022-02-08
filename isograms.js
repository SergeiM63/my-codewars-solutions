function isIsogram(str){
  if(str === '') return true;
  const set = new Set(str.toLowerCase());
  if (str.length === set.size) return true;
  return false;
}
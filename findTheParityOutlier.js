function findOutlier(integers){
  let even = 0;
  let odd = 0;
  
  integers.forEach(int => {
    int % 2 === 0 ? even++ : odd++ ;
  });
  
  if(even === 1) return integers.find(int => int % 2 === 0);
  if(odd === 1) return integers.find(int => int % 2 !== 0);
  
  return 0;
}
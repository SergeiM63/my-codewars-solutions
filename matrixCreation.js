function getMatrix(number) {
  let resultArr = [];
  let n = 0;

  for(let i = 0; i < number; i++) {
      let arr = [];
      resultArr.push(arr);
      
    for (let j = 0; j < number; j++) {
        n === i && n === j ? arr.push(1) : arr.push(0);
      }
      n++;
  }
  
  return resultArr;
} 

getMatrix(5);

/* 

(1)  =>  [[1]]

(2) => [ [1,0],
         [0,1] ]

       [ [1,0,0,0,0],
         [0,1,0,0,0],
(5) =>   [0,0,1,0,0],
         [0,0,0,1,0],
         [0,0,0,0,1] ]

*/
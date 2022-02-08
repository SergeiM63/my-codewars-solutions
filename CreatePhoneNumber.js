function createPhoneNumber(numbers){
  const startNumber = numbers.slice(0,3).join('');
  const middleNumber = numbers.slice(3, 6).join('');
  const endNumber = numbers.slice(6, numbers.length).join('');

  console.log(`(${startNumber}) ${middleNumber}-${endNumber}`);
  }

  createPhoneNumber([9,1,7,1,3,5,4,2,7,7]);
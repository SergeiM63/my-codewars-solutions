const findSquares = num => {
    const min = Math.floor(num/2);
    const max = num - min;
    console.log( `${max**2}-${min**2}` );
};
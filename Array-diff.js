function arrayDiff(a, b) {
    let arr = [];
    a.forEach(item => {
        if(b.includes(item) === false ) arr.push(item);
    });
    return arr;
}

arrayDiff([1,2],[1]); // [2]
arrayDiff([1,2,2,2,3],[2]); // [1,3]

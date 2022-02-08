function maskify(cc) {
    if(cc.length <= 4) return cc;

    let start = cc.slice(0, -4 );
    let end = cc.slice(-4, cc.length);

    start = start.replace(/[0-9]/g, '#');
    start = start.replace(/[A-Z]/gi, '#');
    
    return start + end;
}

// const  maskify = cc => cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);

maskify('zxiiuq#laa#dng5');
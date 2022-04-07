function isValidWalk(walk) {
    let arrN=[]
    let arrS=[]
    let arrE=[]
    let arrW=[];
    walk.forEach(i=>{
        if (i=='n')arrN.push(1);
        if (i=='s')arrS.push(1);
        if (i=='e')arrE.push(1);
        if (i=='w')arrW.push(1);
    })
    if ((walk.length==10)&&(arrN.length===arrS.length)&&(arrE.length==arrW.length)){
        return true
    } else {
        return false
    }
}
function sumPairs(ints, s) {
    if (ints.length < 2) return undefined;
    let mySet = new Set()
    mySet.add(ints[0]);
    for (let i=1; i < ints.length; i++){
        let num = s-ints[i];
        if (mySet.has(num)){
            return [num,ints[i]];
        }
        mySet.add(ints[i])
    }
    return undefined
}  
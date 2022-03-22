function shiftedDiff(first,second){
    for (let i=0;i<first.length;i++){
        if (first===second){
            return i
        } 
        first=rotar(first, first.length-1)
    }
    return -1
    
}
    function rotar(arr, n) {
        let arrR = arr.split(``)
        for (let i = 0; i < n; i++) {
            let elimi = arrR.shift()
            arrR.push(elimi)
    }
        return arrR.join(``)
}
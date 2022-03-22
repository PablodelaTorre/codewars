function filter_list(l) {
    var arr = []
    for(let i = 0; i<l.length; i++){
        if(Number.isInteger(l[i]) && l[i]>=0){
        arr.push(l[i]) 
        }
    }
    return arr
    
}
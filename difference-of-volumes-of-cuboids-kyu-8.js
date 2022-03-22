function findDifference(a, b) {
    var c = 1
    var d = 1
    for(let i = 0; i<a.length;i++){
      c = c * a[i]
    }
    for(let j = 0; j<b.length;j++){
      d = d * b[j]
    }
    if(c>d){
        return c-d
    }else{
        return d-c
    }
}
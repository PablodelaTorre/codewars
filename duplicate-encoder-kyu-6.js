function duplicateEncode(word){
    let arrW = word.toLowerCase().split('')
    let arrParentesis = arrW.map((i, x, arr) => {
        if(arr.indexOf(i) == arr.lastIndexOf(i)){
            return "("
        } else {
            return ")"
        }
    })
    let parentesis = arrParentesis.join("")
    return parentesis
}
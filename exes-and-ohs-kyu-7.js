function XO(str) {
    let arr = str.split("")
    let numO = 0
    let numX = 0
    arr.forEach(x=>{
        if (x == "o" || x == "O"){
            numO = numO + 1
        } else if (x == "x" || x == "X"){
            numX = numX + 1
        }
        })
    if (numO == numX){
        return true
    } else {
        return false
    }
}
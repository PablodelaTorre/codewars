function squareDigits(num){
    let array = []
    let arr = (num.toString()).split("")
    for (let i = 0; i < arr.length; i++){
        let num = parseInt(arr[i]) 
        let num2 = num * num
        array.push(num2)
    }
    let resultado = array.join("")
    return Number(resultado)
}


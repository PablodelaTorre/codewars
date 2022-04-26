var lastDigit = function(str1, str2){  
    let num = BigInt(str1)
    let num2 = BigInt(str2)
    let resultado = BigInt(num)
    if (num2 == 0){
        return 1
    } else if (num2 == 1){
        resultado = BigInt(num)
        let digit = resultado.toString()
        return Number(digit.substr(-1))
    } else {
        for (let i = 1; i < num2; i++){
            resultado = BigInt(resultado * num)
        }
        let digit = resultado.toString()
        console.log(digit)
        console.log(Number(digit.substr(-1)))
        return Number(digit.substr(-1)) 
    }
}

lastDigit("4", "2")
function persistence(num) {
    let arr = Array.from(num.toString())
    console.log(arr)
    let resultado = 1
    let contador = 0
    if (arr.length > 1){
        for (let i = 0; i < arr.length; i++){
            resultado = resultado * Number(arr[i])
        }
        contador++
        let array = Array.from(resultado.toString())
        console.log(array)
        console.log(resultado)
        resultado = 1
        while(array.length > 1){
            for (let j = 0; j < array.length; j++){
                resultado = resultado * Number(array[j])
            }
            array = Array.from(resultado.toString())
            resultado = 1
            console.log(array)
            contador++
        }
        console.log(contador)
        return contador
        } else {
    return 0
    }
}

persistence(999)
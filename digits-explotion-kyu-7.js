function explode(s) {
    let array = []
    let arr = Array.from(s)
    let arrayCompleto = []
    arr.forEach(item => {
        array.push(parseInt(item))    
    })
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array[i]; j++){
            arrayCompleto.push(array[i])
        }
    }
    return arrayCompleto.join('')
}

explode("351")
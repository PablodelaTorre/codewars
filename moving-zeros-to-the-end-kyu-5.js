function moveZeros(arr) {
    let arrF0 = arr.filter(x => {
        return x === 0
    })
    let arrF = arr.filter(x => {
        return x!==0
    })
    let arrCompleto = [...arrF, ...arrF0]
    return arrCompleto
}
function highAndLow(numbers){
    let arrOrd = numbers.split(" ").sort((a, b) => {
        return b - a
    })
    let array = [...arrOrd[0], ..." ", ...arrOrd[arrOrd.length - 1]]
    return array.join("")
}
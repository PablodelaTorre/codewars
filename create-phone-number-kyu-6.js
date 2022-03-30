function createPhoneNumber(numbers){
    let arr = []
    let arr2 = []
    let arr3 = []
    for (let i = 0; i <= 2; i++){
        arr.push(numbers[i])
    }
    for (let i = 3; i <= 5; i++){
        arr2.push(numbers[i])
    }
    for (let i = 6; i <= 9; i++){
        arr3.push(numbers[i])
    }
    let str = arr.join("")
    let string = "(" + str + ") "
    let str2 = arr2.join("") + "-"
    let str3 = arr3.join("")
    let strComplete = string + str2 + str3
    return strComplete
}
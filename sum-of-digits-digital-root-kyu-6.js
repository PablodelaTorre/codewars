function digital_root(n) {
    let arr = Array.from(n.toString())
    let num = 0
    let arr2 = []
    let num2 = 0
    let arr3 = []
    let num3 = 0
    for (let i = 0; i < arr.length; i++){
        num = num + Number(arr[i])
    }
    console.log(num)
    console.log(arr)
    if (num > 9) {
        arr2 = Array.from(num.toString())
        for (let j = 0; j < arr2.length; j++){
            num2 = num2 + Number(arr2[j])
        }
        if (num2 > 9) {
            arr3 = Array.from(num2.toString())
            for (let x = 0; x < arr3.length; x++){
                num3 = num3 + Number(arr3[x])
            }
            return num3
        } else {
            return num2    
        }
    } else {
        return num
    }
}


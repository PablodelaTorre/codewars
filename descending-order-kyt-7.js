function descendingOrder(n){
    console.log(n)
    let str = n.toString()
    console.log(str)
    let arr = str.split("")
    console.log(arr)
    let arrayNum = []
    for(let i = 0; i < arr.length; i++){
        arrayNum.push(Number(arr[i]))
    }
    console.log(arrayNum)
    const arrRever = arrayNum.sort((a,b) => b - a)
    console.log(arrRever)
    return Number(arrRever.join(""))
}

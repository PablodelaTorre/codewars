function evenAndOdd(num){
    let arrNum = Array.from(num.toString()).map(Number);
    let arre = []
    let arro = []
    let arr = []
    for(let i = 0; i < arrNum.length; i++){
        if (arrNum[i]%2===0){
            arre.push(arrNum[i])
        }else if(arrNum[i] === 0){
            arre.push(arrNum[i])
        }else{
            arro.push(arrNum[i])
        }
    }
    let arreNum = + arre.join("")
    let arroNum = + arro.join("")
    arr.push(arreNum)
    arr.push(arroNum)
    return arr
}
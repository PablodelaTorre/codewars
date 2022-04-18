function solution(number){
    let arrNum = []
    let arrFiltrado = []
    let num3 = 0
    let num5 = 0
    if (number <= 0) {
        return 0
    } else {
        for (let i = 0 ; i < number; i++){
            num3 = 3 * i
            num5 = 5 * i
            if (num3 < number){
                arrNum.push(num3)
            } 
            if (num5 < number){
                arrNum.push(num5)
            }    
        }
    }
    arrFiltrado = new Set(arrNum)
    let sum = [...arrFiltrado].reduce((a,b) => a + b)
    return sum  
}

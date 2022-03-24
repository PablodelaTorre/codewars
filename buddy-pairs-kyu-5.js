                            //Sin terminarr!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function buddy(start,limit) {
    let divisors = []
    let sumN = 0
    let sumM = 0
    let sumMM = 0
    let arr = []
    for (let i = start; i < limit; i++){
        for (let n = 1; n < limit; n++){
            if(i % n===0){
                divisors.push(i) 
                sumN = sumN + n
                sumM = sumN - 1
                for (let a = 1; a < sumM; a++){
                    if (sumM % a===0){
                        sumMM = sumMM + a
                    }
                    if (sumN == sumM && sumMM == n+1){
                        arr.push(n)
                        arr.push(sumM)
                        return arr
                        console.log(arr)
                    }
                }  
            }
        }
    }
}

let t = buddy(1,10)
console.log(t)

                    //Sin terminar!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//(n, m) are a pair of buddy if s(m) = n + 1 and s(n) = m + 1
function findOdd(A) {
    let num = 0
    let res = 0
    for (let i = 0; i < A.length; i++){
        for (let j = 0; j <A.length; j++){
            if(A[i]==A[j]){
                num++
            }
        }
        if (num % 2 !== 0){
            res = A[i]
            break
        }
    }
    return res
}
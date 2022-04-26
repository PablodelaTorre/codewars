function queueTime(customers, n) {
    let num = 0
    let num2 = 0
    if (customers.length === 0){
        return 0
    }
    if (customers.length <= n){
        for (let i = 0; i < customers.length; i++){
            if (customers[i+1] > customers[i]){
                num2 = Number(customers[i+1])
            } else {
                num2 = Number(customers[i])
            }
        }
        return num2
    } else {
        for (let i = 0; i < customers.length; i++){
            num = num + Number(customers[i])
        return num
        }  
    }
}

function findShort(s){
    let arr = s.split(" ")
    let str = arr[0].toString()
    let largo
    if(arr.length == 1){
        return s.length
    } else {
        for (let i = 1; i < arr.length; i++){
            let str2 = arr[i].toString()
            if(str.length < str2.length){
                largo = str.length
            } else {
                str = arr[i].toString()
                largo = str2.length
            }
        }
    }
    return largo
}
function pigIt(str){
    let arr = str.split(" ")
    let arr2 = []
    for (let i = 0; i < arr.length; i++){
        if (arr[i][0] !== "!" && arr[i][0] !== "?"){
            arr[i] = arr[i] + arr[i][0] + "ay"
            arr2.push(arr[i].slice(1, arr[i].length)) 
        } else {
            arr2.push(arr[i][0])
        }
    }
    return arr2.join(" ")
}
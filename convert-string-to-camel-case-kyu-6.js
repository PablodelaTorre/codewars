function toCamelCase(str){
    let arr = []
    if(str.split("").includes("-")){
        arr = str.split("-")
    } else {
        arr = str.split("_")
    }
    let array = []
    for (let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            if(arr[i]==arr[0]){
            array.push(arr[i][j])
            } else if(arr[i][j] == arr[i][0]){
                let string = arr[i][0]
                array.push(string.toUpperCase())
            } else {
            array.push(arr[i][j])
            }
        }
    }
    return array.join("")
}
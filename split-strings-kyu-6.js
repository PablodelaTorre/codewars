function solution(str){
    let str2 = ""
    if (str.length % 2 !== 0){
        str2 = str + "_"
    } else {
        str2 = str
    } 
    
    let arr = str2.split("")
    let array = []
    for (let i = 0; i < arr.length; i++){
        array.push(arr.slice(i, i+2).join(""))
        i++
    }
    return array
}

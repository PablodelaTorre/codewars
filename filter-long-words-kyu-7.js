function filterLongWords(sentence, n) {
    let arr = sentence.split(" ")
    let array = []
    for (let i = 0; i < arr.length; i++){
        if (arr[i].length > n){
            array.push(arr[i])
        }
    }
    return array
}
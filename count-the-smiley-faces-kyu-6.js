function countSmileys(arr) {
    let array = []
    for (let i = 0; i < arr.length; i++){
        if (arr[i]==":)" || arr[i]==":D"|| arr[i]==":~D" || arr[i]==";-D" || arr[i]==":~)"|| arr[i]==";-)" ||arr[i]==":-D" ||arr[i]==":-)" || arr[i]==";~D" || arr[i]==";)" || arr[i]==";~)" ||arr[i]==";D"){
            array.push(arr[i])
        }
    }
    return array.length
}
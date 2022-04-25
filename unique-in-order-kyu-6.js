var uniqueInOrder=function(iterable){
    if(iterable.length === 0) {
        return []
    } else if (typeof iterable == "string"){
        let arr = iterable.split("")
        let array = []
        array.push(arr[0])
        for (let i = 0; i < arr.length; i++){
            if(arr[i+1]!==arr[i] && (typeof arr[i+1] == "number" || typeof arr[i+1] == "string") ){
                array.push(arr[i+1])
            } 
        }
        return array
    } else if(iterable.length !== 0){
        let array = []
        array.push(iterable[0])
        for (let i = 0; i < iterable.length; i++){
            if(iterable[i+1]!==iterable[i] && (typeof iterable[i+1] == "number" || typeof iterable[i+1] == "string") ){
                array.push(iterable[i+1])
            } 
        }
        return array
    } 
}
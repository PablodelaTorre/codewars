function nthChar(words){
    let pal = ""
    let arr = []
    let palabra = ""
    for(let i = 0; i < words.length; i++){
        for(let j = 0; j < words[i].length; j++){
            if(i == j){
                pal = words[i][j]
                arr.push(pal) 
            }
        } 
    } 
    palabra = arr.join('')
    return palabra
}
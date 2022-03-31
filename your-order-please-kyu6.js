function order(words){
    let regularExp = (/\d/)
    let arr = words.split(" ")
    let arrOrd = arr.sort((a, b) =>{
        return a.match(regularExp) - b.match(regularExp);
    })
    return arrOrd.join(" ") 
}
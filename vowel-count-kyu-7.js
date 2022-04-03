function getCount(str) {
    var vowelsCount = 0;
    let arr = Array.from(str)
    arr.forEach((x)=>{
        if (x == "a" || x == "e" || x == "i" || x == "o" || x == "u"){
            vowelsCount++
        }
    })
    return vowelsCount;
}